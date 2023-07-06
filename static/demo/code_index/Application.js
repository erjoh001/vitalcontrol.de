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
var B3=[0,0,240,320];var BI=[0,0,240,40];var EG=[0,0,20,30];var Gr=[6,21,14,25];var
I4=[6,15,14,19];var Ip=[6,9,14,13];var Oc=[209,7,229,37];var Pb=[0,40,240,320];var
Nm=[0,228,240,298];var Cv=" ";var FK=[0,40,240,280];var Od=[0,40,232,280];var Nn=[
0,40,116,160];var Ka=[114,40,230,160];var Oe=[0,160,116,280];var MB=[116,160,232
,280];var Pc=[0,280,116,400];var RL=[116,280,232,400];var Ti=[0,400,116,520];var
Ve=[116,400,232,520];var Vf=[-1,520,115,640];var JT=[232,40,240,280];var RM=[5,40
,235,120];var Vg=[120,140,210,230];var Vh=[20,140,110,230];var X7=[0,0,116,120];
var RN=[0,0,120,120];var X8=[0,0,116,45];var Vi=[0,0,8,200];var Tj=[0,0,8,20];var
Vj=[30,0,210,40];var Qg=[0,0,40,40];var Vk=[7,8,200,40];var Np=[0,0,200,40];var Pd=[
6,1];var Tk="ERROR: Invalid value for ItemHighlighting";var X9=[10,10,40,30];var
Vl=[0,0,120,40];var X_=[60,0,180,40];var X$=[120,0,240,40];var Vm=[0,0,100,40];var
Vn=[83,0,157,40];var RO=[140,0,240,40];var Ya=[0,0,20,40];var Yb=[220,0,240,40];
var AaC=[0,0,300,30];var Qh=[0,30,300,60];var AaD=[0,60,300,90];var Adz=[0,90,300
,120];var Yc=[0,100,300,110];var Vo=[0,50,300,60];var Yd=[0,30,300,40];var AdA=[
40,40];var KM=[0,0,240,80];var AaE=[0,0,240,50];var RP="Cap";var Nq=[0,40,40,80];
var AlR=[200,40,240,80];var AlS=[30,40,210,80];var JU="--";var AlT="%d";var AlU=
"%m";var AfU="%Y";var AaF=" (";var Ye=[0,0,232,80];var AuF="Date";var AuG=[48,40
,88,78];var AuH=[39,40,79,80];var AuI=[80,44,87,77];var AiR=".";var AuJ=[88,44,120
,77];var AuK=[120,44,127,77];var AdB=[127,44,191,77];var AdC=[0,0,80,40];var Kb=
"Text";var AuL=[430,102,430,102];var Vp=[0,0,240,240];var AiS=[232,0,240,240];var
AuM=[0,10,240,240];var AuN="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var AuO="Unhandled option";
var AlV=[0,80,240,280];var AuP="Unhandled animal list action";var ApY="Animal list content not handled.";
var Kc=[0,40,240,80];var AQN="Set Selected";var ApZ="Unhandled AnimalListInfoItemMode ";
var AaG=" %%";var ADl=[0,180,240,220];var ADm=[82,127,167,150];var ADn="Group";var
ADo=[77,91,167,124];var AuQ=[0,0,90,33];var ADp=[4,4,18,29];var AQO=[20,4,34,29];
var AQP=[36,4,50,29];var AQQ=[52,4,66,29];var AQR=[68,4,82,29];var Ap0="ERROR: Unhandled Device::SyncState";
var AuR=":\n";var Qi="{1}";var AuS="{2}";var AQS=[0,49,240,109];var AQT=[0,170,240
,243];var AQU=[0,110,240,170];var AQV=[20,243,220,268];var ADq=[30,8];var ADr="\u2265 ";
var AdD=[0,0,240,160];var AlW=[0,0,0,0];var AQW=[0,0,240,66];var ADs=[10,0,76,66
];var AiT=[33,33];var ADt=[87,0,153,66];var ADu=[164,0,230,66];var ADv="No statistics available";
var AQX="in this environment.";var AQY=" fps";var AQZ="CPU: - %%";var AdE=[0,0,240
,120];var ADw=[130,0,237,20];var Ap1=[20,0,120,20];var ADx=[0,20,240,40];var ADy=[
40,20,100,40];var AuT=[100,20,240,40];var ADz=[0,40,240,60];var AuU=[40,40,100,60
];var AQ0=[100,40,240,60];var AQ1=[0,60,50,80];var AQ2=[100,60,240,80];var AQ3=[
0,80,50,100];var AQ4=[100,80,240,100];var AQ5=[0,100,50,120];var Of=[100,100,240
,120];var AuV=[5,5,15,15];var AQ6="%H";var AQ7="%M";var AQ8="Time";var AQ9=[79,40
,119,78];var AQ_=[125,40,164,80];var AQ$=[86,40,126,80];var Ap2=":";var AuW=[75,
40,115,80];var ADA=[0,0,240,150];var ARa=[60,0,155,40];var ADB=[30,0,65,40];var ARb=[
60,0,100,40];var ARc=[88,0,128,40];var ARd=[60,0,71,40];var ARe=[60,0,74,40];var
ADC=[90,0,123,40];var ARf=[120,0,161,40];var AuX=[120,0,165,40];var ADD=[60,0,88
,40];var ADE=[60,0,95,40];var ARg="Did not expect iterator bigger than number of records";
var ADF=[20,0,240,20];var ARh=[0,38,240,40];var ARi=[0,0,8,4];var Vq=[0,0,240,280
];var Vr=[0,280,240,320];var ARj="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var ARk="]";var ARl="ERROR: Cannot find closing bracket \'}\' in text [";var ARm=
"] opened at index ";var ARn="#";var ARo="ERROR: Invalid parameter: {";var ARp="}";
var AiU=[20,20];var ADG=[0,12];var ARq="ERROR: Not expected Application::FooterFocus, ";
var ARr="%M:%S";var ADH=[30,150,207,170];var ADI=[20,70,217,194];var AuY="Unhandled item.";
var RQ=[0,80,240,120];var ARs="Unhandled Overlay Menu ";var ARt="Invalid bootloader message: ";
var ARu="Unknown USBState: ";var Ap3="Invalid fader";var ARv=[2,4,32,40];var ARw=[
29,4,80,40];var ARx=[120,4,200,40];var ARy=[80,0,114,40];var ARz="-1";var ARA="< ";
var Ap4=[0,0,232,40];var ARB=[22,40,180,80];var ARC=[2,40,22,80];var ARD=[23,40,
163,80];var ARE=[210,40,230,80];var ARF=[164,40,210,80];var ARG=[169,43,205,77];
var ARH="ERROR: No outlet assigned";var ARI="Unhandled screen";var ARJ="ERROR: Cannot cache null screen.";
var ARK="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var ADJ="Untreated Rating Method type!";var Ap5="Unhandled animal type";var ARL=[
5,60,235,140];var ARM=[0,130,240,196];var ARN=[49,240,229,280];var AuZ="Implement in derived classes!";
var AiV="Implement in derived class";var AfV=[0,40,230,120];var Au0=[0,120,230,200
];var AlX=[0,200,230,280];var AfW=[0,280,230,360];var ARO=[0,360,230,440];var Ap6=[
230,40,238,280];var ADK="WARNING: Unhandled filter field: ";var AdF="Should not happen.";
var ADL="Invalid Boolean item";var Yf=[0,120,240,160];var AiW=[0,160,240,200];var
AlY=[0,200,240,240];var ARP=[1152,11,1392,51];var ARQ=[1152,51,1392,91];var ARR=[
1152,91,1392,131];var ARS=[1152,131,1392,171];var ART=[1152,171,1392,211];var Ap7=[
0,240,240,280];var ADM=[10,0,240,40];var ADN=[190,0,230,40];var ARU=[60,3,95,39];
var ARV=[95,4,200,40];var ARW=[3,3];var ARX=[6,6];var ARY=[0,4,40,40];var ARZ=[39
,5,197,35];var ADO=[40,0,200,40];var AR0="Illegal shifting direction";var ADP=[0
,0,160,30];var ADQ=[0,0,25,30];var ADR=[27,0,52,30];var ADS=[54,0,79,30];var ADT=[
81,0,106,30];var ADU=[108,0,133,30];var ADV=[135,0,160,30];var AR1="Internal queue error";
var AR2="ERROR: No corresponding Id ";var AR3=" found.";var AR4="ERROR: Error in range test";
var AR5=[120,67,210,157];var AR6=[0,40,240,70];var AR7=[20,67,110,157];var Au1=[
0,160,240,280];var ADW=[20,77,90,147];var AR8=[0,0,210,40];var ADX=[195,0,235,40
];var AiX=[0,40,232,120];var AfX=[0,120,232,200];var AR9=[0,40,232,200];var AiY=[
0,200,232,280];var AR_=[0,320,240,400];var Au2=[0,120,53,200];var AiZ=[0,280,232
,360];var AdG="%%";var AR$=[0,360,232,440];var ADY=[0,440,232,520];var Ap8=[0,360
,232,400];var ASa=[0,400,232,480];var Nr=")";var ASb="/";var ASc=[5,0,88,30];var
ASd=[88,0,240,30];var ASe="276000312345678";var ADZ=[5,30,100,60];var AD0=[100,30
,240,60];var ASf="Manufacturer";var ASg="Country";var ASh=[5,60,240,90];var ASi=
"Niedersachsen";var ASj=[5,90,145,120];var ASk=[140,90,240,120];var ASl="Protocol";
var ASm=[0,0,120,100];var AD1=[0,40,116,120];var ASn=[40,80,92,107];var AD2=[0,0
,50,23];var AD3="ERROR: Unhandled Device::MeasureState";var Au3=[0,120,240,280];
var ASo=[178,159,248,203];var AD4=[10,145,170,225];var ASp=[0,61,240,101];var ASq=[
0,0,40,23];var ASr=[101,113,141,136];var ASs=[101,235,141,258];var ASt=[69,288,101
,313];var ASu=[0,40,240,200];var Au4=[0,200,240,280];var AD5=[0,280,240,360];var
Au5="\u2264 ";var ASv=[0,80,94,160];var Au6=[94,80,184,160];var AD6=[184,80,240,
160];var ASw=[197,105,231,139];var ASx=[105,101,173,127];var ASy=[7,101,75,127];
var ASz=[94,125,184,151];var ASA=[2,125,92,151];var ASB=[0,70,240,101];var ASC=[
0,106,240,280];var ASD=[30,40,240,70];var ASE=[0,40,30,70];var ASF="\u278B";var ASG=[
0,0,240,175];var ASH=[0,0,232,175];var ASI=[232,0,240,175];var ASJ="Text Here !";
var ASK=[200,0,240,40];var AD7=[0,40,230,280];var AD8="1";var AD9="2";var AD_="3";
var AD$="4";var AEa=[0,360,240,400];var AEb="ERROR: invalid item class.";var ASL=[
10,220,250,260];var ASM=[185,0,225,40];var ASN="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var ASO="ERROR: Received more actions than expected!";var ASP=", ";var ASQ=[
0,0,58,58];var ASR=[0,0,60,60];var ASS=[30,0,58,20];var AST=[7,6,25,24];var ASU=[
30,60,130,160];var ASV=[0,0,28,20];var ASW=[4,3,40,24];var ASX=[0,0,42,27];var Au7=[
0,0,17,17];var ASY="Unknown direction of counting enum value: ";var ASZ="Unknown id generation method enum value: ";
var Au8="Invalid animal id generation method: ";var Au9="Unhandled popup id";var
Yg="0";var Ap9=";";var AEc=[0,400,230,480];var AS0=[5,120,235,200];var AS1=[0,640
,230,760];var AEd=[0,0,300,200];var AS2=[20,40,220,80];var AEe=[20,80,220,280];var
AS3=[140,0,188,40];var AS4="ERROR: Row containing birth weight could not be loaded";
var AS5=[0,440,230,520];var Ap_="ID";var AS6=[40,40,198,70];var AS7="Extra info: ";
var AEf=" -";var AS8=[0,0,230,120];var AS9=[0,0,230,40];var AS_=[0,80,230,120];var
AS$="\xB0Brix";var Yh=[0,320,230,400];var ATa=[0,410,230,490];var ATb="ERROR: aNumberOfDays can not be < 0 ";
var ATc="{WEIGHTGAIN} ";var ATd="\xB1";var AEg="+";var ATe="{WEIGHTGAIN}";var ATf=
"{DAYS}";var ATg="ERROR: aString can not be null";var ATh=[166,70,240,114];var ATi=[
0,60,160,120];var ATj=[30,0,240,60];var AEh=[1,6,29,54];var ATk=[30,60,240,120];
var ATl="Con";var ATm=[70,50,170,70];var AEi="Unhandled Device::NaisIdValidationResult: ";
var AEj="Unhandled PopupId";var ATn=[110,123,230,248];var ATo=[5,0,250,40];var ATp=[
102,0,186,40];var ATq=[153,0,240,40];var Qj="-";var Ap$=[170,0,240,40];var AEk=[
220,0,320,30];var AEl=[200,20,300,50];var AlZ=[180,0,180,40];var Al0=[170,0,170,
40];var Au_="Untreated state";var ATr="ERROR: Animal id scanned in an unexpected state : ";
var AEm="ERROR: Null animal id scanned.";var ATs=[40,40,235,100];var ATt=[120,100
,210,190];var ATu=[20,100,110,190];var ATv=[0,40,40,100];var ATw="\u278A";var ATx=
"Action untreated";var ATy="ERROR: No corresponding ";var ATz=" action found!";var
ATA="Unhandled action: ";var ATB=[0,190,240,220];var ATC=[0,220,232,280];var ATD=[
5,190,235,270];var ATE=[232,60];var ATF=[0,2];var ATG=[58,58];var ATH="A";var ATI=[
56,0,156,40];var Al1=[156,0,240,40];var AEn=" 7 ";var AEo=[40,0,156,40];var AEp=
"/-1/-2";var Au$=[72,0,144,40];var AaH="\n";var AEq="(";var ATJ=[72,0,156,40];var
AEr="%y/%m";var ATK=[70,0,240,40];var Ava=[70,0,120,40];var ATL=[160,0,245,40];var
ATM="- ";var ATN=" - ";var ATO="{parc}{clr3}";var ATP="{clr0}/^{clr2}";var ATQ="{clr0}/^{clr1}";
var AEs=[0,0,85,40];var Al2="?";var AEt=[0,0,120,140];var ATR=[0,0,116,40];var AEu=[
15,0,100,40];var Ai0=[110,0,200,40];var Ai1=[0,0,34,34];var ATS=[129,0,157,40];var
Al3=[0,0,25,25];var ATT="\u2611";var AEv="\u2610";var AEw=[5,0,72,40];var ATU=[150
,0,240,40];var ATV=[72,0,139,40];var Avb="Unvalid content class: ";var Aqa=[0,320
,240,360];var ATW=[144,0,170,40];var ATX=[187,0,213,40];var ATY=[207,10,233,50];
var ATZ=[247,20,273,60];var AT0=[140,0,150,100];var AT1=[165,0,175,100];var AT2=[
185,0,195,100];var AT3=[205,0,215,100];var AT4=[211,0,233,40];var AT5=[189,0,211
,40];var AT6=[167,0,189,40];var AT7=[145,0,167,40];var AEx=[5,0,240,40];var Yi=[
10,0,10,40];var AT8="= \u2211 ";var Avc=[125,0,240,40];var AT9=[130,0,170,40];var
AEy="\xD8 ";var AT_=[100,10,116,36];var AEz=[117,10,133,36];var AT$=[135,10,151,
36];var AUa="Implement in derieved class";var Al4=[0,80,240,240];var Aqb=[0,120,
232,160];var Aqc=[0,160,232,200];var Aqd=[0,200,232,240];var Avd=[0,240,232,280];
var Al5=[0,320,232,360];var AUb=[0,100];var AUc=[0,40,240,240];var AUd=[0,50000];
var AUe=[0,500];var AUf=[0,0,240,105];var AUg=[0,105,240,210];var Bjs=[0,40,240,
81];var Bjt=[0,81,240,122];var Bju=[0,122,240,163];var Bjv=[0,163,240,205];var Bjw=[
0,205,240,240];var Bjx=[0,200];var Bjy=[0,40,240,73];var AUh=[0,0,30,40];var Bjz=[
0,40,30,80];var AUi=[60,40];var AUj=[60,0];var BjA=[10,0,40,40];var BjB=[0,190,240
,260];var BjC=[0,130,240,190];var A5x=[40,40,200,130];var BjD=[90,230,170,253];var
BjE=[80,190,170,223];var BjF=[0,130,240,180];var BjG=[0,250,240,280];var BjH=[129
,0,156,40];var BjI=[72,0,100,40];var BjJ=[100,0,129,40];var BjK=[78,8,103,33];var
A5y=[0,0,300,120];var BjL=[1,-1];var BjM=[20,40,240,120];var BjN=[20,0,240,40];var
BjO=[0,118,240,120];var BjP=[0,20,130,40];var BjQ=[130,20,240,40];var BjR=[0,0,10
,20];var A5z="\u2191";var BjS=[230,0,240,20];var AEA=[0,40,232,80];var BjT=[0,80
,232,160];var A5A=[0,160,230,240];var AEB=" p. p.";var AUk="Unknown animal type";
var AUl=[80,0,140,40];var BjU=[50,0,172,40];var BjV=[172,0,240,40];var BjW=[0,90
,240,92];var BjX="Unhandled menu item";var A5B=[0,0,50,30];var AEC=[0,0,30,30];var
BjY="Unhandled AnimalIdAutoGenerationMethod: ";var BjZ=[0,80,230,160];var Bj0=[0
,240,230,320];var Bj1="No AnimalActionTemperatureScreen found!";var Bj2="840003123456789";
var Bj3=[40,0,230,40];var Bj4=[50,10,230,30];var AUm="No AnimalMultiInfoScreen found!";
var AED=[0,0,25,40];var A5C="/^";var A5D="?/?";var Bj5=[100,4,180,40];var Bj6=[65
,0,99,40];var Bj7=[165,0,200,40];var A5E=[0,0,60,40];var A5F="9999/^9999";var Bj8=
"Invalid index: ";var Bj9="Unknown AnimalIdGenerationMethod: ";var Bj_="Invalid gender: ";
var Aqe="Invalid input state: ";var Bj$="Unhandled AnimalIdGenerationMethod";var
Bka=[42,35,67,75];var Bkb=[5,35,39,75];var Bkc=[70,40,228,70];var Bkd="Invalid direction for setting focus";
var Al6="Invalid index";var Bke="Unvalid direction";var Bkf=[0,0,42,30];var A5G=[
22,0,42,30];var Bkg=[20,0,40,30];var Bkh=" %% ";var Bki=[0,70,240,220];var Bkj=[
0,237,240,307];var Bkk="\n44 %% done";var Bkl=[0,0,166,30];var AEE=[0,0,12,30];var
Ave=[14,0,26,30];var AUn=[28,0,40,30];var AUo=[42,0,54,30];var AUp=[56,0,68,30];
var AUq=[70,0,82,30];var AUr=[84,0,96,30];var AUs=[98,0,110,30];var A5H=[112,0,124
,30];var AUt=[126,0,138,30];var Bkm=[140,0,152,30];var Bkn=[154,0,166,30];var A5I=[
20,0,46,30];var Bko="\u2642";var Bkp="{fnt3}\u2642{fnt1}";var Bkq="\u2640";var Bkr=
"{fnt3}\u2640{fnt1}";var Bks="{parc}";var Bkt=[30,30,210,80];var Bku="Implement in derieved class!";
var Bkv=[60,4,226,34];var A5J=[30,4,58,34];var A5K=[4,0,27,40];var Bkw=[116,4,228
,34];var Bkx=[60,4,86,34];var Bky=[88,4,114,34];var AUu="Implement in derived class!";
var A5L="Implement in derived class.";var Bkz="Invalid nais id view: ";var BkA=[
0,35,240,75];var BkB=[0,0,110,30];var BkC=[0,0,26,30];var BkD="100";var AUv="\n\n";
var BkE=[240,240];var BkF=[0,240];var BkG="Unknown rated attribute: ";var BkH=[120
,80,240,280];var BkI=[0,80,120,280];var AEF=" %% (";var Avf=" \xB1 ";var Avg=" (n = ";
var AUw=[0,80,232,120];var BkJ=[0,242,232,282];var AUx=[0,280,232,320];var BkK=[
35,0,200,40];var BkL=[1,0,31,40];var BkM=[32,40];var BkN=[32,0];var BkO=[3,0,83,
40];var A5M=[180,0,240,40];var BkP=[120,0,180,40];var BkQ=[65,0,125,40];var BkR=[
0,0,120,200];var BkS=[0,40,120,150];var A5N=[15,160,60,190];var A5O=[60,160,105,
190];var BkT=[0,65,240,135];var BkU=[10,112,170,192];var BkV=[178,129,248,173];var
BkW=[0,40,240,110];var BkX=[10,98,170,178];var BkY=[178,112,248,156];var BkZ=[85
,190,160,265];var Bk0=[89,194,155,260];var Bk1=[26,190,111,250];var Bk2=[125,181
,225,211];var Bk3=[100,220,183,250];var Bk4="38.7";var Bk5=[180,220,225,250];var
Bk6="\xB0C";var Bk7=[0,99,240,178];var Bk8=[100,280,140,320];var Bk9=[0,26,240,105
];var A5P=[30,40];var A5Q=[30,0];var Bk_=[149,0,200,40];var Bk$=[145,40];var Bla=[
145,0];var Blb=[38,0,88,40];var A5R=[0,0,35,40];var Blc=[0,0,50,40];var Bld=[95,
0,145,40];var Ble=[65,5,223,35];var Blf=[20,0,40,40];var Blg=[72,0,140,40];var A5S=
"\n(";var Blh="%y/%m/%d";var Bli="%y ";var Blj=" %m ";var Blk=" %d ";var Bll="20";
var Blm=[225,0,240,40];var Bln=[0,400,232,440];var Blo=[0,440,232,480];var Blp=[
0,480,232,520];var Blq=[0,520,232,560];var Blr=[0,560,232,600];var Bls=[0,598,232
,638];var Blt=[5,0,215,40];var Blu=[215,8,240,33];var Blv="Implement in dervied class.";
var Blw="ERROR: Unhandled temperature unit: ";var AEG="ERROR: Unhandled mass unit: ";
var Blx=[-1,160,115,280];var Bly=[114,160,230,280];var AUy=[116,40,232,160];var Avh=
"Unknown weight class index: ";var Blz="< 35";var BlA="35 - 40";var BlB="40 - 45";
var BlC="45 - 50";var BlD="\u2265 50";var BlE="< 80";var BlF="80 - 90";var BlG="90 - 100";
var BlH="100 - 110";var BlI="\u2265 110";var A5T="Unknown mass unit";var BlJ=[143
,0,193,40];var A5U=[192,0,240,40];var BlK=[44,28,44,28];var BlL="0 %%";var BlM=[
120,40,236,160];var BlN=[4,160,120,280];var BlO=[123,160,239,280];var BlP=[30,0,
155,40];var A5V="\u2620";var BlQ=[380,150,380,190];var A5W=[105,0,155,50];var BlR=[
190,1,240,41];var BlS=[72,0,108,40];var BlT=[108,0,180,40];var BlU=[60,0,94,40];
var BlV=[94,0,200,40];var BlW="Scroll direction not supported.";var BlX=[44,0,207
,40];var BlY=[207,0,240,40];var BlZ="99";var Bl0="Unknown birth type";var Bl1=[44
,0,189,40];var Bl2=[5,0,44,40];var Bl3=[44,0,240,40];var Bl4=[240,0,240,40];var Bl5=
"\u25C9";var A5X="\u25CB";var Bl6=[75,4,215,34];var Bl7=[47,4,73,34];var A5Y=[17
,4,45,34];var Bl8=[0,0,138,30];var Bl9=[47,4,215,34];var AUz="Unhandled MotherSelectionFilterMode: ";
var Bl_="Read only!";var Bl$="actions array too small to hold all actions";var Bma=[
120,40];var Bmb=[120,0];var Bmc=[5,0,115,40];var Bmd=[0,0,205,40];var Bme=[0,1,37
,37];var Bmf=[40,4,170,34];var Bmg=[175,1,205,37];var Bmh=[0,0,37,40];var Bmi=[115
,98,205,188];var Bmj=[0,40,235,100];var Bmk=[2,200,240,280];var Bml=[0,0];var Bmm=[
33,63];var Bmn=[25,56];var Bmo="Unknown transponder image type: ";var AEH=[0,0,82
,82];var Bmp=[0,0,81,26];var Bmq=" 01234";var Bmr=[105,120,195,210];var Bms=[10,
140,100,230];var A5Z="Unhandled EartagNrAssignmentMode: ";var Bmt="Unhandled Gender";
var Bmu=[10,35,35,75];var Bmv=[44,40,202,70];var Bmw=[204,35,232,75];var A50="Unhandled BackupError: ";
var Bmx="Unvalid FatoryResetScope";var Bmy="Unhandled PopupId: ";var Bmz=[-4,160
,236,240];var BmA=[144,0,192,40];var BmB=[144,0,240,40];var BmC=[195,0,245,50];var
BmD=[120,0,120,40];var BmE=[140,0,240,30];var BmF=[30,0,232,40];var BmG=[60,0,160
,40];var BmH=[160,0,200,40];var BmI=[150,17,200,40];var BmJ=[155,40];var BmK=[155
,0];var BmL=[146,80,240,160];var BmM=[56,80,146,160];var BmN=[0,80,56,160];var BmO=[
13,107,47,141];var BmP=[74,109,104,139];var BmQ=[50,100,130,150];var BmR=[55,112
,145,140];var BmS=[146,112,236,140];var BmT=[150,86,223,110];var BmU=[0,40,240,120
];var BmV=[5,40,235,104];var BmW=[120,108,226,218];var BmX=[20,120,110,210];var BmY=[
5,223,235,280];var BmZ=[0,0,64,30];var Bm0=[44,0,64,30];var Bm1=[185,5,225,35];var
Bm2=[170,5,234,35];
C.AIq={Device:null,AZ8:null,FZ:null,Init:function(aArg){},DriveCursorHitting:function(
RS,By,E6){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.FZ._Init.call(this.
FZ={I:this},0);this.__proto__=C.AIq;this.G(B3);this.J(this.FZ,0);this.Device=A._GetAutoObject(
A.Device.Device);this.AZ8=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var KN=
this._variants();if(KN){this.K={};KN._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.FZ._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.FZ.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AZ8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.abq.AZc._variants();
},K:null,_className:"Application::Application"};C.Apx=[240,320];C.Aw={Background:
null,D9:null,Azr:null,AlJ:0,Init:function(aArg){A.ow([this,this.AU6],this);A.ow([
this,this.A9R],this);},Lv:function(H){},AU6:function(s){this.Lv(s);},CE:function(
H){},AEI:function(s){this.CE(s);},Fc:function(H){},Avi:function(s){this.Fc(s);},
Dt:function(E){if(this.Azr===E)return;this.Azr=E;A.ow([this,this.A9R],this);},A9R:
function(H){var B;if(!!this.Azr)this.D9.Z2((C.BU.isPrototypeOf(B=A._NewObject(this.
Azr,0))?B:null));else this.D9.Z2(null);},_Init:function(aArg){C.Zi._Init.call(this
,aArg);A.abh.AH._Init.call(this.Background={I:this},0);C.D9._Init.call(this.D9={
I:this},0);this.__proto__=C.Aw;this.Background.AW(0x3F);this.Background.G(B3);this.
Background.L(A.iF.CP);this.D9.G(BI);this.D9.An(false);this.J(this.Background,-1);
this.J(this.D9,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Zi;this.Background.
_Done();this.D9._Done();C.Zi._Done.call(this);},_ReInit:function(){C.Zi._ReInit.
call(this);this.Background._ReInit();this.D9._ReInit();},_Mark:function(D){var B;
C.Zi._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"};C.US={
J3:null,Xw:function(E){var B;if(this.J3===E)return;if(!!this.J3)this.AnT(this.J3
,null,null,null,[B=this.J3,B.Avi],null,false);this.J3=E;if(!!this.J3)this.Air(this.
J3,null,null,null,null,null,null,[B=this.J3,B.AEI],null,false);},AAF:function(){
return this.J3;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.US;this.G([0,0,C.Apx[0],C.Apx[1]]);},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.J3)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.NP={Tr:null,Q:null,Alp:null,XH:null,MZ:null,NO:null,Sj:null,Sk:null,ACd:255,
Oo:function(H){var F;if(!!this.Q){this.AWz();var AaY=(F=this.Q,F[1].call(F[0]));
if(AaY>20)this.NO.L(A.iF.E1);else this.NO.L(A.iF.FY);this.NO.L((this.NO.AV&0x00FFFFFF
)|(this.Ajt(AaY,0,30)<<24));this.Sj.L((this.Sj.AV&0x00FFFFFF)|(this.Ajt(AaY,31,60
)<<24));this.Sk.L((this.Sk.AV&0x00FFFFFF)|(this.Ajt(AaY,61,100)<<24));}},AU4:function(
s){this.Oo(s);},AF:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.
AU4],this.Q,0);this.Q=E;if(!!E)A.za([this,this.AU4],E,0);if(!!E)A.ow([this,this.
AU4],this);},AXA:function(H){var F;if(!!this.Alp)this.XH.An((F=this.Alp,F[1].call(
F[0])));else this.XH.An(false);this.A3U(255);},A3N:function(E){if(A.z_(this.Alp,
E))return;if(!!this.Alp)A.zn([this,this.AXA],this.Alp,0);this.Alp=E;if(!!E)A.za([
this,this.AXA],E,0);if(!!E)A.ow([this,this.AXA],this);},A3U:function(E){if(this.
ACd===E)return;this.ACd=E;if(!!this.Tr)this.Tr.L((this.Tr.AV&0x00FFFFFF)|((E&0xFF
)<<24));},Ajt:function(AU_,A7a,BpQ){if(AU_<A7a)return 0;else if((AU_>=A7a)&&(AU_<
BpQ))return this.ACd&0xFF;else return 255;},AWz:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.Tr=this.Sk;else if((F=this.Q,F[1].call(F[0]))>
30)this.Tr=this.Sj;else this.Tr=this.NO;}else this.Tr=null;},Beb:function(){return this.
ACd;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);C.XH._Init.call(this.XH={
I:this},0);A.abh.Am._Init.call(this.MZ={I:this},0);A.abh.AH._Init.call(this.NO={
I:this},0);A.abh.AH._Init.call(this.Sj={I:this},0);A.abh.AH._Init.call(this.Sk={
I:this},0);this.__proto__=C.NP;this.G(EG);this.XH.FI(2000);this.MZ.G(EG);this.MZ.
L(A.iF.Text);this.NO.G(Gr);this.NO.L(A.iF.E1);this.Sj.G(I4);this.Sj.L(A.iF.E1);this.
Sk.G(Ip);this.Sk.L(A.iF.E1);this.J(this.MZ,0);this.J(this.NO,0);this.J(this.Sj,0
);this.J(this.Sk,0);this.XH.Q=[this,this.Beb,this.A3U];this.MZ.Ar(A.zW(A.abi.AIA
));},_Done:function(){this.__proto__=A.Core.O;this.XH._Done();this.MZ._Done();this.
NO._Done();this.Sj._Done();this.Sk._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.XH._ReInit();this.MZ._ReInit();this.NO._ReInit(
);this.Sj._ReInit();this.Sk._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.Tr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Alp)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.XH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.NO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.XH={_Init:function(aArg){A.abm.FC._Init.call(
this,aArg);this.__proto__=C.XH;this.AiC=true;this.BW=0;this.Ch=255;},_className:
"Application::PulseAnimation"};C.D9={FZ:null,AR:null,Background:null,NP:null,Bi:
null,C2:null,Kr:0,Asd:0,Ase:0,Amq:0,Lq:false,Ko:false,QB:false,Ai:function(Ae){var
B;A.Core.O.Ai.call(this,Ae);var FT=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);
var Fu=this.Bi.Bw;if(!FT){this.Amq=A.iF.CP;this.Kr=A.iF.Text;}else if(Fu){this.Amq=
this.Asd;this.Kr=this.Ase;}else if(Fv){this.Amq=this.Asd;this.Kr=this.Ase;}else{
this.Amq=A.iF.CP;this.Kr=A.iF.Text;}this.Background.L(this.Amq);if(!!this.FZ){this.
FZ.AcM(this.Amq);this.FZ.CW(this.Kr);}this.Lq=FT;this.Ko=Fv;this.QB=Fu;},Pr:function(
H){this.Al();A.ow(this.AR,this);},Agz:function(H){if(this.C2.Aag)return;this.Al(
);if(this.Bi.Bw){A.ow(this.AR,this);this.Bi.An(false);}this.Bi.An(true);},Z2:function(
E){if(this.FZ===E)return;if(!!this.FZ)this.HW(this.FZ);this.FZ=E;if(!!this.FZ)this.
J(this.FZ,0);this.A8(E);this.Al();},A3z:function(E){if(this.Asd===E)return;this.
Asd=E;this.Al();},A3A:function(E){if(this.Ase===E)return;this.Ase=E;this.Al();},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={
I:this},0);C.NP._Init.call(this.NP={I:this},0);A.Core.Timer._Init.call(this.Bi={
I:this},0);A.Core.B0._Init.call(this.C2={I:this},0);this.__proto__=C.D9;var B;this.
G(BI);this.Background.AW(0x3F);this.Background.G(BI);this.Background.L(A.iF.CP);
this.NP.G(Oc);this.Kr=A.iF.Text;this.Bi.P3(0);this.Bi.UM(50);this.C2.Filter=1;this.
Asd=A.iF.A6;this.Ase=A.iF.Bg;this.Amq=A.iF.Text;this.J(this.Background,0);this.J(
this.NP,0);this.NP.AF([B=A._GetAutoObject(A.Device.Device),B.AsX,B.Avj]);this.NP.
A3N([B=A._GetAutoObject(A.Device.Device),B.AsZ,B.Avk]);this.Bi.Mw=[this,this.Pr];
this.C2.B1=[this,this.Agz];},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.NP._Done();this.Bi._Done();this.C2._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.
NP._ReInit();this.Bi._ReInit();this.C2._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.FZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.C2)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.Wc={Acx:null,S4:null,CE:function(H){if(this.K&&this.K.CE
)return this.K.CE.apply(this,arguments);else return C.Aw.CE.apply(this,arguments
);},Fc:function(H){if(this.K&&this.K.Fc)return this.K.Fc.apply(this,arguments);else
return C.Aw.Fc.apply(this,arguments);},_Init:function(aArg){C.Aw._Init.call(this
,aArg);A.abh.Am._Init.call(this.Acx={I:this},0);A.abh.Text._Init.call(this.S4={I:
this},0);this.__proto__=C.Wc;this.Acx.G(Pb);this.S4.G(Nm);this.S4.R(A.jm);this.S4.
L(A.iF.Text);this.S4.W(false);this.J(this.Acx,0);this.J(this.S4,0);this.Acx.Ar(null
);this.S4.Y(A.zW(A.eV.Gg));var KN=this._variants();if(KN){this.K={};KN._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.Aw;this.Acx._Done();this.S4._Done();C.Aw._Done.call(this);},_ReInit:function(){
C.Aw._ReInit.call(this);this.Acx._ReInit();this.S4._ReInit();this.S4.Y(A.zW(A.eV.
Gg));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Aw._Mark.call(
this,D);if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S4)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.abt.
Wc._variants();},K:null,_className:"Application::BootScreen"};C.APO={Aw5:function(
H){A._GetAutoObject(C.A1).Afu(2);},_Init:function(aArg){C.Aw._Init.call(this,aArg
);this.__proto__=C.APO;this.Background.L(0xFF000000);this.D9.W(false);},_className:
"Application::SleepScreen"};C.Asq={EA:null,Ac:null,Wn:null,Iz:null,T1:null,Wf:null
,T2:null,Wd:null,Wi:null,Sn:null,Wh:null,Wo:null,AD:null,C3:function(){this.Dz(this
);},Init:function(aArg){var B;A.za([this,this.Dz],[B=A._GetAutoObject(A.Device.Device
),B.AoC,B.Aqf],0);A._GetAutoObject(A.Device.Helper).Aiv();this.A8(this.T1);this.
N.Cm(A.zW(A.abi.AzY));A.ow([this,this.Dz],this);},A8:function(E){var B;var AXg=this.
A6;C.Aw.A8.call(this,E);if((this.A6!==AXg)&&(!!this.A6&&((this.A6.S&0x400)===0x400
))){var AFY=A._NewObject(A.abm.ACa,0);AFY.FI(250);AFY.IF(1);AFY.UP(6);this.Ac.IA(
this.A6,true,AFY,null);}},CE:function(H){this.AYv(this);A._GetAutoObject(A.Device.
Device).Aq.Bo(null);A._GetAutoObject(A.Device.Device).Bt.Bo(null);A._GetAutoObject(
A.Device.Helper).Aiv();A._GetAutoObject(A.Device.Helper).Apr();},FX:function(H){
var B;this.AD.N0((B=this.Ac.Dd(0x1))[3]-B[1]);this.AD.N4((B=this.Ac.M)[3]-B[1]);
this.AD.N2(-this.Ac.Br[1]);},H4:function(H){var Ce=(C.E3.isPrototypeOf(H)?H:null
);if(!Ce)return;if(Ce===this.T1)A._GetAutoObject(C.A1).BX(34);else if(Ce===this.
Wf)A._GetAutoObject(C.A1).BX(33);else if(Ce===this.Wi)A._GetAutoObject(C.A1).BX(
78);else if(Ce===this.T2)A._GetAutoObject(C.A1).BX(8);else if(Ce===this.Wd)A._GetAutoObject(
C.A1).BX(56);else if(Ce===this.Sn)A._GetAutoObject(C.A1).BX(25);else if(Ce===this.
Wn)A._GetAutoObject(C.A1).BX(88);else if(Ce===this.Iz)A._GetAutoObject(C.A1).BX(
79);else if(Ce===this.Wo)A._GetAutoObject(C.A1).BX(6);else if(Ce===this.Wh)A._GetAutoObject(
C.A1).BX(72);},BsS:function(H){A._GetAutoObject(A.Device.Device).AcP(!A._GetAutoObject(
A.Device.Device).AkA);},Dz:function(H){if(A._GetAutoObject(A.Device.Device).AkA)
this.N.GX((A.z2(A.abg.A1r)+Cv)+A.z2(A.abg.Off).toLowerCase());else this.N.GX((A.
z2(A.abg.A1r)+Cv)+A.z2(A.abg.A12).toLowerCase());},Aw4:function(H){A._GetAutoObject(
A.Device.Device).Cn(1);},AYv:function(H){A._GetAutoObject(A.Device.Device).Aq.Bo(
A._GetAutoObject(A.Device.Helper).LO());this.T2.Z9(A._GetAutoObject(A.Device.Device
).Aq.Cd().toFixed());},Iu:function(H){A.ow([this,this.FX],this);},_Init:function(
aArg){C.Aw._Init.call(this,aArg);A.abh.AH._Init.call(this.EA={I:this},0);A.Core.
Ac._Init.call(this.Ac={I:this},0);C.E3._Init.call(this.Wn={I:this},0);C.E3._Init.
call(this.Iz={I:this},0);C.E3._Init.call(this.T1={I:this},0);C.E3._Init.call(this.
Wf={I:this},0);C.Rh._Init.call(this.T2={I:this},0);C.E3._Init.call(this.Wd={I:this
},0);C.E3._Init.call(this.Wi={I:this},0);C.E3._Init.call(this.Sn={I:this},0);C.E3.
_Init.call(this.Wh={I:this},0);C.E3._Init.call(this.Wo={I:this},0);C.AD._Init.call(
this.AD={I:this},0);this.__proto__=C.Asq;this.Background.L(A.iF.CP);this.N.An(false
);this.N.W(true);this.Dt(C.Aso);this.EA.AW(0x3F);this.EA.G(FK);this.EA.L(A.iF.CD
);this.Ac.G(Od);this.Ac.Le(9);this.Wn.G(Nn);this.Wn.Aj(true);this.Wn.U(A.z2(A.abg.
GC));this.Iz.G(Ka);this.Iz.Aj(true);this.Iz.U(A.z2(A.abg.A1N));this.T1.G(Oe);this.
T1.Aj(true);this.T1.U(A.z2(A.abg.TQ));this.Wf.G(MB);this.Wf.Aj(true);this.Wf.U(A.
z2(A.abg.Ox));this.T2.G(Pc);this.T2.Aj(true);this.T2.U(A.z2(A.abg.ALi));this.Wd.
G(RL);this.Wd.Aj(true);this.Wd.U(A.z2(A.abg.Animal));this.Wi.G(Ka);this.Wi.Aj(true
);this.Wi.U(A.z2(A.abg.A1v));this.Sn.G(Ti);this.Sn.An(true);this.Sn.Aj(true);this.
Sn.W(true);this.Sn.U(A.z2(A.abg.A0p));this.Wh.G(Ve);this.Wh.Aj(true);this.Wh.U(A.
z2(A.abg.Device));this.Wo.G(Vf);this.Wo.Aj(true);this.Wo.U(A.z2(A.abg.Settings));
this.AD.G(JT);this.J(this.EA,0);this.J(this.Ac,0);this.J(this.Wn,0);this.J(this.
Iz,0);this.J(this.T1,0);this.J(this.Wf,0);this.J(this.T2,0);this.J(this.Wd,0);this.
J(this.Wi,0);this.J(this.Sn,0);this.J(this.Wh,0);this.J(this.Wo,0);this.J(this.AD
,0);this.N.CA=[this,this.BsS];this.N.Cg=[this,this.Aw4];this.Ac.Eu=[this,this.Iu
];this.Wn.AR=[this,this.H4];this.Wn.Dx(A.zW(A.abi.Az2));this.Iz.AR=[this,this.H4
];this.Iz.Dx(A.zW(A.abi.AMi));this.T1.AR=[this,this.H4];this.T1.Dx(A.zW(A.abi.ALm
));this.Wf.AR=[this,this.H4];this.Wf.Dx(A.zW(A.abi.ALx));this.T2.AR=[this,this.H4
];this.T2.Dx(A.zW(A.abi.ALV));this.Wd.AR=[this,this.H4];this.Wd.Dx(A.zW(A.abi.ALq
));this.Wi.AR=[this,this.H4];this.Wi.Dx(A.zW(A.abi.AL2));this.Sn.AR=[this,this.H4
];this.Sn.Dx(A.zW(A.abi.ALK));this.Wh.AR=[this,this.H4];this.Wh.Dx(A.zW(A.abi.ALH
));this.Wo.AR=[this,this.H4];this.Wo.Dx(A.zW(A.abi.AMl));this.Init(aArg);},_Done:
function(){this.__proto__=C.Aw;this.EA._Done();this.Ac._Done();this.Wn._Done();this.
Iz._Done();this.T1._Done();this.Wf._Done();this.T2._Done();this.Wd._Done();this.
Wi._Done();this.Sn._Done();this.Wh._Done();this.Wo._Done();this.AD._Done();C.Aw.
_Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.EA._ReInit();
this.Ac._ReInit();this.Wn._ReInit();this.Iz._ReInit();this.T1._ReInit();this.Wf.
_ReInit();this.T2._ReInit();this.Wd._ReInit();this.Wi._ReInit();this.Sn._ReInit(
);this.Wh._ReInit();this.Wo._ReInit();this.AD._ReInit();this.Wn.U(A.z2(A.abg.GC)
);this.Iz.U(A.z2(A.abg.A1N));this.T1.U(A.z2(A.abg.TQ));this.Wf.U(A.z2(A.abg.Ox));
this.T2.U(A.z2(A.abg.ALi));this.Wd.U(A.z2(A.abg.Animal));this.Wi.U(A.z2(A.abg.A1v
));this.Sn.U(A.z2(A.abg.A0p));this.Wh.U(A.z2(A.abg.Device));this.Wo.U(A.z2(A.abg.
Settings));this.C3();},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.
EA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.T1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wf)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Wi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HomeScreen"};C.S1={Number:null,IK:null,In:null,Sh:
null,ApP:0,Init:function(aArg){var B;A.za([this,this.A6R],[B=A._GetAutoObject(A.
Device.Device),B.AN3,B.AUN],0);A.ow([this,this.A6R],this);},Ai:function(Ae){C.Aw.
Ai.call(this,Ae);this.AlK();},CE:function(H){A._GetAutoObject(A.Device.Device).Adg(
);},Fc:function(H){A._GetAutoObject(A.Device.Device).AlD();},AjQ:function(H){var
F;this.Al();this.Sh.An(A._GetAutoObject(A.Device.Device).ScanState===1);if(A._GetAutoObject(
A.Device.Device).ScanState===2)A._GetAutoObject(A.Device.Helper).Ab7.An(true);if(
!this.Sh.Bw)(F=this.Sh.Q,F[2].call(F[0],this.Sh.BW));},A6R:function(s){this.AjQ(
s);},AlK:function(){switch(A._GetAutoObject(A.Device.Device).ScanState){case 4:this.
Background.L(A.iF.FY);break;case 3:this.Background.L(A.iF.Hy);break;default:this.
Background.L(A.iF.CD);}},Ail:function(E){if(this.ApP===E)return;this.ApP=E;this.
IK.Ail(E);},_Init:function(aArg){C.Aw._Init.call(this,aArg);A.abh.Text._Init.call(
this.Number={I:this},0);C.IK._Init.call(this.IK={I:this},0);A.abh.Am._Init.call(
this.In={I:this},0);A.abm.FC._Init.call(this.Sh={I:this},0);this.__proto__=C.S1;
var B;this.Background.L(A.iF.CD);this.N.W(false);this.Number.G(RM);this.Number.KF(
true);this.Number.L(A.iF.Text);this.IK.G(Vg);this.IK.Ail(0);this.In.G(Vh);this.In.
L(A.iF.A6);this.In.Xx(true);this.Sh.FI(1750);this.Sh.Z6(750);this.Sh.Aie(0);this.
Sh.An(true);this.Sh.BW=3;this.J(this.Number,0);this.J(this.IK,0);this.J(this.In,
0);this.Number.Y(A.zW(A.eV.Au));this.In.Ar(A.zW(A.abi.Az4));this.Sh.Q=[B=this.In
,B.ANQ,B.Cc];this.Init(aArg);},_Done:function(){this.__proto__=C.Aw;this.Number.
_Done();this.IK._Done();this.In._Done();this.Sh._Done();C.Aw._Done.call(this);},
_ReInit:function(){C.Aw._ReInit.call(this);this.Number._ReInit();this.IK._ReInit(
);this.In._ReInit();this.Sh._ReInit();this.Number.Y(A.zW(A.eV.Au));},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.Number)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.IK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ScanScreen"
};C.E3={CN:null,AzN:null,AR:null,Bi:null,C2:null,Background:null,LM:null,NT:null
,PZ:null,Il:null,AZJ:true,Lq:false,Ko:false,QB:false,Init:function(aArg){},Bh:function(
aSize){var B;C.GM.Bh.call(this,aSize);this.LM.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1
]]);this.PZ.G([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);this.NT.G(this.PZ.
M);this.Il.G([].concat(0,this.Il.M.slice(1,4)));this.Il.G(A.aaQ(this.Il.M,aSize[
0]));this.Il.G(A.aaS(this.Il.M,0));this.Il.G([].concat(this.Il.M.slice(0,3),47));
},Ai:function(Ae){var B;C.GM.Ai.call(this,Ae);var FT=((Ae&0x10)===0x10);var Fv=((
Ae&0x20)===0x20);var Fu=this.Bi.Bw;if(!FT){this.PZ.L(A.iF.AkN);this.Il.L(A.iF.CD
);this.NT.W(true);this.NT.L(A.iF.AMy);this.LM.W(false);}else if(Fu){this.PZ.L(A.
iF.Bg);this.Il.L(A.iF.Bg);this.NT.W(false);this.LM.W(true);}else if(Fv){this.PZ.
L(A.iF.Bg);this.Il.L(A.iF.Bg);this.NT.W(false);this.LM.W(true);}else{this.PZ.L(A.
iF.Text);this.Il.L(A.iF.Text);this.NT.W(true);this.NT.L(A.iF.CP);this.LM.W(false
);}this.Lq=FT;this.Ko=Fv;this.QB=Fu;},Pr:function(H){this.Al();A.ow(this.AR,this
);},Agz:function(H){if(this.C2.Aag)return;this.Al();if(this.Bi.Bw){A.ow(this.AR,
this);this.Bi.An(false);}this.Bi.An(true);},U:function(E){if(this.Dk===E)return;
this.Dk=E;this.Il.R(E);},Dx:function(E){if(this.CN===E)return;this.CN=E;this.PZ.
Ar(E);this.NT.Ar(E);},Z1:function(E){if(this.AZJ===E)return;this.AZJ=E;this.Il.W(
E);},Z5:function(E){if(this.AzN===E)return;this.AzN=E;this.LM.Ar(E);this.LM.G(A.
aaN(this.LM.M,E.FrameSize));},_Init:function(aArg){C.GM._Init.call(this,aArg);A.
Core.Timer._Init.call(this.Bi={I:this},0);A.Core.B0._Init.call(this.C2={I:this},
0);A.abh.AH._Init.call(this.Background={I:this},0);A.abh.Am._Init.call(this.LM={
I:this},0);A.abh.Am._Init.call(this.NT={I:this},0);A.abh.Am._Init.call(this.PZ={
I:this},0);C.CH._Init.call(this.Il={I:this},0);this.__proto__=C.E3;this.G(X7);this.
Bi.P3(0);this.Bi.UM(50);this.C2.Filter=1;this.Background.G(RN);this.Background.W(
false);this.LM.AW(0x14);this.LM.L(A.iF.A6);this.LM.Cc(0);this.NT.L(A.iF.CP);this.
NT.Cc(1);this.Il.G(X8);this.J(this.Background,0);this.J(this.LM,0);this.J(this.NT
,0);this.J(this.PZ,0);this.J(this.Il,0);this.Bi.Mw=[this,this.Pr];this.C2.B1=[this
,this.Agz];this.LM.Ar(A.zW(A.abi.M2));this.NT.Ar(A.zW(A.abi.AsC));this.PZ.Ar(A.zW(
A.abi.AsC));this.Il.Y(A.zW(A.eV.Au));this.Il.Bz(A.zW(A.eV.AB));this.Il.C7(A.zW(A.
eV.Cq));this.AzN=A.zW(A.abi.M2);this.Init(aArg);},_Done:function(){this.__proto__=
C.GM;this.Bi._Done();this.C2._Done();this.Background._Done();this.LM._Done();this.
NT._Done();this.PZ._Done();this.Il._Done();C.GM._Done.call(this);},_ReInit:function(
){C.GM._ReInit.call(this);this.Bi._ReInit();this.C2._ReInit();this.Background._ReInit(
);this.LM._ReInit();this.NT._ReInit();this.PZ._ReInit();this.Il._ReInit();},_Mark:
function(D){var B;C.GM._Mark.call(this,D);if((B=this.CN)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AzN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.LM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NT).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.PZ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Il)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.AD={Background:null,N$:null,Apl:0,AiN:10,Ahh:100,AV:0,Aqp:true,Bh:function(aSize
){A.Core.O.Bh.call(this,aSize);this.Background.G([0,0,aSize[0],aSize[1]]);this.N$.
G([].concat(2,this.N$.M.slice(1,4)));this.N$.G(A.aaQ(this.N$.M,aSize[0]));},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var Agr=this.AiN<this.Ahh;var AFx=(B=this.M)[
3]-B[1];var AW6=10;var Arl=AFx;var AYs=0;if(10>AFx)AW6=AFx;if(this.AiN<this.Ahh)
Arl=((Arl*this.AiN)/this.Ahh)|0;if(Arl<AW6)Arl=AW6;if(this.AiN<this.Ahh)AYs=((this.
Bea()*(AFx-Arl))/(this.Ahh-this.AiN))|0;this.N$.G(A.aaS(this.N$.M,AYs));this.N$.
G([].concat(this.N$.M.slice(0,3),AYs+Arl));this.N$.W(Agr);this.Background.W(Agr);
this.Aqp=Agr;},Bea:function(){var E=this.Apl;var G4=this.Ahh-this.AiN;if((G4>0)&&(
E>G4))E=G4;if(G4<=0)E=0;return E;},N2:function(E){if(E<0)E=0;if(this.Apl===E)return;
this.Apl=E;this.Al();},N4:function(E){if(E<0)E=0;if(this.AiN===E)return;this.AiN=
E;this.Al();},N0:function(E){if(E<0)E=0;if(this.Ahh===E)return;this.Ahh=E;this.Al(
);},L:function(E){if(this.AV===E)return;this.AV=E;this.N$.L(E);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);A.abh.AH._Init.call(this.N$={I:this},0);this.__proto__=C.AD;this.G(Vi);this.
An(false);this.AV=A.iF.A6;this.Background.AW(0x0);this.Background.G(Tj);this.Background.
L(A.iF.CP);this.N$.AW(0x0);this.N$.G(Tj);this.N$.L(A.iF.A6);this.J(this.Background
,0);this.J(this.N$,0);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.N$._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.N$._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.N$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.CG={F$:null,Ac:null,AD:null,Am:null,A01:A.jm,Init:function(aArg){A.ow([this,
this.AxA],this);},DS:function(H){var B;C.Aw.DS.call(this,H);this.Al();if(!!this.
A6&&((this.A6.S&0x400)===0x400))this.Ac.IA(this.A6,true,null,null);this.AxA(this
);},AjM:function(H){if(!!this.N.CA)A.ow(this.N.CA,this);},Am_:function(H){if(!!this.
N.Cl)A.ow(this.N.Cl,this);},Aw5:function(H){if(!!this.N.Cg)A.ow(this.N.Cg,this);
},FX:function(H){var B;this.AD.N0((B=this.Ac.Dd(0x1))[3]-B[1]);this.AD.N4((B=this.
Ac.M)[3]-B[1]);this.AD.N2(-this.Ac.Br[1]);A.ow([this,this.Btb],this);},AxA:function(
H){var B;var G5=(C.B9.isPrototypeOf(B=this.A6)?B:null);this.N.GX(A.jm);this.N.C8(
A.zW(A.abi.AhD));this.N.CA=[this,this.EY];if(!!G5&&!!G5.Akb){this.N.Fr(A.jm);this.
N.KJ.DC(255);this.N.Atu(G5.Aza);this.N.Cm(G5.Asz);this.N.Cg=G5.Akb;}else{this.N.
Fr(A.jm);this.N.Cm(null);this.N.Cg=null;}if(!!G5&&!!G5.Ael){this.N.Cb(A.jm);this.
N.IJ.DC(G5.AtX);this.N.AoX(G5.AkC);this.N.Db(G5.Aoc);this.N.Cl=G5.Ael;}else{this.
N.Cb(A.jm);this.N.Db(null);this.N.Cl=null;}},Lf:function(E){if(this.A01===E)return;
this.A01=E;this.F$.R(E);},EY:function(H){A._GetAutoObject(C.A1).Fl();},Btb:function(
H){var B;var Bsd=this.AD.Background.Fe();var A8X=(Bsd?this.M[2]-((B=this.AD.M)[2
]-B[0]):this.M[2]);var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){var AgW=X;
X=X.Af;if(((AgW.S&0x400)===0x400)){if(!!(A.Core.AhX.isPrototypeOf(AgW)?AgW:null)
){var A83=(A.Core.AhX.isPrototypeOf(AgW)?AgW:null);A83.D$([A8X,A83.EN[1]]);}else
if(!!(A.Core.Em.isPrototypeOf(AgW)?AgW:null)){var A_L=(A.Core.Em.isPrototypeOf(AgW
)?AgW:null);A_L.G(A.aaQ(A_L.M,A8X));}}}},Iu:function(H){A.ow([this,this.FX],this
);},_Init:function(aArg){C.Aw._Init.call(this,aArg);C.CH._Init.call(this.F$={I:this
},0);A.Core.Ac._Init.call(this.Ac={I:this},0);C.AD._Init.call(this.AD={I:this},0
);A.abh.Am._Init.call(this.Am={I:this},0);this.__proto__=C.CG;this.N.W(true);this.
F$.G(Vj);this.F$.An(false);this.F$.R(A.z2(A.abg.Settings));this.F$.L(A.iF.Text);
this.Ac.G(FK);this.Ac.Le(1);this.AD.G(JT);this.Am.G(Qg);this.Am.L(A.iF.Text);this.
J(this.F$,0);this.J(this.Ac,0);this.J(this.AD,0);this.J(this.Am,0);this.F$.Y(A.zW(
A.eV.OI));this.F$.Bz(A.zW(A.eV.K7));this.Ac.Eu=[this,this.Iu];this.Am.Ar(A.zW(A.
abi.Azv));this.Init(aArg);},_Done:function(){this.__proto__=C.Aw;this.F$._Done();
this.Ac._Done();this.AD._Done();this.Am._Done();C.Aw._Done.call(this);},_ReInit:
function(){C.Aw._ReInit.call(this);this.F$._ReInit();this.Ac._ReInit();this.AD._ReInit(
);this.Am._ReInit();this.F$.R(A.z2(A.abg.Settings));this.F$.Y(A.zW(A.eV.OI));this.
F$.Bz(A.zW(A.eV.K7));},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.
F$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsScreen"};C.Aso={Timer:null,Text:null,Init:
function(aArg){var B;A.za([this,this.A$B],[B=A._GetAutoObject(A.Device.Helper),B.
Tl,B.Tm],0);},CW:function(E){C.BU.CW.call(this,E);this.Text.L(E);},A$B:function(
H){this.Text.R(A._GetAutoObject(A.abk.K5).Bbu(A._GetAutoObject(A.Device.Helper).
DN()));},_Init:function(aArg){C.BU._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Timer={I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);this.__proto__=
C.Aso;this.Timer.UM(1);this.Timer.An(true);this.Text.G(Vk);this.Text.R(A.jm);this.
J(this.Text,0);this.Timer.Mw=[this,this.A$B];this.Text.Y(A.zW(A.eV.Au));this.Init(
aArg);},_Done:function(){this.__proto__=C.BU;this.Timer._Done();this.Text._Done(
);C.BU._Done.call(this);},_ReInit:function(){C.BU._ReInit.call(this);this.Timer.
_ReInit();this.Text._ReInit();},_Mark:function(D){var B;C.BU._Mark.call(this,D);
if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderTime"};C.BU={J_:0xFFFFFFFF,K3:0,CW:
function(E){if(this.J_===E)return;this.J_=E;},AcM:function(E){if(this.K3===E)return;
this.K3=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=C.
BU;this.G(Np);},_className:"Application::HeaderContent"};C.N={WD:null,WE:null,WF:
null,AeW:null,AeX:null,AeY:null,CA:null,Cg:null,Cl:null,Background:null,MR:null,
Jq:null,KJ:null,IJ:null,OM:null,Ji:null,Mo:null,Sz:null,SA:null,AlE:A.jm,AlF:A.jm
,AlG:A.jm,Aod:0,Aoe:0,Aof:0,Aff:0,XL:false,XK:false,Apo:false,ApD:false,ApC:false
,Init:function(aArg){},Ai:function(Ae){if(!!this.WD)this.Jq.Y(this.WD);if(!!this.
WE)this.KJ.Y(this.WE);if(!!this.WF)this.IJ.Y(this.WF);switch(this.Aff){case 0:{this.
MR.W(false);this.Jq.L(A.iF.Bg);this.KJ.L(A.iF.Bg);this.IJ.L(A.iF.Bg);this.OM.L(A.
iF.Bg);this.Ji.L(A.iF.Bg);this.Mo.L(A.iF.Bg);}break;case 1:{if(!this.AeW)this.MR.
G(A.z4(this.Jq.ANJ(),Pd));else this.MR.G(this.OM.Dd());this.MR.W(true);this.Jq.L(
A.iF.Text);this.KJ.L(A.iF.Bg);this.IJ.L(A.iF.Bg);this.OM.L(A.iF.Text);this.Ji.L(
A.iF.Bg);this.Mo.L(A.iF.Bg);}break;case 3:{if(!this.AeY)this.MR.G(A.z4(this.IJ.ANJ(
),Pd));else this.MR.G(this.Mo.Dd());this.MR.W(true);this.Jq.L(A.iF.Bg);this.KJ.L(
A.iF.Bg);this.IJ.L(A.iF.Text);this.OM.L(A.iF.Bg);this.Ji.L(A.iF.Bg);this.Mo.L(A.
iF.Text);}break;case 2:{if(!this.AeX)this.MR.G(A.z4(this.KJ.ANJ(),Pd));else this.
MR.G(this.Ji.Dd());this.MR.W(true);this.Jq.L(A.iF.Bg);this.KJ.L(A.iF.Text);this.
IJ.L(A.iF.Bg);this.OM.L(A.iF.Bg);this.Ji.L(A.iF.Text);this.Mo.L(A.iF.Bg);}break;
default:{this.MR.W(false);A.aa8("%s",Tk);}}if(!!this.OM.Ah){this.OM.W(true);this.
Jq.W(false);}else{this.OM.W(false);this.Jq.W(true);}if(this.AlF.length<=0){this.
Ji.W(true);this.KJ.W(false);}else{this.Ji.W(false);this.KJ.W(true);}if(!!this.Mo.
Ah){this.Mo.W(true);this.IJ.W(false);}else{this.Mo.W(false);this.IJ.W(true);}},GX:
function(E){if(this.AlE===E)return;this.AlE=E;this.Jq.R(E);this.Al();},Fr:function(
E){if(this.AlF===E)return;this.AlF=E;this.KJ.R(E);this.Al();},Cb:function(E){if(
this.AlG===E)return;this.AlG=E;this.IJ.R(E);this.Al();},ABl:function(E){if(this.
Aff===E)return;this.Aff=E;this.Al();},AOk:function(E){if(this.WD===E)return;this.
WD=E;this.Jq.Y(E);this.Al();},Atu:function(E){if(this.WE===E)return;this.WE=E;this.
KJ.Y(E);this.Al();},AoX:function(E){if(this.WF===E)return;this.WF=E;this.IJ.Y(E);
this.Al();},AXN:function(H){this.Al();},C8:function(E){if(this.AeW===E)return;this.
AeW=E;this.OM.Ar(E);this.Al();},Cm:function(E){if(this.AeX===E)return;this.AeX=E;
this.Ji.Ar(E);this.Al();},Db:function(E){if(this.AeY===E)return;this.AeY=E;this.
Mo.Ar(E);this.Al();},O3:function(E){if(this.ApC===E)return;this.ApC=E;this.Sz.W(
E);if(E)this.Jq.G([].concat(this.Sz.M[2],this.Jq.M.slice(1,4)));else this.Jq.G([
].concat(0,this.Jq.M.slice(1,4)));this.Al();},O4:function(E){if(this.ApD===E)return;
this.ApD=E;this.SA.W(E);if(E)this.IJ.G(A.aaQ(this.IJ.M,this.SA.M[0]));else this.
IJ.G(A.aaQ(this.IJ.M,this.M[2]));this.Al();},BfJ:function(E){if(this.Aod===E)return;
this.Aod=E;this.OM.Cc(E);this.Al();},AOo:function(E){if(this.Aoe===E)return;this.
Aoe=E;this.Ji.Cc(E);this.Al();},A3E:function(E){if(this.Aof===E)return;this.Aof=
E;this.Mo.Cc(E);this.Al();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);
A.abh.AH._Init.call(this.Background={I:this},0);A.abh.AH._Init.call(this.MR={I:this
},0);C.CH._Init.call(this.Jq={I:this},0);C.CH._Init.call(this.KJ={I:this},0);C.CH.
_Init.call(this.IJ={I:this},0);A.abh.Am._Init.call(this.OM={I:this},0);A.abh.Am.
_Init.call(this.Ji={I:this},0);A.abh.Am._Init.call(this.Mo={I:this},0);A.abh.Am.
_Init.call(this.Sz={I:this},0);A.abh.Am._Init.call(this.SA={I:this},0);this.__proto__=
C.N;this.G(BI);this.Background.AW(0x3F);this.Background.G(BI);this.Background.L(
A.iF.AeH);this.MR.G(X9);this.MR.L(A.iF.CP);this.MR.W(false);this.Jq.AW(0x14);this.
Jq.G(Vl);this.Jq.A0(0x12);this.KJ.AW(0x14);this.KJ.G(X_);this.KJ.A0(0x12);this.IJ.
G(X$);this.OM.G(Vm);this.Ji.G(Vn);this.Mo.G(RO);this.Mo.W(false);this.Sz.G(Ya);this.
Sz.W(false);this.SA.G(Yb);this.SA.W(false);this.J(this.Background,0);this.J(this.
MR,0);this.J(this.Jq,0);this.J(this.KJ,0);this.J(this.IJ,0);this.J(this.OM,0);this.
J(this.Ji,0);this.J(this.Mo,0);this.J(this.Sz,0);this.J(this.SA,0);this.Jq.Y(A.zW(
A.eV.AB));this.Jq.Bz(A.zW(A.eV.Cq));this.Jq.Rr([this,this.AXN]);this.KJ.Y(A.zW(A.
eV.AB));this.KJ.Bz(A.zW(A.eV.Cq));this.KJ.Rr([this,this.AXN]);this.IJ.Y(A.zW(A.eV.
AB));this.IJ.Bz(A.zW(A.eV.Cq));this.IJ.Rr([this,this.AXN]);this.WD=A.zW(A.eV.AB);
this.WE=A.zW(A.eV.AB);this.WF=A.zW(A.eV.AB);this.OM.Ar(null);this.Ji.Ar(null);this.
Mo.Ar(null);this.Sz.Ar(A.zW(A.abi.AIt));this.SA.Ar(A.zW(A.abi.Ag_));this.Init(aArg
);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();this.MR._Done(
);this.Jq._Done();this.KJ._Done();this.IJ._Done();this.OM._Done();this.Ji._Done(
);this.Mo._Done();this.Sz._Done();this.SA._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.MR._ReInit(
);this.Jq._ReInit();this.KJ._ReInit();this.IJ._ReInit();this.OM._ReInit();this.Ji.
_ReInit();this.Mo._ReInit();this.Sz._ReInit();this.SA._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.WD)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WF)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AeW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.AeX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AeY)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.CA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Cg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cl)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.MR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ji)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Mo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sz
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Footer"};C.Azz={Init:function(aArg){var B;A.za([this,this.MC],[B=A.
_GetAutoObject(A.Device.Helper),B.AoF,B.Aij],0);A.za([this,this.MC],[B=A._GetAutoObject(
A.Device.Helper),B.A2H,B.ABI],0);A.ow([this,this.MC],this);},Ez:function(H){if(!
!A._GetAutoObject(A.Device.Helper).AfC)this.Z4(A._GetAutoObject(A.Device.Helper).
AfC.AKx());else this.Z4(-1);if(!!A._GetAutoObject(A.Device.Helper).S2)this.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).AlI(A._GetAutoObject(A.Device.Helper).S2.Id));
else this.OnSetAnimalId(-1);},_Init:function(aArg){C.AkJ._Init.call(this,aArg);this.
__proto__=C.Azz;this.Init(aArg);},_className:"Application::HeaderScannedIds"};C.
ACX={Ed:null,DY:null,Fm:null,Wb:null,Si:null,H_:null,H$:null,Init:function(aArg){
},UQ:function(H){var B;C.Dr.UQ.call(this,H);var AGJ=this.Av3(A._GetAutoObject(A.
Device.Helper).S6.Get(A._GetAutoObject(A.Device.Helper).V.AnimalType));var AHm=this.
Av3(A._GetAutoObject(A.Device.Helper).S7.Get(A._GetAutoObject(A.Device.Helper).V.
AnimalType));var Br8=this.Av3(A._GetAutoObject(A.Device.Device).X4);this.Ed.G(A.
aaS(this.Ed.M,0));this.Ed.G([].concat(this.Ed.M.slice(0,3),((B=this.M)[3]-B[1])-
AGJ));this.H$.G(A.aaR(this.H$.M,this.Ed.M[3]-((((B=this.H$.M)[3]-B[1])/2)|0)));this.
DY.G(A.aaS(this.DY.M,this.Ed.M[3]));this.DY.G([].concat(this.DY.M.slice(0,3),((B=
this.M)[3]-B[1])-AHm));this.H_.G(A.aaR(this.H_.M,(this.DY.M[3]-((((B=this.H_.M)[
3]-B[1])/2)|0))+2));this.Fm.G(A.aaS(this.Fm.M,this.DY.M[3]));this.Fm.G([].concat(
this.Fm.M.slice(0,3),((B=this.M)[3]-B[1])-Br8));this.Si.G(A.aaR(this.Si.M,this.Fm.
M[3]-((((B=this.Si.M)[3]-B[1])/2)|0)));this.Wb.G(A.aaS(this.Wb.M,this.Fm.M[3]));
this.Wb.G([].concat(this.Wb.M.slice(0,3),(B=this.M)[3]-B[1]));},AFJ:function(Ami
){return A._GetAutoObject(A.Device.Converter).AiG(Ami);},AGd:function(){return A.
_GetAutoObject(A.abk.Temperature).Aju();},_Init:function(aArg){C.Dr._Init.call(this
,aArg);A.abh.AH._Init.call(this.Ed={I:this},0);A.abh.AH._Init.call(this.DY={I:this
},0);A.abh.AH._Init.call(this.Fm={I:this},0);A.abh.AH._Init.call(this.Wb={I:this
},0);A.abh.AH._Init.call(this.Si={I:this},0);A.abh.AH._Init.call(this.H_={I:this
},0);A.abh.AH._Init.call(this.H$={I:this},0);this.__proto__=C.ACX;this.Ed.AW(0xD
);this.Ed.G(AaC);this.Ed.L(A.iF.FY);this.DY.AW(0xD);this.DY.G(Qh);this.DY.L(A.iF.
Hy);this.Fm.AW(0xD);this.Fm.G(AaD);this.Fm.L(A.iF.E1);this.Wb.AW(0xD);this.Wb.G(
Adz);this.Wb.L(A.iF.Ads);this.Si.AW(0xD);this.Si.G(Yc);this.Si.Atf(A.iF.Ads);this.
Si.Atg(A.iF.Ads);this.Si.Ati(A.iF.E1);this.Si.Ath(A.iF.E1);this.H_.AW(0xD);this.
H_.G(Vo);this.H_.Atf(A.iF.E1);this.H_.Atg(A.iF.E1);this.H_.Ati(A.iF.Hy);this.H_.
Ath(A.iF.Hy);this.H$.AW(0xD);this.H$.G(Yd);this.H$.Atf(A.iF.Hy);this.H$.Atg(A.iF.
Hy);this.H$.Ati(A.iF.FY);this.H$.Ath(A.iF.FY);this.J(this.Ed,-1);this.J(this.DY,-
1);this.J(this.Fm,-1);this.J(this.Wb,-1);this.J(this.Si,-1);this.J(this.H_,-1);this.
J(this.H$,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Dr;this.Ed._Done(
);this.DY._Done();this.Fm._Done();this.Wb._Done();this.Si._Done();this.H_._Done(
);this.H$._Done();C.Dr._Done.call(this);},_ReInit:function(){C.Dr._ReInit.call(this
);this.Ed._ReInit();this.DY._ReInit();this.Fm._ReInit();this.Wb._ReInit();this.Si.
_ReInit();this.H_._ReInit();this.H$._ReInit();},_Mark:function(D){var B;C.Dr._Mark.
call(this,D);if((B=this.Ed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Si)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::TemperatureGraph"};C.B9={Asf:null,AkC:null,ALR:null
,Aoc:null,Aza:null,Asz:null,AR:null,Ael:null,Akb:null,N:null,Bi:null,PP:null,ACG:
false,Awn:false,AtX:255,Lq:false,Ko:false,QB:false,Ai:function(Ae){var B;C.S9.Ai.
call(this,Ae);var FT=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);var Gv=((Ae&0x40
)===0x40);var Fu=this.Bi.Bw;var Gb=A.iF.CD;var G1=A.iF.Text;if(this.GW){Gb=A.iF.
Bg;G1=A.iF.Text;}if(!FT){this.Background.L(A.iF.CP);this.T.L(A.iF.CD);}else if(Fu
){this.Background.L(A.iF.A6);this.T.L(A.iF.Bg);}else if(Gv){this.Background.L(A.
iF.A6);this.T.L(A.iF.Bg);}else if(Fv){this.Background.L(A.iF.AkN);this.T.L(A.iF.
Bg);}else{this.Background.L(Gb);this.T.L(G1);}if(this.ACG)this.T.R(this.Dk+A.z2(
A.abg.Colon));else this.T.R(this.Dk);this.Lq=FT;this.Ko=Fv;this.QB=Fu;this.Awn=Gv;
},Pr:function(H){this.Al();A.ow(this.AR,this);},Bo7:function(s){this.Pr(s);},JC:
function(H){if(this.PP.Aag)return;this.Al();if(this.Bi.Bw){A.ow(this.AR,this);this.
Bi.An(false);}this.Bi.An(true);},Avu:function(s){this.JC(s);},Afl:function(E){if(
A.z$(this.Ael,E))return;this.Ael=E;},AoV:function(E){if(this.Asf===E)return;this.
Asf=E;},AoW:function(E){if(this.AkC===E)return;this.AkC=E;},A3L:function(E){if(this.
AtX===E)return;this.AtX=E;},Hb:function(E){if(A.z_(this.N,E))return;this.N=E;},U:
function(E){if(this.Dk===E)return;this.Dk=E;this.Al();},AXq:function(H){},Bx_:function(
s){this.AXq(s);},Aid:function(E){if(this.Aoc===E)return;this.Aoc=E;},M$:function(
E){if(A.z$(this.Akb,E))return;this.Akb=E;},Na:function(E){if(this.Asz===E)return;
this.Asz=E;},XC:function(E){if(this.ACG===E)return;this.ACG=E;this.Al();},_Init:
function(aArg){C.S9._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bi={I:this
},0);A.Core.B0._Init.call(this.PP={I:this},0);this.__proto__=C.B9;this.Bi.P3(0);
this.Bi.UM(50);this.Bi.An(false);this.PP.Filter=1;this.Bi.Mw=[this,this.Bo7];this.
PP.B1=[this,this.Avu];this.Asf=A.zW(A.eV.AB);this.AkC=A.zW(A.eV.AB);this.ALR=A.zW(
A.abi.ET);this.Aza=A.zW(A.eV.AB);},_Done:function(){this.__proto__=C.S9;this.Bi.
_Done();this.PP._Done();C.S9._Done.call(this);},_ReInit:function(){C.S9._ReInit.
call(this);this.Bi._ReInit();this.PP._ReInit();},_Mark:function(D){var B;C.S9._Mark.
call(this,D);if((B=this.Asf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkC)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ALR)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aoc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aza)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Asz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ael)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Akb)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bi)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItem"};C.C9={Q:null,AkY:null,Ak0:null,GS:null,Ht:null,AI:0,FG:
0,Fq:100,E9:0,Init:function(aArg){},JC:function(H){this.E9=1;C.DV.JC.call(this,H
);},Bh:function(aSize){C.DV.Bh.call(this,aSize);this.GS.G([0,aSize[1]-40,40,aSize[
1]]);this.Ht.G([].concat(A.aaj(aSize,AdA),aSize));},A90:function(H){this.E9=6;this.
Al();if(this.Bi.Bw){A.ow([this,this.Avr],this);this.Bi.An(false);}this.Bi.An(true
);},Ai:function(Ae){var B;C.DV.Ai.call(this,Ae);var Fv=((Ae&0x20)===0x20);var Fu=
this.Bi.Bw;this.GS.L(this.T.AV);this.Ht.L(this.T.AV);this.GS.W((Fv||Fu)&&(this.AI>
this.FG));this.Ht.W((Fv||Fu)&&(this.AI<this.Fq));if(this.E9===6)this.GS.L(A.iF.E1
);if(this.E9===7)this.Ht.L(A.iF.E1);},Pr:function(H){if(this.E9===6)A.ow([this,this.
Avr],this);if(this.E9===7)A.ow([this,this.Avs],this);if(this.E9===1)A.ow(this.AR
,this);this.E9=0;this.Al();},CY:function(H){var F;if(!!this.Q)this.Bu((F=this.Q,
F[1].call(F[0])));},AaI:function(s){this.CY(s);},AF:function(E){if(A.z_(this.Q,E
))return;if(!!this.Q)A.zn([this,this.AaI],this.Q,0);this.Q=E;if(!!E)A.za([this,this.
AaI],E,0);if(!!E)A.ow([this,this.AaI],this);},A91:function(H){this.E9=7;this.Al(
);if(this.Bi.Bw){A.ow([this,this.Avs],this);this.Bi.An(false);}this.Bi.An(true);
},Jz:function(H){this.E9=0;},Avs:function(s){this.Jz(s);},Ju:function(H){this.E9=
0;},Avr:function(s){this.Ju(s);},Bu:function(E){if(E<this.FG)E=this.FG;if(E>this.
Fq)E=this.Fq;if(this.AI===E)return;this.AI=E;this.Al();},A6l:function(Ao){this.Bu(
Ao);},Hw:function(E){if(this.FG===E)return;this.FG=E;this.Al();},FP:function(E){
if(this.Fq===E)return;this.Fq=E;this.Al();},SR:function(){return this.AI;},_Init:
function(aArg){C.DV._Init.call(this,aArg);A.Core.B0._Init.call(this.AkY={I:this}
,0);A.Core.B0._Init.call(this.Ak0={I:this},0);A.abh.Am._Init.call(this.GS={I:this
},0);A.abh.Am._Init.call(this.Ht={I:this},0);this.__proto__=C.C9;this.G(KM);this.
AkY.Filter=6;this.Ak0.Filter=7;this.Background.G(KM);this.T.G(AaE);this.T.R(RP);
this.GS.G(Nq);this.Ht.G(AlR);this.Ht.Cc(1);this.J(this.GS,0);this.J(this.Ht,0);this.
AkY.B1=[this,this.A90];this.AkY.D_=[this,this.A90];this.Ak0.B1=[this,this.A91];this.
Ak0.D_=[this,this.A91];this.T.Y(A.zW(A.eV.Au));this.T.Bz(A.zW(A.eV.AB));this.T.C7(
null);this.GS.Ar(A.zW(A.abi.Aki));this.Ht.Ar(A.zW(A.abi.Aki));this.Init(aArg);},
_Done:function(){this.__proto__=C.DV;this.AkY._Done();this.Ak0._Done();this.GS._Done(
);this.Ht._Done();C.DV._Done.call(this);},_ReInit:function(){C.DV._ReInit.call(this
);this.AkY._ReInit();this.Ak0._ReInit();this.GS._ReInit();this.Ht._ReInit();},_Mark:
function(D){var B;C.DV._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AkY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak0).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GS)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ht)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Du:function(){return-1;},Da:function(aIndex){return-1;},GP:function(
aIndex){return A.jm;},DT:function(A2){return-1;},HN:function(){return-1;},AF:function(
E){this.Q=E;},CB:function(Ao){this.AF(Ao);},Aze:function(aIndex){return null;},Azg:
function(aIndex){return 0;},Cz:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.JQ={Auh:null
,B2:null,AC_:A.jm,AQi:A.jm,AhK:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.C9.Ai.call(this,Ae);if(!this.Auh){this.B2.L(this.T.AV);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.B2.R(((F=this.Q,F[1].call(F[0])).toFixed()+Cv)+this.
AQi);else this.B2.R(((F=this.Q,F[1].call(F[0])).toFixed()+Cv)+this.AC_);}}else(B=
this.Auh)?B[1].call(B[0],this):null;},Jz:function(H){var F;var BR=this.AI;C.C9.Jz.
call(this,H);this.Bu(this.AI+this.AhK);if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AI));A.aat(this.Q,0);}},Ju:function(H){var F;var BR=this.AI;C.
C9.Ju.call(this,H);this.Bu(this.AI-this.AhK);if(this.AI!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AI));A.aat(this.Q,0);}},Nd:function(E){if(this.AC_===E)return;
this.AC_=E;this.Al();},N3:function(E){if(this.AQi===E)return;this.AQi=E;this.Al(
);},AOp:function(E){if(this.AhK===E)return;this.AhK=E;},A31:function(E){if(A.z$(
this.Auh,E))return;this.Auh=E;},_Init:function(aArg){C.C9._Init.call(this,aArg);
C.CH._Init.call(this.B2={I:this},0);this.__proto__=C.JQ;this.G(KM);this.B2.G(AlS
);this.J(this.B2,-1);this.B2.Y(A.zW(A.eV.Au));this.B2.Bz(A.zW(A.eV.AB));this.Init(
aArg);},_Done:function(){this.__proto__=C.C9;this.B2._Done();C.C9._Done.call(this
);},_ReInit:function(){C.C9._ReInit.call(this);this.B2._ReInit();},_Mark:function(
D){var B;C.C9._Mark.call(this,D);if((B=this.Auh)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.B2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"
};C.B_={AC:null,De:null,Ha:null,C3:function(){this.Ai(this.S);},Init:function(aArg
){},Bh:function(aSize){var B;C.C9.Bh.call(this,aSize);this.De.G([this.GS.M[2]-10
,this.GS.M[1],this.Ht.M[0]+10,this.GS.M[3]]);this.De.ABm((B=this.De.M)[2]-B[0]);
this.De.IA(this.De.FJ,true,null,null);},Ai:function(Ae){var B;C.C9.Ai.call(this,
Ae);var Fv=((Ae&0x20)===0x20);var Fu=this.Bi.Bw;this.De.ZE(0,this.De.AM-1);this.
GS.W(Fv||Fu);this.Ht.W(Fv||Fu);},CY:function(H){var F;if(!!this.Q&&!!this.AC)this.
Bu(this.AC.DT((F=this.Q,F[1].call(F[0]))));},Jz:function(H){var F;var BR=this.AI;
C.C9.Jz.call(this,H);this.Bu(this.AI+1);if(this.AI!==BR){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.Da(this.AI)));A.aat(this.Q,0);}},Ju:function(H){
var F;var BR=this.AI;C.C9.Ju.call(this,H);this.Bu(this.AI-1);if(this.AI!==BR){if(
!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.Da(this.AI)));A.aat(this.Q,
0);}},Bu:function(E){var Pv=0;if(E<this.FG){E=this.Fq;Pv=-this.De.Us*this.De.AM;
}if(E>this.Fq){E=this.FG;Pv=this.De.Us;}C.C9.Bu.call(this,E);if(!!Pv)this.De.Gk(
Pv);this.De.Gl(this.AI);if(this.De.Bco())this.De.Bh2(false,false);this.De.IA(this.
De.FJ,true,this.Ha,null);},GD:function(H){var B;var Fw=this.De.ID;var Cj=(C.CH.isPrototypeOf(
B=this.De.B4)?B:null);if(!Cj)return;Cj.Y(this.T.Co);Cj.Bz(this.T.AkB);Cj.C7(this.
T.An3);Cj.L(this.T.AV);if(!!this.AC)Cj.R(this.AC.GP(Fw));else Cj.R(JU);Cj.G(A.aaN(
Cj.M,[this.De.Us,(B=this.De.M)[3]-B[1]]));},BoH:function(s){this.GD(s);},Dh:function(
E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.Hw(0);this.FP(this.AC.Du()-
1);this.De.I0(this.AC.Du());this.De.ZE(0,this.De.AM-1);}},_Init:function(aArg){C.
C9._Init.call(this,aArg);A.Core.De._Init.call(this.De={I:this},0);A.abm.FC._Init.
call(this.Ha={I:this},0);this.__proto__=C.B_;this.G(KM);this.De.Nb(C.CH);this.Ha.
UP(23);this.Ha.IF(1);this.Ha.FI(200);this.J(this.De,0);this.T.Y(A.zW(A.eV.Au));this.
T.Bz(A.zW(A.eV.AB));this.De.GD=[this,this.BoH];this.Init(aArg);},_Done:function(
){this.__proto__=C.C9;this.De._Done();this.Ha._Done();C.C9._Done.call(this);},_ReInit:
function(){C.C9._ReInit.call(this);this.De._ReInit();this.Ha._ReInit();this.C3();
},_Mark:function(D){var B;C.C9._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ha).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"};C.AlA={
Fa:null,D2:null,Ap:null,IX:null,G$:null,Q1:null,Zj:null,SQ:null,Ab1:null,RK:null
,FO:null,FN:null,G8:0,A3:0,At8:false,Bcl:false,Init:function(aArg){},Ai:function(
Ae){C.C9.Ai.call(this,Ae);this.GS.W(false);this.Ht.W(false);var AqN=A.jm;if(!!this.
D2){this.Q1.R(this.Ap.Format(AlT));this.SQ.R(this.Ap.Format(AlU));this.RK.R(this.
Ap.Format(AfU));}if(this.A3===1){this.G$.W(true);this.G$.G(this.Q1.M);this.G$.L(
this.T.AV);this.Q1.L(this.Background.AV);this.SQ.L(this.T.AV);this.RK.L(this.T.AV
);AqN=A.z2(A.abg.AZ0);}else if(this.A3===2){this.G$.W(true);this.G$.G(this.SQ.M);
this.G$.L(this.T.AV);this.Q1.L(this.T.AV);this.SQ.L(this.Background.AV);this.RK.
L(this.T.AV);AqN=A.z2(A.abg.GB);}else if(this.A3===3){this.G$.W(true);this.G$.G(
this.RK.M);this.G$.L(this.T.AV);this.Q1.L(this.T.AV);this.SQ.L(this.T.AV);this.RK.
L(this.Background.AV);AqN=A.z2(A.abg.Year);}else{this.G$.W(false);this.Q1.L(this.
T.AV);this.Ab1.L(this.T.AV);this.SQ.L(this.T.AV);this.Zj.L(this.T.AV);this.RK.L(
this.T.AV);}if(AqN.length>0){if(this.ACG)this.T.R((((this.Dk+AaF)+AqN)+String.fromCharCode(
0x29))+A.z2(A.abg.Colon));else this.T.R(((this.Dk+AaF)+AqN)+String.fromCharCode(
0x29));}},Pr:function(H){if(this.E9===1)A.ow([this,this.Tx],this);else if(this.E9===
4)A.ow([this,this.Agq],this);else if(this.E9===5)A.ow([this,this.Agc],this);C.C9.
Pr.call(this,H);},Jz:function(H){switch(this.A3){case 0:C.C9.Jz.call(this,H);break;
case 3:break;default:this.AjO(this);}},Ju:function(H){switch(this.A3){case 0:C.C9.
Ju.call(this,H);break;default:this.Agb(this);}},Abi:function(H){var F;if(!!this.
D2)this.Xy((F=this.D2,F[1].call(F[0])));},AcV:function(E){if(A.z_(this.D2,E))return;
if(!!this.D2)A.zn([this,this.Abi],this.D2,0);this.D2=E;if(!!E)A.za([this,this.Abi
],E,0);if(!!E)A.ow([this,this.Abi],this);},Xy:function(E){if(this.G8===E)return;
this.G8=E;this.Ap.Initialize(this.G8);this.Al();},AjO:function(H){this.E9=1;this.
Al();if(this.Bi.Bw){A.ow([this,this.Tx],this);this.Bi.An(false);}this.Bi.An(true
);},Tx:function(H){this.Ec(this.A3+1);},AjP:function(H){this.E9=4;this.Al();if(this.
Bi.Bw){A.ow([this,this.Agq],this);this.Bi.An(false);}this.Bi.An(true);},AjN:function(
H){this.E9=5;this.Al();if(this.Bi.Bw){A.ow([this,this.Agc],this);this.Bi.An(false
);}this.Bi.An(true);},Agq:function(H){var B;var F;var BR=this.G8;switch(this.A3){
case 1:{if(this.At8){var AxJ=A._NewObject(A.Core.AlH,0);AxJ.LJ=1;if(this.Ap.J(AxJ
).JL()>A._GetAutoObject(A.Device.Helper).DN())return;}if(this.Ap.Gz<this.Ap.ZY()
)this.Ap.Ld(this.Ap.Gz+1);}break;case 2:{if(this.At8){var AxJ=A._NewObject(A.Core.
AlH,0);AxJ.LJ=this.Ap.ZY();if(this.Ap.J(AxJ).JL()>A._GetAutoObject(A.Device.Helper
).DN())return;}this.Ap.UO(this.Ap.GB+1);if(this.Ap.ZY()<this.Ap.Gz)this.Ap.Ld(this.
Ap.ZY());}break;case 3:{if(this.At8){var AVZ=A._NewObject(A.Core.Bp,0);AVZ.Initialize(
this.Ap.JL());AVZ.Year+=1;if(AVZ.JL()>A._GetAutoObject(A.Device.Helper).DN())return;
}if(this.Ap.Year>=2100)return;this.Ap.Year=this.Ap.Year+1;}break;default:;}this.
Xy(((B=(this.Ap.JL()|0))<0)?B+0x100000000:B);if(this.G8!==BR){if(!!this.D2)(F=this.
D2,F[2].call(F[0],this.G8));A.aat(this.D2,0);}},Agc:function(H){var B;var F;var BR=
this.G8;if(this.A3===1)this.Ap.Ld(this.Ap.Gz-1);if(this.A3===2){this.Ap.UO(this.
Ap.GB-1);if(this.Ap.ZY()<this.Ap.Gz)this.Ap.Ld(this.Ap.ZY());}if(this.A3===3){if(
this.Ap.Year<=2000)return;this.Ap.Year=this.Ap.Year-1;}this.Xy(((B=(this.Ap.JL()|
0))<0)?B+0x100000000:B);if(this.G8!==BR){if(!!this.D2)(F=this.D2,F[2].call(F[0],
this.G8));A.aat(this.D2,0);}},Dz:function(H){var F;if(!this.N)return;switch(this.
A3){case 1:{(F=this.N,F[1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.N,F[1].call(F[
0])).GX(A.jm);(F=this.N,F[1].call(F[0])).CA=[this,this.Gu];(F=this.N,F[1].call(F[
0])).Cm(null);(F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(F[0])).Cg=
null;(F=this.N,F[1].call(F[0])).Db(A.zW(A.abi.Acl));(F=this.N,F[1].call(F[0])).Cb(
A.jm);(F=this.N,F[1].call(F[0])).Cl=[this,this.Tx];}break;case 2:{(F=this.N,F[1].
call(F[0])).C8(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GX(A.jm);(F=this.N,F[1
].call(F[0])).CA=[this,this.Gu];(F=this.N,F[1].call(F[0])).Cm(A.zW(A.abi.AkL));(
F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(F[0])).Cg=[this,this.Agb];(
F=this.N,F[1].call(F[0])).Db(A.zW(A.abi.Acl));(F=this.N,F[1].call(F[0])).Cb(A.jm
);(F=this.N,F[1].call(F[0])).Cl=[this,this.Tx];}break;case 3:{(F=this.N,F[1].call(
F[0])).C8(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GX(A.jm);(F=this.N,F[1].call(
F[0])).CA=[this,this.Gu];(F=this.N,F[1].call(F[0])).Cm(A.zW(A.abi.AkL));(F=this.
N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(F[0])).Cg=[this,this.Agb];(F=this.
N,F[1].call(F[0])).Db(null);(F=this.N,F[1].call(F[0])).Cb(A.jm);(F=this.N,F[1].call(
F[0])).Cl=null;}break;default:this.Fa.Aiw((F=this.N,F[1].call(F[0])));}},AOB:function(
E){if(this.At8===E)return;this.At8=E;},Gy:function(H){this.Ec(1);},Gu:function(H
){this.Ec(0);},Ec:function(EH){var F;if(!this.A3)this.Fa.Ahf((F=this.N,F[1].call(
F[0])));this.A3=EH;this.Bcl=true;if((this.A3<0)||(this.A3>3))this.A3=0;this.Dz(this
);this.FO.Bw=!!this.A3;this.FN.Bw=!!this.A3;this.Al();},Agb:function(H){if(this.
A3>1)this.Ec(this.A3-1);},_Init:function(aArg){C.C9._Init.call(this,aArg);A.Core.
Bp._Init.call(this.Ap={I:this},0);A.Core.B0._Init.call(this.IX={I:this},0);A.abh.
AH._Init.call(this.G$={I:this},0);A.abh.Text._Init.call(this.Q1={I:this},0);A.abh.
Text._Init.call(this.Zj={I:this},0);A.abh.Text._Init.call(this.SQ={I:this},0);A.
abh.Text._Init.call(this.Ab1={I:this},0);A.abh.Text._Init.call(this.RK={I:this},
0);A.Core.B0._Init.call(this.FO={I:this},0);A.Core.B0._Init.call(this.FN={I:this
},0);this.__proto__=C.AlA;this.G(Ye);this.T.R(AuF);this.GS.W(false);this.Ht.W(false
);this.IX.Filter=1;this.G$.G(AuG);this.G$.L(0x55FFFFFF);this.Q1.G(AuH);this.Q1.IZ(
true);this.Q1.A0(0x14);this.Zj.G(AuI);this.Zj.IZ(true);this.Zj.A0(0x14);this.Zj.
R(AiR);this.SQ.G(AuJ);this.SQ.IZ(true);this.Ab1.G(AuK);this.Ab1.IZ(true);this.Ab1.
R(AiR);this.RK.G(AdB);this.RK.IZ(true);this.RK.A0(0x11);this.FO.Filter=4;this.FO.
Bw=false;this.FN.Filter=5;this.FN.Bw=false;this.J(this.G$,0);this.J(this.Q1,0);this.
J(this.Zj,0);this.J(this.SQ,0);this.J(this.Ab1,0);this.J(this.RK,0);this.IX.B1=[
this,this.AjO];this.Q1.Y(A.zW(A.eV.Gg));this.Zj.Y(A.zW(A.eV.Gg));this.SQ.Y(A.zW(
A.eV.Gg));this.Ab1.Y(A.zW(A.eV.Gg));this.RK.Y(A.zW(A.eV.Gg));this.FO.B1=[this,this.
AjP];this.FO.D_=[this,this.Agq];this.FN.B1=[this,this.AjN];this.FN.D_=[this,this.
Agc];this.Fa=A._NewObject(C.Aca,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.C9;this.Ap._Done();this.IX._Done();this.G$._Done();this.Q1._Done();this.Zj._Done(
);this.SQ._Done();this.Ab1._Done();this.RK._Done();this.FO._Done();this.FN._Done(
);C.C9._Done.call(this);},_ReInit:function(){C.C9._ReInit.call(this);this.Ap._ReInit(
);this.IX._ReInit();this.G$._ReInit();this.Q1._ReInit();this.Zj._ReInit();this.SQ.
_ReInit();this.Ab1._ReInit();this.RK._ReInit();this.FO._ReInit();this.FN._ReInit(
);},_Mark:function(D){var B;C.C9._Mark.call(this,D);if((B=this.Fa)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.D2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.G$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ab1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemDate"
};C.NX={LanguageToString:null,Init:function(aArg){var B;A.za([this,this.A80],[B=
A._GetAutoObject(A.Device.Device),B.A2x,B.A6s],0);A.ow([this,this.A80],this);},Du:
function(){return 16;},GP:function(aIndex){return this.LanguageToString.Ca(this.
Da(aIndex));},AF:function(E){C.Dj.AF.call(this,E);A._GetAutoObject(A.Device.Device
).Ao3(E);},A80:function(H){this.Q=A._GetAutoObject(A.Device.Device).Language;A.aat([
this,this.Cz,this.CB],0);},_Init:function(aArg){C.Dj._Init.call(this,aArg);A.Device.
LanguageToString._Init.call(this.LanguageToString={I:this},0);this.__proto__=C.NX;
this.Ci.Set(0,0);this.Ci.Set(1,1);this.Ci.Set(2,5);this.Ci.Set(3,3);this.Ci.Set(
4,8);this.Ci.Set(5,9);this.Ci.Set(6,7);this.Ci.Set(7,6);this.Ci.Set(8,10);this.Ci.
Set(9,2);this.Ci.Set(10,11);this.Ci.Set(11,12);this.Ci.Set(12,13);this.Ci.Set(13
,14);this.Ci.Set(14,15);this.Ci.Set(15,16);this.Init(aArg);},_Done:function(){this.
__proto__=C.Dj;this.LanguageToString._Done();C.Dj._Done.call(this);},_ReInit:function(
){C.Dj._ReInit.call(this);this.LanguageToString._ReInit();},_Mark:function(D){var
B;C.Dj._Mark.call(this,D);if((B=this.LanguageToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::Languages"};C.P_={TemperatureUnitToString:null,Du:
function(){return 2;},Da:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},GP:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jm;return this.TemperatureUnitToString.
Ca(aIndex);},DT:function(A2){return A2;},HN:function(){return 1;},AF:function(E){
C.AC.AF.call(this,E);A._GetAutoObject(A.Device.Device).AtP(E);},Init:function(aArg
){var B;A.za([this,this.A$j],[B=A._GetAutoObject(A.Device.Device),B.AoG,B.Aqg],0
);A.ow([this,this.A$j],this);},A$j:function(H){this.Q=A._GetAutoObject(A.Device.
Device).TemperatureUnit;A.aat([this,this.Cz,this.CB],0);},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.TemperatureUnitToString={
I:this},0);this.__proto__=C.P_;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.TemperatureUnitToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.AP3={Ahd:null,
Adp:null,KK:null,AP:null,A4:null,Bh:function(aSize){C.A$.Bh.call(this,aSize);this.
Background.G(A.aaQ(this.Background.M,((aSize[0]*60)/100)|0));this.T.G(A.aaQ(this.
T.M,((aSize[0]*30)/100)|0));this.AP.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);
this.KK.G([this.T.M[2],0,this.Background.M[2],aSize[1]]);this.A4.G([this.Background.
M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ahd.G([this.Background.M[2],0,aSize[
0],aSize[1]]);this.Adp.G(this.Ahd.M);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.
KK.L(this.T.AV);},Init:function(aArg){},B7:function(Z){if(!this.AZ)return;this.Hl=
Z;if(!!this.AZ){var Ajk=this.AZ.Hr(Z,6);var Ang=this.AZ.Cp(Z,7);var Aq6=this.AZ.
IC(Z,9);this.U(A._GetAutoObject(A.abk.K5).AKe(Ajk));this.KK.R(A._GetAutoObject(A.
abk.K5).A0G(Ajk));this.Adp.R(A._GetAutoObject(A.Device.Converter).AiG(Ang));this.
Adp.L(A._GetAutoObject(A.abk.Assessment).VJ(Aq6));this.Ahd.L(A._GetAutoObject(A.
abk.Assessment).Pp(Aq6));this.Al();}},_Init:function(aArg){C.A$._Init.call(this,
aArg);A.abh.AH._Init.call(this.Ahd={I:this},0);A.abh.Text._Init.call(this.Adp={I:
this},0);A.abh.Text._Init.call(this.KK={I:this},0);A.abh.AH._Init.call(this.AP={
I:this},0);A.abh.AH._Init.call(this.A4={I:this},0);this.__proto__=C.AP3;this.T.G(
AdC);this.Adp.L(A.iF.Text);this.KK.R(Kb);this.KK.L(A.iF.Text);this.AP.L(A.iF.A7);
this.A4.G(AuL);this.A4.L(A.iF.A7);this.J(this.Ahd,0);this.J(this.Adp,0);this.J(this.
KK,0);this.J(this.AP,0);this.J(this.A4,0);this.Adp.Y(A.zW(A.eV.Au));this.KK.Y(A.
zW(A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Ahd._Done(
);this.Adp._Done();this.KK._Done();this.AP._Done();this.A4._Done();C.A$._Done.call(
this);},_ReInit:function(){C.A$._ReInit.call(this);this.Ahd._ReInit();this.Adp._ReInit(
);this.KK._ReInit();this.AP._ReInit();this.A4._ReInit();},_Mark:function(D){var B;
C.A$._Mark.call(this,D);if((B=this.Ahd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Adp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KK)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::TemperatureListItem"};C.Fs={AZ:null,AR:null
,CF:null,Av:null,Adc:null,Q4:null,J5:A.jm,KB:null,AQk:true,GD:function(H){var B;
var Fw=this.Av.ID;var Ab=(C.A$.isPrototypeOf(B=this.Av.B4)?B:null);if(!Ab)return;
Ab.Xz(this.AZ);Ab.B7(Fw);Ab.AR=this.AR;Ab.G(A.aaN(Ab.M,[(B=this.Av.M)[2]-B[0],this.
Av.Gj]));},Nb:function(E){if(E===this.KB)return;this.KB=E;this.Av.Nb(E);},Xz:function(
E){if(this.AZ===E)return;if(!!this.AZ)A.zl([this,this.B7],this.AZ,0);this.AZ=E;if(
!!E)A.y_([this,this.B7],E,0);A.ow([this,this.B7],this);},B7:function(H){if(this.
AQk===false)return;if(!!this.AZ){this.Av.I0(this.AZ.Cd());this.Av.ZE(0,this.Av.AM-
1);}else this.Av.I0(0);if((this.Av.AM>0)&&(this.FH()<0))this.Gl(0);if(this.FH()>=
this.Av.AM){this.Gl(0);this.Av.Gk(0);}if(this.Av.AM<=0){this.Q4.W(true);this.Gl(-
1);}else{this.Q4.W(false);this.Ax7(null,null);}},FX:function(H){var B;this.Adc.N0(
this.Av.Gj*this.Av.AM);this.Adc.N4((B=this.Av.M)[3]-B[1]);this.Adc.N2(-this.Av.Br
);},DS:function(H){if(this.Av.AM>0){switch(this.CF.CM){case 4:if(this.FH()>0)this.
Gl(this.FH()-1);break;case 5:if(this.FH()<(this.Av.AM-1))this.Gl(this.FH()+1);break;
default:this.CF.PE=true;}this.Av.IA(this.FH(),true,null,null);}else if((this.CF.
CM!==4)&&(this.CF.CM!==5))this.CF.PE=true;},XA:function(E){if(A.z$(this.AR,E))return;
this.AR=E;this.Av.ZE(0,this.Av.AM);},Gl:function(E){this.Av.Gl(E);this.Av.IA(E,true
,null,null);},FH:function(){return this.Av.FJ;},Et:function(E){if(this.J5===E)return;
this.J5=E;this.Q4.R(E);},Ax7:function(AaL,EI){this.Av.Ax7(AaL,EI);},AOS:function(
E){if(this.AQk===E)return;this.AQk=E;if(E)A.ow([this,this.B7],this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.B0._Init.call(this.CF={I:this},0);A.
Core.Cu._Init.call(this.Av={I:this},0);C.AD._Init.call(this.Adc={I:this},0);A.abh.
Text._Init.call(this.Q4={I:this},0);this.__proto__=C.Fs;this.G(Vp);this.KB=C.A$;
this.CF.Filter=147;this.Av.AW(0x3F);this.Av.G(Vp);this.Av.AcT(40);this.Adc.AW(0x3A
);this.Adc.G(AiS);this.Q4.AW(0x3F);this.Q4.G(AuM);this.Q4.HT(10);this.Q4.KF(true
);this.Q4.A0(0xA);this.Q4.L(A.iF.Text);this.J(this.Av,0);this.J(this.Adc,0);this.
J(this.Q4,0);this.CF.B1=[this,this.DS];this.CF.D_=[this,this.DS];this.Av.Eu=[this
,this.FX];this.Av.GD=[this,this.GD];this.Q4.Y(A.zW(A.eV.Au));},_Done:function(){
this.__proto__=A.Core.O;this.CF._Done();this.Av._Done();this.Adc._Done();this.Q4.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.CF._ReInit();this.Av._ReInit();this.Adc._ReInit();this.Q4._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AZ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
CF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Adc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q4)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::VertScrollList"};C.A$={AZ:null,Hl:-1,C3:function(){
this.B7(this.Hl);},Ai:function(Ae){var B;C.B9.Ai.call(this,Ae);if(!((Ae&0x20)===
0x20)){if((this.Hl%2)===1)this.Background.L(A.iF.CD);else this.Background.L(A.iF.
CP);}},Xz:function(E){if(this.AZ===E)return;this.AZ=E;},B7:function(Z){A.aa8("%s"
,AuN);},_Init:function(aArg){C.B9._Init.call(this,aArg);this.__proto__=C.A$;},_ReInit:
function(){C.B9._ReInit.call(this);this.C3();},_Mark:function(D){var B;C.B9._Mark.
call(this,D);if((B=this.AZ)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ListItem"
};C.Ge={Bf:null,E2:null,DJ:null,D0:null,Ue:null,Jd:null,J5:A.jm,Add:false,Init:function(
aArg){var B;A.za([this,this.AXk],[B=A._GetAutoObject(A.Device.Device),B.AAG,B.AEJ
],0);A.za([this,this.AXk],[B=A._GetAutoObject(A.Device.Device),B.A2c,B.A6f],0);A.
y_([this,this.Ad4],A._GetAutoObject(A.Device.Device).Aq,0);A.y_([this,this.Aau],
A._GetAutoObject(A.Device.Device).Aq,0);A.za([this,this.Btg],[B=A._GetAutoObject(
A.Device.Helper),B.Tl,B.Tm],0);A.ow([this,this.Aau],this);A.ow([this,this.A6L],this
);A.ow([this,this.Aue],this);},Xv:function(H){this.Aer();if(!A._GetAutoObject(A.
Device.Device).Jd){this.AYW(A.z2(A.abg.BcB),[this,this.Bdp],1);this.AYW(A.z2(A.abg.
BhP),[this,this.Bdo],0);A._GetAutoObject(C.Cy).IS();A._GetAutoObject(C.Cy).V1(A.
z2(A.abg.Bcb));A._GetAutoObject(C.Cy).IS();}var P;for(P=this.Jd.Du()-1;P>=0;P=P-
1)switch(this.Jd.Da(P)){case 0:this.Aeq(A.z2(A.abg.AbC),[this,this.AOT],0);break;
case 1:this.Aeq(A.z2(A.abg.Temperature),[this,this.AOV],1);break;case 2:this.Aeq(
A.z2(A.abg.Rating),[this,this.AOU],2);break;case 3:this.Aeq(A.z2(A.abg.AfT),[this
,this.AOW],3);break;default:A.aa8("%s",AuO);}A._GetAutoObject(C.Cy).IS();A._GetAutoObject(
C.Cy).V1(A.z2(A.abg.AZ$));A._GetAutoObject(A.Device.Device).Cn(6);},BoI:function(
s){this.Xv(s);},DS:function(H){var DF=(A.Core.B0.isPrototypeOf(H)?H:null);var AdX=
this.Jd.DT(A._GetAutoObject(A.Device.Device).Jd);if(this.Add)return;switch(DF.CM
){case 6:{AdX=AdX-1;if(AdX<0)AdX=this.Jd.Du()-1;A._GetAutoObject(A.Device.Device
).ZZ(this.Jd.Da(AdX));}break;case 7:{AdX=AdX+1;if(AdX>=this.Jd.Du())AdX=0;A._GetAutoObject(
A.Device.Device).ZZ(this.Jd.Da(AdX));}break;default:DF.PE=true;}},CE:function(H){
if(this.DJ.Awz()){this.DJ.AaV();if(this.DJ.Awz()===false)this.Bf.AOS(true);return;
}else if(this.Add)this.AX4(this);if(!!this.Bf)this.Bf.AOS(true);},Fc:function(H){
if(!!this.Bf)this.Bf.AOS(false);},Aue:function(H){var B;if(!!this.Bf)this.HW(this.
Bf);this.Bf=A._NewObject(C.AIe,0);this.Bf.G(AlV);this.Bf.Xz(A._GetAutoObject(A.Device.
Device).Aq);this.Bf.XA([this,this.AEU]);if(!!this.E2)this.Bf.A3d([B=this.E2,B.A2J
,B.A3X]);this.AYg(this);this.J(this.Bf,0);if(this.Add===false)this.A8(this.Bf);this.
AXk(this);this.BhN(this);},A2$:function(H){A._GetAutoObject(A.Device.Device).Cn(
0);this.Dt(C.WH);this.D9.AR=[this,this.AEU];this.AHd(this);this.D9.An(true);this.
A8(this.D9);this.Add=true;},Bdz:function(H){var B;A._GetAutoObject(A.Device.Device
).Cn(0);if(!this.Bf)return;var Ab=(C.Ayv.isPrototypeOf(B=this.Bf.Av.Bb0(this.Bf.
Av.FJ))?B:null);if(!!Ab)A._GetAutoObject(A.Device.Helper).HS(Ab.Hl);else A._GetAutoObject(
A.Device.Helper).V.GZ();this.Ad$();},Aq0:function(H){var F;if(!this.D0)this.A0a(
this);else switch((F=this.D0,F[1].call(F[0]))){case 0:this.A0a(this);break;case 1:
this.BaY(this);break;case 9:this.BaZ(this);break;case 4:this.A0c(this);break;case
6:this.A0e(this);break;case 8:this.AJy(this);break;case 2:this.A0i(this);break;case
3:this.Ba0(this);break;case 7:this.Ba1(this);break;case 5:this.Ba2(this);break;case
10:this.Ba3(this);break;case 11:this.A0b(this);break;case 12:this.A0h(this);break;
case 13:this.A0j(this);break;case 14:this.A0d(this);break;case 15:this.A0f(this);
break;case 16:this.A0k(this);break;case 17:this.A0g(this);break;default:A.aa8("%s%e"
,AuP,(F=this.D0,F[1].call(F[0])));}},AEU:function(s){this.Aq0(s);},BeI:function(
H){var B;this.Dt(C.JI);this.D9.AR=null;this.Add=false;this.Aau(this);var Filter;
var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).Aq.Filter){Filter=A._GetAutoObject(
A.Device.Device).Aq.Filter.F0();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(
B=Filter.DG(1,4))?B:null);if(!!FilterCriterion)Filter.P6(FilterCriterion);A._GetAutoObject(
A.Device.Device).Aq.Bo(Filter);}this.N.Sz.DC(255);this.N.SA.DC(255);this.A8(this.
Bf);this.D9.An(false);},Ak7:function(H){A._GetAutoObject(C.A1).Fl();},Et:function(
E){if(this.J5===E)return;this.J5=E;this.AYg(this);},Acd:function(){switch(A._GetAutoObject(
A.Device.Device).Jd){case 0:return this.A$Z(A._GetAutoObject(A.Device.Device).Akg
);case 8:case 9:case 10:return C.Y8;case 2:return C.AIP;case 1:return C.AIQ;case
3:return C.AIS;case 4:return C.Y8;case 5:return C.Y8;case 6:return C.Y8;case 7:return C.
Ayu;case 11:return C.Ayw;default:throw new Error(ApY);}},Ace:function(){switch(A.
_GetAutoObject(A.Device.Device).Jd){case 0:return this.A$0(A._GetAutoObject(A.Device.
Device).Akg);case 8:case 9:case 10:return C.Aci;case 2:return C.AzE;case 1:return C.
ALb;case 3:return C.ALd;case 4:return C.AzC;case 5:return C.Aci;case 6:return C.
Aci;case 7:return C.AzD;case 11:return C.AzF;default:throw new Error(ApY);}},AXk:
function(H){if(!!this.Bf){this.Bf.Nb(this.Acd());this.BhT(this);}},BhT:function(
H){var B;if(!!this.E2)this.HW(this.E2);this.E2=(C.DL.isPrototypeOf(B=A._NewObject(
this.Ace(),0))?B:null);this.E2.G(Kc);if(!!this.Bf)this.Bf.A3d([B=this.E2,B.A2J,B.
A3X]);this.J(this.E2,0);},Bdv:function(H){this.Ry(this);A._GetAutoObject(A.Device.
Device).Cn(0);},AOT:function(H){A._GetAutoObject(A.Device.Device).Cn(0);A._GetAutoObject(
A.Device.Device).ZZ(0);},AOV:function(H){A._GetAutoObject(A.Device.Device).Cn(0);
A._GetAutoObject(A.Device.Device).ZZ(1);},AOU:function(H){A._GetAutoObject(A.Device.
Device).Cn(0);A._GetAutoObject(A.Device.Device).ZZ(2);},AOW:function(H){A._GetAutoObject(
A.Device.Device).Cn(0);A._GetAutoObject(A.Device.Device).ZZ(3);},Ry:function(H){
A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(A.Device.Helper).LO());
},A6L:function(s){this.Ry(s);},HX:function(H){if(this.Add){this.AHd(this);return;
}this.N.C8(A.zW(A.abi.ET));this.N.Cm(A.zW(A.abi.Az0));this.N.Db(A.zW(A.abi.Options
));this.N.CA=[this,this.Ak7];this.N.Cg=[this,this.A2$];this.N.Cl=[this,this.BoI];
this.N.GX(A.jm);this.N.Fr(A.jm);this.N.Cb(A.jm);if(!A._GetAutoObject(A.Device.Device
).Aq.Cd()){this.N.Ji.DC(100);this.N.Cg=null;}else this.N.Ji.DC(255);},AUT:function(
s){this.HX(s);},Aeq:function(To,Tp,AFn){if(A._GetAutoObject(A.Device.Device).Jd===
AFn)A._GetAutoObject(C.Cy).Ag3(To,Tp,true);else A._GetAutoObject(C.Cy).Ag3(To,Tp
,false);},Ad4:function(H){this.AYg(this);if(this.Add)A.ow([this,this.AHd],this);
},Ad$:function(){A._GetAutoObject(C.A1).BX(9);},AYg:function(H){if(!this.Bf)return;
if(!A._GetAutoObject(A.Device.Device).Aq.PF()||!A._GetAutoObject(A.Device.Device
).Aq.Filter)this.Bf.Et(A.z2(A.abg.AAx));else if(A._GetAutoObject(A.Device.Helper
).Aom(A._GetAutoObject(A.Device.Device).Aq.Filter))this.Bf.Et(this.J5);else if(!
A._GetAutoObject(A.Device.Device).Aq.Filter.DG(1,4)){if(A._GetAutoObject(A.Device.
Helper).Azi(A._GetAutoObject(A.Device.Device).Aq.Filter)===1)this.Bf.Et(A.z2(A.abg.
AJK));else this.Bf.Et(A.z2(A.abg.AJJ));}else this.Bf.Et(A.z2(A.abg.ANw));},Ah_:function(
H){var F;A._GetAutoObject(A.Device.Device).Cn(0);if(!!this.D0)(F=this.D0,F[2].call(
F[0],0));},Afq:function(E){if(A.z_(this.D0,E))return;if(!!this.D0)A.zn([this,this.
AU2],this.D0,0);this.D0=E;if(!!E)A.za([this,this.AU2],this.D0,0);if(!!E)A.ow([this
,this.AU2],this);},AoN:function(H){var F;A._GetAutoObject(A.Device.Device).Cn(0);
if(!!this.D0)(F=this.D0,F[2].call(F[0],1));},Aig:function(H){var F;A._GetAutoObject(
A.Device.Device).Cn(0);if(!!this.D0)(F=this.D0,F[2].call(F[0],2));},Ao7:function(
H){var F;A._GetAutoObject(A.Device.Device).Cn(0);if(!!this.D0)(F=this.D0,F[2].call(
F[0],3));},AOO:function(H){var F;A._GetAutoObject(A.Device.Device).Cn(0);if(!!this.
D0)(F=this.D0,F[2].call(F[0],7));},AOP:function(H){var F;A._GetAutoObject(A.Device.
Device).Cn(0);if(!!this.D0)(F=this.D0,F[2].call(F[0],5));},A0i:function(H){if(!this.
Bf)return;if(this.NV()){A._GetAutoObject(A.Device.Helper).HS(this.Bf.FH());this.
DJ.R0(1);}},DX:function(To,Tp,Amm){var F;if(!!this.D0&&((F=this.D0,F[1].call(F[0
]))===Amm))A._GetAutoObject(C.Cy).Ag3(To,Tp,true);else A._GetAutoObject(C.Cy).Ag3(
To,Tp,false);},BeR:function(H){var F;A._GetAutoObject(A.Device.Device).Cn(0);if(
!!this.D0)(F=this.D0,F[2].call(F[0],4));},A0c:function(H){if(!this.Bf)return;if(
this.NV()){A._GetAutoObject(A.Device.Helper).HS(this.Bf.FH());this.DJ.BtG();}},BeS:
function(H){var F;A._GetAutoObject(A.Device.Device).Cn(0);if(!!this.D0)(F=this.D0
,F[2].call(F[0],6));},A0e:function(H){if(!this.Bf)return;if(this.NV()){A._GetAutoObject(
A.Device.Helper).HS(this.Bf.FH());this.DJ.BtH();}},AJy:function(H){if(!this.Bf)return;
if(this.NV()){A._GetAutoObject(A.Device.Helper).HS(this.Bf.FH());this.DJ.R0(1024
);}},AOu:function(H){var F;A._GetAutoObject(A.Device.Device).Cn(0);if(!!this.D0)(
F=this.D0,F[2].call(F[0],8));},Z0:function(H){var F;A._GetAutoObject(A.Device.Device
).Cn(0);if(!!this.D0)(F=this.D0,F[2].call(F[0],9));},Ba0:function(H){if(!this.Bf
)return;if(this.NV()){A._GetAutoObject(A.Device.Helper).HS(this.Bf.FH());this.DJ.
R0(2);}},A0a:function(H){if(!this.Bf)return;if(this.NV()){A._GetAutoObject(A.Device.
Helper).HS(this.Bf.FH());if(A._GetAutoObject(A.Device.Helper).AhM(A._GetAutoObject(
A.Device.Helper).V.WhereAbouts))A._GetAutoObject(A.Device.Device).A_(66,true,A.jm
,0,null);else this.Ad_();}},BaY:function(H){if(!this.Bf)return;if(this.NV()){A._GetAutoObject(
A.Device.Helper).HS(this.Bf.FH());this.DJ.R0(16);}},Ad_:function(){A._GetAutoObject(
C.A1).BX(36);},Ba1:function(H){if(!this.Bf)return;if(this.NV()){A._GetAutoObject(
A.Device.Helper).HS(this.Bf.FH());this.DJ.R0(4);}},Ba2:function(H){if(!this.Bf)return;
if(this.NV()){A._GetAutoObject(A.Device.Helper).HS(this.Bf.FH());this.DJ.R0(8);}
},BaZ:function(H){var B;if(!this.Bf)return;if(this.NV()){A._GetAutoObject(A.Device.
Helper).HS(this.Bf.FH());if(this.Add){A.za([this,this.AwX],[B=this.DJ,B.Ala,B.I1
],0);this.AX4(this);}this.DJ.AaV();}},AYT:function(To,Tp,BqE){if(BqE)A._GetAutoObject(
C.Cy).AYU(To,Tp,true);else A._GetAutoObject(C.Cy).AYU(To,Tp,false);},AHd:function(
H){this.N.GX(A.jm);this.N.Cb(A.jm);this.N.C8(A.zW(A.abi.Ack));this.N.CA=[this,this.
BeI];this.N.Sz.DC(100);this.N.SA.DC(100);var FU=A._GetAutoObject(A.Device.Device
).Aq.Cd();if(FU<=0){this.N.Cm(null);this.N.Db(null);this.N.Cg=null;this.N.Cl=null;
this.N.XK=false;this.N.XL=false;}else if(FU===1){this.N.Cm(null);this.N.Db(A.zW(
A.abi.Acl));this.N.Cg=null;this.N.Cl=[this,this.AEU];this.N.XK=false;this.N.XL=false;
}else{this.N.Cm(A.zW(A.abi.Asy));this.N.Db(A.zW(A.abi.AsE));this.N.Cg=[this,this.
AXH];this.N.Cl=[this,this.AXI];this.N.XK=true;this.N.XL=true;}},AXH:function(H){
if(!this.Bf)return;if(this.Bf.FH()<(A._GetAutoObject(A.Device.Device).Aq.Cd()-1)
)this.Bf.Gl(this.Bf.FH()+1);},AXI:function(H){if(!this.Bf)return;if(this.Bf.FH()>
0)this.Bf.Gl(this.Bf.FH()-1);},BhN:function(H){if(A._GetAutoObject(A.Device.Helper
).V.Id>0){var A5=A._GetAutoObject(A.Device.Device).Aq.LL(0,A._GetAutoObject(A.Device.
Helper).V.Id);if(A5>=0){this.Bf.Gl(A5);A.aa8("%s",AQN);}}},NV:function(){return this.
Bf.FH()>=0;},AhY:function(){return A._GetAutoObject(A.Device.Device).Aq.Cd()>5;}
,Aer:function(){this.A$P();A._GetAutoObject(C.Cy).Aep(A.z2(A.abg.APw),[this,this.
A2$]);A._GetAutoObject(C.Cy).IS();},Aau:function(H){if(this.Add)this.AHd(this);else
this.HX(this);},AX4:function(H){var aFilter=A._GetAutoObject(A.Device.Device).Aq.
Filter.F0();var AvF=aFilter.DG(1,4);if(!!AvF){aFilter.P6(AvF);A._GetAutoObject(A.
Device.Device).Aq.Bo(aFilter);if(!!this.Bf)this.Bf.Gl(0);}},AwX:function(H){var B;
if(!this.DJ.Gn&&this.Add){A.zn([this,this.AwX],[B=this.DJ,B.Ala,B.I1],0);this.AX4(
this);}},BgD:function(H){var F;A._GetAutoObject(A.Device.Device).Cn(0);if(!!this.
D0)(F=this.D0,F[2].call(F[0],10));},Ba3:function(H){if(!this.Bf)return;if(this.NV(
)){A._GetAutoObject(A.Device.Helper).HS(this.Bf.FH());this.DJ.R0(256);}},AXy:function(
H){A.ow([this,this.AUT],this);},AU2:function(s){this.AXy(s);},BeP:function(H){var
F;A._GetAutoObject(A.Device.Device).Cn(0);if(!!this.D0)(F=this.D0,F[2].call(F[0]
,11));},A0b:function(H){if(!this.Bf)return;if(this.NV()){A._GetAutoObject(A.Device.
Helper).HS(this.Bf.FH());this.DJ.R0(4096);}},A0h:function(H){if(!this.Bf)return;
if(this.NV()){A._GetAutoObject(A.Device.Helper).HS(this.Bf.FH());this.DJ.R0(16384
);}},Bf9:function(H){var F;A._GetAutoObject(A.Device.Device).Cn(0);if(!!this.D0)(
F=this.D0,F[2].call(F[0],12));},A0j:function(H){if(!this.Bf)return;if(this.NV()){
A._GetAutoObject(A.Device.Helper).HS(this.Bf.FH());this.Btu();}},Bgm:function(H){
var F;A._GetAutoObject(A.Device.Device).Cn(0);if(!!this.D0)(F=this.D0,F[2].call(
F[0],13));},Btu:function(){A._GetAutoObject(C.A1).Afu(86);},A0d:function(H){if(!
this.Bf)return;if(this.NV()){A._GetAutoObject(A.Device.Helper).HS(this.Bf.FH());
this.DJ.R0(32768);}},A0f:function(H){if(!this.Bf)return;if(this.NV()){A._GetAutoObject(
A.Device.Helper).HS(this.Bf.FH());this.DJ.R0(65536);}},A0k:function(H){if(!this.
Bf)return;if(this.NV()){A._GetAutoObject(A.Device.Helper).HS(this.Bf.FH());this.
DJ.R0(131072);}},Bgq:function(H){var F;A._GetAutoObject(A.Device.Device).Cn(0);if(
!!this.D0)(F=this.D0,F[2].call(F[0],16));},A$P:function(){if(!A._GetAutoObject(A.
Device.Device).Aq.Filter||A._GetAutoObject(A.Device.Helper).Aom(A._GetAutoObject(
A.Device.Device).Aq.Filter))A._GetAutoObject(C.Cy).Ag2(A.z2(A.abg.AyA));else A._GetAutoObject(
C.Cy).Aep(A.z2(A.abg.AyA),[this,this.Bdv]);A._GetAutoObject(C.Cy).Aep(A.z2(A.abg.
Aiz),[this,this.Bdz]);A._GetAutoObject(C.Cy).IS();},A$0:function(Al9){switch(Al9
){case 0:return C.Aci;case 1:return C.AK$;default:throw new Error(ApZ+Al9.toFixed(
));}},A$Z:function(Al9){switch(Al9){case 0:return C.Y8;case 1:return C.AIN;default:
throw new Error(ApZ+Al9.toFixed());}},Bdo:function(H){A._GetAutoObject(A.Device.
Device).Cn(0);A._GetAutoObject(A.Device.Device).AoO(0);},Bdp:function(H){A._GetAutoObject(
A.Device.Device).Cn(0);A._GetAutoObject(A.Device.Device).AoO(1);},AYW:function(To
,Tp,Al9){if(A._GetAutoObject(A.Device.Device).Akg===Al9)A._GetAutoObject(C.Cy).Ag3(
To,Tp,true);else A._GetAutoObject(C.Cy).Ag3(To,Tp,false);},Be_:function(H){var F;
A._GetAutoObject(A.Device.Device).Cn(0);if(!!this.D0)(F=this.D0,F[2].call(F[0],17
));},A0g:function(H){if(!this.Bf)return;if(this.NV()){A._GetAutoObject(A.Device.
Helper).HS(this.Bf.FH());this.DJ.R0(128);}},Btg:function(H){var B;if(!this.Bf)return;
A.ow([B=this.Bf,B.B7],this);},_Init:function(aArg){C.Aw._Init.call(this,aArg);C.
AzE._Init.call(this.Ue={I:this},0);C.Jd._Init.call(this.Jd={I:this},0);this.__proto__=
C.Ge;this.Background.G(B3);this.N.W(true);this.N.O3(true);this.N.O4(true);this.D9.
A3z(A.iF.CP);this.D9.A3A(A.iF.Text);this.Dt(C.JI);this.Ue.G(Kc);this.J5=A.z2(A.abg.
AAx);this.J(this.Ue,0);this.DJ=A._GetAutoObject(C.DJ);this.Init(aArg);},_Done:function(
){this.__proto__=C.Aw;this.Ue._Done();this.Jd._Done();C.Aw._Done.call(this);},_ReInit:
function(){C.Aw._ReInit.call(this);this.Ue._ReInit();this.Jd._ReInit();this.Et(A.
z2(A.abg.AAx));},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.Bf)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.E2)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.DJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.D0)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ue)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalListScreen"};
C.Ayv={AP:null,A4:null,U2:null,Adn:null,Init:function(aArg){},Bh:function(aSize){
C.A$.Bh.call(this,aSize);this.T.G(A.aaQ(this.T.M,((aSize[0]*40)/100)|0));this.AP.
G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);this.U2.G([this.T.M[2],0,((aSize[0]*
80)/100)|0,aSize[1]]);this.A4.G([this.U2.M[2]-1,0,this.U2.M[2]+1,aSize[1]]);this.
Adn.G([this.U2.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae
);this.U2.L(this.T.AV);this.Adn.L(this.T.AV);},B7:function(Z){if(!this.AZ)return;
this.Hl=Z;if(!!this.AZ){this.U(this.AZ.Cp(Z,1).toFixed());this.U2.R(this.AZ.Cp(Z
,2).toFixed());this.Adn.R(this.AZ.Cp(Z,3).toFixed());this.Al();}},_Init:function(
aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(this.AP={I:this},0);A.abh.AH.
_Init.call(this.A4={I:this},0);A.abh.Text._Init.call(this.U2={I:this},0);A.abh.Text.
_Init.call(this.Adn={I:this},0);this.__proto__=C.Ayv;this.AP.L(A.iF.A7);this.A4.
L(A.iF.A7);this.U2.L(A.iF.Text);this.Adn.L(A.iF.Text);this.J(this.AP,0);this.J(this.
A4,0);this.J(this.U2,0);this.J(this.Adn,0);this.U2.Y(A.zW(A.eV.Au));this.Adn.Y(A.
zW(A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.AP._Done(
);this.A4._Done();this.U2._Done();this.Adn._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.AP._ReInit();this.A4._ReInit();this.U2._ReInit(
);this.Adn._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.U2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adn)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListItem"};C.AbT={NR:null,RA:null,LE:null,Init:
function(aArg){var B;A.za([this,this.AXn],[B=A._GetAutoObject(A.Device.Device),B.
AsZ,B.Avk],0);A.za([this,this.Abh],[B=A._GetAutoObject(A.Device.Device),B.AsX,B.
Avj],0);A.ow([this,this.Abh],this);},Ai:function(Ae){C.Aw.Ai.call(this,Ae);this.
RA.R(A._GetAutoObject(A.Device.Device).Y4.toFixed()+AaG);this.NR.W(A._GetAutoObject(
A.Device.Device).Akn);},Abh:function(H){this.Al();},Md:function(H){A._GetAutoObject(
C.A1).Fl();},AXn:function(H){if(A._GetAutoObject(A.Device.Device).Akn===false){this.
NR.W(false);A._GetAutoObject(C.A1).Fl();}else this.NR.W(true);},_Init:function(aArg
){C.Aw._Init.call(this,aArg);A.abh.Text._Init.call(this.NR={I:this},0);A.abh.Text.
_Init.call(this.RA={I:this},0);C.LE._Init.call(this.LE={I:this},0);this.__proto__=
C.AbT;var B;this.Background.L(A.iF.CP);this.N.W(true);this.N.Cb(A.z2(A.abg.Ok));
this.NR.G(ADl);this.NR.R(A.z2(A.abg.NR));this.NR.L(A.iF.Text);this.NR.W(false);this.
RA.G(ADm);this.RA.R(ADn);this.RA.L(A.iF.Text);this.LE.G(ADo);this.J(this.NR,0);this.
J(this.RA,0);this.J(this.LE,0);this.N.Cl=[this,this.Md];this.NR.Y(A.zW(A.eV.Au));
this.RA.Y(A.zW(A.eV.Au));this.LE.AF([B=A._GetAutoObject(A.Device.Device),B.AsX,B.
Avj]);this.LE.A3N([B=A._GetAutoObject(A.Device.Device),B.AsZ,B.Avk]);this.Init(aArg
);},_Done:function(){this.__proto__=C.Aw;this.NR._Done();this.RA._Done();this.LE.
_Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.
NR._ReInit();this.RA._ReInit();this.LE._ReInit();this.N.Cb(A.z2(A.abg.Ok));this.
NR.R(A.z2(A.abg.NR));this.NR.Y(A.zW(A.eV.Au));this.RA.Y(A.zW(A.eV.Au));},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.NR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LE)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ChargeScreen"};C.LE={AbN:null,AbO:null,Oo:function(
H){var F;if(!!this.Q){this.AWz();var AaY=(F=this.Q,F[1].call(F[0]));if(AaY>20)this.
NO.L(A.iF.E1);else this.NO.L(A.iF.FY);this.NO.L((this.NO.AV&0x00FFFFFF)|(this.Ajt(
AaY,0,20)<<24));this.Sj.L((this.Sj.AV&0x00FFFFFF)|(this.Ajt(AaY,21,40)<<24));this.
Sk.L((this.Sk.AV&0x00FFFFFF)|(this.Ajt(AaY,41,60)<<24));this.AbN.L((this.AbN.AV&
0x00FFFFFF)|(this.Ajt(AaY,61,80)<<24));this.AbO.L((this.AbO.AV&0x00FFFFFF)|(this.
Ajt(AaY,81,100)<<24));}},AWz:function(){var F;if(!!this.Q){if((F=this.Q,F[1].call(
F[0]))>80)this.Tr=this.AbO;else if((F=this.Q,F[1].call(F[0]))>60)this.Tr=this.AbN;
else if((F=this.Q,F[1].call(F[0]))>40)this.Tr=this.Sk;else if((F=this.Q,F[1].call(
F[0]))>20)this.Tr=this.Sj;else this.Tr=this.NO;}else this.Tr=null;},_Init:function(
aArg){C.NP._Init.call(this,aArg);A.abh.AH._Init.call(this.AbN={I:this},0);A.abh.
AH._Init.call(this.AbO={I:this},0);this.__proto__=C.LE;this.G(AuQ);this.MZ.G(AuQ
);this.NO.G(ADp);this.Sj.G(AQO);this.Sk.G(AQP);this.AbN.G(AQQ);this.AbN.L(A.iF.E1
);this.AbO.G(AQR);this.AbO.L(A.iF.E1);this.J(this.AbN,0);this.J(this.AbO,0);this.
MZ.Ar(A.zW(A.abi.AIz));},_Done:function(){this.__proto__=C.NP;this.AbN._Done();this.
AbO._Done();C.NP._Done.call(this);},_ReInit:function(){C.NP._ReInit.call(this);this.
AbN._ReInit();this.AbO._ReInit();},_Mark:function(D){var B;C.NP._Mark.call(this,
D);if((B=this.AbN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbO)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::BatteryIndicatorBig"};C.APY={Ni:null,KH:null
,AiL:null,X2:null,X1:null,C3:function(){this.Al();},Init:function(aArg){var B;A.
za([this,this.Am$],[B=A._GetAutoObject(A.Device.Device),B.AN5,B.AUP],0);A.za([this
,this.Am$],[B=A._GetAutoObject(A.Device.Device),B.AN7,B.AUQ],0);A.za([this,this.
Am$],[B=A._GetAutoObject(A.Device.Device),B.A2U,B.A6B],0);A.ow([this,this.Am$],this
);},Ai:function(Ae){C.Aw.Ai.call(this,Ae);this.Iw(this);this.AxU(this);this.Buq(
this);this.Dz(this);},BsX:function(H){A._GetAutoObject(A.Device.Device).ApG();},
Am$:function(H){this.Al();},Iw:function(H){switch(A._GetAutoObject(A.Device.Device
).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.X2.W(false);break;
case 4:{var AXY;if(!A._GetAutoObject(A.Device.Device).Adq)AXY=0;else AXY=((A._GetAutoObject(
A.Device.Device).Aur*100)/A._GetAutoObject(A.Device.Device).Adq)|0;this.X2.Bu(AXY
);this.X2.W(true);}break;default:A.aa8("%s%e",Ap0,A._GetAutoObject(A.Device.Device
).SyncState);}},Buq:function(H){switch(A._GetAutoObject(A.Device.Device).SyncState
){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.Background.L(A.iF.CD);this.
KH.L(A.iF.Text);this.Ni.L(A.iF.Text);}break;case 7:{this.Background.L(A.iF.FY);this.
KH.L(A.iF.Bg);this.Ni.L(A.iF.Bg);}break;default:A.aa8("%s%e",Ap0,A._GetAutoObject(
A.Device.Device).SyncState);}},Dz:function(H){switch(A._GetAutoObject(A.Device.Device
).SyncState){case 1:case 2:case 3:case 4:case 5:case 0:case 6:{this.N.C8(null);this.
N.CA=null;this.N.Cb(A.jm);this.N.Cl=null;}break;case 7:{this.N.C8(null);this.N.CA=
null;this.N.Cb(A.z2(A.abg.Ok));this.N.Cl=[this,this.BsX];}break;default:A.aa8("%s%e"
,Ap0,A._GetAutoObject(A.Device.Device).SyncState);}},AxU:function(H){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 6:this.KH.R(A.z2(A.abg.Biw));break;case 1:
this.KH.R(A.z2(A.abg.Bit));break;case 2:this.KH.R(A.z2(A.abg.Biq));break;case 3:
this.KH.R(A.z2(A.abg.Biu));break;case 4:this.KH.R((A.z2(A.abg.Bis)+AuR)+A._GetAutoObject(
A.Device.Helper).Nh(A._GetAutoObject(A.Device.Helper).Nh(A.z2(A.abg.Bhf),Qi,A._GetAutoObject(
A.Device.Device).Aur.toFixed()),AuS,A._GetAutoObject(A.Device.Device).Adq.toFixed(
)));break;case 5:this.KH.R(A.z2(A.abg.Biv));break;case 7:this.KH.R(A.z2(A.abg.Bir
));break;default:A.aa8("%s%e",Ap0,A._GetAutoObject(A.Device.Device).SyncState);}
},_Init:function(aArg){C.Aw._Init.call(this,aArg);C.CH._Init.call(this.Ni={I:this
},0);C.CH._Init.call(this.KH={I:this},0);A.abh.Am._Init.call(this.AiL={I:this},0
);A.abr.AzH._Init.call(this.X2={I:this},0);A.abr.AzI._Init.call(this.X1={I:this}
,0);this.__proto__=C.APY;this.N.W(true);this.Ni.G(AQS);this.Ni.R(A.z2(A.abg.Ni));
this.KH.AW(0x3F);this.KH.G(AQT);this.KH.A0(0x12);this.AiL.G(AQU);this.AiL.L(A.iF.
A6);this.X2.G(AQV);this.X2.An(false);this.X2.Bu(0);this.X1.Bgx(0);this.X1.A3$(0);
this.X1.A39(A.iF.A6);this.X1.A38(0);this.X1.AB2(ADq);this.J(this.Ni,0);this.J(this.
KH,0);this.J(this.AiL,0);this.J(this.X2,0);this.Ni.Y(A.zW(A.eV.Gg));this.Ni.Bz(A.
zW(A.eV.Au));this.Ni.C7(A.zW(A.eV.AB));this.KH.Y(A.zW(A.eV.Au));this.KH.Bz(A.zW(
A.eV.AB));this.KH.C7(A.zW(A.eV.Cq));this.AiL.Ar(A.zW(A.abi.AMo));this.X2.OnSetAppearance(
this.X1);this.X1.A3_(A.zW(A.abi.M2));this.X1.A37(A.zW(A.abi.M2));this.Init(aArg);
},_Done:function(){this.__proto__=C.Aw;this.Ni._Done();this.KH._Done();this.AiL.
_Done();this.X2._Done();this.X1._Done();C.Aw._Done.call(this);},_ReInit:function(
){C.Aw._ReInit.call(this);this.Ni._ReInit();this.KH._ReInit();this.AiL._ReInit();
this.X2._ReInit();this.X1._ReInit();this.Ni.R(A.z2(A.abg.Ni));this.Ni.Y(A.zW(A.eV.
Gg));this.Ni.Bz(A.zW(A.eV.Au));this.Ni.C7(A.zW(A.eV.AB));this.KH.Y(A.zW(A.eV.Au)
);this.KH.Bz(A.zW(A.eV.AB));this.KH.C7(A.zW(A.eV.Cq));this.C3();},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.Ni)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AiL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X1)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SyncScreen"};C.An_={_Init:function(aArg){
C.Azz._Init.call(this,aArg);this.__proto__=C.An_;this.A3C(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Ci:A.aan(3,0,{0:2,2:1}),Du:function(
){return 3;},Da:function(aIndex){if(aIndex>=3)return-1;return this.Ci.Get(aIndex
);},GP:function(aIndex){return this.GenderToString.Ca(this.Da(aIndex));},DT:function(
A2){var P=0;while(P<3){if(this.Ci.Get(P)===A2)return P;P=P+1;}return-1;},HN:function(
){var P=0;var max=-1;while(P<3){if(this.Ci.Get(P)>max)max=this.Ci.Get(P);P=P+1;}
return max;},AF:function(E){C.AC.AF.call(this,E);if(!!this.Animal)this.Animal.J7(
E);},NZ:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.zn([this,
this.Ad1],[B=this.Animal,B.Xu,B.J7],0);this.Animal=E;if(!!this.Animal)A.za([this
,this.Ad1],[B=this.Animal,B.Xu,B.J7],0);A.ow([this,this.Ad1],this);},Ad1:function(
H){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.aat([this,this.Cz,
this.CB],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Ci=[]).__proto__=C.Gender.Ci;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Ci:A.aan(4,0,{1:1,2:2,3:3}),Du:function(){return 4;},Da:function(aIndex){if(
aIndex>=4)return-1;return this.Ci.Get(aIndex);},GP:function(aIndex){return this.
BirthTypeToString.Ca(this.Da(aIndex));},DT:function(A2){var P=0;while(P<4){if(this.
Ci.Get(P)===A2)return P;P=P+1;}return-1;},HN:function(){var P=0;var max=-1;while(
P<4){if(this.Ci.Get(P)>max)max=this.Ci.Get(P);P=P+1;}return max;},AF:function(E){
C.AC.AF.call(this,E);if(!!this.Animal)this.Animal.Ah$(E);},AVS:function(H){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.aat([this,this.Cz,this.
CB],0);},NZ:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.zn([this
,this.AVS],[B=this.Animal,B.ANK,B.Ah$],0);this.Animal=E;if(!!this.Animal)A.za([this
,this.AVS],[B=this.Animal,B.ANK,B.Ah$],0);A.ow([this,this.AVS],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Ci=[]).__proto__=C.BirthType.Ci;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Aak:null,Du:
function(){return A._GetAutoObject(A.Device.Helper).AbI.LZ;},Da:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AbI.LZ)return-1;return A._GetAutoObject(
A.Device.Helper).AbI.Get(aIndex);},GP:function(aIndex){return this.Aak.Ca(this.Da(
aIndex));},DT:function(A2){var P=0;while(P<A._GetAutoObject(A.Device.Helper).AbI.
LZ){if(A._GetAutoObject(A.Device.Helper).AbI.Get(P)===A2)return P;P=P+1;}return-
1;},HN:function(){var P=0;var max=-1;while(P<A._GetAutoObject(A.Device.Helper).S6.
LZ){if(A._GetAutoObject(A.Device.Helper).S6.Get(P)>max)max=A._GetAutoObject(A.Device.
Helper).S6.Get(P);P=P+1;}return max;},AF:function(E){C.AC.AF.call(this,E);if(!!this.
Animal)this.Animal.DO(E);},AVJ:function(H){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.aat([this,this.Cz,this.CB],0);},NZ:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.zn([this,this.AVJ],[B=this.Animal,B.O0,B.DO],0);this.
Animal=E;if(!!this.Animal)A.za([this,this.AVJ],[B=this.Animal,B.O0,B.DO],0);A.ow([
this,this.AVJ],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Aak={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Aak._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Aak._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aak)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.APF={Init:function(aArg){var B;A.ow([this,this.AdJ],this);A.za([this,this.AdJ
],[B=A._GetAutoObject(A.Device.Device),B.AoG,B.Aqg],0);},AX5:function(H){A._GetAutoObject(
A.Device.Device).A_(38,true,A.jm,0,[this,this.A6Q]);},AXG:function(H){var B;var As=(
A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).Aps(this);},AV9:function(H){var F;if(this.A3===1){var BR=this.DH;
this.DH=this.DH-10;if(this.DH<this.AjB)this.DH=this.AjB;if(this.DH<A._GetAutoObject(
A.Device.Device).X4)this.DH=A._GetAutoObject(A.Device.Device).X4;if(this.Dy!==BR
){if(!!this.Jn)(F=this.Jn,F[2].call(F[0],this.DH));A.aat(this.Jn,0);}}if(this.A3===
2){var BR=this.Dy;this.Dy=this.Dy-10;if(this.Dy<this.DH)this.Dy=this.DH;if(this.
Dy!==BR){if(!!this.Jm)(F=this.Jm,F[2].call(F[0],this.Dy));A.aat(this.Jm,0);}}this.
Dz(this);this.Al();},AWJ:function(H){var F;if(this.A3===1){var BR=this.DH;this.DH=
this.DH+10;if(this.DH>this.Dy)this.DH=this.Dy;if(this.DH!==BR){if(!!this.Jn)(F=this.
Jn,F[2].call(F[0],this.DH));A.aat(this.Jn,0);}}if(this.A3===2){var BR=this.Dy;this.
Dy=this.Dy+10;if(this.Dy>this.Ajw)this.Dy=this.Ajw;if(this.Dy!==BR){if(!!this.Jm
)(F=this.Jm,F[2].call(F[0],this.Dy));A.aat(this.Jm,0);}}this.Dz(this);this.Al();
},Iw:function(H){this.PT.R(ADr+A._GetAutoObject(A.Device.Converter).AiG(this.DH)
);this.PU.R(ADr+A._GetAutoObject(A.Device.Converter).AiG(this.Dy));this.SI.R(A._GetAutoObject(
A.abk.Temperature).Aju());},AWB:function(Aqm){if(Aqm===1)return this.PT;else if(
Aqm===2)return this.PU;else return null;},_Init:function(aArg){C.Adf._Init.call(
this,aArg);this.__proto__=C.APF;this.Ajw=5000;this.AjB=3000;this.U(A.z2(A.abg.AAp
));this.Background.G(AdD);this.T.G(BI);this.T.R(A.z2(A.abg.A47));this.T.A0(0x12);
this.Init(aArg);},_className:"Application::SettingsItemThresholdsTemp"};C.Ef={Background:
null,_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.
Background={I:this},0);this.__proto__=C.Ef;this.G(BI);this.Background.G(BI);this.
Background.L(A.iF.CD);this.J(this.Background,0);},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();A.Core.O._Done.call(this);},_ReInit:function(){
A.Core.O._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Y_:null,Zc:null,Za:null
,Background:null,Y9:null,Zb:null,Y$:null,Ahi:null,AoA:null,T5:null,AY:0,BsC:function(
H){if(this.Ahi.CM===6){if(this.AY===1)this.Alm(2);else if(this.AY===2)this.Alm(3
);else this.Alm(1);}else if(this.Ahi.CM===7){if(this.AY===3)this.Alm(2);else if(
this.AY===2)this.Alm(1);else this.Alm(3);}},Alm:function(E){if(this.AY===E)return;
this.AY=E;switch(this.AY){case 3:this.Background.G(this.Y9.M);break;case 2:this.
Background.G(this.Zb.M);break;case 1:this.Background.G(this.Y$.M);break;default:
this.Background.G(AlW);}},JC:function(H){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.GH._Init.
call(this.Y_={I:this},0);A.abh.GH._Init.call(this.Zc={I:this},0);A.abh.GH._Init.
call(this.Za={I:this},0);A.abh.Am._Init.call(this.Background={I:this},0);A.abh.Ab8.
_Init.call(this.Y9={I:this},0);A.abh.Ab8._Init.call(this.Zb={I:this},0);A.abh.Ab8.
_Init.call(this.Y$={I:this},0);A.Core.B0._Init.call(this.Ahi={I:this},0);A.Core.
B0._Init.call(this.AoA={I:this},0);A.Graphics.AIr._Init.call(this.T5={I:this},0);
this.__proto__=C.Rating;this.G(AQW);this.Y_.G(ADs);this.Y_.L(A.iF.Text);this.Y_.
Alk(AiT);this.Y_.N5(3);this.Y_.W(true);this.Zc.G(ADt);this.Zc.L(A.iF.Text);this.
Zc.Alk(AiT);this.Zc.N5(3);this.Zc.W(true);this.Za.G(ADu);this.Za.L(A.iF.Text);this.
Za.Alk(AiT);this.Za.N5(3);this.Za.W(true);this.Background.G(AlW);this.Background.
L(A.iF.A6);this.Y9.G(ADs);this.Y9.L(A.iF.E1);this.Y9.Alk(AiT);this.Y9.W(true);this.
Zb.G(ADt);this.Zb.L(A.iF.Hy);this.Zb.Alk(AiT);this.Zb.W(true);this.Y$.G(ADu);this.
Y$.L(A.iF.FY);this.Y$.Alk(AiT);this.Y$.W(true);this.Ahi.Filter=147;this.AoA.Filter=
1;this.T5.Bfd(360);this.T5.Bgl(22);this.T5.Bgw(2);this.J(this.Y_,0);this.J(this.
Zc,0);this.J(this.Za,0);this.J(this.Background,0);this.J(this.Y9,0);this.J(this.
Zb,0);this.J(this.Y$,0);this.Y_.XB(this.T5);this.Zc.XB(this.T5);this.Za.XB(this.
T5);this.Background.Ar(A.zW(A.abi.M1));this.Y9.XB(this.T5);this.Zb.XB(this.T5);this.
Y$.XB(this.T5);this.Ahi.B1=[this,this.BsC];this.AoA.B1=[this,this.JC];},_Done:function(
){this.__proto__=A.Core.O;this.Y_._Done();this.Zc._Done();this.Za._Done();this.Background.
_Done();this.Y9._Done();this.Zb._Done();this.Y$._Done();this.Ahi._Done();this.AoA.
_Done();this.T5._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Y_._ReInit();this.Zc._ReInit();this.Za._ReInit();this.Background.
_ReInit();this.Y9._ReInit();this.Zb._ReInit();this.Y$._ReInit();this.Ahi._ReInit(
);this.AoA._ReInit();this.T5._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Y_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahi
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AoA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"};C.Apu={
Ah0:null,Aph:null,Background:null,Ua:null,T7:null,AcJ:null,AcI:null,AcH:null,Adj:
null,Adi:null,Adh:null,Ac9:null,Ac8:null,AcB:null,AcA:null,Ac1:null,Ac0:null,AnM:
null,Init:function(aArg){},BcV:function(H){this.AcJ.R(ADv);this.AcI.R(A.jm);this.
AcH.R(A.jm);this.Adj.R(AQX);this.Adi.R(A.jm);this.Adh.R(A.jm);this.Ac9.R(A.jm);this.
Ac8.R(A.jm);this.AcB.R(A.jm);this.AcA.R(A.jm);this.Ac1.R(A.jm);this.Ac0.R(A.jm);
},BgY:function(H){this.T7.W(true);this.Ua.W(true);var H6=this.HO();if(!H6)return;
this.Ua.R(H6.GetFPS().toFixed()+AQY);this.T7.R(AQZ);this.T7.L(0xFFFFFFFF);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(this.Ah0={
I:this},0);A.Core.Timer._Init.call(this.Aph={I:this},0);A.abh.AH._Init.call(this.
Background={I:this},0);A.abh.Text._Init.call(this.Ua={I:this},0);A.abh.Text._Init.
call(this.T7={I:this},0);A.abh.Text._Init.call(this.AcJ={I:this},0);A.abh.Text._Init.
call(this.AcI={I:this},0);A.abh.Text._Init.call(this.AcH={I:this},0);A.abh.Text.
_Init.call(this.Adj={I:this},0);A.abh.Text._Init.call(this.Adi={I:this},0);A.abh.
Text._Init.call(this.Adh={I:this},0);A.abh.Text._Init.call(this.Ac9={I:this},0);
A.abh.Text._Init.call(this.Ac8={I:this},0);A.abh.Text._Init.call(this.AcB={I:this
},0);A.abh.Text._Init.call(this.AcA={I:this},0);A.abh.Text._Init.call(this.Ac1={
I:this},0);A.abh.Text._Init.call(this.Ac0={I:this},0);A.abh.AH._Init.call(this.AnM={
I:this},0);this.__proto__=C.Apu;this.G(AdE);this.An(false);this.Ah0.P3(2000);this.
Ah0.UM(1);this.Ah0.An(true);this.Aph.An(true);this.Background.AW(0x3F);this.Background.
G(AdE);this.Background.L(0x78000000);this.Ua.G(ADw);this.Ua.A0(0x14);this.Ua.R(A.
jm);this.Ua.L(0xFFFFFC00);this.Ua.W(false);this.T7.G(Ap1);this.T7.A0(0x11);this.
T7.R(A.jm);this.T7.W(false);this.AcJ.G(ADx);this.AcJ.A0(0x11);this.AcJ.R(A.jm);this.
AcI.G(ADy);this.AcI.A0(0x11);this.AcI.R(A.jm);this.AcH.G(AuT);this.AcH.A0(0x14);
this.AcH.R(A.jm);this.Adj.G(ADz);this.Adj.A0(0x11);this.Adj.R(A.jm);this.Adi.G(AuU
);this.Adi.A0(0x11);this.Adi.R(A.jm);this.Adh.G(AQ0);this.Adh.A0(0x14);this.Adh.
R(A.jm);this.Ac9.G(AQ1);this.Ac9.A0(0x11);this.Ac9.R(A.jm);this.Ac8.G(AQ2);this.
Ac8.A0(0x14);this.Ac8.R(A.jm);this.AcB.G(AQ3);this.AcB.A0(0x11);this.AcB.R(A.jm);
this.AcA.G(AQ4);this.AcA.A0(0x14);this.AcA.R(A.jm);this.Ac1.G(AQ5);this.Ac1.A0(0x11
);this.Ac1.R(A.jm);this.Ac0.G(Of);this.Ac0.A0(0x14);this.Ac0.R(A.jm);this.AnM.G(
AuV);this.J(this.Background,0);this.J(this.Ua,0);this.J(this.T7,0);this.J(this.AcJ
,0);this.J(this.AcI,0);this.J(this.AcH,0);this.J(this.Adj,0);this.J(this.Adi,0);
this.J(this.Adh,0);this.J(this.Ac9,0);this.J(this.Ac8,0);this.J(this.AcB,0);this.
J(this.AcA,0);this.J(this.Ac1,0);this.J(this.Ac0,0);this.J(this.AnM,0);this.Ah0.
Mw=[this,this.BcV];this.Aph.Mw=[this,this.BgY];this.Ua.Y(A.zW(A.eV.AB));this.T7.
Y(A.zW(A.eV.AB));this.AcJ.Y(A.zW(A.eV.AB));this.AcI.Y(A.zW(A.eV.AB));this.AcH.Y(
A.zW(A.eV.AB));this.Adj.Y(A.zW(A.eV.AB));this.Adi.Y(A.zW(A.eV.AB));this.Adh.Y(A.
zW(A.eV.AB));this.Ac9.Y(A.zW(A.eV.AB));this.Ac8.Y(A.zW(A.eV.AB));this.AcB.Y(A.zW(
A.eV.AB));this.AcA.Y(A.zW(A.eV.AB));this.Ac1.Y(A.zW(A.eV.AB));this.Ac0.Y(A.zW(A.
eV.AB));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Ah0._Done(
);this.Aph._Done();this.Background._Done();this.Ua._Done();this.T7._Done();this.
AcJ._Done();this.AcI._Done();this.AcH._Done();this.Adj._Done();this.Adi._Done();
this.Adh._Done();this.Ac9._Done();this.Ac8._Done();this.AcB._Done();this.AcA._Done(
);this.Ac1._Done();this.Ac0._Done();this.AnM._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Ah0._ReInit();this.Aph._ReInit(
);this.Background._ReInit();this.Ua._ReInit();this.T7._ReInit();this.AcJ._ReInit(
);this.AcI._ReInit();this.AcH._ReInit();this.Adj._ReInit();this.Adi._ReInit();this.
Adh._ReInit();this.Ac9._ReInit();this.Ac8._ReInit();this.AcB._ReInit();this.AcA.
_ReInit();this.Ac1._ReInit();this.Ac0._ReInit();this.AnM._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Ah0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aph)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ua)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T7
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Adj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Adh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac9)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ac8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AcB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcA)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ac1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.ACE={Fa:null,D2:null,Ap:null,IX:null,G$:null,UJ:null,A7:null,Sw:null,FO:null
,FN:null,G8:0,A3:0,Bcp:false,Init:function(aArg){},Ai:function(Ae){C.C9.Ai.call(
this,Ae);this.GS.W(false);this.Ht.W(false);if(!!this.D2){this.Sw.R(this.Ap.Format(
AQ6));this.UJ.R(this.Ap.Format(AQ7));}if(this.A3===1){this.G$.W(true);this.G$.G(
this.Sw.M);this.G$.L(A.iF.Bg);this.Sw.L(this.Background.AV);this.UJ.L(A.iF.Bg);}
else if(this.A3===2){this.G$.W(true);this.G$.G(this.UJ.M);this.G$.L(A.iF.Bg);this.
Sw.L(A.iF.Bg);this.UJ.L(this.Background.AV);}else{this.G$.W(false);this.Sw.L(this.
T.AV);this.A7.L(this.T.AV);this.UJ.L(this.T.AV);}},Pr:function(H){if(this.E9===1
)A.ow([this,this.Tx],this);else if(this.E9===4)A.ow([this,this.Agq],this);else if(
this.E9===5)A.ow([this,this.Agc],this);C.C9.Pr.call(this,H);},Jz:function(H){switch(
this.A3){case 0:C.C9.Jz.call(this,H);break;case 2:break;default:this.AjO(this);}
},Ju:function(H){switch(this.A3){case 0:C.C9.Ju.call(this,H);break;default:this.
Agb(this);}},Abi:function(H){var F;if(!!this.D2)this.Xy((F=this.D2,F[1].call(F[0
])));},AcV:function(E){if(A.z_(this.D2,E))return;if(!!this.D2)A.zn([this,this.Abi
],this.D2,0);this.D2=E;if(!!E)A.za([this,this.Abi],E,0);if(!!E)A.ow([this,this.Abi
],this);},Xy:function(E){if(this.G8===E)return;this.G8=E;this.Ap.Initialize(this.
G8);this.Al();},AjO:function(H){this.E9=1;this.Al();if(this.Bi.Bw){A.ow([this,this.
Tx],this);this.Bi.An(false);}this.Bi.An(true);},Tx:function(H){this.Ec(this.A3+1
);},AjP:function(H){this.E9=4;this.Al();if(this.Bi.Bw){A.ow([this,this.Agq],this
);this.Bi.An(false);}this.Bi.An(true);},AjN:function(H){this.E9=5;this.Al();if(this.
Bi.Bw){A.ow([this,this.Agc],this);this.Bi.An(false);}this.Bi.An(true);},Agq:function(
H){var B;var F;var BR=this.G8;if(this.A3===1)this.Ap.Alf(this.Ap.AhB+1);if(this.
A3===2)this.Ap.Ali(this.Ap.AsS+1);this.Ap.All(0);this.Xy(((B=(this.Ap.JL()|0))<0
)?B+0x100000000:B);if(this.G8!==BR){if(!!this.D2)(F=this.D2,F[2].call(F[0],this.
G8));A.aat(this.D2,0);}},Agc:function(H){var B;var F;var BR=this.G8;if(this.A3===
1)this.Ap.Alf(this.Ap.AhB-1);if(this.A3===2)this.Ap.Ali(this.Ap.AsS-1);this.Ap.All(
0);this.Xy(((B=(this.Ap.JL()|0))<0)?B+0x100000000:B);if(this.G8!==BR){if(!!this.
D2)(F=this.D2,F[2].call(F[0],this.G8));A.aat(this.D2,0);}},Dz:function(H){var F;
if(!this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).C8(A.zW(A.abi.
ET));(F=this.N,F[1].call(F[0])).GX(A.jm);(F=this.N,F[1].call(F[0])).CA=[this,this.
Gu];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.
N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).Db(A.zW(A.abi.Acl));(F=this.
N,F[1].call(F[0])).Cb(A.jm);(F=this.N,F[1].call(F[0])).Cl=[this,this.Tx];}break;
case 2:{(F=this.N,F[1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).
GX(A.jm);(F=this.N,F[1].call(F[0])).CA=[this,this.Gu];(F=this.N,F[1].call(F[0])).
Cm(A.zW(A.abi.AkL));(F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(F[0]
)).Cg=[this,this.Agb];(F=this.N,F[1].call(F[0])).Db(null);(F=this.N,F[1].call(F[
0])).Cb(A.jm);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:this.Fa.Aiw((F=this.
N,F[1].call(F[0])));}},Gy:function(H){this.Ec(1);},Gu:function(H){this.Ec(0);},Ec:
function(EH){var F;if(!this.A3)this.Fa.Ahf((F=this.N,F[1].call(F[0])));this.A3=EH;
this.Bcp=true;if((this.A3<0)||(this.A3>2))this.A3=0;this.Dz(this);this.FO.Bw=!!this.
A3;this.FN.Bw=!!this.A3;this.Al();},Agb:function(H){if(this.A3>1)this.Ec(this.A3-
1);},_Init:function(aArg){C.C9._Init.call(this,aArg);A.Core.Bp._Init.call(this.Ap={
I:this},0);A.Core.B0._Init.call(this.IX={I:this},0);A.abh.AH._Init.call(this.G$={
I:this},0);A.abh.Text._Init.call(this.UJ={I:this},0);A.abh.Text._Init.call(this.
A7={I:this},0);A.abh.Text._Init.call(this.Sw={I:this},0);A.Core.B0._Init.call(this.
FO={I:this},0);A.Core.B0._Init.call(this.FN={I:this},0);this.__proto__=C.ACE;this.
G(Ye);this.T.R(AQ8);this.T.L(A.iF.Bg);this.GS.W(false);this.Ht.W(false);this.IX.
Filter=1;this.G$.G(AQ9);this.G$.L(0x55FFFFFF);this.UJ.G(AQ_);this.UJ.IZ(true);this.
A7.G(AQ$);this.A7.A0(0x14);this.A7.R(Ap2);this.Sw.G(AuW);this.Sw.IZ(true);this.Sw.
A0(0x14);this.FO.Filter=4;this.FO.Bw=false;this.FN.Filter=5;this.FN.Bw=false;this.
J(this.G$,0);this.J(this.UJ,0);this.J(this.A7,0);this.J(this.Sw,0);this.IX.B1=[this
,this.AjO];this.UJ.Y(A.zW(A.eV.Gg));this.A7.Y(A.zW(A.eV.Gg));this.Sw.Y(A.zW(A.eV.
Gg));this.FO.B1=[this,this.AjP];this.FO.D_=[this,this.Agq];this.FN.B1=[this,this.
AjN];this.FN.D_=[this,this.Agc];this.Fa=A._NewObject(C.Aca,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.C9;this.Ap._Done();this.IX._Done();this.G$._Done(
);this.UJ._Done();this.A7._Done();this.Sw._Done();this.FO._Done();this.FN._Done(
);C.C9._Done.call(this);},_ReInit:function(){C.C9._ReInit.call(this);this.Ap._ReInit(
);this.IX._ReInit();this.G$._ReInit();this.UJ._ReInit();this.A7._ReInit();this.Sw.
_ReInit();this.FO._ReInit();this.FN._ReInit();},_Mark:function(D){var B;C.C9._Mark.
call(this,D);if((B=this.Fa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.D2)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.UJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FO
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemTime"};C.CH={Co:null,AkB:null,An3:null,Eu:null,Text:null
,String:A.jm,A8K:A.jm,JF:0x12,AG1:0,AV:0xFFFFFFFF,A8L:true,Gh:function(Cw){var KW=(
A.Core.AMU.isPrototypeOf(Cw)?Cw:null);if(!!KW)this.BuD(this);return A.Core.O.Gh.
call(this,Cw);},Bh:function(aSize){A.Core.O.Bh.call(this,aSize);A.ow([this,this.
Arz],this);},Dd:function(aFilter){return A.aam(this.Text.Dd(),this.M.slice(0,2));
},R:function(E){if(this.String===E)return;this.String=E;if(this.A8L){this.A8K=E;
this.A8L=false;}this.AG1=E.length;A.ow([this,this.Arz],this);},Y:function(E){if(
this.Co===E)return;this.Co=E;A.ow([this,this.Arz],this);},Bz:function(E){if(this.
AkB===E)return;this.AkB=E;A.ow([this,this.Arz],this);},C7:function(E){if(this.An3===
E)return;this.An3=E;A.ow([this,this.Arz],this);},A0:function(E){if(E===this.JF)return;
this.JF=E;this.Text.A0(E);},Arz:function(H){var B;var AG7=0;if(!this.AG1){this.Text.
W(false);return;}this.Text.W(true);this.Text.R(this.String);this.Text.KF(false);
if(!!this.Co){AG7=this.Co.WG(this.String,0,this.AG1);if(AG7<(((B=this.M)[2]-B[0]
)-(2*this.Text.IG))){this.Text.Y(this.Co);return;}}this.Text.KF(true);if(!!this.
AkB){AG7=this.AkB.WG(this.String,0,this.AG1);this.Text.Y(this.AkB);if((AG7<(((B=
this.M)[2]-B[0])-(2*this.Text.IG)))&&(((B=this.Text.Dd())[3]-B[1])<=((B=this.M)[
3]-B[1])))return;}if(!!this.An3){this.Text.Y(this.An3);if(((B=this.Text.Dd())[3]-
B[1])>((B=this.M)[3]-B[1]))this.Text.Bgo((((this.Text.Co.Ascent+this.Text.Co.Descent
)*75)/100)|0);}},L:function(E){if(E===this.AV)return;this.AV=E;this.Text.L(E);},
BuD:function(H){this.R(this.A8K);},Rr:function(E){if(A.z$(this.Eu,E))return;this.
Eu=E;this.Text.Rr(E);},ANJ:function(){return A.aam(this.Text.Dd(),this.M.slice(0
,2));},Alx:function(Amd){return A.aak(this.M.slice(0,2),this.Text.Alx(Amd));},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Text._Init.call(this.Text={I:
this},0);this.__proto__=C.CH;this.G(ADA);this.An(false);this.Text.AW(0x3F);this.
Text.G(ADA);this.Text.R(Kb);this.J(this.Text,0);},_Done:function(){this.__proto__=
A.Core.O;this.Text._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.Text._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.Co)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkB)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.An3)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Eu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Text)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"};C.AhA={Ac:null
,Ig:null,Acv:null,M3:null,Mm:null,Acp:null,Acu:null,Act:null,Acq:null,Acs:null,Acr:
null,Mn:null,M4:null,LQ:null,CW:function(E){C.Ud.CW.call(this,E);this.Ig.L(E);this.
Acv.L(E);this.M3.L(E);this.Mm.L(E);this.LQ.L(E);this.Acp.L(E);this.Mn.L(E);this.
M4.L(E);this.Acu.L(E);this.Act.L(E);this.Acq.L(E);this.Acs.L(E);this.Acr.L(E);},
Ez:function(H){C.Ud.Ez.call(this,H);this.VZ(8,1,this.Mm);this.VZ(12,1,this.LQ);this.
VZ(11,1,this.Acp);this.VZ(7,1,this.Mn);this.VZ(14,1,this.M4);this.VZ(1,4,this.Ig
);this.VZ(1,1,this.Acv);this.VZ(4,1,this.M3);this.VZ(22,1,this.Acu);this.VZ(26,1
,this.Act);this.VZ(30,1,this.Acq);this.VZ(19,1,this.Acs);this.VZ(31,1,this.Acr);
this.Text.W(!this.Ac.Zp(null,0x1));},VZ:function(AFo,En,AdT){var AxB=false;if(!!
A._GetAutoObject(A.Device.Device).Aq.Filter){var Aa6=A._GetAutoObject(A.Device.Device
).Aq.Filter.DG(AFo,En);if(!!Aa6){AxB=true;switch(AFo){case 14:{var Av5=(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(Aa6)?Aa6:null);if(!!Av5)AdT.Ar(A._GetAutoObject(
A.Device.Converter).AY$(Av5.AY));}break;case 7:{var Av5=(A.Device.GenderFilterCriterion.
isPrototypeOf(Aa6)?Aa6:null);if(!!Av5)AdT.Ar(A._GetAutoObject(A.Device.Converter
).AkE(Av5.AY));}break;case 1:if(En===4)AdT.Ar(A.zW(A.abi.Az0));else if(Aa6.Operator===
4)AxB=false;break;case 22:switch(Aa6.Operator){case 0:case 3:AdT.Ar(A.zW(A.abi.AL_
));break;default:AdT.Ar(A.zW(A.abi.Aok));}break;case 26:switch(Aa6.Operator){case
0:case 3:AdT.Ar(A.zW(A.abi.AL8));break;default:AdT.Ar(A.zW(A.abi.AzM));}break;default:;
}}else if((AFo===1)&&(En===4)){AxB=true;AdT.Ar(A.zW(A.abi.Acm));}}else if((AFo===
1)&&(En===4)){AxB=true;AdT.Ar(A.zW(A.abi.Acm));}AdT.W(AxB);},_Init:function(aArg
){C.Ud._Init.call(this,aArg);A.Core.Ac._Init.call(this.Ac={I:this},0);A.abh.Am._Init.
call(this.Ig={I:this},0);A.abh.Am._Init.call(this.Acv={I:this},0);A.abh.Am._Init.
call(this.M3={I:this},0);A.abh.Am._Init.call(this.Mm={I:this},0);A.abh.Am._Init.
call(this.Acp={I:this},0);A.abh.Am._Init.call(this.Acu={I:this},0);A.abh.Am._Init.
call(this.Act={I:this},0);A.abh.Am._Init.call(this.Acq={I:this},0);A.abh.Am._Init.
call(this.Acs={I:this},0);A.abh.Am._Init.call(this.Acr={I:this},0);A.abh.Am._Init.
call(this.Mn={I:this},0);A.abh.Am._Init.call(this.M4={I:this},0);A.abh.Am._Init.
call(this.LQ={I:this},0);this.__proto__=C.AhA;this.Ac.AW(0x3F);this.Ac.G(ARa);this.
Ac.Le(3);this.Ig.G(ADB);this.Acv.G(ARb);this.Acv.Aj(true);this.M3.G(ARc);this.M3.
Aj(true);this.Mm.G(ARd);this.Mm.Aj(true);this.Acp.G(ARe);this.Acp.Aj(true);this.
Acu.G(ADC);this.Acu.Aj(true);this.Act.G(ADC);this.Act.Aj(true);this.Acq.G(ARf);this.
Acq.Aj(true);this.Acs.G(AuX);this.Acs.Aj(true);this.Acr.G(AuX);this.Acr.Aj(true);
this.Mn.G(ADD);this.Mn.Aj(true);this.M4.G(ADE);this.M4.Aj(true);this.Text.R(A.z2(
A.abg.None));this.LQ.G(ADD);this.LQ.Aj(true);this.Lg(this.Sx,-3);this.Lg(this.GF
,-3);this.Lg(this.A4,-3);this.Lg(this.AP,-2);this.J(this.Ac,-2);this.J(this.Ig,-
2);this.J(this.Acv,-2);this.J(this.M3,-2);this.J(this.Mm,-2);this.J(this.Acp,-2);
this.J(this.Acu,-2);this.J(this.Act,-2);this.J(this.Acq,-2);this.J(this.Acs,-2);
this.J(this.Acr,-2);this.J(this.Mn,-2);this.J(this.M4,-2);this.J(this.LQ,0);this.
Ig.Ar(A.zW(A.abi.Acm));this.Acv.Ar(A.zW(A.abi.ALZ));this.M3.Ar(A.zW(A.abi.ALo));
this.Mm.Ar(A.zW(A.abi.AzU));this.Acp.Ar(A.zW(A.abi.ZA));this.Acu.Ar(A.zW(A.abi.Aok
));this.Act.Ar(A.zW(A.abi.AzM));this.Acq.Ar(A.zW(A.abi.ALX));this.Acs.Ar(A.zW(A.
abi.ALY));this.Acr.Ar(A.zW(A.abi.ALW));this.Mn.Ar(A.zW(A.abi.AzW));this.M4.Ar(A.
zW(A.abi.Asw));this.LQ.Ar(A.zW(A.abi.Az3));},_Done:function(){this.__proto__=C.Ud;
this.Ac._Done();this.Ig._Done();this.Acv._Done();this.M3._Done();this.Mm._Done();
this.Acp._Done();this.Acu._Done();this.Act._Done();this.Acq._Done();this.Acs._Done(
);this.Acr._Done();this.Mn._Done();this.M4._Done();this.LQ._Done();C.Ud._Done.call(
this);},_ReInit:function(){C.Ud._ReInit.call(this);this.Ac._ReInit();this.Ig._ReInit(
);this.Acv._ReInit();this.M3._ReInit();this.Mm._ReInit();this.Acp._ReInit();this.
Acu._ReInit();this.Act._ReInit();this.Acq._ReInit();this.Acs._ReInit();this.Acr.
_ReInit();this.Mn._ReInit();this.M4._ReInit();this.LQ._ReInit();this.Text.R(A.z2(
A.abg.None));},_Mark:function(D){var B;C.Ud._Mark.call(this,D);if((B=this.Ac)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ig)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M3)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Mm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acp)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Acu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Act)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Acq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acs
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.LQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderFilter"
};C.Akf={Hx:null,CE:function(H){if(A._GetAutoObject(A.Device.Device).Bt.Mp())A._GetAutoObject(
A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bt.Ie().toFixed(),
0,null);this.Hx.GC();this.Hx.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.Id
);C.P9.CE.call(this,H);},AlK:function(){C.P9.AlK.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.Background.L(A._GetAutoObject(A.abk.
Temperature).BrW(A._GetAutoObject(A.Device.Helper).V.AnimalType,A._GetAutoObject(
A.Device.Device).JR));this.CN.L(A._GetAutoObject(A.abk.Temperature).BrZ(A._GetAutoObject(
A.Device.Helper).V.AnimalType,A._GetAutoObject(A.Device.Device).JR));this.Jh.L(A.
_GetAutoObject(A.abk.Temperature).BrX(A._GetAutoObject(A.Device.Helper).V.AnimalType
,A._GetAutoObject(A.Device.Device).JR));this.G9.L(A._GetAutoObject(A.abk.Temperature
).BrY(A._GetAutoObject(A.Device.Helper).V.AnimalType,A._GetAutoObject(A.Device.Device
).JR));this.L0.L(this.Jh.AV);this.TemperatureUnit.L(this.Jh.AV);}break;default:;
}},Aau:function(){C.P9.Aau.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:break;case 3:{this.N.Cm(A.zW(A.abi.AMj));this.N.Db(A.zW(A.abi.Aoi
));}break;case 4:{this.N.Cm(null);this.N.Db(A.zW(A.abi.Aoh));}break;default:;}},
UY:function(H){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).JR>3240)&&(A._GetAutoObject(A.Device.Device
).JR<5460)){A._GetAutoObject(A.Device.Device).AfJ();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:{this.Hx.OnSetTemperature(A._GetAutoObject(
A.Device.Device).JR);var B$=A._GetAutoObject(A.Device.Converter).ApK(A._GetAutoObject(
A.Device.Helper).V.AnimalType,A._GetAutoObject(A.Device.Device).JR);this.Hx.OnSetRatingTemperature(
B$);this.Hx.Cr(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A1).Fl();
}break;case 4:this.AGz(this);break;default:;}},AiB:function(H){C.P9.AiB.call(this
,H);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:break;case
3:A._GetAutoObject(A.Device.Device).Cn(9);break;case 4:this.AGz(this);break;default:;
}},Aux:function(){C.P9.Aux.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:break;case 3:this.Jh.R(A._GetAutoObject(A.abk.Temperature).Br4(A.
_GetAutoObject(A.Device.Helper).V.AnimalType,A._GetAutoObject(A.Device.Device).JR
));break;case 4:break;default:;}},Auy:function(){C.P9.Auy.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{A._GetAutoObject(A.Device.Device).AcW(A._GetAutoObject(
A.abk.Temperature).Br0(A._GetAutoObject(A.Device.Helper).V.AnimalType,A._GetAutoObject(
A.Device.Device).JR));this.RD.An(true);}break;case 4:{A._GetAutoObject(A.Device.
Device).AcW(16711680);this.RD.An(true);}break;default:this.RD.An(false);}},APB:function(
){this.CN.Ar(A.zW(A.abi.AsD));this.CN.Cc(A._GetAutoObject(A.abk.Temperature).Br5(
A._GetAutoObject(A.Device.Helper).V.AnimalType,A._GetAutoObject(A.Device.Device).
JR));this.M1.Cc(0);},_Init:function(aArg){C.P9._Init.call(this,aArg);this.__proto__=
C.Akf;this.Dt(C.If);this.Hx=A._NewObject(A.Device.Rating,0);},_Mark:function(D){
var B;C.P9._Mark.call(this,D);if((B=this.Hx)&&(B._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::AnimalActionTemperatureScreen"};C.Afy={Nf:null,Dk:null
,Ia:null,A7:null,Arq:null,String:A.jm,Aun:A.jm,LW:7,AhS:2,J_:0,APL:false,Init:function(
aArg){},Bh:function(aSize){A.Core.O.Bh.call(this,aSize);this.Dk.G([0,0,aSize[0]-
this.AhS,(aSize[1]/2)|0]);if(aSize[1]<=40)this.Dk.Y(A.zW(A.eV.Cq));else this.Dk.
Y(A.zW(A.eV.AB));this.Ia.Y(this.Dk.Co);this.Ia.G(this.Dk.M);this.A7.G([].concat([
0,aSize[1]-2],aSize));A.ow([this,this.UQ],this);},R:function(E){if(this.String===
E)return;this.String=E;this.Dk.R(E);},Afs:function(E){if(this.Aun===E)return;this.
Aun=E;this.Ia.R(E);},Z7:function(E){this.LW=E;if(E<10)this.AOq(2);else if(E<40)this.
AOq(1);else this.AOq(0);A.ow([this,this.UQ],this);},UQ:function(H){var B;while(!
!this.A7.Af)this.HW(this.A7.Af);if(this.LW>1){var Aa2=this.AKr();var AWv=this.AKp(
);var AmQ=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;var AwE;var AGW;var Aq3;var AjX=
null;if(!!this.Nf&&(this.Nf.AM>0))AjX=this.Nf.Kf;while((Aa2>=AWv)&&(Aa2>0)){var AqB=
A._NewObject(C.Ag$,0);x1=Math.round(((((B=this.M)[2]-B[0])-this.AhS)*(((Aa2-AWv)
/86400)|0))/this.LW)|0;x2=Math.round(((((B=this.M)[2]-B[0])-this.AhS)*((((Aa2-AWv
)/86400)|0)+1))/this.LW)|0;while(!!AjX&&(AjX.Timestamp>=Aa2)){if(AjX.Timestamp<(
Aa2+86400))AqB.NM(AjX.AY,AjX.Timestamp);AjX=AjX.Af;}var Ard=0;if(AqB.AM>0)Ard=((((((
B=this.M)[3]-B[1])/2)|0)-((B=this.A7.M)[3]-B[1]))/AqB.AM)|0;else if(this.LW<10){
Ard=((((B=this.M)[3]-B[1])/2)|0)-((B=this.A7.M)[3]-B[1]);Aq3=A._NewObject(A.abh.
Text,0);Aq3.G([x1,AmQ,x2,AmQ+Ard]);Aq3.Y(A.zW(A.eV.Cq));Aq3.L(A.iF.Text);Aq3.R(A.
z2(A.abg.Als));this.J(Aq3,0);}var AFP=AqB.Kf;var P=0;while(!!AFP){if(P>=AqB.AM)throw new
Error(ARg);AwE=A._NewObject(A.abh.AH,0);AwE.L(A._GetAutoObject(A.abk.Assessment).
Pp(AFP.AY));if(P===(AqB.AM-1))AwE.G([x1,AmQ+(P*Ard),x2,this.A7.M[1]]);else AwE.G([
x1,AmQ+(P*Ard),x2,AmQ+((P+1)*Ard)]);this.J(AwE,0);AFP=AFP.Af;P=P+1;}if(this.APL){
var BqL=A._GetAutoObject(A.Device.Helper).AnG(A._GetAutoObject(A.Device.Helper).
DN());var BqK=A._GetAutoObject(A.Device.Helper).AnG(Aa2);if(BqL===BqK){var AHg=A.
_NewObject(A.abh.Ab8,0);AHg.L(A.iF.Text);var A86=(x1+this.AhS)+(((x2-x1)/2)|0);AHg.
G([A86-4,this.A7.M[1]-4,A86+4,this.A7.M[1]]);AHg.XB(this.Arq);this.J(AHg,0);}}Aa2=
Aa2-86400;if(this.AhS>0){AGW=A._NewObject(A.abh.AH,0);AGW.G([x1,AmQ,x1+this.AhS,
AmQ+((((B=this.M)[3]-B[1])/2)|0)]);AGW.L(A.iF.A7);this.J(AGW,0);}}}},Z8:function(
E){this.Nf=E;A.ow([this,this.UQ],this);},AOq:function(E){if(this.AhS===E)return;
this.AhS=E;A.ow([this,this.UQ],this);},CW:function(E){if(this.J_===E)return;this.
J_=E;this.Dk.L(E);this.Ia.L(E);},AKp:function(){var B;return this.AKr()-(((((B=this.
LW)<0)?B+0x100000000:B)-1)*86400);},AKr:function(){return A._GetAutoObject(A.Device.
Converter).AfO();},Bgs:function(E){if(this.APL===E)return;this.APL=E;A.ow([this,
this.UQ],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Text.
_Init.call(this.Dk={I:this},0);A.abh.Text._Init.call(this.Ia={I:this},0);A.abh.AH.
_Init.call(this.A7={I:this},0);C.Auu._Init.call(this.Arq={I:this},0);this.__proto__=
C.Afy;this.G(BI);this.An(false);this.Dk.G(ADF);this.Dk.HT(5);this.Dk.A0(0x11);this.
Dk.L(A.iF.Text);this.Ia.G(ADF);this.Ia.HT(5);this.Ia.A0(0x14);this.Ia.L(A.iF.Text
);this.A7.G(ARh);this.A7.L(A.iF.A7);this.J_=A.iF.Text;this.Arq.G(ARi);this.J(this.
Dk,0);this.J(this.Ia,0);this.J(this.A7,0);this.Dk.Y(A.zW(A.eV.AB));this.Ia.Y(A.zW(
A.eV.AB));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Dk._Done(
);this.Ia._Done();this.A7._Done();this.Arq._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Dk._ReInit();this.Ia._ReInit();this.
A7._ReInit();this.Arq._ReInit();this.Dk.Y(A.zW(A.eV.AB));this.Ia.Y(A.zW(A.eV.AB)
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Nf)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Dk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ia)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Arq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingHistoryItem"
};C.AZf={Af:null,Timestamp:0,AY:0,_Init:function(aArg){this.__proto__=C.AZf;A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::AssessmentRecord"
};C.Ag$={Kf:null,L$:null,AM:0,NM:function(A2,Ph){var Gx;Gx=A._NewObject(C.AZf,0);
Gx.AY=A2;Gx.Timestamp=Ph;if(!this.Kf){this.Kf=Gx;this.L$=Gx;this.AM=1;}else{this.
L$.Af=Gx;this.L$=Gx;this.AM=this.AM+1;}},_Init:function(aArg){this.__proto__=C.Ag$;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Kf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.L$
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::AssessmentRecordList"
};C.GN={Ac:null,AD:null,Init:function(aArg){A.ow([this,this.Dz],this);},DS:function(
H){var B;var EQ=0;var X=this.A6;switch(this.CF.CM){case 6:EQ=2;break;case 7:EQ=7;
break;case 4:EQ=4;break;case 5:EQ=5;break;default:;}X=this.Q8(X,EQ,0x414);if(!!X
)this.A8(X);if(!!X&&((X.S&0x400)===0x400))this.Ac.IA(X,true,null,null);this.Dz(this
);},AjM:function(H){A._GetAutoObject(C.A1).Fl();},Am_:function(H){var B;if(!!(C.
B9.isPrototypeOf(B=this.A6)?B:null).Ael)A.ow((C.B9.isPrototypeOf(B=this.A6)?B:null
).Ael,this);},FX:function(H){var B;this.AD.N0((B=this.Ac.Dd(0x1))[3]-B[1]);this.
AD.N4((B=this.Ac.M)[3]-B[1]);this.AD.N2(-this.Ac.Br[1]);},Dz:function(H){var B;var
G5=(C.B9.isPrototypeOf(B=this.A6)?B:null);if(!!G5){this.N.GX(A.jm);this.N.Cb(A.jm
);this.N.Jq.DC(255);this.N.IJ.DC(G5.AtX);this.N.AOk(G5.Asf);this.N.AoX(G5.AkC);this.
N.C8(G5.ALR);this.N.Db(G5.Aoc);G5.AXq(this);}},Iu:function(H){A.ow([this,this.FX
],this);},_Init:function(aArg){C.Aw._Init.call(this,aArg);A.Core.Ac._Init.call(this.
Ac={I:this},0);C.AD._Init.call(this.AD={I:this},0);this.__proto__=C.GN;this.Background.
G(Vq);this.Background.L(A.iF.CP);this.N.G(Vr);this.N.An(false);this.N.W(true);this.
Ac.G(FK);this.Ac.Le(1);this.AD.G(JT);this.J(this.Ac,0);this.J(this.AD,0);this.Ac.
Eu=[this,this.Iu];this.Init(aArg);},_Done:function(){this.__proto__=C.Aw;this.Ac.
_Done();this.AD._Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.
call(this);this.Ac._ReInit();this.AD._ReInit();},_Mark:function(D){var B;C.Aw._Mark.
call(this,D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"};C.AO2={MM:null,AOa:
null,AbM:null,T0:null,Go:null,PopupTimeout:null,Aab:null,AeC:null,PopupIdToString:
null,Aqx:null,Text:A.jm,Aio:A.jm,AF7:A.jm,AiI:0,AG9:-1,Av4:-1,AGG:0,AO4:0,AWF:false
,C3:function(){this.A35(this.PopupIdToString.Ca(this.AO4));},Init:function(aArg){
this.BhR(this);},A$C:function(H){var B;if(this.AiI>0){this.A4e((this.AiI/1000)|0
);this.PopupTimeout.UM(0);this.PopupTimeout.P3(1000);this.PopupTimeout.StartTimer(
this);}else this.PopupTimeout.ACS(this);},A$y:function(H){var Abs=this.Text;var AdW=
this.Aio;var AGE=A.aan(16,A.jm,null);var index=0;var AvZ=0;while(AdW!==A.jm){AvZ=
AdW.indexOf(A.Device.PopupParamSeparator,0);if(AvZ!==-1){AGE.Set(index,A.aa3(AdW
,AvZ,(AdW.length-AvZ)+1));AdW=A.aa3(AdW,0,AvZ+1);index=index+1;if(index>=16){A.aa8(
"%s",(ARj+AdW)+ARk);AdW=A.jm;}}else{AGE.Set(index,AdW);AdW=A.jm;}}index=0;while(
index<Abs.length){if((Abs.charCodeAt(index)||0)===0x7B){var A8J=Abs.indexOf(String.
fromCharCode(0x7D),index);if(A8J===-1){A.aa8("%s",(((ARl+Abs)+ARm)+index.toFixed(
))+AiR);index=Abs.length;}else{var A_p=(A8J-index)-1;var AXU=A.aaY(Abs,index+1,A_p
);var AGD=A.vQ(AXU,-1,10);Abs=A.aa3(Abs,index,A_p+2);if(AXU===ARn)this.BgK(index
);else if(((AGD>0)&&(AGD<=16))&&(this.Aio!==A.jm)){Abs=A.aaW(Abs,AGE.Get(AGD-1),
index);if(this.AWF===true)this.BgJ(A.vQ(AGE.Get(AGD-1),0,10));}else A.aa8("%s",(
ARo+AXU)+ARp);}}index=index+1;}this.BgI(Abs);},CE:function(H){A.ow([this,this.A$C
],this);},Ai:function(Ae){var B;this.AbM.G(A.z4(this.Go.Dd(),AiU));this.T0.G(A.z4(
this.Go.Dd(),AiU));if(!!this.MM){this.MM.G(A.aaP(this.MM.M,this.Go.M[0]));this.MM.
G(A.aaR(this.MM.M,this.Go.M[3]+10));this.MM.G(A.aaO(this.MM.M,(B=this.Go.M)[2]-B[
0]));this.MM.G(A.aaL(this.MM.M,8));this.AbM.G(A.aam(A.z4(this.Go.Dd(),AiU),ADG));
this.T0.G(A.aam(A.z4(this.Go.Dd(),AiU),ADG));}else{this.AbM.G(A.z4(this.Go.Dd(),
AiU));this.T0.G(A.z4(this.Go.Dd(),AiU));}},DS:function(H){var I8=(A.Core.B0.isPrototypeOf(
H)?H:null);if((I8.CM===4)&&((this.T0.M[1]+this.M[1])<this.M[1])){this.Go.G(A.aaR(
this.Go.M,this.Go.M[1]+28));this.Al();}else if((I8.CM===5)&&((this.T0.M[3]+this.
M[1])>this.N.M[1])){this.Go.G(A.aaR(this.Go.M,this.Go.M[1]-28));this.Al();}if((I8.
CM===6)&&!!this.Es().CA)this.Es().ABl(1);else if((I8.CM===7)&&!!this.Es().Cl)this.
Es().ABl(3);},JC:function(H){switch(this.Es().Aff){case 1:this.AjM(this);break;case
3:this.Am_(this);break;case 2:this.Aw5(this);break;case 0:break;default:A.aa8("%s%e"
,ARq,this.Es().Aff);}},AjM:function(H){var B;(B=this.Es().CA)?B[1].call(B[0],this
):null;},Am_:function(H){var B;(B=this.Es().Cl)?B[1].call(B[0],this):null;},Aw5:
function(H){var B;(B=this.Es().Cg)?B[1].call(B[0],this):null;},Lv:function(H){this.
N.Ji.L((this.N.Ji.AV&0x00FFFFFF)|(100<<24));},Fc:function(H){var B;this.PopupTimeout.
ACS(this);},A35:function(E){if(this.Text===E)return;this.Text=E;A.ow([this,this.
A$y],this);},Bs2:function(H){var B;this.A4e(this.Av4-1);if(this.Av4<=0){this.PopupTimeout.
ACS(this);(B=this.AOa)?B[1].call(B[0],this):null;}},A36:function(E){if(this.AiI===
E)return;this.AiI=E;A.ow([this,this.A$C],this);},A3R:function(E){if(this.Aio===E
)return;this.Aio=E;A.ow([this,this.A$y],this);},BgI:function(E){if(this.AF7===E)
return;this.AF7=E;this.AxU(this);this.BqT(this);},AxU:function(H){if((this.Av4!==-
1)&&(this.AG9!==-1)){var BrH=this.Aqx.Format(ARr);this.Go.R(A.aaW(this.AF7,BrH,this.
AG9));}else this.Go.R(this.AF7);this.Go.G(ADH);},BgK:function(E){if(this.AG9===E
)return;this.AG9=E;this.AxU(this);},A4e:function(E){if(this.Av4===E)return;this.
Av4=E;this.Aqx.ABN(E);A.ow([this,this.AxU],this);},BqT:function(H){this.Go.Dd();
if(this.Go.M[1]<=this.M[1])this.Go.G(A.aaR(this.Go.M,28));this.Al();},AB3:function(
E){if(this.AWF===E)return;this.AWF=E;if(E===true)A.ow([this,this.Bty],this);},Bty:
function(H){if(!this.MM){this.MM=A._NewObject(A.abr.AzH,0);this.MM.Hw(0);this.MM.
FP(100);this.MM.OnSetAppearance(this.Aab);this.J(this.MM,0);this.Alw(this.MM,this.
Go);}this.MM.Bu(this.AGG);},BgJ:function(E){if(this.AGG===E)return;this.AGG=E;if(
!!this.MM)this.MM.Bu(this.AGG);},BhR:function(H){var B;this.N.DC(0);this.AeC.ACP(
this);},Bgj:function(E){if(this.AO4===E)return;this.AO4=E;},_Init:function(aArg){
C.Aw._Init.call(this,aArg);A.abh.AH._Init.call(this.AbM={I:this},0);A.abh.CR._Init.
call(this.T0={I:this},0);A.abh.Text._Init.call(this.Go={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.abr.AzI._Init.call(this.Aab={I:this},
0);A.abm.FC._Init.call(this.AeC={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bp._Init.call(this.Aqx={I:this},0);this.
__proto__=C.AO2;var B;this.G(B3);this.Background.G(FK);this.Background.L(0x88FFFFFF
);this.Background.W(false);this.D9.An(false);this.D9.W(false);this.AbM.G(ADI);this.
AbM.L(A.iF.CD);this.T0.G(ADI);this.T0.N5(2);this.T0.L(A.iF.Text);this.Go.G(ADH);
this.Go.HT(10);this.Go.IZ(true);this.Go.BgH(0);this.Go.KF(true);this.Go.L(A.iF.Text
);this.PopupTimeout.P3(0);this.Aab.A3$(0);this.Aab.A39(A.iF.A6);this.Aab.A38(0);
this.Aab.AB2(ADq);this.AeC.IF(1);this.AeC.BW=255;this.AeC.Ch=0;this.Lg(this.D9,-
1);this.J(this.AbM,0);this.J(this.T0,0);this.J(this.Go,0);this.Go.Y(A.zW(A.eV.Au
));this.PopupTimeout.Mw=[this,this.Bs2];this.Aab.A3_(A.zW(A.abi.M2));this.Aab.A37(
A.zW(A.abi.M2));this.AeC.Q=[B=this.N,B.As8,B.AUJ];this.Init(aArg);},_Done:function(
){this.__proto__=C.Aw;this.AbM._Done();this.T0._Done();this.Go._Done();this.PopupTimeout.
_Done();this.Aab._Done();this.AeC._Done();this.PopupIdToString._Done();this.Aqx.
_Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.
AbM._ReInit();this.T0._ReInit();this.Go._ReInit();this.PopupTimeout._ReInit();this.
Aab._ReInit();this.AeC._ReInit();this.PopupIdToString._ReInit();this.Aqx._ReInit(
);this.C3();},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.MM)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AOa)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PopupTimeout
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aab)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aqx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"
};C.LI={Ai:function(Ae){C.B9.Ai.call(this,Ae);var Gb=A.iF.CD;var G1=A.iF.Text;if(
this.GW){Gb=A.iF.Text;G1=A.iF.Bg;}if(!this.Lq){this.Background.L(Gb);this.T.L(A.
iF.AkN);}else if(this.QB){this.Background.L(A.iF.A6);this.T.L(A.iF.Bg);}else if(
this.Ko){this.Background.L(A.iF.A6);this.T.L(A.iF.Bg);}else{this.Background.L(Gb
);this.T.L(G1);}},_Init:function(aArg){C.B9._Init.call(this,aArg);this.__proto__=
C.LI;},_className:"Application::DarkThemeMenuItem"};C.Ak2={Abm:0,_Init:function(
aArg){C.B9._Init.call(this,aArg);this.__proto__=C.Ak2;},_className:"Application::MenuItemPopUp"
};C.OverlayMenu={AjL:function(H){A._GetAutoObject(A.Device.Device).Cn(0);},M_:function(
){if(!this.CU){this.CU=A._NewObject(C.N,0);this.CU.Cl=[this,this.A9P];this.CU.Cg=
null;this.CU.CA=[this,this.AjL];this.CU.Cb(A.z2(A.abg.Ok));this.CU.Cm(null);this.
CU.C8(A.zW(A.abi.Ack));}return this.CU;},A9P:function(H){var B;if(!!(C.B9.isPrototypeOf(
B=this.A6)?B:null))(C.B9.isPrototypeOf(B=this.A6)?B:null).JC(this);},CE:function(
H){},AEI:function(s){this.CE(s);},Fc:function(H){},Avi:function(s){this.Fc(s);},
_Init:function(aArg){C.Zi._Init.call(this,aArg);this.__proto__=C.OverlayMenu;},_className:
"Application::OverlayMenu"};C.ALk={Un:null,W2:null,WW:null,Init:function(aArg){this.
A8(this.Un);},Abg:function(H){var Ab=(C.B9.isPrototypeOf(H)?H:null);if(!Ab)return;
if(Ab===this.W2)A._GetAutoObject(A.Device.Device).A_(6,true,A.jm,0,[this,this.BtL
]);else if(Ab===this.Un)A._GetAutoObject(A.Device.Device).A_(9,true,A.jm,0,[this
,this.Bt6]);else if(Ab===this.WW)A._GetAutoObject(C.A1).BX(4);else throw new Error(
AuY);A._GetAutoObject(A.Device.Device).Cn(0);},BtL:function(H){var As=(A.Device.
PopupContext.isPrototypeOf(H)?H:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).ACo();},Bt6:function(H){var As=(A.Device.PopupContext.isPrototypeOf(
H)?H:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).Auf();
},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.LI._Init.call(this.
Un={I:this},0);C.LI._Init.call(this.W2={I:this},0);C.LI._Init.call(this.WW={I:this
},0);this.__proto__=C.ALk;this.G(AdE);this.Un.G(BI);this.Un.An(true);this.Un.U(A.
z2(A.abg.A4R));this.Un.Bk(true);this.W2.G(Kc);this.W2.An(true);this.W2.U(A.z2(A.
abg.A4y));this.W2.Bk(true);this.WW.G(RQ);this.WW.An(true);this.WW.U(A.z2(A.abg.RA
));this.WW.Bk(true);this.J(this.Un,0);this.J(this.W2,0);this.J(this.WW,0);this.Un.
AR=[this,this.Abg];this.W2.AR=[this,this.Abg];this.WW.AR=[this,this.Abg];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Un._Done();this.W2._Done(
);this.WW._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Un._ReInit();this.W2._ReInit();this.WW._ReInit();this.Un.
U(A.z2(A.abg.A4R));this.W2.U(A.z2(A.abg.A4y));this.WW.U(A.z2(A.abg.RA));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Un)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.W2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WW)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HomeOverlayMenu"};C.FZ={YE:null
,OverlayMenu:null,US:null,AYa:null,Kw:null,AXT:null,Aip:null,Ne:null,AwJ:100,Init:
function(aArg){var B;A.za([this,this.A9X],[B=A._GetAutoObject(A.Device.Device),B.
AAP,B.AEO],0);A.za([this,this.A9T],[B=A._GetAutoObject(A.Device.Device),B.ANT,B.
AUG],0);A.za([this,this.AXn],[B=A._GetAutoObject(A.Device.Device),B.AsZ,B.Avk],0
);A.za([this,this.Bsy],[B=A._GetAutoObject(A.Device.Device),B.AsX,B.Avj],0);A.za([
this,this.Bsz],[B=A._GetAutoObject(A.Device.Device),B.A2k,B.A6j],0);A.za([this,this.
Am$],[B=A._GetAutoObject(A.Device.Device),B.AN5,B.AUP],0);A.za([this,this.A9$],[
B=A._GetAutoObject(A.Device.Device),B.AcK,B.AdH],0);A.ow([this,this.A9X],this);A.
ow([this,this.A9T],this);A.ow([this,this.Am$],this);A.ow([this,this.A9$],this);this.
AYa.AF([B=this.US,B.AAF,B.Xw]);this.J(this.US,0);this.A8(this.US);this.Bqw(this);
},Ai:function(Ae){},A9T:function(H){var B;if(A._GetAutoObject(A.Device.Device).AAt
){if(!this.YE){this.YE=A._NewObject(C.Apu,0);this.YE.G(A.aaM(this.YE.M,this.US.M.
slice(0,2)));this.YE.G(A.aaR(this.YE.M,this.US.M[3]-((B=this.YE.M)[3]-B[1])));this.
J(this.YE,1);}}else{if(!!this.YE)this.HW(this.YE);this.YE=null;}},A9X:function(H
){switch(A._GetAutoObject(A.Device.Device).OverlayMenu){case 0:this.Cn(null);break;
case 1:this.Cn(A._NewObject(C.ALk,0));break;case 8:this.Cn(A._NewObject(C.AHO,0)
);break;case 2:this.Cn(A._NewObject(C.AHK,0));break;case 3:this.Cn(A._NewObject(
C.AHR,0));break;case 4:this.Cn(A._NewObject(C.APd,0));break;case 5:this.Cn(A._NewObject(
C.AQz,0));break;case 6:this.Cn(A._NewObject(C.AOX,0));break;case 7:this.Cn(A._NewObject(
C.Akh,0));break;case 11:this.Cn(A._NewObject(C.AIg,0));break;case 12:this.Cn(A._NewObject(
C.AIf,0));break;case 9:this.Cn(A._NewObject(C.AM9,0));break;case 10:this.Cn(A._NewObject(
C.AIb,0));break;default:throw new Error(ARs+A._GetAutoObject(A.Device.Device).OverlayMenu.
toFixed());}},Cn:function(E){var B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu
){A._GetAutoObject(C.XF).AoL(null);this.Ne.AnT(this.OverlayMenu,A._GetAutoObject(
C.ACL),null,null,[B=this.OverlayMenu,B.Avi],null,true);this.A8(this.US);}this.OverlayMenu=
E;if(!!this.OverlayMenu){this.Ne.Air(this.OverlayMenu,A._GetAutoObject(C.ACK),null
,null,null,null,null,[B=this.OverlayMenu,B.AEI],null,false);this.A8(this.Ne);A._GetAutoObject(
C.XF).AoL(this.OverlayMenu.M_());}else if(!!this.Kw){this.A8(this.Ne);A._GetAutoObject(
C.XF).AoL(this.Kw.Ah8().M_());}},Afn:function(E){var B;if(this.Kw===E)return;if(
!!this.Kw){A._GetAutoObject(C.XF).AoL(null);this.Ne.AnT(this.Kw.Ah8(),A._GetAutoObject(
C.AfB),null,null,[B=this.Kw.Ah8(),B.Avi],null,false);this.A8(this.US);}this.Kw=E;
if(!!this.Kw){this.Ne.Air(this.Kw.Ah8(),A._GetAutoObject(C.AfB),null,null,null,null
,null,[this,this.BeG],null,false);this.A8(this.Ne);A._GetAutoObject(C.XF).AoL(this.
Kw.Ah8().M_());}else if(!!this.OverlayMenu){this.A8(this.Ne);A._GetAutoObject(C.
XF).AoL(this.OverlayMenu.M_());}},Bqw:function(H){var B;var F;this.J(this.AXT,0);(
F=A._GetAutoObject(C.XF),F.G(A.aaR(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.XF).M)[3]-B[1]))));this.SZ(this.Ne);},AXn:function(H){if(A._GetAutoObject(A.Device.
Device).Akn)switch(A._GetAutoObject(A.Device.Device).J3){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A1).Afu(4);break;default:if(A._GetAutoObject(A.Device.
Device).Y4<98)A._GetAutoObject(C.A1).BX(4);}else{this.AwJ=100;this.A7T();}},Bsy:
function(H){this.A7T();},A7T:function(){if(!A._GetAutoObject(A.Device.Device).Akn
){if(A._GetAutoObject(A.Device.Device).Y4<=2){if(this.AwJ>2)switch(A._GetAutoObject(
A.Device.Device).J3){case 38:break;case 4:case 39:A._GetAutoObject(C.A1).Afu(38);
break;default:A._GetAutoObject(C.A1).BX(38);}}else if(A._GetAutoObject(A.Device.
Device).Y4<=10){if(this.AwJ>10)switch(A._GetAutoObject(A.Device.Device).J3){case
39:break;case 4:case 38:A._GetAutoObject(C.A1).Afu(39);break;default:A._GetAutoObject(
C.A1).BX(39);}}else if(A._GetAutoObject(A.Device.Device).Y4<=20){if(this.AwJ>20)
switch(A._GetAutoObject(A.Device.Device).J3){case 39:break;case 4:case 38:A._GetAutoObject(
C.A1).Afu(39);break;default:A._GetAutoObject(C.A1).BX(39);}}else switch(A._GetAutoObject(
A.Device.Device).J3){case 38:case 4:case 39:A._GetAutoObject(C.A1).Fl();break;default:;
}this.AwJ=A._GetAutoObject(A.Device.Device).Y4;}},Bsz:function(H){switch(A._GetAutoObject(
A.Device.Device).AnI){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A_(
40,true,A.jm,0,null);A._GetAutoObject(A.Device.Device).Alc(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A_(75,true,A.jm,0,null);A._GetAutoObject(A.Device.Device).Alc(0
);}break;default:A.aa8("%s",ARt+A._GetAutoObject(A.Device.Device).AnI.toFixed());
}},Am$:function(H){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Cn(0);A._GetAutoObject(C.A1).BX(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).J3===5)A._GetAutoObject(C.A1).Afu(3);break;
default:;}},A9$:function(H){switch(A._GetAutoObject(A.Device.Device).AiM){case 0:
case 2:case 1:A._GetAutoObject(A.Device.Device).Z$(false);break;case 4:{A._GetAutoObject(
A.Device.Device).AcW(65535);A._GetAutoObject(A.Device.Device).Z$(true);}break;case
3:{A._GetAutoObject(A.Device.Device).AcW(255);A._GetAutoObject(A.Device.Device).
Z$(true);}break;default:A.aa8("%s",ARu+A._GetAutoObject(A.Device.Device).AiM.toFixed(
));}},BeG:function(H){var B;this.Kw.Ah8().CE(this);this.Kw.Bs0(this);},BdL:function(
){return this.Kw;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);C.Aip._Init.
call(this.Aip={I:this},0);C.Ne._Init.call(this.Ne={I:this},0);this.__proto__=C.FZ;
this.G(B3);this.Ne.G(Vq);this.J(this.Ne,0);this.US=A._NewObject(C.US,0);this.AYa=
A._GetAutoObject(C.A1);this.Aip.AJe=[this,this.BdL,this.Afn];this.AXT=A._GetAutoObject(
C.XF);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Aip._Done(
);this.Ne._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Aip._ReInit();this.Ne._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.YE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.US)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AYa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Kw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AXT)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Aip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ne)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Zi={A4n:null,CU:null
,N:null,CF:null,AkV:null,AkX:null,PP:null,AkW:null,AkT:null,AkZ:null,AkU:null,DS:
function(H){var EQ=0;var X=this.A6;switch(this.CF.CM){case 6:EQ=2;break;case 7:EQ=
7;break;case 4:EQ=4;break;case 5:EQ=5;break;default:;}X=this.Q8(X,EQ,0x14);if(!!
X)this.A8(X);},A6P:function(s){this.DS(s);},AjM:function(H){var DF=(A.Core.B0.isPrototypeOf(
H)?H:null);if(DF.Aag&&(this.Es().Apo===false))return;A.ow(this.Es().CA,this);},AET:
function(s){this.AjM(s);},Am_:function(H){var DF=(A.Core.B0.isPrototypeOf(H)?H:null
);if(DF.Aag&&(this.Es().XL===false))return;A.ow(this.Es().Cl,this);},AEW:function(
s){this.Am_(s);},JC:function(H){if(this.PP.Aag)return;},Avu:function(s){this.JC(
s);},Aw5:function(H){var DF=(A.Core.B0.isPrototypeOf(H)?H:null);if(DF.Aag&&(this.
Es().XK===false))return;A.ow(this.Es().Cg,this);},AEV:function(s){this.Aw5(s);},
Es:function(){if(!!this.M_())return this.CU;else return this.N;},M_:function(){return this.
CU;},HU:function(E){this.A4n=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg
);C.N._Init.call(this.N={I:this},0);A.Core.B0._Init.call(this.CF={I:this},0);A.Core.
B0._Init.call(this.AkV={I:this},0);A.Core.B0._Init.call(this.AkX={I:this},0);A.Core.
B0._Init.call(this.PP={I:this},0);A.Core.B0._Init.call(this.AkW={I:this},0);A.Core.
B0._Init.call(this.AkT={I:this},0);A.Core.B0._Init.call(this.AkZ={I:this},0);A.Core.
B0._Init.call(this.AkU={I:this},0);this.__proto__=C.Zi;this.G([0,0,C.Apx[0],C.Apx[
1]]);this.N.G(Vr);this.N.An(false);this.N.W(false);this.CF.Filter=147;this.AkV.Filter=
26;this.AkX.Filter=28;this.PP.Filter=1;this.AkW.Filter=27;this.AkT.Filter=44;this.
AkZ.Filter=9;this.AkU.Filter=42;this.J(this.N,0);this.CF.B1=[this,this.A6P];this.
CF.D_=[this,this.A6P];this.AkV.B1=[this,this.AET];this.AkV.D_=[this,this.AET];this.
AkX.B1=[this,this.AEW];this.AkX.D_=[this,this.AEW];this.PP.B1=[this,this.Avu];this.
PP.D_=[this,this.Avu];this.AkW.B1=[this,this.AEV];this.AkW.D_=[this,this.AEV];this.
AkT.B1=[this,this.AET];this.AkT.D_=[this,this.AET];this.AkZ.B1=[this,this.AEW];this.
AkZ.D_=[this,this.AEW];this.AkU.B1=[this,this.AEV];this.AkU.D_=[this,this.AEV];}
,_Done:function(){this.__proto__=A.Core.O;this.N._Done();this.CF._Done();this.AkV.
_Done();this.AkX._Done();this.PP._Done();this.AkW._Done();this.AkT._Done();this.
AkZ._Done();this.AkU._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.N._ReInit();this.CF._ReInit();this.AkV._ReInit();this.
AkX._ReInit();this.PP._ReInit();this.AkW._ReInit();this.AkT._ReInit();this.AkZ._ReInit(
);this.AkU._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.A4n)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CU)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CF)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AkV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AkX
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AkW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AkT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AkU)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::Dialog"};C.ACK={_Init:function(){A.abm.ACM.
_Init.call(this,0);this.JF=0x22;this.AbQ=true;this.ArV=4;},_variants:function(){
return this;},_this:null};C.ACL={_Init:function(){A.abm.ACM._Init.call(this,0);this.
JF=0x22;this.AbQ=true;this.ArV=5;},_variants:function(){return this;},_this:null
};C.APK={QZ:function(){var B;var Ak=(A.abm.Ac2.isPrototypeOf(B=A.abm.Ab6.QZ.call(
this))?B:null);if(!Ak)throw new Error(Ap3);Ak.B8.Ch=100;return Ak;},QY:function(
){var B;var Ak=(A.abm.AtY.isPrototypeOf(B=A.abm.Ab6.QY.call(this))?B:null);if(!Ak
)throw new Error(Ap3);Ak.ED.BW=100;return Ak;},_Init:function(aArg){A.abm.Ab6._Init.
call(this,aArg);this.__proto__=C.APK;},_className:"Application::ShadeTransition"
};C.AkJ={Ae3:null,U1:null,IH:null,CL:null,AnimalId:-1,GroupId:-1,Azq:true,CW:function(
E){C.BU.CW.call(this,E);this.U1.L(E);this.IH.L(E);this.Ae3.L(E);},OnSetAnimalId:
function(E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.IH.R(A.z2(A.
abg.Als));else this.IH.R(E.toFixed());},Z4:function(E){if(this.GroupId===E)return;
this.GroupId=E;if(E<0)this.U1.R(A.z2(A.abg.Als));else this.U1.R(E.toFixed());},Ez:
function(H){},MC:function(s){this.Ez(s);},A3C:function(E){if(this.Azq===E)return;
this.Azq=E;this.U1.W(this.Azq);this.Ae3.W(this.Azq);},_Init:function(aArg){C.BU.
_Init.call(this,aArg);A.abh.Am._Init.call(this.Ae3={I:this},0);A.abh.Text._Init.
call(this.U1={I:this},0);A.abh.Text._Init.call(this.IH={I:this},0);C.CL._Init.call(
this.CL={I:this},0);this.__proto__=C.AkJ;this.Ae3.G(ARv);this.U1.G(ARw);this.U1.
A0(0x11);this.U1.R(A.z2(A.abg.Als));this.IH.G(ARx);this.IH.A0(0x11);this.IH.R(A.
z2(A.abg.Als));this.CL.G(ARy);this.J(this.Ae3,0);this.J(this.U1,0);this.J(this.IH
,0);this.J(this.CL,0);this.Ae3.Ar(A.zW(A.abi.AL3));this.U1.Y(A.zW(A.eV.Au));this.
IH.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.BU;this.Ae3._Done();this.
U1._Done();this.IH._Done();this.CL._Done();C.BU._Done.call(this);},_ReInit:function(
){C.BU._ReInit.call(this);this.Ae3._ReInit();this.U1._ReInit();this.IH._ReInit();
this.CL._ReInit();},_Mark:function(D){var B;C.BU._Mark.call(this,D);if((B=this.Ae3
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.U1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CL)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderIds"};C.AzA={Init:function(aArg){var B;A.za([
this,this.MC],[B=A._GetAutoObject(A.Device.Helper).V,B.AoH,B.XE],0);A.za([this,this.
MC],[B=A._GetAutoObject(A.Device.Helper).V,B.A2A,B.Alh],0);A.y_([this,this.MC],A.
_GetAutoObject(A.Device.Helper).V,0);A.za([this,this.MC],[B=A._GetAutoObject(A.Device.
Helper).V,B.O0,B.DO],0);A.za([this,this.MC],[B=A._GetAutoObject(A.Device.Helper).
V,B.A27,B.AtW],0);A.za([this,this.MC],[B=A._GetAutoObject(A.Device.Helper).V,B.A2u
,B.AcQ],0);A.za([this,this.MC],[B=A._GetAutoObject(A.Device.Helper).V,B.A2v,B.ST
],0);A.za([this,this.MC],[B=A._GetAutoObject(A.Device.Helper).V,B.A2w,B.AcS],0);
A.za([this,this.MC],[B=A._GetAutoObject(A.Device.Helper).V,B.A2z,B.AcU],0);A.ow([
this,this.MC],this);},CW:function(E){C.AkJ.CW.call(this,E);this.CL.CW(E);},Ez:function(
H){if(A._GetAutoObject(A.Device.Helper).V.An9()){this.Z4(A._GetAutoObject(A.Device.
Helper).V.LocationId);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.VisualId
);}else{this.Z4(-1);this.OnSetAnimalId(-1);}this.CL.DO(A._GetAutoObject(A.Device.
Helper).V.AnimalType);this.CL.AA_(A._GetAutoObject(A.Device.Helper).V.WorstAssessment
);this.CL.AcQ(A._GetAutoObject(A.Device.Helper).V.IsAlarm);this.CL.ST(A._GetAutoObject(
A.Device.Helper).V.IsFever);this.CL.AcS(A._GetAutoObject(A.Device.Helper).V.IsWatch
);this.CL.AcU(A._GetAutoObject(A.Device.Helper).V.LastTemperature);},_Init:function(
aArg){C.AkJ._Init.call(this,aArg);this.__proto__=C.AzA;this.Init(aArg);},_className:
"Application::HeaderSelectedAnimalIds"};C.LJ={ApI:A.aan(3,A.jm,null),Ci:A.aan(3,
0,{0:7,1:30,2:90}),Ak5:3,Du:function(){if(this.Ak5<3)return this.Ak5;else return 3;
},Da:function(aIndex){if((aIndex>=3)||(aIndex>=this.Ak5))return-1;return this.Ci.
Get(aIndex);},GP:function(aIndex){if((aIndex>=3)||(aIndex>=this.Ak5))return ARz;
return this.ApI.Get(aIndex);},DT:function(A2){var P=0;while((P<3)&&(P<=this.Ak5)
){if(this.Ci.Get(P)===A2)return P;P=P+1;}return-1;},HN:function(){var P=0;var max=-
1;while((P<3)&&(P<=this.Ak5)){if(this.Ci.Get(P)>max)max=this.Ci.Get(P);P=P+1;}return max;
},_Init:function(aArg){C.AC._Init.call(this,aArg);(this.ApI=[]).__proto__=C.LJ.ApI;(
this.Ci=[]).__proto__=C.LJ.Ci;this.__proto__=C.LJ;this.ApI.Set(0,A.z2(A.abg.BcE)
);this.ApI.Set(1,A.z2(A.abg.BcC));this.ApI.Set(2,A.z2(A.abg.BcD));},_className:"Application::Days"
};C.APH={Akj:null,B2:null,P5:null,PD:null,A5c:A.jm,Init:function(aArg){var B;this.
T.R(A.z2(A.abg.Undertemperature));A.za([this,this.Bth],[B=A._GetAutoObject(A.Device.
Device),B.AoG,B.Aqg],0);},Bh:function(aSize){},Ai:function(Ae){var B;var F;C.C9.
Ai.call(this,Ae);var Fv=((Ae&0x20)===0x20);var Fu=this.Bi.Bw;this.B2.L(A.iF.Bg);
if(!!this.Q)this.B2.R(((ARA+A._GetAutoObject(A.Device.Converter).AiG((F=this.Q,F[
1].call(F[0]))))+Cv)+A._GetAutoObject(A.abk.Temperature).Aju());this.Ht.W((this.
AI<A._GetAutoObject(A.Device.Helper).A0R())&&(Fv||Fu));},CY:function(H){var F;if(
!!this.Q)this.Bu((F=this.Q,F[1].call(F[0])));},Jz:function(H){var F;var BR=this.
AI;C.C9.Jz.call(this,H);if(this.AI<A._GetAutoObject(A.Device.Helper).A0R()){this.
Bu(this.AI+10);if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.
aat(this.Q,0);}}},Ju:function(H){var F;var BR=this.AI;C.C9.Ju.call(this,H);this.
Bu(this.AI-10);if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.
aat(this.Q,0);}},A4b:function(E){if(this.A5c===E)return;this.A5c=E;this.Al();},Bth:
function(H){this.Al();},_Init:function(aArg){C.C9._Init.call(this,aArg);A.abh.AH.
_Init.call(this.Akj={I:this},0);C.CH._Init.call(this.B2={I:this},0);A.abh.AH._Init.
call(this.P5={I:this},0);A.abh.Am._Init.call(this.PD={I:this},0);this.__proto__=
C.APH;this.G(Ye);this.Background.G(Ye);this.T.G(Ap4);this.T.L(A.iF.Bg);this.Akj.
G(ARB);this.Akj.L(A.iF.Ads);this.GS.G(ARC);this.B2.G(ARD);this.B2.A0(0x12);this.
B2.L(A.iF.Text);this.Ht.G(ARE);this.P5.G(ARF);this.P5.L(A.iF.E1);this.PD.G(ARG);
this.J(this.Akj,-2);this.J(this.B2,-1);this.J(this.P5,0);this.J(this.PD,0);this.
T.Y(A.zW(A.eV.Au));this.T.Bz(A.zW(A.eV.AB));this.B2.Y(A.zW(A.eV.Gg));this.B2.Bz(
A.zW(A.eV.Au));this.PD.Ar(A.zW(A.abi.AzQ));this.Init(aArg);},_Done:function(){this.
__proto__=C.C9;this.Akj._Done();this.B2._Done();this.P5._Done();this.PD._Done();
C.C9._Done.call(this);},_ReInit:function(){C.C9._ReInit.call(this);this.Akj._ReInit(
);this.B2._ReInit();this.P5._ReInit();this.PD._ReInit();},_Mark:function(D){var B;
C.C9._Mark.call(this,D);if((B=this.Akj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
B2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemUndertemperature"
};C.A4E={Q:null,AgL:null,Init:function(aArg){var B;A.za([this,this.A9A],[B=A._GetAutoObject(
A.Device.Device),B.AAF,B.A6c],0);A.ow([this,this.A9A],this);},AF:function(E){if(
A.z_(this.Q,E))return;this.Q=E;},Afu:function(Ai8){A._GetAutoObject(A.Device.Device
).Xw(Ai8);},A9A:function(H){var F;if(!this.Q){A.aa8("%s",ARH);return;}var Bq=null;
if(this.AgL.Contains(A._GetAutoObject(A.Device.Device).J3)){Bq=this.AgL.A4m();while(
!!Bq&&(Bq.AlJ!==A._GetAutoObject(A.Device.Device).J3))Bq=this.AgL.A4m();}if(!Bq)
Bq=this.Br3(A._GetAutoObject(A.Device.Device).J3);(F=this.Q,F[2].call(F[0],Bq));
},Br3:function(Ai8){var Bq=null;switch(Ai8){case 0:case 1:Bq=A._NewObject(C.APO,
0);break;case 2:Bq=A._NewObject(C.Wc,0);break;case 3:Bq=A._NewObject(C.Asq,0);break;
case 61:Bq=A._NewObject(C.AQn,0);break;case 88:Bq=A._NewObject(C.NewMenu,0);break;
case 6:Bq=A._NewObject(C.AM2,0);break;case 16:Bq=A._NewObject(C.AJl,0);break;case
22:Bq=A._NewObject(C.AQj,0);break;case 17:Bq=A._NewObject(C.AP5,0);break;case 45:
Bq=A._NewObject(C.AJj,0);break;case 55:Bq=A._NewObject(C.AIx,0);break;case 23:Bq=
A._NewObject(C.AQG,0);break;case 18:Bq=A._NewObject(C.AJv,0);break;case 19:Bq=A.
_NewObject(C.APk,0);break;case 37:Bq=A._NewObject(C.AMz,0);break;case 87:Bq=A._NewObject(
C.AO9,0);break;case 72:Bq=A._NewObject(C.AJt,0);break;case 73:Bq=A._NewObject(C.
AJu,0);break;case 93:Bq=A._NewObject(C.AJs,0);break;case 94:Bq=A._NewObject(C.AJr
,0);break;case 74:Bq=A._NewObject(C.AJq,0);break;case 5:Bq=A._NewObject(C.APY,0);
break;case 4:Bq=A._NewObject(C.AbT,0);break;case 39:Bq=A._NewObject(C.AIV,0);break;
case 38:Bq=A._NewObject(C.AJc,0);break;case 27:Bq=A._NewObject(C.UL,0);break;case
7:Bq=A._NewObject(C.AnW,0);break;case 92:Bq=A._NewObject(C.AJE,0);break;case 30:
Bq=A._NewObject(C.Aow,0);break;case 89:Bq=A._NewObject(C.ANl,0);break;case 33:Bq=
A._NewObject(C.AHI,0);break;case 34:Bq=A._NewObject(C.ManualActionScanScreen,0);
break;case 31:Bq=A._NewObject(C.SetTransponderScreen,0);break;case 49:Bq=A._NewObject(
C.SetSaveTransponderScreen,0);break;case 54:Bq=A._NewObject(C.NewAnimalSetTransponderScreen
,0);break;case 63:Bq=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case
90:Bq=A._NewObject(C.MotherScanScreen,0);break;case 91:Bq=A._NewObject(C.SetSaveNaisIdScreen
,0);break;case 8:Bq=A._NewObject(C.Ge,0);break;case 9:Bq=A._NewObject(C.Iy,0);break;
case 24:Bq=A._NewObject(C.AHX,0);break;case 10:Bq=A._NewObject(C.Akf,0);break;case
21:Bq=A._NewObject(C.AH1,0);break;case 11:Bq=A._NewObject(C.AH0,0);break;case 28:
Bq=A._NewObject(C.ArE,0);break;case 53:Bq=A._NewObject(C.AHZ,0);break;case 29:Bq=
A._NewObject(C.AHY,0);break;case 36:Bq=A._NewObject(C.H9,0);break;case 12:Bq=A._NewObject(
C.AHW,0);break;case 40:Bq=A._NewObject(C.AHV,0);break;case 42:Bq=A._NewObject(C.
AHU,0);break;case 14:Bq=A._NewObject(C.AJa,0);break;case 13:Bq=A._NewObject(C.AJb
,0);break;case 43:Bq=A._NewObject(C.AI$,0);break;case 20:Bq=A._NewObject(C.AQx,0
);break;case 41:Bq=A._NewObject(C.AQw,0);break;case 44:Bq=A._NewObject(C.AQv,0);
break;case 46:Bq=A._NewObject(C.AKi,0);break;case 47:Bq=A._NewObject(C.AKh,0);break;
case 48:Bq=A._NewObject(C.AKg,0);break;case 69:Bq=A._NewObject(C.AJD,0);break;case
70:Bq=A._NewObject(C.AJC,0);break;case 71:Bq=A._NewObject(C.AJB,0);break;case 50:
Bq=A._NewObject(C.ANA,0);break;case 51:Bq=A._NewObject(C.ANz,0);break;case 52:Bq=
A._NewObject(C.ANy,0);break;case 96:Bq=A._NewObject(C.AQM,0);break;case 97:Bq=A.
_NewObject(C.AQL,0);break;case 98:Bq=A._NewObject(C.AQK,0);break;case 80:Bq=A._NewObject(
C.ANv,0);break;case 81:Bq=A._NewObject(C.ANu,0);break;case 82:Bq=A._NewObject(C.
ANt,0);break;case 85:Bq=A._NewObject(C.APo,0);break;case 83:Bq=A._NewObject(C.APn
,0);break;case 84:Bq=A._NewObject(C.APm,0);break;case 58:Bq=A._NewObject(C.AHN,0
);break;case 59:Bq=A._NewObject(C.AHM,0);break;case 60:Bq=A._NewObject(C.AHL,0);
break;case 15:Bq=A._NewObject(C.APa,0);break;case 68:Bq=A._NewObject(C.AP4,0);break;
case 78:Bq=A._NewObject(C.AM0,0);break;case 79:Bq=A._NewObject(C.AMZ,0);break;case
26:Bq=A._NewObject(C.ANn,0);break;case 62:Bq=A._NewObject(C.ANk,0);break;case 25:
Bq=A._NewObject(C.AJS,0);break;case 75:Bq=A._NewObject(C.AJT,0);break;case 67:Bq=
A._NewObject(C.AJR,0);break;case 66:Bq=A._NewObject(C.AJU,0);break;case 64:Bq=A.
_NewObject(C.AJV,0);break;case 65:Bq=A._NewObject(C.Ar0,0);break;case 77:Bq=A._NewObject(
C.AJW,0);break;case 76:Bq=A._NewObject(C.AJP,0);break;case 95:Bq=A._NewObject(C.
AH3,0);break;case 32:Bq=A._NewObject(C.WeightListScreen,0);break;case 35:Bq=A._NewObject(
C.AnimalSingleInfoScreen,0);break;case 56:Bq=A._NewObject(C.AnimalMultiInfoScreen
,0);break;case 57:Bq=A._NewObject(C.MultiInfoActionsScreen,0);break;case 86:Bq=A.
_NewObject(C.AId,0);break;default:throw new Error(ARI);}if(!!Bq)Bq.AlJ=Ai8;return Bq;
},BX:function(Ai8){var F;if(!(F=this.Q,F[1].call(F[0])))A.aa8("%s",ARJ);else this.
AgL.Bg8((F=this.Q,F[1].call(F[0])));A._GetAutoObject(A.Device.Device).Xw(Ai8);},
Fl:function(){var A_E=3;var A_D=this.AgL.BgX();if(!!A_D)A_E=A_D.AlJ;else A.aa8("%s"
,ARK);A._GetAutoObject(A.Device.Device).Xw(A_E);},_Init:function(aArg){C.A4G._Init.
call(this.AgL={I:this},0);this.__proto__=C.A4E;this.Init(aArg);A.hJ++;},_Done:function(
){this.__proto__=null;this.AgL._Done();A.hJ--;},_ReInit:function(){this.AgL._ReInit(
);},_Mark:function(D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AgL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"
};C.A1={_Init:function(){C.A4E._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.ACe={Hx:null,WJ:null,Ac5:null,YM:null,LX:null,Av_:1,RatingMode:0
,RatedAttribute:0,C3:function(){this.WJ.R(this.A8m(this.RatedAttribute));this.AGy(
this);},Ai:function(Ae){this.LX.R(A._GetAutoObject(A.Device.Helper).Nh(A.z2(A.abg.
ANb),Qi,this.Av_.toFixed()));if(this.RatingMode===1)this.LX.W(true);else this.LX.
W(false);},CE:function(H){var B;C.Aw.CE.call(this,H);if(A._GetAutoObject(A.Device.
Device).Bt.Mp())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.
Device.Device).Bt.Ie().toFixed(),0,null);this.Hx.GC();this.Hx.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).V.Id);A._GetAutoObject(A.Device.Helper).At$(this.Hx,5);A.za([this
,this.AGy],[B=A._GetAutoObject(A.Device.Device),B.AN2,B.AUM],0);A.za([this,this.
AGy],[B=A._GetAutoObject(A.Device.Helper).V,B.O0,B.DO],0);A.ow([this,this.AGy],this
);},ApF:function(H){var a=this.AGc(this.RatedAttribute);this.A_U();this.Av_=this.
Av_-1;this.Al();if(!a)this.ANi();else this.Rs(a);},UY:function(H){var a=this.A8t(
this.RatedAttribute);this.A_U();this.Av_=this.Av_+1;this.Al();if(!a)this.A1L();else
this.Rs(a);},AGc:function(ME){if(!this.RatingMode)return 0;else if(this.RatingMode===
1)switch(ME){case 2:return 0;case 1:return 2;case 4:return 1;case 3:return 4;default:
return 0;}else throw new Error(ADJ);},A8t:function(ME){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(ME){case 2:return 1;case 1:return 4;case 4:return 3;
case 3:return 0;default:return 0;}else throw new Error(ADJ);},Rs:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.WJ.R(this.A8m(E));this.
Dz(E);this.Ac5.Alm(this.Hx.BbF(E));if(!this.AGc(E)){if(this.AMF())this.N.Cm(A.zW(
A.abi.AhE));else this.N.Cm(null);}else this.N.Cm(A.zW(A.abi.Ack));},A8m:function(
ME){return this.YM.Ca(ME);},Br2:function(ME){if(!!ME){var a=this.AGc(ME);if(!a)return A.
jm;else return this.A8n(a);}else return A.jm;},Br1:function(ME){if(!!ME){var a=this.
A8t(ME);if(!a)return A.jm;else return this.A8n(a);}else return A.jm;},ANi:function(
){},A1L:function(){},A0S:function(){return null;},A8n:function(ME){return this.YM.
KL(ME);},A_U:function(){if(!!this.RatedAttribute)this.Hx.BhD(this.RatedAttribute
,this.Ac5.AY);},AGy:function(H){if(this.AMF())this.RatingMode=A._GetAutoObject(A.
Device.Device).RatingMode;else this.RatingMode=0;this.Rs(2);this.Dz(this.RatedAttribute
);this.Al();},Aw4:function(H){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AiB:function(H){var a=this.AGc(this.RatedAttribute);if(!a){if(this.AMF())this.
Aw4(this);}else this.ANi();},Dz:function(ME){this.N.GX(this.Br2(ME));if(!!this.N.
AlE){this.N.C8(null);this.N.O3(true);}else{this.N.C8(A.zW(A.abi.Ack));this.N.O3(
false);}this.N.Cb(this.Br1(ME));if(!!this.N.AlG){this.N.Db(null);this.N.O4(true);
}else{this.N.Db(this.A0S());this.N.O4(false);}},AMF:function(){switch(A._GetAutoObject(
A.Device.Helper).V.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.aa8("%s%e",Ap5,A._GetAutoObject(A.Device.Helper).V.AnimalType);}return false;}
,_Init:function(aArg){C.Aw._Init.call(this,aArg);A.abh.Text._Init.call(this.WJ={
I:this},0);C.Rating._Init.call(this.Ac5={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.YM={I:this},0);A.abh.Text._Init.call(this.LX={I:this},0);this.__proto__=
C.ACe;this.Background.L(A.iF.CD);this.N.W(true);this.Dt(C.If);this.WJ.G(ARL);this.
WJ.KF(true);this.WJ.L(A.iF.Text);this.Ac5.G(ARM);this.LX.G(ARN);this.LX.A0(0x14);
this.LX.R(A.z2(A.abg.ANb));this.LX.L(A.iF.Text);this.J(this.WJ,0);this.J(this.Ac5
,0);this.J(this.LX,0);this.A8(this.Ac5);this.N.CA=[this,this.ApF];this.N.Cg=[this
,this.AiB];this.N.Cl=[this,this.UY];this.WJ.Y(A.zW(A.eV.Au));this.Ac5.AR=[this,this.
UY];this.LX.Y(A.zW(A.eV.Au));this.Hx=A._NewObject(A.Device.Rating,0);},_Done:function(
){this.__proto__=C.Aw;this.WJ._Done();this.Ac5._Done();this.YM._Done();this.LX._Done(
);C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.WJ._ReInit(
);this.Ac5._ReInit();this.YM._ReInit();this.LX._ReInit();this.LX.R(A.z2(A.abg.ANb
));this.WJ.Y(A.zW(A.eV.Au));this.LX.Y(A.zW(A.eV.Au));this.C3();},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.Hx)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LX)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"};C.Hm={Ac:null,Gender:
null,AnimalType:null,Breed:null,Vc:null,Y7:null,ApW:null,Df:null,GU:null,EF:null
,FD:null,M8:null,AD:null,PA:0,Init:function(aArg){A.za([this,this.A6O],this.Df.Q
,0);A.ow([this,this.A6O],this);A.ow([this,this.AxA],this);},Ai:function(Ae){C.Aw.
Ai.call(this,Ae);var Ab;var AXc=false;var Awa=this.Ac.Zp(null,0x1);while(!!Awa){
Ab=(C.B9.isPrototypeOf(Awa)?Awa:null);if(!!Ab){Ab.Bk(AXc);AXc=!AXc;}Awa=this.Ac.
Zp(Awa,0x1);}},DS:function(H){var B;var EQ=0;var X=this.A6;switch(this.CF.CM){case
6:EQ=2;break;case 7:EQ=7;break;case 4:EQ=4;break;case 5:EQ=5;break;default:;}X=this.
Q8(X,EQ,0x415);if(!!X)this.A8(X);if(!!X&&((X.S&0x400)===0x400))this.Ac.IA(X,true
,null,null);this.AxA(this);},FX:function(H){var B;this.AD.N0((B=this.Ac.Dd(0x1))[
3]-B[1]);this.AD.N4((B=this.Ac.M)[3]-B[1]);this.AD.N2(-this.Ac.Br[1]);},Ate:function(
E){if(this.PA===E)return;this.PA=E;A.aat([this,this.A2j,this.Ate],0);},AxA:function(
H){var B;var G5=(C.B9.isPrototypeOf(B=this.A6)?B:null);this.N.GX(A.jm);this.N.C8(
A.zW(A.abi.ET));this.N.CA=[this,this.AES];if(!!G5&&!!G5.Akb){this.N.Fr(A.jm);this.
N.KJ.DC(255);this.N.Atu(G5.Aza);this.N.Cm(G5.Asz);this.N.Cg=G5.Akb;}else{this.N.
Fr(A.jm);this.N.Cm(null);this.N.Cg=null;}if(!!G5&&!!G5.Ael){this.N.Cb(A.jm);this.
N.IJ.DC(G5.AtX);this.N.AoX(G5.AkC);this.N.Db(G5.Aoc);this.N.Cl=G5.Ael;}else this.
Arf();},Ad9:function(H){A.aa8("%s",AuZ);},Avt:function(s){this.Ad9(s);},EY:function(
H){A.aa8("%s",AuZ);},AES:function(s){this.EY(s);},Arf:function(){A.aa8("%s",AiV);
},AwZ:function(H){A.aa8("%s",AuZ);},Vs:function(s){this.AwZ(s);},Pw:function(Ag){
this.A8(Ag);this.Ac.IA(Ag,true,null,null);this.Ac.AbB(null,null);},Am5:function(
H){var F;this.EF.AtN(A._GetAutoObject(A.Device.Helper).Ahw((F=this.Df.Q,F[1].call(
F[0]))));},A6O:function(s){this.Am5(s);},Iu:function(H){A.ow([this,this.FX],this
);},A2j:function(){return this.PA;},_Init:function(aArg){C.Aw._Init.call(this,aArg
);A.Core.Ac._Init.call(this.Ac={I:this},0);C.Gender._Init.call(this.Gender={I:this
},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);C.Breed._Init.call(this.
Breed={I:this},0);C.AQI._Init.call(this.Vc={I:this},0);A.Device.MS._Init.call(this.
Y7={I:this},0);A.Device.Adx._Init.call(this.ApW={I:this},0);C.B_._Init.call(this.
Df={I:this},0);C.B_._Init.call(this.GU={I:this},0);C.ApA._Init.call(this.EF={I:this
},0);C.ACC._Init.call(this.FD={I:this},0);C.ACB._Init.call(this.M8={I:this},0);C.
AD._Init.call(this.AD={I:this},0);this.__proto__=C.Hm;var B;this.N.W(true);this.
Dt(C.If);this.Ac.G(FK);this.Ac.Le(1);this.PA=A._GetAutoObject(A.Device.Helper).Ahw(
this.AnimalType.Q);this.Df.G(AfV);this.Df.Aj(true);this.Df.U(A.z2(A.abg.Auv));this.
GU.G(Au0);this.GU.Aj(true);this.GU.U(A.z2(A.abg.Aub));this.EF.G(AlX);this.EF.Aj(
true);this.EF.U(A.z2(A.abg.PA));this.EF.Hw(1000);this.EF.FP(99000);this.EF.AtN(A.
_GetAutoObject(A.Device.Helper).Ahw(this.AnimalType.Q));this.FD.G(AfW);this.FD.Aj(
true);this.FD.U(A.z2(A.abg.Breed));this.M8.G(ARO);this.M8.Aj(true);this.M8.U(A.z2(
A.abg.Vc));this.AD.G(Ap6);this.J(this.Ac,0);this.J(this.Df,0);this.J(this.GU,0);
this.J(this.EF,0);this.J(this.FD,0);this.J(this.M8,0);this.J(this.AD,0);this.Ac.
Eu=[this,this.Iu];this.Gender.NZ(A._GetAutoObject(A.Device.Helper).V);this.AnimalType.
NZ(A._GetAutoObject(A.Device.Helper).V);this.Breed.NZ(A._GetAutoObject(A.Device.
Helper).V);this.Vc.NZ(A._GetAutoObject(A.Device.Helper).V);this.Df.AF([B=this.AnimalType
,B.Cz,B.CB]);this.Df.Dh(this.AnimalType);this.GU.AF([B=this.Gender,B.Cz,B.CB]);this.
GU.Dh(this.Gender);this.EF.AF([this,this.A2j,this.Ate]);this.FD.Hb([this,this.Es
,this.HU]);this.FD.M$([B=this.FD,B.Gy]);this.FD.Na(A.zW(A.abi.Edit));this.FD.AF([
B=this.Breed,B.Cz,B.CB]);this.FD.Dh(this.Breed);this.FD.ABd(this.Y7);this.M8.Hb([
this,this.Es,this.HU]);this.M8.M$([B=this.M8,B.Gy]);this.M8.Na(A.zW(A.abi.Edit));
this.M8.AF([B=this.Vc,B.Cz,B.CB]);this.M8.Dh(this.Vc);this.M8.ABd(this.ApW);this.
Init(aArg);},_Done:function(){this.__proto__=C.Aw;this.Ac._Done();this.Gender._Done(
);this.AnimalType._Done();this.Breed._Done();this.Vc._Done();this.Y7._Done();this.
ApW._Done();this.Df._Done();this.GU._Done();this.EF._Done();this.FD._Done();this.
M8._Done();this.AD._Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.
call(this);this.Ac._ReInit();this.Gender._ReInit();this.AnimalType._ReInit();this.
Breed._ReInit();this.Vc._ReInit();this.Y7._ReInit();this.ApW._ReInit();this.Df._ReInit(
);this.GU._ReInit();this.EF._ReInit();this.FD._ReInit();this.M8._ReInit();this.AD.
_ReInit();this.Df.U(A.z2(A.abg.Auv));this.GU.U(A.z2(A.abg.Aub));this.EF.U(A.z2(A.
abg.PA));this.FD.U(A.z2(A.abg.Breed));this.M8.U(A.z2(A.abg.Vc));},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vc).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.ApW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalDataScreen"};C.UL={AvK:false,Lv:function(H){if(A._GetAutoObject(
A.Device.Device).Aq.Mp())A._GetAutoObject(A.Device.Device).A_(41,true,A._GetAutoObject(
A.Device.Device).Aq.Ie().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).V.GC(
);A._GetAutoObject(A.Device.Helper).Ax$(A._GetAutoObject(A.Device.Helper).V);},Arf:
function(){this.N.Cb(A.jm);this.N.Db(A.zW(A.abi.AzV));this.N.Cl=[this,this.Avt];
},CE:function(H){if(!this.AvK){this.AvK=true;A.ow([this,this.Vs],this);}else C.Aow.
CE.call(this,H);},AwZ:function(H){A._GetAutoObject(C.A1).BX(54);},_Init:function(
aArg){C.Aow._Init.call(this,aArg);this.__proto__=C.UL;this.Lg(this.AD,-1);},_className:
"Application::NewAnimalManualDataScreen"};C.If={_Init:function(aArg){C.AzA._Init.
call(this,aArg);this.__proto__=C.If;this.A3C(false);},_className:"Application::HeaderSelectedAnimalId"
};C.Iy={Filter:null,Gender:null,AnimalType:null,Transponder:null,D1:null,Ac:null
,O9:null,O_:null,L1:null,O$:null,Lj:null,Oy:null,Oz:null,K2:null,OA:null,Kt:null
,Ky:null,IT:null,J$:null,LT:null,WA:null,RJ:null,QG:null,AD:null,AuB:0,AuA:0,ArC:
0,ArB:0,Aov:0,ApO:0,Asb:0,Asc:0,YU:false,Aay:false,Init:function(aArg){A.za([this
,this.AKk],this.Ky.Q,0);A.za([this,this.AIl],this.IT.Q,0);A.za([this,this.BiI],this.
J$.Q,0);A.za([this,this.Bc3],this.LT.Q,0);A.za([this,this.Bi$],this.Lj.Q,0);A.za([
this,this.Bi_],this.L1.Q,0);A.za([this,this.A$R],this.Kt.Q,0);A.za([this,this.A$Q
],this.K2.Q,0);this.A8(this.O9);},DS:function(H){var EQ=0;var X=this.A6;switch(this.
CF.CM){case 6:EQ=2;break;case 7:EQ=7;break;case 4:EQ=4;break;case 5:EQ=5;break;default:;
}X=this.Q8(X,EQ,0x414);if(!!X)this.A8(X);this.TA(this);},CE:function(H){if(!!A._GetAutoObject(
A.Device.Device).Aq.Filter)this.Bo(A._GetAutoObject(A.Device.Device).Aq.Filter.F0(
));else this.Bo(A._NewObject(A.Device.Filter,0));},EY:function(H){A._GetAutoObject(
C.A1).Fl();},AXi:function(H){var Eh=(C.Ab9.isPrototypeOf(H)?H:null);if(!Eh)return;
var At=this.Filter.DG(Eh.D8,Eh.Operator);if(!!At){this.Filter.P6(At);A.aat([this
,this.Fd,this.Ff],0);}else{if(Eh.D8===11){At=A._NewObject(A.Device.BoolFilterCriterion
,0);At.EE=Eh.D8;At.Operator=Eh.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
At)?At:null).AY=true;}else if(Eh.D8===12){At=A._NewObject(A.Device.BoolFilterCriterion
,0);At.EE=Eh.D8;At.Operator=Eh.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
At)?At:null).AY=true;}else if(Eh.D8===8){At=A._NewObject(A.Device.BoolFilterCriterion
,0);At.EE=Eh.D8;At.Operator=Eh.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
At)?At:null).AY=true;}else A.aa8("%s",ADK+Eh.D8.toFixed());if(!!At){this.Filter.
CO(At);A.aat([this,this.Fd,this.Ff],0);}}},Bsx:function(H){A._GetAutoObject(A.Device.
Device).Aq.Bo(this.Filter);A._GetAutoObject(C.A1).Fl();},AwY:function(H){var Eh=(
C.AkI.isPrototypeOf(H)?H:null);if(!Eh)return;var At=this.Filter.DG(Eh.D8,Eh.Operator
);if(!!At){this.Filter.P6(At);A.aat([this,this.Fd,this.Ff],0);}else{if(Eh.D8===7
){At=A._NewObject(A.Device.GenderFilterCriterion,0);At.EE=Eh.D8;At.Operator=Eh.Operator;
}else if(Eh.D8===14){At=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);At.EE=
Eh.D8;At.Operator=Eh.Operator;}else if((Eh.D8===22)||(Eh.D8===26)){var AVo=A._NewObject(
A.Device.UInt64FilterCriterion,0);AVo.EE=Eh.D8;AVo.Operator=0;At=AVo;}else A.aa8(
"%s",ADK+Eh.D8.toFixed());if(!!At){this.Filter.CO(At);A.aat([this,this.Fd,this.Ff
],0);}}},A3x:function(E){if(this.Asb===E)return;this.Asb=E;A.aat([this,this.BdU,
this.A3x],0);},A3y:function(E){if(this.Asc===E)return;this.Asc=E;A.aat([this,this.
BdV,this.A3y],0);},AKk:function(H){var F;this.A3y((F=this.Ky.Q,F[1].call(F[0])));
var At=this.Filter.DG(7,0);if(!!At){var Awq=(A.Device.GenderFilterCriterion.isPrototypeOf(
At)?At:null);if(!!Awq)Awq.AY=this.Asc;else A.aa8("%s",AdF);}},AIl:function(H){var
F;this.A3x((F=this.IT.Q,F[1].call(F[0])));var At=this.Filter.DG(14,0);if(!!At){var
Tq=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(At)?At:null);if(!!Tq)Tq.AY=
this.Asb;else A.aa8("%s",AdF);}},FX:function(H){var B;this.AD.N0((B=this.Ac.Dd(0x1
))[3]-B[1]);this.AD.N4((B=this.Ac.M)[3]-B[1]);this.AD.N2(-this.Ac.Br[1]);},A4a:function(
E){if(this.ApO===E)return;this.ApO=E;A.aat([this,this.Bev,this.A4a],0);},BiI:function(
H){var F;this.A4a((F=this.J$.Q,F[1].call(F[0])));var At=this.Filter.DG(22,1);if(
!!At){var AgU=(A.Device.UInt64FilterCriterion.isPrototypeOf(At)?At:null);if(!!AgU
)switch(this.ApO){case 1:AgU.Operator=5;break;case 0:AgU.Operator=0;break;default:
A.aa8("%s%e",ADL,this.ApO);}else A.aa8("%s",AdF);}},A3G:function(E){if(this.Aov===
E)return;this.Aov=E;A.aat([this,this.Bd_,this.A3G],0);},Bc3:function(H){var F;this.
A3G((F=this.LT.Q,F[1].call(F[0])));var At=this.Filter.DG(26,1);if(!!At){var AqU=(
A.Device.UInt64FilterCriterion.isPrototypeOf(At)?At:null);if(!!AqU)switch(this.Aov
){case 1:AqU.Operator=5;break;case 0:AqU.Operator=0;break;default:A.aa8("%s%e",ADL
,this.Aov);}else A.aa8("%s",AdF);}},Bo:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.O9.Bo([this,this.Fd,this.Ff]);this.O_.
Bo([this,this.Fd,this.Ff]);this.L1.Bo([this,this.Fd,this.Ff]);this.O$.Bo([this,this.
Fd,this.Ff]);this.Lj.Bo([this,this.Fd,this.Ff]);this.Oy.Bo([this,this.Fd,this.Ff
]);this.Oz.Bo([this,this.Fd,this.Ff]);this.K2.Bo([this,this.Fd,this.Ff]);this.OA.
Bo([this,this.Fd,this.Ff]);this.Kt.Bo([this,this.Fd,this.Ff]);this.Ky.Bo([this,this.
Fd,this.Ff]);this.IT.Bo([this,this.Fd,this.Ff]);this.J$.Bo([this,this.Fd,this.Ff
]);this.LT.Bo([this,this.Fd,this.Ff]);this.WA.Bo([this,this.Fd,this.Ff]);this.RJ.
Bo([this,this.Fd,this.Ff]);this.QG.Bo([this,this.Fd,this.Ff]);this.Apb(false);A.
ow([this,this.AYA],this);var A85=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DG(1,2))?B:null);if(!!A85){this.Apb(true);this.ABY(A85.AY);}var A8z=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DG(1,3))?B:null);if(!!
A8z){this.Apb(true);this.ABZ(A8z.AY);}this.AoM(false);A.ow([this,this.AYu],this);
var A84=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DG(4,3))?B:null
);if(!!A84){this.AoM(true);this.AAW(A._GetAutoObject(A.Device.Helper).L6(A84.AY,
A._GetAutoObject(A.Device.Helper).DN()));}var A8y=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DG(4,2))?B:null);if(!!A8y){this.AoM(true);this.AAY(A.
_GetAutoObject(A.Device.Helper).L6(A8y.AY,A._GetAutoObject(A.Device.Helper).DN()
)+1);}var Awq=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DG(7,0
))?B:null);if(!!Awq)this.Ky.Bu(this.Gender.DT(Awq.AY));var Tq=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DG(14,0))?B:null);if(!!Tq)this.IT.Bu(this.AnimalType.
DT(Tq.AY));var AgU=this.Filter.DG(22,1);if(!!AgU){if(!AgU.Operator)this.J$.Bu(0);
else this.J$.Bu(1);}var AqU=this.Filter.DG(26,1);if(!!AqU){if(!AqU.Operator)this.
LT.Bu(0);else this.LT.Bu(1);}},Ff:function(Ao){this.Bo(Ao);},ABZ:function(E){if(
this.AuB===E)return;this.AuB=E;A.aat([this,this.A2Z,this.ABZ],0);},ABY:function(
E){if(this.AuA===E)return;this.AuA=E;A.aat([this,this.A2Y,this.ABY],0);},Bi$:function(
H){var F;this.ABZ((F=this.Lj.Q,F[1].call(F[0])));var At=this.Filter.DG(1,3);if(!
!At){var AxW=(A.Device.Int32FilterCriterion.isPrototypeOf(At)?At:null);if(!!AxW)
AxW.AY=this.AuB;else A.aa8("%s",AdF);}},Bi_:function(H){var F;this.ABY((F=this.L1.
Q,F[1].call(F[0])));var At=this.Filter.DG(1,2);if(!!At){var AxW=(A.Device.Int32FilterCriterion.
isPrototypeOf(At)?At:null);if(!!AxW)AxW.AY=this.AuA;else A.aa8("%s",AdF);}},A9x:
function(H){var Eh=(C.Ahp.isPrototypeOf(H)?H:null);if(!Eh)return;var At=this.Filter.
DG(Eh.D8,Eh.Operator);if(!!At){this.Filter.P6(At);A.aat([this,this.Fd,this.Ff],0
);}else{if(Eh===this.O_){At=A._NewObject(A.Device.Int32FilterCriterion,0);At.EE=
Eh.D8;At.Operator=Eh.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(At)?At:
null).AY=this.AuA;this.A8(this.L1);}else if(Eh===this.O$){At=A._NewObject(A.Device.
Int32FilterCriterion,0);At.EE=Eh.D8;At.Operator=Eh.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(At)?At:null).AY=this.AuB;this.A8(this.Lj);}if(!!At){this.Filter.CO(
At);A.aat([this,this.Fd,this.Ff],0);}}A.ow([this,this.AYA],this);},AYA:function(
H){var AmX=!!this.Filter.DG(this.L1.D8,this.L1.Operator);var Anv=!!this.Filter.DG(
this.Lj.D8,this.Lj.Operator);this.O_.Aj(this.Aay);this.O_.An(this.Aay);this.O_.W(
this.Aay);this.O$.Aj(this.Aay);this.O$.An(this.Aay);this.O$.W(this.Aay);this.L1.
Aj(AmX);this.L1.An(AmX);this.L1.W(AmX);this.Lj.Aj(Anv);this.Lj.An(Anv);this.Lj.W(
Anv);},TA:function(H){var B;this.Ac.AbB(null,null);if(!!this.A6&&((this.A6.S&0x400
)===0x400))this.Ac.IA(this.A6,true,null,null);},Btp:function(H){A.ow([this,this.
FX],this);A.ow([this,this.TA],this);},Bsu:function(H){this.Apb(!this.Aay);if(this.
Aay===false){var At=this.Filter.DG(this.O9.D8,this.O9.Operator);while(!!At){this.
Filter.P6(At);At=this.Filter.DG(this.O9.D8,this.O9.Operator);}A.aat([this,this.Fd
,this.Ff],0);}},Apb:function(E){if(this.Aay===E)return;this.Aay=E;A.aat([this,this.
A2X,this.Apb],0);A.ow([this,this.AYA],this);},AAY:function(E){if(this.ArC===E)return;
this.ArC=E;A.aat([this,this.A2a,this.AAY],0);},AAW:function(E){if(this.ArB===E)return;
this.ArB=E;A.aat([this,this.A1_,this.AAW],0);},A$R:function(H){var F;this.AAY((F=
this.Kt.Q,F[1].call(F[0])));var At=this.Filter.DG(4,2);if(!!At){var Ai9=(A.Device.
UInt32FilterCriterion.isPrototypeOf(At)?At:null);if(!!Ai9){var YP=A._GetAutoObject(
A.Device.Helper).XU(this.ArC-1);Ai9.AY=YP;}else A.aa8("%s",AdF);}},A$Q:function(
H){var F;this.AAW((F=this.K2.Q,F[1].call(F[0])));var At=this.Filter.DG(4,3);if(!
!At){var Ai9=(A.Device.UInt32FilterCriterion.isPrototypeOf(At)?At:null);if(!!Ai9
){var YP=A._GetAutoObject(A.Device.Helper).XU(this.ArB);Ai9.AY=YP;}else A.aa8("%s"
,AdF);}},AYu:function(H){var AmX=!!this.Filter.DG(this.K2.D8,this.K2.Operator);var
Anv=!!this.Filter.DG(this.Kt.D8,this.Kt.Operator);this.Oz.Aj(this.YU);this.Oz.An(
this.YU);this.Oz.W(this.YU);this.OA.Aj(this.YU);this.OA.An(this.YU);this.OA.W(this.
YU);this.K2.Aj(AmX);this.K2.An(AmX);this.K2.W(AmX);this.Kt.Aj(Anv);this.Kt.An(Anv
);this.Kt.W(Anv);},AoM:function(E){if(this.YU===E)return;this.YU=E;A.aat([this,this.
A19,this.AoM],0);A.ow([this,this.AYu],this);},A9v:function(H){var Eh=(C.Ahp.isPrototypeOf(
H)?H:null);if(!Eh)return;var At=this.Filter.DG(Eh.D8,Eh.Operator);if(!!At){this.
Filter.P6(At);A.aat([this,this.Fd,this.Ff],0);}else{if(Eh===this.Oz){At=A._NewObject(
A.Device.UInt32FilterCriterion,0);At.EE=Eh.D8;At.Operator=Eh.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(At)?At:null).AY=A._GetAutoObject(A.Device.Helper
).XU(this.ArB);this.A8(this.K2);}else if(Eh===this.OA){At=A._NewObject(A.Device.
UInt32FilterCriterion,0);At.EE=Eh.D8;At.Operator=Eh.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(At)?At:null).AY=A._GetAutoObject(A.Device.Helper).XU(this.ArC-1);this.
A8(this.Kt);}if(!!At){this.Filter.CO(At);A.aat([this,this.Fd,this.Ff],0);}}A.ow([
this,this.AYu],this);},Bst:function(H){this.AoM(!this.YU);if(this.YU===false){var
At=this.Filter.DG(this.Oy.D8,this.Oy.Operator);while(!!At){this.Filter.P6(At);At=
this.Filter.DG(this.Oy.D8,this.Oy.Operator);}A.aat([this,this.Fd,this.Ff],0);}},
Fd:function(){return this.Filter;},BdV:function(){return this.Asc;},BdU:function(
){return this.Asb;},Bev:function(){return this.ApO;},Bd_:function(){return this.
Aov;},A2Z:function(){return this.AuB;},A2Y:function(){return this.AuA;},A2X:function(
){return this.Aay;},A2a:function(){return this.ArC;},A1_:function(){return this.
ArB;},A19:function(){return this.YU;},_Init:function(aArg){C.Aw._Init.call(this,
aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Aye._Init.call(this.Transponder={I:this},0);C.Aye._Init.call(this.D1={
I:this},0);A.Core.Ac._Init.call(this.Ac={I:this},0);C.Ayp._Init.call(this.O9={I:
this},0);C.Ahp._Init.call(this.O_={I:this},0);C.AnZ._Init.call(this.L1={I:this},
0);C.Ahp._Init.call(this.O$={I:this},0);C.AnZ._Init.call(this.Lj={I:this},0);C.Ayp.
_Init.call(this.Oy={I:this},0);C.Ahp._Init.call(this.Oz={I:this},0);C.AnZ._Init.
call(this.K2={I:this},0);C.Ahp._Init.call(this.OA={I:this},0);C.AnZ._Init.call(this.
Kt={I:this},0);C.AkI._Init.call(this.Ky={I:this},0);C.AkI._Init.call(this.IT={I:
this},0);C.AkI._Init.call(this.J$={I:this},0);C.AkI._Init.call(this.LT={I:this},
0);C.PB._Init.call(this.WA={I:this},0);C.PB._Init.call(this.RJ={I:this},0);C.PB.
_Init.call(this.QG={I:this},0);C.AD._Init.call(this.AD={I:this},0);this.__proto__=
C.Iy;var B;this.N.W(true);this.N.Cb(A.z2(A.abg.AZd));this.Dt(C.AK9);this.Gender.
AF(this.Asc);this.AnimalType.AF(this.Asb);this.Transponder.AF(this.ApO);this.D1.
AF(this.Aov);this.Ac.G(FK);this.Ac.Le(1);this.O9.G(Kc);this.O9.Aj(true);this.O9.
U(A._GetAutoObject(A.Device.Helper).AkG(0,1));this.O9.Mv(1);this.O_.G(RQ);this.O_.
Aj(true);this.O_.U(A.z2(A.abg.AAk));this.O_.Mv(1);this.O_.N1(2);this.L1.G(Yf);this.
L1.Mv(1);this.L1.N1(2);this.L1.Aik(A.z2(A.abg.Hs));this.O$.G(AiW);this.O$.Aj(true
);this.O$.U(A.z2(A.abg.ADb));this.O$.Mv(1);this.O$.N1(3);this.Lj.G(AlY);this.Lj.
Aj(true);this.Lj.Mv(1);this.Lj.N1(3);this.Lj.Aik(A.z2(A.abg.Hs));this.Oy.G(ARP);
this.Oy.Aj(true);this.Oy.U(A.z2(A.abg.NN));this.Oy.Mv(4);this.Oz.G(ARQ);this.Oz.
Aj(true);this.Oz.U(A.z2(A.abg.AAk));this.Oz.Mv(4);this.Oz.N1(3);this.K2.G(ARR);this.
K2.Mv(4);this.K2.N1(3);this.K2.Aik(A.z2(A.abg.NN));this.K2.A3M(2);this.OA.G(ARS);
this.OA.Aj(true);this.OA.U(A.z2(A.abg.ADb));this.OA.Mv(4);this.OA.N1(2);this.Kt.
G(ART);this.Kt.Aj(true);this.Kt.Mv(4);this.Kt.N1(2);this.Kt.Aik(A.z2(A.abg.NN));
this.Kt.A3M(3);this.Ky.G(Ap7);this.Ky.Aj(true);this.Ky.Mv(7);this.Ky.Aft(0);this.
Ky.N1(0);this.IT.G(Vr);this.IT.Aj(true);this.IT.Mv(14);this.IT.Aft(0);this.IT.N1(
0);this.J$.G(Vr);this.J$.Aj(true);this.J$.Mv(22);this.J$.Aft(0);this.J$.N1(1);this.
LT.G(Vr);this.LT.Aj(true);this.LT.Mv(26);this.LT.Aft(0);this.LT.N1(1);this.WA.G(
Vr);this.WA.Aj(true);this.WA.Mv(11);this.WA.Aft(0);this.WA.N1(0);this.RJ.G(Vr);this.
RJ.Aj(true);this.RJ.Mv(12);this.RJ.Aft(0);this.RJ.N1(0);this.QG.G(Vr);this.QG.Aj(
true);this.QG.Mv(8);this.QG.Aft(0);this.QG.N1(0);this.AD.G(Ap6);this.J(this.Ac,0
);this.J(this.O9,0);this.J(this.O_,0);this.J(this.L1,0);this.J(this.O$,0);this.J(
this.Lj,0);this.J(this.Oy,0);this.J(this.Oz,0);this.J(this.K2,0);this.J(this.OA,
0);this.J(this.Kt,0);this.J(this.Ky,0);this.J(this.IT,0);this.J(this.J$,0);this.
J(this.LT,0);this.J(this.WA,0);this.J(this.RJ,0);this.J(this.QG,0);this.J(this.AD
,0);this.N.CA=[this,this.EY];this.N.Cl=[this,this.Bsx];this.N.C8(A.zW(A.abi.ET));
this.Ac.Eu=[this,this.Btp];this.O9.AR=[this,this.Bsu];this.O9.AF([this,this.A2X,
this.Apb]);this.O_.AR=[this,this.A9x];this.L1.Hb([this,this.Es,this.HU]);this.L1.
AF([this,this.A2Y,this.ABY]);this.O$.AR=[this,this.A9x];this.Lj.Hb([this,this.Es
,this.HU]);this.Lj.AF([this,this.A2Z,this.ABZ]);this.Oy.AR=[this,this.Bst];this.
Oy.AF([this,this.A19,this.AoM]);this.Oz.AR=[this,this.A9v];this.K2.Hb([this,this.
Es,this.HU]);this.K2.AF([this,this.A1_,this.AAW]);this.OA.AR=[this,this.A9v];this.
Kt.Hb([this,this.Es,this.HU]);this.Kt.AF([this,this.A2a,this.AAY]);this.Ky.AR=[this
,this.AwY];this.Ky.AF([B=this.Gender,B.Cz,B.CB]);this.Ky.Dh(this.Gender);this.IT.
AR=[this,this.AwY];this.IT.AF([B=this.AnimalType,B.Cz,B.CB]);this.IT.Dh(this.AnimalType
);this.J$.AR=[this,this.AwY];this.J$.AF([B=this.Transponder,B.Cz,B.CB]);this.J$.
Dh(this.Transponder);this.LT.AR=[this,this.AwY];this.LT.AF([B=this.D1,B.Cz,B.CB]
);this.LT.Dh(this.D1);this.WA.AR=[this,this.AXi];this.RJ.AR=[this,this.AXi];this.
QG.AR=[this,this.AXi];this.Init(aArg);},_Done:function(){this.__proto__=C.Aw;this.
Gender._Done();this.AnimalType._Done();this.Transponder._Done();this.D1._Done();
this.Ac._Done();this.O9._Done();this.O_._Done();this.L1._Done();this.O$._Done();
this.Lj._Done();this.Oy._Done();this.Oz._Done();this.K2._Done();this.OA._Done();
this.Kt._Done();this.Ky._Done();this.IT._Done();this.J$._Done();this.LT._Done();
this.WA._Done();this.RJ._Done();this.QG._Done();this.AD._Done();C.Aw._Done.call(
this);},_ReInit:function(){C.Aw._ReInit.call(this);this.Gender._ReInit();this.AnimalType.
_ReInit();this.Transponder._ReInit();this.D1._ReInit();this.Ac._ReInit();this.O9.
_ReInit();this.O_._ReInit();this.L1._ReInit();this.O$._ReInit();this.Lj._ReInit(
);this.Oy._ReInit();this.Oz._ReInit();this.K2._ReInit();this.OA._ReInit();this.Kt.
_ReInit();this.Ky._ReInit();this.IT._ReInit();this.J$._ReInit();this.LT._ReInit(
);this.WA._ReInit();this.RJ._ReInit();this.QG._ReInit();this.AD._ReInit();this.N.
Cb(A.z2(A.abg.AZd));this.O_.U(A.z2(A.abg.AAk));this.L1.Aik(A.z2(A.abg.Hs));this.
O$.U(A.z2(A.abg.ADb));this.Lj.Aik(A.z2(A.abg.Hs));this.Oy.U(A.z2(A.abg.NN));this.
Oz.U(A.z2(A.abg.AAk));this.K2.Aik(A.z2(A.abg.NN));this.OA.U(A.z2(A.abg.ADb));this.
Kt.Aik(A.z2(A.abg.NN));},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.
Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.L1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lj)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Oy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Oz
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kt)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.J$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalListFilterScreen"
};C.A4G={XV:null,Bg8:function(Bp_){var Ew=A._NewObject(C.A4F,0);Ew.Aw=Bp_;Ew.LU=
this.XV;this.XV=Ew;},A4m:function(){var TH=null;if(!!this.XV){TH=this.XV.Aw;this.
XV=this.XV.LU;}return TH;},Contains:function(Ai8){var Ew=this.XV;while(!!Ew){if(
Ew.Aw.AlJ===Ai8)return true;Ew=Ew.LU;}return false;},BgX:function(){if(!!this.XV
)return this.XV.Aw;else return null;},_Init:function(aArg){this.__proto__=C.A4G;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.XV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::ScreenStack"};C.A4F={Aw:null,LU:null,_Init:function(aArg){this.__proto__=
C.A4F;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Aw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.LU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ScreenNode"
};C.AH0={ANi:function(){A._GetAutoObject(A.Device.Helper).At$(this.Hx,0);A._GetAutoObject(
C.A1).Fl();},A1L:function(){this.Hx.Cr(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(
C.A1).Fl();},A0S:function(){return A.zW(A.abi.Aoi);},_Init:function(aArg){C.ACe.
_Init.call(this,aArg);this.__proto__=C.AH0;this.Dt(C.If);},_className:"Application::AnimalActionRateScreen"
};C.AHW={Xv:function(H){this.Aer();this.DX(A.z2(A.abg.AQb),[this,this.AOP],5);this.
DX(A.z2(A.abg.AZM),[this,this.BeR],4);this.DX(A.z2(A.abg.Apm),[this,this.Ao7],3);
this.DX(A.z2(A.abg.AfK),[this,this.Aig],2);this.DX(A.z2(A.abg.AbC),[this,this.AoN
],1);this.DX(A.z2(A.abg.Aem),[this,this.Ah_],0);A._GetAutoObject(C.Cy).IS();A._GetAutoObject(
C.Cy).V1(A.z2(A.abg.Aen)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.Device).Cn(
6);},DS:function(H){},Acd:function(){return C.AIM;},Ace:function(){return C.AzC;
},Ry:function(H){var Bb=A._GetAutoObject(A.Device.Helper).LO();var AvH=A._NewObject(
A.Device.BoolFilterCriterion,0);AvH.Initialize(8,0,true,true);Bb.CO(AvH);A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);},HX:function(H){C.Ge.HX.call(this,H);if(this.AhY()===
false){this.N.Cm(A.zW(A.abi.ACn));this.N.Cg=[this,this.A0c];this.N.Fr(A.jm);}this.
N.O3(false);this.N.O4(false);},Ad$:function(){A._GetAutoObject(C.A1).BX(40);},Ad_:
function(){A._GetAutoObject(C.A1).BX(42);},_Init:function(aArg){C.Ge._Init.call(
this,aArg);this.__proto__=C.AHW;var B;this.Dt(C.AKD);this.Et(A.z2(A.abg.Bc6));this.
Afq([B=A._GetAutoObject(A.Device.Device),B.A2b,B.A6e]);},_className:"Application::AlarmListScreen"
};C.AJa={DS:function(H){},Aq0:function(H){if(!!this.Bf)A.aa8("%i",this.Bf.Av.FJ);
var Ab=(C.Ayv.isPrototypeOf(H)?H:null);if(!!Ab){A._GetAutoObject(A.Device.Helper
).HS(Ab.Hl);A._GetAutoObject(C.A1).BX(13);}},Ry:function(H){var Bb=A._GetAutoObject(
A.Device.Helper).LO();var Av2=A._NewObject(A.Device.BoolFilterCriterion,0);Av2.Initialize(
9,0,true,true);Bb.CO(Av2);A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);},HX:function(
H){C.Ge.HX.call(this,H);this.N.O3(false);this.N.O4(false);},_Init:function(aArg){
C.Ge._Init.call(this,aArg);this.__proto__=C.AJa;this.Dt(C.AKE);this.Et(A.z2(A.abg.
Bc7));},_className:"Application::ControlListScreen"};C.Ab9={Filter:null,D8:0,IG:
10,TableId:0,Operator:1,C3:function(){var F;this.R_((F=this.Filter,F[1].call(F[0
])).DG(this.D8,this.Operator));},Bh:function(aSize){C.B9.Bh.call(this,aSize);this.
T.G(A.aaN(this.T.M,[aSize[0]-(2*this.IG),aSize[1]]));},Bo:function(E){if(A.z_(this.
Filter,E))return;if(!!this.Filter)A.zn([this,this.Lt],this.Filter,0);this.Filter=
E;if(!!E)A.za([this,this.Lt],E,0);A.ow([this,this.Lt],this);},Lt:function(H){var
F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.R_((F=this.Filter,F[1
].call(F[0])).DG(this.D8,this.Operator));else this.R_(null);},Aft:function(E){if(
this.TableId===E)return;this.TableId=E;A.ow([this,this.Lt],this);},Mv:function(E
){if(this.D8===E)return;this.D8=E;A.ow([this,this.Lt],this);},R_:function(AK){if(
!!AK)this.U(A._GetAutoObject(A.Device.Helper).A0N(this.TableId,AK));else this.U(
A._GetAutoObject(A.Device.Helper).AkG(this.TableId,this.D8));},N1:function(E){if(
this.Operator===E)return;this.Operator=E;A.ow([this,this.Lt],this);},_Init:function(
aArg){C.B9._Init.call(this,aArg);this.__proto__=C.Ab9;this.T.G(ADM);this.T.A0(0x11
);},_ReInit:function(){C.B9._ReInit.call(this);this.C3();},_Mark:function(D){var
B;C.B9._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Application::FilterItem"};C.PB={Hv:null,Bh:function(aSize){var B;
C.Ab9.Bh.call(this,aSize);this.Hv.G([(aSize[0]-((B=this.Hv.M)[2]-B[0]))-10,0,aSize[
0]-10,aSize[1]]);this.T.G([this.IG,0,this.Hv.M[0]-this.IG,aSize[1]]);},R_:function(
AK){this.U(A._GetAutoObject(A.Device.Helper).AkG(this.TableId,this.D8));var At=(
A.Device.BoolFilterCriterion.isPrototypeOf(AK)?AK:null);if(!!At&&At.AY)this.Hv.Cc(
1);else this.Hv.Cc(0);},_Init:function(aArg){C.Ab9._Init.call(this,aArg);A.abh.Am.
_Init.call(this.Hv={I:this},0);this.__proto__=C.PB;this.Hv.G(ADN);this.Hv.Cc(0);
this.J(this.Hv,0);this.Hv.Ar(A.zW(A.abi.An2));},_Done:function(){this.__proto__=
C.Ab9;this.Hv._Done();C.Ab9._Done.call(this);},_ReInit:function(){C.Ab9._ReInit.
call(this);this.Hv._ReInit();},_Mark:function(D){var B;C.Ab9._Mark.call(this,D);
if((B=this.Hv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BoolFilterItem"
};C.AK9={Am:null,Text:null,CW:function(E){C.BU.CW.call(this,E);this.Text.L(E);this.
Am.L(E);},_Init:function(aArg){C.BU._Init.call(this,aArg);A.abh.Am._Init.call(this.
Am={I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AK9;
this.Am.G(ARU);this.Text.G(ARV);this.Text.A0(0x11);this.Text.R(A.z2(A.abg.Filter
));this.J(this.Am,0);this.J(this.Text,0);this.Am.Ar(A.zW(A.abi.Acm));this.Text.Y(
A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.BU;this.Am._Done();this.Text.
_Done();C.BU._Done.call(this);},_ReInit:function(){C.BU._ReInit.call(this);this.
Am._ReInit();this.Text._ReInit();},_Mark:function(D){var B;C.BU._Mark.call(this,
D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSetFilter"};C.Asn={CL:null,AX:null,
Uh:null,Bh:function(aSize){var B;C.BU.Bh.call(this,aSize);this.Uh.G(A.aaM(this.Uh.
M,A.aaj(this.AX.M.slice(0,2),ARW)));this.Uh.G(A.aaN(this.Uh.M,A.aak([(B=this.AX.
M)[2]-B[0],B[3]-B[1]],ARX)));},Ai:function(Ae){var B;C.BU.Ai.call(this,Ae);var Gv=((
Ae&0x40)===0x40)&&(this.A6===this.AX);if(Gv)this.Uh.L(A.iF.A6);else this.Uh.L(A.
iF.AkN);},CW:function(E){C.BU.CW.call(this,E);this.CL.CW(E);},Afi:function(){return this.
AX.Afi();},DO:function(E){this.CL.DO(E);},_Init:function(aArg){C.BU._Init.call(this
,aArg);C.CL._Init.call(this.CL={I:this},0);C.AX._Init.call(this.AX={I:this},0);A.
abh.CR._Init.call(this.Uh={I:this},0);this.__proto__=C.Asn;this.CL.G(ARY);this.CL.
DO(0);this.AX.G(ARZ);this.Uh.G(ADO);this.Uh.N5(2);this.J(this.CL,0);this.J(this.
AX,0);this.J(this.Uh,0);this.A8(this.AX);},_Done:function(){this.__proto__=C.BU;
this.CL._Done();this.AX._Done();this.Uh._Done();C.BU._Done.call(this);},_ReInit:
function(){C.BU._ReInit.call(this);this.CL._ReInit();this.AX._ReInit();this.Uh._ReInit(
);},_Mark:function(D){var B;C.BU._Mark.call(this,D);if((B=this.CL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uh)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderSearch"};C.DM={Ds:null,HR:
null,HQ:null,Ad8:function(H){if(this.FA<0)this.Mu(1);else if(this.FA===9)this.Mu(
0);else this.Mu(this.FA+1);A.ow(this.Ds,this);},Ai:function(Ae){var B;C.FA.Ai.call(
this,Ae);var FT=((Ae&0x10)===0x10);var Gv=((Ae&0x40)===0x40);if(Gv){this.Background.
L(A.iF.A6);this.Text.L(A.iF.Bg);this.DC(256);}else if(FT){this.Background.L(this.
Mh);this.Text.L(A.iF.Text);this.DC(256);}else{this.Background.L(this.Mh);this.Text.
L(A.iF.Text);this.DC(128);}},Ad7:function(H){if(this.FA<=0)this.Mu(9);else this.
Mu(this.FA-1);A.ow(this.Ds,this);},_Init:function(aArg){C.FA._Init.call(this,aArg
);A.Core.B0._Init.call(this.HR={I:this},0);A.Core.B0._Init.call(this.HQ={I:this}
,0);this.__proto__=C.DM;this.HR.Filter=4;this.HQ.Filter=5;this.HR.B1=[this,this.
Ad8];this.HR.D_=[this,this.Ad8];this.HQ.B1=[this,this.Ad7];this.HQ.D_=[this,this.
Ad7];},_Done:function(){this.__proto__=C.FA;this.HR._Done();this.HQ._Done();C.FA.
_Done.call(this);},_ReInit:function(){C.FA._ReInit.call(this);this.HR._ReInit();
this.HQ._ReInit();},_Mark:function(D){var B;C.FA._Mark.call(this,D);if((B=this.Ds
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.HR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"
};C.AX={Ds:null,C0:null,D5:null,D6:null,D7:null,FB:null,EC:null,EU:null,EM:null,
Q2:0,AnH:false,Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);if(((Ae&0x40)===0x40
)&&this.AnH)this.EC.Aia(true);else this.EC.Aia(false);},ABj:function(E){var B;if(
E===this.Afi())return;var AGu=E;var Ea=this.EC;while(!!Ea){if(AGu>0){Ea.Mu(AGu%10
);AGu=(AGu/10)|0;}else Ea.Mu(-1);Ea=(C.DM.isPrototypeOf(B=this.Q8(Ea,2,0x11))?B:
null);}},Afi:function(){var B;var Kj=A.jm;var P=0;var Cf=this.C0;for(;P<6;P=P+1){
if(!!Cf&&(Cf.FA>=0))Kj=Kj+Cf.FA.toFixed();Cf=(C.DM.isPrototypeOf(B=this.Zp(Cf,0x11
))?B:null);}return A.vQ(Kj,-1,10);},NG:function(H){if(this.Afi()>=10)this.A_7(7);
},Md:function(H){if((this.Afi()>0)&&(this.C0.FA<0))this.A_7(2);else if(this.Afi(
)<=0)this.EM.PE=true;},Abf:function(H){A.ow(this.Ds,this);},A_7:function(GJ){var
B;var AHh=0;var Ea=null;switch(GJ){case 2:{Ea=this.C0;AHh=7;}break;case 7:{Ea=this.
EC;AHh=2;}break;default:throw new Error(AR0);}while(!!Ea){var AXb=(C.DM.isPrototypeOf(
B=this.Q8(Ea,AHh,0x11))?B:null);if(!!AXb)Ea.Mu(AXb.FA);else if(AHh===7)Ea.Mu(0);
else Ea.Mu(-1);Ea=AXb;}A.ow([this,this.Abf],this);},Aia:function(E){if(this.AnH===
E)return;this.AnH=E;this.Al();},_Init:function(aArg){A.Core.O._Init.call(this,aArg
);C.DM._Init.call(this.C0={I:this},0);C.DM._Init.call(this.D5={I:this},0);C.DM._Init.
call(this.D6={I:this},0);C.DM._Init.call(this.D7={I:this},0);C.DM._Init.call(this.
FB={I:this},0);C.DM._Init.call(this.EC={I:this},0);A.Core.B0._Init.call(this.EU={
I:this},0);A.Core.B0._Init.call(this.EM={I:this},0);this.__proto__=C.AX;this.G(ADP
);this.C0.AW(0x3);this.C0.G(ADQ);this.D5.AW(0x3);this.D5.G(ADR);this.D6.AW(0x3);
this.D6.G(ADS);this.D7.AW(0x3);this.D7.G(ADT);this.FB.AW(0x3);this.FB.G(ADU);this.
EC.AW(0x3);this.EC.G(ADV);this.EC.Mu(0);this.EU.Filter=6;this.EM.Filter=7;this.Q2=
A.iF.CD;this.J(this.C0,0);this.J(this.D5,0);this.J(this.D6,0);this.J(this.D7,0);
this.J(this.FB,0);this.J(this.EC,0);this.A8(this.EC);this.C0.Ds=[this,this.Abf];
this.D5.Ds=[this,this.Abf];this.D6.Ds=[this,this.Abf];this.D7.Ds=[this,this.Abf];
this.FB.Ds=[this,this.Abf];this.EC.Ds=[this,this.Abf];this.EU.B1=[this,this.NG];
this.EM.B1=[this,this.Md];},_Done:function(){this.__proto__=A.Core.O;this.C0._Done(
);this.D5._Done();this.D6._Done();this.D7._Done();this.FB._Done();this.EC._Done(
);this.EU._Done();this.EM._Done();A.Core.O._Done.call(this);},_ReInit:function(){
A.Core.O._ReInit.call(this);this.C0._ReInit();this.D5._ReInit();this.D6._ReInit(
);this.D7._ReInit();this.FB._ReInit();this.EC._ReInit();this.EU._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Ds)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.C0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.EC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bay="3a2df3d7";C.BuM={Undefined:0,BvM:1,Bu3:2};C.Aip={
R8:null,AgF:null,Kw:null,AJe:null,AlM:null,push:function(L3){if(!this.R8){L3.Afw=
null;L3.LU=null;this.R8=L3;this.AgF=this.R8;}else{L3.Afw=this.AgF;L3.LU=null;this.
AgF.LU=L3;this.AgF=L3;}},BtY:function(L3){var Pk=this.R8;while(!!Pk){if(Pk.Jf.Id===
L3.Id)return Pk;Pk=Pk.LU;}return Pk;},BtF:function(L3){if(L3===this.R8)this.pop(
);else if(L3===this.AgF){L3=L3.Afw;if(!!L3)L3.LU=null;this.AgF=L3;}else{L3.Afw.LU=
L3.LU;L3.LU.Afw=L3.Afw;}},Afn:function(E){var F;if(this.Kw===E)return;this.Kw=E;
if(!!this.Kw)this.Kw.AeG(2);(F=this.AJe,F[2].call(F[0],this.Kw));},TE:function(H
){var Pk=(C.AO3.isPrototypeOf(H)?H:null);if(!!Pk){if(!Pk.Jf.PopupState){if(!this.
Kw)this.Afn(this.top());}else if(Pk.Jf.PopupState===4){this.pop();this.Afn(this.
top());}else if(Pk.Jf.PopupState===5){this.pop();this.Afn(this.top());}else if(Pk.
Jf.PopupState===7){this.pop();this.Afn(this.top());}else if(Pk.Jf.PopupState===8
){this.pop();this.Afn(this.top());}else if(Pk.Jf.PopupState===6){if(Pk===this.Kw
){this.pop();this.Afn(this.top());}else this.BtF(Pk);}else if(Pk.Jf.PopupState===
3){this.pop();this.Afn(this.top());}}},pop:function(){var AGP=null;if(!!this.R8){
AGP=this.R8;if(this.R8===this.AgF){this.R8=null;this.AgF=null;}else{this.R8=this.
R8.LU;if(!this.R8)throw new Error(AR1);this.R8.Afw=null;}AGP.Afw=null;AGP.LU=null;
}return AGP;},top:function(){return this.R8;},Btq:function(H){var B;var AqV=(A.Device.
PopupContext.isPrototypeOf(B=this.AlM.Jf)?B:null);if(!!AqV){var AYb=this.BtY(AqV
);if(!!AYb){AYb.A3o(AqV);if(!AqV.Show)AYb.AeG(6);}else if(AqV.Show){var AGs=A._NewObject(
C.AO3,0);AGs.A3o(AqV);AGs.AN$=[this,this.TE];this.push(AGs);AGs.AeG(0);}}},_Init:
function(aArg){A.Core.A43._Init.call(this.AlM={I:this},0);this.__proto__=C.Aip;this.
AlM.ANE=[this,this.Btq];this.AlM.Bfg(A._GetAutoObject(A.Device.Device).Alr);A.hJ++;
},_Done:function(){this.__proto__=null;this.AlM._Done();A.hJ--;},_ReInit:function(
){this.AlM._ReInit();},_Mark:function(D){var B;if((B=this.R8)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AgF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Kw)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJe)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AlM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.AO3={Bv:null,LU:null,Afw:null,Jf:null,AN$:null,PopupIdToString:null,BL:function(
Bpe,BpN,Bp9,BpY,Bp0,BpX,Bpw){var TG=A._NewObject(C.AO2,0);TG.Bgj(this.Jf.Id);TG.
A35(Bpe);TG.AOa=BpX;TG.A36(this.Jf.AiI);TG.A3R(this.Jf.Aio);TG.CU=A._NewObject(C.
N,0);TG.M_().Cl=Bp0;TG.M_().Cg=null;TG.M_().CA=BpY;TG.M_().Cb(Bp9);TG.M_().Cm(null
);TG.M_().GX(BpN);TG.M_().ABl(Bpw);return TG;},Ah8:function(){if(!this.Bv){var BN=
this.PopupIdToString.Ca(this.Jf.Id);switch(this.Jf.Id){case 0:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 1:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 58:
this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mb],[this,this.Mc],[
this,this.BM],3);break;case 2:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,
this.CC],[this,this.BM],3);break;case 4:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.
abg.Yes),[this,this.Mb],[this,this.Mc],[this,this.BM],1);break;case 16:this.Bv=this.
BL(BN,A.z2(A.abg.AbR),A.jm,[this,this.AqY],null,[this,this.BM],1);break;case 5:this.
Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case
9:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mb],[this,this.Mc
],[this,this.BM],3);break;case 6:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes
),[this,this.Mb],[this,this.Mc],[this,this.BM],3);break;case 29:this.Bv=this.BL(
BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mb],[this,this.Mc],[this,this.BM],3
);break;case 27:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this
,this.BM],3);break;case 64:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.
CC],[this,this.BM],3);break;case 28:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[
this,this.CC],[this,this.BM],3);break;case 30:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.
Ok),null,[this,this.CC],[this,this.BM],3);break;case 42:this.Bv=this.BL(BN,A.z2(
A.abg.No),A.z2(A.abg.Yes),[this,this.Mb],[this,this.Mc],[this,this.BM],3);break;
case 91:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mb],[this,this.
Mc],[this,this.BM],1);break;case 41:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[
this,this.CC],[this,this.BM],3);break;case 50:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.
Ok),null,[this,this.CC],[this,this.BM],3);break;case 51:this.Bv=this.BL(BN,A.jm,
A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 57:this.Bv=this.
BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 52:this.
Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case
53:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);
break;case 56:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.
BM],3);break;case 45:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[
this,this.BM],3);break;case 46:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this
,this.CC],[this,this.BM],1);break;case 77:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok)
,null,[this,this.CC],[this,this.BM],3);break;case 78:this.Bv=this.BL(BN,A.jm,A.z2(
A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 79:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 3:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 10:
this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;
case 7:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mb],[this,this.
Mc],[this,this.BM],1);break;case 33:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.
Yes),[this,this.Mb],[this,this.Mc],[this,this.BM],1);break;case 8:this.Bv=this.BL(
BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 34:this.
Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case
82:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);
break;case 83:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.
BM],3);break;case 80:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[
this,this.BM],3);break;case 81:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this
,this.CC],[this,this.BM],3);break;case 92:this.Bv=this.BL(BN,A.jm,A.jm,null,null
,[this,this.BM],0);break;case 93:this.Bv=this.BL(BN,A.jm,A.jm,null,null,[this,this.
BM],0);break;case 44:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.
Mb],[this,this.Mc],[this,this.BM],1);break;case 37:this.Bv=this.BL(BN,A.z2(A.abg.
No),A.z2(A.abg.Yes),[this,this.Mb],[this,this.Mc],[this,this.BM],1);break;case 38:
this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mb],[this,this.Mc],[
this,this.BM],1);break;case 39:this.Bv=this.BL(BN,A.z2(A.abg.AbR),A.z2(A.abg.Ok)
,[this,this.Mb],[this,this.Mc],[this,this.BM],3);break;case 76:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 40:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 75:
this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;
case 11:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM
],3);break;case 12:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this
,this.BM],3);break;case 13:this.Bv=this.BL(BN,A.z2(A.abg.AbR),A.z2(A.abg.Bhh),[this
,this.AqY],[this,this.CC],[this,this.BM],3);break;case 36:this.Bv=this.BL(BN,A.jm
,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 14:this.Bv=this.
BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 15:this.
Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case
35:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);
break;case 21:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.
BM],3);break;case 22:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[
this,this.BM],3);break;case 63:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes)
,[this,this.Mb],[this,this.Mc],[this,this.BM],1);break;case 43:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 85:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 24:
this.Bv=this.BL(BN,A.z2(A.abg.AbR),A.jm,[this,this.AqY],null,[this,this.BM],1);break;
case 49:this.Bv=this.BL(BN,A.z2(A.abg.AbR),A.jm,[this,this.AqY],null,[this,this.
BM],1);break;case 26:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[
this,this.BM],3);break;case 23:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this
,this.CC],[this,this.BM],3);break;case 25:this.Bv=this.BL(BN,A.z2(A.abg.AbR),A.z2(
A.abg.Ok),[this,this.AqY],[this,this.CC],[this,this.BM],3);break;case 32:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 69:
this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;
case 47:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mb],[this,this.
Mc],[this,this.BM],3);break;case 48:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.
Yes),[this,this.Mb],[this,this.Mc],[this,this.BM],3);break;case 59:this.Bv=this.
BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mb],[this,this.Mc],[this,this.BM
],3);break;case 17:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this
,this.BM],3);break;case 19:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.
CC],[this,this.BM],3);break;case 54:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[
this,this.CC],[this,this.BM],3);break;case 18:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.
Ok),null,[this,this.CC],[this,this.BM],3);break;case 20:this.Bv=this.BL(BN,A.jm,
A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 55:this.Bv=this.
BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 62:this.
Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case
60:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);
break;case 65:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.
BM],3);break;case 66:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[
this,this.BM],3);break;case 61:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this
,this.CC],[this,this.BM],3);break;case 31:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok)
,null,[this,this.CC],[this,this.BM],3);break;case 67:this.Bv=this.BL(BN,A.jm,A.z2(
A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 86:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 68:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 70:
this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;
case 71:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM
],3);break;case 72:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.
Mb],[this,this.Mc],[this,this.BM],3);break;case 88:this.Bv=this.BL(BN,A.jm,A.z2(
A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 89:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 90:this.Bv=
this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mb],[this,this.Mc],[this,this.
BM],3);break;case 73:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.
Mb],[this,this.Mc],[this,this.BM],3);break;case 74:this.Bv=this.BL(BN,A.z2(A.abg.
AbR),A.jm,[this,this.AqY],null,[this,this.BM],1);break;case 84:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 94:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;case 95:
this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM],3);break;
case 87:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CC],[this,this.BM
],3);break;case 96:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.
Mb],[this,this.Mc],[this,this.BM],1);break;default:A.aa8("%s",(AR2+this.Jf.Id.toFixed(
))+AR3);}}switch(this.Jf.Id){case 16:this.Bv.AB3(true);break;case 49:this.Bv.AB3(
true);break;case 92:this.Bv.AB3(false);break;case 93:this.Bv.AB3(false);break;default:;
}return this.Bv;},CC:function(H){this.AeG(4);},AqY:function(H){this.AeG(5);},Mc:
function(H){this.AeG(7);},Mb:function(H){this.AeG(8);},BM:function(H){this.AeG(3
);},A3o:function(E){if(this.Jf===E)return;this.Jf=E;if(!!this.Bv){this.Ah8().A36(
this.Jf.AiI);this.Ah8().A3R(this.Jf.Aio);}},AeG:function(Bp3){var B;this.Jf.Bgk(
Bp3);(B=this.AN$)?B[1].call(B[0],this):null;},Bs0:function(H){this.AeG(9);},_Init:
function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={I:this}
,0);this.__proto__=C.AO3;A.hJ++;},_Done:function(){this.__proto__=null;this.PopupIdToString.
_Done();A.hJ--;},_ReInit:function(){this.PopupIdToString._ReInit();},_Mark:function(
D){var B;if((B=this.Bv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LU)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Afw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Jf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN$)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"Application::PopupEntry"};C.Ft={BooleanToYesNo:null,Du:function(){return 2;
},Da:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},GP:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jm;return this.BooleanToYesNo.Ca(aIndex
);},DT:function(A2){return A2;},HN:function(){return 1;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Ft;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Ade={SU:null,Jz:function(H){var F;var BR=this.AI;this.Bu(this.AI+1);if(this.
AI!==BR){if(!!this.SU&&!!this.AC)switch(this.AC.Da(this.AI)){case 0:(F=this.SU,F[
2].call(F[0],false));break;case 1:(F=this.SU,F[2].call(F[0],true));break;default:;
}A.aat(this.SU,0);}},Ju:function(H){var F;var BR=this.AI;this.Bu(this.AI-1);if(this.
AI!==BR){if(!!this.SU&&!!this.AC)switch(this.AC.Da(this.AI)){case 0:(F=this.SU,F[
2].call(F[0],false));break;case 1:(F=this.SU,F[2].call(F[0],true));break;default:;
}A.aat(this.SU,0);}},Aih:function(E){if(A.z_(this.SU,E))return;if(!!this.Q)A.zn([
this,this.AXS],this.SU,0);this.SU=E;if(!!E)A.za([this,this.AXS],E,0);if(!!E)A.ow([
this,this.AXS],this);},AXS:function(H){var F;if(!!this.SU){if((F=this.SU,F[1].call(
F[0])))this.Bu(1);else this.Bu(0);}},_Init:function(aArg){C.B_._Init.call(this,aArg
);this.__proto__=C.Ade;},_Mark:function(D){var B;C.B_._Mark.call(this,D);if((B=this.
SU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.APa={IK:null,N9:null,In:null,FC:null,AH:null,Zh:null,AeL:null,Sp:null,QX:null
,Aar:null,U$:null,F$:null,AxV:true,Init:function(aArg){var B;A.za([this,this.AjQ
],[B=A._GetAutoObject(A.Device.Device),B.AN3,B.AUN],0);A.ow([this,this.AjQ],this
);},Ai:function(Ae){var F;C.Aw.Ai.call(this,Ae);if(this.AxV)this.N.Db(A.zW(A.abi.
AMp));else this.N.Db(A.zW(A.abi.AMq));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.N9.L(A.iF.Bg);this.QX.W(false);this.Sp.W(false);this.In.W(true);this.FC.
An(false);(F=this.FC.Q,F[2].call(F[0],this.FC.BW));this.Background.L(A.iF.FY);}else
if(this.Zh.Bw){this.N9.L(A.iF.Text);this.QX.W(true);this.Sp.W(true);this.In.W(false
);this.FC.An(false);(F=this.FC.Q,F[2].call(F[0],this.FC.BW));this.Background.L(A.
iF.E1);}else{this.N9.L(A.iF.Text);this.QX.W(false);this.Sp.W(false);this.In.W(true
);this.FC.An(true);this.Background.L(A.iF.CD);}if(this.AeL.Bw)this.U$.W(true);else
this.U$.W(false);},CE:function(H){A._GetAutoObject(A.Device.Device).Adg();},Fc:function(
H){A._GetAutoObject(A.Device.Device).AlD();A._GetAutoObject(A.Device.Device).AcY(
false);A._GetAutoObject(A.Device.Device).Z$(false);},AjQ:function(H){var B;this.
Al();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.ow([this,this.
BsE],this);break;case 3:{A.ow([this,this.A93],this);A.ow([B=this.Zh,B.ACS],this);
A.ow(this.Zh.Mw,this);}break;case 4:A.aa8("%s",AR4);break;default:;}},EY:function(
H){A._GetAutoObject(C.A1).Fl();},Btr:function(H){this.BgL(!this.AxV);},BgL:function(
E){if(this.AxV===E)return;this.AxV=E;if(!E)A._GetAutoObject(A.Device.Device).AcY(
false);this.Al();},BsE:function(H){var B;this.A93(this);if(this.AxV)A._GetAutoObject(
A.Device.Device).AcY(true);A._GetAutoObject(A.Device.Device).AcW(65280);A._GetAutoObject(
A.Device.Device).Z$(true);A.ow([B=this.Zh,B.StartTimer],this);A.ow([B=this.AeL,B.
StartTimer],this);this.Al();},BsF:function(H){A._GetAutoObject(A.Device.Device).
AcY(false);A._GetAutoObject(A.Device.Device).Z$(false);this.Al();},BsH:function(
H){this.Al();},A93:function(H){A._GetAutoObject(A.Device.Device).Adg();},_Init:function(
aArg){C.Aw._Init.call(this,aArg);C.IK._Init.call(this.IK={I:this},0);C.CH._Init.
call(this.N9={I:this},0);A.abh.Am._Init.call(this.In={I:this},0);A.abm.FC._Init.
call(this.FC={I:this},0);A.abh.AH._Init.call(this.AH={I:this},0);A.Core.Timer._Init.
call(this.Zh={I:this},0);A.Core.Timer._Init.call(this.AeL={I:this},0);A.abh.Am._Init.
call(this.Sp={I:this},0);A.abh.Am._Init.call(this.QX={I:this},0);A.abh.Text._Init.
call(this.Aar={I:this},0);C.U$._Init.call(this.U$={I:this},0);C.CH._Init.call(this.
F$={I:this},0);this.__proto__=C.APa;var B;this.Background.L(A.iF.CD);this.N.W(true
);this.IK.G(AR5);this.IK.Ail(0);this.N9.G(AR6);this.N9.R(A.z2(A.abg.A49));this.N9.
L(A.iF.Text);this.In.G(AR7);this.In.L(A.iF.A6);this.In.Xx(true);this.FC.FI(1750);
this.FC.Z6(750);this.FC.Aie(0);this.FC.An(true);this.FC.BW=3;this.AH.G(Au1);this.
Zh.P3(-1);this.Zh.UM(1000);this.AeL.P3(-1);this.AeL.UM(5000);this.Sp.G(ADW);this.
QX.G(ADW);this.QX.L(A.iF.E1);this.Aar.G(Au1);this.Aar.R(A.z2(A.abg.A4H));this.Aar.
L(A.iF.Text);this.U$.G(Au1);this.F$.G(AR8);this.F$.An(false);this.F$.R(A.z2(A.abg.
RangeTest));this.F$.L(A.iF.Text);this.J(this.IK,0);this.J(this.N9,0);this.J(this.
In,0);this.J(this.AH,0);this.J(this.Sp,0);this.J(this.QX,0);this.J(this.Aar,0);this.
J(this.U$,0);this.J(this.F$,0);this.N.CA=[this,this.EY];this.N.Cl=[this,this.Btr
];this.N.C8(A.zW(A.abi.ET));this.N9.Y(A.zW(A.eV.Au));this.N9.Bz(A.zW(A.eV.AB));this.
N9.C7(A.zW(A.eV.Cq));this.In.Ar(A.zW(A.abi.Az4));this.FC.Q=[B=this.In,B.ANQ,B.Cc
];this.Zh.Mw=[this,this.BsF];this.AeL.Mw=[this,this.BsH];this.Sp.Ar(A.zW(A.abi.Sp
));this.QX.Ar(A.zW(A.abi.QX));this.Aar.Y(A.zW(A.eV.Au));this.U$.AF([B=A._GetAutoObject(
A.Device.Device),B.AN4,B.AUO]);this.F$.Y(A.zW(A.eV.OI));this.F$.Bz(A.zW(A.eV.K7)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Aw;this.IK._Done();this.N9.
_Done();this.In._Done();this.FC._Done();this.AH._Done();this.Zh._Done();this.AeL.
_Done();this.Sp._Done();this.QX._Done();this.Aar._Done();this.U$._Done();this.F$.
_Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.
IK._ReInit();this.N9._ReInit();this.In._ReInit();this.FC._ReInit();this.AH._ReInit(
);this.Zh._ReInit();this.AeL._ReInit();this.Sp._ReInit();this.QX._ReInit();this.
Aar._ReInit();this.U$._ReInit();this.F$._ReInit();this.N9.R(A.z2(A.abg.A49));this.
Aar.R(A.z2(A.abg.A4H));this.F$.R(A.z2(A.abg.RangeTest));this.N9.Y(A.zW(A.eV.Au));
this.N9.Bz(A.zW(A.eV.AB));this.N9.C7(A.zW(A.eV.Cq));this.Aar.Y(A.zW(A.eV.Au));this.
F$.Y(A.zW(A.eV.OI));this.F$.Bz(A.zW(A.eV.K7));},_Mark:function(D){var B;C.Aw._Mark.
call(this,D);if((B=this.IK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FC
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aar)._cycle!=D)B._Mark(B._cycle=D);if((B=this.U$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.F$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RangeTestScreen"};C.ZS={ScreenType:0,Rt:function(E){if(this.ScreenType===
E)return;this.ScreenType=E;},Rv:function(H){A._GetAutoObject(C.A1).BX(this.ScreenType
);},_Init:function(aArg){C.B9._Init.call(this,aArg);this.__proto__=C.ZS;},_className:
"Application::MenuItemScreen"};C.AcC={AbS:null,Mj:null,Akm:false,Init:function(aArg
){},Ai:function(Ae){C.B9.Ai.call(this,Ae);if(this.Akm){this.Mj.Cc(1);this.Mj.L(A.
iF.Hy);}else{this.Mj.Cc(0);if(this.Ko)this.Mj.L(A.iF.Bg);else if(this.GW)this.Mj.
L(A.iF.Text);else this.Mj.L(A.iF.Bg);}},JC:function(H){var F,C$;if(!!this.AbS){(
C$=this.AbS,C$[2].call(C$[0],!(F=this.AbS,F[1].call(F[0]))));this.AA6((F=this.AbS
,F[1].call(F[0])));A.ow([this,this.Dz],this);}},AXq:function(H){this.Ko=true;this.
Dz(this);},AA6:function(E){if(this.Akm===E)return;this.Akm=E;this.Dz(this);this.
Al();},AXM:function(H){var F;this.AA6((F=this.AbS,F[1].call(F[0])));},AU5:function(
s){this.AXM(s);},Dz:function(H){var F;if(!this.N||!this.Ko)return;if(this.Akm){(
F=this.N,F[1].call(F[0])).Cb(A.z2(A.abg.Off));(F=this.N,F[1].call(F[0])).IJ.Y(A.
zW(A.eV.AB));}else{(F=this.N,F[1].call(F[0])).Cb(A.z2(A.abg.A12));(F=this.N,F[1].
call(F[0])).IJ.Y(A.zW(A.eV.AB));}(F=this.N,F[1].call(F[0])).Al();},A3j:function(
E){if(A.z_(this.AbS,E))return;if(!!this.AbS)A.zn([this,this.AU5],this.AbS,0);this.
AbS=E;if(!!E)A.za([this,this.AU5],E,0);if(!!E)A.ow([this,this.AU5],this);},_Init:
function(aArg){C.B9._Init.call(this,aArg);A.abh.Am._Init.call(this.Mj={I:this},0
);this.__proto__=C.AcC;this.T.L(A.iF.Hy);this.Mj.G(ADX);this.Mj.Cc(0);this.J(this.
Mj,0);this.Mj.Ar(A.zW(A.abi.An2));this.Init(aArg);},_Done:function(){this.__proto__=
C.B9;this.Mj._Done();C.B9._Done.call(this);},_ReInit:function(){C.B9._ReInit.call(
this);this.Mj._ReInit();},_Mark:function(D){var B;C.B9._Mark.call(this,D);if((B=
this.AbS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mj)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MenuItemCheckBox"};C.AJl={Hu:null,Ih:null
,_Init:function(aArg){C.CG._Init.call(this,aArg);C.AlA._Init.call(this.Hu={I:this
},0);C.ACE._Init.call(this.Ih={I:this},0);this.__proto__=C.AJl;var B;this.Lf(A.z2(
A.abg.AyP));this.Hu.G(AiX);this.Hu.Aj(true);this.Hu.U(A.z2(A.abg.Date));this.Hu.
Bk(true);this.Ih.G(AfX);this.Ih.Aj(true);this.Ih.U(A.z2(A.abg.Bp));this.J(this.Hu
,0);this.J(this.Ih,0);this.Hu.Afl([B=this.Hu,B.Gy]);this.Hu.Hb([this,this.Es,this.
HU]);this.Hu.Aid(A.zW(A.abi.Edit));this.Hu.AcV([B=A._GetAutoObject(A.Device.Helper
),B.Tl,B.Tm]);this.Ih.Afl([B=this.Ih,B.Gy]);this.Ih.Hb([this,this.Es,this.HU]);this.
Ih.Aid(A.zW(A.abi.Edit));this.Ih.AcV([B=A._GetAutoObject(A.Device.Helper),B.Tl,B.
Tm]);},_Done:function(){this.__proto__=C.CG;this.Hu._Done();this.Ih._Done();C.CG.
_Done.call(this);},_ReInit:function(){C.CG._ReInit.call(this);this.Hu._ReInit();
this.Ih._ReInit();this.Lf(A.z2(A.abg.AyP));this.Hu.U(A.z2(A.abg.Date));this.Ih.U(
A.z2(A.abg.Bp));},_Mark:function(D){var B;C.CG._Mark.call(this,D);if((B=this.Hu).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ih)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DateTimeSettingsScreen"};C.AP5={P_:null,G7:null,Df:null,NW:null,WX:
null,V$:null,_Init:function(aArg){C.CG._Init.call(this,aArg);C.P_._Init.call(this.
P_={I:this},0);C.AIj._Init.call(this.G7={I:this},0);C.APF._Init.call(this.Df={I:
this},0);C.APH._Init.call(this.NW={I:this},0);C.Ade._Init.call(this.WX={I:this},
0);C.V$._Init.call(this.V$={I:this},0);this.__proto__=C.AP5;var B;this.Lf(A.z2(A.
abg.Temperature));this.Df.G(AR9);this.Df.Aj(true);this.Df.U(A.z2(A.abg.AAp));this.
Df.Bk(false);this.NW.G(AiY);this.NW.Aj(true);this.NW.U(A.z2(A.abg.Undertemperature
));this.NW.Bk(true);this.NW.Bu(3800);this.NW.Hw(3000);this.NW.FP(5000);this.NW.A4b(
A.z2(A.abg.ACW));this.WX.G(AR_);this.WX.Aj(true);this.WX.W(true);this.WX.U(A.z2(
A.abg.AZb));this.J(this.Df,0);this.J(this.NW,0);this.J(this.WX,0);this.Df.Afl([B=
this.Df,B.Gy]);this.Df.Hb([this,this.Es,this.HU]);this.Df.Aid(A.zW(A.abi.Edit));
this.Df.M$([B=this.Df,B.Avv]);this.Df.Na(A.zW(A.abi.Alv));this.Df.AF([B=this.G7,
B.Cz,B.CB]);this.Df.Dh(this.G7);this.Df.A3P([B=this.G7,B.AN9,B.AUS]);this.Df.A3O([
B=this.G7,B.AN8,B.AUR]);this.NW.M$([B=this.Df,B.Avv]);this.NW.Na(A.zW(A.abi.Alv)
);this.NW.AF([B=A._GetAutoObject(A.Device.Device),B.A2V,B.A6C]);this.WX.Dh(this.
V$);this.WX.Aih([B=A._GetAutoObject(A.Device.Device),B.A2o,B.A6n]);},_Done:function(
){this.__proto__=C.CG;this.P_._Done();this.G7._Done();this.Df._Done();this.NW._Done(
);this.WX._Done();this.V$._Done();C.CG._Done.call(this);},_ReInit:function(){C.CG.
_ReInit.call(this);this.P_._ReInit();this.G7._ReInit();this.Df._ReInit();this.NW.
_ReInit();this.WX._ReInit();this.V$._ReInit();this.Lf(A.z2(A.abg.Temperature));this.
Df.U(A.z2(A.abg.AAp));this.NW.U(A.z2(A.abg.Undertemperature));this.NW.A4b(A.z2(A.
abg.ACW));this.WX.U(A.z2(A.abg.AZb));},_Mark:function(D){var B;C.CG._Mark.call(this
,D);if((B=this.P_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V$
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.AJv={OV:null,OW:null,Rd:null,Uj:null,Rf:null,Re:null,Ft:null,Aal:null,Init:function(
aArg){A.za([this,this.Bh1],this.OW.Q,0);},Bh1:function(H){var F;A._GetAutoObject(
A.Device.Device).AtM((F=this.OW.Q,F[1].call(F[0])));},_Init:function(aArg){C.CG.
_Init.call(this,aArg);C.JQ._Init.call(this.OV={I:this},0);C.B_._Init.call(this.OW={
I:this},0);C.Ade._Init.call(this.Rd={I:this},0);C.JQ._Init.call(this.Uj={I:this}
,0);C.Ade._Init.call(this.Rf={I:this},0);C.Ade._Init.call(this.Re={I:this},0);C.
Ft._Init.call(this.Ft={I:this},0);C.Aal._Init.call(this.Aal={I:this},0);this.__proto__=
C.AJv;var B;this.N.G(Vr);this.Lf(A.z2(A.abg.Device));this.OV.G(AiX);this.OV.Aj(true
);this.OV.U(A.z2(A.abg.A4S));this.OV.Bk(false);this.OV.Hw(2);this.OV.FP(60);this.
OV.Nd(A.z2(A.abg.AC$));this.OV.N3(A.z2(A.abg.AC$));this.OW.G(Au2);this.OW.Aj(true
);this.OW.U(A.z2(A.abg.A4Z));this.OW.Bk(true);this.OW.Bu(0);this.OW.Hw(-1);this.
OW.FP(1);this.Rd.G(AiY);this.Rd.Aj(true);this.Rd.U(A.z2(A.abg.G9));this.Rd.Bk(false
);this.Rd.Bu(0);this.Rd.Hw(-1);this.Rd.FP(1);this.Uj.G(AiZ);this.Uj.Aj(true);this.
Uj.U(A.z2(A.abg.AZH));this.Uj.Bk(true);this.Uj.Nd(AdG);this.Uj.N3(AdG);this.Rf.G(
AR$);this.Rf.Aj(true);this.Rf.U(A.z2(A.abg.ApR));this.Rf.Bk(false);this.Rf.Bu(1);
this.Rf.Hw(-1);this.Rf.FP(1);this.Re.G(ADY);this.Re.Aj(true);this.Re.U(A.z2(A.abg.
Apu));this.Re.Bk(true);this.Re.Bu(0);this.Re.Hw(-1);this.Re.FP(1);this.Aal.AF(A.
_GetAutoObject(A.Device.Device).Aul);this.J(this.OV,0);this.J(this.OW,0);this.J(
this.Rd,0);this.J(this.Uj,0);this.J(this.Rf,0);this.J(this.Re,0);this.OV.AF([B=A.
_GetAutoObject(A.Device.Device),B.A2M,B.A6x]);this.OW.AF([B=this.Aal,B.Cz,B.CB]);
this.OW.Dh(this.Aal);this.Rd.Dh(this.Ft);this.Rd.Aih([B=A._GetAutoObject(A.Device.
Device),B.AAK,B.AEK]);this.Uj.AF([B=A._GetAutoObject(A.Device.Device),B.A2l,B.A6k
]);this.Rf.Dh(this.Ft);this.Rf.Aih([B=A._GetAutoObject(A.Device.Device),B.A2W,B.
A6D]);this.Re.Dh(this.Ft);this.Re.Aih([B=A._GetAutoObject(A.Device.Device),B.ANT
,B.AUG]);this.Init(aArg);},_Done:function(){this.__proto__=C.CG;this.OV._Done();
this.OW._Done();this.Rd._Done();this.Uj._Done();this.Rf._Done();this.Re._Done();
this.Ft._Done();this.Aal._Done();C.CG._Done.call(this);},_ReInit:function(){C.CG.
_ReInit.call(this);this.OV._ReInit();this.OW._ReInit();this.Rd._ReInit();this.Uj.
_ReInit();this.Rf._ReInit();this.Re._ReInit();this.Ft._ReInit();this.Aal._ReInit(
);this.Lf(A.z2(A.abg.Device));this.OV.U(A.z2(A.abg.A4S));this.OV.Nd(A.z2(A.abg.AC$
));this.OV.N3(A.z2(A.abg.AC$));this.OW.U(A.z2(A.abg.A4Z));this.Rd.U(A.z2(A.abg.G9
));this.Uj.U(A.z2(A.abg.AZH));this.Rf.U(A.z2(A.abg.ApR));this.Re.U(A.z2(A.abg.Apu
));},_Mark:function(D){var B;C.CG._Mark.call(this,D);if((B=this.OV)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Uj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Re)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ft)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aal)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceSettingsScreen"};C.APk={Rg:null,OP:null,GU:null
,PM:null,Ui:null,PL:null,Df:null,FD:null,AAU:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,AutoRegistrationMode:null,EartagNrAssignmentMode:null,Breed:null
,Y7:null,Init:function(aArg){A.za([this,this.AIl],this.Df.Q,0);A.za([this,this.Ban
],this.FD.Q,0);A.za([this,this.Bjr],this.Rg.Q,0);A.za([this,this.AKk],this.GU.Q,
0);A.za([this,this.A$7],this.PM.Q,0);A.za([this,this.Bbc],this.PL.Q,0);},AIl:function(
H){var F;A._GetAutoObject(A.Device.Device).DO((F=this.Df.Q,F[1].call(F[0])));},Bjr:
function(H){var F;A._GetAutoObject(A.Device.Device).AtV((F=this.Rg.Q,F[1].call(F[
0])));},AKk:function(H){var F;A._GetAutoObject(A.Device.Device).J7((F=this.GU.Q,
F[1].call(F[0])));},A$7:function(H){var F;A._GetAutoObject(A.Device.Device).Atc((
F=this.PM.Q,F[1].call(F[0])));},Bbc:function(H){var F;A._GetAutoObject(A.Device.
Device).Ald((F=this.PL.Q,F[1].call(F[0])));},Ban:function(H){var F;A._GetAutoObject(
A.Device.Device).O1((F=this.FD.Q,F[1].call(F[0])));},_Init:function(aArg){C.CG._Init.
call(this,aArg);C.B_._Init.call(this.Rg={I:this},0);C.JQ._Init.call(this.OP={I:this
},0);C.B_._Init.call(this.GU={I:this},0);C.B_._Init.call(this.PM={I:this},0);C.Rk.
_Init.call(this.Ui={I:this},0);C.APC._Init.call(this.PL={I:this},0);C.B_._Init.call(
this.Df={I:this},0);C.ACC._Init.call(this.FD={I:this},0);C.V$._Init.call(this.AAU={
I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope.
_Init.call(this.WeightRecordingScope={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},
0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={I:this},0);C.
Breed._Init.call(this.Breed={I:this},0);A.Device.MS._Init.call(this.Y7={I:this},
0);this.__proto__=C.APk;var B;this.Lf(A.z2(A.abg.ACm));this.Rg.G(AiX);this.Rg.Aj(
true);this.Rg.U(A.z2(A.abg.A5s));this.Rg.Bk(true);this.Rg.Bu(0);this.OP.G(Au0);this.
OP.Aj(true);this.OP.W(true);this.OP.U(A.z2(A.abg.Ake));this.OP.Hw(0);this.OP.FP(
99);this.OP.Nd(A.z2(A.abg.LJ));this.OP.N3(A.z2(A.abg.Gz));this.GU.G(AiY);this.GU.
Aj(true);this.GU.U(A.z2(A.abg.Aub));this.GU.Bk(true);this.GU.Bu(0);this.PM.G(AiZ
);this.PM.Aj(true);this.PM.U(A.z2(A.abg.AZn));this.PM.Bk(false);this.PM.Hw(-1);this.
PM.FP(1);this.Ui.G(Ap8);this.Ui.Aj(true);this.Ui.U(A.z2(A.abg.AZl));this.Ui.Bk(true
);this.Ui.Rt(55);this.PL.G(AiZ);this.PL.Aj(true);this.PL.U(A.z2(A.abg.AZg));this.
PL.Bk(false);this.PL.Hw(-1);this.PL.FP(1);this.Df.G(ASa);this.Df.Aj(true);this.Df.
U(A.z2(A.abg.Auv));this.Df.Bk(true);this.Df.Bu(0);this.FD.G(AiZ);this.FD.Aj(true
);this.FD.U(A.z2(A.abg.Breed));this.FD.Bk(false);this.AnimalType.AF(A._GetAutoObject(
A.Device.Device).AnimalType);this.WeightRecordingScope.AF(A._GetAutoObject(A.Device.
Device).WeightRecordingScope);this.Gender.AF(A._GetAutoObject(A.Device.Device).Gender
);this.AutoRegistrationMode.AF(A._GetAutoObject(A.Device.Device).AutoRegistrationMode
);this.EartagNrAssignmentMode.AF(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
);this.Breed.AF(A._GetAutoObject(A.Device.Device).Breed);this.J(this.Rg,0);this.
J(this.OP,0);this.J(this.GU,0);this.J(this.PM,0);this.J(this.Ui,0);this.J(this.PL
,0);this.J(this.Df,0);this.J(this.FD,0);this.Rg.AF([B=this.WeightRecordingScope,
B.Cz,B.CB]);this.Rg.Dh(this.WeightRecordingScope);this.OP.AF([B=A._GetAutoObject(
A.Device.Device),B.A1$,B.A6d]);this.GU.AF([B=this.Gender,B.Cz,B.CB]);this.GU.Dh(
this.Gender);this.PM.AF([B=this.AutoRegistrationMode,B.Cz,B.CB]);this.PM.Dh(this.
AutoRegistrationMode);this.Ui.AR=[B=this.Ui,B.Rv];this.PL.AF([B=this.EartagNrAssignmentMode
,B.Cz,B.CB]);this.PL.Dh(this.EartagNrAssignmentMode);this.Df.AF([B=this.AnimalType
,B.Cz,B.CB]);this.Df.Dh(this.AnimalType);this.FD.Hb([this,this.Es,this.HU]);this.
FD.M$([B=this.FD,B.Gy]);this.FD.Na(A.zW(A.abi.Edit));this.FD.AF([B=this.Breed,B.
Cz,B.CB]);this.FD.Dh(this.Breed);this.FD.ABd(this.Y7);this.Init(aArg);},_Done:function(
){this.__proto__=C.CG;this.Rg._Done();this.OP._Done();this.GU._Done();this.PM._Done(
);this.Ui._Done();this.PL._Done();this.Df._Done();this.FD._Done();this.AAU._Done(
);this.AnimalType._Done();this.WeightRecordingScope._Done();this.Gender._Done();
this.AutoRegistrationMode._Done();this.EartagNrAssignmentMode._Done();this.Breed.
_Done();this.Y7._Done();C.CG._Done.call(this);},_ReInit:function(){C.CG._ReInit.
call(this);this.Rg._ReInit();this.OP._ReInit();this.GU._ReInit();this.PM._ReInit(
);this.Ui._ReInit();this.PL._ReInit();this.Df._ReInit();this.FD._ReInit();this.AAU.
_ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit();this.Gender.
_ReInit();this.AutoRegistrationMode._ReInit();this.EartagNrAssignmentMode._ReInit(
);this.Breed._ReInit();this.Y7._ReInit();this.Lf(A.z2(A.abg.ACm));this.Rg.U(A.z2(
A.abg.A5s));this.OP.U(A.z2(A.abg.Ake));this.OP.Nd(A.z2(A.abg.LJ));this.OP.N3(A.z2(
A.abg.Gz));this.GU.U(A.z2(A.abg.Aub));this.PM.U(A.z2(A.abg.AZn));this.Ui.U(A.z2(
A.abg.AZl));this.PL.U(A.z2(A.abg.AZg));this.Df.U(A.z2(A.abg.Auv));this.FD.U(A.z2(
A.abg.Breed));},_Mark:function(D){var B;C.CG._Mark.call(this,D);if((B=this.Rg)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.OP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
GU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ui)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AAU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y7)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationSettingsScreen"};
C.U$={Q:null,TransponderProtocolToString:null,AmP:null,Background:null,Ac:null,WN:
null,Hs:null,SM:null,PY:null,Sq:null,CZ:null,Gn:null,XG:null,P4:null,CountryToString:
null,AF:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.Oo],this.
Q,0);this.Q=E;if(!!E)A.za([this,this.Oo],E,0);if(!!E)A.ow([this,this.Oo],this);}
,Oo:function(H){var B;var F;if(!!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.
Hs.R((F=this.Q,F[1].call(F[0])).Id.toFixed());var BJ=(F=this.Q,F[1].call(F[0])).
BbJ();if(BJ<900){var Ny=A._GetAutoObject(A.Device.Converter).AJd(BJ);if(!!Ny)this.
CZ.R(((this.CountryToString.KL(Ny)+AaF)+BJ.toFixed())+Nr);else this.CZ.R(BJ.toFixed(
));if(Ny===10){var A8k=this.A06((F=this.Q,F[1].call(F[0])).Id);this.CZ.R(this.CZ.
String+((((ASb+this.AmP.BiE(A8k))+AaF)+A.aaq(this.AmP.BiD(A8k),2,10))+Nr));}this.
CZ.W(true);this.Sq.W(true);this.PY.W(false);this.SM.W(false);}else{this.PY.R(((A.
_GetAutoObject(A.Device.Converter).BaC(BJ)+AaF)+BJ.toFixed())+Nr);this.PY.W(true
);this.SM.W(true);this.CZ.W(false);this.Sq.W(false);}if(BJ===276){this.Gn.R(this.
AmP.Ca(this.A06((F=this.Q,F[1].call(F[0])).Id)));this.Gn.W(true);}else this.Gn.W(
false);this.P4.R(this.TransponderProtocolToString.Ca((F=this.Q,F[1].call(F[0])).
TransponderProtocol));}else{this.Hs.R(A.jm);this.PY.R(A.jm);this.Gn.R(A.jm);this.
CZ.R(A.jm);this.P4.R(A.jm);}},A06:function(JX){var HK=0;var Ny=A._GetAutoObject(
A.Device.Converter).AfQ(JX);switch(Ny){case 10:{var Fx=A._GetAutoObject(A.Device.
Helper).T$(JX,8,2)|0;HK=A._GetAutoObject(A.Device.Converter).AKl(Fx);}break;default:;
}return HK;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Device.TransponderProtocolToString.
_Init.call(this.TransponderProtocolToString={I:this},0);A.Device.GermanStateToString.
_Init.call(this.AmP={I:this},0);A.abh.AH._Init.call(this.Background={I:this},0);
A.Core.Ac._Init.call(this.Ac={I:this},0);C.CH._Init.call(this.WN={I:this},0);C.CH.
_Init.call(this.Hs={I:this},0);C.CH._Init.call(this.SM={I:this},0);C.CH._Init.call(
this.PY={I:this},0);C.CH._Init.call(this.Sq={I:this},0);C.CH._Init.call(this.CZ={
I:this},0);C.CH._Init.call(this.Gn={I:this},0);C.CH._Init.call(this.XG={I:this},
0);C.CH._Init.call(this.P4={I:this},0);A.Device.CountryToString._Init.call(this.
CountryToString={I:this},0);this.__proto__=C.U$;this.G(AdE);this.Background.AW(0x3F
);this.Background.G(AdE);this.Background.L(A.iF.CP);this.Ac.AW(0x3F);this.Ac.G(AdE
);this.Ac.Le(9);this.WN.G(ASc);this.WN.Aj(true);this.WN.R(A.z2(A.abg.Hs)+A.z2(A.
abg.Colon));this.WN.A0(0x11);this.WN.L(A.iF.Text);this.Hs.G(ASd);this.Hs.Aj(true
);this.Hs.R(ASe);this.Hs.A0(0x14);this.Hs.L(A.iF.Text);this.SM.G(ADZ);this.SM.Aj(
true);this.SM.R(A.z2(A.abg.Bg6)+A.z2(A.abg.Colon));this.SM.A0(0x11);this.SM.L(A.
iF.Text);this.PY.G(AD0);this.PY.Aj(true);this.PY.R(ASf);this.PY.A0(0x14);this.PY.
L(A.iF.Text);this.Sq.G(ADZ);this.Sq.Aj(true);this.Sq.R(A.z2(A.abg.CZ)+A.z2(A.abg.
Colon));this.Sq.A0(0x11);this.Sq.L(A.iF.Text);this.CZ.G(AD0);this.CZ.Aj(true);this.
CZ.R(ASg);this.CZ.A0(0x14);this.CZ.L(A.iF.Text);this.Gn.G(ASh);this.Gn.Aj(true);
this.Gn.R(ASi);this.Gn.A0(0x14);this.Gn.L(A.iF.Text);this.XG.G(ASj);this.XG.Aj(true
);this.XG.R(A.z2(A.abg.P4)+A.z2(A.abg.Colon));this.XG.A0(0x11);this.XG.L(A.iF.Text
);this.P4.G(ASk);this.P4.Aj(true);this.P4.R(ASl);this.P4.A0(0x14);this.P4.L(A.iF.
Text);this.J(this.Background,0);this.J(this.Ac,0);this.J(this.WN,0);this.J(this.
Hs,0);this.J(this.SM,0);this.J(this.PY,0);this.J(this.Sq,0);this.J(this.CZ,0);this.
J(this.Gn,0);this.J(this.XG,0);this.J(this.P4,0);this.WN.Y(A.zW(A.eV.AB));this.WN.
Bz(A.zW(A.eV.Cq));this.Hs.Y(A.zW(A.eV.AB));this.Hs.Bz(A.zW(A.eV.Cq));this.SM.Y(A.
zW(A.eV.AB));this.SM.Bz(A.zW(A.eV.Cq));this.PY.Y(A.zW(A.eV.AB));this.PY.Bz(A.zW(
A.eV.Cq));this.Sq.Y(A.zW(A.eV.AB));this.Sq.Bz(A.zW(A.eV.Cq));this.CZ.Y(A.zW(A.eV.
AB));this.CZ.Bz(A.zW(A.eV.Cq));this.Gn.Y(A.zW(A.eV.AB));this.Gn.Bz(A.zW(A.eV.Cq)
);this.XG.Y(A.zW(A.eV.AB));this.XG.Bz(A.zW(A.eV.Cq));this.P4.Y(A.zW(A.eV.AB));this.
P4.Bz(A.zW(A.eV.Cq));},_Done:function(){this.__proto__=A.Core.O;this.TransponderProtocolToString.
_Done();this.AmP._Done();this.Background._Done();this.Ac._Done();this.WN._Done();
this.Hs._Done();this.SM._Done();this.PY._Done();this.Sq._Done();this.CZ._Done();
this.Gn._Done();this.XG._Done();this.P4._Done();this.CountryToString._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.AmP._ReInit();this.Background._ReInit();this.Ac._ReInit();this.WN.
_ReInit();this.Hs._ReInit();this.SM._ReInit();this.PY._ReInit();this.Sq._ReInit(
);this.CZ._ReInit();this.Gn._ReInit();this.XG._ReInit();this.P4._ReInit();this.CountryToString.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AmP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.WN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hs)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.XG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderInfo"
};C.Rh={GF:null,A4z:A.jm,Ai:function(Ae){C.E3.Ai.call(this,Ae);if(this.LM.Fe())this.
GF.Dg(A.iF.A6);else this.GF.Dg(this.Background.AV);this.GF.AoT(this.Il.AV);},Z9:
function(E){if(this.A4z===E)return;this.A4z=E;this.GF.Text.R(E);this.GF.W(E!==A.
jm);},_Init:function(aArg){C.E3._Init.call(this,aArg);C.GF._Init.call(this.GF={I:
this},0);this.__proto__=C.Rh;this.Background.G(ASm);this.LM.G(RN);this.NT.G(AD1);
this.PZ.G(AD1);this.GF.G(ASn);this.GF.W(false);this.J(this.GF,0);this.Il.Y(A.zW(
A.eV.Au));this.Il.Bz(A.zW(A.eV.AB));this.Il.C7(A.zW(A.eV.Cq));},_Done:function(){
this.__proto__=C.E3;this.GF._Done();C.E3._Done.call(this);},_ReInit:function(){C.
E3._ReInit.call(this);this.GF._ReInit();},_Mark:function(D){var B;C.E3._Mark.call(
this,D);if((B=this.GF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMenuItem"
};C.GF={Co:null,Aco:null,Am:null,Text:null,Dk:A.jm,Aky:0,Mh:0,IG:0,Init:function(
aArg){},U:function(E){if(this.Dk===E)return;this.Dk=E;this.Text.R(E);},But:function(
H){this.Am.G(this.Text.M);this.Aco.G(this.Text.M);},AoT:function(E){if(this.Aky===
E)return;this.Aky=E;this.Aco.L(E);this.Text.L(E);},Dg:function(E){if(this.Mh===E
)return;this.Mh=E;this.Am.L(E);},Y:function(E){if(this.Co===E)return;this.Co=E;this.
Text.Y(E);},HT:function(E){if(this.IG===E)return;this.IG=E;this.Text.HT(E);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.abh.MZ._Init.call(this.Aco={I:this
},0);A.abh.MZ._Init.call(this.Am={I:this},0);A.abh.Text._Init.call(this.Text={I:
this},0);this.__proto__=C.GF;this.G(AD2);this.Aco.AW(0x8);this.Aco.L(A.iF.Text);
this.Am.AW(0x8);this.Am.L(A.iF.CP);this.Text.AW(0xD);this.Text.G(AD2);this.Text.
HT(5);this.Text.IZ(true);this.Text.A0(0x14);this.Text.L(A.iF.Text);this.J(this.Aco
,0);this.J(this.Am,0);this.J(this.Text,0);this.Aco.Ar(A.zW(A.abi.ALv));this.Am.Ar(
A.zW(A.abi.ALu));this.Text.Rr([this,this.But]);this.Text.Y(A.zW(A.eV.AB));this.Init(
aArg);},_Done:function(){this.__proto__=A.Core.O;this.Aco._Done();this.Am._Done(
);this.Text._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Aco._ReInit();this.Am._ReInit();this.Text._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Co)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aco)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.SJ={EA:null,Ac:null,AD:null,DS:function(H){var B;C.Aw.DS.call(this,H);if(!!this.
A6&&((this.A6.S&0x400)===0x400))this.Ac.IA(this.A6,true,null,null);},CE:function(
H){C.Aw.CE.call(this,H);this.AHa(this);A._GetAutoObject(A.Device.Device).Aq.Bo(null
);A._GetAutoObject(A.Device.Device).Bt.Bo(null);A._GetAutoObject(A.Device.Helper
).Aiv();A._GetAutoObject(A.Device.Helper).Apr();},H4:function(H){},AdI:function(
s){this.H4(s);},AXD:function(H){A._GetAutoObject(C.A1).Fl();},FX:function(H){var
B;this.AD.N0((B=this.Ac.Dd(0x1))[3]-B[1]);this.AD.N4((B=this.Ac.M)[3]-B[1]);this.
AD.N2(-this.Ac.Br[1]);},AHa:function(H){},Byd:function(s){this.AHa(s);},Iu:function(
H){A.ow([this,this.FX],this);},_Init:function(aArg){C.Aw._Init.call(this,aArg);A.
abh.AH._Init.call(this.EA={I:this},0);A.Core.Ac._Init.call(this.Ac={I:this},0);C.
AD._Init.call(this.AD={I:this},0);this.__proto__=C.SJ;this.Background.L(A.iF.CP);
this.N.W(true);this.N.Cb(A.jm);this.Dt(C.Aso);this.EA.AW(0x3F);this.EA.G(FK);this.
EA.L(A.iF.CD);this.Ac.G(FK);this.Ac.Le(9);this.AD.G(JT);this.J(this.EA,0);this.J(
this.Ac,0);this.J(this.AD,0);this.N.CA=[this,this.AXD];this.N.C8(A.zW(A.abi.ET));
this.Ac.Eu=[this,this.Iu];},_Done:function(){this.__proto__=C.Aw;this.EA._Done();
this.Ac._Done();this.AD._Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw.
_ReInit.call(this);this.EA._ReInit();this.Ac._ReInit();this.AD._ReInit();},_Mark:
function(D){var B;C.Aw._Mark.call(this,D);if((B=this.EA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ListsScreen"};C.AQx={Xv:function(H){this.
Aer();this.DX(A.z2(A.abg.AP$),[this,this.AOO],7);this.DX(A.z2(A.abg.Apn),[this,this.
BeS],6);this.DX(A.z2(A.abg.Apm),[this,this.Ao7],3);this.DX(A.z2(A.abg.AfK),[this
,this.Aig],2);this.DX(A.z2(A.abg.AbC),[this,this.AoN],1);this.DX(A.z2(A.abg.Aem)
,[this,this.Ah_],0);A._GetAutoObject(C.Cy).IS();A._GetAutoObject(C.Cy).V1(A.z2(A.
abg.Aen)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.Device).Cn(6);},DS:function(
H){},Acd:function(){return C.AIR;},Ace:function(){return C.ALc;},Ry:function(H){
var Bb=A._GetAutoObject(A.Device.Helper).LO();var AxX=A._NewObject(A.Device.BoolFilterCriterion
,0);AxX.Initialize(12,0,true,true);Bb.CO(AxX);A._GetAutoObject(A.Device.Device).
Aq.Bo(Bb);},HX:function(H){C.Ge.HX.call(this,H);if(this.AhY()===false){this.N.Cm(
A.zW(A.abi.Apn));this.N.Cg=[this,this.A0e];this.N.Fr(A.jm);}this.N.O3(false);this.
N.O4(false);},Ad$:function(){A._GetAutoObject(C.A1).BX(41);},Ad_:function(){A._GetAutoObject(
C.A1).BX(44);},_Init:function(aArg){C.Ge._Init.call(this,aArg);this.__proto__=C.
AQx;var B;this.Dt(C.AK_);this.Et(A.z2(A.abg.Bc8));this.Afq([B=A._GetAutoObject(A.
Device.Device),B.A20,B.A6E]);},_className:"Application::WatchListScreen"};C.AH1={
DS:function(H){var B;var I8=(A.Core.B0.isPrototypeOf(H)?H:null);if(((I8.CM===4)||(
I8.CM===5))===false){C.AuD.DS.call(this,H);return;}if(A._GetAutoObject(A.Device.
Device).MeasureState!==1)return;var A70=A._GetAutoObject(A.Device.Device).Io;var
RZ;if(I8.CM===5)RZ=5;else RZ=4;var AxD=A._GetAutoObject(A.abk.Dv).A8w(A70,RZ);var
Ma=(((A70+((AxD/2)|0))/AxD)|0)*AxD;if(I8.CM===4)Ma+=AxD;else if(I8.CM===5)Ma-=AxD;
if(Ma>999900)Ma=999900;if(Ma<100)Ma=100;A._GetAutoObject(A.Device.Device).UpdateWeightValue(
Ma);},ApF:function(H){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===
3)A.ow([B=this.Ob,B.CA],this);else A._GetAutoObject(C.A1).Fl();},UY:function(H){
if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(A.Device.
Device).ApH();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(this.A4Q(
)===false){this.Hx.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).Io);this.Hx.
Cr(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A1).Fl();}}else if(A.
_GetAutoObject(A.Device.Device).MeasureState===3){this.Hx.OnSetBodyWeight(A._GetAutoObject(
A.Device.Device).Io);this.Hx.Cr(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(
C.A1).Fl();}},AiB:function(H){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===
3)A.ow([B=this.Ob,B.Cl],this);},AYB:function(){if(A._GetAutoObject(A.Device.Device
).Io<100000)this.Io.R(A._GetAutoObject(A.Device.Converter).Nl(A._GetAutoObject(A.
Device.Device).Io,1,false));else this.Io.R(A._GetAutoObject(A.Device.Converter).
Nl(A._GetAutoObject(A.Device.Device).Io,0,false));},A8v:function(){var AHk=A._GetAutoObject(
A.Device.Helper).V.AiO(1);if(AHk>=100000)AHk=(Math.round(AHk/1000)|0)*1000;return AHk;
},_Init:function(aArg){C.AuD._Init.call(this,aArg);this.__proto__=C.AH1;},_className:
"Application::AnimalActionWeighingScreen"};C.AQj={Uq:null,WZ:null,P_:null,Acy:null
,_Init:function(aArg){C.CG._Init.call(this,aArg);C.B_._Init.call(this.Uq={I:this
},0);C.B_._Init.call(this.WZ={I:this},0);C.P_._Init.call(this.P_={I:this},0);C.Acy.
_Init.call(this.Acy={I:this},0);this.__proto__=C.AQj;var B;this.Lf(A.z2(A.abg.ADa
));this.Uq.G(AiX);this.Uq.Aj(true);this.Uq.U(A.z2(A.abg.A5e));this.Uq.Bk(true);this.
Uq.Bu(0);this.WZ.G(AfX);this.WZ.Aj(true);this.WZ.U(A.z2(A.abg.A5d));this.WZ.Bk(false
);this.J(this.Uq,0);this.J(this.WZ,0);this.Uq.AF([B=this.P_,B.Cz,B.CB]);this.Uq.
Dh(this.P_);this.WZ.AF([B=this.Acy,B.Cz,B.CB]);this.WZ.Dh(this.Acy);},_Done:function(
){this.__proto__=C.CG;this.Uq._Done();this.WZ._Done();this.P_._Done();this.Acy._Done(
);C.CG._Done.call(this);},_ReInit:function(){C.CG._ReInit.call(this);this.Uq._ReInit(
);this.WZ._ReInit();this.P_._ReInit();this.Acy._ReInit();this.Lf(A.z2(A.abg.ADa)
);this.Uq.U(A.z2(A.abg.A5e));this.WZ.U(A.z2(A.abg.A5d));},_Mark:function(D){var B;
C.CG._Mark.call(this,D);if((B=this.Uq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
WZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::UnitsSettingsScreen"
};C.Acy={MassUnitToString:null,Du:function(){return 2;},Da:function(aIndex){if((
aIndex<0)||(aIndex>=2))return-1;return aIndex;},GP:function(aIndex){if((aIndex<0
)||(aIndex>=2))return A.jm;return this.MassUnitToString.Ca(aIndex);},DT:function(
A2){return A2;},HN:function(){return 1;},AF:function(E){C.AC.AF.call(this,E);A._GetAutoObject(
A.Device.Device).AtA(E);},Init:function(aArg){var B;A.za([this,this.A88],[B=A._GetAutoObject(
A.Device.Device),B.ANS,B.AUF],0);A.ow([this,this.A88],this);},A88:function(H){this.
Q=A._GetAutoObject(A.Device.Device).MassUnit;A.aat([this,this.Cz,this.CB],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.
MassUnitToString={I:this},0);this.__proto__=C.Acy;this.Init(aArg);},_Done:function(
){this.__proto__=C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MassUnits"};C.AuD={Hx:null,Ahb:null,MassUnit:
null,Io:null,TT:null,Alq:null,Aat:null,X3:null,Ob:null,WR:null,Init:function(aArg
){var B;this.MassUnit.R(A._GetAutoObject(A.abk.Dv).Aa$());A.za([this,this.AGx],[
B=A._GetAutoObject(A.Device.Device),B.AAM,B.AEM],0);A.za([this,this.Bts],[B=A._GetAutoObject(
A.Device.Device),B.AAS,B.AER],0);A.za([this,this.Btt],[B=this.Ob,B.AoE,B.I0],0);
},Ai:function(Ae){C.Aw.Ai.call(this,Ae);this.Auw();this.Aau();},JC:function(H){this.
UY(this);},CE:function(H){C.Aw.CE.call(this,H);if(!A._GetAutoObject(A.Device.Device
).WeightRecordingMode)A._GetAutoObject(A.Device.Device).ApH();else A._GetAutoObject(
A.Device.Device).UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Mp(
))A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).
Bt.Ie().toFixed(),0,null);this.Hx.GC();this.Hx.OnSetAnimalId(A._GetAutoObject(A.
Device.Helper).V.Id);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).ACQ();else{var BuJ=this.A8v();this.X3.W(true);this.
Aat.W(true);A._GetAutoObject(A.Device.Device).UpdateWeightValue(BuJ);A._GetAutoObject(
A.Device.Device).UpdateMeasureState(1);}},Fc:function(H){if(!A._GetAutoObject(A.
Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.Device).ApH();else A.
_GetAutoObject(A.Device.Device).AfJ();},Auw:function(){switch(A._GetAutoObject(A.
Device.Device).MeasureState){case 0:break;case 1:this.AYB();break;case 3:{this.AYB(
);this.X3.W(false);this.Aat.W(false);if(this.A4Q()){this.TT.W(false);this.Io.G(A.
aaR(this.Io.M,42));this.MassUnit.G(A.aaR(this.MassUnit.M,55));this.Ob.An(true);this.
Ob.W(true);this.A8(this.Ob);}}break;case 4:this.Io.R(A.z2(A.abv.Ah2));break;default:
A.aa8("%s%e",AD3,A._GetAutoObject(A.Device.Device).MeasureState);}},Aau:function(
){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{this.N.C8(
A.zW(A.abi.Ack));this.N.Cm(null);this.WR.W(false);this.N.Db(A.zW(A.abi.Aoi));this.
N.Cb(A.jm);}break;case 3:{if(this.Ob.AM<=1){this.N.C8(null);this.N.Cm(null);this.
WR.W(false);this.N.Db(null);}else{this.N.C8(A.zW(A.abi.AkL));this.N.Cm(A.zW(A.abi.
Acl));this.WR.W(true);this.N.Db(null);}this.N.Cb(A.z2(A.abg.Ok));}break;case 4:{
this.N.Db(A.zW(A.abi.Aoh));this.N.Cl=[this,this.BeH];this.N.Cm(null);this.WR.W(false
);this.N.Cb(A.jm);}break;default:;}},ApF:function(H){},BoZ:function(s){this.ApF(
s);},UY:function(H){},AUV:function(s){this.UY(s);},BeH:function(H){this.CE(this);
},Bts:function(H){this.Al();},AGx:function(H){this.Al();},A4Q:function(){var Aro=
A._GetAutoObject(A.Device.Helper).V.TimestampFirstWeighing;return(Aro>0)&&!A._GetAutoObject(
A.Device.Helper).BiB(Aro,this.Hx.Timestamp);},AiB:function(H){},AUU:function(s){
this.AiB(s);},Btt:function(H){this.Al();},AYB:function(){this.Io.R(A._GetAutoObject(
A.Device.Converter).AlP(A._GetAutoObject(A.Device.Device).Io));},A8v:function(){
return A._GetAutoObject(A.Device.Helper).V.AiO(1);},_Init:function(aArg){C.Aw._Init.
call(this,aArg);A.abh.AH._Init.call(this.Ahb={I:this},0);A.abh.Text._Init.call(this.
MassUnit={I:this},0);A.abh.Text._Init.call(this.Io={I:this},0);A.abh.Text._Init.
call(this.TT={I:this},0);C.Auu._Init.call(this.Alq={I:this},0);A.abh.Ab8._Init.call(
this.Aat={I:this},0);A.abh.Ab8._Init.call(this.X3={I:this},0);C.AQC._Init.call(this.
Ob={I:this},0);A.abh.Am._Init.call(this.WR={I:this},0);this.__proto__=C.AuD;this.
Background.L(A.iF.CD);this.N.W(true);this.Dt(C.If);this.Ahb.AW(0x3F);this.Ahb.G(
Au3);this.Ahb.L(A.iF.CD);this.MassUnit.G(ASo);this.MassUnit.A0(0x9);this.MassUnit.
R(A.z2(A.abg.AGm));this.MassUnit.L(A.iF.Text);this.Io.G(AD4);this.Io.A0(0x14);this.
Io.R(A.z2(A.abv.Ah2));this.Io.L(A.iF.Text);this.TT.G(ASp);this.TT.R(A.z2(A.abg.A5n
));this.TT.L(A.iF.Text);this.TT.W(true);this.Alq.G(ASq);this.Aat.G(ASr);this.Aat.
L(A.iF.AeH);this.Aat.W(false);this.X3.G(ASs);this.X3.L(A.iF.AeH);this.X3.BfA(true
);this.X3.W(false);this.Ob.AW(0x3F);this.Ob.G(Au3);this.Ob.An(false);this.Ob.W(false
);this.WR.G(ASt);this.WR.L(A.iF.Bg);this.J(this.Ahb,0);this.J(this.MassUnit,0);this.
J(this.Io,0);this.J(this.TT,0);this.J(this.Aat,0);this.J(this.X3,0);this.J(this.
Ob,0);this.J(this.WR,0);this.N.CA=[this,this.BoZ];this.N.Cg=[this,this.AUU];this.
N.Cl=[this,this.AUV];this.MassUnit.Y(A.zW(A.eV.Gg));this.Io.Y(A.zW(A.eV.Ab$));this.
TT.Y(A.zW(A.eV.Gg));this.Aat.XB(this.Alq);this.X3.XB(this.Alq);this.Hx=A._NewObject(
A.Device.Rating,0);this.Ob.NZ(A._GetAutoObject(A.Device.Helper).V);this.Ob.Aii(this.
Hx);this.WR.Ar(A.zW(A.abi.AMm));this.Init(aArg);},_Done:function(){this.__proto__=
C.Aw;this.Ahb._Done();this.MassUnit._Done();this.Io._Done();this.TT._Done();this.
Alq._Done();this.Aat._Done();this.X3._Done();this.Ob._Done();this.WR._Done();C.Aw.
_Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.Ahb._ReInit();
this.MassUnit._ReInit();this.Io._ReInit();this.TT._ReInit();this.Alq._ReInit();this.
Aat._ReInit();this.X3._ReInit();this.Ob._ReInit();this.WR._ReInit();this.MassUnit.
R(A.z2(A.abg.AGm));this.Io.R(A.z2(A.abv.Ah2));this.TT.R(A.z2(A.abg.A5n));this.MassUnit.
Y(A.zW(A.eV.Gg));this.Io.Y(A.zW(A.eV.Ab$));this.TT.Y(A.zW(A.eV.Gg));},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.Hx)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ahb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TT).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Alq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aat)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ob)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WR)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::WeighingScreen"};C.AQG={Mr:null,EF:null,K_:
null,G7:null,Bdr:function(H){var F;this.K_.B2.L(this.K_.T.AV);if(!!this.K_.Q)this.
K_.B2.R((A._GetAutoObject(A.Device.Converter).Nl((F=this.K_.Q,F[1].call(F[0])),2
,true)+Cv)+A._GetAutoObject(A.abk.Dv).Yx());},_Init:function(aArg){C.CG._Init.call(
this,aArg);C.APG._Init.call(this.Mr={I:this},0);C.ApA._Init.call(this.EF={I:this
},0);C.JQ._Init.call(this.K_={I:this},0);C.AIk._Init.call(this.G7={I:this},0);this.
__proto__=C.AQG;var B;this.Lf(A.z2(A.abg.Settings));this.F$.R(A.z2(A.abg.ApU));this.
Mr.G(ASu);this.Mr.Aj(true);this.EF.G(Au4);this.EF.Aj(true);this.EF.U(A.z2(A.abg.
PA));this.EF.Bk(true);this.EF.Hw(1000);this.EF.FP(99000);this.K_.G(AD5);this.K_.
Aj(true);this.K_.U(A.z2(A.abg.AZp));this.K_.Hw(50);this.K_.FP(2000);this.K_.AOp(
A._GetAutoObject(A.abk.Dv).Aws());this.Lg(this.Ac,-1);this.Lg(this.AD,-1);this.J(
this.Mr,0);this.J(this.EF,0);this.J(this.K_,0);this.Mr.Afl([B=this.Mr,B.Gy]);this.
Mr.Hb([this,this.Es,this.HU]);this.Mr.Aid(A.zW(A.abi.Edit));this.Mr.M$([B=this.Mr
,B.Avv]);this.Mr.Na(A.zW(A.abi.Alv));this.Mr.AF([B=this.G7,B.Cz,B.CB]);this.Mr.Dh(
this.G7);this.Mr.A3P([B=this.G7,B.AN9,B.AUS]);this.Mr.A3O([B=this.G7,B.AN8,B.AUR
]);this.EF.Hb([this,this.Es,this.HU]);this.EF.M$([B=this.Mr,B.Avv]);this.EF.Na(A.
zW(A.abi.Alv));this.EF.AF([B=this.G7,B.A2i,B.AOd]);this.K_.Hb([this,this.Es,this.
HU]);this.K_.M$([B=this.Mr,B.Avv]);this.K_.Na(A.zW(A.abi.Alv));this.K_.AF([B=this.
G7,B.A2h,B.AOc]);this.K_.A31([this,this.Bdr]);},_Done:function(){this.__proto__=
C.CG;this.Mr._Done();this.EF._Done();this.K_._Done();this.G7._Done();C.CG._Done.
call(this);},_ReInit:function(){C.CG._ReInit.call(this);this.Mr._ReInit();this.EF.
_ReInit();this.K_._ReInit();this.G7._ReInit();this.Lf(A.z2(A.abg.Settings));this.
F$.R(A.z2(A.abg.ApU));this.EF.U(A.z2(A.abg.PA));this.K_.U(A.z2(A.abg.AZp));},_Mark:
function(D){var B;C.CG._Mark.call(this,D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingSettingsScreen"
};C.APG={W_:null,Init:function(aArg){var B;A.za([this,this.AdJ],[B=A._GetAutoObject(
A.Device.Device),B.ANS,B.AUF],0);A.ow([this,this.AdJ],this);},AX5:function(H){A.
_GetAutoObject(A.Device.Device).A_(37,true,A.jm,0,[this,this.A6Q]);},AV9:function(
H){var F;if(this.A3===1){var BR=this.DH;this.DH=this.DH-A._GetAutoObject(A.abk.Dv
).Aws();if(this.DH<this.AjB)this.DH=this.AjB;if(this.Dy!==BR){if(!!this.Jn)(F=this.
Jn,F[2].call(F[0],this.DH));A.aat(this.Jn,0);}}if(this.A3===2){var BR=this.Dy;this.
Dy=this.Dy-A._GetAutoObject(A.abk.Dv).Aws();if(this.Dy<this.DH)this.Dy=this.DH;if(
this.Dy!==BR){if(!!this.Jm)(F=this.Jm,F[2].call(F[0],this.Dy));A.aat(this.Jm,0);
}}this.Dz(this);this.Al();},AWJ:function(H){var F;if(this.A3===1){var BR=this.DH;
this.DH=this.DH+A._GetAutoObject(A.abk.Dv).Aws();if(this.DH>this.Dy)this.DH=this.
Dy;if(this.DH!==BR){if(!!this.Jn)(F=this.Jn,F[2].call(F[0],this.DH));A.aat(this.
Jn,0);}}if(this.A3===2){var BR=this.Dy;this.Dy=this.Dy+A._GetAutoObject(A.abk.Dv
).Aws();if(this.Dy>this.Ajw)this.Dy=this.Ajw;if(this.Dy!==BR){if(!!this.Jm)(F=this.
Jm,F[2].call(F[0],this.Dy));A.aat(this.Jm,0);}}this.Dz(this);this.Al();},Iw:function(
H){this.PU.R(Au5+A._GetAutoObject(A.Device.Converter).Nl(this.DH,2,true));this.PT.
R(Au5+A._GetAutoObject(A.Device.Converter).Nl(this.Dy,2,true));this.SI.R(A._GetAutoObject(
A.abk.Dv).Yx());this.W_.R(this.SI.String);},AXG:function(H){var B;var As=(A.Device.
PopupContext.isPrototypeOf(H)?H:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).Apt(this);},AWB:function(Aqm){if(Aqm===1)return this.PU;else if(
Aqm===2)return this.PT;else return null;},_Init:function(aArg){C.Adf._Init.call(
this,aArg);A.abh.Text._Init.call(this.W_={I:this},0);this.__proto__=C.APG;this.U(
A.z2(A.abg.AyN));this.Ajw=2000;this.AjB=20;this.Background.G(KM);this.T.G(BI);this.
T.R(A.z2(A.abg.AyN)+A.z2(A.abg.Colon));this.T.A0(0x12);this.Ait.G(ASv);this.Aiu.
G(Au6);this.P5.G(AD6);this.PD.G(ASw);this.PT.G(ASx);this.PU.G(ASy);this.SI.G(ASz
);this.W_.G(ASA);this.W_.IZ(false);this.W_.A0(0x12);this.W_.L(0xFF000000);this.Lg(
this.Ht,-8);this.J(this.W_,0);this.T.Y(A.zW(A.eV.Au));this.T.Bz(A.zW(A.eV.AB));this.
W_.Y(A.zW(A.eV.AB));this.Init(aArg);},_Done:function(){this.__proto__=C.Adf;this.
W_._Done();C.Adf._Done.call(this);},_ReInit:function(){C.Adf._ReInit.call(this);
this.W_._ReInit();this.U(A.z2(A.abg.AyN));this.T.R(A.z2(A.abg.AyN)+A.z2(A.abg.Colon
));this.T.Y(A.zW(A.eV.Au));this.T.Bz(A.zW(A.eV.AB));this.W_.Y(A.zW(A.eV.AB));},_Mark:
function(D){var B;C.Adf._Mark.call(this,D);if((B=this.W_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemThresholdsWeightGain"};C.Ax4={M:Qg,A1h:
function(){},G:function(E){if(A.z9(this.M,E))return;this.M=E;this.A1h();},_Init:
function(aArg){A.Graphics.GY._Init.call(this,aArg);this.__proto__=C.Ax4;},_className:
"Application::AbstractPath"};C.Ag1={DJ:null,EA:null,Qe:null,Abz:null,Nk:null,Aby:
null,Arw:1,AYQ:0,A7G:false,Awm:true,C3:function(){this.A$z(this);},Init:function(
aArg){var B;this.A8(this.Abz);A.za([this,this.A$z],[B=this.Abz,B.A2p,B.A6o],0);}
,Ai:function(Ae){C.Aw.Ai.call(this,Ae);this.Aby.R(String.fromCharCode(A._GetAutoObject(
A.Device.Converter).BaX(this.Arw+this.AYQ)));if(this.Arw===1)this.Nk.R(A.z2(A.abg.
ArN));else this.Nk.R(A.z2(A.abg.Bav));},CE:function(H){if(this.Awm)this.Awm=false;
else if(this.DJ.A7S()===false)A.ow([this,this.AXm],this);else if(this.DJ.Awz())this.
DJ.AaV();A.y_([this,this.Ad4],A._GetAutoObject(A.Device.Device).Aq,0);},Fc:function(
H){A.zl([this,this.Ad4],A._GetAutoObject(A.Device.Device).Aq,0);},AXm:function(H
){this.A7G=true;A._GetAutoObject(C.A1).Fl();},A$z:function(H){var B;var A8h=(C.UC.
isPrototypeOf(B=this.Abz.A6)?B:null);if(!!A8h){var AVO=A._NewObject(A.Device.ActionToString
,0);this.Qe.R(AVO.KL(A8h.Action));}},H4:function(H){var Ce=(C.UC.isPrototypeOf(H
)?H:null);if(!Ce)return;this.DJ.R0(Ce.Action);this.BeK(this.Arw+1);},BsZ:function(
H){if(A._GetAutoObject(C.Py).AkO(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},BsO:function(H){
A._GetAutoObject(C.A1).BX(3);},BeK:function(E){if(this.Arw===E)return;this.Arw=E;
this.Al();},Ad4:function(H){if((this.A7G===false)&&(this.DJ.A7S()===false))A.ow([
this,this.AXm],this);},_Init:function(aArg){C.Aw._Init.call(this,aArg);A.abh.AH.
_Init.call(this.EA={I:this},0);C.CH._Init.call(this.Qe={I:this},0);C.AM6._Init.call(
this.Abz={I:this},0);C.CH._Init.call(this.Nk={I:this},0);A.abh.Text._Init.call(this.
Aby={I:this},0);this.__proto__=C.Ag1;this.Background.L(A.iF.CP);this.N.G(Vr);this.
N.W(true);this.Dt(C.If);this.EA.AW(0x3F);this.EA.G(FK);this.EA.L(A.iF.CD);this.Qe.
G(ASB);this.Qe.L(A.iF.Text);this.Abz.G(ASC);this.Nk.G(ASD);this.Nk.R(A.z2(A.abg.
ArN));this.Nk.L(A.iF.Text);this.Aby.G(ASE);this.Aby.R(ASF);this.Aby.L(A.iF.Text);
this.J(this.EA,0);this.J(this.Qe,0);this.J(this.Abz,0);this.J(this.Nk,0);this.J(
this.Aby,0);this.N.CA=[this,this.BsO];this.N.Cg=[this,this.BsZ];this.N.Cl=[this,
this.AXm];this.N.C8(A.zW(A.abi.ET));this.N.Cm(A.zW(A.abi.AhE));this.Qe.Y(A.zW(A.
eV.Gg));this.Qe.Bz(A.zW(A.eV.Au));this.Qe.C7(A.zW(A.eV.AB));this.Abz.AXE=[this,this.
H4];this.Nk.Y(A.zW(A.eV.Gg));this.Nk.Bz(A.zW(A.eV.Au));this.Nk.C7(A.zW(A.eV.AB));
this.Aby.Y(A.zW(A.eV.LN));this.DJ=A._GetAutoObject(C.DJ);this.Init(aArg);},_Done:
function(){this.__proto__=C.Aw;this.EA._Done();this.Qe._Done();this.Abz._Done();
this.Nk._Done();this.Aby._Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw.
_ReInit.call(this);this.EA._ReInit();this.Qe._ReInit();this.Abz._ReInit();this.Nk.
_ReInit();this.Aby._ReInit();this.Nk.R(A.z2(A.abg.ArN));this.Qe.Y(A.zW(A.eV.Gg));
this.Qe.Bz(A.zW(A.eV.Au));this.Qe.C7(A.zW(A.eV.AB));this.Nk.Y(A.zW(A.eV.Gg));this.
Nk.Bz(A.zW(A.eV.Au));this.Nk.C7(A.zW(A.eV.AB));this.C3();},_Mark:function(D){var
B;C.Aw._Mark.call(this,D);if((B=this.DJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qe)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Abz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aby)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionScreen"
};C.AM6={Iq:null,AXE:null,CF:null,Ac:null,AD:null,AYd:0,Init:function(aArg){A.y_([
this,this.AxS],this.Iq,0);A.y_([this,this.A$w],A._GetAutoObject(A.Device.Helper).
V,0);A.y_([this,this.Ars],A._GetAutoObject(A.Device.Helper).V,0);A.ow([this,this.
AxS],this);},A8:function(E){var AXg=this.A6;A.Core.O.A8.call(this,E);if(this.A6!==
AXg)A.aat([this,this.A2p,this.A6o],0);},DS:function(H){var B;var EQ=0;var X=this.
A6;switch(this.CF.CM){case 6:EQ=2;break;case 7:EQ=7;break;case 4:EQ=4;break;case
5:EQ=5;break;default:;}X=this.Q8(X,EQ,0x415);if((EQ===5)&&!X){var AG5=this.A6;while(
!X){AG5=this.Q8(AG5,2,0x415);if(!!AG5)X=this.Q8(AG5,EQ,0x415);else break;}}if(!!
X)this.A8(X);var G5=(C.UC.isPrototypeOf(B=this.A6)?B:null);if(!!G5)this.AYd=(C.UC.
isPrototypeOf(B=this.A6)?B:null).Action;else this.AYd=0;A.ow([this,this.TA],this
);},AV3:function(Jr){var Ep=A._GetAutoObject(C.DJ).A7Z(Jr,this.AXE);this.J(Ep,0);
},AvV:function(){var B;var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){var Aj_=
X;X=X.Af;if(((Aj_.S&0x400)===0x400))this.HW(Aj_);}},AxS:function(H){this.AvV();var
P;var DW=A._GetAutoObject(C.Py).Ahx();for(P=0;P<DW;P=P+1){var Yn=A._GetAutoObject(
C.Py).Acb(P);this.AV3(Yn);}A.ow([this,this.A$w],this);A.ow([this,this.BiW],this);
A.ow([this,this.Ars],this);},BiW:function(H){var B;var X=this.Ac.Af;while(!!X&&!((
X.S&0x200)===0x200)){if(((X.S&0x400)===0x400)){var Ab=(C.UC.isPrototypeOf(X)?X:null
);if(!!Ab&&(Ab.Action!==1))Ab.An(!!A._GetAutoObject(A.Device.Helper).V.Id);}X=X.
Af;}},Ars:function(H){var B;var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){
if(((X.S&0x400)===0x400)){var Ab=(C.UC.isPrototypeOf(X)?X:null);if(!!Ab){if(Ab.Action===
8)Ab.AOJ(A._GetAutoObject(A.Device.Helper).V.IsWatch);else if(Ab.Action===4)Ab.AOJ(
A._GetAutoObject(A.Device.Helper).V.IsAlarm);else if(Ab.Action===8192)Ab.AOJ(A._GetAutoObject(
A.Device.Helper).V.IsDry);}}X=X.Af;}},FX:function(H){var B;this.AD.N0((B=this.Ac.
Dd(0x1))[3]-B[1]);this.AD.N4((B=this.Ac.M)[3]-B[1]);this.AD.N2(-this.Ac.Br[1]);}
,A$w:function(H){var B;var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){if(((
X.S&0x400)===0x400)){var Ab=(C.UC.isPrototypeOf(X)?X:null);if(!!Ab){if(A._GetAutoObject(
C.Py).AkO(Ab.Action)&&A._GetAutoObject(C.DJ).AYP(A._GetAutoObject(A.Device.Helper
).V,Ab.Action)){Ab.An(true);Ab.W(true);if(this.AYd===Ab.Action)this.A8(Ab);}else{
Ab.An(false);Ab.W(false);}}}X=X.Af;}A.ow([this,this.TA],this);},TA:function(H){var
B;this.Ac.AbB(null,null);if(!!this.A6&&((this.A6.S&0x400)===0x400))this.Ac.IA(this.
A6,true,null,null);},Iu:function(H){A.ow([this,this.FX],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.Core.B0._Init.call(this.CF={I:this},0);A.Core.
Ac._Init.call(this.Ac={I:this},0);C.AD._Init.call(this.AD={I:this},0);this.__proto__=
C.AM6;this.G(ASG);this.CF.Filter=147;this.Ac.AW(0xB);this.Ac.G(ASH);this.Ac.Le(9
);this.AD.AW(0xA);this.AD.G(ASI);this.J(this.Ac,0);this.J(this.AD,0);this.CF.B1=[
this,this.DS];this.CF.D_=[this,this.DS];this.Ac.Eu=[this,this.Iu];this.Iq=A._GetAutoObject(
C.Py);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.CF._Done();
this.Ac._Done();this.AD._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.CF._ReInit();this.Ac._ReInit();this.AD._ReInit();
},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Iq)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AXE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.CF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.K1={D9:null,AH:null,Text:null,Am:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.D9._Init.call(this.D9={I:this},0);A.abh.AH._Init.call(this.AH={
I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.Am._Init.call(this.
Am={I:this},0);this.__proto__=C.K1;this.N.An(false);this.D9.G(BI);this.D9.An(false
);this.AH.G(FK);this.AH.L(A.iF.AeH);this.Text.G(BI);this.Text.R(ASJ);this.Text.L(
0xFF000000);this.Am.G(Qg);this.Am.L(A.iF.Text);this.J(this.D9,0);this.J(this.AH,
0);this.J(this.Text,0);this.J(this.Am,0);this.N.Cm(A.zW(A.abi.AhE));this.Text.Y(
A.zW(A.eV.AB));this.Am.Ar(A.zW(A.abi.Azv));},_Done:function(){this.__proto__=C.OverlayMenu;
this.D9._Done();this.AH._Done();this.Text._Done();this.Am._Done();C.OverlayMenu.
_Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.D9._ReInit(
);this.AH._ReInit();this.Text._ReInit();this.Am._ReInit();},_Mark:function(D){var
B;C.OverlayMenu._Mark.call(this,D);if((B=this.D9)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionOverlayMenu"
};C.AnC={Init:function(aArg){this.T.Y(A.zW(A.eV.AB));},JC:function(H){},Ai:function(
Ae){C.B_.Ai.call(this,Ae);var Gb=A.iF.AeH;var G1=A.iF.CP;if(this.GW){Gb=A.iF.Text;
G1=A.iF.Bg;}if(!this.Lq){this.Background.L(A.iF.CP);this.T.L(A.iF.CD);}else if(this.
QB){this.Background.L(A.iF.A6);this.T.L(A.iF.Bg);}else if(this.Ko){this.Background.
L(A.iF.A6);this.T.L(A.iF.Bg);}else{this.Background.L(Gb);this.T.L(G1);}this.GS.L(
A.iF.CP);this.Ht.L(A.iF.CP);},GD:function(H){var B;var Fw=this.De.ID;var Cj=(C.CH.
isPrototypeOf(B=this.De.B4)?B:null);if(!Cj)return;Cj.Y(A.zW(A.eV.AB));Cj.Bz(A.zW(
A.eV.Cq));Cj.L(this.T.AV);if(!!this.AC)Cj.R(this.AC.GP(Fw));else Cj.R(JU);Cj.G(A.
aaN(Cj.M,[this.De.Us,(B=this.De.M)[3]-B[1]]));},_Init:function(aArg){C.B_._Init.
call(this,aArg);this.__proto__=C.AnC;this.De.ABm(170);this.De.Nb(C.CH);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Arx={CN:null,Ai:function(
Ae){C.B9.Ai.call(this,Ae);var Gb=A.iF.AeH;var G1=A.iF.CP;if(this.GW){Gb=A.iF.Text;
G1=A.iF.Bg;}if(!this.Lq){this.Background.L(A.iF.CP);this.T.L(A.iF.CD);}else if(this.
QB){this.Background.L(A.iF.A6);this.T.L(A.iF.Bg);}else if(this.Ko){this.Background.
L(A.iF.A6);this.T.L(A.iF.Bg);}else{this.Background.L(Gb);this.T.L(G1);}},Init:function(
aArg){this.T.Text.A0(0x11);this.T.Text.HT(10);this.T.Y(A.zW(A.eV.AB));},_Init:function(
aArg){C.B9._Init.call(this,aArg);A.abh.Am._Init.call(this.CN={I:this},0);this.__proto__=
C.Arx;this.CN.G(ASK);this.CN.Cc(1);this.J(this.CN,0);this.CN.Ar(A.zW(A.abi.Aki));
this.Init(aArg);},_Done:function(){this.__proto__=C.B9;this.CN._Done();C.B9._Done.
call(this);},_ReInit:function(){C.B9._ReInit.call(this);this.CN._ReInit();},_Mark:
function(D){var B;C.B9._Mark.call(this,D);if((B=this.CN)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AHK={Ac:null,QE:null,Sa:null
,Sb:null,Sc:null,Abx:null,V0:null,TN:null,TO:null,YT:null,AD:null,Init:function(
aArg){this.A8(this.QE);},DS:function(H){C.K1.DS.call(this,H);this.TA(this);},JC:
function(H){this.A_T(this);},M_:function(){if(!this.CU){this.CU=A._NewObject(C.N
,0);this.CU.CA=[this,this.A_T];this.CU.Cg=null;this.CU.Cl=null;this.CU.Cb(A.jm);
this.CU.Cm(null);this.CU.C8(A.zW(A.abi.AhD));}return this.CU;},AX9:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.V0.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.V0.Q))A._GetAutoObject(C.AutoActions).J(this.V0.Q);if(!!this.TN.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.TN.Q))A._GetAutoObject(C.AutoActions
).J(this.TN.Q);if(!!this.TO.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.TO.
Q))A._GetAutoObject(C.AutoActions).J(this.TO.Q);if(!!this.YT.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.YT.Q))A._GetAutoObject(C.AutoActions).J(this.YT.Q);
A._GetAutoObject(C.AutoActions).Cr();},A_T:function(H){if(this.Br$()===true){this.
AX9();this.AjL(this);}else A._GetAutoObject(A.Device.Device).A_(27,true,A.jm,0,null
);},Br$:function(){return(!!this.V0.Da(this.V0.Q)||!!this.TN.Da(this.TN.Q))||!!this.
TO.Da(this.TO.Q);},FX:function(H){var B;this.AD.N0((B=this.Ac.Dd(0x1))[3]-B[1]);
this.AD.N4((B=this.Ac.M)[3]-B[1]);this.AD.N2(-this.Ac.Br[1]);},TA:function(H){var
B;this.Ac.AbB(null,null);if(!!this.A6&&((this.A6.S&0x400)===0x400))this.Ac.IA(this.
A6,true,null,null);},Bs$:function(H){var B;A._GetAutoObject(A.Device.Device).Apq(
this);this.V0.Aqs(this);this.TN.Aqs(this);this.TO.Aqs(this);this.YT.Aqs(this);},
Iu:function(H){A.ow([this,this.FX],this);},_Init:function(aArg){C.K1._Init.call(
this,aArg);A.Core.Ac._Init.call(this.Ac={I:this},0);C.AnC._Init.call(this.QE={I:
this},0);C.AnC._Init.call(this.Sa={I:this},0);C.AnC._Init.call(this.Sb={I:this},
0);C.AnC._Init.call(this.Sc={I:this},0);C.Ax6._Init.call(this.Abx={I:this},0);C.
AutoAction._Init.call(this.V0={I:this},0);C.AutoAction._Init.call(this.TN={I:this
},0);C.AutoAction._Init.call(this.TO={I:this},0);C.AutoAction._Init.call(this.YT={
I:this},0);C.AD._Init.call(this.AD={I:this},0);this.__proto__=C.AHK;var B;this.G(
Vq);this.Text.R(A.z2(A.abg.Ox));this.Ac.G(AD7);this.Ac.Le(1);this.QE.G(AfV);this.
QE.An(true);this.QE.Aj(true);this.QE.U(A._GetAutoObject(A.Device.Helper).Nh(A.z2(
A.abg.Ag0),Qi,AD8));this.Sa.G(Au0);this.Sa.An(true);this.Sa.Aj(true);this.Sa.U(A.
_GetAutoObject(A.Device.Helper).Nh(A.z2(A.abg.Ag0),Qi,AD9));this.Sb.G(AlX);this.
Sb.An(true);this.Sb.Aj(true);this.Sb.U(A._GetAutoObject(A.Device.Helper).Nh(A.z2(
A.abg.Ag0),Qi,AD_));this.Sc.G(AD5);this.Sc.An(true);this.Sc.Aj(true);this.Sc.U(A.
_GetAutoObject(A.Device.Helper).Nh(A.z2(A.abg.Ag0),Qi,AD$));this.Abx.G(AEa);this.
Abx.Aj(true);this.Abx.U(A.z2(A.abg.A4x));this.TN.Index=1;this.TO.Index=2;this.YT.
Index=3;this.AD.G(JT);this.J(this.Ac,0);this.J(this.QE,0);this.J(this.Sa,0);this.
J(this.Sb,0);this.J(this.Sc,0);this.J(this.Abx,0);this.J(this.AD,0);this.Ac.Eu=[
this,this.Iu];this.QE.AoV(A.zW(A.eV.LN));this.QE.AoW(A.zW(A.eV.LN));this.QE.AF([
B=this.V0,B.Cz,B.CB]);this.QE.Dh(this.V0);this.Sa.AoV(A.zW(A.eV.LN));this.Sa.AoW(
A.zW(A.eV.LN));this.Sa.AF([B=this.TN,B.Cz,B.CB]);this.Sa.Dh(this.TN);this.Sb.AoV(
A.zW(A.eV.LN));this.Sb.AoW(A.zW(A.eV.LN));this.Sb.AF([B=this.TO,B.Cz,B.CB]);this.
Sb.Dh(this.TO);this.Sc.AoV(A.zW(A.eV.LN));this.Sc.AoW(A.zW(A.eV.LN));this.Sc.AF([
B=this.YT,B.Cz,B.CB]);this.Sc.Dh(this.YT);this.Abx.AR=[this,this.Bs$];this.Init(
aArg);},_Done:function(){this.__proto__=C.K1;this.Ac._Done();this.QE._Done();this.
Sa._Done();this.Sb._Done();this.Sc._Done();this.Abx._Done();this.V0._Done();this.
TN._Done();this.TO._Done();this.YT._Done();this.AD._Done();C.K1._Done.call(this);
},_ReInit:function(){C.K1._ReInit.call(this);this.Ac._ReInit();this.QE._ReInit();
this.Sa._ReInit();this.Sb._ReInit();this.Sc._ReInit();this.Abx._ReInit();this.V0.
_ReInit();this.TN._ReInit();this.TO._ReInit();this.YT._ReInit();this.AD._ReInit(
);this.Text.R(A.z2(A.abg.Ox));this.QE.U(A._GetAutoObject(A.Device.Helper).Nh(A.z2(
A.abg.Ag0),Qi,AD8));this.Sa.U(A._GetAutoObject(A.Device.Helper).Nh(A.z2(A.abg.Ag0
),Qi,AD9));this.Sb.U(A._GetAutoObject(A.Device.Helper).Nh(A.z2(A.abg.Ag0),Qi,AD_
));this.Sc.U(A._GetAutoObject(A.Device.Helper).Nh(A.z2(A.abg.Ag0),Qi,AD$));this.
Abx.U(A.z2(A.abg.A4x));},_Mark:function(D){var B;C.K1._Mark.call(this,D);if((B=this.
Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.V0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.TO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionChainSettingsOverlayMenu"};C.Dj={Ci:A.aan(16,0,null),Du:function(
){return 16;},Da:function(aIndex){if(aIndex>=16)return-1;return this.Ci.Get(aIndex
);},DT:function(A2){var P=0;while(P<16){if(this.Ci.Get(P)===A2)return P;P=P+1;}return-
1;},HN:function(){var P=0;var max=-1;while(P<16){if(this.Ci.Get(P)>max)max=this.
Ci.Get(P);P=P+1;}return max;},_Init:function(aArg){C.AC._Init.call(this,aArg);(this.
Ci=[]).__proto__=C.Dj.Ci;this.__proto__=C.Dj;},_className:"Application::ArraySelection"
};C.AutoAction={Iq:null,AaV:null,ActionToString:null,Index:0,Init:function(aArg){
A.y_([this,this.Aqs],this.AaV,0);A.ow([this,this.Aqs],this);},Du:function(){return this.
Iq.Ahx();},Da:function(aIndex){if(aIndex>=this.Du())return-1;return this.Iq.Acb(
aIndex);},GP:function(aIndex){return this.ActionToString.Ca(this.Da(aIndex));},DT:
function(A2){var P=0;while(P<this.Du()){if(this.Iq.Acb(P)===A2)return P;P=P+1;}return-
1;},HN:function(){var P=0;var max=-1;while(P<this.Du()){if(this.Iq.Acb(P)>max)max=
this.Iq.Acb(P);P=P+1;}return max;},Aqs:function(H){this.Q=this.AaV.Acb(this.Index
);A.aat([this,this.Cz,this.CB],0);},_Init:function(aArg){C.AC._Init.call(this,aArg
);A.Device.ActionToString._Init.call(this.ActionToString={I:this},0);this.__proto__=
C.AutoAction;this.Iq=A._GetAutoObject(C.Ayl);this.AaV=A._GetAutoObject(C.AutoActions
);this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.ActionToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.ActionToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Iq)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AaV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoAction"
};C.AHQ={Aqq:0,Init:function(aArg){var B;A.za([this,this.A9y],[B=A._GetAutoObject(
A.Device.Device),B.A18,B.A6b],0);A.za([this,this.A9u],[B=A._GetAutoObject(A.Device.
Device),B.ANG,B.AUA],0);A.ow([this,this.A9y],this);A.ow([this,this.A9u],this);},
Clear:function(){C.AbA.Clear.call(this);this.Aqq=0;},Cr:function(){A._GetAutoObject(
A.Device.Device).AoJ(this.Aqq);A._GetAutoObject(A.Device.Device).AoK(this.toString(
));},A9y:function(H){this.Aqq=A._GetAutoObject(A.Device.Device).Py;A.vv(this,0);
},A9u:function(H){this.Fo(A._GetAutoObject(A.Device.Device).Ary);A.vv(this,0);},
AkO:function(Jr){if((this.Aqq&(((B=Jr)<0)?B+0x100000000:B))===(((B=Jr)<0)?B+0x100000000:
B))return true;return false;},BhB:function(Jr){this.Aqq=this.Aqq|(((B=Jr)<0)?B+0x100000000:
B);},_Init:function(aArg){C.AbA._Init.call(this,aArg);this.__proto__=C.AHQ;this.
Init(aArg);},_className:"Application::ActiveActionsClass"};C.Py={_Init:function(
){C.AHQ._Init.call(this,0);},_variants:function(){return this;},_this:null};C.AHR={
TQ:null,AD:null,Ac:null,UE:null,C3:function(){this.AGq(this);},Init:function(aArg
){A.y_([this,this.AGq],this.TQ,0);A.ow([this,this.AGq],this);},DS:function(H){C.
K1.DS.call(this,H);this.TA(this);},M_:function(){if(!this.CU){this.CU=A._NewObject(
C.N,0);this.CU.CA=[this,this.EY];this.CU.Cg=[this,this.BsI];this.CU.Cl=[this,this.
Btm];this.CU.Db(A.zW(A.abi.AsE));this.CU.Cm(A.zW(A.abi.Asy));this.CU.C8(A.zW(A.abi.
AhD));}return this.CU;},EY:function(H){if(this.Bq5()>0){this.AX9(false);this.AjL(
this);}else A._GetAutoObject(A.Device.Device).A_(28,true,A.jm,0,null);},AGq:function(
H){this.AvV();var P;for(P=0;P<this.TQ.Ahx();P=P+1){var Yn=A._GetAutoObject(C.Py).
Acb(P);this.Bqq(Yn);}this.J(this.UE,0);A.z3([this,this.TA],this);},FX:function(H
){var B;this.AD.N0((B=this.Ac.Dd(0x1))[3]-B[1]);this.AD.N4((B=this.Ac.M)[3]-B[1]
);this.AD.N2(-this.Ac.Br[1]);},TA:function(H){var B;this.Ac.AbB(null,null);if(!!
this.A6&&((this.A6.S&0x400)===0x400))this.Ac.IA(this.A6,true,null,null);},Bqq:function(
HB){var AVO=A._NewObject(A.Device.ActionToString,0);var Ab=A._NewObject(C.Aeo,0);
Ab.U(AVO.Ca(HB));Ab.Aj(true);Ab.Action=HB;Ab.BfW(this.TQ.AkO(HB));this.J(Ab,0);this.
SZ(Ab);},AvV:function(){var B;var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)
){var Aj_=X;X=X.Af;if(((Aj_.S&0x400)===0x400))this.HW(Aj_);}},AX9:function(Bp7){
var B;this.TQ.Clear();var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){if(((X.
S&0x400)===0x400)&&!(X===this.UE)){var Ab=(C.Aeo.isPrototypeOf(X)?X:null);if(!!Ab
){this.TQ.J(Ab.Action);if(Ab.A2t()||Bp7)this.TQ.BhB(Ab.Action);}else A.aa8("%s",
AEb);}X=X.Af;}this.TQ.Cr();},Bq5:function(){var B;var AYe=0;var X=this.Ac.Af;while(
!!X&&!((X.S&0x200)===0x200)){if(((X.S&0x400)===0x400)&&!(X===this.UE)){var Ab=(C.
Aeo.isPrototypeOf(X)?X:null);if(!!Ab){if(Ab.A2t())AYe=AYe+1;}else A.aa8("%s",AEb
);}X=X.Af;}return AYe;},BsI:function(H){var B;var Ab=(C.Aeo.isPrototypeOf(B=this.
A6)?B:null);if(!!Ab){var A9n=(C.Aeo.isPrototypeOf(B=Ab.Af)?B:null);if(!!A9n){this.
Alw(A9n,Ab);A.ow([this,this.TA],this);}}},Btm:function(H){var B;var Ab=(C.Aeo.isPrototypeOf(
B=this.A6)?B:null);if(!!Ab){var A_C=(C.Aeo.isPrototypeOf(B=Ab.AG)?B:null);if(!!A_C
){this.Alw(Ab,A_C);A.ow([this,this.TA],this);}}},Ay0:function(H){var B;A._GetAutoObject(
A.Device.Device).App(this);A.ow([this,this.AGq],this);},Iu:function(H){A.ow([this
,this.FX],this);},_Init:function(aArg){C.K1._Init.call(this,aArg);C.AD._Init.call(
this.AD={I:this},0);A.Core.Ac._Init.call(this.Ac={I:this},0);C.Ax6._Init.call(this.
UE={I:this},0);this.__proto__=C.AHR;this.G(Vq);this.Text.R(A.z2(A.abg.AAq));this.
AD.G(JT);this.Ac.G(AD7);this.Ac.Le(1);this.UE.G(ASL);this.UE.Aj(true);this.UE.U(
A.z2(A.abg.Ay0));this.J(this.AD,0);this.J(this.Ac,0);this.J(this.UE,0);this.Ac.Eu=[
this,this.Iu];this.UE.AR=[this,this.Ay0];this.TQ=A._GetAutoObject(C.Py);this.Init(
aArg);},_Done:function(){this.__proto__=C.K1;this.AD._Done();this.Ac._Done();this.
UE._Done();C.K1._Done.call(this);},_ReInit:function(){C.K1._ReInit.call(this);this.
AD._ReInit();this.Ac._ReInit();this.UE._ReInit();this.Text.R(A.z2(A.abg.AAq));this.
UE.U(A.z2(A.abg.Ay0));this.C3();},_Mark:function(D){var B;C.K1._Mark.call(this,D
);if((B=this.TQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UE)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"};C.Aeo={
Action:64,Init:function(aArg){this.T.Y(A.zW(A.eV.AB));this.T.Text.A0(0x11);this.
T.Text.HT(10);},Bh:function(aSize){C.AcC.Bh.call(this,aSize);this.T.G(A.aaQ(this.
T.M,this.Mj.M[0]));},Ai:function(Ae){var B;C.AcC.Ai.call(this,Ae);var FT=((Ae&0x10
)===0x10);var Fv=((Ae&0x20)===0x20);var Fu=this.Bi.Bw;var Gb=A.iF.AeH;var G1=A.iF.
Bg;if(this.GW){Gb=A.iF.Bg;G1=A.iF.Text;}if(!FT){this.Background.L(Gb);this.T.L(A.
iF.CD);}else if(Fu){this.Background.L(A.iF.A6);this.T.L(A.iF.Bg);}else if(Fv){this.
Background.L(A.iF.A6);this.T.L(A.iF.Bg);}else{this.Background.L(Gb);this.T.L(G1);
}this.Lq=FT;this.Ko=Fv;this.QB=Fu;},JC:function(H){this.AXM(this);},AXM:function(
H){this.AA6(!this.Akm);},BfW:function(E){this.AA6(E);},A2t:function(){return this.
Akm;},_Init:function(aArg){C.AcC._Init.call(this,aArg);this.__proto__=C.Aeo;this.
Mj.G(ASM);this.Init(aArg);},_className:"Application::ActionsItemCheckBox"};C.AbA={
DW:0,Iq:A.aan(17,0,null),Acb:function(KR){return this.Iq.Get(KR);},Ahx:function(
){return this.DW;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.Iq.Set(P,0);this.
DW=0;},J:function(Jr){if(this.DW>=17)A.aa8("%s",ASN);else{this.Iq.Set(this.DW,Jr
);this.DW=this.DW+1;}},Cr:function(){},Fo:function(AaJ){var AFk=AaJ.indexOf(String.
fromCharCode(0x2C),0);var AV4=A.jm;var P=0;this.DW=0;while(P<17)if(AaJ===A.jm){this.
Iq.Set(P,0);P++;}else{if(AFk===-1){AV4=AaJ;AaJ=A.jm;}else{AV4=A.aaX(AaJ,AFk);AaJ=
A.aa3(AaJ,0,AFk+1);}var Yn=A.aa1(AV4,0,10)|0;if(this.A1j(Yn)){this.Iq.Set(this.DW
,Yn);this.DW=this.DW+1;P++;}AFk=AaJ.indexOf(String.fromCharCode(0x2C),0);}if(AaJ
!==A.jm)A.aa8("%s",ASO);},toString:function(){var AW9=(((B=this.Iq.Get(0))<0)?B+
0x100000000:B).toFixed();var P;for(P=1;P<this.DW;P=P+1)AW9=(AW9+ASP)+(((B=this.Iq.
Get(P))<0)?B+0x100000000:B).toFixed();return AW9;},Contains:function(Jr){var P;for(
P=0;P<this.DW;P=P+1)if(this.Iq.Get(P)===Jr)return true;return false;},A1j:function(
Jr){return true;},_Init:function(aArg){(this.Iq=[]).__proto__=C.AbA.Iq;this.__proto__=
C.AbA;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ActionsList"};C.AIv={Init:function(
aArg){var B;A.za([this,this.A9F],[B=A._GetAutoObject(A.Device.Device),B.A2g,B.A6i
],0);A.ow([this,this.A9F],this);},Cr:function(){A._GetAutoObject(A.Device.Device
).Z0(this.toString());},A9F:function(H){this.Fo(A._GetAutoObject(A.Device.Device
).AutoActions);A.vv(this,0);},_Init:function(aArg){C.AbA._Init.call(this,aArg);this.
__proto__=C.AIv;this.Init(aArg);},_className:"Application::AutoActionsClass"};C.
AutoActions={_Init:function(){C.AIv._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.UC={TP:null,JO:null,A1g:A.jm,Action:0,AYR:false,A4k:false,A41:false
,Bh:function(aSize){C.E3.Bh.call(this,aSize);this.PZ.G(this.LM.M);this.NT.G(this.
PZ.M);},Ai:function(Ae){C.E3.Ai.call(this,Ae);if(!this.Lq){this.JO.Sy.L(A.iF.AkN
);this.JO.PG.W(true);this.JO.PG.L(A.iF.AMy);}else if(this.QB){this.JO.Sy.L(A.iF.
Bg);this.JO.PG.W(false);}else if(this.Ko){this.JO.Sy.L(A.iF.Bg);this.JO.PG.W(false
);}else{this.JO.Sy.L(A.iF.Text);this.JO.PG.W(true);this.JO.PG.L(A.iF.CP);}},BeJ:
function(E){if(this.Action===E)return;this.Action=E;},BfV:function(E){if(this.A1g===
E)return;this.A1g=E;this.TP.Text.R(E);},AOJ:function(E){if(this.A41===E)return;this.
A41=E;this.JO.Bgy(!this.JO.APU);},ABD:function(E){if(this.A4k===E)return;this.A4k=
E;this.JO.W(!this.JO.Fe());},A3b:function(E){if(this.AYR===E)return;this.AYR=E;this.
TP.W(E);},_Init:function(aArg){C.E3._Init.call(this,aArg);C.TP._Init.call(this.TP={
I:this},0);C.JO._Init.call(this.JO={I:this},0);this.__proto__=C.UC;this.G(ASQ);this.
Background.G(ASR);this.Il.An(false);this.Il.W(false);this.TP.G(ASS);this.TP.W(false
);this.JO.G(AST);this.JO.W(false);this.J(this.TP,0);this.J(this.JO,0);this.LM.Ar(
A.zW(A.abi.AIX));},_Done:function(){this.__proto__=C.E3;this.TP._Done();this.JO.
_Done();C.E3._Done.call(this);},_ReInit:function(){C.E3._ReInit.call(this);this.
TP._ReInit();this.JO._ReInit();},_Mark:function(D){var B;C.E3._Mark.call(this,D);
if((B=this.TP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JO)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MenuItemActionScreen"};C.TP={AH:null,Text:null
,CR:null,Init:function(aArg){this.Text.G(this.M);this.CR.G(this.M);this.AH.G(this.
M);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.
AH={I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.CR._Init.call(this.
CR={I:this},0);this.__proto__=C.TP;this.AH.G(ASU);this.AH.L(A.iF.Bcc);this.G(ASV
);this.Text.G(ASW);this.Text.L(A.iF.Text);this.CR.G(ASX);this.CR.N5(1);this.CR.L(
A.iF.Text);this.J(this.AH,0);this.J(this.Text,0);this.J(this.CR,0);this.Text.Y(A.
zW(A.eV.AB));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.AH.
_Done();this.Text._Done();this.CR._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.AH._ReInit();this.Text._ReInit();this.CR._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AH)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.JO={PG:
null,Sy:null,APU:false,Bgy:function(E){if(this.APU===E)return;this.APU=E;if(E){this.
Sy.Ar(A.zW(A.abi.AyS));this.PG.Ar(A.zW(A.abi.AyS));}else{this.Sy.Ar(A.zW(A.abi.AnS
));this.PG.Ar(A.zW(A.abi.AnS));}},_Init:function(aArg){A.Core.O._Init.call(this,
aArg);A.abh.Am._Init.call(this.PG={I:this},0);A.abh.Am._Init.call(this.Sy={I:this
},0);this.__proto__=C.JO;this.G(Au7);this.PG.G(Au7);this.PG.Cc(1);this.Sy.G(Au7);
this.Sy.Cc(0);this.J(this.PG,0);this.J(this.Sy,0);this.PG.Ar(A.zW(A.abi.AnS));this.
Sy.Ar(A.zW(A.abi.AnS));},_Done:function(){this.__proto__=A.Core.O;this.PG._Done(
);this.Sy._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.PG._ReInit();this.Sy._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sy).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ANn={
Qp:null,BS:null,C1:null,Dl:null,JK:null,Xs:10,Aoa:0,AAz:0,ANB:0,AvK:false,K9:false
,A7Q:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).Aq.Mp(
))A._GetAutoObject(A.Device.Device).A_(41,true,A._GetAutoObject(A.Device.Device).
Aq.Ie().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).V.GC();A._GetAutoObject(
A.Device.Helper).Ax$(A._GetAutoObject(A.Device.Helper).V);A.za([this,this.Aw3],this.
GU.Q,0);A.za([this,this.BsV],this.C1.Q,0);A.za([this,this.AxQ],this.Dl.Q,0);A.za([
this,this.AxQ],this.Dl.G_.Q,0);A.za([this,this.AxQ],[this,this.ANY,this.ABB],0);
A.za([this,this.Iw],[B=A._GetAutoObject(A.Device.Device),B.A25,B.A6J],0);A.za([this
,this.A9_],this.BS.Q,0);A.ow([this,this.Aw3],this);A.ow([this,this.Iw],this);A.ow([
this,this.AxQ],this);A.ow([this,this.A9_],this);},CE:function(H){if(!this.AvK){this.
AvK=true;A.ow([this,this.Vs],this);}else C.Hm.CE.call(this,H);},Ad9:function(H){
this.ANB=this.Xs;this.A7Y(this);},EY:function(H){A._GetAutoObject(A.Device.Helper
).V.GZ();A._GetAutoObject(C.A1).Fl();},Arf:function(){this.N.Cb(A.jm);this.N.Db(
A.zW(A.abi.AzV));this.N.Cl=[this,this.Avt];},AwZ:function(H){A._GetAutoObject(C.
A1).BX(63);},ABB:function(E){if(this.Xs===E)return;this.Xs=E;A.aat([this,this.ANY
,this.ABB],0);},A7Y:function(H){var F;if(!this.Xs||(this.A7Q===true)){A._GetAutoObject(
A.Device.Device).A_(24,false,Cv,0,null);if(this.AAz===1)A._GetAutoObject(A.Device.
Device).A_(26,true,A.jm,2000,null);else A._GetAutoObject(A.Device.Device).A_(23,
true,this.AAz.toFixed(),2000,null);this.EY(this);return;}this.Qp.GC();this.Qp.DO(
A._GetAutoObject(A.Device.Helper).V.AnimalType);this.Qp.O1(A._GetAutoObject(A.Device.
Helper).V.Breed);this.Qp.AcO(A._GetAutoObject(A.Device.Helper).V.DateOfBirth);this.
Qp.J7(A._GetAutoObject(A.Device.Helper).V.Gender);this.Qp.O2(A._GetAutoObject(A.
Device.Helper).V.NaisId);this.Qp.Nc(A._GetAutoObject(A.Device.Helper).V.TransponderId
);this.Qp.XE(A._GetAutoObject(A.Device.Helper).V.VisualId);var AvJ=A._GetAutoObject(
A.Device.Helper).A7R(this.Qp,(F=this.Dl.Hn.GL,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).Aq);if(!AvJ)this.Anp();else{A._GetAutoObject(A.Device.Helper).AWE(
this.Qp,AvJ,(F=this.Dl.Hn.GL,F[1].call(F[0])),this.Xs-1,[this,this.Aw0]);A._GetAutoObject(
A.Device.Device).A_(24,false,Cv,0,null);}},Iw:function(H){var B;if(A._GetAutoObject(
A.Device.Helper).AkP())this.EF.W(true);else this.EF.W(false);if(this.K9){this.C1.
W(false);this.BS.U(A.z2(A.abg.A0n));this.BS.AA8(A.zW(A.abi.Ac4));}else{this.C1.W(
true);this.BS.U(A.z2(A.abg.AiK));this.BS.AA8(null);}if((this.Ac.BbM(this.A6)>=0)&&(((
this.A6.S&0x1)===0x1)===false))this.Pw(this.Ac.Zp(this.A6,0x1));this.Al();},AOn:
function(E){if(this.Aoa===E)return;this.Aoa=E;A.aat([this,this.A2s,this.AOn],0);
},AxQ:function(H){var F;var AF4=(F=this.Dl.Q,F[1].call(F[0]));var AwM=-1;switch((
F=this.Dl.Hn.GL,F[1].call(F[0]))){case 0:AwM=AF4+((F=A._GetAutoObject(A.Device.Helper
).A8s(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).V.Gender),F[1].call(F[0]))*(this.Xs-1));break;case 1:AwM=(AF4+this.
Xs)-1;break;case 3:case 2:case 5:case 4:switch(this.Dl.G_.AC.Q){case 0:AwM=(AF4+
this.Xs)-1;break;case 1:AwM=(AF4-this.Xs)+1;break;default:throw new Error(ASY+this.
Dl.G_.AC.Q.toFixed());}break;default:throw new Error(ASZ+this.Dl.G_.AC.Q.toFixed(
));}this.AOn(AwM);},BsV:function(H){A.ow([this,this.Iw],this);A.ow([this,this.Aq1
],this);},Aw3:function(H){A._GetAutoObject(A.Device.Helper).AQl(A._GetAutoObject(
A.Device.Helper).V,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
K9);A.ow([this,this.AxQ],this);},Aw0:function(H){var F;var As=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!As)return;switch(As.Id){case 22:case 21:case 48:if((
As.Id===48)&&(As.PopupState===7))this.AXa();else switch((F=this.Dl.Hn.GL,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.Pw(this.Dl);break;case 0:this.Pw(this.C1
);break;case 1:this.Pw(this.BS);break;default:throw new Error(Au8+(F=this.Dl.Hn.
GL,F[1].call(F[0])).toFixed());}break;case 25:this.Pw(this.BS);break;case 47:if(
As.PopupState===7)this.AXa();else this.Pw(this.BS);break;case 43:this.Pw(this.C1
);break;case 42:{this.Pw(this.BS);if(As.PopupState===7)A.ow([this,this.Vs],this);
}break;case 41:break;default:A.aa8("%s%e",Au9,As.Id);}},Anp:function(){this.Qp.Cr(
A._GetAutoObject(A.Device.Device).Aq);this.AAz=this.AAz+1;if(A._GetAutoObject(A.
Device.Helper).AkP()){if(A._GetAutoObject(A.Device.Device).Bt.Mp()){A._GetAutoObject(
A.Device.Device).A_(24,false,Yg,0,null);A._GetAutoObject(A.Device.Device).A_(50,
true,A._GetAutoObject(A.Device.Device).Bt.Ie().toFixed(),0,null);}else{var Oi=A.
_GetAutoObject(A.Device.Device).Aq.LL(0,this.Qp.Id);A._GetAutoObject(A.Device.Device
).UV(Oi);var B$=A._NewObject(A.Device.Rating,0);B$.GC();B$.OnSetAnimalId(this.Qp.
Id);B$.OnSetBodyWeight(this.PA);B$.OnSetTimestamp(this.Qp.DateOfBirth);B$.Cr(A._GetAutoObject(
A.Device.Device).Bt);}}this.AXa();},AXa:function(){var B;var F,C$;if(!!(F=this.BS.
Q,F[1].call(F[0]))){(F=this.BS.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.K9)(
C$=this.C1.Q,C$[2].call(C$[0],(F=this.BS.Q,F[1].call(F[0]))));}if(!this.K9)(C$=this.
C1.Q,C$[2].call(C$[0],A._GetAutoObject(A.Device.Helper).A5h(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.C1.Q,F[1].call(
F[0])),this.C1.Ahu(),this.C1.Ahy())));var Ir=null;switch((F=this.Dl.Hn.GL,F[1].call(
F[0]))){case 3:Ir=[B=A._GetAutoObject(A.Device.Device),B.As2,B.Avm];break;case 2:
Ir=[B=A._GetAutoObject(A.Device.Device),B.As3,B.Avn];break;case 4:case 5:Ir=[B=A.
_GetAutoObject(A.Device.Device),B.Ak_,B.Al8];break;default:;}if(!!Ir){switch((F=
this.Dl.Jg.T9,F[1].call(F[0]))){case 1:Ir[2].call(Ir[0],A._GetAutoObject(A.Device.
Helper).V.VisualId-1);break;case 0:Ir[2].call(Ir[0],A._GetAutoObject(A.Device.Helper
).V.VisualId+1);break;default:;}(F=this.Dl.Q,F[2].call(F[0],Ir[1].call(Ir[0])));
}var VV=100-((this.Xs/this.ANB)*100);A._GetAutoObject(A.Device.Device).A_(24,true
,(((this.ANB.toFixed()+Ap9)+(VV|0).toFixed())+Ap9)+(F=this.Dl.Q,F[1].call(F[0])).
toFixed(),0,[this,this.Bs6]);this.ABB(this.Xs-1);A.z3([this,this.A7Y],null);},Bs6:
function(H){var As=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!As&&(As.
PopupState===5))this.A7Q=true;},Am5:function(H){var F;C.Hm.Am5.call(this,H);(F=this.
EF.Q,F[2].call(F[0],this.EF.AlC));switch(this.Df.AC.Q){case 0:{this.JK.N3(A.z2(A.
abg.AIT));this.JK.Nd(A.z2(A.abg.AIU));}break;case 1:{this.JK.N3(A.z2(A.abg.BaF));
this.JK.Nd(A.z2(A.abg.BaG));}break;case 2:{this.JK.N3(A.z2(A.abg.Bcy));this.JK.Nd(
A.z2(A.abg.Bcz));}break;default:throw new Error(Ap5);}},AcR:function(E){if(this.
K9===E)return;this.K9=E;A.aat([this,this.As4,this.AcR],0);},Aq1:function(H){var F
,C$,RR;this.AcR(((F=this.BS.Q,F[1].call(F[0]))===(C$=this.C1.Q,C$[1].call(C$[0])
))&&!!(RR=this.BS.Q,RR[1].call(RR[0])));A.ow([this,this.Iw],this);},A9_:function(
H){A.ow([this,this.Aq1],this);},ANY:function(){return this.Xs;},A2s:function(){return this.
Aoa;},As4:function(){return this.K9;},_Init:function(aArg){C.Hm._Init.call(this,
aArg);C.AsR._Init.call(this.BS={I:this},0);C.AfG._Init.call(this.C1={I:this},0);
C.ACD._Init.call(this.Dl={I:this},0);C.API._Init.call(this.JK={I:this},0);this.__proto__=
C.ANn;var B;this.Dt(C.Azx);this.BS.G(AlX);this.BS.Aj(true);this.BS.U(A.z2(A.abg.
AiK));this.BS.AoR(((A.z2(A.abg.Ok)+A.z2(A.abg.Colon))+Cv)+A.z2(A.abg.Apw));this.
BS.AoS(A.z2(A.abg.Ah3));this.C1.G(AEc);this.C1.Aj(true);this.C1.U(A.z2(A.abg.ZU)
);this.C1.AtK(false);this.Dl.G(AS0);this.Dl.Aj(true);this.Dl.U(A.z2(A.abg.A05));
this.Dl.Bu(0);this.JK.G(AS1);this.JK.Aj(true);this.JK.U(A.z2(A.abg.A10));this.JK.
Hw(1);this.JK.FP(500);this.JK.Nd(A.z2(A.abg.AIU));this.JK.N3(A.z2(A.abg.AIT));this.
JK.A3w(A.z2(A.abg.Aoa)+A.z2(A.abg.Colon));this.J(this.BS,0);this.J(this.C1,0);this.
J(this.Dl,0);this.J(this.JK,0);this.Qp=A._NewObject(A.Device.Animal,0);this.BS.AR=[
this,this.Vs];this.BS.M$([this,this.Vs]);this.BS.Na(A.zW(A.abi.Ac4));this.BS.AF([
B=A._GetAutoObject(A.Device.Helper).V,B.Ah7,B.Nc]);this.BS.P2([B=A._GetAutoObject(
A.Device.Device),B.Ah5,B.Ai2]);this.BS.Rq([B=A._GetAutoObject(A.Device.Device),B.
Ah6,B.Ai3]);this.BS.SS([B=A._GetAutoObject(A.Device.Device),B.Ak8,B.Al7]);this.BS.
AcR([this,this.As4,this.AcR]);this.C1.Hb([this,this.Es,this.HU]);this.C1.M$([this
,this.Vs]);this.C1.Na(A.zW(A.abi.Ac4));this.C1.UN([B=this.Gender.Animal,B.Xu,B.J7
]);this.C1.P2([B=A._GetAutoObject(A.Device.Device),B.Ah5,B.Ai2]);this.C1.Rq([B=A.
_GetAutoObject(A.Device.Device),B.Ah6,B.Ai3]);this.C1.SS([B=A._GetAutoObject(A.Device.
Device),B.Ak8,B.Al7]);this.C1.AF([B=A._GetAutoObject(A.Device.Helper).V,B.AoD,B.
O2]);this.C1.Alb([B=this.AnimalType.Animal,B.O0,B.DO]);this.Dl.Hb([this,this.Es,
this.HU]);this.Dl.M$([B=this.Dl,B.Gy]);this.Dl.Na(A.zW(A.abi.Edit));this.Dl.AF([
B=A._GetAutoObject(A.Device.Helper).V,B.AoH,B.XE]);this.Dl.A3c(A._GetAutoObject(
A.Device.Helper).V);this.JK.AF([this,this.ANY,this.ABB]);this.JK.Bfh([this,this.
A2s,this.AOn]);this.Init(aArg);},_Done:function(){this.__proto__=C.Hm;this.BS._Done(
);this.C1._Done();this.Dl._Done();this.JK._Done();C.Hm._Done.call(this);},_ReInit:
function(){C.Hm._ReInit.call(this);this.BS._ReInit();this.C1._ReInit();this.Dl._ReInit(
);this.JK._ReInit();this.BS.U(A.z2(A.abg.AiK));this.BS.AoR(((A.z2(A.abg.Ok)+A.z2(
A.abg.Colon))+Cv)+A.z2(A.abg.Apw));this.BS.AoS(A.z2(A.abg.Ah3));this.C1.U(A.z2(A.
abg.ZU));this.Dl.U(A.z2(A.abg.A05));this.JK.U(A.z2(A.abg.A10));this.JK.Nd(A.z2(A.
abg.AIU));this.JK.N3(A.z2(A.abg.AIT));this.JK.A3w(A.z2(A.abg.Aoa)+A.z2(A.abg.Colon
));},_Mark:function(D){var B;C.Hm._Mark.call(this,D);if((B=this.Qp)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C1
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.APd={B_:null,RatingMode:null,M_:function(){if(!this.CU){this.CU=A._NewObject(
C.N,0);this.CU.Cl=null;this.CU.Cg=null;this.CU.CA=[this,this.AjL];this.CU.Cb(A.jm
);this.CU.Cm(null);this.CU.C8(A.zW(A.abi.AhD));}return this.CU;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.B_._Init.call(this.B_={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.APd;var B;this.
G(Vq);this.B_.G(Au4);this.B_.U(A.z2(A.abg.A4_));this.J(this.B_,0);this.B_.AF([B=
this.RatingMode,B.Cz,B.CB]);this.B_.Dh(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.B_._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.B_._ReInit(
);this.RatingMode._ReInit();this.B_.U(A.z2(A.abg.A4_));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.B_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.za([this,this.
A_H],[B=A._GetAutoObject(A.Device.Device),B.AN2,B.AUM],0);A.ow([this,this.A_H],this
);},Du:function(){return 2;},GP:function(aIndex){return this.RatingModeToString.
Ca(this.Da(aIndex));},AF:function(E){C.Dj.AF.call(this,E);A._GetAutoObject(A.Device.
Device).AtJ(E);},A_H:function(H){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.aat([this,this.Cz,this.CB],0);},_Init:function(aArg){C.Dj._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Ci.Set(0,0);this.Ci.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Dj;this.RatingModeToString._Done();C.Dj._Done.call(this
);},_ReInit:function(){C.Dj._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Dj._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.AJb={UY:
function(H){C.Akf.UY.call(this,H);if(A._GetAutoObject(A.Device.Helper).V.An9()){
A._GetAutoObject(A.Device.Helper).V.Aif(false);A._GetAutoObject(A.Device.Helper).
V.Cr(A._GetAutoObject(A.Device.Device).Aq);}},_Init:function(aArg){C.Akf._Init.call(
this,aArg);this.__proto__=C.AJb;},_className:"Application::ControlMeasureTemperatureScreen"
};C.GM={Dk:A.jm,U:function(E){if(this.Dk===E)return;this.Dk=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.GM;},_className:"Application::BaseItem"
};C.AQz={B_:null,WeightRecordingMode:null,M_:function(){if(!this.CU){this.CU=A._NewObject(
C.N,0);this.CU.Cl=null;this.CU.Cg=null;this.CU.CA=[this,this.AjL];this.CU.Cb(A.jm
);this.CU.Cm(null);this.CU.C8(A.zW(A.abi.AhD));}return this.CU;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.B_._Init.call(this.B_={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AQz;var B;this.G(Vq);this.B_.G(Au4);this.B_.U(A.z2(A.abg.ApU));this.B_.FP(1);this.
J(this.B_,0);this.B_.AF([B=this.WeightRecordingMode,B.Cz,B.CB]);this.B_.Dh(this.
WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.B_._Done(
);this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.B_._ReInit();this.WeightRecordingMode._ReInit(
);this.B_.U(A.z2(A.abg.ApU));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(
this,D);if((B=this.B_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Du:function(){return 2;},GP:function(aIndex){return this.
WeightRecordingModeToString.Ca(this.Da(aIndex));},AF:function(E){C.Dj.AF.call(this
,E);A._GetAutoObject(A.Device.Device).AtU(E);},Init:function(aArg){var B;A.za([this
,this.A$H],[B=A._GetAutoObject(A.Device.Device),B.A24,B.A6I],0);A.ow([this,this.
A$H],this);},A$H:function(H){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.aat([this,this.Cz,this.CB],0);},_Init:function(aArg){C.Dj._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Ci.Set(0,0);this.Ci.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Dj;this.WeightRecordingModeToString.
_Done();C.Dj._Done.call(this);},_ReInit:function(){C.Dj._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Dj._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.V$={BooleanToAutoOnOff:null,GP:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jm;return this.BooleanToAutoOnOff.
Ca(aIndex);},_Init:function(aArg){C.Ft._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.V$;},_Done:function(
){this.__proto__=C.Ft;this.BooleanToAutoOnOff._Done();C.Ft._Done.call(this);},_ReInit:
function(){C.Ft._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Ft._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.Auu={A1h:function(){var B;this.
Aua(1);this.IW(0,3);this.TZ(0,0,(B=this.M)[3]-B[1]);this.AYX(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.AYX(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.T6(0);},_Init:
function(aArg){C.Ax4._Init.call(this,aArg);this.__proto__=C.Auu;},_className:"Application::Triangle"
};C.AOX={Ac:null,Init:function(aArg){this.Bqs(this);},Bqr:function(Pe){var Ab=A.
_NewObject(C.AJi,0);Ab.G(BI);Ab.U(Pe);Ab.Aj(true);Ab.An(false);Ab.Bk(true);this.
J(Ab,0);this.AvM(this);},AvM:function(H){var B;var Ajh=1;var AW4=0;var X=this.Ac.
Af;var Ce=null;var Kp=null;while(!!X&&!((X.S&0x200)===0x200)){Ce=(C.S9.isPrototypeOf(
X)?X:null);if(((X.S&0x400)===0x400)&&!!Ce){var AG8=(B=Ce.T.Co.A0X(Ce.T.String,0,-
1))[2]-B[0];if(!!(C.LI.isPrototypeOf(X)?X:null))AG8=AG8+20;if(AW4<AG8)AW4=AG8;Ce.
G(A.aaO(Ce.M,120));Ce.G(A.aaL(Ce.M,28));Ce.G(A.aaP(Ce.M,this.M[0]));Ce.G(A.aaR(Ce.
M,((B=this.M)[3]-B[1])-(Ajh*28)));Ajh=Ajh+1;}else{Kp=(A.abh.DU.isPrototypeOf(X)?
X:null);if(((X.S&0x400)===0x400)&&!!Kp){var C6=((B=this.M)[3]-B[1])-((Ajh-1)*28);
Kp.Eg([this.M[0],Kp.EV[1]]);Kp.Eg([Kp.EV[0],C6]);Kp.D$([this.M[0]+120,Kp.EN[1]]);
Kp.D$([Kp.EN[0],C6]);}}X=X.Af;}this.BtJ(AW4,28);},BtJ:function(aWidth,Bpz){var B;
var X=this.Ac.Af;var Ce=null;var Kp=null;aWidth=aWidth+20;if(aWidth>(C.Apx[0]-10
))aWidth=C.Apx[0]-10;while(!!X&&!((X.S&0x200)===0x200)){Ce=(C.S9.isPrototypeOf(X
)?X:null);if(((X.S&0x400)===0x400)&&!!Ce){Ce.T.Text.A0(0x14);Ce.T.Text.HT(10);Ce.
G(A.aaO(Ce.M,aWidth));Ce.G(A.aaL(Ce.M,Bpz));Ce.G(A.aaP(Ce.M,this.M[2]-((B=Ce.M)[
2]-B[0])));}else{Kp=(A.abh.DU.isPrototypeOf(X)?X:null);if(((X.S&0x400)===0x400)&&
!!Kp){Kp.Eg([this.M[2]-aWidth,Kp.EV[1]]);Kp.D$([this.M[2],Kp.EN[1]]);}}X=X.Af;}}
,Bqs:function(H){var Ab=A._GetAutoObject(C.Cy).An1;while(!!Ab){if(!!(C.AtZ.isPrototypeOf(
Ab)?Ab:null)){var Ew=(C.AtZ.isPrototypeOf(Ab)?Ab:null);this.Bqp(Ew.Dk,Ew.AR,Ew.Bw
,Ew.A4O);}else if(!!(C.At1.isPrototypeOf(Ab)?Ab:null)){var Ew=(C.At1.isPrototypeOf(
Ab)?Ab:null);this.Bqx(Ew.Dk,Ew.AR,Ew.Bw,Ew.AkO);}else if(!!(C.AcZ.isPrototypeOf(
Ab)?Ab:null)){var Ew=(C.AcZ.isPrototypeOf(Ab)?Ab:null);this.Bqo(Ew.Dk,Ew.AR,Ew.Bw
);}else if(!!(C.Ain.isPrototypeOf(Ab)?Ab:null)){var Ew=(C.Ain.isPrototypeOf(Ab)?
Ab:null);this.Bqr(Ew.Dk);}else if(!!(C.AB8.isPrototypeOf(Ab)?Ab:null))this.Bqy();
Ab=Ab.LU;}A._GetAutoObject(C.Cy).Clear();},Bqo:function(Pe,AaQ,Avz){var Ab=A._NewObject(
C.LI,0);Ab.G(BI);Ab.U(Pe);Ab.AR=AaQ;Ab.Aj(true);Ab.An(Avz);Ab.Bk(true);this.J(Ab
,0);this.AvM(this);},Bqy:function(){var Kp=A._NewObject(A.abh.DU,0);Kp.L(A.iF.Bg
);Kp.Aj(true);Kp.N5(3);this.J(Kp,0);this.AvM(this);},Bqp:function(Pe,AaQ,Avz,AqO
){var Ab=A._NewObject(C.AnO,0);Ab.G(BI);Ab.U(Pe);Ab.AR=AaQ;Ab.Aj(true);Ab.An(Avz
);Ab.Bk(true);Ab.ABk(AqO);this.J(Ab,0);this.AvM(this);},Bqx:function(Pe,AaQ,Avz,
AqO){var Ab=A._NewObject(C.AJh,0);Ab.G(BI);Ab.U(Pe);Ab.AR=AaQ;Ab.Aj(true);Ab.An(
Avz);Ab.Bk(true);Ab.ABk(AqO);this.J(Ab,0);this.AvM(this);},_Init:function(aArg){
C.OverlayMenu._Init.call(this,aArg);A.Core.Ac._Init.call(this.Ac={I:this},0);this.
__proto__=C.AOX;this.G(Vq);this.Ac.G(Vq);this.J(this.Ac,0);this.Init(aArg);},_Done:
function(){this.__proto__=C.OverlayMenu;this.Ac._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ac._ReInit();},
_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Ac)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.AfB={_Init:
function(){A.abm.AfB._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.A4h={An1:null,Afg:null,V1:function(Pe){var Ew=A._NewObject(C.Ain,0);Ew.Dk=
Pe;this.J(Ew);},Clear:function(){this.An1=null;this.Afg=null;},IS:function(){var
Kp=A._NewObject(C.AB8,0);this.J(Kp);},J:function(A7e){if(!this.An1){this.An1=A7e;
this.Afg=this.An1;}else{this.Afg.LU=A7e;this.Afg=this.Afg.LU;}},Aep:function(Pe,
AaQ){var Ew=A._NewObject(C.AcZ,0);Ew.Dk=Pe;Ew.AR=AaQ;this.J(Ew);},AYU:function(Pe
,AaQ,BpG){var Ew=A._NewObject(C.AtZ,0);Ew.Dk=Pe;Ew.AR=AaQ;Ew.A4O=BpG;this.J(Ew);
},Ag2:function(Pe){var Ew=A._NewObject(C.AcZ,0);Ew.Dk=Pe;Ew.Bw=false;this.J(Ew);
},Ag3:function(Pe,AaQ,BpD){var Ew=A._NewObject(C.At1,0);Ew.Dk=Pe;Ew.AR=AaQ;Ew.AkO=
BpD;this.J(Ew);},_Init:function(aArg){this.__proto__=C.A4h;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.An1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Afg)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Application::OptionsOverlayManagerClass"};C.Cy={_Init:
function(){C.A4h._Init.call(this,0);},_variants:function(){return this;},_this:null
};C.At0={LU:null,_Init:function(aArg){this.__proto__=C.At0;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.LU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayItem"
};C.AKd={Akd:null,AoL:function(E){if(this.Akd===E)return;if(!!this.Aa)this.Aa.SZ(
this);if(!!this.Akd)this.AnT(this.Akd,A._GetAutoObject(C.Auc),null,null,null,null
,false);this.Akd=E;if(!!this.Akd)this.Air(this.Akd,A._GetAutoObject(C.Auc),null,
null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);this.__proto__=C.AKd;this.G(BI);},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.Akd)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FooterContainer"
};C.XF={_Init:function(){C.AKd._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.Ne={Init:function(aArg){var C4=A._NewObject(C.AOY,0);C4.G(this.M
);this.Air(C4,A._GetAutoObject(C.ApB),null,A._GetAutoObject(C.ApB),A._GetAutoObject(
C.ApB),null,null,null,null,false);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);this.__proto__=C.Ne;this.G(Vq);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.Auc={_Init:function(){C.APK._Init.call(this,0);this.AyY=200;},_variants:function(
){return this;},_this:null};C.AOY={AH:null,_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.abh.AH._Init.call(this.AH={I:this},0);this.__proto__=C.AOY;this.G(AEd
);this.DC(0);this.AH.AW(0x3F);this.AH.G(AEd);this.AH.L(0xAAFFFFFF);this.J(this.AH
,0);},_Done:function(){this.__proto__=A.Core.O;this.AH._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AH._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AH)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::OverlayShade"};C.APJ={QZ:function(){var B;var
Ak=(A.abm.Ac2.isPrototypeOf(B=A.abm.Ab6.QZ.call(this))?B:null);if(!Ak)throw new Error(
Ap3);Ak.B8.Ch=255;Ak.B8.BW=0;return Ak;},QY:function(){var B;var Ak=(A.abm.AtY.isPrototypeOf(
B=A.abm.Ab6.QY.call(this))?B:null);if(!Ak)throw new Error(Ap3);Ak.ED.Ch=0;Ak.ED.
BW=255;Ak.C_=true;return Ak;},_Init:function(aArg){A.abm.Ab6._Init.call(this,aArg
);this.__proto__=C.APJ;},_className:"Application::ShadeOverlayTransition"};C.ApB={
_Init:function(){C.APJ._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.ApA={AlC:0,A8e:false,Init:function(aArg){},Ai:function(Ae){var F;C.JQ.Ai.
call(this,Ae);this.B2.L(this.T.AV);if(!!this.Q){var AYF=(F=this.Q,F[1].call(F[0]
));if((F=this.Q,F[1].call(F[0]))>0){if(AYF<100000)this.B2.R((A._GetAutoObject(A.
Device.Converter).Nl(AYF,1,false)+Cv)+A._GetAutoObject(A.abk.Dv).Aa$());else this.
B2.R((A._GetAutoObject(A.Device.Converter).Nl(AYF,0,false)+Cv)+A._GetAutoObject(
A.abk.Dv).Aa$());}else this.B2.R(A.z2(A.abg.Ah3));}},Jz:function(H){var B;var A$E=(
this.A8e===false)&&(this.AI<=this.FG);if(A$E)this.Bu(this.AlC);this.AYy(this.AI,
4);if(A$E){this.Bu(this.AI-this.AhK);this.A8e=true;}C.JQ.Jz.call(this,H);},Ju:function(
H){this.AYy(this.AI,5);C.JQ.Ju.call(this,H);},Bu:function(E){this.AYy(E,4);E=(((
E+((this.AhK/2)|0))/this.AhK)|0)*this.AhK;C.JQ.Bu.call(this,E);},AtN:function(E){
if(this.AlC===E)return;this.AlC=E;},AYy:function(Bpi,GJ){this.AOp(A._GetAutoObject(
A.abk.Dv).A8w(Bpi,GJ));},_Init:function(aArg){C.JQ._Init.call(this,aArg);this.__proto__=
C.ApA;this.G(KM);this.AlC=this.FG;this.Lg(this.Ht,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.Bv2={None:0,Left:1,Bwy:2,Right:3};C.Akh={AVQ:
null,E2:null,D9:null,Background:null,Ak1:null,Fs:null,J5:A.jm,AAj:null,Init:function(
aArg){var B;A.y_([this,this.Ad4],A._GetAutoObject(A.Device.Device).Aq,0);A.za([this
,this.AXO],[B=A._GetAutoObject(A.Device.Device).Aq,B.Fd,B.Ff],0);A.ow([this,this.
Lv],this);A.ow([this,this.AXO],this);this.A8(this.D9);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.Dz(this);},M_:function(){if(!this.CU)this.CU=A._NewObject(
C.N,0);return this.CU;},Fc:function(H){C.OverlayMenu.Fc.call(this,H);A._GetAutoObject(
A.Device.Device).Aq.Bo(this.AVQ);},CE:function(H){C.OverlayMenu.CE.call(this,H);
this.AGN();},Aq0:function(H){var Ab=(C.Ayx.isPrototypeOf(H)?H:null);var Hl;if(!!
Ab)Hl=Ab.Hl;else Hl=this.Fs.FH();if(Hl>=A._GetAutoObject(A.Device.Device).Aq.Cd(
))return;A._GetAutoObject(A.Device.Helper).HS(Hl);A.ow([this,this.AjL],this);},AGN:
function(){},Ad4:function(H){this.Al();},AXH:function(H){if(this.Fs.FH()<(A._GetAutoObject(
A.Device.Device).Aq.Cd()-1))this.Fs.Gl(this.Fs.FH()+1);},AXI:function(H){if(this.
Fs.FH()>0)this.Fs.Gl(this.Fs.FH()-1);},Dz:function(H){var FU=A._GetAutoObject(A.
Device.Device).Aq.Cd();var L_=this.CU;if(!L_)return;L_.C8(A.zW(A.abi.Ack));L_.CA=[
this,this.AjL];if(FU<=0){L_.Cm(null);L_.Db(null);L_.Cg=null;L_.Cl=null;L_.XK=false;
L_.XL=false;}else if(FU===1){L_.Cm(null);L_.Db(A.zW(A.abi.Acl));L_.Cg=null;L_.Cl=[
this,this.Aq0];L_.XK=false;L_.XL=false;}else{L_.Cm(A.zW(A.abi.Asy));L_.Db(A.zW(A.
abi.AsE));L_.Cg=[this,this.AXH];L_.Cl=[this,this.AXI];L_.XK=true;L_.XL=true;}},Lv:
function(H){this.A_8(this);this.AVQ=A._GetAutoObject(A.Device.Device).Aq.Filter;
this.AGN();},Bf_:function(E){if(this.AAj===E)return;this.AAj=E;A.ow([this,this.BsT
],this);},BsT:function(H){this.A_8(this);},A_8:function(H){var B;if(!!this.E2)this.
HW(this.E2);this.E2=(C.Ef.isPrototypeOf(B=A._NewObject(this.AAj,0))?B:null);if(!
!this.E2){this.E2.G(AS2);this.J(this.E2,0);}},AXO:function(H){if(!!A._GetAutoObject(
A.Device.Device).Aq.Filter&&!!A._GetAutoObject(A.Device.Device).Aq.Filter.DG(1,4
))this.Fs.Et(A.z2(A.abg.ANw));else this.Fs.Et(this.J5);},Et:function(E){if(this.
J5===E)return;this.J5=E;A.ow([this,this.AXO],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.D9._Init.call(this.D9={I:this},0);A.abh.AH._Init.call(this.
Background={I:this},0);A.abh.AH._Init.call(this.Ak1={I:this},0);C.Fs._Init.call(
this.Fs={I:this},0);this.__proto__=C.Akh;this.G(Vq);this.D9.G(BI);this.D9.A3z(A.
iF.CP);this.D9.A3A(A.iF.Text);this.Background.G(FK);this.Background.L(A.iF.Bhz);
this.Ak1.G(AEe);this.Ak1.L(A.iF.CP);this.Fs.G(AEe);this.Fs.Nb(C.Ayx);this.AAj=C.
ALg;this.J5=A.z2(A.abg.ANq);this.J(this.D9,0);this.J(this.Background,0);this.J(this.
Ak1,0);this.J(this.Fs,0);this.D9.AR=[this,this.Aq0];this.D9.Z2(A._NewObject(C.WH
,0));this.Fs.Xz(A._GetAutoObject(A.Device.Device).Aq);this.Fs.XA([this,this.Aq0]
);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.D9._Done(
);this.Background._Done();this.Ak1._Done();this.Fs._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.D9._ReInit();this.
Background._ReInit();this.Ak1._ReInit();this.Fs._ReInit();},_Mark:function(D){var
B;C.OverlayMenu._Mark.call(this,D);if((B=this.AVQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.E2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.D9)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ak1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fs)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::AnimalSearchOverlay"};C.Ayx={AP:null,CL:null,Bh:function(
aSize){C.A$.Bh.call(this,aSize);this.T.G(A.aaQ(this.T.M,((aSize[0]*65)/100)|0));
this.AP.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);this.CL.G([this.T.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.CL.CW(this.T.AV);},Init:
function(aArg){},B7:function(Z){if(!this.AZ)return;this.Hl=Z;if(!!this.AZ){this.
U(this.AZ.Cp(Z,1).toFixed());this.CL.DO(this.AZ.AkF(Z,14));this.CL.AA_(this.AZ.IC(
Z,13));this.CL.AcQ(this.AZ.Hq(Z,8));this.CL.ST(this.AZ.Hq(Z,11));this.CL.AcS(this.
AZ.Hq(Z,12));this.CL.AcU(this.AZ.Cp(Z,5));this.Al();}},_Init:function(aArg){C.A$.
_Init.call(this,aArg);A.abh.AH._Init.call(this.AP={I:this},0);C.CL._Init.call(this.
CL={I:this},0);this.__proto__=C.Ayx;this.G(Np);this.AP.L(A.iF.A7);this.CL.G(AS3);
this.J(this.AP,0);this.J(this.CL,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.AP._Done();this.CL._Done();C.A$._Done.call(this);},_ReInit:function(){
C.A$._ReInit.call(this);this.AP._ReInit();this.CL._ReInit();},_Mark:function(D){
var B;C.A$._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.CL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListSmallItem"
};C.WH={Q:null,Init:function(aArg){var B;this.AX3(this);this.AF([B=A._GetAutoObject(
A.Device.Device).Aq,B.Fd,B.Ff]);},A3a:function(H){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).F0(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DG(1,4))?
B:null);}else{Filter=A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!
FilterCriterion)Filter.P6(FilterCriterion);var Axy=this.Afi();if(Axy>0){FilterCriterion=
A._NewObject(A.Device.Int32FilterCriterion,0);FilterCriterion.Initialize(1,4,Axy
,false);Filter.CO(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(F[0],Filter)
);this.AX.Aia(false);},BoJ:function(s){this.A3a(s);},AX3:function(H){var B;var F;
var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(
F=this.Q,F[1].call(F[0])).F0();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(
B=Filter.DG(1,4))?B:null);if(!!FilterCriterion)Filter.P6(FilterCriterion);(F=this.
Q,F[2].call(F[0],Filter));}},Byb:function(s){this.AX3(s);},AF:function(E){if(A.z_(
this.Q,E))return;if(!!this.Q)A.zn([this,this.AaI],this.Q,0);this.Q=E;if(!!E)A.za([
this,this.AaI],E,0);if(!!E)A.ow([this,this.AaI],this);},CY:function(H){var B;var
F;if(!(F=this.Q,F[1].call(F[0]))){this.AX.ABj(-1);this.DO(0);return;}var AvF=(A.
Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DG(1,4))?
B:null);if(!AvF){this.AX.ABj(0);this.AX.Aia(true);}else this.AX.ABj(AvF.AY);var Avx=(
A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DG(
14,0))?B:null);if(!!Avx)this.DO(Avx.AY);else this.DO(0);},AaI:function(s){this.CY(
s);},_Init:function(aArg){C.Asn._Init.call(this,aArg);this.__proto__=C.WH;this.AX.
ABj(0);this.AX.Ds=[this,this.BoJ];this.Init(aArg);},_Mark:function(D){var B;C.Asn.
_Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::HeaderSearchAnimal"};C.AnW={BirthType:null,EaseOfDelivery:null,BS:
null,OU:null,ZI:null,GA:null,DZ:null,ZG:null,AIC:false,Init:function(aArg){this.
AIC=A._GetAutoObject(A.Device.Helper).V.Aon();if(this.AIC)this.Ate(A._GetAutoObject(
A.Device.Helper).V.FirstBodyWeight);if(!A._GetAutoObject(A.Device.Helper).V.TransponderId
){this.BS.M$([this,this.Vs]);this.BS.Na(A.zW(A.abi.Ac4));this.BS.AR=[this,this.Vs
];}this.OU.AtK(!!A._GetAutoObject(A.Device.Helper).V.NaisId);A.za([this,this.Iw]
,this.OU.Q,0);A.za([this,this.Iw],this.BS.Q,0);A.ow([this,this.Iw],this);},Ad9:function(
H){if(((this.OU.ACj===false)&&!!A._GetAutoObject(A.Device.Helper).V.NaisId)&&A._GetAutoObject(
A.Device.Device).Aq.Ab5(26,A._GetAutoObject(A.Device.Helper).V.NaisId)){A._GetAutoObject(
A.Device.Device).A_(21,true,A._GetAutoObject(A.Device.Converter).U_(A._GetAutoObject(
A.Device.Helper).V.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).V.Cr(
A._GetAutoObject(A.Device.Device).Aq);if(this.PA>0){if(this.AIC){var Z=A._GetAutoObject(
A.Device.Device).Bt.LL(0,A._GetAutoObject(A.Device.Helper).V.FirstBodyWeightId);
if(Z>=0){var B$=A._NewObject(A.Device.Rating,0);B$.Fo(Z,A._GetAutoObject(A.Device.
Device).Bt);B$.OnSetBodyWeight(this.PA);B$.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).V.DateOfBirth);B$.Cr(A._GetAutoObject(A.Device.Device).Bt);}else A.aa8("%s%i"
,AS4,A._GetAutoObject(A.Device.Helper).V.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Mp())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bt.Ie().toFixed(),0,null);else{var B$=A._NewObject(A.Device.Rating
,0);B$.GC();B$.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.Id);B$.OnSetBodyWeight(
this.PA);B$.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).V.DateOfBirth);B$.Cr(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A1).Fl();},EY:function(
H){A._GetAutoObject(A.Device.Helper).V.Fo(A._GetAutoObject(A.Device.Helper).V.Ct
,A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(C.A1).Fl();},Arf:function(
){this.N.Cb(A.jm);this.N.Db(A.zW(A.abi.Aoi));this.N.Cl=[this,this.Avt];},AwZ:function(
H){A._GetAutoObject(C.A1).BX(31);},Iw:function(H){var F;var R4=(F=this.OU.Q,F[1].
call(F[0]));var Aeh=(F=this.BS.Q,F[1].call(F[0]));var AxN=true;if(!!R4&&(Aeh===R4
))AxN=false;this.BS.Aj(AxN);this.BS.An(AxN);this.BS.W(AxN);this.OU.Be$(!AxN);},_Init:
function(aArg){C.Hm._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.AsR._Init.
call(this.BS={I:this},0);C.AfG._Init.call(this.OU={I:this},0);C.AlB._Init.call(this.
ZI={I:this},0);C.B_._Init.call(this.GA={I:this},0);C.AlA._Init.call(this.DZ={I:this
},0);C.B_._Init.call(this.ZG={I:this},0);this.__proto__=C.AnW;var B;this.BS.G(AfW
);this.BS.Aj(true);this.BS.U(A.z2(A.abg.AiK));this.BS.AoR(((A.z2(A.abg.Ok)+A.z2(
A.abg.Colon))+Cv)+A.z2(A.abg.Apw));this.BS.AoS(A.z2(A.abg.Ah3));this.OU.G(AfW);this.
OU.Aj(true);this.OU.U(A.z2(A.abg.ZU));this.ZI.G(AS5);this.ZI.Aj(true);this.ZI.U(
A.z2(A.abg.Hs));this.GA.G(AfW);this.GA.Aj(true);this.GA.U(A.z2(A.abg.AsT));this.
DZ.G(AfW);this.DZ.Aj(true);this.DZ.U(A.z2(A.abg.AnR));this.DZ.AOB(true);this.ZG.
G(AfW);this.ZG.Aj(true);this.ZG.U(A.z2(A.abg.Akl));this.J(this.BS,0);this.J(this.
OU,0);this.J(this.ZI,0);this.J(this.GA,0);this.J(this.DZ,0);this.J(this.ZG,0);this.
BirthType.NZ(A._GetAutoObject(A.Device.Helper).V);this.EaseOfDelivery.NZ(A._GetAutoObject(
A.Device.Helper).V);this.BS.AF([B=A._GetAutoObject(A.Device.Helper).V,B.Ah7,B.Nc
]);this.OU.Hb([this,this.Es,this.HU]);this.OU.AF([B=A._GetAutoObject(A.Device.Helper
).V,B.AoD,B.O2]);this.ZI.Hb([this,this.Es,this.HU]);this.ZI.AF([B=A._GetAutoObject(
A.Device.Helper).V,B.AoH,B.XE]);this.GA.AF([B=this.BirthType,B.Cz,B.CB]);this.GA.
Dh(this.BirthType);this.DZ.Hb([this,this.Es,this.HU]);this.DZ.M$([B=this.DZ,B.Gy
]);this.DZ.Na(A.zW(A.abi.Edit));this.DZ.AcV([B=A._GetAutoObject(A.Device.Helper).
V,B.AAI,B.AcO]);this.ZG.AF([B=this.EaseOfDelivery,B.Cz,B.CB]);this.ZG.Dh(this.EaseOfDelivery
);this.Init(aArg);},_Done:function(){this.__proto__=C.Hm;this.BirthType._Done();
this.EaseOfDelivery._Done();this.BS._Done();this.OU._Done();this.ZI._Done();this.
GA._Done();this.DZ._Done();this.ZG._Done();C.Hm._Done.call(this);},_ReInit:function(
){C.Hm._ReInit.call(this);this.BirthType._ReInit();this.EaseOfDelivery._ReInit();
this.BS._ReInit();this.OU._ReInit();this.ZI._ReInit();this.GA._ReInit();this.DZ.
_ReInit();this.ZG._ReInit();this.BS.U(A.z2(A.abg.AiK));this.BS.AoR(((A.z2(A.abg.
Ok)+A.z2(A.abg.Colon))+Cv)+A.z2(A.abg.Apw));this.BS.AoS(A.z2(A.abg.Ah3));this.OU.
U(A.z2(A.abg.ZU));this.ZI.U(A.z2(A.abg.Hs));this.GA.U(A.z2(A.abg.AsT));this.DZ.U(
A.z2(A.abg.AnR));this.ZG.U(A.z2(A.abg.Akl));},_Mark:function(D){var B;C.Hm._Mark.
call(this,D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ZG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.AlB={Fa:null,AX:null,A3:0,JC:function(H){C.C9.JC.call(this,H);if(!this.A3)this.
Gy(this);else this.Gu(this);},Ai:function(Ae){C.C9.Ai.call(this,Ae);this.GS.W(false
);this.Ht.W(false);if(this.A3===1){this.A8(this.AX);if(this.GW){this.AX.GE(A.iF.
CD);this.Background.L(A.iF.CP);this.T.L(A.iF.Text);}else{this.AX.GE(A.iF.CP);this.
Background.L(A.iF.CD);this.T.L(A.iF.Text);}}else{if(this.GW)this.AX.GE(A.iF.CD);
else this.AX.GE(A.iF.CP);this.A8(null);}},Bu:function(E){var F;var BR=this.AI;C.
C9.Bu.call(this,E);if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI
));A.aat(this.Q,0);}A.aat([this,this.SR,this.A6l],0);},Dz:function(H){var F;if(!
this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).C8(A.zW(A.abi.ET
));(F=this.N,F[1].call(F[0])).GX(A.jm);(F=this.N,F[1].call(F[0])).CA=[this,this.
Gu];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.
N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).Db(null);(F=this.N,F[1].call(
F[0])).Cb(A.jm);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:this.Fa.Aiw((F=
this.N,F[1].call(F[0])));}},Gy:function(H){this.Ec(1);},Gu:function(H){this.Ec(0
);},Ec:function(EH){var F;if(!this.A3)this.Fa.Ahf((F=this.N,F[1].call(F[0])));this.
A3=EH;if(this.A3<0)this.A3=0;else if(this.A3>1)this.A3=1;if(this.A3===1)this.AX.
UU(7);this.Dz(this);this.Al();},_Init:function(aArg){C.C9._Init.call(this,aArg);
C.AsJ._Init.call(this.AX={I:this},0);this.__proto__=C.AlB;this.G(Ye);this.FP(999999
);this.T.R(Ap_);this.T.L(A.iF.Bg);this.GS.W(false);this.Ht.W(false);this.AX.G(AS6
);this.J(this.AX,0);this.AX.AF([this,this.SR,this.A6l]);this.Fa=A._NewObject(C.Aca
,0);},_Done:function(){this.__proto__=C.C9;this.AX._Done();C.C9._Done.call(this);
},_ReInit:function(){C.C9._ReInit.call(this);this.AX._ReInit();},_Mark:function(
D){var B;C.C9._Mark.call(this,D);if((B=this.Fa)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Du:function(){return 4;
},Da:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},GP:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jm;return this.WeightRecordingScopeToString.
Ca(aIndex);},DT:function(A2){return A2;},HN:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.ArE={Ac:null,PN:null,M7:null,GT:null,OT:null,OQ:null,OR:null,AD:null,Ft:null
,ReasonOfLeaving:null,Afz:null,Wt:0,Akt:false,AyB:true,AJ8:false,Apj:false,Init:
function(aArg){A.za([this,this.A2_],[this,this.A2E,this.AOx],0);this.Atj(A._GetAutoObject(
A.Device.Helper).V.AiO(2));this.ReasonOfLeaving.AF(this.ReasonOfLeaving.DT(A._GetAutoObject(
A.Device.Helper).V.ReasonOfLeaving));A.ow([this,this.A2_],this);},DS:function(H){
var B;var EQ=0;var X=this.A6;switch(this.CF.CM){case 6:EQ=2;break;case 7:EQ=7;break;
case 4:EQ=4;break;case 5:EQ=5;break;default:;}X=this.Q8(X,EQ,0x414);if(!!X)this.
A8(X);if(!!X&&((X.S&0x400)===0x400))this.Ac.IA(X,true,null,null);},AjM:function(
H){A._GetAutoObject(C.A1).Fl();},Am_:function(H){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Mp())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.
Device.Device).Bt.Ie().toFixed(),0,null);else{var B$=A._NewObject(A.Device.Rating
,0);B$.GC();B$.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.Id);B$.OnSetBodyWeight(
this.Wt);B$.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).DN());B$.Cr(A._GetAutoObject(
A.Device.Device).Bt);}if(this.Akt){A._GetAutoObject(A.Device.Helper).V.Afp(false
);if(!A._GetAutoObject(A.Device.Helper).V.AnimalType)A._GetAutoObject(A.Device.Helper
).A0Z(A._GetAutoObject(A.Device.Helper).DN(),this.Apj);}A._GetAutoObject(A.Device.
Helper).V.ABF(this.ReasonOfLeaving.Da((F=this.M7.Q,F[1].call(F[0]))));if(this.AyB
)A._GetAutoObject(A.Device.Helper).V.Nc(0);if(this.Apj)A._GetAutoObject(A.Device.
Helper).V.Atx(true);A._GetAutoObject(A.Device.Helper).V.Cr(A._GetAutoObject(A.Device.
Device).Aq);this.A4P();},FX:function(H){var B;this.AD.N0((B=this.Ac.Dd(0x1))[3]-
B[1]);this.AD.N4((B=this.Ac.M)[3]-B[1]);this.AD.N2(-this.Ac.Br[1]);},Atj:function(
E){if(this.Wt===E)return;this.Wt=E;},AAH:function(){return this.Wt;},A_a:function(
H){var As=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!As)return;if((As.PopupState===
4)||(As.PopupState===3)){A._GetAutoObject(C.A1).Fl();A._GetAutoObject(A.Device.Helper
).Apr();}},A2_:function(H){switch(this.Apj){case false:this.GT.U(A.z2(A.abg.AQA)
);break;case true:this.GT.U(A.z2(A.abg.Bjq));break;default:;}},AOx:function(E){if(
this.Apj===E)return;this.Apj=E;},A2E:function(){return this.Apj;},A4P:function(){
A._GetAutoObject(A.Device.Device).A_(15,true,A._GetAutoObject(A.Device.Helper).V.
VisualId.toFixed(),2000,[this,this.A_a]);},Bfz:function(E){if(this.AJ8===E)return;
this.AJ8=E;},BdS:function(){return this.AJ8;},BeT:function(E){if(this.AyB===E)return;
this.AyB=E;},BdH:function(){return this.AyB;},Be8:function(E){if(this.Akt===E)return;
this.Akt=E;},BdO:function(){return this.Akt;},Iu:function(H){A.ow([this,this.FX]
,this);},_Init:function(aArg){C.Aw._Init.call(this,aArg);A.Core.Ac._Init.call(this.
Ac={I:this},0);C.Ade._Init.call(this.PN={I:this},0);C.ACB._Init.call(this.M7={I:
this},0);C.ApA._Init.call(this.GT={I:this},0);C.Ade._Init.call(this.OT={I:this},
0);C.Ade._Init.call(this.OQ={I:this},0);C.Ade._Init.call(this.OR={I:this},0);C.AD.
_Init.call(this.AD={I:this},0);C.Ft._Init.call(this.Ft={I:this},0);C.ReasonOfLeaving.
_Init.call(this.ReasonOfLeaving={I:this},0);A.Device.Afz._Init.call(this.Afz={I:
this},0);this.__proto__=C.ArE;var B;this.N.W(true);this.N.Cb(A.z2(A.abg.Unregister
));this.Dt(C.If);this.Ac.G(FK);this.Ac.Le(1);this.PN.G(AiY);this.PN.Aj(true);this.
PN.U(A.z2(A.abg.Akt));this.PN.Bk(true);this.PN.XC(false);this.PN.Hw(-1);this.PN.
FP(1);this.M7.G(AfX);this.M7.Aj(true);this.M7.U(A.z2(A.abg.ReasonOfLeaving));this.
M7.Bk(true);this.M7.XC(false);this.GT.G(AfV);this.GT.Aj(true);this.GT.U(A.z2(A.abg.
AQA));this.GT.Bk(false);this.GT.Hw(1000);this.GT.FP(999000);this.OT.G(AfX);this.
OT.Aj(true);this.OT.U(A.z2(A.abg.AY9));this.OT.Bk(true);this.OT.XC(false);this.OT.
Bu(1);this.OT.Hw(-1);this.OT.FP(1);this.OQ.G(AiY);this.OQ.Aj(true);this.OQ.U(A.z2(
A.abg.AY_));this.OQ.Bk(true);this.OQ.XC(false);this.OQ.Bu(1);this.OQ.Hw(-1);this.
OQ.FP(1);this.OR.G(AfX);this.OR.Aj(true);this.OR.U(A.z2(A.abg.AZP));this.OR.Bk(true
);this.OR.XC(false);this.OR.Bu(1);this.OR.Hw(-1);this.OR.FP(1);this.AD.G(Ap6);this.
Ft.AF(0);this.J(this.Ac,0);this.J(this.PN,0);this.J(this.M7,0);this.J(this.GT,0);
this.J(this.OT,0);this.J(this.OQ,0);this.J(this.OR,0);this.J(this.AD,0);this.N.C8(
A.zW(A.abi.ET));this.Ac.Eu=[this,this.Iu];this.PN.AF([B=this.Ft,B.Cz,B.CB]);this.
PN.Dh(this.Ft);this.PN.Aih([this,this.BdO,this.Be8]);this.M7.Hb([this,this.Es,this.
HU]);this.M7.M$([B=this.M7,B.Gy]);this.M7.Na(A.zW(A.abi.Edit));this.M7.AF([B=this.
ReasonOfLeaving,B.Cz,B.CB]);this.M7.Dh(this.ReasonOfLeaving);this.M7.ABd(this.Afz
);this.GT.AF([this,this.AAH,this.Atj]);this.OT.AF([B=this.Ft,B.Cz,B.CB]);this.OT.
Dh(this.Ft);this.OT.Aih([this,this.BdS,this.Bfz]);this.OQ.AF([B=this.Ft,B.Cz,B.CB
]);this.OQ.Dh(this.Ft);this.OQ.Aih([this,this.A2E,this.AOx]);this.OR.AF([B=this.
Ft,B.Cz,B.CB]);this.OR.Dh(this.Ft);this.OR.Aih([this,this.BdH,this.BeT]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Aw;this.Ac._Done();this.PN._Done();this.
M7._Done();this.GT._Done();this.OT._Done();this.OQ._Done();this.OR._Done();this.
AD._Done();this.Ft._Done();this.ReasonOfLeaving._Done();this.Afz._Done();C.Aw._Done.
call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.Ac._ReInit();this.PN.
_ReInit();this.M7._ReInit();this.GT._ReInit();this.OT._ReInit();this.OQ._ReInit(
);this.OR._ReInit();this.AD._ReInit();this.Ft._ReInit();this.ReasonOfLeaving._ReInit(
);this.Afz._ReInit();this.N.Cb(A.z2(A.abg.Unregister));this.PN.U(A.z2(A.abg.Akt)
);this.M7.U(A.z2(A.abg.ReasonOfLeaving));this.GT.U(A.z2(A.abg.AQA));this.OT.U(A.
z2(A.abg.AY9));this.OQ.U(A.z2(A.abg.AY_));this.OR.U(A.z2(A.abg.AZP));},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ft
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Afz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"
};C.API={Ahr:null,Q7:null,Ar1:AS7,Bh:function(aSize){C.JQ.Bh.call(this,aSize);this.
T.G([0,0,aSize[0],40]);this.B2.G([0,40,aSize[0],80]);this.GS.G([0,this.B2.M[1],40
,this.B2.M[3]]);this.Ht.G([aSize[0]-40,this.B2.M[1],aSize[0],this.B2.M[3]]);},Ai:
function(Ae){var F;C.JQ.Ai.call(this,Ae);this.Q7.L(this.T.AV);if(!!this.Ahr){if((
F=this.Ahr,F[1].call(F[0]))===-1)this.Q7.R(this.Ar1+AEf);else this.Q7.R((this.Ar1+
Cv)+(F=this.Ahr,F[1].call(F[0])).toFixed());}else this.Q7.R(this.Ar1);},AXs:function(
H){this.Al();},Bfh:function(E){if(A.z_(this.Ahr,E))return;if(!!this.Ahr)A.zn([this
,this.AXs],this.Ahr,0);this.Ahr=E;if(!!E)A.za([this,this.AXs],E,0);if(!!E)A.ow([
this,this.AXs],this);},A3w:function(E){if(this.Ar1===E)return;this.Ar1=E;this.Al(
);},_Init:function(aArg){C.JQ._Init.call(this,aArg);C.CH._Init.call(this.Q7={I:this
},0);this.__proto__=C.API;this.G(AS8);this.T.G(AS9);this.T.A0(0x12);this.Q7.G(AS_
);this.Q7.A0(0x12);this.Q7.L(A.iF.Bg);this.J(this.Q7,0);this.Q7.Y(A.zW(A.eV.Au));
this.Q7.Bz(A.zW(A.eV.AB));this.Q7.C7(null);},_Done:function(){this.__proto__=C.JQ;
this.Q7._Done();C.JQ._Done.call(this);},_ReInit:function(){C.JQ._ReInit.call(this
);this.Q7._ReInit();},_Mark:function(D){var B;C.JQ._Mark.call(this,D);if((B=this.
Ahr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q7)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemValueExtra"};C.AHY={Ac:null,Jk:
null,Rc:null,AD:null,AnK:2500,AI8:24,DS:function(H){var B;var EQ=0;var X=this.A6;
switch(this.CF.CM){case 6:EQ=2;break;case 7:EQ=7;break;case 4:EQ=4;break;case 5:
EQ=5;break;default:;}X=this.Q8(X,EQ,0x414);if(!!X)this.A8(X);if(!!X&&((X.S&0x400
)===0x400))this.Ac.IA(X,true,null,null);},AjM:function(H){A._GetAutoObject(C.A1).
Fl();},Am_:function(H){},FX:function(H){var B;this.AD.N0((B=this.Ac.Dd(0x1))[3]-
B[1]);this.AD.N4((B=this.Ac.M)[3]-B[1]);this.AD.N2(-this.Ac.Br[1]);},Be2:function(
E){if(this.AnK===E)return;this.AnK=E;},BdJ:function(){return this.AnK;},Be3:function(
E){if(this.AI8===E)return;this.AI8=E;},BdK:function(){return this.AI8;},Bdw:function(
H){var F,C$;this.Jk.B2.L(this.Jk.T.AV);if(!!this.Jk.Q)this.Jk.B2.R((((String.fromCharCode(((
F=this.Jk.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+AiR)+String.fromCharCode(((
C$=this.Jk.Q,C$[1].call(C$[0]))+10000).toFixed().charCodeAt(2)||0))+Cv)+this.Jk.
AC_);},Iu:function(H){A.ow([this,this.FX],this);},_Init:function(aArg){C.Aw._Init.
call(this,aArg);A.Core.Ac._Init.call(this.Ac={I:this},0);C.JQ._Init.call(this.Jk={
I:this},0);C.JQ._Init.call(this.Rc={I:this},0);C.AD._Init.call(this.AD={I:this},
0);this.__proto__=C.AHY;this.N.W(true);this.Dt(C.If);this.Ac.G(FK);this.Ac.Le(1);
this.Jk.G(AfV);this.Jk.Aj(true);this.Jk.U(A.z2(A.abg.AnK));this.Jk.Bk(false);this.
Jk.Hw(0);this.Jk.FP(5000);this.Jk.Nd(A.z2(A.abg.Ad2));this.Jk.N3(A.z2(A.abg.Ad2)
);this.Jk.AOp(100);this.Rc.G(AfX);this.Rc.Aj(true);this.Rc.U(A.z2(A.abg.A4o));this.
Rc.Bk(true);this.Rc.Bu(24);this.Rc.Hw(10);this.Rc.FP(33);this.Rc.Nd(AS$);this.AD.
G(Ap6);this.J(this.Ac,0);this.J(this.Jk,0);this.J(this.Rc,0);this.J(this.AD,0);this.
N.C8(A.zW(A.abi.AhD));this.Ac.Eu=[this,this.Iu];this.Jk.AF([this,this.BdJ,this.Be2
]);this.Jk.A31([this,this.Bdw]);this.Rc.AF([this,this.BdK,this.Be3]);},_Done:function(
){this.__proto__=C.Aw;this.Ac._Done();this.Jk._Done();this.Rc._Done();this.AD._Done(
);C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.Ac._ReInit(
);this.Jk._ReInit();this.Rc._ReInit();this.AD._ReInit();this.Jk.U(A.z2(A.abg.AnK
));this.Jk.Nd(A.z2(A.abg.Ad2));this.Jk.N3(A.z2(A.abg.Ad2));this.Rc.U(A.z2(A.abg.
A4o));},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.Ac)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rc).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalActionNewbornCareScreen"};C.Aow={EaseOfDelivery:null,BirthType:
null,BS:null,C1:null,Dl:null,DZ:null,GT:null,GA:null,K$:null,Wt:0,K9:false,Init:
function(aArg){A.za([this,this.Iw],this.BS.Q,0);A.za([this,this.Iw],this.C1.Q,0);
A.za([this,this.Aw3],this.GU.Q,0);A.za([this,this.A9L],this.DZ.D2,0);A.za([this,
this.A9G],this.EF.Q,0);A.za([this,this.Aq1],this.BS.Q,0);A.za([this,this.Aq1],this.
C1.Q,0);A.ow([this,this.Aw3],this);A.ow([this,this.Iw],this);A.ow([this,this.A9L
],this);A.ow([this,this.A9G],this);A.ow([this,this.Aq1],this);},EY:function(H){A.
_GetAutoObject(A.Device.Helper).V.GZ();A._GetAutoObject(C.A1).Fl();},Ad9:function(
H){var F;A._GetAutoObject(A.Device.Helper).V.DO((F=this.Df.Q,F[1].call(F[0])));if(
!!A._GetAutoObject(A.Device.Helper).AfC){var Ajv=A._GetAutoObject(A.Device.Helper
).AfC.AKx();A._GetAutoObject(A.Device.Helper).V.Z4(Ajv);A._GetAutoObject(A.Device.
Helper).V.Alh(Ajv);}var AvJ=A._GetAutoObject(A.Device.Helper).A7R(A._GetAutoObject(
A.Device.Helper).V,(F=this.Dl.Hn.GL,F[1].call(F[0])),A._GetAutoObject(A.Device.Device
).Aq);if(!AvJ){this.Anp();A.ow([this,this.Bo8],this);}else A._GetAutoObject(A.Device.
Helper).AWE(A._GetAutoObject(A.Device.Helper).V,AvJ,(F=this.Dl.Hn.GL,F[1].call(F[
0])),0,[this,this.Aw0]);},Arf:function(){this.N.Cb(A.jm);this.N.Db(A.zW(A.abi.Az5
));this.N.Cl=[this,this.Avt];},Anp:function(){var B;var F;A._GetAutoObject(A.Device.
Helper).V.Cr(A._GetAutoObject(A.Device.Device).Aq);var Oi=A._GetAutoObject(A.Device.
Device).Aq.LL(0,A._GetAutoObject(A.Device.Helper).V.Id);A._GetAutoObject(A.Device.
Device).UV(Oi);var A8M=false;if(A._GetAutoObject(A.Device.Helper).AkP()){if(A._GetAutoObject(
A.Device.Device).Bt.Mp()){A8M=true;A._GetAutoObject(A.Device.Device).A_(50,true,
A._GetAutoObject(A.Device.Device).Bt.Ie().toFixed(),0,null);}else{var B$=A._NewObject(
A.Device.Rating,0);B$.GC();B$.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.
Id);B$.OnSetBodyWeight(this.PA);B$.OnSetTimestamp(A._GetAutoObject(A.Device.Helper
).V.DateOfBirth);B$.Cr(A._GetAutoObject(A.Device.Device).Bt);}}if(A._GetAutoObject(
A.Device.Helper).A1m()&&(A8M===false)){if(A._GetAutoObject(A.Device.Device).Bt.Mp(
))A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).
Bt.Ie().toFixed(),0,null);else{var B$=A._NewObject(A.Device.Rating,0);B$.GC();B$.
OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.Id);B$.OnSetBodyWeight(this.Wt
);B$.Cr(A._GetAutoObject(A.Device.Device).Bt);}}var Ir=null;switch((F=this.Dl.Hn.
GL,F[1].call(F[0]))){case 3:Ir=[B=A._GetAutoObject(A.Device.Device),B.As2,B.Avm];
break;case 2:Ir=[B=A._GetAutoObject(A.Device.Device),B.As3,B.Avn];break;case 4:case
5:Ir=[B=A._GetAutoObject(A.Device.Device),B.Ak_,B.Al8];break;default:;}if(!!Ir)switch((
F=this.Dl.Jg.T9,F[1].call(F[0]))){case 1:Ir[2].call(Ir[0],A._GetAutoObject(A.Device.
Helper).V.VisualId-1);break;case 0:Ir[2].call(Ir[0],A._GetAutoObject(A.Device.Helper
).V.VisualId+1);break;default:;}if(!!(F=this.C1.Q,F[1].call(F[0])))A._GetAutoObject(
A.Device.Helper).A5h(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
Gender.Animal.Gender,(F=this.C1.Q,F[1].call(F[0])),this.C1.Ahu(),this.C1.Ahy());
},Anq:function(H){A._GetAutoObject(C.A1).Fl();},Bo8:function(s){this.Anq(s);},AwZ:
function(H){A._GetAutoObject(C.A1).BX(54);},Atj:function(E){if(this.Wt===E)return;
this.Wt=E;A.aat([this,this.AAH,this.Atj],0);},Iw:function(H){if(A._GetAutoObject(
A.Device.Helper).AkP())this.EF.W(true);else this.EF.W(false);if(A._GetAutoObject(
A.Device.Helper).A1m())this.GT.W(true);else this.GT.W(false);if(this.K9){this.C1.
W(false);this.BS.U(A.z2(A.abg.A0n));this.BS.AA8(A.zW(A.abi.Ac4));}else{this.C1.W(
true);this.BS.U(A.z2(A.abg.AiK));this.BS.AA8(null);}},Aw3:function(H){A._GetAutoObject(
A.Device.Helper).AQl(A._GetAutoObject(A.Device.Helper).V,A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.K9);},A9L:function(H){A.ow([this,this.A$t],this
);},A9G:function(H){A.ow([this,this.A$t],this);},A$t:function(H){var F,C$,RR;switch(
A._GetAutoObject(A.Device.Device).WeightRecordingScope){case 0:this.GT.AtN(A._GetAutoObject(
A.Device.Helper).AiO(A._GetAutoObject(A.Device.Helper).Ahw((F=this.Df.Q,F[1].call(
F[0]))),(C$=this.DZ.D2,C$[1].call(C$[0])),2,(RR=this.Df.Q,RR[1].call(RR[0]))));break;
case 2:this.GT.AtN(A._GetAutoObject(A.Device.Helper).AiO(this.PA,(F=this.DZ.D2,F[
1].call(F[0])),2,(C$=this.Df.Q,C$[1].call(C$[0]))));break;default:;}},Aw0:function(
H){var F;var As=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!As)return;switch(
As.Id){case 22:case 21:switch((F=this.Dl.Hn.GL,F[1].call(F[0]))){case 3:case 2:case
5:case 4:this.Pw(this.Dl);break;case 0:this.Pw(this.C1);break;case 1:this.Pw(this.
BS);break;default:throw new Error(Au8+(F=this.Dl.Hn.GL,F[1].call(F[0])).toFixed(
));}break;case 25:this.Pw(this.BS);break;case 43:this.Pw(this.C1);break;case 42:{
this.Pw(this.BS);if(As.PopupState===7)A.ow([this,this.Vs],this);}break;case 41:break;
default:A.aa8("%s%e",Au9,As.Id);}},Am5:function(H){var F;C.Hm.Am5.call(this,H);(
F=this.EF.Q,F[2].call(F[0],this.EF.AlC));this.GT.AtN(A._GetAutoObject(A.Device.Helper
).V.AiO(1));},AcR:function(E){if(this.K9===E)return;this.K9=E;A.aat([this,this.As4
,this.AcR],0);},Aq1:function(H){var F,C$,RR;this.AcR(((F=this.BS.Q,F[1].call(F[0
]))===(C$=this.C1.Q,C$[1].call(C$[0])))&&!!(RR=this.BS.Q,RR[1].call(RR[0])));A.ow([
this,this.Iw],this);},AAH:function(){return this.Wt;},As4:function(){return this.
K9;},_Init:function(aArg){C.Hm._Init.call(this,aArg);C.EaseOfDelivery._Init.call(
this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={I:this},0
);C.AsR._Init.call(this.BS={I:this},0);C.AfG._Init.call(this.C1={I:this},0);C.ACD.
_Init.call(this.Dl={I:this},0);C.AlA._Init.call(this.DZ={I:this},0);C.ApA._Init.
call(this.GT={I:this},0);C.B_._Init.call(this.GA={I:this},0);C.B_._Init.call(this.
K$={I:this},0);this.__proto__=C.Aow;var B;this.Dt(C.Azw);this.FD.G(Yh);this.BS.G(
AlX);this.BS.Aj(true);this.BS.U(A.z2(A.abg.AiK));this.BS.AoR(((A.z2(A.abg.Ok)+A.
z2(A.abg.Colon))+Cv)+A.z2(A.abg.Apw));this.BS.AoS(A.z2(A.abg.Ah3));this.C1.G(AlX
);this.C1.Aj(true);this.C1.U(A.z2(A.abg.ZU));this.C1.AtK(false);this.Dl.G(ATa);this.
Dl.Aj(true);this.Dl.U(A.z2(A.abg.Hs));this.Dl.Bu(0);this.DZ.G(Yh);this.DZ.Aj(true
);this.DZ.U(A.z2(A.abg.AnR));this.DZ.AOB(true);this.GT.G(Yh);this.GT.Aj(true);this.
GT.U(A.z2(A.abg.Wt));this.GT.Hw(1000);this.GT.FP(999000);this.GA.G(Yh);this.GA.Aj(
true);this.GA.U(A.z2(A.abg.AsT));this.K$.G(Yh);this.K$.Aj(true);this.K$.U(A.z2(A.
abg.Akl));this.J(this.BS,-2);this.J(this.C1,-2);this.J(this.Dl,-2);this.J(this.DZ
,-2);this.J(this.GT,-1);this.J(this.GA,0);this.J(this.K$,0);this.EaseOfDelivery.
NZ(A._GetAutoObject(A.Device.Helper).V);this.BirthType.NZ(A._GetAutoObject(A.Device.
Helper).V);this.BS.AR=[this,this.Vs];this.BS.M$([this,this.Vs]);this.BS.Na(A.zW(
A.abi.Ac4));this.BS.AF([B=A._GetAutoObject(A.Device.Helper).V,B.Ah7,B.Nc]);this.
BS.P2([B=A._GetAutoObject(A.Device.Device),B.Ah5,B.Ai2]);this.BS.Rq([B=A._GetAutoObject(
A.Device.Device),B.Ah6,B.Ai3]);this.BS.SS([B=A._GetAutoObject(A.Device.Device),B.
Ak8,B.Al7]);this.BS.AcR([this,this.As4,this.AcR]);this.C1.Hb([this,this.Es,this.
HU]);this.C1.M$([this,this.Vs]);this.C1.Na(A.zW(A.abi.Ac4));this.C1.UN([B=this.Gender.
Animal,B.Xu,B.J7]);this.C1.P2([B=A._GetAutoObject(A.Device.Device),B.Ah5,B.Ai2]);
this.C1.Rq([B=A._GetAutoObject(A.Device.Device),B.Ah6,B.Ai3]);this.C1.SS([B=A._GetAutoObject(
A.Device.Device),B.Ak8,B.Al7]);this.C1.AF([B=A._GetAutoObject(A.Device.Helper).V
,B.AoD,B.O2]);this.C1.Alb([B=this.AnimalType.Animal,B.O0,B.DO]);this.Dl.Hb([this
,this.Es,this.HU]);this.Dl.M$([B=this.Dl,B.Gy]);this.Dl.Na(A.zW(A.abi.Edit));this.
Dl.AF([B=A._GetAutoObject(A.Device.Helper).V,B.AoH,B.XE]);this.Dl.A3c(A._GetAutoObject(
A.Device.Helper).V);this.DZ.Hb([this,this.Es,this.HU]);this.DZ.M$([B=this.DZ,B.Gy
]);this.DZ.Na(A.zW(A.abi.Edit));this.DZ.AcV([B=A._GetAutoObject(A.Device.Helper).
V,B.AAI,B.AcO]);this.GT.AF([this,this.AAH,this.Atj]);this.GA.AF([B=this.BirthType
,B.Cz,B.CB]);this.GA.Dh(this.BirthType);this.K$.AF([B=this.EaseOfDelivery,B.Cz,B.
CB]);this.K$.Dh(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=
C.Hm;this.EaseOfDelivery._Done();this.BirthType._Done();this.BS._Done();this.C1.
_Done();this.Dl._Done();this.DZ._Done();this.GT._Done();this.GA._Done();this.K$.
_Done();C.Hm._Done.call(this);},_ReInit:function(){C.Hm._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.BS._ReInit();this.C1._ReInit(
);this.Dl._ReInit();this.DZ._ReInit();this.GT._ReInit();this.GA._ReInit();this.K$.
_ReInit();this.BS.U(A.z2(A.abg.AiK));this.BS.AoR(((A.z2(A.abg.Ok)+A.z2(A.abg.Colon
))+Cv)+A.z2(A.abg.Apw));this.BS.AoS(A.z2(A.abg.Ah3));this.C1.U(A.z2(A.abg.ZU));this.
Dl.U(A.z2(A.abg.Hs));this.DZ.U(A.z2(A.abg.AnR));this.GT.U(A.z2(A.abg.Wt));this.GA.
U(A.z2(A.abg.AsT));this.K$.U(A.z2(A.abg.Akl));},_Mark:function(D){var B;C.Hm._Mark.
call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.GA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K$
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.ADe={Hx:null,AfH:null,AeO:null,AfI:null,AeP:null,AnimalType:null,Background:
null,M9:null,Qf:null,T:null,Ss:null,WQ:null,ZC:null,OZ:null,Dk:A.jm,ACF:true,C3:
function(){this.Al();},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.AlK();this.
Auw();},AlK:function(){var F,C$;var KT=0;var Aj4=0;var Ajo=0;var HF=0;if((((!!this.
AfH&&!!this.AfI)&&!!this.AeO)&&!!this.AeP)&&!!this.AnimalType){Aj4=(F=this.AfH,F[
1].call(F[0]));Ajo=(F=this.AeO,F[1].call(F[0]));KT=A._GetAutoObject(A.Device.Helper
).L6((F=this.AfI,F[1].call(F[0])),(C$=this.AeP,C$[1].call(C$[0])));HF=(F=this.AnimalType
,F[1].call(F[0]));}var Kr=A.iF.Text;var A7J=A.iF.CP;if(!!KT){var AHj=A._GetAutoObject(
A.abk.Dv).Ajg(KT,Aj4,Ajo);A7J=A._GetAutoObject(A.abk.Dv).Awr(AHj,HF);Kr=A._GetAutoObject(
A.abk.Dv).Awt(AHj,HF);}this.Background.L(A7J);this.Ss.L(Kr);this.Qf.L(Kr);this.M9.
L(Kr);this.ZC.L(Kr);if(Kr===A.iF.Bg)this.WQ.L(Kr);else this.WQ.L(A.iF.CD);this.T.
L(Kr);this.OZ.L(Kr);},Auw:function(){var F,C$;var KT=0;var Aj4=0;var Ajo=0;if(((
!!this.AfH&&!!this.AfI)&&!!this.AeO)&&!!this.AeP){Aj4=(F=this.AfH,F[1].call(F[0]
));Ajo=(F=this.AeO,F[1].call(F[0]));KT=A._GetAutoObject(A.Device.Helper).L6((F=this.
AfI,F[1].call(F[0])),(C$=this.AeP,C$[1].call(C$[0])));}if(!!KT){var AHj=A._GetAutoObject(
A.abk.Dv).Ajg(KT,Aj4,Ajo);this.Qf.R(A._GetAutoObject(A.Device.Converter).Nl(AHj,
2,true));this.M9.W(true);this.Qf.W(true);this.OZ.W(false);}else{this.M9.W(false);
this.Qf.W(false);this.OZ.W(true);}this.Ss.R(this.BrG(Ajo-Aj4,KT));this.ZC.W(this.
ACF);this.WQ.W(this.ACF);this.M9.R(A._GetAutoObject(A.abk.Dv).Yx());},BrG:function(
AVB,Af0){var B;if(Af0<0){A.aa8("%s",ATb);return A.jm;}var HZ=(ATc+A._GetAutoObject(
A.abk.Dv).Aa$())+Cv;var Fk=A._GetAutoObject(A.Device.Converter).AlP(AVB);if(!AVB
)Fk=A.aaW(Fk,ATd,0);else if(AVB>0)Fk=A.aaW(Fk,AEg,0);HZ=this.A_O(HZ,ATe,Fk);if(Af0===
1)HZ=HZ+A.z2(A.abg.Bb9);else{HZ=HZ+A.z2(A.abg.Bb_);HZ=this.A_O(HZ,ATf,Af0.toFixed(
));}return HZ;},A_O:function(aString,A7i,Bp6){if(aString===A.jm){A.aa8("%s",ATg);
return A.jm;}var AXe=aString.indexOf(A7i,0);if(AXe>=0){aString=A.aa3(aString,AXe
,A7i.length);aString=A.aaW(aString,Bp6,AXe);}return aString;},AOH:function(E){if(
A.z_(this.AfH,E))return;if(!!this.AfH)A.zn([this,this.CY],this.AfH,0);this.AfH=E;
if(!!E)A.za([this,this.CY],E,0);if(!!E)A.ow([this,this.CY],this);},Bfe:function(
E){if(A.z_(this.AeO,E))return;if(!!this.AeO)A.zn([this,this.CY],this.AeO,0);this.
AeO=E;if(!!E)A.za([this,this.CY],E,0);if(!!E)A.ow([this,this.CY],this);},AOI:function(
E){if(A.z_(this.AfI,E))return;if(!!this.AfI)A.zn([this,this.CY],this.AfI,0);this.
AfI=E;if(!!E)A.za([this,this.CY],E,0);if(!!E)A.ow([this,this.CY],this);},Bff:function(
E){if(A.z_(this.AeP,E))return;if(!!this.AeP)A.zn([this,this.CY],this.AeP,0);this.
AeP=E;if(!!E)A.za([this,this.CY],E,0);if(!!E)A.ow([this,this.CY],this);},CY:function(
H){this.Al();},U:function(E){if(this.Dk===E)return;this.Dk=E;this.T.R(E);},A30:function(
E){if(this.ACF===E)return;this.ACF=E;this.Al();},DO:function(E){if(A.z_(this.AnimalType
,E))return;if(!!this.AnimalType)A.zn([this,this.CY],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.za([this,this.CY],E,0);if(!!E)A.ow([this,this.CY],this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);C.CH._Init.call(this.M9={I:this},0);A.abh.Text._Init.call(this.Qf={I:this},
0);C.CH._Init.call(this.T={I:this},0);C.CH._Init.call(this.Ss={I:this},0);A.abh.
Am._Init.call(this.WQ={I:this},0);A.abh.Am._Init.call(this.ZC={I:this},0);C.CH._Init.
call(this.OZ={I:this},0);this.__proto__=C.ADe;this.G(AdD);this.Background.AW(0x3F
);this.Background.G(AdD);this.M9.G(ATh);this.M9.R(A._GetAutoObject(A.abk.Dv).Yx(
));this.M9.A0(0x9);this.M9.L(A.iF.Text);this.Qf.G(ATi);this.Qf.A0(0x14);this.Qf.
R(A.z2(A.abv.Ah2));this.Qf.L(A.iF.Text);this.T.AW(0x1D);this.T.G(ATj);this.T.R(A.
z2(A.abg.Aru));this.T.A0(0x12);this.T.L(A.iF.Text);this.Ss.G(Yf);this.WQ.AW(0x14
);this.WQ.G(AEh);this.WQ.Cc(1);this.ZC.AW(0x14);this.ZC.G(AEh);this.ZC.Cc(0);this.
OZ.G(ATk);this.OZ.R(A.z2(A.abg.AYO));this.J(this.Background,0);this.J(this.M9,0);
this.J(this.Qf,0);this.J(this.T,0);this.J(this.Ss,0);this.J(this.WQ,0);this.J(this.
ZC,0);this.J(this.OZ,0);this.M9.Y(A.zW(A.eV.Gg));this.M9.Bz(A.zW(A.eV.Au));this.
M9.C7(A.zW(A.eV.K7));this.Qf.Y(A.zW(A.eV.Ab$));this.T.Y(A.zW(A.eV.Au));this.T.Bz(
A.zW(A.eV.AB));this.T.C7(A.zW(A.eV.Cq));this.Ss.Y(A.zW(A.eV.Au));this.Ss.Bz(A.zW(
A.eV.AB));this.Ss.C7(A.zW(A.eV.Cq));this.WQ.Ar(A.zW(A.abi.Ayd));this.ZC.Ar(A.zW(
A.abi.Ayd));this.Hx=A._NewObject(A.Device.Rating,0);this.OZ.Y(A.zW(A.eV.Au));this.
OZ.Bz(A.zW(A.eV.AB));this.OZ.C7(A.zW(A.eV.Cq));},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.M9._Done();this.Qf._Done();this.T._Done();
this.Ss._Done();this.WQ._Done();this.ZC._Done();this.OZ._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();
this.M9._ReInit();this.Qf._ReInit();this.T._ReInit();this.Ss._ReInit();this.WQ._ReInit(
);this.ZC._ReInit();this.OZ._ReInit();this.Qf.R(A.z2(A.abv.Ah2));this.T.R(A.z2(A.
abg.Aru));this.OZ.R(A.z2(A.abg.AYO));this.M9.Y(A.zW(A.eV.Gg));this.M9.Bz(A.zW(A.
eV.Au));this.M9.C7(A.zW(A.eV.K7));this.Qf.Y(A.zW(A.eV.Ab$));this.T.Y(A.zW(A.eV.Au
));this.T.Bz(A.zW(A.eV.AB));this.T.C7(A.zW(A.eV.Cq));this.Ss.Y(A.zW(A.eV.Au));this.
Ss.Bz(A.zW(A.eV.AB));this.Ss.C7(A.zW(A.eV.Cq));this.OZ.Y(A.zW(A.eV.Au));this.OZ.
Bz(A.zW(A.eV.AB));this.OZ.C7(A.zW(A.eV.Cq));this.C3();},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Hx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AfH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AeO)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AfI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AeP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.M9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qf)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ss).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.WQ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.ZC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OZ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainItem"};C.AQC={Animal:null,Rating:null,CF:
null,Av:null,AM:0,GD:function(H){var B;if(!this.Animal||!this.Rating)return;var Fw=
this.Av.ID;var Cj=(C.ADe.isPrototypeOf(B=this.Av.B4)?B:null);if(!Cj)return;Cj.DO([
B=this.Animal,B.O0,B.DO]);Cj.Bfe([B=A._GetAutoObject(A.Device.Device),B.AAS,B.AER
]);Cj.Bff([B=this.Rating,B.A2R,B.OnSetTimestamp]);switch(Fw%this.AM){case 1:{Cj.
AOH([B=this.Animal,B.A2y,B.ABn]);Cj.AOI([B=this.Animal,B.A2S,B.ABO]);Cj.U(A.z2(A.
abg.Aru));}break;default:if(this.Animal.Aon()){Cj.AOH([B=this.Animal,B.ANP,B.Att
]);Cj.AOI([B=this.Animal,B.AN6,B.AtR]);Cj.U(A.z2(A.abg.AHG));}else{Cj.AOH([B=this.
Animal,B.ANP,B.Att]);Cj.AOI([B=this.Animal,B.AN6,B.AtR]);Cj.U(A.z2(A.abg.A$L));}
}if(this.AM>1)Cj.A30(true);else Cj.A30(false);Cj.G(A.aaN(Cj.M,[(B=this.Av.M)[2]-
B[0],this.Av.Gj]));},DS:function(H){if(this.AM>0)switch(this.CF.CM){case 6:this.
CA(this);break;case 7:this.Cl(this);break;default:this.CF.PE=true;}},NZ:function(
E){if(this.Animal===E)return;this.Animal=E;if(!this.Animal)this.I0(0);else if(this.
Animal.TimestampLastWeighing===this.Animal.TimestampFirstWeighing)this.I0(1);else{
this.I0(2);this.Av.Gl(1);this.Av.IA(this.Av.FJ,true,null,null);}if(this.AM>0)this.
Av.ZE(0,this.AM-1);},Aii:function(E){if(this.Rating===E)return;this.Rating=E;if(
this.AM>0)this.Av.ZE(0,this.AM-1);},CA:function(H){if(this.Av.FJ>0)this.Av.Gl(this.
Av.FJ-1);else this.Av.Gl(this.AM-1);this.Av.IA(this.Av.FJ,true,null,null);},Cl:function(
H){if(this.Av.FJ<(this.AM-1))this.Av.Gl(this.Av.FJ+1);else this.Av.Gl(0);this.Av.
IA(this.Av.FJ,true,null,null);},I0:function(E){if(this.AM===E)return;this.AM=E;this.
Av.I0(this.AM);A.aat([this,this.AoE,this.I0],0);},AoE:function(){return this.AM;
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.B0._Init.call(this.
CF={I:this},0);A.Core.Cu._Init.call(this.Av={I:this},0);this.__proto__=C.AQC;this.
G(AdD);this.CF.Filter=147;this.Av.AW(0x3F);this.Av.G(AdD);this.Av.Nb(C.ADe);this.
Av.AcT(160);this.Av.Gl(0);this.Av.I0(2);this.J(this.Av,0);this.CF.B1=[this,this.
DS];this.CF.D_=[this,this.DS];this.Av.GD=[this,this.GD];},_Done:function(){this.
__proto__=A.Core.O;this.CF._Done();this.Av._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.CF._ReInit();this.Av._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.CF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainScrollList"};C.DV={Init:function(aArg){}
,Bh:function(aSize){C.B9.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.
M,aSize));this.T.G([0,aSize[1]-80,aSize[0],aSize[1]-40]);},Ai:function(Ae){var B;
C.B9.Ai.call(this,Ae);var FT=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);var Fu=
this.Bi.Bw;var Gb=A.iF.CD;var G1=A.iF.Text;if(this.GW){Gb=A.iF.CP;G1=A.iF.Text;}
if(!FT){this.Background.L(A.iF.CP);this.T.L(A.iF.CD);}else if(Fu){this.Background.
L(A.iF.A6);this.T.L(A.iF.Bg);}else if(Fv){this.Background.L(A.iF.A6);this.T.L(A.
iF.Bg);}else{this.Background.L(Gb);this.T.L(G1);}this.Lq=FT;this.Ko=Fv;this.QB=Fu;
},_Init:function(aArg){C.B9._Init.call(this,aArg);this.__proto__=C.DV;this.G(KM);
this.T.G(BI);this.XC(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AcD={K4:null,FZ:A.jm,Bh:function(aSize){C.DV.Bh.call(this,aSize);this.K4.G([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.DV.Ai.call(this,Ae);this.K4.
L(this.T.AV);},Init:function(aArg){},Z2:function(E){if(this.FZ===E)return;this.FZ=
E;this.K4.R(E);},_Init:function(aArg){C.DV._Init.call(this,aArg);C.CH._Init.call(
this.K4={I:this},0);this.__proto__=C.AcD;this.G(KM);this.Background.G(KM);this.T.
G(AaE);this.T.R(RP);this.K4.G(Kc);this.K4.R(ATl);this.J(this.K4,0);this.T.Y(A.zW(
A.eV.Au));this.T.Bz(A.zW(A.eV.AB));this.T.C7(null);this.K4.Y(A.zW(A.eV.Au));this.
K4.Bz(A.zW(A.eV.AB));this.Init(aArg);},_Done:function(){this.__proto__=C.DV;this.
K4._Done();C.DV._Done.call(this);},_ReInit:function(){C.DV._ReInit.call(this);this.
K4._ReInit();},_Mark:function(D){var B;C.DV._Mark.call(this,D);if((B=this.K4)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"};C.AsR={
AyD:null,Q:null,Fn:null,Fb:null,HM:null,K9:null,Am:null,El:null,AJL:A.jm,AJM:A.jm
,Bh:function(aSize){C.AcD.Bh.call(this,aSize);if(!this.AyD)this.K4.G([].concat(0
,this.K4.M.slice(1,4)));else this.K4.G([].concat(this.Am.M[2],this.K4.M.slice(1,
4)));},Ai:function(Ae){var F,C$,RR;C.AcD.Ai.call(this,Ae);var A7M=false;if(!!this.
Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Awn)this.Z2(this.AJL);else this.Z2(this.
AJM);}else{this.Z2(A._GetAutoObject(A.Device.Converter).U_((F=this.Q,F[1].call(F[
0]))));if((((!!this.HM&&!!this.Fn)&&!!this.Fb)&&!!this.K9)&&(((F=this.HM,F[1].call(
F[0]))===1)||(!(C$=this.HM,C$[1].call(C$[0]))&&(RR=this.K9,RR[1].call(RR[0])))))
A7M=true;}}this.El.W(A7M);this.Am.L(this.T.AV);A.ow([this,this.Ad5],this);},CY:function(
H){this.Al();},AF:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.
CY],this.Q,0);this.Q=E;if(!!E)A.za([this,this.CY],E,0);if(!!E)A.ow([this,this.CY
],this);},AA8:function(E){if(this.AyD===E)return;this.AyD=E;this.Am.Ar(E);this.Bcf(
);},P2:function(E){if(A.z_(this.Fn,E))return;if(!!this.Fn)A.zn([this,this.YJ],this.
Fn,0);this.Fn=E;if(!!E)A.za([this,this.YJ],E,0);if(!!E)A.ow([this,this.YJ],this);
},Rq:function(E){if(A.z_(this.Fb,E))return;if(!!this.Fb)A.zn([this,this.YK],this.
Fb,0);this.Fb=E;if(!!E)A.za([this,this.YK],E,0);if(!!E)A.ow([this,this.YK],this);
},YK:function(H){this.Al();},YJ:function(H){this.Al();},SS:function(E){if(A.z_(this.
HM,E))return;if(!!this.HM)A.zn([this,this.AjK],this.HM,0);this.HM=E;if(!!E)A.za([
this,this.AjK],E,0);if(!!E)A.ow([this,this.AjK],this);},AjK:function(H){this.Al(
);},Ad5:function(H){var F,C$;if((!this.HM||!this.Fn)||!this.Fb)return;var AW1=this.
K4.Alx([(this.K4.String.length-(F=this.Fb,F[1].call(F[0])))-(C$=this.Fn,C$[1].call(
C$[0])),0]);var AX7=this.K4.Alx([this.K4.String.length-(F=this.Fb,F[1].call(F[0]
)),0]);var AxH=this.K4.Dd(0x0);this.El.G([AW1[0]-1,AxH[1],AX7[0]+1,AxH[3]]);},AoR:
function(E){if(this.AJL===E)return;this.AJL=E;this.Al();},AoS:function(E){if(this.
AJM===E)return;this.AJM=E;this.Al();},AcR:function(E){if(A.z_(this.K9,E))return;
if(!!this.K9)A.zn([this,this.AXx],this.K9,0);this.K9=E;if(!!E)A.za([this,this.AXx
],E,0);if(!!E)A.ow([this,this.AXx],this);},AXx:function(H){this.Al();},_Init:function(
aArg){C.AcD._Init.call(this,aArg);A.abh.Am._Init.call(this.Am={I:this},0);A.abh.
CR._Init.call(this.El={I:this},0);this.__proto__=C.AsR;this.Am.G(Nq);this.El.G(ATm
);this.El.N5(2);this.El.L(A.iF.E1);this.J(this.Am,0);this.J(this.El,0);this.K4.Rr([
this,this.Ad5]);},_Done:function(){this.__proto__=C.AcD;this.Am._Done();this.El.
_Done();C.AcD._Done.call(this);},_ReInit:function(){C.AcD._ReInit.call(this);this.
Am._ReInit();this.El._ReInit();},_Mark:function(D){var B;C.AcD._Mark.call(this,D
);if((B=this.AyD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Fn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Fb)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.HM)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.K9)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.El)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"};C.SetTransponderScreen={
Ja:0,YF:4,A8W:false,A7U:true,A8P:false,AjQ:function(H){C.S1.AjQ.call(this,H);if(
A._GetAutoObject(A.Device.Helper).A8O()){this.Ja=A._GetAutoObject(A.Device.Helper
).S2.Id;var Agj=A._GetAutoObject(A.Device.Helper).AMI(this.Ja);if(Agj)A._GetAutoObject(
A.Device.Device).A_(25,true,A._GetAutoObject(A.Device.Converter).U_(this.Ja),0,[
this,this.AXB]);else{this.YF=A._GetAutoObject(A.Device.Helper).AMJ(this.Ja);var A9f=
false;if((this.YF===3)||(this.YF===2))A9f=A._GetAutoObject(A.Device.Helper).AMG(
this.Ja);if(A9f)A._GetAutoObject(A.Device.Device).A_(21,true,A._GetAutoObject(A.
Device.Converter).U_(this.Ja),0,null);else switch(this.YF){case 2:{var BJ=A._GetAutoObject(
A.Device.Converter).Aut(this.Ja);A._GetAutoObject(A.Device.Device).A_(46,true,BJ.
toFixed(),0,[this,this.AXB]);}break;case 3:case 1:case 0:case 4:this.A_5();break;
default:throw new Error(AEi+this.YF.toFixed());}}}},EY:function(H){A._GetAutoObject(
C.A1).Fl();},AES:function(s){this.EY(s);},A_5:function(){A._GetAutoObject(A.Device.
Helper).V.Nc(this.Ja);if((this.YF===3)||(this.YF===2)){if((this.A7U&&(A._GetAutoObject(
A.Device.Helper).V.NaisId>0))&&(A._GetAutoObject(A.Device.Helper).V.NaisId!==this.
Ja))A._GetAutoObject(A.Device.Device).A_(91,true,A.jm,0,[this,this.AXB]);else this.
A_3();}this.A8P=true;this.EY(this);},AXB:function(H){var As=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!!As)switch(As.Id){case 46:if(As.PopupState===4)this.
A_5();break;case 25:switch(As.PopupState){case 4:A._GetAutoObject(A.Device.Device
).Adg();break;case 5:this.EY(this);break;default:;}break;case 91:switch(As.PopupState
){case 7:this.A_3();break;case 8:this.EY(this);break;default:;}break;default:A.aa8(
"%s%e",AEj,As.Id);}},A_3:function(){A._GetAutoObject(A.Device.Helper).V.O2(this.
Ja);if(this.A8W&&(A._GetAutoObject(A.Device.Converter).AfQ(this.Ja)===10)){var A7w=
Math.trunc((this.Ja%1000000000000)/10000000000);if(!A7w&&(A._GetAutoObject(A.Device.
Helper).V.AnimalType===2))A._GetAutoObject(A.Device.Helper).V.DO(0);else if((A7w===
1)&&(A._GetAutoObject(A.Device.Helper).V.AnimalType!==2))A._GetAutoObject(A.Device.
Helper).V.DO(2);}},_Init:function(aArg){C.S1._Init.call(this,aArg);this.__proto__=
C.SetTransponderScreen;this.N.W(true);this.Dt(C.If);this.Number.R(A.z2(A.abg.O6)
);this.IK.G(ATn);this.In.G(Vh);this.Ail(1);this.N.CA=[this,this.AES];this.N.C8(A.
zW(A.abi.ET));},_className:"Application::SetTransponderScreen"};C.AzG={FE:null,La:
null,Lb:null,C3:function(){this.Al();},Init:function(aArg){this.Al();},Ai:function(
Ae){C.Ef.Ai.call(this,Ae);this.La.R(A._GetAutoObject(A.abk.Dv).Aa$());this.Lb.R(
A._GetAutoObject(A.abk.Dv).Yx());},_Init:function(aArg){C.Ef._Init.call(this,aArg
);A.abh.Text._Init.call(this.FE={I:this},0);A.abh.Text._Init.call(this.La={I:this
},0);A.abh.Text._Init.call(this.Lb={I:this},0);this.__proto__=C.AzG;this.Background.
L(A.iF.Text);this.FE.G(ATo);this.FE.A0(0x11);this.FE.R(A.z2(A.abg.Date));this.FE.
L(A.iF.Bg);this.La.G(ATp);this.La.A0(0x11);this.La.L(A.iF.Bg);this.Lb.G(ATq);this.
Lb.L(A.iF.Bg);this.J(this.FE,0);this.J(this.La,0);this.J(this.Lb,0);this.FE.Y(A.
zW(A.eV.Au));this.La.Y(A.zW(A.eV.Au));this.Lb.Y(A.zW(A.eV.Au));this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ef;this.FE._Done();this.La._Done();this.Lb._Done(
);C.Ef._Done.call(this);},_ReInit:function(){C.Ef._ReInit.call(this);this.FE._ReInit(
);this.La._ReInit();this.Lb._ReInit();this.FE.R(A.z2(A.abg.Date));this.FE.Y(A.zW(
A.eV.Au));this.La.Y(A.zW(A.eV.Au));this.Lb.Y(A.zW(A.eV.Au));this.C3();},_Mark:function(
D){var B;C.Ef._Mark.call(this,D);if((B=this.FE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.La)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lb)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineWeights"};C.ADi={LD:null,Hc:null,Im:null,AP:
null,A4:null,Fk:0,HF:0,Agw:false,Init:function(aArg){},Bh:function(aSize){C.A$.Bh.
call(this,aSize);this.Background.G(A.aaQ(this.Background.M,((aSize[0]*65)/100)|0
));this.T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AP.G([this.T.M[2]-1,0,this.
T.M[2]+1,aSize[1]]);this.Hc.G([this.T.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.
A4.G([this.Hc.M[2]-1,0,this.Hc.M[2]+1,aSize[1]]);this.LD.G([this.Background.M[2]
,0,aSize[0],aSize[1]]);this.Im.G(this.LD.M);},Ai:function(Ae){C.A$.Ai.call(this,
Ae);if(this.Agw){this.Im.R(Qj);this.Im.L(A.iF.Text);this.LD.L(this.Background.AV
);}else{this.Im.R(A._GetAutoObject(A.Device.Converter).Nl(this.Fk,2,true));this.
Im.L(A._GetAutoObject(A.abk.Dv).Awt(this.Fk,this.HF));this.LD.L(A._GetAutoObject(
A.abk.Dv).Awr(this.Fk,this.HF));}this.Hc.L(this.T.AV);},B7:function(Z){if(!this.
AZ)return;this.Hl=Z;if(!!this.AZ){var Ajk=this.AZ.Hr(Z,6);var AjW=this.AZ.Cp(Z,8
);if(this.Hl>0){var Brb=this.AZ.Hr(this.Hl-1,6);var BtE=this.AZ.Cp(this.Hl-1,8);
var KT=A._GetAutoObject(A.Device.Helper).L6(Brb,Ajk);if(!!KT){this.Agw=false;this.
Fk=A._GetAutoObject(A.abk.Dv).Ajg(KT,BtE,AjW);}else{this.Agw=true;this.Fk=0;}}else{
this.Agw=true;this.Fk=0;}this.U(A._GetAutoObject(A.abk.K5).AKe(Ajk));this.Hc.R(A.
_GetAutoObject(A.Device.Converter).AlP(AjW));this.HF=A._GetAutoObject(A.Device.Helper
).V.AnimalType;this.Al();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.abh.
AH._Init.call(this.LD={I:this},0);A.abh.Text._Init.call(this.Hc={I:this},0);A.abh.
Text._Init.call(this.Im={I:this},0);A.abh.AH._Init.call(this.AP={I:this},0);A.abh.
AH._Init.call(this.A4={I:this},0);this.__proto__=C.ADi;this.T.G(AdC);this.LD.G(Ap$
);this.Hc.G(AEk);this.Hc.A0(0x12);this.Hc.R(Kb);this.Hc.L(A.iF.Text);this.Im.G(AEl
);this.Im.R(Kb);this.Im.L(A.iF.Text);this.AP.G(AlZ);this.AP.L(A.iF.A7);this.A4.G(
Al0);this.A4.L(A.iF.A7);this.J(this.LD,0);this.J(this.Hc,0);this.J(this.Im,0);this.
J(this.AP,0);this.J(this.A4,0);this.Hc.Y(A.zW(A.eV.Au));this.Im.Y(A.zW(A.eV.Au));
this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.LD._Done();this.Hc._Done(
);this.Im._Done();this.AP._Done();this.A4._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.LD._ReInit();this.Hc._ReInit();this.Im._ReInit(
);this.AP._ReInit();this.A4._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(
this,D);if((B=this.LD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hc)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bf:null,Ue:null,AfP:null,RF:null
,J5:A.jm,C3:function(){this.Al();},Ai:function(Ae){C.Aw.Ai.call(this,Ae);var KT=
A._GetAutoObject(A.Device.Helper).L6(A._GetAutoObject(A.Device.Helper).V.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).V.TimestampLastWeighing);if(!!KT){var Fk=A._GetAutoObject(
A.abk.Dv).Ajg(KT,A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).V.LastBodyWeight);var Abw=A.z2(A.abg.A$8);Abw=A._GetAutoObject(
A.Device.Helper).Nh(Abw,Qi,A._GetAutoObject(A.Device.Converter).Nl(Fk,2,true));Abw=
A._GetAutoObject(A.Device.Helper).Nh(Abw,AuS,A._GetAutoObject(A.abk.Dv).Yx());this.
RF.R(Abw);this.AfP.L(A._GetAutoObject(A.abk.Dv).Awr(Fk,A._GetAutoObject(A.Device.
Helper).V.AnimalType));this.RF.L(A._GetAutoObject(A.abk.Dv).Awt(Fk,A._GetAutoObject(
A.Device.Helper).V.AnimalType));}else{this.RF.R(A.z2(A.abg.A5m));this.AfP.L(A.iF.
AMy);this.RF.L(A.iF.Text);}},CE:function(H){var EZ=A._NewObject(A.Device.Filter,
0);var Hh=A._NewObject(A.Device.Int32FilterCriterion,0);Hh.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).V.Id,true);EZ.CO(Hh);var AaW=A._NewObject(A.Device.Int32FilterCriterion
,0);AaW.Initialize(8,2,0,true);EZ.CO(AaW);A._GetAutoObject(A.Device.Device).Bt.Bo(
EZ);this.Aue(this);},Fc:function(H){A._GetAutoObject(A.Device.Device).Bt.Bo(null
);},Aue:function(H){this.Bf=A._NewObject(C.Fs,0);this.Bf.Nb(C.ADi);this.Bf.G(Au3
);this.Bf.Xz(A._GetAutoObject(A.Device.Device).Bt);this.Bf.Et(this.J5);this.J(this.
Bf,0);this.A8(this.Bf);},Ak7:function(H){A._GetAutoObject(C.A1).Fl();},Et:function(
E){if(this.J5===E)return;this.J5=E;if(!!this.Bf)this.Bf.Et(E);},_Init:function(aArg
){C.Aw._Init.call(this,aArg);C.AzG._Init.call(this.Ue={I:this},0);A.abh.AH._Init.
call(this.AfP={I:this},0);A.abh.Text._Init.call(this.RF={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.G(B3);this.N.W(true);this.Dt(C.If);this.Ue.G(
RQ);this.J5=A.z2(A.abg.Aoy);this.AfP.AW(0x1D);this.AfP.G(Kc);this.RF.AW(0x1D);this.
RF.G(Kc);this.RF.A0(0x12);this.RF.R(Kb);this.J(this.Ue,0);this.J(this.AfP,0);this.
J(this.RF,0);this.N.CA=[this,this.Ak7];this.N.C8(A.zW(A.abi.ET));this.RF.Y(A.zW(
A.eV.Au));},_Done:function(){this.__proto__=C.Aw;this.Ue._Done();this.AfP._Done(
);this.RF._Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this
);this.Ue._ReInit();this.AfP._ReInit();this.RF._ReInit();this.Et(A.z2(A.abg.Aoy)
);this.RF.Y(A.zW(A.eV.Au));this.C3();},_Mark:function(D){var B;C.Aw._Mark.call(this
,D);if((B=this.Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ue)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.AfP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RF)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.Lz={DJ:null
,Aan:null,AM7:11,Gn:0,AY6:true,Ayk:false,JC:function(H){if(A._GetAutoObject(A.Device.
Device).Aq.Cd()>0)this.I1(4);else A._GetAutoObject(A.Device.Device).A_(30,true,A.
jm,0,null);},CE:function(H){if(this.DJ.Awz())this.DJ.AaV();else if((this.Gn===2)&&
A._GetAutoObject(A.Device.Helper).V.An9())this.I1(5);else this.I1(1);},Fc:function(
H){this.AG0();},EY:function(H){this.I1(0);A._GetAutoObject(C.A1).Fl();},Bub:function(
){A._GetAutoObject(A.Device.Device).Adg();},AG0:function(){A._GetAutoObject(A.Device.
Device).AlD();},A3f:function(E){if(this.Ayk===E)return;this.Ayk=E;A.aat([this,this.
BdD,this.A3f],0);},I1:function(E){var B;if(this.Gn===E)return;this.Gn=E;switch(E
){case 1:{A._GetAutoObject(A.Device.Helper).Aiv();A.za([this,this.AGv],[B=A._GetAutoObject(
A.Device.Helper),B.AoF,B.Aij],0);A.zn([this,this.AwX],[B=this.DJ,B.Ala,B.I1],0);
this.Bub();}break;case 3:{A.zn([this,this.AGv],[B=A._GetAutoObject(A.Device.Helper
),B.AoF,B.Aij],0);this.AG0();this.Bsj();}break;case 2:{A._GetAutoObject(A.Device.
Helper).Apr();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&this.AY6
)this.Bt2();else this.Bt5();}break;case 4:{A.zn([this,this.AGv],[B=A._GetAutoObject(
A.Device.Helper),B.AoF,B.Aij],0);this.AG0();A._GetAutoObject(A.Device.Helper).Apr(
);A.za([this,this.A9W],[B=A._GetAutoObject(A.Device.Device),B.AAP,B.AEO],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.AM7);}break;case 5:this.A_$();break;case
6:{A.za([this,this.AwX],[B=this.DJ,B.Ala,B.I1],0);this.DJ.AaV();}break;case 0:{A.
zn([this,this.AGv],[B=A._GetAutoObject(A.Device.Helper),B.AoF,B.Aij],0);this.AG0(
);}break;default:throw new Error(Au_);}A.aat([this,this.Ala,this.BoX],0);},BoX:function(
Ao){this.I1(Ao);},AGv:function(H){if(!!A._GetAutoObject(A.Device.Helper).S2){if(
this.Gn===1)this.I1(3);else A.aa8("%s%e",ATr,this.Gn);}else A.aa8("%s",AEm);},Bt2:
function(){A._GetAutoObject(A.Device.Device).A_(13,true,A._GetAutoObject(A.Device.
Helper).AlI(A._GetAutoObject(A.Device.Helper).S2.Id).toFixed(),0,[this,this.Bsw]
);},Bsw:function(H){var As=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!
As&&((As.PopupState===4)||(As.PopupState===3))){if(this.A7X(false))A._GetAutoObject(
C.A1).BX(30);else{A._GetAutoObject(A.Device.Helper).Aiv();this.I1(1);}}else if(!
!As&&(As.PopupState===5)){A._GetAutoObject(A.Device.Helper).Aiv();this.I1(1);}},
A7X:function(Anp){var B;if(A._GetAutoObject(A.Device.Device).Aq.Mp()){A._GetAutoObject(
A.Device.Device).A_(41,true,A._GetAutoObject(A.Device.Device).Aq.Ie().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).V.GC();A._GetAutoObject(
A.Device.Helper).Ax$(A._GetAutoObject(A.Device.Helper).V);A._GetAutoObject(A.Device.
Helper).V.Nc(A._GetAutoObject(A.Device.Helper).S2.Id);if(!!A._GetAutoObject(A.Device.
Helper).AfC){var Ajv=A._GetAutoObject(A.Device.Helper).AfC.AKx();A._GetAutoObject(
A.Device.Helper).V.Z4(Ajv);A._GetAutoObject(A.Device.Helper).V.Alh(Ajv);}if(A._GetAutoObject(
A.Device.Helper).AMJ(A._GetAutoObject(A.Device.Helper).V.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).V.O2(A._GetAutoObject(A.Device.Helper).V.TransponderId);A._GetAutoObject(
A.Device.Helper).V.XE(A._GetAutoObject(A.Device.Helper).A$U(A._GetAutoObject(A.Device.
Device).Aev,A._GetAutoObject(A.Device.Helper).V));if(Anp){A._GetAutoObject(A.Device.
Helper).V.Cr(A._GetAutoObject(A.Device.Device).Aq);var Oi=A._GetAutoObject(A.Device.
Device).Aq.LL(0,A._GetAutoObject(A.Device.Helper).V.Id);A._GetAutoObject(A.Device.
Device).UV(Oi);if(A._GetAutoObject(A.Device.Helper).AkP()){if(A._GetAutoObject(A.
Device.Device).Bt.Mp())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bt.Ie().toFixed(),0,null);else{var B$=A._NewObject(A.Device.Rating
,0);B$.GC();B$.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.Id);B$.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Ahw(A._GetAutoObject(A.Device.Helper).V.AnimalType
));B$.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).V.DateOfBirth);B$.Cr(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).Aev){var Ir=null;var
RZ=0;if(!A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode){Ir=[B=A._GetAutoObject(
A.Device.Device),B.Ak_,B.Al8];RZ=A._GetAutoObject(A.Device.Device).ArX;}else switch(
A._GetAutoObject(A.Device.Helper).V.Gender){case 1:{Ir=[B=A._GetAutoObject(A.Device.
Device),B.As2,B.Avm];RZ=A._GetAutoObject(A.Device.Device).AyV;}break;case 0:{Ir=[
B=A._GetAutoObject(A.Device.Device),B.As3,B.Avn];RZ=A._GetAutoObject(A.Device.Device
).AyW;}break;case 2:{Ir=[B=A._GetAutoObject(A.Device.Device),B.Ak_,B.Al8];RZ=A._GetAutoObject(
A.Device.Device).ArX;}break;default:;}if(!!Ir)switch(RZ){case 1:Ir[2].call(Ir[0]
,A._GetAutoObject(A.Device.Helper).V.VisualId-1);break;case 0:Ir[2].call(Ir[0],A.
_GetAutoObject(A.Device.Helper).V.VisualId+1);break;default:;}}}return true;},Bsj:
function(){if(!!A._GetAutoObject(A.Device.Helper).S2){var AFp=true;if(A._GetAutoObject(
A.Device.Helper).S2.Id!==A._GetAutoObject(A.Device.Helper).V.TransponderId){AFp=
A._GetAutoObject(A.Device.Helper).A1w(A._GetAutoObject(A.Device.Helper).S2.Id);if(
!AFp&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===1)){this.A7X(true
);AFp=A._GetAutoObject(A.Device.Helper).A1w(A._GetAutoObject(A.Device.Helper).S2.
Id);}}if(AFp)this.I1(5);else this.I1(2);}else{A.aa8("%s",AEm);return;}},A9W:function(
H){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu!==this.AM7){A.zn([this
,this.A9W],[B=A._GetAutoObject(A.Device.Device),B.AAP,B.AEO],0);if(A._GetAutoObject(
A.Device.Helper).V.An9())this.I1(5);else this.I1(1);}},A_$:function(){if(this.Ayk===
true)this.I1(6);else A._GetAutoObject(C.A1).BX(24);},Bt5:function(){A._GetAutoObject(
A.Device.Device).A_(36,true,A.jm,0,[this,this.Btl]);},Btl:function(H){var As=(A.
Device.PopupContext.isPrototypeOf(H)?H:null);if(!!As&&((As.PopupState===4)||(As.
PopupState===3))){A._GetAutoObject(A.Device.Helper).Aiv();this.I1(1);}},AwX:function(
H){if(!this.DJ.Gn)this.I1(1);},AXr:function(H){},Bo6:function(s){this.AXr(s);},BdD:
function(){return this.Ayk;},Ala:function(){return this.Gn;},_Init:function(aArg
){C.S1._Init.call(this,aArg);A.abh.Text._Init.call(this.Aan={I:this},0);this.__proto__=
C.Lz;this.N.W(true);this.Dt(C.An_);this.Number.G(ATs);this.Number.R(A.z2(A.abg.A4I
));this.IK.G(ATt);this.In.G(ATu);this.Aan.G(ATv);this.Aan.R(ATw);this.Aan.L(A.iF.
Text);this.J(this.Aan,0);this.N.CA=[this,this.EY];this.N.Cg=[this,this.Bo6];this.
N.C8(A.zW(A.abi.ET));this.Number.Y(A.zW(A.eV.Au));this.Aan.Y(A.zW(A.eV.LN));this.
DJ=A._GetAutoObject(C.DJ);},_Done:function(){this.__proto__=C.S1;this.Aan._Done(
);C.S1._Done.call(this);},_ReInit:function(){C.S1._ReInit.call(this);this.Aan._ReInit(
);this.Number.R(A.z2(A.abg.A4I));this.Number.Y(A.zW(A.eV.Au));},_Mark:function(D
){var B;C.S1._Mark.call(this,D);if((B=this.DJ)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Aan)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionScanScreen"
};C.AYS={AutoActions:null,ActionToString:null,AnimalTypeToString:null,AmD:-1,Gn:
0,Bqt:function(){var A_P=false;var NC=A._GetAutoObject(A.Device.Helper).V.IsAlarm;
if(A._GetAutoObject(A.Device.Device).Bt.Mp())A._GetAutoObject(A.Device.Device).A_(
50,true,A._GetAutoObject(A.Device.Device).Bt.Ie().toFixed(),0,null);else if(NC){
A_P=true;var B$=A._NewObject(A.Device.Rating,0);B$.GC();B$.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).V.Id);A._GetAutoObject(A.Device.Helper).At$(B$,5);B$.OnSetAppearance(
3);B$.Cr(A._GetAutoObject(A.Device.Device).Bt);}else{var B$=A._NewObject(A.Device.
Rating,0);B$.GC();B$.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.Id);A._GetAutoObject(
A.Device.Helper).At$(B$,5);B$.OnSetAppearance(1);B$.Cr(A._GetAutoObject(A.Device.
Device).Bt);}A._GetAutoObject(A.Device.Helper).V.Fo(A._GetAutoObject(A.Device.Helper
).V.Ct,A._GetAutoObject(A.Device.Device).Aq);if(A_P)A._GetAutoObject(A.Device.Helper
).V.ST(false);if(NC)A._GetAutoObject(A.Device.Helper).V.Alz(false);else A._GetAutoObject(
A.Device.Helper).V.Alz(true);A._GetAutoObject(A.Device.Helper).V.Cr(A._GetAutoObject(
A.Device.Device).Aq);if(A._GetAutoObject(A.Device.Helper).V.IsAlarm)A._GetAutoObject(
A.Device.Device).A_(17,true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(
),2000,[this,this.NF]);else A._GetAutoObject(A.Device.Device).A_(18,true,A._GetAutoObject(
A.Device.Helper).V.VisualId.toFixed(),2000,[this,this.NF]);},Bqv:function(){A._GetAutoObject(
A.Device.Helper).V.ACA(!A._GetAutoObject(A.Device.Helper).V.IsWatch);A._GetAutoObject(
A.Device.Helper).V.Cr(A._GetAutoObject(A.Device.Device).Aq);if(A._GetAutoObject(
A.Device.Helper).V.IsWatch)A._GetAutoObject(A.Device.Device).A_(19,true,A._GetAutoObject(
A.Device.Helper).V.VisualId.toFixed(),2000,[this,this.NF]);else A._GetAutoObject(
A.Device.Device).A_(20,true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(
),2000,[this,this.NF]);},R0:function(Jr){switch(Jr){case 4:this.Bqt();break;case
128:A._GetAutoObject(C.A1).BX(7);break;case 16:A._GetAutoObject(C.A1).BX(35);break;
case 1:A._GetAutoObject(C.A1).BX(10);break;case 2:A._GetAutoObject(C.A1).BX(11);
break;case 8:this.Bqv();break;case 64:A._GetAutoObject(C.A1).BX(28);break;case 32:
A._GetAutoObject(C.A1).BX(53);break;case 256:A._GetAutoObject(C.A1).BX(21);break;
case 512:A._GetAutoObject(C.A1).BX(29);break;case 1024:this.Bsh();break;case 262144:
this.Bun();break;case 2048:this.AaV();break;case 4096:this.A7P(false);break;case
8192:this.Bqu();break;case 16384:this.Bsg();break;case 32768:this.BqU();break;case
65536:this.Bre();break;case 131072:this.BtW();break;case 0:break;default:throw new
Error(ATx);}},A7Z:function(Jr,BpZ){var Ep=A._NewObject(C.UC,0);Ep.Z1(false);Ep.Aj(
true);Ep.AR=BpZ;Ep.BeJ(Jr);switch(Jr){case 1:{Ep.U(A.z2(A.abg.AfK));Ep.Dx(A.zW(A.
abi.AHw));}break;case 2:{Ep.U(A.z2(A.abg.A4s));Ep.Dx(A.zW(A.abi.AHx));}break;case
4:{Ep.U(A.z2(A.abg.Alarm));Ep.Dx(A.zW(A.abi.AHy));Ep.ABD(true);}break;case 8:{Ep.
U(A.z2(A.abg.Apg));Ep.Dx(A.zW(A.abi.AHz));Ep.ABD(true);}break;case 16:{Ep.U(A.z2(
A.abg.AH4));Ep.Dx(A.zW(A.abi.AHA));}break;case 32:{Ep.U(A.z2(A.abg.AnimalLoss));
Ep.Dx(A.zW(A.abi.AHB));}break;case 64:{Ep.U(A.z2(A.abg.Unregister));Ep.Dx(A.zW(A.
abi.AHC));}break;case 128:{Ep.U(A.z2(A.abg.Edit));Ep.Dx(A.zW(A.abi.AHD));}break;
case 256:{Ep.U(A.z2(A.abg.Weighing));Ep.Dx(A._GetAutoObject(A.abk.Dv).BrV());}break;
case 512:{Ep.U(A.z2(A.abg.ANp));Ep.Dx(A.zW(A.abi.AHo));}break;case 1024:{Ep.U(A.
z2(A.abg.LinkTransponder));Ep.Dx(A.zW(A.abi.AHp));}break;case 262144:{Ep.U(A.z2(
A.abg.UnlinkTransponder));Ep.Dx(A.zW(A.abi.AHv));}break;case 2048:{Ep.U(A.z2(A.abg.
Ox));Ep.Dx(A.zW(A.abi.AHq));}break;case 4096:{Ep.U(A.z2(A.abg.Calving));Ep.Dx(A.
zW(A.abi.AHr));}break;case 8192:{Ep.U(A.z2(A.abg.DryOff));Ep.Dx(A.zW(A.abi.AHs));
Ep.ABD(true);}break;case 16384:{Ep.U(A.z2(A.abg.Bbd));Ep.Dx(A.zW(A.abi.AHt));}break;
case 131072:{Ep.U(A.z2(A.abg.Bhx));Ep.Dx(A.zW(A.abi.AHu));}break;default:A.aa8("%s"
,(ATy+Jr.toFixed())+ATz);}return Ep;},Brr:function(){this.AmD=this.AmD+1;if(this.
AmD>=this.AutoActions.Ahx())this.I1(0);else this.I1(2);},BtI:function(){this.AmD=-
1;},Awz:function(){return(this.AmD>-1)&&!this.Bsa();},Bsa:function(){return this.
AmD>=this.AutoActions.Ahx();},I1:function(E){if(this.Gn===E)return;this.Gn=E;switch(
E){case 1:this.Brr();break;case 2:{var Yn=this.AutoActions.Acb(this.AmD);if(this.
AYP(A._GetAutoObject(A.Device.Helper).V,Yn))this.R0(Yn);else A._GetAutoObject(A.
Device.Device).A_(64,true,(this.ActionToString.KL(Yn)+Ap9)+this.AnimalTypeToString.
KL(A._GetAutoObject(A.Device.Helper).V.AnimalType),0,[this,this.NF]);}break;case
0:this.BtI();break;default:throw new Error(Au_);}A.aat([this,this.Ala,this.I1],0
);},NF:function(H){var As=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!As&&((
As.Id===63)&&(As.PopupState===7)))this.A7P(true);if((!!As&&(((As.PopupState===4)||(
As.PopupState===3))||(As.PopupState===8)))&&this.Awz())this.I1(1);},A7S:function(
){return!!A._GetAutoObject(A.Device.Helper).V&&(A._GetAutoObject(A.Device.Device
).Aq.LL(0,A._GetAutoObject(A.Device.Helper).V.Id)>=0);},Bsh:function(){if(!A._GetAutoObject(
A.Device.Helper).V.TransponderId)A._GetAutoObject(C.A1).BX(49);else A._GetAutoObject(
A.Device.Device).A_(32,true,A.jm,0,[this,this.NF]);},AaV:function(){this.I1(1);}
,BtG:function(){var NC=A._GetAutoObject(A.Device.Helper).V.IsAlarm;if(NC&&(!!A._GetAutoObject(
A.Device.Helper).V.WorstAssessment&&(A._GetAutoObject(A.Device.Helper).V.WorstAssessment
!==5))){if(A._GetAutoObject(A.Device.Device).Bt.Mp())A._GetAutoObject(A.Device.Device
).A_(50,true,A._GetAutoObject(A.Device.Device).Bt.Ie().toFixed(),0,null);else{var
B$=A._NewObject(A.Device.Rating,0);B$.GC();B$.OnSetAnimalId(A._GetAutoObject(A.Device.
Helper).V.Id);A._GetAutoObject(A.Device.Helper).At$(B$,5);B$.Cr(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Helper).V.Fo(A._GetAutoObject(A.
Device.Helper).V.Ct,A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(A.Device.
Helper).V.ST(false);if(NC)A._GetAutoObject(A.Device.Helper).V.Alz(false);A._GetAutoObject(
A.Device.Helper).V.Cr(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(A.Device.
Device).A_(18,true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(),2000,[
this,this.NF]);},BtH:function(){A._GetAutoObject(A.Device.Helper).V.ACA(false);A.
_GetAutoObject(A.Device.Helper).V.Cr(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(
A.Device.Device).A_(20,true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(
),2000,[this,this.NF]);},A7P:function(Bru){if(!A._GetAutoObject(A.Device.Helper).
V.NaisId&&(Bru===false))A._GetAutoObject(A.Device.Device).A_(63,true,A.jm,0,[this
,this.NF]);else A._GetAutoObject(C.A1).BX(62);},Bqu:function(){A._GetAutoObject(
A.Device.Helper).V.Ao2(!A._GetAutoObject(A.Device.Helper).V.IsDry);A._GetAutoObject(
A.Device.Helper).V.Cr(A._GetAutoObject(A.Device.Device).Aq);if(A._GetAutoObject(
A.Device.Helper).V.IsDry)A._GetAutoObject(A.Device.Device).A_(54,true,A._GetAutoObject(
A.Device.Helper).V.VisualId.toFixed(),2000,[this,this.NF]);else A._GetAutoObject(
A.Device.Device).A_(55,true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(
),2000,[this,this.NF]);},Bsg:function(){if(!A._GetAutoObject(A.Device.Helper).V.
NaisId)A._GetAutoObject(C.A1).BX(92);else A._GetAutoObject(A.Device.Device).A_(69
,true,A.jm,0,[this,this.NF]);},BqU:function(){if(A._GetAutoObject(A.Device.Helper
).V.IsBirthAnnouncementPending){if(A._GetAutoObject(A.Device.Helper).AhM(A._GetAutoObject(
A.Device.Helper).V.WhereAbouts)){A._GetAutoObject(A.Device.Helper).V.Afp(false);
A._GetAutoObject(A.Device.Helper).V.Cr(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(
A.Device.Device).A_(65,true,A.jm,2000,[this,this.NF]);}else{A._GetAutoObject(A.Device.
Helper).V.Alg(false);A._GetAutoObject(A.Device.Helper).V.Cr(A._GetAutoObject(A.Device.
Device).Aq);A._GetAutoObject(A.Device.Device).A_(60,true,A._GetAutoObject(A.Device.
Helper).V.VisualId.toFixed(),2000,[this,this.NF]);}}},Bre:function(){A._GetAutoObject(
A.Device.Helper).V.Afp(false);A._GetAutoObject(A.Device.Helper).V.Cr(A._GetAutoObject(
A.Device.Device).Aq);if(A._GetAutoObject(A.Device.Helper).V.IsBirthAnnouncementPending
){if(A._GetAutoObject(A.Device.Helper).AhM(A._GetAutoObject(A.Device.Helper).V.WhereAbouts
)){A._GetAutoObject(A.Device.Helper).V.Afp(false);A._GetAutoObject(A.Device.Helper
).V.Cr(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(A.Device.Device).A_(
65,true,A.jm,2000,[this,this.NF]);}else A._GetAutoObject(A.Device.Device).A_(61,
true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(),2000,[this,this.NF]);
}},AYP:function(GI,Jr){var HK=false;switch(Jr){case 4:HK=true;break;case 32:HK=true;
break;case 2048:HK=true;break;case 4096:switch(GI.AnimalType){case 1:HK=true;break;
default:;}break;case 32768:HK=GI.IsBirthAnnouncementPending;break;case 65536:HK=
true;break;case 8192:switch(GI.AnimalType){case 1:HK=true;break;default:;}break;
case 128:HK=true;break;case 512:switch(GI.AnimalType){case 0:HK=true;break;default:;
}break;case 16:HK=true;break;case 16384:HK=true;break;case 1024:HK=true;break;case
262144:HK=true;break;case 2:HK=true;break;case 1:HK=true;break;case 8:HK=true;break;
case 0:break;case 64:HK=true;break;case 256:HK=true;break;case 131072:HK=true;break;
default:A.aa8("%s",ATA+Jr.toFixed());}return HK;},BtW:function(){if(!A._GetAutoObject(
A.Device.Helper).V.NaisId)A._GetAutoObject(C.A1).BX(91);else A._GetAutoObject(A.
Device.Device).A_(69,true,A.jm,0,[this,this.NF]);},Bun:function(){if(!A._GetAutoObject(
A.Device.Helper).V.TransponderId)A._GetAutoObject(A.Device.Device).A_(85,true,A.
_GetAutoObject(A.Device.Helper).V.VisualId.toFixed(),0,[this,this.NF]);else{A._GetAutoObject(
A.Device.Helper).V.Nc(0);A._GetAutoObject(A.Device.Helper).V.Cr(A._GetAutoObject(
A.Device.Device).Aq);A._GetAutoObject(A.Device.Device).A_(86,true,A._GetAutoObject(
A.Device.Helper).V.VisualId.toFixed(),2000,[this,this.NF]);}},Ala:function(){return this.
Gn;},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this
},0);this.__proto__=C.AYS;this.AutoActions=A._GetAutoObject(C.AutoActions);A.hJ++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.hJ--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AHI={Y2:null,AnF:null,I1:function(E){if(this.Gn===E)return;C.Lz.I1.call(this
,E);switch(E){case 1:this.Dt(C.An_);break;case 5:case 6:this.Dt(C.If);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Au_);}},AXr:function(H){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Lz._Init.call(this
,aArg);A.abh.Text._Init.call(this.Y2={I:this},0);C.AHJ._Init.call(this.AnF={I:this
},0);this.__proto__=C.AHI;this.A3f(true);this.Y2.G(ATB);this.Y2.R(A.z2(A.abg.Ox)
);this.Y2.L(A.iF.Text);this.AnF.G(ATC);this.J(this.Y2,0);this.J(this.AnF,0);this.
N.Cm(A.zW(A.abi.AhE));this.Y2.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=
C.Lz;this.Y2._Done();this.AnF._Done();C.Lz._Done.call(this);},_ReInit:function(){
C.Lz._ReInit.call(this);this.Y2._ReInit();this.AnF._ReInit();this.Y2.R(A.z2(A.abg.
Ox));this.Y2.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.Lz._Mark.call(this,D);
if((B=this.Y2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnF)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
Iq:null,Jp:null,AXr:function(H){if(this.Iq.AkO(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.Lz._Init.call(this,aArg);A.abh.Text._Init.call(this.
Jp={I:this},0);this.__proto__=C.ManualActionScanScreen;this.Jp.G(ATD);this.Jp.KF(
true);this.Jp.R(((A.z2(A.abg.Ok)+A.z2(A.abg.Colon))+Cv)+A.z2(A.abg.Ax9));this.Jp.
L(A.iF.Text);this.J(this.Jp,0);this.N.Cm(A.zW(A.abi.AhE));this.Jp.Y(A.zW(A.eV.Au
));this.Iq=A._GetAutoObject(C.Py);},_Done:function(){this.__proto__=C.Lz;this.Jp.
_Done();C.Lz._Done.call(this);},_ReInit:function(){C.Lz._ReInit.call(this);this.
Jp._ReInit();this.Jp.R(((A.z2(A.abg.Ok)+A.z2(A.abg.Colon))+Cv)+A.z2(A.abg.Ax9));
this.Jp.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.Lz._Mark.call(this,D);if((B=
this.Iq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jp)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ManualActionScanScreen"};C.AHJ={Ac:null,Init:function(
aArg){var B;A.y_([this,this.AxS],A._GetAutoObject(C.AutoActions),0);A.y_([this,this.
Ars],A._GetAutoObject(A.Device.Helper).V,0);A.ow([this,this.AxS],this);A.ow([this
,this.Ars],this);this.G(A.aaN(this.M,ATE));this.Ac.G(A.aaN(this.Ac.M,A.aaj([(B=this.
M)[2]-B[0],B[3]-B[1]],ATF)));},A7D:function(H){var B;var Ajh=0;var Av7=0;var A7W;
var X=this.Ac.Af;var Ce=null;A7W=((((B=this.M)[2]-B[0])-(A._GetAutoObject(C.AutoActions
).Ahx()*58))/2)|0;while(!!X&&!((X.S&0x200)===0x200)){Ce=(C.UC.isPrototypeOf(X)?X:
null);if(((X.S&0x400)===0x400)&&!!Ce){Ce.G(A.aaN(Ce.M,ATG));Ce.G(A.aaP(Ce.M,(Av7
*58)+A7W));Ce.G(A.aaR(Ce.M,Ajh*58));if(Av7>=3){Ajh=Ajh+1;Av7=0;}else Av7=Av7+1;}
X=X.Af;}this.A8(null);},AV3:function(Jr){var Ep=A._GetAutoObject(C.DJ).A7Z(Jr,null
);this.J(Ep,0);this.A7D(this);},AvV:function(){var B;var X=this.Ac.Af;while(!!X&&
!((X.S&0x200)===0x200)){var Aj_=X;X=X.Af;if(((Aj_.S&0x400)===0x400))this.HW(Aj_);
}},AxS:function(H){this.AvV();var P;var DW=A._GetAutoObject(C.AutoActions).Ahx();
for(P=0;P<DW;P=P+1){var Yn=A._GetAutoObject(C.AutoActions).Acb(P);this.AV3(Yn);}
A.ow([this,this.A7D],this);A.ow([this,this.Ars],this);A.ow([this,this.Bux],this);
},Ars:function(H){var B;var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){if(((
X.S&0x400)===0x400)){var Ab=(C.UC.isPrototypeOf(X)?X:null);Ab.ABD(false);}X=X.Af;
}},Bux:function(H){var B;var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){if(((
X.S&0x400)===0x400)){var Ab=(C.UC.isPrototypeOf(X)?X:null);var BqJ=A._GetAutoObject(
C.AutoActions).Ahx();if(!!Ab){var P;Ab.A3b(false);for(P=0;P<BqJ;P=P+1)if(Ab.Action===
A._GetAutoObject(C.AutoActions).Acb(P)){Ab.A3b(true);Ab.BfV(ATH+(P+1).toFixed());
}}}X=X.Af;}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Ac._Init.
call(this.Ac={I:this},0);this.__proto__=C.AHJ;this.Ac.Le(0);this.J(this.Ac,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Ac._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Ac._ReInit();},
_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Ac)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DJ={_Init:function(
){C.AYS._Init.call(this,0);},_variants:function(){return this;},_this:null};C.ALb={
KC:null,SG:null,Init:function(aArg){this.KC.R(A._GetAutoObject(A.abk.Temperature
).Aju());},_Init:function(aArg){C.DL._Init.call(this,aArg);A.abh.Text._Init.call(
this.KC={I:this},0);C.CH._Init.call(this.SG={I:this},0);this.__proto__=C.ALb;this.
KC.G(ATI);this.KC.A0(0x12);this.KC.L(A.iF.Text);this.SG.G(Al1);this.SG.R((A.z2(A.
abg.Afg)+AEn)+A.z2(A.abg.LJ));this.SG.A0(0x12);this.SG.L(A.iF.Text);this.J(this.
KC,0);this.J(this.SG,0);this.KC.Y(A.zW(A.eV.Au));this.SG.Y(A.zW(A.eV.AB));this.SG.
Bz(A.zW(A.eV.Cq));this.Init(aArg);},_Done:function(){this.__proto__=C.DL;this.KC.
_Done();this.SG._Done();C.DL._Done.call(this);},_ReInit:function(){C.DL._ReInit.
call(this);this.KC._ReInit();this.SG._ReInit();this.SG.R((A.z2(A.abg.Afg)+AEn)+A.
z2(A.abg.LJ));this.KC.Y(A.zW(A.eV.Au));this.SG.Y(A.zW(A.eV.AB));this.SG.Bz(A.zW(
A.eV.Cq));},_Mark:function(D){var B;C.DL._Mark.call(this,D);if((B=this.KC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.SG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdTemperatures"};C.AzE={IY:null,DB:null,_Init:function(aArg
){C.DL._Init.call(this,aArg);A.abh.Text._Init.call(this.IY={I:this},0);A.abh.Text.
_Init.call(this.DB={I:this},0);this.__proto__=C.AzE;this.IY.G(AEo);this.IY.KF(true
);this.IY.A0(0x14);this.IY.R(A.z2(A.abg.AfO)+AEp);this.IY.L(A.iF.Text);this.DB.G(
Al1);this.DB.KF(true);this.DB.R(A.z2(A.abg.AB9));this.DB.L(A.iF.Text);this.J(this.
IY,0);this.J(this.DB,0);this.IY.Y(A.zW(A.eV.AB));this.DB.Y(A.zW(A.eV.AB));},_Done:
function(){this.__proto__=C.DL;this.IY._Done();this.DB._Done();C.DL._Done.call(this
);},_ReInit:function(){C.DL._ReInit.call(this);this.IY._ReInit();this.DB._ReInit(
);this.IY.R(A.z2(A.abg.AfO)+AEp);this.DB.R(A.z2(A.abg.AB9));this.IY.Y(A.zW(A.eV.
AB));this.DB.Y(A.zW(A.eV.AB));},_Mark:function(D){var B;C.DL._Mark.call(this,D);
if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DB)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdRatings"};C.Su={IE:null,_Init:function(
aArg){C.DL._Init.call(this,aArg);C.CH._Init.call(this.IE={I:this},0);this.__proto__=
C.Su;this.IE.G(Au$);this.IE.R((((A.z2(A.abg.NN)+AaH)+AEq)+A.z2(A.abg.A5u))+Nr);this.
IE.A0(0x12);this.IE.L(A.iF.Text);this.J(this.IE,0);this.IE.Y(A.zW(A.eV.Au));this.
IE.Bz(A.zW(A.eV.AB));this.IE.C7(A.zW(A.eV.Cq));},_Done:function(){this.__proto__=
C.DL;this.IE._Done();C.DL._Done.call(this);},_ReInit:function(){C.DL._ReInit.call(
this);this.IE._ReInit();this.IE.R((((A.z2(A.abg.NN)+AaH)+AEq)+A.z2(A.abg.A5u))+Nr
);this.IE.Y(A.zW(A.eV.Au));this.IE.Bz(A.zW(A.eV.AB));this.IE.C7(A.zW(A.eV.Cq));}
,_Mark:function(D){var B;C.DL._Mark.call(this,D);if((B=this.IE)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"};C.ALd={La:null,Lb:
null,C3:function(){this.A4K();},Init:function(aArg){this.A4K();},A4K:function(){
this.La.R(A._GetAutoObject(A.abk.Dv).Aa$());this.Lb.R(A._GetAutoObject(A.abk.Dv).
Yx());},_Init:function(aArg){C.DL._Init.call(this,aArg);A.abh.Text._Init.call(this.
La={I:this},0);C.CH._Init.call(this.Lb={I:this},0);this.__proto__=C.ALd;this.La.
G(ATJ);this.La.A0(0x12);this.La.L(A.iF.Text);this.Lb.G(Al1);this.Lb.L(A.iF.Text);
this.J(this.La,0);this.J(this.Lb,0);this.La.Y(A.zW(A.eV.Au));this.Lb.Y(A.zW(A.eV.
Au));this.Lb.Bz(A.zW(A.eV.AB));this.Lb.C7(A.zW(A.eV.Cq));this.Init(aArg);},_Done:
function(){this.__proto__=C.DL;this.La._Done();this.Lb._Done();C.DL._Done.call(this
);},_ReInit:function(){C.DL._ReInit.call(this);this.La._ReInit();this.Lb._ReInit(
);this.C3();},_Mark:function(D){var B;C.DL._Mark.call(this,D);if((B=this.La)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Lb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWeights"};C.AIS={LD:null,Hc:null,Im:null,AP:null,A4:null
,Fk:0,VN:0,HF:0,Agw:false,Init:function(aArg){},Bh:function(aSize){C.A$.Bh.call(
this,aSize);this.Background.G(A.aaQ(this.Background.M,((aSize[0]*65)/100)|0));this.
T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AP.G([this.T.M[2]-1,0,this.T.M[2
]+1,aSize[1]]);this.Hc.G([this.T.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.A4.
G([this.Hc.M[2]-1,0,this.Hc.M[2]+1,aSize[1]]);this.LD.G([this.Background.M[2],0,
aSize[0],aSize[1]]);this.Im.G(this.LD.M);},Ai:function(Ae){C.A$.Ai.call(this,Ae);
if(this.Agw){this.Im.R(Qj);this.Im.L(A.iF.Text);this.LD.L(this.Background.AV);}else{
this.Im.R(A._GetAutoObject(A.Device.Converter).Nl(this.Fk,2,true));this.Im.L(A._GetAutoObject(
A.abk.Dv).Awt(this.Fk,this.HF));this.LD.L(A._GetAutoObject(A.abk.Dv).Awr(this.Fk
,this.HF));}if(this.VN>0)this.Hc.R(A._GetAutoObject(A.Device.Converter).AlP(this.
VN));else this.Hc.R(Qj);this.Hc.L(this.T.AV);},B7:function(Z){if(!this.AZ)return;
this.Hl=Z;if(!!this.AZ){var Ow=this.AZ.Cp(Z,1);var Aro=this.AZ.Hr(Z,24);var AF6=
this.AZ.Cp(Z,23);var Ant=this.AZ.Hr(Z,19);this.VN=this.AZ.Cp(Z,18);if((Aro>0)&&(
Aro!==Ant)){var KT=A._GetAutoObject(A.Device.Helper).L6(Aro,Ant);if(!!KT){this.Agw=
false;this.Fk=A._GetAutoObject(A.abk.Dv).Ajg(KT,AF6,this.VN);}else{this.Agw=true;
this.Fk=0;}}else{this.Agw=true;this.Fk=0;}this.U(Ow.toFixed());this.HF=this.AZ.AkF(
Z,14);this.Al();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.
call(this.LD={I:this},0);A.abh.Text._Init.call(this.Hc={I:this},0);A.abh.Text._Init.
call(this.Im={I:this},0);A.abh.AH._Init.call(this.AP={I:this},0);A.abh.AH._Init.
call(this.A4={I:this},0);this.__proto__=C.AIS;this.T.G(AdC);this.LD.G(Ap$);this.
Hc.G(AEk);this.Hc.A0(0x12);this.Hc.R(Kb);this.Hc.L(A.iF.Text);this.Im.G(AEl);this.
Im.R(Kb);this.Im.L(A.iF.Text);this.AP.G(AlZ);this.AP.L(A.iF.A7);this.A4.G(Al0);this.
A4.L(A.iF.A7);this.J(this.LD,0);this.J(this.Hc,0);this.J(this.Im,0);this.J(this.
AP,0);this.J(this.A4,0);this.Hc.Y(A.zW(A.eV.Au));this.Im.Y(A.zW(A.eV.Au));this.Init(
aArg);},_Done:function(){this.__proto__=C.A$;this.LD._Done();this.Hc._Done();this.
Im._Done();this.AP._Done();this.A4._Done();C.A$._Done.call(this);},_ReInit:function(
){C.A$._ReInit.call(this);this.LD._ReInit();this.Hc._ReInit();this.Im._ReInit();
this.AP._ReInit();this.A4._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(this
,D);if((B=this.LD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.Mi={LC:null,AP:null,A4:null,G0:null,VB:0,Init:
function(aArg){},Bh:function(aSize){C.A$.Bh.call(this,aSize);this.LC.G([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.T.G(this.LC.M);this.Background.G([].concat(this.LC.
M[2],this.Background.M.slice(1,4)));this.Background.G(A.aaQ(this.Background.M,aSize[
0]));this.AP.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);this.G0.G([this.T.M[2],
0,this.T.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A4.G([this.G0.M[2]-1,0,this.
G0.M[2]+1,aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.G0.L(this.T.AV
);if(!!this.VB&&(this.VB!==5)){this.LC.L(A._GetAutoObject(A.abk.Assessment).Pp(this.
VB));this.T.L(A._GetAutoObject(A.abk.Assessment).VJ(this.VB));}else this.LC.L(this.
Background.AV);},B7:function(Z){if(!this.AZ)return;this.Hl=Z;if(!!this.AZ){var Ow=
this.AZ.Cp(Z,1);var K0=this.AZ.IC(Z,13);var Ajp=this.AZ.IC(Z,17);var Ajy=this.AZ.
Hq(Z,11);var AvO=this.AZ.Hr(Z,4);var AdR=A._GetAutoObject(A.Device.Helper).L6(AvO
,A._GetAutoObject(A.Device.Helper).DN());this.VB=A._GetAutoObject(A.Device.Helper
).AH2(K0,Ajy,Ajp);this.U(Ow.toFixed());if(AdR<100)this.G0.R((AdR.toFixed()+Cv)+A.
z2(A.abg.AHH));else this.G0.R(A._GetAutoObject(A.abk.K5).Azd(AvO,A._GetAutoObject(
A.Device.Helper).DN(),AEr));this.Al();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.abh.AH._Init.call(this.LC={I:this},0);A.abh.AH._Init.call(this.AP={I:this
},0);A.abh.AH._Init.call(this.A4={I:this},0);A.abh.Text._Init.call(this.G0={I:this
},0);this.__proto__=C.Mi;this.LC.G(Ap$);this.Background.G(ATK);this.T.G(AdC);this.
AP.G(AlZ);this.AP.L(A.iF.A7);this.A4.G(Al0);this.A4.L(A.iF.A7);this.G0.G(Ava);this.
J(this.LC,-2);this.J(this.AP,0);this.J(this.A4,0);this.J(this.G0,0);this.G0.Y(A.
zW(A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.LC._Done(
);this.AP._Done();this.A4._Done();this.G0._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.LC._ReInit();this.AP._ReInit();this.A4._ReInit(
);this.G0._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.
LC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosItem"};C.AIQ={Ahe:null,N_:null,
AP:null,A4:null,IU:null,AGn:0,AW0:0,Init:function(aArg){},Bh:function(aSize){C.A$.
Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.M,aSize));this.T.G(A.
aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AP.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[
1]]);this.N_.G([this.T.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Ahe.G(this.N_.
M);this.A4.G([this.N_.M[2]-1,0,this.N_.M[2]+1,aSize[1]]);this.IU.G([this.N_.M[2]
,0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.IU.CW(this.T.
AV);if(this.AGn>0){this.Ahe.L(A._GetAutoObject(A.abk.Assessment).Pp(this.AW0));this.
N_.L(A._GetAutoObject(A.abk.Assessment).VJ(this.AW0));}else{this.Ahe.L(this.Background.
AV);this.N_.L(this.T.AV);}},B7:function(Z){if(!this.AZ)return;this.Hl=Z;if(!!this.
AZ){var Kj=this.AZ.Cp(Z,0);var Ow=this.AZ.Cp(Z,1);this.AGn=this.AZ.Cp(Z,5);this.
AW0=this.AZ.IC(Z,17);this.U(Ow.toFixed());if(this.AGn>0)this.N_.R(A._GetAutoObject(
A.Device.Converter).AiG(this.AGn));else this.N_.R(Qj);var VA=A._GetAutoObject(A.
Device.Helper).XU(6);A._GetAutoObject(A.Device.Device).UV(Z);var AVa=A._GetAutoObject(
A.Device.Helper).BbD(A._GetAutoObject(A.Device.Device).Bt,9,Kj,VA,0);this.IU.A3p(
AVa.Get(3));this.IU.A3r(AVa.Get(2));this.IU.A3q(AVa.Get(1));this.Al();}},_Init:function(
aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(this.Ahe={I:this},0);A.abh.
Text._Init.call(this.N_={I:this},0);A.abh.AH._Init.call(this.AP={I:this},0);A.abh.
AH._Init.call(this.A4={I:this},0);C.IU._Init.call(this.IU={I:this},0);this.__proto__=
C.AIQ;this.N_.A0(0x12);this.N_.R(Kb);this.N_.L(A.iF.Text);this.AP.G(AlZ);this.AP.
L(A.iF.A7);this.A4.G(Al0);this.A4.L(A.iF.A7);this.IU.G(ATL);this.J(this.Ahe,0);this.
J(this.N_,0);this.J(this.AP,0);this.J(this.A4,0);this.J(this.IU,0);this.N_.Y(A.zW(
A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Ahe._Done(
);this.N_._Done();this.AP._Done();this.A4._Done();this.IU._Done();C.A$._Done.call(
this);},_ReInit:function(){C.A$._ReInit.call(this);this.Ahe._ReInit();this.N_._ReInit(
);this.AP._ReInit();this.A4._ReInit();this.IU._ReInit();},_Mark:function(D){var B;
C.A$._Mark.call(this,D);if((B=this.Ahe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IU)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListTemperatureItem"};C.IU={Adm:null,ColoredCounterAttrSet:
null,AyI:0,AyJ:0,AyH:0,J_:0,Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);var AGe;
var AHn;var AGK;var AjH=0;if(this.AyH>0){AGe=this.AyH.toFixed();AjH+=AGe.length;
}else{AGe=ATM;AjH++;}if(this.AyJ>0){AHn=this.AyJ.toFixed();AjH+=AHn.length;}else{
AHn=ATN;AjH++;}if(this.AyI>0){AGK=this.AyI.toFixed();AjH+=AGK.length;}else{AGK=AEf;
AjH++;}if(AjH<=4)this.ColoredCounterAttrSet.AoU(A.zW(A.eV.Au));else if(AjH<=5)this.
ColoredCounterAttrSet.AoU(A.zW(A.eV.AB));else this.ColoredCounterAttrSet.AoU(A.zW(
A.eV.Cq));this.Adm.R(((((ATO+AGe)+ATP)+AHn)+ATQ)+AGK);},A3q:function(E){if(this.
AyI===E)return;this.AyI=E;this.Al();},A3r:function(E){if(this.AyJ===E)return;this.
AyJ=E;this.Al();},A3p:function(E){if(this.AyH===E)return;this.AyH=E;this.Al();},
CW:function(E){if(this.J_===E)return;this.J_=E;this.ColoredCounterAttrSet.Afm(E);
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.ArK._Init.call(this.
Adm={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:this
},0);this.__proto__=C.IU;this.G(AEs);this.Adm.AW(0x3F);this.Adm.G(AEs);this.Adm.
R(Kb);this.ColoredCounterAttrSet.BeU(A.iF.E1);this.ColoredCounterAttrSet.A3l(A.iF.
Hy);this.ColoredCounterAttrSet.A3k(A.iF.FY);this.ColoredCounterAttrSet.Afm(A.iF.
Text);this.J_=A.iF.Text;this.J(this.Adm,0);this.Adm.A3e(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.AoU(A.zW(A.eV.Au));this.ColoredCounterAttrSet.A3g(null
);},_Done:function(){this.__proto__=A.Core.O;this.Adm._Done();this.ColoredCounterAttrSet.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.Adm._ReInit();this.ColoredCounterAttrSet._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Adm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ColoredCounterAttrSet)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"
};C.AIP={Aqy:null,Aac:null,Aad:null,Aae:null,IU:null,AP:null,A4:null,DQ:null,KI:
null,Ado:null,Lh:null,Li:null,AFv:0,AFu:0,AFt:0,Init:function(aArg){},Bh:function(
aSize){C.A$.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.M,aSize)
);this.T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AP.G([this.T.M[2]-1,0,this.
T.M[2]+1,aSize[1]]);this.Aac.G([this.T.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.
Ado.G(this.Aac.M);this.A4.G([this.Aac.M[2]-1,0,this.Aac.M[2]+1,aSize[1]]);this.Aad.
G([this.Aac.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.Lh.G(this.Aad.M);this.DQ.
G([this.Aad.M[2]-1,0,this.Aad.M[2]+1,aSize[1]]);this.Aae.G([this.Aad.M[2],0,((aSize[
0]*65)/100)|0,aSize[1]]);this.Li.G(this.Aae.M);this.KI.G([this.Aae.M[2]-1,0,this.
Aae.M[2]+1,aSize[1]]);this.IU.G([this.Aae.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.A$.Ai.call(this,Ae);this.IU.CW(this.T.AV);this.Aac.L(A._GetAutoObject(A.abk.
Assessment).Pp(this.AFt));this.Aad.L(A._GetAutoObject(A.abk.Assessment).Pp(this.
AFu));this.Aae.L(A._GetAutoObject(A.abk.Assessment).Pp(this.AFv));this.Ado.L(A._GetAutoObject(
A.abk.Assessment).VJ(this.AFt));this.Lh.L(A._GetAutoObject(A.abk.Assessment).VJ(
this.AFu));this.Li.L(A._GetAutoObject(A.abk.Assessment).VJ(this.AFv));this.Ado.W(
!this.AFt);this.Lh.W(!this.AFu);this.Li.W(!this.AFv);this.IU.A3p(this.Aqy.Get(3)
);this.IU.A3r(this.Aqy.Get(2));this.IU.A3q(this.Aqy.Get(1));},B7:function(Z){if(
!this.AZ)return;this.Hl=Z;if(!!this.AZ){var Kj=this.AZ.Cp(Z,0);var Ow=this.AZ.Cp(
Z,1);this.U(Ow.toFixed());A._GetAutoObject(A.Device.Device).UV(Z);this.AFt=A._GetAutoObject(
A.Device.Helper).AWC(A._GetAutoObject(A.Device.Device).Bt,Kj,0);this.AFu=A._GetAutoObject(
A.Device.Helper).AWC(A._GetAutoObject(A.Device.Device).Bt,Kj,-1);this.AFv=A._GetAutoObject(
A.Device.Helper).AWC(A._GetAutoObject(A.Device.Device).Bt,Kj,-2);this.Aqy=A._GetAutoObject(
A.Device.Helper).A0L(A._GetAutoObject(A.Device.Device).Bt,Kj,0,0);this.Al();}},_Init:
function(aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(this.Aac={I:this},
0);A.abh.AH._Init.call(this.Aad={I:this},0);A.abh.AH._Init.call(this.Aae={I:this
},0);C.IU._Init.call(this.IU={I:this},0);A.abh.AH._Init.call(this.AP={I:this},0);
A.abh.AH._Init.call(this.A4={I:this},0);A.abh.AH._Init.call(this.DQ={I:this},0);
A.abh.AH._Init.call(this.KI={I:this},0);A.abh.Text._Init.call(this.Ado={I:this},
0);A.abh.Text._Init.call(this.Lh={I:this},0);A.abh.Text._Init.call(this.Li={I:this
},0);this.__proto__=C.AIP;this.AP.L(A.iF.A7);this.A4.L(A.iF.A7);this.DQ.L(A.iF.A7
);this.KI.L(A.iF.A7);this.Ado.R(Al2);this.Lh.R(Al2);this.Li.R(Al2);this.J(this.Aac
,0);this.J(this.Aad,0);this.J(this.Aae,0);this.J(this.IU,0);this.J(this.AP,0);this.
J(this.A4,0);this.J(this.DQ,0);this.J(this.KI,0);this.J(this.Ado,0);this.J(this.
Lh,0);this.J(this.Li,0);this.Ado.Y(A.zW(A.eV.Au));this.Lh.Y(A.zW(A.eV.Au));this.
Li.Y(A.zW(A.eV.Au));this.Aqy=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(
aArg);},_Done:function(){this.__proto__=C.A$;this.Aac._Done();this.Aad._Done();this.
Aae._Done();this.IU._Done();this.AP._Done();this.A4._Done();this.DQ._Done();this.
KI._Done();this.Ado._Done();this.Lh._Done();this.Li._Done();C.A$._Done.call(this
);},_ReInit:function(){C.A$._ReInit.call(this);this.Aac._ReInit();this.Aad._ReInit(
);this.Aae._ReInit();this.IU._ReInit();this.AP._ReInit();this.A4._ReInit();this.
DQ._ReInit();this.KI._ReInit();this.Ado._ReInit();this.Lh._ReInit();this.Li._ReInit(
);},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.Aqy)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Aac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aad)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aae)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.IU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ado).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Lh)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Li)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListRatingItem"
};C.AkI={Hv:null,Agr:false,Bh:function(aSize){var B;this.Hv.G([(aSize[0]-((B=this.
Hv.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.T.G([10,0,this.Hv.M[0]-10,40]);C.Sl.Bh.
call(this,aSize);},Ai:function(Ae){C.Sl.Ai.call(this,Ae);if(this.Agr)this.Hv.Cc(
1);else this.Hv.Cc(0);},Jz:function(H){if(this.Agr)C.Sl.Jz.call(this,H);},Ju:function(
H){if(this.Agr)C.Sl.Ju.call(this,H);},R_:function(AK){C.Sl.R_.call(this,AK);if(!
!AK){this.G(A.aaL(this.M,80));this.Agr=true;this.XC(true);}else{this.G(A.aaL(this.
M,40));this.Agr=false;this.XC(false);}},_Init:function(aArg){C.Sl._Init.call(this
,aArg);A.abh.Am._Init.call(this.Hv={I:this},0);this.__proto__=C.AkI;this.T.A0(0x11
);this.Hv.G(ADN);this.Hv.Cc(0);this.J(this.Hv,0);this.T.C7(A.zW(A.eV.Cq));this.Hv.
Ar(A.zW(A.abi.An2));},_Done:function(){this.__proto__=C.Sl;this.Hv._Done();C.Sl.
_Done.call(this);},_ReInit:function(){C.Sl._ReInit.call(this);this.Hv._ReInit();
this.T.C7(A.zW(A.eV.Cq));},_Mark:function(D){var B;C.Sl._Mark.call(this,D);if((B=
this.Hv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AB8={_Init:function(aArg){C.At0._Init.call(this,aArg);this.__proto__=C.AB8;}
,_className:"Application::OptionsOverlaySeparator"};C.Ain={Dk:A.jm,Bw:true,_Init:
function(aArg){C.At0._Init.call(this,aArg);this.__proto__=C.Ain;},_className:"Application::OptionsOverlayNode"
};C.AcZ={AR:null,_Init:function(aArg){C.Ain._Init.call(this,aArg);this.__proto__=
C.AcZ;},_Mark:function(D){var B;C.Ain._Mark.call(this,D);if((B=this.AR)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.AJi={Ai:function(Ae){C.S9.Ai.call(this,Ae);var Gb=A.iF.CD;var G1=A.iF.Text;if(
this.GW){Gb=A.iF.Text;G1=A.iF.Bg;}this.Background.L(Gb);this.T.L(G1);},_Init:function(
aArg){C.S9._Init.call(this,aArg);this.__proto__=C.AJi;},_className:"Application::DarkThemeTextItem"
};C.S9={Background:null,T:null,GW:false,Init:function(aArg){},Bh:function(aSize){
C.GM.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.M,aSize));this.
T.G(A.aaN(this.T.M,aSize));},U:function(E){if(this.Dk===E)return;this.Dk=E;this.
T.R(E);},Bk:function(E){if(this.GW===E)return;this.GW=E;this.Al();},_Init:function(
aArg){C.GM._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);
C.CH._Init.call(this.T={I:this},0);this.__proto__=C.S9;this.G(BI);this.Background.
G(AEt);this.T.G(ATR);this.J(this.Background,0);this.J(this.T,0);this.T.Y(A.zW(A.
eV.Au));this.T.Bz(A.zW(A.eV.AB));this.T.C7(A.zW(A.eV.Cq));this.Init(aArg);},_Done:
function(){this.__proto__=C.GM;this.Background._Done();this.T._Done();C.GM._Done.
call(this);},_ReInit:function(){C.GM._ReInit.call(this);this.Background._ReInit(
);this.T._ReInit();},_Mark:function(D){var B;C.GM._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::TextItem"};C.ALg={Ek:null,Ii:null,_Init:function(aArg
){C.Ef._Init.call(this,aArg);A.abh.Text._Init.call(this.Ek={I:this},0);A.abh.Text.
_Init.call(this.Ii={I:this},0);this.__proto__=C.ALg;this.G(Np);this.Background.G(
Np);this.Ek.G(AEu);this.Ek.R(A.z2(A.abg.Hs));this.Ek.A0(0x11);this.Ek.L(A.iF.Text
);this.Ii.AW(0x3F);this.Ii.G(Ai0);this.Ii.HT(5);this.Ii.A0(0x14);this.Ii.R(A.z2(
A.abg.ACR));this.Ii.L(A.iF.Text);this.J(this.Ek,0);this.J(this.Ii,0);this.Ek.Y(A.
zW(A.eV.Au));this.Ii.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.Ef;this.
Ek._Done();this.Ii._Done();C.Ef._Done.call(this);},_ReInit:function(){C.Ef._ReInit.
call(this);this.Ek._ReInit();this.Ii._ReInit();this.Ek.R(A.z2(A.abg.Hs));this.Ii.
R(A.z2(A.abg.ACR));this.Ek.Y(A.zW(A.eV.Au));this.Ii.Y(A.zW(A.eV.Au));},_Mark:function(
D){var B;C.Ef._Mark.call(this,D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ii)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineStatusSmall"
};C.CL={Q$:null,Ra:null,Acn:null,AeZ:null,PH:null,J_:0,LastTemperature:0,AnN:0,AnimalType:
0,IsAlarm:false,IsFever:false,IsWatch:false,Ai:function(Ae){A.Core.O.Ai.call(this
,Ae);switch(this.AnimalType){case 1:{this.Q$.Ar(A.zW(A.abi.Asx));this.Ra.Ar(A.zW(
A.abi.Asx));}break;case 2:{this.Q$.Ar(A.zW(A.abi.AsA));this.Ra.Ar(A.zW(A.abi.AsA
));}break;default:{this.Q$.Ar(A.zW(A.abi.Acj));this.Ra.Ar(A.zW(A.abi.Acj));}}this.
Q$.L(A._GetAutoObject(A.abk.Assessment).Pp(this.AnN));var Ana;if(this.IsWatch)Ana=
A.zW(A.abi.AMd);else if(this.IsFever){Ana=A.zW(A.abi.AMc);switch(A._GetAutoObject(
A.Device.Converter).Ag5(this.LastTemperature,this.AnimalType)){case 3:this.PH.L(
A.iF.FY);break;case 2:this.PH.L(A.iF.Hy);break;case 1:this.PH.L(A.iF.E1);break;case
0:this.PH.L(A.iF.Ads);break;default:;}}else if(this.IsAlarm){Ana=A.zW(A.abi.AMb);
if(!this.AnN||(this.AnN===5))this.PH.L(A.iF.FY);else this.PH.L(0xFF000000);}else
Ana=null;this.Acn.Ar(Ana);this.AeZ.Ar(Ana);this.PH.Ar(Ana);if(A._GetAutoObject(A.
abk.Assessment).Pp(this.AnN)===A.iF.E1)this.Ra.L(this.J_);},DO:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;this.Al();},AA_:function(E){if(this.AnN===
E)return;this.AnN=E;this.Al();},CW:function(E){if(this.J_===E)return;this.J_=E;this.
Al();},AcS:function(E){if(this.IsWatch===E)return;this.IsWatch=E;this.Al();},ST:
function(E){if(this.IsFever===E)return;this.IsFever=E;this.Al();},AcQ:function(E
){if(this.IsAlarm===E)return;this.IsAlarm=E;this.Al();},AcU:function(E){if(this.
LastTemperature===E)return;this.LastTemperature=E;this.Al();},GZ:function(){this.
DO(0);this.AA_(0);this.AcQ(false);this.ST(false);this.AcS(false);this.AcU(0);this.
CW(A.iF.Text);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Am._Init.
call(this.Q$={I:this},0);A.abh.Am._Init.call(this.Ra={I:this},0);A.abh.Am._Init.
call(this.Acn={I:this},0);A.abh.Am._Init.call(this.AeZ={I:this},0);A.abh.Am._Init.
call(this.PH={I:this},0);this.__proto__=C.CL;this.G(Ai1);this.Q$.AW(0x3F);this.Q$.
G(Ai1);this.Q$.L(A.iF.CD);this.Q$.A0(0x12);this.Q$.Cc(0);this.Ra.AW(0x3F);this.Ra.
G(Ai1);this.Ra.L(0xFF000000);this.Ra.A0(0x12);this.Ra.Cc(1);this.Acn.AW(0x3F);this.
Acn.G(Ai1);this.Acn.L(0xFF000000);this.Acn.Cc(0);this.AeZ.AW(0x3F);this.AeZ.G(Ai1
);this.AeZ.Cc(1);this.PH.AW(0x3F);this.PH.G(Ai1);this.PH.L(A.iF.CP);this.PH.Cc(2
);this.J_=A.iF.Text;this.J(this.Q$,0);this.J(this.Ra,0);this.J(this.Acn,0);this.
J(this.AeZ,0);this.J(this.PH,0);this.Q$.Ar(A.zW(A.abi.Acj));this.Ra.Ar(A.zW(A.abi.
Acj));},_Done:function(){this.__proto__=A.Core.O;this.Q$._Done();this.Ra._Done();
this.Acn._Done();this.AeZ._Done();this.PH._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Q$._ReInit();this.Ra._ReInit();this.
Acn._ReInit();this.AeZ._ReInit();this.PH._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Q$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ra).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Acn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalHeadIcon"};C.AIM={B7:function(Z){C.Ahg.B7.call(
this,Z);if(!!this.AZ){var Bse=this.AZ.Hq(Z,12);var BqC=this.AZ.Q_(Z,15);this.AbZ.
R(A._GetAutoObject(A.Device.Helper).L6(BqC,A._GetAutoObject(A.Device.Helper).DN(
)).toFixed());this.Rb.W(Bse);this.Al();}},_Init:function(aArg){C.Ahg._Init.call(
this,aArg);this.__proto__=C.AIM;},_className:"Application::CalfListAlarmItem"};C.
AzC={DB:null,LQ:null,_Init:function(aArg){C.Sv._Init.call(this,aArg);A.abh.Text.
_Init.call(this.DB={I:this},0);A.abh.Am._Init.call(this.LQ={I:this},0);this.__proto__=
C.AzC;this.DB.G(Al1);this.DB.KF(true);this.DB.R(A.z2(A.abg.AZ1));this.DB.L(A.iF.
Text);this.LQ.G(ATS);this.LQ.IZ(false);this.LQ.L(A.iF.Text);this.LQ.A0(0x12);this.
J(this.DB,-2);this.J(this.LQ,0);this.DB.Y(A.zW(A.eV.AB));this.LQ.Ar(A.zW(A.abi.Az3
));},_Done:function(){this.__proto__=C.Sv;this.DB._Done();this.LQ._Done();C.Sv._Done.
call(this);},_ReInit:function(){C.Sv._ReInit.call(this);this.DB._ReInit();this.LQ.
_ReInit();this.DB.R(A.z2(A.abg.AZ1));this.DB.Y(A.zW(A.eV.AB));},_Mark:function(D
){var B;C.Sv._Mark.call(this,D);if((B=this.DB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.LQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAlarm"
};C.JG={Background:null,CR:null,Ay9:0,Ayq:0,Ai:function(Ae){A.Core.O.Ai.call(this
,Ae);this.Background.L(this.Ay9);this.CR.L(this.Ayq);},Ats:function(E){if(this.Ay9===
E)return;this.Ay9=E;this.Al();},AA2:function(E){if(this.Ayq===E)return;this.Ayq=
E;this.Al();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Am._Init.
call(this.Background={I:this},0);A.abh.Am._Init.call(this.CR={I:this},0);this.__proto__=
C.JG;this.G(Al3);this.Background.AW(0x3C);this.Background.G(Al3);this.Background.
Cc(1);this.CR.AW(0x3C);this.CR.G(Al3);this.Ay9=A.iF.E1;this.Ayq=A.iF.Text;this.J(
this.Background,0);this.J(this.CR,0);this.Background.Ar(A.zW(A.abi.JG));this.CR.
Ar(A.zW(A.abi.JG));},_Done:function(){this.__proto__=A.Core.O;this.Background._Done(
);this.CR._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Background._ReInit();this.CR._ReInit();},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"
};C.AnO={OE:null,A1l:false,Bh:function(aSize){C.LI.Bh.call(this,aSize);this.T.G([
].concat(this.OE.M[2]-this.T.Text.IG,this.T.M.slice(1,4)));},Ai:function(Ae){C.LI.
Ai.call(this,Ae);this.OE.L(this.T.AV);},ABk:function(E){if(this.A1l===E)return;this.
A1l=E;if(E)this.OE.R(ATT);else this.OE.R(AEv);},_Init:function(aArg){C.LI._Init.
call(this,aArg);A.abh.Text._Init.call(this.OE={I:this},0);this.__proto__=C.AnO;this.
OE.AW(0x34);this.OE.G(Ya);this.OE.R(AEv);this.J(this.OE,0);this.OE.Y(A.zW(A.eV.AKb
));},_Done:function(){this.__proto__=C.LI;this.OE._Done();C.LI._Done.call(this);
},_ReInit:function(){C.LI._ReInit.call(this);this.OE._ReInit();},_Mark:function(
D){var B;C.LI._Mark.call(this,D);if((B=this.OE)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DarkThemeCheckedMenuItem"};C.AKD={Ez:function(H){C.JI.Ez.
call(this,H);this.CV.Ar(A._GetAutoObject(A.Device.Converter).Aey(4));},_Init:function(
aArg){C.JI._Init.call(this,aArg);this.__proto__=C.AKD;},_className:"Application::HeaderAlarmListFilter"
};C.AutoRegistrationMode={AutoRegistrationModeToString:null,Du:function(){return 3;
},Da:function(aIndex){if((aIndex<0)||(aIndex>=3))return-1;return aIndex;},GP:function(
aIndex){if((aIndex<0)||(aIndex>=3))return A.jm;return this.AutoRegistrationModeToString.
Ca(aIndex);},DT:function(A2){return A2;},HN:function(){return 2;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString._Init.call(
this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.ALh={FE:null,KC:null,W3:null,Init:function(aArg){this.KC.R(A._GetAutoObject(
A.abk.Temperature).Aju());},_Init:function(aArg){C.Ef._Init.call(this,aArg);A.abh.
Text._Init.call(this.FE={I:this},0);A.abh.Text._Init.call(this.KC={I:this},0);A.
abh.Text._Init.call(this.W3={I:this},0);this.__proto__=C.ALh;this.Background.L(A.
iF.Text);this.FE.G(AEw);this.FE.A0(0x11);this.FE.R(A.z2(A.abg.Date));this.FE.L(A.
iF.Bg);this.KC.G(ATU);this.KC.A0(0x12);this.KC.L(A.iF.Bg);this.W3.G(ATV);this.W3.
A0(0x12);this.W3.R(A.z2(A.abg.Bp));this.W3.L(A.iF.Bg);this.J(this.FE,0);this.J(this.
KC,0);this.J(this.W3,0);this.FE.Y(A.zW(A.eV.Au));this.KC.Y(A.zW(A.eV.Au));this.W3.
Y(A.zW(A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=C.Ef;this.FE.
_Done();this.KC._Done();this.W3._Done();C.Ef._Done.call(this);},_ReInit:function(
){C.Ef._ReInit.call(this);this.FE._ReInit();this.KC._ReInit();this.W3._ReInit();
this.FE.R(A.z2(A.abg.Date));this.W3.R(A.z2(A.abg.Bp));this.FE.Y(A.zW(A.eV.Au));this.
KC.Y(A.zW(A.eV.Au));this.W3.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.Ef._Mark.
call(this,D);if((B=this.FE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W3)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineTemperatures"};C.Sf={Kz:null,Ahz:false,Init:function(aArg){
var B;A.za([this,this.A6M],[B=A._GetAutoObject(A.Device.Device),B.ANI,B.AUC],0);
this.ACH(this);A.ow([this,this.AUT],this);},DS:function(H){var DF=(A.Core.B0.isPrototypeOf(
H)?H:null);switch(DF.CM){case 6:this.NG(this);break;case 7:this.Md(this);break;default:
DF.PE=true;}},CE:function(H){var B;if(!!this.Kz)this.Kz.CE(this);C.Aw.CE.call(this
,H);},Fc:function(H){var B;if(!!this.Kz)this.Kz.Fc(this);C.Aw.Fc.call(this,H);},
Ak7:function(H){A._GetAutoObject(C.A1).Fl();},ACH:function(H){var B;if(!!this.Kz
){this.Kz.Fc(this);this.HW(this.Kz);}if(this.Ahz)switch(A._GetAutoObject(A.Device.
Device).DK){case 0:this.Kz=A._NewObject(C.AH8,0);break;case 1:this.Kz=A._NewObject(
C.AH9,0);break;case 3:this.Kz=A._NewObject(C.AH7,0);break;case 2:this.Kz=A._NewObject(
C.AH_,0);break;default:throw new Error(Avb);}else switch(A._GetAutoObject(A.Device.
Device).DK){case 0:this.Kz=A._NewObject(C.AH$,0);break;case 1:this.Kz=A._NewObject(
C.AIi,0);break;case 3:this.Kz=A._NewObject(C.AIc,0);break;case 2:this.Kz=A._NewObject(
C.AIo,0);break;default:throw new Error(Avb);}this.HX(this);this.J(this.Kz,0);this.
Kz.G(FK);this.Kz.XA([this,this.AUZ]);this.Kz.CE(this);this.A8(this.Kz);},A6M:function(
s){this.ACH(s);},AOT:function(H){A._GetAutoObject(A.Device.Device).Cn(0);A._GetAutoObject(
A.Device.Device).AcL(0);},AOV:function(H){A._GetAutoObject(A.Device.Device).Cn(0
);A._GetAutoObject(A.Device.Device).AcL(1);},AOU:function(H){A._GetAutoObject(A.
Device.Device).Cn(0);A._GetAutoObject(A.Device.Device).AcL(3);},AOW:function(H){
A._GetAutoObject(A.Device.Device).Cn(0);A._GetAutoObject(A.Device.Device).AcL(2);
},HX:function(H){this.N.C8(A.zW(A.abi.ET));this.N.GX(A.jm);this.N.CA=[this,this.
Ak7];this.N.AOk(A.zW(A.eV.AB));},AUT:function(s){this.HX(s);},BfE:function(E){if(
this.Ahz===E)return;this.Ahz=E;A.ow([this,this.A6M],this);},A4g:function(H){this.
BfE(!this.Ahz);},BgM:function(H){A._GetAutoObject(A.Device.Device).Cn(0);A._GetAutoObject(
A.Device.Device).A_(31,true,A.jm,0,null);},Md:function(H){},Bya:function(s){this.
Md(s);},NG:function(H){},Bx$:function(s){this.NG(s);},A9U:function(H){var Fh=A._GetAutoObject(
A.Device.Device).DK;Fh=Fh+1;if(Fh>=4)Fh=0;A._GetAutoObject(A.Device.Device).AcL(
Fh);},Bs5:function(H){var Fh=A._GetAutoObject(A.Device.Device).DK;Fh=Fh-1;if(Fh<
0)Fh=3;A._GetAutoObject(A.Device.Device).AcL(Fh);},Agx:function(H){},AUZ:function(
s){this.Agx(s);},_Init:function(aArg){C.Aw._Init.call(this,aArg);this.__proto__=
C.Sf;this.Background.G(B3);this.N.W(true);this.N.O3(true);this.N.O4(true);this.Dt(
C.AK8);this.Init(aArg);},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.
Kz)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.DK={AR:null,AttrSet:null,C2:null,CE:function(H){},AEI:function(s){this.CE(s);
},Fc:function(H){A._GetAutoObject(A.Device.Device).Bt.Bo(null);},Avi:function(s){
this.Fc(s);},XA:function(E){if(A.z$(this.AR,E))return;this.AR=E;this.C2.B1=E;},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(this.
AttrSet={I:this},0);A.Core.B0._Init.call(this.C2={I:this},0);this.__proto__=C.DK;
this.G(Vp);this.AttrSet.A3l(A.iF.FY);this.AttrSet.A3k(A.iF.Hy);this.AttrSet.Afm(
A.iF.Text);this.C2.Filter=1;this.AttrSet.AoU(A.zW(A.eV.AB));this.AttrSet.A3g(null
);},_Done:function(){this.__proto__=A.Core.O;this.AttrSet._Done();this.C2._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
AttrSet._ReInit();this.C2._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C2)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoContent"};C.AH$={QH:null,YY:null,Se:null,Sd:null,QL:null
,Pz:null,QM:null,QJ:null,QK:null,QI:null,C3:function(){var B;this.QH.B7(this);this.
YY.B7(this);this.Se.B7(this);this.Sd.B7(this);this.QL.B7(this);this.Pz.B7(this);
this.QM.B7(this);this.QJ.B7(this);this.QK.B7(this);this.QI.B7(this);},Iw:function(
H){C.QN.Iw.call(this,H);switch(A._GetAutoObject(A.Device.Helper).V.AnimalType){case
0:case 2:{this.QH.W(true);this.YY.W(false);this.QJ.W(false);this.QK.W(false);this.
QI.W(false);this.QL.W(true);this.Pz.W(true);this.QM.W(true);}break;case 1:{this.
QH.W(false);this.YY.W(true);this.QJ.W(true);this.QK.W(true);this.QI.W(true);this.
QL.W(false);this.Pz.W(false);this.QM.W(false);}break;default:A.aa8("%s%e",Ap5,A.
_GetAutoObject(A.Device.Helper).V.AnimalType);}A.ow([this,this.TA],this);},_Init:
function(aArg){C.QN._Init.call(this,aArg);C.QH._Init.call(this.QH={I:this},0);C.
AH6._Init.call(this.YY={I:this},0);C.Se._Init.call(this.Se={I:this},0);C.Sd._Init.
call(this.Sd={I:this},0);C.QL._Init.call(this.QL={I:this},0);C.Pz._Init.call(this.
Pz={I:this},0);C.QM._Init.call(this.QM={I:this},0);C.QJ._Init.call(this.QJ={I:this
},0);C.QK._Init.call(this.QK={I:this},0);C.QI._Init.call(this.QI={I:this},0);this.
__proto__=C.AH$;this.QH.G(BI);this.QH.Aj(true);this.QH.Bk(false);this.YY.G(Kc);this.
YY.Aj(true);this.YY.Bk(false);this.Se.G(RQ);this.Se.Aj(true);this.Se.Bk(true);this.
Sd.G(Yf);this.Sd.Aj(true);this.Sd.Bk(false);this.QL.G(AiW);this.QL.Aj(true);this.
QL.Bk(true);this.Pz.G(AlY);this.Pz.Aj(true);this.Pz.Bk(false);this.QM.G(Ap7);this.
QM.Aj(true);this.QM.Bk(true);this.QJ.G(Vr);this.QJ.Aj(true);this.QJ.Bk(true);this.
QK.G(Aqa);this.QK.Aj(true);this.QK.Bk(false);this.QI.G(AEa);this.QI.Aj(true);this.
QI.Bk(true);this.J(this.QH,0);this.J(this.YY,0);this.J(this.Se,0);this.J(this.Sd
,0);this.J(this.QL,0);this.J(this.Pz,0);this.J(this.QM,0);this.J(this.QJ,0);this.
J(this.QK,0);this.J(this.QI,0);},_Done:function(){this.__proto__=C.QN;this.QH._Done(
);this.YY._Done();this.Se._Done();this.Sd._Done();this.QL._Done();this.Pz._Done(
);this.QM._Done();this.QJ._Done();this.QK._Done();this.QI._Done();C.QN._Done.call(
this);},_ReInit:function(){C.QN._ReInit.call(this);this.QH._ReInit();this.YY._ReInit(
);this.Se._ReInit();this.Sd._ReInit();this.QL._ReInit();this.Pz._ReInit();this.QM.
_ReInit();this.QJ._ReInit();this.QK._ReInit();this.QI._ReInit();this.C3();},_Mark:
function(D){var B;C.QN._Mark.call(this,D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.YY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Se)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.QK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfos"};C.AIo={Aiz:function(Lk){if(!Lk)return;
var EZ=A._NewObject(A.Device.Filter,0);var Hh=A._NewObject(A.Device.Int32FilterCriterion
,0);Hh.Initialize(1,0,A._GetAutoObject(A.Device.Helper).V.Id,true);EZ.CO(Hh);var
AaW=A._NewObject(A.Device.Int32FilterCriterion,0);AaW.Initialize(8,2,0,true);EZ.
CO(AaW);Lk.Bo(EZ);},AAa:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;
var Os=A._GetAutoObject(A.Device.Device).Bt.Cd();if(Os<2)return false;var Buk=A.
_GetAutoObject(A.Device.Device).Bt.Hr(0,6);var Bul=A._GetAutoObject(A.Device.Device
).Bt.Hr(Os-1,6);var AWs=A._NewObject(A.Core.Bp,0);AWs.Initialize(Buk);var AYc=A.
_NewObject(A.Core.Bp,0);AYc.Initialize(Bul);if((AWs.ZX()!==AYc.ZX())||(AWs.Year!==
AYc.Year))return true;else return false;},_Init:function(aArg){C.AbH._Init.call(
this,aArg);this.__proto__=C.AIo;this.AOv(C.ADi);this.AOw(C.AzG);this.AOm(C.Pz);this.
Atw(A.z2(A.abg.A5m));this.Et(A.z2(A.abg.Aoy));},_className:"Application::AnimalWeights"
};C.AIi={Aiz:function(Lk){if(!Lk)return;var EZ=A._NewObject(A.Device.Filter,0);var
Hh=A._NewObject(A.Device.Int32FilterCriterion,0);Hh.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).V.Id,true);EZ.CO(Hh);var AxG=A._NewObject(A.Device.Int32FilterCriterion
,0);AxG.Initialize(7,2,0,true);EZ.CO(AxG);Lk.Bo(EZ);},AAa:function(){return A._GetAutoObject(
A.Device.Device).Bt.Cd()>0;},_Init:function(aArg){C.AbH._Init.call(this,aArg);this.
__proto__=C.AIi;this.AOv(C.AP3);this.AOw(C.ALh);this.AOm(C.Se);this.Atw(A.z2(A.abg.
A1C));this.Et(A.z2(A.abg.Aox));},_ReInit:function(){C.AbH._ReInit.call(this);this.
Atw(A.z2(A.abg.A1C));this.Et(A.z2(A.abg.Aox));},_className:"Application::AnimalTemperatures"
};C.APc={TX:null,TY:null,Wa:null,AeD:null,KK:null,AP:null,A4:null,DQ:null,KI:null
,Aly:null,Lh:null,Li:null,Aao:null,Aap:null,Init:function(aArg){},Bh:function(aSize
){C.A$.Bh.call(this,aSize);this.Background.G(A.aaQ(this.Background.M,((aSize[0]*
60)/100)|0));this.T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AP.G([this.T.M[
2]-1,0,this.T.M[2]+1,aSize[1]]);this.KK.G([this.T.M[2],0,this.Background.M[2],aSize[
1]]);this.A4.G([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
TX.G([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.DQ.G([this.
TX.M[2]-1,0,this.TX.M[2]+1,aSize[1]]);this.TY.G([this.TX.M[2],0,this.TX.M[2]+22,
aSize[1]]);this.KI.G([this.TY.M[2]-1,0,this.TY.M[2]+1,aSize[1]]);this.Wa.G([this.
TY.M[2],0,this.TY.M[2]+22,aSize[1]]);this.Aly.G([this.Wa.M[2]-1,0,this.Wa.M[2]+1
,aSize[1]]);this.AeD.G([this.Wa.M[2],0,aSize[0],aSize[1]]);this.Lh.G(this.TX.M);
this.Li.G(this.TY.M);this.Aao.G(this.Wa.M);this.Aap.G(this.AeD.M);},Ai:function(
Ae){C.A$.Ai.call(this,Ae);this.KK.L(this.T.AV);},B7:function(Z){if(!this.AZ)return;
this.Hl=Z;if(!!this.AZ){var Ajk=this.AZ.Hr(Z,6);var AVK=this.AZ.IC(Z,3);var AWo=
this.AZ.IC(Z,2);var AWn=this.AZ.IC(Z,5);var AX6=this.AZ.IC(Z,4);this.U(A._GetAutoObject(
A.abk.K5).AKe(Ajk));this.KK.R(A._GetAutoObject(A.abk.K5).A0G(Ajk));this.TX.L(A._GetAutoObject(
A.abk.Assessment).Pp(AVK));this.TY.L(A._GetAutoObject(A.abk.Assessment).Pp(AWo));
this.Wa.L(A._GetAutoObject(A.abk.Assessment).Pp(AWn));this.AeD.L(A._GetAutoObject(
A.abk.Assessment).Pp(AX6));this.Lh.L(A._GetAutoObject(A.abk.Assessment).VJ(AVK));
this.Li.L(A._GetAutoObject(A.abk.Assessment).VJ(AWo));this.Aao.L(A._GetAutoObject(
A.abk.Assessment).VJ(AWn));this.Aap.L(A._GetAutoObject(A.abk.Assessment).VJ(AX6)
);this.Lh.W(AVK===5);this.Li.W(AWo===5);this.Aao.W(AWn===5);this.Aap.W(AX6===5);
this.Al();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(
this.TX={I:this},0);A.abh.AH._Init.call(this.TY={I:this},0);A.abh.AH._Init.call(
this.Wa={I:this},0);A.abh.AH._Init.call(this.AeD={I:this},0);A.abh.Text._Init.call(
this.KK={I:this},0);A.abh.AH._Init.call(this.AP={I:this},0);A.abh.AH._Init.call(
this.A4={I:this},0);A.abh.AH._Init.call(this.DQ={I:this},0);A.abh.AH._Init.call(
this.KI={I:this},0);A.abh.AH._Init.call(this.Aly={I:this},0);A.abh.Text._Init.call(
this.Lh={I:this},0);A.abh.Text._Init.call(this.Li={I:this},0);A.abh.Text._Init.call(
this.Aao={I:this},0);A.abh.Text._Init.call(this.Aap={I:this},0);this.__proto__=C.
APc;this.T.G(AdC);this.TX.G(ATW);this.TY.G(ATX);this.Wa.G(ATY);this.AeD.G(ATZ);this.
KK.R(Kb);this.KK.L(A.iF.Text);this.AP.L(A.iF.A7);this.A4.L(A.iF.A7);this.DQ.L(A.
iF.A7);this.KI.L(A.iF.A7);this.Aly.L(A.iF.A7);this.Lh.G(AT0);this.Lh.R(Qj);this.
Li.G(AT1);this.Li.R(Qj);this.Aao.G(AT2);this.Aao.R(Qj);this.Aap.G(AT3);this.Aap.
R(Qj);this.J(this.TX,0);this.J(this.TY,0);this.J(this.Wa,0);this.J(this.AeD,0);this.
J(this.KK,0);this.J(this.AP,0);this.J(this.A4,0);this.J(this.DQ,0);this.J(this.KI
,0);this.J(this.Aly,0);this.J(this.Lh,0);this.J(this.Li,0);this.J(this.Aao,0);this.
J(this.Aap,0);this.KK.Y(A.zW(A.eV.Au));this.Lh.Y(A.zW(A.eV.Au));this.Li.Y(A.zW(A.
eV.Au));this.Aao.Y(A.zW(A.eV.Au));this.Aap.Y(A.zW(A.eV.Au));this.Init(aArg);},_Done:
function(){this.__proto__=C.A$;this.TX._Done();this.TY._Done();this.Wa._Done();this.
AeD._Done();this.KK._Done();this.AP._Done();this.A4._Done();this.DQ._Done();this.
KI._Done();this.Aly._Done();this.Lh._Done();this.Li._Done();this.Aao._Done();this.
Aap._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.
TX._ReInit();this.TY._ReInit();this.Wa._ReInit();this.AeD._ReInit();this.KK._ReInit(
);this.AP._ReInit();this.A4._ReInit();this.DQ._ReInit();this.KI._ReInit();this.Aly.
_ReInit();this.Lh._ReInit();this.Li._ReInit();this.Aao._ReInit();this.Aap._ReInit(
);},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.TX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AeD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aly)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Lh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Li)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aao)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aap
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingListItem"};C.ALf={
FE:null,W9:null,W5:null,W6:null,W7:null,W8:null,_Init:function(aArg){C.Ef._Init.
call(this,aArg);A.abh.Text._Init.call(this.FE={I:this},0);A.abh.Text._Init.call(
this.W9={I:this},0);A.abh.Text._Init.call(this.W5={I:this},0);A.abh.Text._Init.call(
this.W6={I:this},0);A.abh.Text._Init.call(this.W7={I:this},0);A.abh.Text._Init.call(
this.W8={I:this},0);this.__proto__=C.ALf;this.Background.L(A.iF.Text);this.FE.G(
AEw);this.FE.A0(0x11);this.FE.R(A.z2(A.abg.Date));this.FE.L(A.iF.Bg);this.W9.G(Au$
);this.W9.A0(0x12);this.W9.R(A.z2(A.abg.Bp));this.W9.L(A.iF.Bg);this.W5.G(AT4);this.
W5.A0(0x12);this.W5.R(A.z2(A.abg.APe));this.W5.L(A.iF.Bg);this.W6.G(AT5);this.W6.
A0(0x12);this.W6.R(A.z2(A.abg.APf));this.W6.L(A.iF.Bg);this.W7.G(AT6);this.W7.A0(
0x12);this.W7.R(A.z2(A.abg.AJ9));this.W7.L(A.iF.Bg);this.W8.G(AT7);this.W8.A0(0x12
);this.W8.R(A.z2(A.abg.AI9));this.W8.L(A.iF.Bg);this.J(this.FE,0);this.J(this.W9
,0);this.J(this.W5,0);this.J(this.W6,0);this.J(this.W7,0);this.J(this.W8,0);this.
FE.Y(A.zW(A.eV.Au));this.W9.Y(A.zW(A.eV.Au));this.W5.Y(A.zW(A.eV.Au));this.W6.Y(
A.zW(A.eV.Au));this.W7.Y(A.zW(A.eV.Au));this.W8.Y(A.zW(A.eV.Au));},_Done:function(
){this.__proto__=C.Ef;this.FE._Done();this.W9._Done();this.W5._Done();this.W6._Done(
);this.W7._Done();this.W8._Done();C.Ef._Done.call(this);},_ReInit:function(){C.Ef.
_ReInit.call(this);this.FE._ReInit();this.W9._ReInit();this.W5._ReInit();this.W6.
_ReInit();this.W7._ReInit();this.W8._ReInit();this.FE.R(A.z2(A.abg.Date));this.W9.
R(A.z2(A.abg.Bp));this.W5.R(A.z2(A.abg.APe));this.W6.R(A.z2(A.abg.APf));this.W7.
R(A.z2(A.abg.AJ9));this.W8.R(A.z2(A.abg.AI9));this.FE.Y(A.zW(A.eV.Au));this.W9.Y(
A.zW(A.eV.Au));this.W5.Y(A.zW(A.eV.Au));this.W6.Y(A.zW(A.eV.Au));this.W7.Y(A.zW(
A.eV.Au));this.W8.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.Ef._Mark.call(this
,D);if((B=this.FE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.W5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W6)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W8
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineRatings"};C.AIc={
Aiz:function(Lk){if(!Lk)return;var EZ=A._NewObject(A.Device.Filter,0);var Hh=A._NewObject(
A.Device.Int32FilterCriterion,0);Hh.Initialize(1,0,A._GetAutoObject(A.Device.Helper
).V.Id,true);EZ.CO(Hh);var Axo=A._NewObject(A.Device.AssessmentFilterCriterion,0
);Axo.Initialize(3,5,0,true);EZ.CO(Axo);Lk.Bo(EZ);},AAa:function(){if(!A._GetAutoObject(
A.Device.Device).Bt)return false;return A._GetAutoObject(A.Device.Device).Bt.Cd(
)>0;},_Init:function(aArg){C.AbH._Init.call(this,aArg);this.__proto__=C.AIc;this.
AOv(C.APc);this.AOw(C.ALf);this.AOm(C.Sd);this.Atw(A.z2(A.abg.At6));this.Et(A.z2(
A.abg.Ak6));},_ReInit:function(){C.AbH._ReInit.call(this);this.Atw(A.z2(A.abg.At6
));this.Et(A.z2(A.abg.Ak6));},_className:"Application::AnimalRatings"};C.H8={Co:
null,Ac:null,T:null,SV:5,U:function(E){C.Ix.U.call(this,E);this.T.R(E);},CW:function(
E){C.Ix.CW.call(this,E);this.T.L(E);},Y:function(E){if(this.Co===E)return;this.Co=
E;this.T.Y(this.Co);},ArM:function(H){var B;var ML=(A.Core.Ac.isPrototypeOf(H)?H:
null);if(!ML)return;if(((B=ML.Dd(0x1))[2]-B[0])>((B=ML.M)[2]-B[0]))this.Y(A.zW(A.
eV.K7));},JM:function(E){if(this.SV===E)return;this.SV=E;this.Ac.G([].concat(E,this.
Ac.M.slice(1,4)));},Axj:function(H){A.ow([this,this.ArM],this);},_Init:function(
aArg){C.Ix._Init.call(this,aArg);A.Core.Ac._Init.call(this.Ac={I:this},0);A.abh.
Text._Init.call(this.T={I:this},0);this.__proto__=C.H8;this.Ac.AW(0x3F);this.Ac.
G(AEx);this.Ac.A32(5);this.Ac.Le(3);this.T.AW(0x34);this.T.G(Yi);this.T.IZ(true);
this.T.A0(0x11);this.T.L(A.iF.Text);this.T.Aj(true);this.J(this.Ac,0);this.J(this.
T,0);this.Ac.Eu=[this,this.Axj];this.T.Y(A.zW(A.eV.OI));},_Done:function(){this.
__proto__=C.Ix;this.Ac._Done();this.T._Done();C.Ix._Done.call(this);},_ReInit:function(
){C.Ix._ReInit.call(this);this.Ac._ReInit();this.T._ReInit();},_Mark:function(D){
var B;C.Ix._Mark.call(this,D);if((B=this.Co)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.QH={AdR:0,Ai:function(Ae){C.E$.
Ai.call(this,Ae);this.U(A.z2(A.abg.NN));if(this.AdR>=0)this.JN((this.AdR.toFixed(
)+Cv)+A.z2(A.abg.LJ));else this.JN(A.z2(A.abg.Unknown));},B7:function(H){C.E$.B7.
call(this,H);if(!A._GetAutoObject(A.Device.Helper).V.DateOfBirth)this.AdR=-1;else
this.AdR=A._GetAutoObject(A.Device.Helper).V.NN();this.Al();},_Init:function(aArg
){C.E$._Init.call(this,aArg);this.__proto__=C.QH;},_className:"Application::AnimalInfoItemAge"
};C.QL={AYE:0,Ai:function(Ae){C.E$.Ai.call(this,Ae);this.U(A.z2(A.abg.AfT));if(this.
AYE>0)this.JN((A._GetAutoObject(A.Device.Converter).AlP(this.AYE)+Cv)+A._GetAutoObject(
A.abk.Dv).Aa$());else this.JN(A.z2(A.abg.Unknown));},B7:function(H){C.E$.B7.call(
this,H);this.AYE=A._GetAutoObject(A.Device.Helper).V.LastBodyWeight;this.Al();},
_Init:function(aArg){C.E$._Init.call(this,aArg);this.__proto__=C.QL;},_className:
"Application::AnimalInfoItemWeight"};C.Se={Ac:null,DY:null,Ed:null,E5:null,Qb:null
,E4:null,Qc:null,AgZ:0,Or:0,C3:function(){this.Al();},Ai:function(Ae){C.Jc.Ai.call(
this,Ae);this.U(A.z2(A.abg.BaO));this.E5.R(this.AgZ.toFixed());this.E4.R(this.Or.
toFixed());if(!!this.AgZ||!!this.Or)this.Qc.R(AT8+(this.AgZ+this.Or).toFixed());
else this.Qc.R(A.z2(A.abg.A1Y));},B7:function(H){C.Jc.B7.call(this,H);var AiF;AiF=
A._GetAutoObject(A.Device.Helper).BbE(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).V.Id,0,0);this.AgZ=AiF.Get(2);this.Or=AiF.Get(1);this.Al();},CW:
function(E){C.Jc.CW.call(this,E);this.Qb.L(E);this.Qc.L(E);},ApQ:function(H){if(
!!this.AgZ||!!this.Or){this.E5.W(true);this.Qb.W(true);this.E4.W(true);}else{this.
E5.W(false);this.Qb.W(false);this.E4.W(false);}this.DY.G(this.E5.M);this.DY.W(this.
E5.Fe());this.Ed.G(this.E4.M);this.Ed.W(this.E4.Fe());},ArM:function(H){var B;var
ML=(A.Core.Ac.isPrototypeOf(H)?H:null);if(!ML)return;if(((B=ML.Dd(0x1))[2]-B[0])>((
B=ML.M)[2]-B[0])){this.E4.Y(A.zW(A.eV.AB));this.Qb.Y(A.zW(A.eV.AB));this.E5.Y(A.
zW(A.eV.AB));this.Qc.Y(A.zW(A.eV.AB));}},Axj:function(H){A.ow([this,this.ArM],this
);},_Init:function(aArg){C.Jc._Init.call(this,aArg);A.Core.Ac._Init.call(this.Ac={
I:this},0);A.abh.AH._Init.call(this.DY={I:this},0);A.abh.AH._Init.call(this.Ed={
I:this},0);A.abh.Text._Init.call(this.E5={I:this},0);A.abh.Text._Init.call(this.
Qb={I:this},0);A.abh.Text._Init.call(this.E4={I:this},0);A.abh.Text._Init.call(this.
Qc={I:this},0);this.__proto__=C.Se;this.Ac.G(Avc);this.Ac.Bgu(0);this.Ac.Le(3);this.
DY.G(AT9);this.DY.L(A.iF.Hy);this.Ed.G(Ava);this.Ed.L(A.iF.FY);this.E5.AW(0x34);
this.E5.G(Yi);this.E5.HT(2);this.E5.IZ(true);this.E5.R(Yg);this.E5.L(A.iF.Text);
this.E5.Aj(true);this.Qb.AW(0x34);this.Qb.G(Yi);this.Qb.IZ(true);this.Qb.R(AEg);
this.Qb.L(A.iF.Text);this.Qb.Aj(true);this.E4.AW(0x34);this.E4.G(Yi);this.E4.HT(
2);this.E4.IZ(true);this.E4.R(Yg);this.E4.L(A.iF.Bg);this.E4.Aj(true);this.Qc.AW(
0x34);this.Qc.G(Yi);this.Qc.IZ(true);this.Qc.R(Kb);this.Qc.L(A.iF.Text);this.Qc.
Aj(true);this.J(this.Ac,0);this.J(this.DY,0);this.J(this.Ed,0);this.J(this.E5,0);
this.J(this.Qb,0);this.J(this.E4,0);this.J(this.Qc,0);this.Ac.Eu=[this,this.Axj];
this.E5.Rr([this,this.ApQ]);this.E5.Y(A.zW(A.eV.Au));this.Qb.Y(A.zW(A.eV.Au));this.
E4.Rr([this,this.ApQ]);this.E4.Y(A.zW(A.eV.Au));this.Qc.Y(A.zW(A.eV.Au));},_Done:
function(){this.__proto__=C.Jc;this.Ac._Done();this.DY._Done();this.Ed._Done();this.
E5._Done();this.Qb._Done();this.E4._Done();this.Qc._Done();C.Jc._Done.call(this);
},_ReInit:function(){C.Jc._ReInit.call(this);this.Ac._ReInit();this.DY._ReInit();
this.Ed._ReInit();this.E5._ReInit();this.Qb._ReInit();this.E4._ReInit();this.Qc.
_ReInit();this.C3();},_Mark:function(D){var B;C.Jc._Mark.call(this,D);if((B=this.
Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Qb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Qc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemTemperatureRatings"
};C.Pz={Fk:0,HF:0,AWQ:false,Ai:function(Ae){C.E$.Ai.call(this,Ae);this.U(AEy+A.z2(
A.abg.AQB));if(this.AWQ){this.JN((A._GetAutoObject(A.Device.Converter).Nl(this.Fk
,2,true)+Cv)+A._GetAutoObject(A.abk.Dv).Yx());this.Background.L(A._GetAutoObject(
A.abk.Dv).Awr(this.Fk,this.HF));this.CW(A._GetAutoObject(A.abk.Dv).Awt(this.Fk,this.
HF));}else{this.JN(A.z2(A.abg.Unknown));this.Background.L(A.iF.CD);this.CW(A.iF.
Text);}},B7:function(H){C.E$.B7.call(this,H);var KT=A._GetAutoObject(A.Device.Helper
).L6(A._GetAutoObject(A.Device.Helper).V.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).V.TimestampLastWeighing);if(!!KT){this.AWQ=true;this.Fk=A._GetAutoObject(
A.abk.Dv).Ajg(KT,A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).V.LastBodyWeight);}else{this.AWQ=false;this.Fk=0;}this.HF=A._GetAutoObject(
A.Device.Helper).V.AnimalType;this.Al();},_Init:function(aArg){C.E$._Init.call(this
,aArg);this.__proto__=C.Pz;},_className:"Application::AnimalInfoItemAvgWeightGain"
};C.Sd={Ac:null,Fm:null,DY:null,Ed:null,Mz:null,E5:null,E4:null,Qa:null,Yz:0,AgZ:
0,Or:0,C3:function(){this.Al();},Ai:function(Ae){C.Jc.Ai.call(this,Ae);this.U(A.
z2(A.abg.At6));this.Mz.R(this.Yz.toFixed());this.E5.R(this.AgZ.toFixed());this.E4.
R(this.Or.toFixed());},B7:function(H){C.Jc.B7.call(this,H);var AiF;AiF=A._GetAutoObject(
A.Device.Helper).A0L(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).V.Id,0,0);this.Yz=AiF.Get(3);this.AgZ=AiF.Get(2);this.Or=AiF.Get(1);this.
Al();},ApQ:function(H){if((!!this.Yz||!!this.AgZ)||!!this.Or){this.Mz.W(true);this.
E5.W(true);this.E4.W(true);this.Qa.W(false);}else{this.Mz.W(false);this.E5.W(false
);this.E4.W(false);this.Qa.W(true);}this.Fm.G(this.Mz.M);this.Fm.W(this.Mz.Fe());
this.DY.G(this.E5.M);this.DY.W(this.E5.Fe());this.Ed.G(this.E4.M);this.Ed.W(this.
E4.Fe());},ArM:function(H){var B;var ML=(A.Core.Ac.isPrototypeOf(H)?H:null);if(!
ML)return;if(((B=ML.Dd(0x1))[2]-B[0])>((B=ML.M)[2]-B[0])){this.E4.Y(A.zW(A.eV.AB
));this.E5.Y(A.zW(A.eV.AB));this.Mz.Y(A.zW(A.eV.AB));}},Axj:function(H){A.ow([this
,this.ArM],this);},_Init:function(aArg){C.Jc._Init.call(this,aArg);A.Core.Ac._Init.
call(this.Ac={I:this},0);A.abh.AH._Init.call(this.Fm={I:this},0);A.abh.AH._Init.
call(this.DY={I:this},0);A.abh.AH._Init.call(this.Ed={I:this},0);A.abh.Text._Init.
call(this.Mz={I:this},0);A.abh.Text._Init.call(this.E5={I:this},0);A.abh.Text._Init.
call(this.E4={I:this},0);A.abh.Text._Init.call(this.Qa={I:this},0);this.__proto__=
C.Sd;this.Ac.AW(0x3F);this.Ac.G(Avc);this.Ac.A32(5);this.Ac.Le(3);this.Fm.G(AT_);
this.Fm.L(A.iF.E1);this.DY.G(AEz);this.DY.L(A.iF.Hy);this.Ed.G(AT$);this.Ed.L(A.
iF.FY);this.Mz.AW(0x3C);this.Mz.G(Yi);this.Mz.HT(2);this.Mz.IZ(true);this.Mz.R(Yg
);this.Mz.L(A.iF.Text);this.Mz.Aj(true);this.E5.AW(0x3C);this.E5.G(Yi);this.E5.HT(
2);this.E5.IZ(true);this.E5.R(Yg);this.E5.L(A.iF.Text);this.E5.Aj(true);this.E4.
AW(0x3C);this.E4.G(Yi);this.E4.HT(2);this.E4.IZ(true);this.E4.R(Yg);this.E4.L(A.
iF.Bg);this.E4.Aj(true);this.Qa.AW(0x34);this.Qa.G(Yi);this.Qa.IZ(true);this.Qa.
A0(0x11);this.Qa.R(A.z2(A.abg.A1Y));this.Qa.L(A.iF.Text);this.Qa.Aj(true);this.Qa.
W(false);this.J(this.Ac,0);this.J(this.Fm,0);this.J(this.DY,0);this.J(this.Ed,0);
this.J(this.Mz,0);this.J(this.E5,0);this.J(this.E4,0);this.J(this.Qa,0);this.Ac.
Eu=[this,this.Axj];this.Mz.Rr([this,this.ApQ]);this.Mz.Y(A.zW(A.eV.Au));this.E5.
Rr([this,this.ApQ]);this.E5.Y(A.zW(A.eV.Au));this.E4.Rr([this,this.ApQ]);this.E4.
Y(A.zW(A.eV.Au));this.Qa.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.Jc;
this.Ac._Done();this.Fm._Done();this.DY._Done();this.Ed._Done();this.Mz._Done();
this.E5._Done();this.E4._Done();this.Qa._Done();C.Jc._Done.call(this);},_ReInit:
function(){C.Jc._ReInit.call(this);this.Ac._ReInit();this.Fm._ReInit();this.DY._ReInit(
);this.Ed._ReInit();this.Mz._ReInit();this.E5._ReInit();this.E4._ReInit();this.Qa.
_ReInit();this.C3();},_Mark:function(D){var B;C.Jc._Mark.call(this,D);if((B=this.
Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ed)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.E4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qa)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemRatings"};C.AHX={
_Init:function(aArg){C.Ag1._Init.call(this,aArg);this.__proto__=C.AHX;this.N.Cb(
A.z2(A.abg.A1P));this.AYQ=1;this.Qe.C7(A.zW(A.eV.AB));},_ReInit:function(){C.Ag1.
_ReInit.call(this);this.N.Cb(A.z2(A.abg.A1P));this.Qe.C7(A.zW(A.eV.AB));},_className:
"Application::AnimalActionActionsScreen"};C.H9={_Init:function(aArg){C.Ag1._Init.
call(this,aArg);this.__proto__=C.H9;this.N.Cb(A.z2(A.abg.AZw));this.Nk.R(A.z2(A.
abg.ArN));},_ReInit:function(){C.Ag1._ReInit.call(this);this.N.Cb(A.z2(A.abg.AZw
));this.Nk.R(A.z2(A.abg.ArN));},_className:"Application::AnimalListActionsScreen"
};C.AMz={NX:null,Ij:null,Hu:null,Ih:null,Ga:null,AjM:function(H){A.ow([this,this.
BsA],this);},BsA:function(H){A._GetAutoObject(C.A1).BX(3);},_Init:function(aArg){
C.CG._Init.call(this,aArg);C.NX._Init.call(this.NX={I:this},0);C.B_._Init.call(this.
Ij={I:this},0);C.AlA._Init.call(this.Hu={I:this},0);C.ACE._Init.call(this.Ih={I:
this},0);C.AfG._Init.call(this.Ga={I:this},0);this.__proto__=C.AMz;var B;this.Lf(
A.z2(A.abg.A4Y));this.Ij.G(AiX);this.Ij.Aj(true);this.Ij.U(A.z2(A.abg.Language));
this.Ij.A3L(100);this.Hu.G(AfX);this.Hu.Aj(true);this.Hu.U(A.z2(A.abg.Date));this.
Hu.Bk(true);this.Ih.G(AiY);this.Ih.Aj(true);this.Ih.U(A.z2(A.abg.Bp));this.Ga.G(
AfW);this.Ga.Aj(true);this.Ga.W(true);this.Ga.U(A.z2(A.abg.ACc));this.Ga.Bk(true
);this.Ga.AtK(false);this.Ga.A3T(true);this.Lg(this.Ac,-1);this.Lg(this.AD,-1);this.
J(this.Ij,0);this.J(this.Hu,0);this.J(this.Ih,0);this.J(this.Ga,0);this.Ij.AoV(A.
zW(A.eV.LN));this.Ij.AoW(A.zW(A.eV.LN));this.Ij.AF([B=this.NX,B.Cz,B.CB]);this.Ij.
Dh(this.NX);this.Hu.Afl([B=this.Hu,B.Gy]);this.Hu.Hb([this,this.Es,this.HU]);this.
Hu.Aid(A.zW(A.abi.Edit));this.Hu.AcV([B=A._GetAutoObject(A.Device.Helper),B.Tl,B.
Tm]);this.Ih.Afl([B=this.Ih,B.Gy]);this.Ih.Hb([this,this.Es,this.HU]);this.Ih.Aid(
A.zW(A.abi.Edit));this.Ih.AcV([B=A._GetAutoObject(A.Device.Helper),B.Tl,B.Tm]);this.
Ga.Afl([B=this.Ga,B.Gy]);this.Ga.Hb([this,this.Es,this.HU]);this.Ga.Aid(A.zW(A.abi.
Edit));this.Ga.AF([B=A._GetAutoObject(A.Device.Device),B.AN0,B.AUL]);},_Done:function(
){this.__proto__=C.CG;this.NX._Done();this.Ij._Done();this.Hu._Done();this.Ih._Done(
);this.Ga._Done();C.CG._Done.call(this);},_ReInit:function(){C.CG._ReInit.call(this
);this.NX._ReInit();this.Ij._ReInit();this.Hu._ReInit();this.Ih._ReInit();this.Ga.
_ReInit();this.Lf(A.z2(A.abg.A4Y));this.Ij.U(A.z2(A.abg.Language));this.Hu.U(A.z2(
A.abg.Date));this.Ih.U(A.z2(A.abg.Bp));this.Ga.U(A.z2(A.abg.ACc));},_Mark:function(
D){var B;C.CG._Mark.call(this,D);if((B=this.NX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ih)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ga)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InitializationSettingsScreen"};C.AbH={Bf:
null,E2:null,AkK:null,Aks:null,T8:null,A02:A.jm,J5:A.jm,AMX:null,AMY:null,AzB:null
,CE:function(H){var B;C.DK.CE.call(this,H);A.za([this,this.AXj],[B=A._GetAutoObject(
A.Device.Helper).V,B.P0,B.OnSetId],0);this.AXj(this);},Fc:function(H){var B;A.zn([
this,this.AXj],[B=A._GetAutoObject(A.Device.Helper).V,B.P0,B.OnSetId],0);C.DK.Fc.
call(this,H);},XA:function(E){C.DK.XA.call(this,E);if(A.z$(this.AR,E))return;if(
!!this.Bf)this.Bf.XA(E);},AOv:function(E){if(this.AMX===E)return;this.AMX=E;if(!
!this.Bf)this.Bf.Nb(E);},AOw:function(E){if(this.AMY===E)return;this.AMY=E;this.
BhV(this);},AOm:function(E){if(this.AzB===E)return;this.AzB=E;A.ow([this,this.BhU
],this);},Atw:function(E){if(this.A02===E)return;this.A02=E;this.T8.R(E);},Et:function(
E){if(this.J5===E)return;this.J5=E;if(!!this.Bf)this.Bf.Et(E);},Aiz:function(Lk){
A.aa8("%s",AUa);},AAa:function(){A.aa8("%s",AiV);return false;},Aue:function(H){
if(!!this.Bf)this.HW(this.Bf);this.Bf=A._NewObject(C.Fs,0);this.Bf.G(Al4);this.Bf.
Xz(A._GetAutoObject(A.Device.Device).Bt);this.Bf.Et(this.J5);this.Bf.Nb(this.AMX
);this.Bf.XA(this.AR);this.J(this.Bf,0);this.A8(this.Bf);},BhV:function(H){var B;
if(!!this.E2)this.HW(this.E2);this.E2=(C.Ef.isPrototypeOf(B=A._NewObject(this.AMY
,0))?B:null);this.E2.G(Kc);this.J(this.E2,0);},BhU:function(H){var B;if(!!this.AkK
)this.HW(this.AkK);if(!!this.AzB&&this.AAa()){this.AkK=(C.Ix.isPrototypeOf(B=A._NewObject(
this.AzB,0))?B:null);this.AkK.G(BI);this.AkK.Bk(false);this.J(this.AkK,0);this.T8.
W(false);}else this.T8.W(true);},AXj:function(H){this.Aiz(A._GetAutoObject(A.Device.
Device).Bt);this.Aue(this);},_Init:function(aArg){C.DK._Init.call(this,aArg);A.abh.
AH._Init.call(this.Aks={I:this},0);C.CH._Init.call(this.T8={I:this},0);this.__proto__=
C.AbH;this.Aks.G(BI);this.Aks.L(A.iF.CD);this.T8.G(ADM);this.T8.A0(0x11);this.T8.
L(A.iF.Text);this.J(this.Aks,0);this.J(this.T8,0);this.T8.Y(A.zW(A.eV.OI));this.
T8.Bz(A.zW(A.eV.K7));},_Done:function(){this.__proto__=C.DK;this.Aks._Done();this.
T8._Done();C.DK._Done.call(this);},_ReInit:function(){C.DK._ReInit.call(this);this.
Aks._ReInit();this.T8._ReInit();},_Mark:function(D){var B;C.DK._Mark.call(this,D
);if((B=this.Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.E2)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AkK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aks)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T8)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::AnimalInfoTable"};C.Jd={AnimalListContentToString:null
,Init:function(aArg){var B;A.za([this,this.A7A],[B=A._GetAutoObject(A.Device.Device
),B.AAG,B.AEJ],0);A.ow([this,this.A7A],this);},Du:function(){return 4;},GP:function(
aIndex){return this.AnimalListContentToString.Ca(this.Da(aIndex));},AF:function(
E){C.Dj.AF.call(this,E);A._GetAutoObject(A.Device.Device).ZZ(E);},A7A:function(H
){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;A.aat([this,this.
Cz,this.CB],0);},_Init:function(aArg){C.Dj._Init.call(this,aArg);A.Device.AnimalListContentToString.
_Init.call(this.AnimalListContentToString={I:this},0);this.__proto__=C.Jd;this.Ci.
Set(0,0);this.Ci.Set(1,1);this.Ci.Set(2,2);this.Ci.Set(3,3);this.Init(aArg);},_Done:
function(){this.__proto__=C.Dj;this.AnimalListContentToString._Done();C.Dj._Done.
call(this);},_ReInit:function(){C.Dj._ReInit.call(this);this.AnimalListContentToString.
_ReInit();},_Mark:function(D){var B;C.Dj._Mark.call(this,D);if((B=this.AnimalListContentToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.
AM2={Ij:null,Xg:null,Xn:null,Xm:null,Xo:null,Xh:null,Xk:null,Xj:null,NX:null,_Init:
function(aArg){C.CG._Init.call(this,aArg);C.B_._Init.call(this.Ij={I:this},0);C.
Rk._Init.call(this.Xg={I:this},0);C.Rk._Init.call(this.Xn={I:this},0);C.Rk._Init.
call(this.Xm={I:this},0);C.Rk._Init.call(this.Xo={I:this},0);C.Rk._Init.call(this.
Xh={I:this},0);C.Rk._Init.call(this.Xk={I:this},0);C.Rk._Init.call(this.Xj={I:this
},0);C.NX._Init.call(this.NX={I:this},0);this.__proto__=C.AM2;var B;this.Lf(A.z2(
A.abg.Settings));this.Ij.G(AiX);this.Ij.Aj(true);this.Ij.U(A.z2(A.abg.Language));
this.Ij.A3L(100);this.Xg.G(Aqb);this.Xg.Aj(true);this.Xg.U(A.z2(A.abg.AyP));this.
Xg.Rt(16);this.Xn.G(Aqc);this.Xn.Aj(true);this.Xn.U(A.z2(A.abg.ADa));this.Xn.Rt(
22);this.Xm.G(Aqd);this.Xm.Aj(true);this.Xm.U(A.z2(A.abg.Temperature));this.Xm.Rt(
17);this.Xo.G(Avd);this.Xo.Aj(true);this.Xo.U(A.z2(A.abg.AnP));this.Xo.Rt(45);this.
Xh.G(Al5);this.Xh.Aj(true);this.Xh.U(A.z2(A.abg.Device));this.Xh.Rt(18);this.Xk.
G(Al5);this.Xk.Aj(true);this.Xk.U(A.z2(A.abg.ACm));this.Xk.Rt(19);this.Xj.G(Ap8);
this.Xj.Aj(true);this.Xj.U(A.z2(A.abg.Ay7));this.Xj.Rt(87);this.J(this.Ij,0);this.
J(this.Xg,0);this.J(this.Xn,0);this.J(this.Xm,0);this.J(this.Xo,0);this.J(this.Xh
,0);this.J(this.Xk,0);this.J(this.Xj,0);this.Ij.AoV(A.zW(A.eV.LN));this.Ij.AoW(A.
zW(A.eV.LN));this.Ij.AF([B=this.NX,B.Cz,B.CB]);this.Ij.Dh(this.NX);this.Xg.AR=[B=
this.Xg,B.Rv];this.Xn.AR=[B=this.Xn,B.Rv];this.Xm.AR=[B=this.Xm,B.Rv];this.Xo.AR=[
B=this.Xo,B.Rv];this.Xh.AR=[B=this.Xh,B.Rv];this.Xk.AR=[B=this.Xk,B.Rv];this.Xj.
AR=[B=this.Xj,B.Rv];},_Done:function(){this.__proto__=C.CG;this.Ij._Done();this.
Xg._Done();this.Xn._Done();this.Xm._Done();this.Xo._Done();this.Xh._Done();this.
Xk._Done();this.Xj._Done();this.NX._Done();C.CG._Done.call(this);},_ReInit:function(
){C.CG._ReInit.call(this);this.Ij._ReInit();this.Xg._ReInit();this.Xn._ReInit();
this.Xm._ReInit();this.Xo._ReInit();this.Xh._ReInit();this.Xk._ReInit();this.Xj.
_ReInit();this.NX._ReInit();this.Lf(A.z2(A.abg.Settings));this.Ij.U(A.z2(A.abg.Language
));this.Xg.U(A.z2(A.abg.AyP));this.Xn.U(A.z2(A.abg.ADa));this.Xm.U(A.z2(A.abg.Temperature
));this.Xo.U(A.z2(A.abg.AnP));this.Xh.U(A.z2(A.abg.Device));this.Xk.U(A.z2(A.abg.
ACm));this.Xj.U(A.z2(A.abg.Ay7));},_Mark:function(D){var B;C.CG._Mark.call(this,
D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Xn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Xj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NX)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MainSettingsScreen"};C.AH9={EK:null,Init:function(
aArg){this.EK.Afs(A._NewObject(A.Core.Bp,0).Initialize(A._GetAutoObject(A.Device.
Helper).DN()).Format(A.z2(A.abg.AeS)));},APj:function(){this.EK.AcN(this.AKy());
this.YB=!this.EK.EB.AM;},AgG:function(H){this.EK.Afs(A._NewObject(A.Core.Bp,0).Initialize(
A._GetAutoObject(A.Device.Helper).DN()).Format(A.z2(A.abg.AeS)));this.APj();if(A.
_GetAutoObject(A.Device.Helper).V.TimestampLastTemperature>0)this.Et(A.z2(A.abg.
A1W));else this.Et(A.z2(A.abg.Aox));this.Al();},AKy:function(){var Bx=A._NewObject(
C.AnJ,0);var Pn=A._GetAutoObject(A.Device.Helper).AJO(A._GetAutoObject(A.Device.
Helper).DN());var Dc=A._GetAutoObject(A.Device.Helper).AnG(Pn-(86400*this.LW));Bx.
Ale(AUb);Bx.P1([].concat(0,Bx.Fz.slice(1,4)));Bx.P1(A.aaQ(Bx.Fz,(Pn-Dc)|0));Bx.P1(
A.aaS(Bx.Fz,3400));Bx.P1([].concat(Bx.Fz.slice(0,3),4200));var FU=A._GetAutoObject(
A.Device.Device).Bt.Cd();Bx.AtB(FU);Bx.Ws();if(FU>0){var P=0;while(P<FU){var Ang=
A._GetAutoObject(A.Device.Device).Bt.Cp(P,7);var Anh=A._GetAutoObject(A.Device.Device
).Bt.Hr(P,6)-Dc;if(Ang>0)Bx.AnD(Anh,Ang);P=P+1;}}return Bx;},_Init:function(aArg
){C.Ku._Init.call(this,aArg);C.An8._Init.call(this.EK={I:this},0);this.__proto__=
C.AH9;this.EK.G(AUc);this.EK.U(A.z2(A.abg.Temperature));this.EK.ABh(C.ACX);this.
J(this.EK,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.Ku;this.EK._Done(
);C.Ku._Done.call(this);},_ReInit:function(){C.Ku._ReInit.call(this);this.EK._ReInit(
);},_Mark:function(D){var B;C.Ku._Mark.call(this,D);if((B=this.EK)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"};C.AH_={Aaz:null
,Pa:null,Ahn:null,YB:false,Init:function(aArg){this.Aaz.Afs(A._NewObject(A.Core.
Bp,0).Initialize(A._GetAutoObject(A.Device.Helper).DN()).Format(A.z2(A.abg.AeS))
);},Ai:function(Ae){C.DK.Ai.call(this,Ae);this.Ahn.W(this.YB);},CE:function(H){var
B;C.DK.CE.call(this,H);A.za([this,this.AgG],[B=A._GetAutoObject(A.Device.Helper)
,B.Tl,B.Tm],0);A.y_([this,this.AgG],A._GetAutoObject(A.Device.Device).Bt,0);A.za([
this,this.Aj2],[B=A._GetAutoObject(A.Device.Helper).V,B.P0,B.OnSetId],0);A.ow([this
,this.Aj2],this);},Fc:function(H){var B;A.zn([this,this.AgG],[B=A._GetAutoObject(
A.Device.Helper),B.Tl,B.Tm],0);A.zl([this,this.AgG],A._GetAutoObject(A.Device.Device
).Bt,0);A.zn([this,this.Aj2],[B=A._GetAutoObject(A.Device.Helper).V,B.P0,B.OnSetId
],0);C.DK.Fc.call(this,H);},Aj2:function(H){var EZ=A._NewObject(A.Device.Filter,
0);var Hh=A._NewObject(A.Device.Int32FilterCriterion,0);Hh.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).V.Id,true);EZ.CO(Hh);A._GetAutoObject(A.Device.Device).Bt.Bo(EZ
);},AgG:function(H){this.Aaz.Afs(A._NewObject(A.Core.Bp,0).Initialize(A._GetAutoObject(
A.Device.Helper).DN()).Format(A.z2(A.abg.AeS)));this.Bhg();this.Al();},Bhg:function(
){var B;var FU=A._GetAutoObject(A.Device.Device).Bt.Cd();var Ks=A._NewObject(C.AnJ
,0);var TL=A._NewObject(C.AnJ,0);var Pn=A._GetAutoObject(A.Device.Helper).AJO(A.
_GetAutoObject(A.Device.Helper).DN());var Dc=A._GetAutoObject(A.Device.Helper).AnG(
A._GetAutoObject(A.Device.Helper).V.DateOfBirth);Ks.P1([].concat(0,Ks.Fz.slice(1
,4)));Ks.P1(A.aaQ(Ks.Fz,(Pn-Dc)|0));Ks.P1(A.aaS(Ks.Fz,0));Ks.P1([].concat(Ks.Fz.
slice(0,3),150000));Ks.Ale(AUd);TL.P1([].concat(0,TL.Fz.slice(1,4)));TL.P1(A.aaQ(
TL.Fz,(Pn-Dc)|0));TL.P1(A.aaS(TL.Fz,0));TL.P1([].concat(TL.Fz.slice(0,3),1500));
TL.Ale(AUe);Ks.AtB(FU);Ks.Ws();TL.AtB(FU);TL.Ws();if(FU>0){var P=0;var VN=0;var AwO=
0;var AF6=0;var AWt=0;var A8f=true;while(P<FU){var AjW=A._GetAutoObject(A.Device.
Device).Bt.Cp(P,8);var YP=A._GetAutoObject(A.Device.Device).Bt.Hr(P,6)-Dc;if(AjW>
0){Ks.AnD(YP,AjW);if(!AWt){AWt=YP;AF6=AjW;}if(AwO>0){var KT=A._GetAutoObject(A.Device.
Helper).L6(AwO,YP);if(!!KT){var Fk=A._GetAutoObject(A.abk.Dv).Ajg(KT,VN,AjW);if(
A8f){TL.AnD(AwO,Fk);A8f=false;}TL.AnD(YP,Fk);}}VN=AjW;AwO=YP;}P=P+1;}var Abw=A.z2(
A.abg.A$K);var Fk=A._GetAutoObject(A.Device.Helper).BbG(AWt,AwO,AF6,VN);Abw=A._GetAutoObject(
A.Device.Helper).Nh(Abw,Qi,Fk.toFixed());Abw=A._GetAutoObject(A.Device.Helper).Nh(
Abw,AuS,A._GetAutoObject(A.abk.Dv).Yx());this.Pa.Ia.R(Abw);}this.YB=!Ks.AM;if(this.
YB)this.Pa.Ia.R(A.jm);(C.Pa.isPrototypeOf(B=this.Pa.EK)?B:null).Alb([B=A._GetAutoObject(
A.Device.Helper).V,B.O0,B.DO]);this.Aaz.AcN(Ks);this.Pa.AcN(TL);},_Init:function(
aArg){C.DK._Init.call(this,aArg);C.An8._Init.call(this.Aaz={I:this},0);C.An8._Init.
call(this.Pa={I:this},0);C.Aix._Init.call(this.Ahn={I:this},0);this.__proto__=C.
AH_;this.Aaz.G(AUf);this.Aaz.U(A.z2(A.abg.AfT));this.Aaz.ABh(C.AIE);this.Pa.G(AUg
);this.Pa.U(A.z2(A.abg.AQB));this.Pa.ABh(C.Pa);this.Ahn.G(Vp);this.Ahn.R(A.z2(A.
abg.Aoy));this.J(this.Aaz,0);this.J(this.Pa,0);this.J(this.Ahn,0);this.Init(aArg
);},_Done:function(){this.__proto__=C.DK;this.Aaz._Done();this.Pa._Done();this.Ahn.
_Done();C.DK._Done.call(this);},_ReInit:function(){C.DK._ReInit.call(this);this.
Aaz._ReInit();this.Pa._ReInit();this.Ahn._ReInit();},_Mark:function(D){var B;C.DK.
_Mark.call(this,D);if((B=this.Aaz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pa).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoWeightsGraph"};C.AH7={Ar$:null,Ar_:null,At9:null,ArI:null
,TW:null,Zn:null,Zm:null,Aah:null,Ac$:null,Init:function(aArg){this.TW.Afs(A._NewObject(
A.Core.Bp,0).Initialize(A._GetAutoObject(A.Device.Helper).DN()).Format(A.z2(A.abg.
AeS)));},AYw:function(H){this.TW.Z8(this.ArI);this.Zn.Z8(this.Ar$);this.Zm.Z8(this.
Ar_);this.Aah.Z8(this.At9);},At7:function(){var FU=A._GetAutoObject(A.Device.Device
).Bt.Cd();this.ArI=A._NewObject(C.Ag$,0);this.Ar$=A._NewObject(C.Ag$,0);this.Ar_=
A._NewObject(C.Ag$,0);this.At9=A._NewObject(C.Ag$,0);if(FU>0){var P=FU-1;while(P>=
0){var DI=A._GetAutoObject(A.Device.Device).Bt.Hr(P,6);this.Aqr(this.ArI,P,3,DI);
this.Aqr(this.Ar$,P,2,DI);this.Aqr(this.Ar_,P,5,DI);this.Aqr(this.At9,P,4,DI);P=
P-1;}}this.YB=!(((this.ArI.AM+this.Ar_.AM)+this.Ar$.AM)+this.At9.AM);A.ow([this,
this.AYw],this);},Aqr:function(AVs,Z,AVr,Ph){var Ajc=A._GetAutoObject(A.Device.Device
).Bt.IC(Z,AVr);if(!!Ajc)AVs.NM(Ajc,Ph);},Z7:function(E){if(this.LW===E)return;C.
Ku.Z7.call(this,E);if(!!this.TW)this.TW.Z7(E);if(!!this.Zn)this.Zn.Z7(E);if(!!this.
Zm)this.Zm.Z7(E);if(!!this.Aah)this.Aah.Z7(E);this.Ac$.Z7(E);},AgG:function(H){this.
TW.Afs(A._NewObject(A.Core.Bp,0).Initialize(A._GetAutoObject(A.Device.Helper).DN(
)).Format(A.z2(A.abg.AeS)));this.At7();if(A._GetAutoObject(A.Device.Helper).V.TimestampLastAssessment>
0)this.Et(A.z2(A.abg.Bdc));else this.Et(A.z2(A.abg.Ak6));this.Al();},_Init:function(
aArg){C.Ku._Init.call(this,aArg);C.Afy._Init.call(this.TW={I:this},0);C.Afy._Init.
call(this.Zn={I:this},0);C.Afy._Init.call(this.Zm={I:this},0);C.Afy._Init.call(this.
Aah={I:this},0);C.APg._Init.call(this.Ac$={I:this},0);this.__proto__=C.AH7;this.
Et(A.z2(A.abg.Ak6));this.TW.G(Bjs);this.TW.R(A.z2(A.abg.ACf));this.Zn.G(Bjt);this.
Zn.R(A.z2(A.abg.Feed));this.Zm.G(Bju);this.Zm.R(A.z2(A.abg.ACh));this.Aah.G(Bjv);
this.Aah.R(A.z2(A.abg.ACi));this.Ac$.G(Bjw);this.J(this.TW,-1);this.J(this.Zn,-1
);this.J(this.Zm,-1);this.J(this.Aah,-1);this.J(this.Ac$,-1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ku;this.TW._Done();this.Zn._Done();this.Zm._Done();this.
Aah._Done();this.Ac$._Done();C.Ku._Done.call(this);},_ReInit:function(){C.Ku._ReInit.
call(this);this.TW._ReInit();this.Zn._ReInit();this.Zm._ReInit();this.Aah._ReInit(
);this.Ac$._ReInit();this.Et(A.z2(A.abg.Ak6));this.TW.R(A.z2(A.abg.ACf));this.Zn.
R(A.z2(A.abg.Feed));this.Zm.R(A.z2(A.abg.ACh));this.Aah.R(A.z2(A.abg.ACi));},_Mark:
function(D){var B;C.Ku._Mark.call(this,D);if((B=this.Ar$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ar_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At9)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ArI)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.TW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aah)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ac$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoRatingsGraph"};C.AH8={EK:null,XJ:null,Ab3:null,AWP:false
,Init:function(aArg){this.XJ.Afs(A._NewObject(A.Core.Bp,0).Initialize(A._GetAutoObject(
A.Device.Helper).DN()).Format(A.z2(A.abg.AeS)));},Bh:function(aSize){C.Ku.Bh.call(
this,aSize);this.Ab3.G(this.EK.M);},Ai:function(Ae){C.Ku.Ai.call(this,Ae);var Bt3=
!this.YB&&this.AWP;if(A._GetAutoObject(A.Device.Helper).V.TimestampLastTemperature>
0)this.Ab3.R(A.z2(A.abg.A1W));else this.Ab3.R(A.z2(A.abg.Aox));if((A._GetAutoObject(
A.Device.Helper).V.TimestampLastTemperature>0)||(A._GetAutoObject(A.Device.Helper
).V.TimestampLastAssessment>0))this.Et(A.z2(A.abg.Bde));else this.Et(A.z2(A.abg.
Bdf));this.Ab3.W(Bt3);},AgG:function(H){this.XJ.Afs(A._NewObject(A.Core.Bp,0).Initialize(
A._GetAutoObject(A.Device.Helper).DN()).Format(A.z2(A.abg.AeS)));this.YB=true;this.
AWP=true;this.At7();this.APj();this.Al();},APj:function(){this.EK.AcN(this.AKy()
);if(!!this.EK.EB&&(this.EK.EB.AM>0)){this.YB=false;this.AWP=false;}},AKy:function(
){var Bx=A._NewObject(C.AnJ,0);var Pn=A._GetAutoObject(A.Device.Helper).AJO(A._GetAutoObject(
A.Device.Helper).DN());var Dc=A._GetAutoObject(A.Device.Helper).AnG(Pn-(86400*this.
LW));Bx.Ale(Bjx);Bx.P1([].concat(0,Bx.Fz.slice(1,4)));Bx.P1(A.aaQ(Bx.Fz,(Pn-Dc)|
0));Bx.P1(A.aaS(Bx.Fz,3400));Bx.P1([].concat(Bx.Fz.slice(0,3),4200));var FU=A._GetAutoObject(
A.Device.Device).Bt.Cd();Bx.AtB(FU);Bx.Ws();if(FU>0){var P=0;while(P<FU){var Ang=
A._GetAutoObject(A.Device.Device).Bt.Cp(P,7);var Anh=A._GetAutoObject(A.Device.Device
).Bt.Hr(P,6)-Dc;if(Ang>0)Bx.AnD(Anh,Ang);P=P+1;}}return Bx;},BbU:function(){var FU=
A._GetAutoObject(A.Device.Device).Bt.Cd();if(FU>0){var A_I=A._NewObject(C.Ag$,0);
var P=FU-1;while(P>=0){var DD=A._NewObject(A.Device.Rating,0);DD.Fo(P,A._GetAutoObject(
A.Device.Device).Bt);var K0=A._GetAutoObject(A.Device.Helper).Azp(DD);if(!!K0)A_I.
NM(K0,DD.Timestamp);P=P-1;}return A_I;}else return null;},At7:function(){this.XJ.
Z8(this.BbU());if(!!this.XJ.Nf&&(this.XJ.Nf.AM>0))this.YB=false;},_Init:function(
aArg){C.Ku._Init.call(this,aArg);C.An8._Init.call(this.EK={I:this},0);C.Afy._Init.
call(this.XJ={I:this},0);C.Aix._Init.call(this.Ab3={I:this},0);this.__proto__=C.
AH8;this.EK.G(Al4);this.EK.U(A.z2(A.abg.Temperature));this.EK.ABh(C.ACX);this.XJ.
G(Bjy);this.XJ.R(A.z2(A.abg.Rating));this.Ab3.G(Al4);this.J(this.EK,-2);this.J(this.
XJ,-2);this.J(this.Ab3,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Ku;
this.EK._Done();this.XJ._Done();this.Ab3._Done();C.Ku._Done.call(this);},_ReInit:
function(){C.Ku._ReInit.call(this);this.EK._ReInit();this.XJ._ReInit();this.Ab3.
_ReInit();},_Mark:function(D){var B;C.Ku._Mark.call(this,D);if((B=this.EK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ab3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoSummaryGraph"
};C.UW={Q:null,FN:null,FO:null,PJ:null,AI:0,FG:0,Fq:100,E9:0,Init:function(aArg){
},JC:function(H){this.E9=1;C.DV.JC.call(this,H);},Bh:function(aSize){C.DV.Bh.call(
this,aSize);this.PJ.G([0,aSize[1]-40,40,aSize[1]]);},AjN:function(H){this.E9=5;this.
Al();if(this.Bi.Bw){A.ow([this,this.Avr],this);this.Bi.An(false);}this.Bi.An(true
);},Ai:function(Ae){C.DV.Ai.call(this,Ae);this.PJ.W(this.FG!==this.Fq);this.PJ.L(
this.T.AV);if((this.E9===4)||(this.E9===5))this.PJ.L(A.iF.E1);},Pr:function(H){if(
this.E9===5)A.ow([this,this.Avr],this);if(this.E9===4)A.ow([this,this.Avs],this);
if(this.E9===1)A.ow(this.AR,this);this.E9=0;this.Al();},CY:function(H){var F;if(
!!this.Q)this.Bu((F=this.Q,F[1].call(F[0])));},AaI:function(s){this.CY(s);},AF:function(
E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.AaI],this.Q,0);this.Q=E;
if(!!E)A.za([this,this.AaI],E,0);if(!!E)A.ow([this,this.AaI],this);},AjP:function(
H){this.E9=4;this.Al();if(this.Bi.Bw){A.ow([this,this.Avs],this);this.Bi.An(false
);}this.Bi.An(true);},Jz:function(H){this.E9=0;},Avs:function(s){this.Jz(s);},Ju:
function(H){this.E9=0;},Avr:function(s){this.Ju(s);},Bu:function(E){if(E<this.FG
)E=this.FG;if(E>this.Fq)E=this.Fq;if(this.AI===E)return;this.AI=E;this.Al();},Hw:
function(E){if(this.FG===E)return;this.FG=E;this.Al();},FP:function(E){if(this.Fq===
E)return;this.Fq=E;this.Al();},_Init:function(aArg){C.DV._Init.call(this,aArg);A.
Core.B0._Init.call(this.FN={I:this},0);A.Core.B0._Init.call(this.FO={I:this},0);
A.abh.Am._Init.call(this.PJ={I:this},0);this.__proto__=C.UW;this.G(KM);this.FN.Filter=
5;this.FO.Filter=4;this.Background.G(KM);this.T.G(AaE);this.T.R(RP);this.PJ.G(AUh
);this.J(this.PJ,0);this.FN.B1=[this,this.AjN];this.FN.D_=[this,this.AjN];this.FO.
B1=[this,this.AjP];this.FO.D_=[this,this.AjP];this.T.Y(A.zW(A.eV.Au));this.T.Bz(
A.zW(A.eV.AB));this.T.C7(null);this.PJ.Ar(A.zW(A.abi.AIu));this.Init(aArg);},_Done:
function(){this.__proto__=C.DV;this.FN._Done();this.FO._Done();this.PJ._Done();C.
DV._Done.call(this);},_ReInit:function(){C.DV._ReInit.call(this);this.FN._ReInit(
);this.FO._ReInit();this.PJ._ReInit();},_Mark:function(D){var B;C.DV._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.FO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
PJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBaseVertically"
};C.APD={AC:null,Cu:null,Ha:null,Bh:function(aSize){C.UW.Bh.call(this,aSize);this.
Cu.G([this.PJ.M[2],this.PJ.M[1],this.M[2],this.PJ.M[3]]);},Ai:function(Ae){C.UW.
Ai.call(this,Ae);this.Cu.ZE(0,this.Cu.AM-1);if(this.FG!==this.Fq)this.PJ.W(true);
},Init:function(aArg){},CY:function(H){var F;if(!!this.Q&&!!this.AC)this.Bu(this.
AC.DT((F=this.Q,F[1].call(F[0]))));},Jz:function(H){var F;var BR=this.AI;C.UW.Jz.
call(this,H);this.Bu(this.AI+1);if(this.AI!==BR){if(!!this.Q&&!!this.AC)(F=this.
Q,F[2].call(F[0],this.AC.Da(this.AI)));A.aat(this.Q,0);}},Ju:function(H){var F;var
BR=this.AI;C.UW.Ju.call(this,H);this.Bu(this.AI-1);if(this.AI!==BR){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.Da(this.AI)));A.aat(this.Q,0);}},Bu:function(
E){var Pv=0;if(this.FG!==this.Fq){if(E<this.FG){E=this.Fq;Pv=-this.Cu.Gj*this.Cu.
AM;}if(E>this.Fq){E=this.FG;Pv=this.Cu.Gj;}}C.UW.Bu.call(this,E);if(!!Pv)this.Cu.
Gk(Pv);this.Cu.Gl(this.AI);this.Cu.IA(this.Cu.FJ,true,this.Ha,null);},GD:function(
H){var B;var Fw=this.Cu.ID;var Cj=(C.CH.isPrototypeOf(B=this.Cu.B4)?B:null);if(!
Cj)return;Cj.Y(this.T.Co);Cj.Bz(A.zW(A.eV.Au));Cj.L(this.T.AV);if(!!this.AC)Cj.R(
this.AC.GP(Fw));else Cj.R(JU);Cj.G(A.aaN(Cj.M,[(B=this.Cu.M)[2]-B[0],this.Cu.Gj]
));},Dh:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.Hw(0);this.
FP(this.AC.Du()-1);this.Cu.I0(this.AC.Du());this.Cu.ZE(0,this.Cu.AM-1);}},_Init:
function(aArg){C.UW._Init.call(this,aArg);A.Core.Cu._Init.call(this.Cu={I:this},
0);A.abm.FC._Init.call(this.Ha={I:this},0);this.__proto__=C.APD;this.G(KM);this.
PJ.G(Bjz);this.Cu.AcT(40);this.Cu.Nb(C.CH);this.Ha.UP(23);this.Ha.IF(1);this.Ha.
FI(200);this.J(this.Cu,0);this.T.Y(A.zW(A.eV.Au));this.T.Bz(A.zW(A.eV.AB));this.
Cu.GD=[this,this.GD];this.Init(aArg);},_Done:function(){this.__proto__=C.UW;this.
Cu._Done();this.Ha._Done();C.UW._Done.call(this);},_ReInit:function(){C.UW._ReInit.
call(this);this.Cu._ReInit();this.Ha._ReInit();},_Mark:function(D){var B;C.UW._Mark.
call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ha)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroupVertically"};C.QM={AHi:0,Ai:function(Ae){C.E$.Ai.
call(this,Ae);this.U(A.z2(A.abg.AQB));if(A._GetAutoObject(A.Device.Helper).V.TimestampFirstWeighing
!==A._GetAutoObject(A.Device.Helper).V.TimestampLastWeighing)this.JN((A._GetAutoObject(
A.Device.Converter).AlP(this.AHi)+Cv)+A._GetAutoObject(A.abk.Dv).Aa$());else this.
JN(A.z2(A.abg.Unknown));},B7:function(H){C.E$.B7.call(this,H);this.AHi=A._GetAutoObject(
A.Device.Helper).V.LastBodyWeight-A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight;
this.Al();},_Init:function(aArg){C.E$._Init.call(this,aArg);this.__proto__=C.QM;
},_className:"Application::AnimalInfoItemWeightGain"};C.AK8={A7:null,CV:null,Init:
function(aArg){var B;A.za([this,this.MC],[B=A._GetAutoObject(A.Device.Device),B.
ANI,B.AUC],0);},Ez:function(H){C.If.Ez.call(this,H);this.CV.Ar(A._GetAutoObject(
A.Device.Converter).A$X(A._GetAutoObject(A.Device.Device).DK));},_Init:function(
aArg){C.If._Init.call(this,aArg);A.abh.DU._Init.call(this.A7={I:this},0);A.abh.Am.
_Init.call(this.CV={I:this},0);this.__proto__=C.AK8;this.A7.D$(AUi);this.A7.Eg(AUj
);this.A7.L(A.iF.A7);this.CV.G(BjA);this.CV.L(A.iF.Text);this.J(this.A7,0);this.
J(this.CV,0);this.CV.Ar(A.zW(A.abi.AhC));this.Init(aArg);},_Done:function(){this.
__proto__=C.If;this.A7._Done();this.CV._Done();C.If._Done.call(this);},_ReInit:function(
){C.If._ReInit.call(this);this.A7._ReInit();this.CV._ReInit();},_Mark:function(D
){var B;C.If._Mark.call(this,D);if((B=this.A7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.AJc={XR:null,JS:null,LE:null,Timer:null,AyG:3,Ai:function(Ae){C.Aw.Ai.call(this
,Ae);this.XR.R(A._GetAutoObject(A.Device.Helper).Nh(A.z2(A.abg.Bjl),Qi,this.AyG.
toFixed()));},CE:function(H){this.Timer.An(true);},Fc:function(H){this.Timer.An(
false);},Bti:function(H){if(this.AyG>1){this.AyG=this.AyG-1;this.Al();}else{this.
Timer.An(false);A._GetAutoObject(A.Device.Device).Auf();}},_Init:function(aArg){
C.Aw._Init.call(this,aArg);A.abh.Text._Init.call(this.XR={I:this},0);A.abh.Text.
_Init.call(this.JS={I:this},0);A.abh.Am._Init.call(this.LE={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.AJc;this.Background.L(A.iF.CP
);this.N.W(true);this.XR.G(BjB);this.XR.KF(true);this.XR.R(A.jm);this.XR.L(A.iF.
Text);this.JS.G(BjC);this.JS.KF(true);this.JS.R(A.z2(A.abg.AZz));this.JS.L(A.iF.
Text);this.LE.G(A5x);this.J(this.XR,0);this.J(this.JS,0);this.J(this.LE,0);this.
XR.Y(A.zW(A.eV.Au));this.JS.Y(A.zW(A.eV.Au));this.LE.Ar(A.zW(A.abi.Ayf));this.Timer.
Mw=[this,this.Bti];},_Done:function(){this.__proto__=C.Aw;this.XR._Done();this.JS.
_Done();this.LE._Done();this.Timer._Done();C.Aw._Done.call(this);},_ReInit:function(
){C.Aw._ReInit.call(this);this.XR._ReInit();this.JS._ReInit();this.LE._ReInit();
this.Timer._ReInit();this.JS.R(A.z2(A.abg.AZz));this.XR.Y(A.zW(A.eV.Au));this.JS.
Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.XR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.LE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.AIV={JS:null,Akk:null
,PC:null,C3:function(){this.Al();},Ai:function(Ae){C.AbT.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Y4<=10)this.JS.R(A.z2(A.abg.Bag));else this.JS.R(A.z2(A.abg.AZA
));},_Init:function(aArg){C.AbT._Init.call(this,aArg);A.abh.Text._Init.call(this.
JS={I:this},0);A.abh.Am._Init.call(this.Akk={I:this},0);C.CH._Init.call(this.PC={
I:this},0);this.__proto__=C.AIV;this.RA.G(BjD);this.LE.G(BjE);this.JS.G(BjF);this.
JS.KF(true);this.JS.L(A.iF.Text);this.Akk.G(A5x);this.PC.G(BjG);this.PC.W(true);
this.PC.R(A.z2(A.abg.APh));this.PC.L(A.iF.Text);this.J(this.JS,0);this.J(this.Akk
,0);this.J(this.PC,0);this.JS.Y(A.zW(A.eV.Au));this.Akk.Ar(A.zW(A.abi.Ayf));this.
PC.Y(A.zW(A.eV.Au));this.PC.Bz(A.zW(A.eV.AB));this.PC.C7(A.zW(A.eV.Cq));},_Done:
function(){this.__proto__=C.AbT;this.JS._Done();this.Akk._Done();this.PC._Done();
C.AbT._Done.call(this);},_ReInit:function(){C.AbT._ReInit.call(this);this.JS._ReInit(
);this.Akk._ReInit();this.PC._ReInit();this.PC.R(A.z2(A.abg.APh));this.JS.Y(A.zW(
A.eV.Au));this.PC.Y(A.zW(A.eV.Au));this.PC.Bz(A.zW(A.eV.AB));this.PC.C7(A.zW(A.eV.
Cq));this.C3();},_Mark:function(D){var B;C.AbT._Mark.call(this,D);if((B=this.JS).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Akk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AHV={_Init:function(aArg){C.Iy._Init.call(this,aArg);this.__proto__=C.AHV;this.
QG.An(false);this.QG.Aj(false);this.QG.W(false);},_className:"Application::AlarmListFilterScreen"
};C.AQw={_Init:function(aArg){C.Iy._Init.call(this,aArg);this.__proto__=C.AQw;this.
RJ.An(false);this.RJ.Aj(false);this.RJ.W(false);},_className:"Application::WatchListFilterScreen"
};C.AI$={_Init:function(aArg){C.H9._Init.call(this,aArg);this.__proto__=C.AI$;this.
N.Cb(A.z2(A.abg.A$$));},_className:"Application::ControlListActionsScreen"};C.AQv={
_Init:function(aArg){C.H9._Init.call(this,aArg);this.__proto__=C.AQv;this.N.Cb(A.
z2(A.abg.Bae));},_className:"Application::WatchListActionsScreen"};C.AHU={_Init:
function(aArg){C.H9._Init.call(this,aArg);this.__proto__=C.AHU;this.N.Cb(A.z2(A.
abg.AZt));},_ReInit:function(){C.H9._ReInit.call(this);this.N.Cb(A.z2(A.abg.AZt)
);},_className:"Application::AlarmListActionsScreen"};C.AKE={Ez:function(H){C.JI.
Ez.call(this,H);this.CV.Ar(A._GetAutoObject(A.Device.Converter).Aey(5));},_Init:
function(aArg){C.JI._Init.call(this,aArg);this.__proto__=C.AKE;},_className:"Application::HeaderControlListFilter"
};C.AK_={Ez:function(H){C.JI.Ez.call(this,H);this.CV.Ar(A._GetAutoObject(A.Device.
Converter).Aey(6));},_Init:function(aArg){C.JI._Init.call(this,aArg);this.__proto__=
C.AK_;},_className:"Application::HeaderWatchListFilter"};C.ALc={DB:null,Mm:null,
_Init:function(aArg){C.Sv._Init.call(this,aArg);C.CH._Init.call(this.DB={I:this}
,0);A.abh.Am._Init.call(this.Mm={I:this},0);this.__proto__=C.ALc;this.DB.G(Al1);
this.DB.R(A.z2(A.abg.AZ2));this.DB.L(A.iF.Text);this.Mm.G(BjH);this.Mm.L(A.iF.Text
);this.Mm.A0(0x12);this.J(this.DB,-2);this.J(this.Mm,0);this.DB.Y(A.zW(A.eV.AB));
this.DB.Bz(A.zW(A.eV.Cq));this.Mm.Ar(A.zW(A.abi.AzU));},_Done:function(){this.__proto__=
C.Sv;this.DB._Done();this.Mm._Done();C.Sv._Done.call(this);},_ReInit:function(){
C.Sv._ReInit.call(this);this.DB._ReInit();this.Mm._ReInit();this.DB.R(A.z2(A.abg.
AZ2));this.DB.Y(A.zW(A.eV.AB));this.DB.Bz(A.zW(A.eV.Cq));},_Mark:function(D){var
B;C.Sv._Mark.call(this,D);if((B=this.DB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Mm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWatch"};C.
AIR={B7:function(Z){C.Ahg.B7.call(this,Z);if(!!this.AZ){var NC=this.AZ.Hq(Z,8);var
BuH=this.AZ.Q_(Z,21);this.AbZ.R(A._GetAutoObject(A.Device.Helper).L6(BuH,A._GetAutoObject(
A.Device.Helper).DN()).toFixed());this.Rb.W(NC);this.Al();}},_Init:function(aArg
){C.Ahg._Init.call(this,aArg);this.__proto__=C.AIR;},_className:"Application::CalfListWatchItem"
};C.Sv={Ae4:null,Ae6:null,_Init:function(aArg){C.DL._Init.call(this,aArg);A.abh.
Am._Init.call(this.Ae4={I:this},0);A.abh.Am._Init.call(this.Ae6={I:this},0);this.
__proto__=C.Sv;this.Ae4.G(BjI);this.Ae4.L(A.iF.Text);this.Ae4.A0(0x12);this.Ae6.
G(BjJ);this.Ae6.L(A.iF.Text);this.Ae6.A0(0x12);this.Lg(this.CL,-1);this.J(this.Ae4
,0);this.J(this.Ae6,0);this.Ae4.Ar(A.zW(A.abi.AkM));this.Ae6.Ar(A.zW(A.abi.ZA));
},_Done:function(){this.__proto__=C.DL;this.Ae4._Done();this.Ae6._Done();C.DL._Done.
call(this);},_ReInit:function(){C.DL._ReInit.call(this);this.Ae4._ReInit();this.
Ae6._ReInit();},_Mark:function(D){var B;C.DL._Mark.call(this,D);if((B=this.Ae4).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFlags"};C.AnJ={Fz:A.vx,NU:A.vw,P1:function(E){if(A.z9(this.
Fz,E))return;this.Fz=E;},Ale:function(E){if(A.z8(this.NU,E))return;this.NU=E;},_Init:
function(aArg){A.abw.AyE._Init.call(this,aArg);this.__proto__=C.AnJ;},_className:
"Application::BoundCoordList"};C.Ahg={SC:null,Xp:null,SE:null,Xq:null,Rb:null,ZV:
null,AbZ:null,AP:null,A4:null,DQ:null,KI:null,Init:function(aArg){},Bh:function(
aSize){C.A$.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.M,aSize)
);this.T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AP.G([this.T.M[2]-1,0,this.
T.M[2]+1,aSize[1]]);this.SC.G([this.T.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.
Xp.G(this.SC.M);this.A4.G([this.SC.M[2]-1,0,this.SC.M[2]+1,aSize[1]]);this.SE.G([
this.SC.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.Xq.G(this.SE.M);this.DQ.G([
this.SE.M[2]-1,0,this.SE.M[2]+1,aSize[1]]);this.Rb.G([this.SE.M[2],0,((aSize[0]*
65)/100)|0,aSize[1]]);this.ZV.G(this.Rb.M);this.KI.G([this.Rb.M[2]-1,0,this.Rb.M[
2]+1,aSize[1]]);this.AbZ.G([this.Rb.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){
C.A$.Ai.call(this,Ae);var Kr=this.T.AV;this.SC.AA2(Kr);this.Xp.L(Kr);this.SE.AA2(
Kr);this.Xq.L(Kr);this.Rb.AA2(Kr);this.ZV.L(Kr);this.AbZ.L(Kr);this.ZV.W(!this.Rb.
Fe());},B7:function(Z){if(!this.AZ)return;this.Hl=Z;var Ow=this.AZ.Cp(Z,1);var HF=
this.AZ.AkF(Z,14);var Ark=this.AZ.Cp(Z,5);var K0=this.AZ.IC(Z,13);this.U(Ow.toFixed(
));if(!!K0){this.SC.W(true);this.SC.Ats(A._GetAutoObject(A.abk.Assessment).A8l(K0
));this.Xp.W(false);}else{this.SC.W(false);this.Xp.W(true);}if(Ark>0){this.SE.W(
true);this.SE.Ats(A._GetAutoObject(A.abk.Assessment).A8l(A._GetAutoObject(A.Device.
Converter).ApK(HF,Ark)));this.Xq.W(false);}else{this.SE.W(false);this.Xq.W(true);
}this.Al();},_Init:function(aArg){C.A$._Init.call(this,aArg);C.JG._Init.call(this.
SC={I:this},0);A.abh.Text._Init.call(this.Xp={I:this},0);C.JG._Init.call(this.SE={
I:this},0);A.abh.Text._Init.call(this.Xq={I:this},0);C.JG._Init.call(this.Rb={I:
this},0);A.abh.Text._Init.call(this.ZV={I:this},0);A.abh.Text._Init.call(this.AbZ={
I:this},0);A.abh.AH._Init.call(this.AP={I:this},0);A.abh.AH._Init.call(this.A4={
I:this},0);A.abh.AH._Init.call(this.DQ={I:this},0);A.abh.AH._Init.call(this.KI={
I:this},0);this.__proto__=C.Ahg;this.Xp.G(BjK);this.Xp.R(Al2);this.Xq.G(Al3);this.
Xq.R(Al2);this.Rb.Ats(A.iF.AiJ);this.ZV.G(Al3);this.ZV.R(Qj);this.AP.L(A.iF.A7);
this.A4.L(A.iF.A7);this.DQ.L(A.iF.A7);this.KI.L(A.iF.A7);this.J(this.SC,0);this.
J(this.Xp,0);this.J(this.SE,0);this.J(this.Xq,0);this.J(this.Rb,0);this.J(this.ZV
,0);this.J(this.AbZ,0);this.J(this.AP,0);this.J(this.A4,0);this.J(this.DQ,0);this.
J(this.KI,0);this.Xp.Y(A.zW(A.eV.Au));this.Xq.Y(A.zW(A.eV.Au));this.ZV.Y(A.zW(A.
eV.Au));this.AbZ.Y(A.zW(A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.SC._Done();this.Xp._Done();this.SE._Done();this.Xq._Done();this.Rb._Done(
);this.ZV._Done();this.AbZ._Done();this.AP._Done();this.A4._Done();this.DQ._Done(
);this.KI._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this
);this.SC._ReInit();this.Xp._ReInit();this.SE._ReInit();this.Xq._ReInit();this.Rb.
_ReInit();this.ZV._ReInit();this.AbZ._ReInit();this.AP._ReInit();this.A4._ReInit(
);this.DQ._ReInit();this.KI._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(
this,D);if((B=this.SC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xp)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.SE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xq)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
ZV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbZ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KI)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::CalfListFlagItem"};C.Dr={OG:null,
AsO:null,EB:null,Dr:null,Aot:0,Aou:0,A1n:0,Akw:0,AnU:0,Init:function(aArg){this.
AOf(6);this.AOg(8);this.AOs(A.iF.A6);this.AOt(3);},Ai:function(Ae){var B;A.Core.
O.Ai.call(this,Ae);this.Dr.Be4([this.Dr.Zd[0],(B=this.Dr.M)[3]-B[1]]);this.UQ(this
);},AOe:function(E){if(this.OG===E)return;this.OG=E;this.Dr.AOe(E);},AOt:function(
E){if(this.Aou===E)return;this.Aou=E;this.Dr.AOt(E);},AOs:function(E){if(this.Aot===
E)return;this.Aot=E;this.Dr.AOs(E);this.Dr.Be9(E);},UQ:function(H){var B;while(!
!this.Dr.Af)this.HW(this.Dr.Af);if(!this.EB)return;this.Dr.Ale([((this.EB.NU[0]*((
B=this.M)[2]-B[0]))/(this.EB.Fz[2]-this.EB.Fz[0]))|0,this.Dr.NU[1]]);this.Dr.Ale([
this.Dr.NU[0],((this.EB.NU[1]*((B=this.M)[3]-B[1]))/(this.EB.Fz[3]-this.EB.Fz[1]
))|0]);var P;var C6=this.Dr.NU[1];var DI;var AYI=this.EB.Fz[1];var Bdb=(((B=this.
Dr.M)[3]-B[1])/this.Dr.NU[1])|0;for(P=0;P<Bdb;P=P+1){DI=A._NewObject(A.abh.Text,
0);DI.G([0,((((B=this.M)[3]-B[1])-(P*C6))-(this.AsO.Ascent+this.AsO.Descent))+2,((
B=this.M)[2]-B[0])-this.Aou,(((B=this.M)[3]-B[1])-(P*C6))+2]);DI.L(this.A1n);DI.
Y(this.AsO);DI.A0(0x24);if(P>0)DI.R(this.AFJ(AYI));else DI.R(this.AGd());AYI=AYI+
this.EB.NU[1];this.J(DI,0);}},Bx4:function(s){this.UQ(s);},Av3:function(AU$){var
B;if(!this.EB||(this.EB.Fz[3]===this.EB.Fz[1]))return 0;return(((AU$-this.EB.Fz[
1])*((B=this.M)[3]-B[1]))/(this.EB.Fz[3]-this.EB.Fz[1]))|0;},AcN:function(E){if(
this.EB===E)return;this.EB=E;if(!E)this.Dr.AcN(null);else{var Bx=A._NewObject(A.
abw.AyE,0);Bx.AtB(this.EB.AAn);Bx.Ws();var I5=E.Ajs;while(!!I5){Bx.AnD(this.Bq3(
I5.Tf),this.Bq4(I5.Tg));I5=I5.Af;}this.Dr.AcN(Bx);this.Al();}},Bq3:function(Bpg){
var B;if(!this.EB||(this.EB.Fz[2]===this.EB.Fz[0]))return 0;return((Bpg-this.EB.
Fz[0])*((B=this.M)[2]-B[0]))/(this.EB.Fz[2]-this.EB.Fz[0]);},Bq4:function(AU$){var
B;if(!this.EB||(this.EB.Fz[3]===this.EB.Fz[1]))return 0;return((AU$-this.EB.Fz[1
])*((B=this.M)[3]-B[1]))/(this.EB.Fz[3]-this.EB.Fz[1]);},AFJ:function(Ami){return Ami.
toFixed();},AGd:function(){return A.jm;},AOg:function(E){if(this.Akw===E)return;
this.Akw=E;this.Dr.AOg(E);},AOf:function(E){if(this.AnU===E)return;this.AnU=E;this.
Dr.AOf(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abw.Dr._Init.call(
this.Dr={I:this},0);this.__proto__=C.Dr;this.G(A5y);this.A1n=A.iF.Text;this.Dr.AW(
0x3F);this.Dr.G(A5y);this.Dr.Bgi(BjL);this.Dr.BeO(A.iF.AiJ);this.Dr.BfH(A.iF.A7);
this.Dr.BgC(A.iF.AiJ);this.J(this.Dr,0);this.OG=A.zW(A.abw.AyX);this.AsO=A.zW(A.
eV.Cq);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Dr._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Dr._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.OG
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AsO)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.EB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dr)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::Graph"};C.AIE={AFJ:function(Ami){return A.
_GetAutoObject(A.Device.Converter).AuE(Ami,0);},AGd:function(){return A._GetAutoObject(
A.abk.Dv).Aa$();},_Init:function(aArg){C.Dr._Init.call(this,aArg);this.__proto__=
C.AIE;},_className:"Application::BodyWeightGraph"};C.Pa={Je:null,Ed:null,DY:null
,Fm:null,H_:null,H$:null,Init:function(aArg){this.AOe(null);},UQ:function(H){var
B;var F;C.Dr.UQ.call(this,H);var AGJ=0;var AHm=0;if(!!this.Je){AGJ=this.Av3(A._GetAutoObject(
A.Device.Helper).Azo((F=this.Je,F[1].call(F[0]))));AHm=this.Av3(A._GetAutoObject(
A.Device.Helper).Azn((F=this.Je,F[1].call(F[0]))));}this.Fm.G(A.aaS(this.Fm.M,0)
);this.Fm.G([].concat(this.Fm.M.slice(0,3),((B=this.M)[3]-B[1])-AHm));this.H_.G(
A.aaR(this.H_.M,(this.Fm.M[3]-((((B=this.H_.M)[3]-B[1])/2)|0))-2));this.DY.G(A.aaS(
this.DY.M,this.Fm.M[3]));this.DY.G([].concat(this.DY.M.slice(0,3),((B=this.M)[3]-
B[1])-AGJ));this.H$.G(A.aaR(this.H$.M,(this.DY.M[3]-((((B=this.H$.M)[3]-B[1])/2)|
0))+2));this.Ed.G(A.aaS(this.Ed.M,this.DY.M[3]));this.Ed.G([].concat(this.Ed.M.slice(
0,3),(B=this.M)[3]-B[1]));},AFJ:function(Ami){return A._GetAutoObject(A.Device.Converter
).Nl(Ami,0,true);},AGd:function(){return A._GetAutoObject(A.abk.Dv).Yx();},Alb:function(
E){if(A.z_(this.Je,E))return;if(!!this.Je)A.zn([this,this.AqX],this.Je,0);this.Je=
E;if(!!E)A.za([this,this.AqX],E,0);if(!!E)A.ow([this,this.AqX],this);},AqX:function(
H){this.Al();},_Init:function(aArg){C.Dr._Init.call(this,aArg);A.abh.AH._Init.call(
this.Ed={I:this},0);A.abh.AH._Init.call(this.DY={I:this},0);A.abh.AH._Init.call(
this.Fm={I:this},0);A.abh.AH._Init.call(this.H_={I:this},0);A.abh.AH._Init.call(
this.H$={I:this},0);this.__proto__=C.Pa;this.Ed.AW(0xD);this.Ed.G(AaD);this.Ed.L(
A.iF.FY);this.DY.AW(0xD);this.DY.G(Qh);this.DY.L(A.iF.Hy);this.Fm.AW(0xD);this.Fm.
G(AaC);this.Fm.L(A.iF.E1);this.H_.AW(0xD);this.H_.G(Yd);this.H_.Atf(A.iF.Hy);this.
H_.Atg(A.iF.Hy);this.H_.Ati(A.iF.E1);this.H_.Ath(A.iF.E1);this.H$.AW(0xD);this.H$.
G(Vo);this.H$.Atf(A.iF.FY);this.H$.Atg(A.iF.FY);this.H$.Ati(A.iF.Hy);this.H$.Ath(
A.iF.Hy);this.J(this.Ed,-1);this.J(this.DY,-1);this.J(this.Fm,-1);this.J(this.H_
,-1);this.J(this.H$,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Dr;this.
Ed._Done();this.DY._Done();this.Fm._Done();this.H_._Done();this.H$._Done();C.Dr.
_Done.call(this);},_ReInit:function(){C.Dr._ReInit.call(this);this.Ed._ReInit();
this.DY._ReInit();this.Fm._ReInit();this.H_._ReInit();this.H$._ReInit();},_Mark:
function(D){var B;C.Dr._Mark.call(this,D);if((B=this.Je)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Ed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightGainGraph"};C.An8={EK:null,EB:null,So:null,Ia:null
,A7:null,Aun:A.jm,Dk:A.jm,AKA:null,Init:function(aArg){},Bh:function(aSize){A.Core.
O.Bh.call(this,aSize);this.A7.G([].concat([0,aSize[1]-2],aSize));this.So.G([30,0
,aSize[0]-2,30]);this.Ia.G(this.So.M);if(!!this.EK)this.EK.G([30,this.So.M[3],aSize[
0],this.A7.M[1]]);},Afs:function(E){if(this.Aun===E)return;this.Aun=E;this.Ia.R(
E);},U:function(E){if(this.Dk===E)return;this.Dk=E;this.So.R(E);},ABh:function(E
){if(this.AKA===E)return;this.AKA=E;this.BhS(this);},BhS:function(H){var B;if(!!
this.EK)this.HW(this.EK);this.EK=(C.Dr.isPrototypeOf(B=A._NewObject(this.AKA,0))?
B:null);if(!!this.EK){this.EK.G(BjM);this.EK.AcN(this.EB);this.J(this.EK,0);}},AcN:
function(E){if(this.EB===E)return;this.EB=E;if(!!this.EK)this.EK.AcN(E);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Text._Init.call(this.So={I:this
},0);A.abh.Text._Init.call(this.Ia={I:this},0);A.abh.AH._Init.call(this.A7={I:this
},0);this.__proto__=C.An8;this.G(AdE);this.An(false);this.So.G(BjN);this.So.A0(0x11
);this.So.R(RP);this.So.L(A.iF.Text);this.Ia.A0(0x14);this.Ia.R(A.jm);this.Ia.L(
A.iF.Text);this.A7.G(BjO);this.A7.L(A.iF.A7);this.J(this.So,0);this.J(this.Ia,0);
this.J(this.A7,0);this.So.Y(A.zW(A.eV.AB));this.Ia.Y(A.zW(A.eV.AB));this.Init(aArg
);},_Done:function(){this.__proto__=A.Core.O;this.So._Done();this.Ia._Done();this.
A7._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.So._ReInit();this.Ia._ReInit();this.A7._ReInit();},_Mark:function(D){
var B;A.Core.O._Mark.call(this,D);if((B=this.EK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.EB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.So)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ia)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A7)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::GraphItem"};C.AIe={Aez:null,Gl:
function(E){var F;C.Fs.Gl.call(this,E);if(!!this.Aez)(F=this.Aez,F[2].call(F[0],
E));},A3d:function(E){if(A.z_(this.Aez,E))return;if(!!this.Aez)A.zn([this,this.AXl
],this.Aez,0);this.Aez=E;if(!!E)A.za([this,this.AXl],E,0);if(!!E)A.ow([this,this.
AXl],this);},AXl:function(H){var F;if(!this.Aez)return;(F=this.Aez,F[2].call(F[0
],this.FH()));},_Init:function(aArg){C.Fs._Init.call(this,aArg);this.__proto__=C.
AIe;},_Mark:function(D){var B;C.Fs._Mark.call(this,D);if((B=this.Aez)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.APg={
P$:null,O8:null,V9:null,V_:null,LW:0,C3:function(){this.Al();},Bh:function(aSize
){var B;A.Core.O.Bh.call(this,aSize);this.P$.G(A.aaL(this.P$.M,(((B=this.M)[3]-B[
1])/2)|0));this.O8.G(A.aaL(this.O8.M,(((B=this.M)[3]-B[1])/2)|0));this.P$.G(A.aaR(
this.P$.M,(((B=this.M)[3]-B[1])/2)|0));this.O8.G(A.aaR(this.O8.M,(((B=this.M)[3]-
B[1])/2)|0));},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.P$.R(A._GetAutoObject(
A.Device.Helper).Nh(A.z2(A.abg.Bc1),Qi,this.LW.toFixed()));},Z7:function(E){if(this.
LW===E)return;this.LW=E;this.BtU(this);},BtU:function(H){var B;var AFQ=(((B=this.
M)[2]-B[0])/this.LW)|0;this.V9.G(A.aaP(this.V9.M,(((B=this.M)[2]-B[0])-(this.LW*
AFQ))+(((AFQ/2)-(((B=this.V9.M)[2]-B[0])/2))|0)));this.V_.G(A.aaP(this.V_.M,(((B=
this.M)[2]-B[0])-AFQ)+(((AFQ/2)-(((B=this.V_.M)[2]-B[0])/2))|0)));this.Al();},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Text._Init.call(this.P$={I:this
},0);A.abh.Text._Init.call(this.O8={I:this},0);A.abh.Text._Init.call(this.V9={I:
this},0);A.abh.Text._Init.call(this.V_={I:this},0);this.__proto__=C.APg;this.G(BI
);this.P$.G(BjP);this.P$.HT(5);this.P$.A0(0x11);this.P$.L(A.iF.Text);this.O8.G(BjQ
);this.O8.HT(5);this.O8.A0(0x14);this.O8.R(A.z2(A.abg.AfO));this.O8.L(A.iF.Text);
this.V9.G(BjR);this.V9.R(A5z);this.V9.L(A.iF.Text);this.V_.G(BjS);this.V_.R(A5z);
this.V_.L(A.iF.Text);this.J(this.P$,0);this.J(this.O8,0);this.J(this.V9,0);this.
J(this.V_,0);this.P$.Y(A.zW(A.eV.AB));this.O8.Y(A.zW(A.eV.AB));this.V9.Y(A.zW(A.
eV.LN));this.V_.Y(A.zW(A.eV.LN));},_Done:function(){this.__proto__=A.Core.O;this.
P$._Done();this.O8._Done();this.V9._Done();this.V_._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.P$._ReInit();this.O8._ReInit(
);this.V9._ReInit();this.V_._ReInit();this.O8.R(A.z2(A.abg.AfO));this.P$.Y(A.zW(
A.eV.AB));this.O8.Y(A.zW(A.eV.AB));this.C3();},_Mark:function(D){var B;A.Core.O.
_Mark.call(this,D);if((B=this.P$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
V_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"};
C.Ku={Uk:null,Aho:null,J5:A.jm,LW:0,YB:false,Init:function(aArg){var AV8=A._NewObject(
C.LJ,0);var P;for(P=0;P<3;P=P+1)if(A._GetAutoObject(A.Device.Helper).V.NN()<AV8.
Da(P))AV8.Ak5=P+1;this.Uk.Dh(AV8);},Ai:function(Ae){C.DK.Ai.call(this,Ae);this.Aho.
W(this.YB);if(this.YB)this.A8(null);else this.A8(this.Uk);},CE:function(H){var B;
var F;C.DK.CE.call(this,H);if(!(F=this.Uk.Q,F[1].call(F[0])))(F=this.Uk.Q,F[2].call(
F[0],this.Uk.AC.Da(0)));A.za([this,this.AEX],[B=A._GetAutoObject(A.Device.Helper
),B.Tl,B.Tm],0);A.y_([this,this.AEX],A._GetAutoObject(A.Device.Device).Bt,0);A.za([
this,this.Aj2],[B=A._GetAutoObject(A.Device.Helper).V,B.P0,B.OnSetId],0);A.ow([this
,this.Aj2],this);},Fc:function(H){var B;A.zn([this,this.AEX],[B=A._GetAutoObject(
A.Device.Helper),B.Tl,B.Tm],0);A.zl([this,this.AEX],A._GetAutoObject(A.Device.Device
).Bt,0);A.zn([this,this.Aj2],[B=A._GetAutoObject(A.Device.Helper).V,B.P0,B.OnSetId
],0);C.DK.Fc.call(this,H);},XA:function(E){if(A.z$(this.AR,E))return;C.DK.XA.call(
this,E);this.Uk.AR=E;},Z7:function(E){if(this.LW===E)return;this.LW=E;A.ow([this
,this.Aj2],this);},BoT:function(Ao){this.Z7(Ao);},AgG:function(H){},AEX:function(
s){this.AgG(s);},Et:function(E){if(this.J5===E)return;this.J5=E;this.Aho.R(E);},
Aj2:function(H){var EZ=A._NewObject(A.Device.Filter,0);var Awb=A._NewObject(A.Device.
UInt32FilterCriterion,0);Awb.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AfO()-((this.LW-1)*86400))-1,true);EZ.CO(Awb);var Hh=A._NewObject(A.Device.Int32FilterCriterion
,0);Hh.Initialize(1,0,A._GetAutoObject(A.Device.Helper).V.Id,true);EZ.CO(Hh);A._GetAutoObject(
A.Device.Device).Bt.Bo(EZ);},Bd$:function(){return this.LW;},_Init:function(aArg
){C.DK._Init.call(this,aArg);C.APD._Init.call(this.Uk={I:this},0);C.Aix._Init.call(
this.Aho={I:this},0);this.__proto__=C.Ku;this.Uk.G(BI);this.Aho.G(Vp);this.J(this.
Uk,0);this.J(this.Aho,0);this.Uk.AF([this,this.Bd$,this.BoT]);this.Init(aArg);},
_Done:function(){this.__proto__=C.DK;this.Uk._Done();this.Aho._Done();C.DK._Done.
call(this);},_ReInit:function(){C.DK._ReInit.call(this);this.Uk._ReInit();this.Aho.
_ReInit();},_Mark:function(D){var B;C.DK._Mark.call(this,D);if((B=this.Uk)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aho)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.AJj={Ur:null,W0:null,RatingMode:null,OS:null,_Init:
function(aArg){C.CG._Init.call(this,aArg);C.Rk._Init.call(this.Ur={I:this},0);C.
B_._Init.call(this.W0={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.JQ._Init.call(this.OS={I:this},0);this.__proto__=C.AJj;var B;this.F$.R(A.
z2(A.abg.AnP));this.Lf(A.z2(A.abg.AZX));this.Ur.G(AEA);this.Ur.Aj(true);this.Ur.
U(A.z2(A.abg.ApU));this.Ur.Bk(true);this.Ur.Rt(23);this.W0.G(BjT);this.W0.Aj(true
);this.W0.U(A.z2(A.abg.A4t));this.W0.Bk(false);this.OS.G(A5A);this.OS.Aj(true);this.
OS.U(A.z2(A.abg.AZT));this.OS.Bk(true);this.OS.Hw(3);this.OS.FP(14);this.OS.Nd(A.
z2(A.abg.LJ)+AEB);this.OS.N3(A.z2(A.abg.Gz)+AEB);this.J(this.Ur,0);this.J(this.W0
,0);this.J(this.OS,0);this.Ur.AR=[B=this.Ur,B.Rv];this.W0.AF([B=this.RatingMode,
B.Cz,B.CB]);this.W0.Dh(this.RatingMode);this.OS.AF([B=A._GetAutoObject(A.Device.
Device),B.A2r,B.A6q]);},_Done:function(){this.__proto__=C.CG;this.Ur._Done();this.
W0._Done();this.RatingMode._Done();this.OS._Done();C.CG._Done.call(this);},_ReInit:
function(){C.CG._ReInit.call(this);this.Ur._ReInit();this.W0._ReInit();this.RatingMode.
_ReInit();this.OS._ReInit();this.F$.R(A.z2(A.abg.AnP));this.Lf(A.z2(A.abg.AZX));
this.Ur.U(A.z2(A.abg.ApU));this.W0.U(A.z2(A.abg.A4t));this.OS.U(A.z2(A.abg.AZT));
this.OS.Nd(A.z2(A.abg.LJ)+AEB);this.OS.N3(A.z2(A.abg.Gz)+AEB);},_Mark:function(D
){var B;C.CG._Mark.call(this,D);if((B=this.Ur)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.W0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Ax6={Ai:function(Ae){var B;C.B9.Ai.call(this,Ae);var FT=((Ae&0x10)===0x10);var
Fv=((Ae&0x20)===0x20);var Fu=this.Bi.Bw;var Gb=A.iF.AeH;var G1=A.iF.Bg;if(this.GW
){Gb=A.iF.Bg;G1=A.iF.Text;}if(!FT){this.Background.L(Gb);this.T.L(A.iF.CD);}else
if(Fu){this.Background.L(A.iF.A6);this.T.L(A.iF.Bg);}else if(Fv){this.Background.
L(A.iF.A6);this.T.L(A.iF.Bg);}else{this.Background.L(Gb);this.T.L(G1);}this.Lq=FT;
this.Ko=Fv;this.QB=Fu;},Init:function(aArg){this.T.Text.A0(0x11);this.T.Text.HT(
10);},_Init:function(aArg){C.B9._Init.call(this,aArg);this.__proto__=C.Ax6;this.
T.Y(A.zW(A.eV.AB));this.Init(aArg);},_className:"Application::ActionsItemText"};
C.Azw={Am:null,Init:function(aArg){var B;A.za([this,this.Ez],[B=A._GetAutoObject(
A.Device.Helper).V,B.O0,B.DO],0);A.ow([this,this.Ez],this);},CW:function(E){C.BU.
CW.call(this,E);this.Am.L(E);},Ez:function(H){switch(A._GetAutoObject(A.Device.Helper
).V.AnimalType){case 0:this.Am.Ar(A.zW(A.abi.Azt));break;case 1:this.Am.Ar(A.zW(
A.abi.AKU));break;case 2:this.Am.Ar(A.zW(A.abi.AKW));break;default:A.aa8("%s%e",
AUk,A._GetAutoObject(A.Device.Helper).V.AnimalType);}},_Init:function(aArg){C.BU.
_Init.call(this,aArg);A.abh.Am._Init.call(this.Am={I:this},0);this.__proto__=C.Azw;
this.Am.G(AUl);this.J(this.Am,0);this.Am.Ar(A.zW(A.abi.Azt));this.Init(aArg);},_Done:
function(){this.__proto__=C.BU;this.Am._Done();C.BU._Done.call(this);},_ReInit:function(
){C.BU._ReInit.call(this);this.Am._ReInit();},_Mark:function(D){var B;C.BU._Mark.
call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.Azx={Am:null,Init:function(aArg){var B;A.za([this,this.Ez],[B=A._GetAutoObject(
A.Device.Helper).V,B.O0,B.DO],0);A.ow([this,this.Ez],this);},CW:function(E){C.BU.
CW.call(this,E);this.Am.L(E);},Ez:function(H){switch(A._GetAutoObject(A.Device.Helper
).V.AnimalType){case 0:this.Am.Ar(A.zW(A.abi.Azu));break;case 1:this.Am.Ar(A.zW(
A.abi.AKV));break;case 2:this.Am.Ar(A.zW(A.abi.AKX));break;default:A.aa8("%s%e",
AUk,A._GetAutoObject(A.Device.Helper).V.AnimalType);}},_Init:function(aArg){C.BU.
_Init.call(this,aArg);A.abh.Am._Init.call(this.Am={I:this},0);this.__proto__=C.Azx;
this.Am.G(AUl);this.J(this.Am,0);this.Am.Ar(A.zW(A.abi.Azu));this.Init(aArg);},_Done:
function(){this.__proto__=C.BU;this.Am._Done();C.BU._Done.call(this);},_ReInit:function(
){C.BU._ReInit.call(this);this.Am._ReInit();},_Mark:function(D){var B;C.BU._Mark.
call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimals"
};C.E$={B2:null,Auz:A.jm,CW:function(E){C.Jc.CW.call(this,E);this.B2.L(E);},JN:function(
E){if(this.Auz===E)return;this.Auz=E;this.B2.R(E);},_Init:function(aArg){C.Jc._Init.
call(this,aArg);C.CH._Init.call(this.B2={I:this},0);this.__proto__=C.E$;this.B2.
AW(0x34);this.B2.G(Avc);this.B2.A0(0x11);this.B2.L(A.iF.Text);this.J(this.B2,0);
this.B2.Y(A.zW(A.eV.Au));this.B2.Bz(A.zW(A.eV.AB));this.B2.C7(A.zW(A.eV.Cq));},_Done:
function(){this.__proto__=C.Jc;this.B2._Done();C.Jc._Done.call(this);},_ReInit:function(
){C.Jc._ReInit.call(this);this.B2._ReInit();},_Mark:function(D){var B;C.Jc._Mark.
call(this,D);if((B=this.B2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"
};C.AKi={Xv:function(H){this.Aer();this.AYT(A.z2(A.abg.Bb6),[this,this.BgQ],A._GetAutoObject(
A.Device.Device).AkD);A._GetAutoObject(C.Cy).IS();this.DX(A.z2(A.abg.AQb),[this,
this.AOP],5);this.DX(A.z2(A.abg.AP$),[this,this.AOO],7);this.DX(A.z2(A.abg.AfK),[
this,this.Aig],2);this.DX(A.z2(A.abg.AbC),[this,this.AoN],1);this.DX(A.z2(A.abg.
Aem),[this,this.Ah_],0);A._GetAutoObject(C.Cy).IS();A._GetAutoObject(C.Cy).V1(A.
z2(A.abg.Aen)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.Device).Cn(6);},DS:function(
H){},Acd:function(){return C.Ayu;},Ace:function(){return C.AzD;},Ry:function(H){
A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(A.Device.Helper).A0P());
},HX:function(H){C.Ge.HX.call(this,H);if(this.AhY()===false){this.N.Cm(A.zW(A.abi.
ZA));this.N.Cg=[this,this.A0i];this.N.Fr(A.jm);}this.N.O3(false);this.N.O4(false
);},Ad$:function(){A._GetAutoObject(C.A1).BX(47);},Ad_:function(){A._GetAutoObject(
C.A1).BX(48);},BgQ:function(H){A._GetAutoObject(A.Device.Device).Cn(0);A._GetAutoObject(
A.Device.Device).Atv(!A._GetAutoObject(A.Device.Device).AkD);this.AlL(this);},AlL:
function(H){var Bb=A._GetAutoObject(A.Device.Device).Aq.Filter.F0();var At=Bb.DG(
30,3);if(!!At)Bb.P6(At);if(A._GetAutoObject(A.Device.Device).AkD){var AwN=A._NewObject(
A.Device.UInt32FilterCriterion,0);var AWY=A._GetAutoObject(A.Device.Helper).DN()-
21600;AwN.Initialize(30,3,AWY,true);Bb.CO(AwN);}A._GetAutoObject(A.Device.Device
).Aq.Bo(Bb);},_Init:function(aArg){C.Ge._Init.call(this,aArg);this.__proto__=C.AKi;
var B;this.Dt(C.AKQ);this.Et(A.z2(A.abg.Bda));this.Afq([B=A._GetAutoObject(A.Device.
Device),B.A2q,B.A6p]);},_className:"Application::FreshCowListScreen"};C.AKh={_Init:
function(aArg){C.Iy._Init.call(this,aArg);this.__proto__=C.AKh;this.Ky.An(false);
this.Ky.Aj(false);this.Ky.W(false);this.IT.An(false);this.IT.Aj(false);this.IT.W(
false);},_className:"Application::FreshCowListFilterScreen"};C.AKg={_Init:function(
aArg){C.H9._Init.call(this,aArg);this.__proto__=C.AKg;this.N.Cb(A.z2(A.abg.AZv));
},_ReInit:function(){C.H9._ReInit.call(this);this.N.Cb(A.z2(A.abg.AZv));},_className:
"Application::FreshCowListActionsScreen"};C.AKQ={Ez:function(H){C.JI.Ez.call(this
,H);this.CV.Ar(A._GetAutoObject(A.Device.Converter).Aey(7));},_Init:function(aArg
){C.JI._Init.call(this,aArg);this.__proto__=C.AKQ;},_className:"Application::HeaderFreshCowListFilter"
};C.AzD={IY:null,DB:null,_Init:function(aArg){C.DL._Init.call(this,aArg);C.CH._Init.
call(this.IY={I:this},0);C.CH._Init.call(this.DB={I:this},0);this.__proto__=C.AzD;
this.A3t(1);this.IY.G(BjU);this.IY.R((A.z2(A.abg.Calving)+AaH)+A.z2(A.abg.A45));
this.IY.L(A.iF.Text);this.DB.G(BjV);this.DB.R(A.z2(A.abg.AAg));this.DB.L(A.iF.Text
);this.J(this.IY,0);this.J(this.DB,0);this.IY.Y(A.zW(A.eV.AB));this.IY.Bz(A.zW(A.
eV.Cq));this.DB.Y(A.zW(A.eV.AB));this.DB.Bz(A.zW(A.eV.Cq));},_Done:function(){this.
__proto__=C.DL;this.IY._Done();this.DB._Done();C.DL._Done.call(this);},_ReInit:function(
){C.DL._ReInit.call(this);this.IY._ReInit();this.DB._ReInit();this.IY.R((A.z2(A.
abg.Calving)+AaH)+A.z2(A.abg.A45));this.DB.R(A.z2(A.abg.AAg));this.IY.Y(A.zW(A.eV.
AB));this.IY.Bz(A.zW(A.eV.Cq));this.DB.Y(A.zW(A.eV.AB));this.DB.Bz(A.zW(A.eV.Cq)
);},_Mark:function(D){var B;C.DL._Mark.call(this,D);if((B=this.IY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.DB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFreshCow"
};C.Ayu={ACY:null,Lc:null,S5:null,AP:null,A4:null,Init:function(aArg){},Bh:function(
aSize){C.A$.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.M,aSize)
);this.T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AP.G([this.T.M[2]-1,0,this.
T.M[2]+1,aSize[1]]);this.S5.G([this.T.M[2],0,((aSize[0]*72)/100)|0,aSize[1]]);this.
A4.G([this.S5.M[2]-1,0,this.S5.M[2]+1,aSize[1]]);this.Lc.G([this.S5.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.Lc.L(this.T.AV);this.
S5.CW(this.T.AV);},B7:function(Z){if(!this.AZ)return;this.Hl=Z;if(!!this.AZ){var
Kj=this.AZ.Cp(Z,0);var Ow=this.AZ.Cp(Z,1);var AWX=this.AZ.Cp(Z,29);var Ajj=this.
AZ.Hr(Z,28);this.U(Ow.toFixed());this.Lc.R(AWX.toFixed());this.S5.Z7(A._GetAutoObject(
A.Device.Device).An4+1);this.S5.Bgv(Ajj);this.S5.R(A._GetAutoObject(A.abk.K5).Aht(
Ajj));A._GetAutoObject(A.Device.Device).UV(Z);this.Anr(Kj);this.At7();A._GetAutoObject(
A.Device.Device).Bt.Bo(null);this.Al();}},AYw:function(H){this.S5.Z8(this.ACY);}
,At7:function(){var FU=A._GetAutoObject(A.Device.Device).Bt.Cd();this.ACY=A._NewObject(
C.Ag$,0);if(FU>0){var P=FU-1;while(P>=0){var DI=A._GetAutoObject(A.Device.Device
).Bt.Hr(P,6);this.Aqr(this.ACY,P,9,DI);P=P-1;}}A.ow([this,this.AYw],this);},Aqr:
function(AVs,Z,AVr,Ph){var Ajc=A._GetAutoObject(A.Device.Device).Bt.IC(Z,AVr);if(
!!Ajc)AVs.NM(Ajc,Ph);},Anr:function(AaU){var EZ=A._NewObject(A.Device.Filter,0);
var Awb=A._NewObject(A.Device.UInt32FilterCriterion,0);Awb.Initialize(6,2,A._GetAutoObject(
A.Device.Helper).XU(A._GetAutoObject(A.Device.Device).An4)-1,true);EZ.CO(Awb);var
Hh=A._NewObject(A.Device.Int32FilterCriterion,0);Hh.Initialize(1,0,AaU,true);EZ.
CO(Hh);A._GetAutoObject(A.Device.Device).Bt.Bo(EZ);},_Init:function(aArg){C.A$._Init.
call(this,aArg);A.abh.Text._Init.call(this.Lc={I:this},0);C.APb._Init.call(this.
S5={I:this},0);A.abh.AH._Init.call(this.AP={I:this},0);A.abh.AH._Init.call(this.
A4={I:this},0);this.__proto__=C.Ayu;this.AP.L(A.iF.A7);this.A4.L(A.iF.A7);this.J(
this.Lc,0);this.J(this.S5,0);this.J(this.AP,0);this.J(this.A4,0);this.Lc.Y(A.zW(
A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Lc._Done();
this.S5._Done();this.AP._Done();this.A4._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.Lc._ReInit();this.S5._ReInit();this.AP._ReInit(
);this.A4._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.
ACY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.APb={APQ:0,Init:function(aArg){},AKp:function(){return A._GetAutoObject(A.Device.
Helper).AnG(this.APQ);},AKr:function(){return this.AKp()+(this.LW*86400);},Bgv:function(
E){if(this.APQ===E)return;this.APQ=E;A.ow([this,this.UQ],this);},_Init:function(
aArg){C.Afy._Init.call(this,aArg);this.__proto__=C.APb;this.A7.G(BjW);this.Bgs(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Du:function(){if(this.K&&this.K.Du)return this.K.
Du.apply(this,arguments);else return C.FactoryResetScope.Bm4.apply(this,arguments
);},Bm4:function(){return 2;},GP:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jm;return this.FactoryResetScopeToString.Ca(this.Da(aIndex));},_Init:function(aArg
){C.Dj._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.Ci.
Set(0,0);this.Ci.Set(1,1);var KN=this._variants();if(KN){this.K={};KN._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.Dj;this.FactoryResetScopeToString._Done();C.Dj._Done.call(this);},_ReInit:function(
){C.Dj._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.Dj._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.abt.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={EY:function(H){if(
this.A8P){A._GetAutoObject(A.Device.Helper).V.Cr(A._GetAutoObject(A.Device.Device
).Aq);A._GetAutoObject(A.Device.Device).A_(67,true,A._GetAutoObject(A.Device.Helper
).V.VisualId.toFixed(),0,null);}C.SetTransponderScreen.EY.call(this,H);},_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;
},_className:"Application::SetSaveTransponderScreen"};C.ANA={Xv:function(H){this.
Aer();this.DX(A.z2(A.abg.Apm),[this,this.Ao7],3);this.DX(A.z2(A.abg.AfK),[this,this.
Aig],2);this.DX(A.z2(A.abg.AbC),[this,this.AoN],1);this.DX(A.z2(A.abg.LinkTransponder
),[this,this.AOu],8);this.DX(A.z2(A.abg.Aem),[this,this.Ah_],0);this.DX(A.z2(A.abg.
Ox),[this,this.Z0],9);A._GetAutoObject(C.Cy).IS();A._GetAutoObject(C.Cy).V1(A.z2(
A.abg.Aen)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.Device).Cn(6);},DS:function(
H){},Acd:function(){return C.Y8;},Ace:function(){return C.Aci;},Ry:function(H){A.
_GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(A.Device.Helper).AKt());}
,HX:function(H){C.Ge.HX.call(this,H);if(this.AhY()===false){this.N.Cm(A.zW(A.abi.
Ast));this.N.Cg=[this,this.AJy];this.N.Fr(A.jm);}this.N.O3(false);this.N.O4(false
);},Ad$:function(){A._GetAutoObject(C.A1).BX(51);},Ad_:function(){A._GetAutoObject(
C.A1).BX(52);},_Init:function(aArg){C.Ge._Init.call(this,aArg);this.__proto__=C.
ANA;var B;this.Dt(C.Azy);this.Et(A.z2(A.abg.Bc_));this.Afq([B=A._GetAutoObject(A.
Device.Device),B.ANW,B.AUI]);},_className:"Application::NoTransponderListScreen"
};C.ANz={_Init:function(aArg){C.Iy._Init.call(this,aArg);this.__proto__=C.ANz;this.
J$.An(false);this.J$.Aj(false);this.J$.W(false);},_className:"Application::NoTransponderListFilterScreen"
};C.ANy={_Init:function(aArg){C.H9._Init.call(this,aArg);this.__proto__=C.ANy;this.
N.Cb(A.z2(A.abg.Bad));},_className:"Application::NoTransponderListActionsScreen"
};C.Azy={Ez:function(H){C.JI.Ez.call(this,H);this.CV.Ar(A._GetAutoObject(A.Device.
Converter).Aey(8));},_Init:function(aArg){C.JI._Init.call(this,aArg);this.__proto__=
C.Azy;},_className:"Application::HeaderNoTransponderListFilter"};C.Aye={ArL:null
,GP:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jm;return this.ArL.Ca(aIndex
);},_Init:function(aArg){C.Ft._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.ArL={I:this},0);this.__proto__=C.Aye;},_Done:function(){this.__proto__=
C.Ft;this.ArL._Done();C.Ft._Done.call(this);},_ReInit:function(){C.Ft._ReInit.call(
this);this.ArL._ReInit();},_Mark:function(D){var B;C.Ft._Mark.call(this,D);if((B=
this.ArL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AHO={B9:null,AbK:null,Init:function(aArg){this.A8(this.B9);},M_:function(){if(
!this.CU){this.CU=A._NewObject(C.N,0);this.CU.CA=[this,this.AjL];this.CU.Cg=null;
this.CU.Cl=[this,this.A9P];this.CU.Cb(A.jm);this.CU.Cm(A.zW(A.abi.AhE));this.CU.
C8(A.zW(A.abi.Ack));}return this.CU;},A9w:function(H){var Ab=(C.Arx.isPrototypeOf(
H)?H:null);if(Ab===this.B9)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3
);else if(Ab===this.AbK)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else
throw new Error(BjX);},_Init:function(aArg){C.K1._Init.call(this,aArg);C.Arx._Init.
call(this.B9={I:this},0);C.Arx._Init.call(this.AbK={I:this},0);this.__proto__=C.
AHO;this.G(Vq);this.Text.R(A.z2(A.abg.ActionSettings));this.B9.G(Kc);this.B9.U(A.
z2(A.abg.AAq));this.AbK.G(RQ);this.AbK.U(A.z2(A.abg.Ox));this.J(this.B9,0);this.
J(this.AbK,0);this.Text.Y(A.zW(A.eV.AB));this.B9.AR=[this,this.A9w];this.AbK.AR=[
this,this.A9w];this.Init(aArg);},_Done:function(){this.__proto__=C.K1;this.B9._Done(
);this.AbK._Done();C.K1._Done.call(this);},_ReInit:function(){C.K1._ReInit.call(
this);this.B9._ReInit();this.AbK._ReInit();this.Text.R(A.z2(A.abg.ActionSettings
));this.B9.U(A.z2(A.abg.AAq));this.AbK.U(A.z2(A.abg.Ox));this.Text.Y(A.zW(A.eV.AB
));},_Mark:function(D){var B;C.K1._Mark.call(this,D);if((B=this.B9)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.AbK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.Bxt={Undefined:0,Bxr:1,Bxs:2,IdScanned:3,Bwt:4,BvB:5,Bwd:6};C.AHZ={A4P:function(
){A._GetAutoObject(A.Device.Device).A_(35,true,A._GetAutoObject(A.Device.Helper).
V.VisualId.toFixed(),2000,[this,this.A_a]);},_Init:function(aArg){C.ArE._Init.call(
this,aArg);this.__proto__=C.AHZ;this.Ft.AF(1);this.AOx(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aca={WD:null,WE:null,WF:null,AeW:null,AeX:null,AeY:null,CA:null,Cg:null,Cl:null
,AlE:A.jm,AlF:A.jm,AlG:A.jm,Aod:0,Aoe:0,Aof:0,Aff:0,XL:false,XK:false,Apo:false,
ApD:false,ApC:false,Ahf:function(EO){this.CA=EO.CA;this.Cg=EO.Cg;this.Cl=EO.Cl;this.
AlE=EO.AlE;this.AlF=EO.AlF;this.AlG=EO.AlG;this.Aff=EO.Aff;this.WD=EO.WD;this.WE=
EO.WE;this.WF=EO.WF;this.AeW=EO.AeW;this.AeX=EO.AeX;this.AeY=EO.AeY;this.ApC=EO.
ApC;this.ApD=EO.ApD;this.Apo=EO.Apo;this.XK=EO.XK;this.XL=EO.XL;this.Aod=EO.Aod;
this.Aoe=EO.Aoe;this.Aof=EO.Aof;},Aiw:function(EO){EO.CA=this.CA;EO.Cg=this.Cg;EO.
Cl=this.Cl;EO.GX(this.AlE);EO.Fr(this.AlF);EO.Cb(this.AlG);EO.ABl(this.Aff);EO.AOk(
this.WD);EO.Atu(this.WE);EO.AoX(this.WF);EO.C8(this.AeW);EO.Cm(this.AeX);EO.Db(this.
AeY);EO.O3(this.ApC);EO.O4(this.ApD);EO.Apo=this.Apo;EO.XK=this.XK;EO.XL=this.XL;
EO.BfJ(this.Aod);EO.AOo(this.Aoe);EO.A3E(this.Aof);},_Init:function(aArg){this.__proto__=
C.Aca;this.WD=A.zW(A.eV.AB);this.WE=A.zW(A.eV.AB);this.WF=A.zW(A.eV.AB);A.hJ++;}
,_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.WD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WE)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.WF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.AeW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AeX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AeY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CA)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cg)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Cl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.Apz._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dt(C.Azw);},_className:"Application::NewAnimalSetTransponderScreen"};C.CZ={Ze:null
,CountryToString:null,Du:function(){return 40;},Da:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},GP:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jm;return this.CountryToString.KL(aIndex);},DT:function(A2){return A2;
},HN:function(){return 39;},AF:function(E){var F;C.AC.AF.call(this,E);if(!!this.
Ze)(F=this.Ze,F[2].call(F[0],E));},AV2:function(H){var F;if(!!this.Ze)this.Q=(F=
this.Ze,F[1].call(F[0]));else this.Q=0;A.aat([this,this.Cz,this.CB],0);},AA9:function(
E){if(A.z_(this.Ze,E))return;if(!!this.Ze)A.zn([this,this.AV2],this.Ze,0);this.Ze=
E;if(!!this.Ze)A.za([this,this.AV2],this.Ze,0);A.ow([this,this.AV2],this);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString._Init.call(this.
CountryToString={I:this},0);this.__proto__=C.CZ;},_Done:function(){this.__proto__=
C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.Ze)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Country"
};C.Oa={AC:null,Q:null,Background:null,HR:null,HQ:null,Mh:0,AI:0,FG:0,Fq:0,Ad8:function(
H){this.Jz(this);},Bh:function(aSize){A.Core.O.Bh.call(this,aSize);this.Background.
G(A.aaN(this.Background.M,aSize));},Ai:function(Ae){var B;A.Core.O.Ai.call(this,
Ae);var Gv=((Ae&0x40)===0x40);if(Gv){this.Background.L(A.iF.A6);this.DC(256);}else{
this.Background.L(this.Mh);this.DC(256);}},Ad7:function(H){this.Ju(this);},Dh:function(
E){if(this.AC===E)return;if(!!this.AC)A.zl([this,this.AXJ],this.AC,0);this.AC=E;
if(!!E)A.y_([this,this.AXJ],E,0);if(!!E)A.ow([this,this.AXJ],this);},Dg:function(
E){if(this.Mh===E)return;this.Mh=E;this.Al();},Jz:function(H){var F;var BR=this.
AI;this.Bu(this.AI+1);if(this.AI!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.Da(this.AI)));A.aat(this.Q,0);}},Ju:function(H){var F;var BR=this.AI;
this.Bu(this.AI-1);if(this.AI!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.Da(this.AI)));A.aat(this.Q,0);}},Bu:function(E){if(E<this.FG)E=this.Fq;
if(E>this.Fq)E=this.FG;if(this.AI===E)return;this.AI=E;this.Al();},Hw:function(E
){if(this.FG===E)return;this.FG=E;this.Al();},FP:function(E){if(this.Fq===E)return;
this.Fq=E;this.Al();},CY:function(H){var F;if(!!this.Q)this.Bu(this.AC.DT((F=this.
Q,F[1].call(F[0]))));},AF:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([
this,this.CY],this.Q,0);this.Q=E;if(!!E)A.za([this,this.CY],E,0);if(!!E)A.ow([this
,this.CY],this);},AXJ:function(H){var F;if(!!this.AC){this.Hw(0);this.FP(this.AC.
HN());if(!!this.Q)this.Bu(this.AC.DT((F=this.Q,F[1].call(F[0]))));this.Al();}},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={
I:this},0);A.Core.B0._Init.call(this.HR={I:this},0);A.Core.B0._Init.call(this.HQ={
I:this},0);this.__proto__=C.Oa;this.G(A5B);this.Background.G(AEC);this.HR.Filter=
4;this.HQ.Filter=5;this.Mh=A.iF.CD;this.J(this.Background,0);this.HR.B1=[this,this.
Ad8];this.HR.D_=[this,this.Ad8];this.HQ.B1=[this,this.Ad7];this.HQ.D_=[this,this.
Ad7];},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();this.HR.
_Done();this.HQ._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.HR._ReInit();this.HQ._ReInit();
},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VerticalSelector"
};C.QI={AVV:A.jm,Ai:function(Ae){C.E$.Ai.call(this,Ae);this.U(A.z2(A.abg.Baq));this.
JN(this.AVV);},B7:function(H){C.E$.B7.call(this,H);var Ajj=A._GetAutoObject(A.Device.
Helper).V.DateOfLastCalving;if(!Ajj)this.AVV=JU;else this.AVV=A._GetAutoObject(A.
abk.K5).Aht(Ajj);this.Al();},_Init:function(aArg){C.E$._Init.call(this,aArg);this.
__proto__=C.QI;},_className:"Application::AnimalInfoItemCalvingDate"};C.QJ={AWW:
0,Ai:function(Ae){C.E$.Ai.call(this,Ae);this.U(A.z2(A.abg.A1o));if(this.AWW>0)this.
JN(this.AWW.toFixed());else this.JN(A.z2(A.abg.Unknown));},B7:function(H){C.E$.B7.
call(this,H);this.AWW=A._GetAutoObject(A.Device.Helper).V.LactationNumber;this.Al(
);},_Init:function(aArg){C.E$._Init.call(this,aArg);this.__proto__=C.QJ;},_className:
"Application::AnimalInfoItemLactationNumber"};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:
null,Du:function(){return 5;},Da:function(aIndex){if((aIndex<0)||(aIndex>=5))return-
1;return aIndex;},GP:function(aIndex){if((aIndex<0)||(aIndex>=5))return A.jm;return this.
EaseOfDeliveryToString.Ca(aIndex);},DT:function(A2){return A2;},HN:function(){return 4;
},AF:function(E){C.AC.AF.call(this,E);if(!!this.Animal)this.Animal.Aib(E);},AWi:
function(H){if(!!this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.aat([
this,this.Cz,this.CB],0);},NZ:function(E){var B;if(this.Animal===E)return;if(!!this.
Animal)A.zn([this,this.AWi],[B=this.Animal,B.ANO,B.Aib],0);this.Animal=E;if(!!this.
Animal)A.za([this,this.AWi],[B=this.Animal,B.ANO,B.Aib],0);A.ow([this,this.AWi],
this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Du:function(){return 99;},Da:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},GP:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jm;return this.BreedToString.Ca(aIndex);},DT:function(A2){return A2;
},HN:function(){return 98;},AF:function(E){C.AC.AF.call(this,E);if(!!this.Animal
)this.Animal.O1(E);},AVT:function(H){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.aat([this,this.Cz,this.CB],0);},NZ:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.zn([this,this.AVT],[B=this.Animal,B.AsY,B.O1],0);this.
Animal=E;if(!!this.Animal)A.za([this,this.AVT],[B=this.Animal,B.AsY,B.O1],0);A.ow([
this,this.AVT],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.AIx={Uo:null,M5:null,Mq:null,M6:null,SF:null
,AbD:null,Init:function(aArg){var B;A.za([this,this.A9B],[B=A._GetAutoObject(A.Device.
Device),B.ANH,B.AUB],0);A.za([this,this.AXz],[B=A._GetAutoObject(A.Device.Device
),B.Ah5,B.Ai2],0);A.za([this,this.AXz],[B=A._GetAutoObject(A.Device.Device),B.Ah6
,B.Ai3],0);A.ow([this,this.A9B],this);A.ow([this,this.AXz],this);},A9B:function(
H){switch(A._GetAutoObject(A.Device.Device).Aev){case 0:{this.M5.Aj(true);this.M5.
An(true);this.M5.W(true);}break;case 1:{this.M5.Aj(false);this.M5.An(false);this.
M5.W(false);}break;default:throw new Error(BjY+A._GetAutoObject(A.Device.Device).
Aev.toFixed());}},AXz:function(H){var F,C$;if(((F=this.Mq.Q,F[1].call(F[0]))+(C$=
this.M6.Q,C$[1].call(C$[0])))>12)(C$=this.M6.Q,C$[2].call(C$[0],12-(F=this.Mq.Q,
F[1].call(F[0]))));},_Init:function(aArg){C.CG._Init.call(this,aArg);C.B_._Init.
call(this.Uo={I:this},0);C.APE._Init.call(this.M5={I:this},0);C.JQ._Init.call(this.
Mq={I:this},0);C.JQ._Init.call(this.M6={I:this},0);C.AM$._Init.call(this.SF={I:this
},0);C.AbD._Init.call(this.AbD={I:this},0);this.__proto__=C.AIx;var B;this.F$.R(
A.z2(A.abg.AnP));this.Lf(A.z2(A.abg.AZm));this.Uo.G(BjZ);this.Uo.Aj(true);this.Uo.
W(true);this.Uo.U(A.z2(A.abg.AZh));this.Uo.Bk(true);this.M5.G(A5A);this.M5.Aj(true
);this.M5.W(true);this.M5.U(A.z2(A.abg.A1Q));this.M5.Bk(true);this.Mq.G(Bj0);this.
Mq.Aj(true);this.Mq.W(true);this.Mq.U(A.z2(A.abg.AZ9));this.Mq.Bk(false);this.Mq.
Hw(2);this.Mq.FP(6);this.Mq.Nd(A.z2(A.abg.AyU));this.Mq.N3(A.z2(A.abg.FA));this.
M6.G(Yh);this.M6.Aj(true);this.M6.U(A.z2(A.abg.A11));this.M6.Bk(true);this.M6.Hw(
0);this.M6.FP(12);this.M6.Nd(A.z2(A.abg.AyU));this.M6.N3(A.z2(A.abg.FA));this.SF.
G(AEc);this.SF.An(true);this.SF.Aj(true);this.SF.Bk(false);this.SF.A3H(A.z2(A.abg.
AZk));this.J(this.Uo,0);this.J(this.M5,0);this.J(this.Mq,0);this.J(this.M6,0);this.
J(this.SF,0);this.Uo.AF([B=this.AbD,B.Cz,B.CB]);this.Uo.Dh(this.AbD);this.M5.UN([
B=A._GetAutoObject(A.Device.Device),B.Xu,B.A6r]);this.M5.Ald([B=A._GetAutoObject(
A.Device.Device),B.AAL,B.AEL]);this.Mq.AF([B=A._GetAutoObject(A.Device.Device),B.
Ah5,B.Ai2]);this.M6.AF([B=A._GetAutoObject(A.Device.Device),B.Ah6,B.Ai3]);this.SF.
Dx(A.zW(A.abi.Aok));this.SF.P2([B=A._GetAutoObject(A.Device.Device),B.Ah5,B.Ai2]
);this.SF.Rq([B=A._GetAutoObject(A.Device.Device),B.Ah6,B.Ai3]);this.Init(aArg);
},_Done:function(){this.__proto__=C.CG;this.Uo._Done();this.M5._Done();this.Mq._Done(
);this.M6._Done();this.SF._Done();this.AbD._Done();C.CG._Done.call(this);},_ReInit:
function(){C.CG._ReInit.call(this);this.Uo._ReInit();this.M5._ReInit();this.Mq._ReInit(
);this.M6._ReInit();this.SF._ReInit();this.AbD._ReInit();this.F$.R(A.z2(A.abg.AnP
));this.Lf(A.z2(A.abg.AZm));this.Uo.U(A.z2(A.abg.AZh));this.M5.U(A.z2(A.abg.A1Q)
);this.Mq.U(A.z2(A.abg.AZ9));this.Mq.Nd(A.z2(A.abg.AyU));this.Mq.N3(A.z2(A.abg.FA
));this.M6.U(A.z2(A.abg.A11));this.M6.Nd(A.z2(A.abg.AyU));this.M6.N3(A.z2(A.abg.
FA));this.SF.A3H(A.z2(A.abg.AZk));},_Mark:function(D){var B;C.CG._Mark.call(this
,D);if((B=this.Uo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Mq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.SF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbD
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoAssignIdsSettingsScreen"
};C.AM9={Ul:null,WY:null,Acw:null,Init:function(aArg){this.A8(this.Ul);},Abg:function(
H){var Ab=(C.B9.isPrototypeOf(H)?H:null);if(!Ab)return;if(Ab===this.WY)this.Bqz(
);else if(Ab===this.Ul)this.Bs_(this);else throw new Error(AuY);A._GetAutoObject(
A.Device.Device).Cn(0);},Bs_:function(H){var B;var F;var TH=(C.Akf.isPrototypeOf(
B=(F=A._GetAutoObject(C.A1).Q,F[1].call(F[0])))?B:null);if(!TH){A.aa8("%s",Bj1);
return;}TH.AGz(this);},Bqz:function(){A._GetAutoObject(A.Device.Helper).V.ACA(true
);A._GetAutoObject(A.Device.Helper).V.Cr(A._GetAutoObject(A.Device.Device).Aq);A.
_GetAutoObject(A.Device.Device).A_(19,true,A._GetAutoObject(A.Device.Helper).V.VisualId.
toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);
C.LI._Init.call(this.Ul={I:this},0);C.LI._Init.call(this.WY={I:this},0);C.AJg._Init.
call(this.Acw={I:this},0);this.__proto__=C.AM9;var B;this.G(AdE);this.Ul.G(RQ);this.
Ul.An(true);this.Ul.U(A.z2(A.abg.A4v));this.Ul.Bk(true);this.WY.G(Kc);this.WY.An(
true);this.WY.U(A.z2(A.abg.AYZ));this.WY.Bk(true);this.Acw.G(BI);this.Acw.U(A.z2(
A.abg.Ay$));this.Acw.Bk(true);this.J(this.Ul,0);this.J(this.WY,0);this.J(this.Acw
,0);this.Ul.AR=[this,this.Abg];this.WY.AR=[this,this.Abg];this.Acw.A3j([B=A._GetAutoObject(
A.Device.Device),B.AoC,B.Aqf]);this.Init(aArg);},_Done:function(){this.__proto__=
C.OverlayMenu;this.Ul._Done();this.WY._Done();this.Acw._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ul._ReInit(
);this.WY._ReInit();this.Acw._ReInit();this.Ul.U(A.z2(A.abg.A4v));this.WY.U(A.z2(
A.abg.AYZ));this.Acw.U(A.z2(A.abg.Ay$));},_Mark:function(D){var B;C.OverlayMenu.
_Mark.call(this,D);if((B=this.Ul)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MeasurementReadyOverlay"};C.AJg={Ai:function(Ae){C.AcC.Ai.call(this
,Ae);var Gb=A.iF.CD;var G1=A.iF.Text;if(this.GW){Gb=A.iF.Text;G1=A.iF.Bg;}if(!this.
Lq){this.Background.L(Gb);this.T.L(A.iF.AkN);}else if(this.QB){this.Background.L(
A.iF.A6);this.T.L(A.iF.Bg);}else if(this.Ko){this.Background.L(A.iF.A6);this.T.L(
A.iF.Bg);}else{this.Background.L(Gb);this.T.L(G1);}if(this.Akm){this.Mj.Cc(1);this.
Mj.L(A.iF.Hy);}else{this.Mj.Cc(0);this.Mj.L(A.iF.Bg);}},_Init:function(aArg){C.AcC.
_Init.call(this,aArg);this.__proto__=C.AJg;},_className:"Application::DarkThemeMenuItemCheckBox"
};C.AM$={CN:null,Fn:null,Fb:null,AhZ:null,Ri:null,El:null,ANo:RP,Bh:function(aSize
){C.B9.Bh.call(this,aSize);var Gb=A.iF.CD;var G1=A.iF.Text;if(this.GW){Gb=A.iF.Bg;
G1=A.iF.Text;}this.Background.L(Gb);this.T.L(G1);this.Background.G(A.aaN(this.Background.
M,aSize));this.T.G([10,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F
,C$;C.B9.Ai.call(this,Ae);this.AhZ.L(this.T.AV);this.Ri.L(this.T.AV);this.Ri.R(Bj2
);this.U(((this.ANo+A.z2(A.abg.Colon))+Cv)+A._GetAutoObject(A.Device.Helper).AlI(
840003123456789).toFixed());if(!!this.Fn&&!!this.Fb){var AW1=this.Ri.Alx([(this.
Ri.String.length-(F=this.Fb,F[1].call(F[0])))-(C$=this.Fn,C$[1].call(C$[0])),0]);
var AX7=this.Ri.Alx([this.Ri.String.length-(F=this.Fb,F[1].call(F[0])),0]);var AxH=
this.Ri.Dd();this.El.G([AW1[0]-1,AxH[1],AX7[0]+1,AxH[3]]);}else this.El.G(this.Ri.
Dd());},Dx:function(E){if(this.CN===E)return;this.CN=E;this.AhZ.Ar(E);},P2:function(
E){if(A.z_(this.Fn,E))return;if(!!this.Fn)A.zn([this,this.YJ],this.Fn,0);this.Fn=
E;if(!!E)A.za([this,this.YJ],E,0);if(!!E)A.ow([this,this.YJ],this);},Rq:function(
E){if(A.z_(this.Fb,E))return;if(!!this.Fb)A.zn([this,this.YK],this.Fb,0);this.Fb=
E;if(!!E)A.za([this,this.YK],E,0);if(!!E)A.ow([this,this.YK],this);},YK:function(
H){this.Al();},YJ:function(H){this.Al();},A3H:function(E){if(this.ANo===E)return;
this.ANo=E;this.Al();},_Init:function(aArg){C.B9._Init.call(this,aArg);A.abh.Am.
_Init.call(this.AhZ={I:this},0);A.abh.Text._Init.call(this.Ri={I:this},0);A.abh.
CR._Init.call(this.El={I:this},0);this.__proto__=C.AM$;this.G(KM);this.T.A0(0x11
);this.AhZ.G(Qg);this.Ri.G(Bj3);this.El.G(Bj4);this.El.N5(2);this.El.L(A.iF.E1);
this.J(this.AhZ,0);this.J(this.Ri,0);this.J(this.El,0);this.Ri.Y(A.zW(A.eV.Au));
},_Done:function(){this.__proto__=C.B9;this.AhZ._Done();this.Ri._Done();this.El.
_Done();C.B9._Done.call(this);},_ReInit:function(){C.B9._ReInit.call(this);this.
AhZ._ReInit();this.Ri._ReInit();this.El._ReInit();},_Mark:function(D){var B;C.B9.
_Mark.call(this,D);if((B=this.CN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fb)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AhZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ri)._cycle!=D)B._Mark(B._cycle=D);if((B=this.El)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={HX:function(
H){C.Sf.HX.call(this,H);if(this.Ahz)this.N.Cm(A.zW(A.abi.Av));else this.N.Cm(A.zW(
A.abi.AIW));this.N.Db(A.zW(A.abi.Options));this.N.Fr(A.jm);this.N.Cb(A.jm);this.
N.Cg=[this,this.A4g];this.N.Cl=[this,this.Xv];this.N.Atu(A.zW(A.eV.AB));this.N.AoX(
A.zW(A.eV.AB));},Md:function(H){this.A9U(this);},NG:function(H){this.Bs5(this);}
,Aeq:function(To,Tp,BpC){if(A._GetAutoObject(A.Device.Device).DK===BpC)A._GetAutoObject(
C.Cy).Ag3(To,Tp,true);else A._GetAutoObject(C.Cy).Ag3(To,Tp,false);},Xv:function(
H){if((A._GetAutoObject(A.Device.Device).DK===3)&&!this.Ahz){A._GetAutoObject(C.
Cy).Aep(A.z2(A.abg.BaT),[this,this.BgM]);A._GetAutoObject(C.Cy).IS();}this.Aeq(A.
z2(A.abg.Rating),[this,this.AOU],3);this.Aeq(A.z2(A.abg.AfT),[this,this.AOW],2);
this.Aeq(A.z2(A.abg.Temperature),[this,this.AOV],1);this.Aeq(A.z2(A.abg.AbC),[this
,this.AOT],0);A._GetAutoObject(C.Cy).IS();A._GetAutoObject(C.Cy).V1(A.z2(A.abg.AZ$
));A._GetAutoObject(A.Device.Device).Cn(6);},_Init:function(aArg){C.Sf._Init.call(
this,aArg);this.__proto__=C.AnimalSingleInfoScreen;},_className:"Application::AnimalSingleInfoScreen"
};C.AnimalMultiInfoScreen={TS:null,Init:function(aArg){var B;A.za([this,this.Ad4
],[B=A._GetAutoObject(A.Device.Device).Aq,B.Fd,B.Ff],0);A.ow([this,this.A$u],this
);A.ow([this,this.Ry],this);},CE:function(H){C.Sf.CE.call(this,H);A.ow([this,this.
A$A],this);},ACH:function(H){C.Sf.ACH.call(this,H);if(!!this.Kz)this.Alw(this.Kz
,this.TS);},HX:function(H){C.Sf.HX.call(this,H);this.N.Cm(A.zW(A.abi.AMw));this.
N.Db(A.zW(A.abi.AMx));if(this.Ahz)this.N.AOo(0);else this.N.AOo(1);this.N.A3E(A.
_GetAutoObject(A.Device.Converter).A$W(A._GetAutoObject(A.Device.Device).DK));this.
N.Fr(A.jm);this.N.Cb(A.jm);this.N.Cg=[this,this.BeE];this.N.Cl=[this,this.BgO];this.
N.Atu(A.zW(A.eV.AB));this.N.AoX(A.zW(A.eV.AB));if(!A._GetAutoObject(A.Device.Device
).Aq.PF()){this.N.Ji.DC(100);this.N.Cg=null;}else this.N.Ji.DC(255);if(!A._GetAutoObject(
A.Device.Device).Aq.Cd()){this.N.Mo.DC(100);this.N.Cl=null;}else this.N.Mo.DC(255
);if(A._GetAutoObject(A.Device.Device).Aq.Cd()<=1){this.N.Sz.DC(100);this.N.SA.DC(
100);}else{this.N.Sz.DC(255);this.N.SA.DC(255);}},Md:function(H){if(A._GetAutoObject(
A.Device.Device).Aq.Cd()<=1)return;var KS=A._GetAutoObject(A.Device.Helper).V.Ct;
KS=KS+1;if(KS>=A._GetAutoObject(A.Device.Device).Aq.Cd())KS=0;A._GetAutoObject(A.
Device.Helper).HS(KS);},NG:function(H){if(A._GetAutoObject(A.Device.Device).Aq.Cd(
)<=1)return;var KS=A._GetAutoObject(A.Device.Helper).V.Ct;KS=KS-1;if(KS<0)KS=A._GetAutoObject(
A.Device.Device).Aq.Cd()-1;A._GetAutoObject(A.Device.Helper).HS(KS);},Agx:function(
H){if(A._GetAutoObject(A.Device.Helper).V.Id>0)A._GetAutoObject(C.A1).BX(57);},BeE:
function(H){A._GetAutoObject(A.Device.Device).Cn(10);},BgO:function(H){this.A9U(
this);},Ry:function(H){A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(
A.Device.Helper).LO());A.ow([this,this.A$A],this);},A$u:function(H){if(!A._GetAutoObject(
A.Device.Device).Aq.Cd()){this.TS.W(true);if(!A._GetAutoObject(A.Device.Device).
Aq.PF()||!A._GetAutoObject(A.Device.Device).Aq.Filter)this.TS.R(A.z2(A.abg.AAx));
else if(!A._GetAutoObject(A.Device.Device).Aq.Filter.DG(1,4)){if(A._GetAutoObject(
A.Device.Helper).Azi(A._GetAutoObject(A.Device.Device).Aq.Filter)===1)this.TS.R(
A.z2(A.abg.AJK));else this.TS.R(A.z2(A.abg.AJJ));}else this.TS.R(A.z2(A.abg.ANw)
);}else this.TS.W(false);},A$A:function(H){var Bt0=A._GetAutoObject(A.Device.Helper
).V.Id;var BtN=A._GetAutoObject(A.Device.Device).Aq.LL(0,Bt0);if(!A._GetAutoObject(
A.Device.Device).Aq.Cd())A._GetAutoObject(A.Device.Helper).HS(-1);else if(BtN<0)
A._GetAutoObject(A.Device.Helper).HS(0);},Ad4:function(H){this.A$u(this);this.HX(
this);},_Init:function(aArg){C.Sf._Init.call(this,aArg);C.Aix._Init.call(this.TS={
I:this},0);this.__proto__=C.AnimalMultiInfoScreen;this.Dt(C.AK7);this.TS.G(FK);this.
J(this.TS,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Sf;this.TS._Done(
);C.Sf._Done.call(this);},_ReInit:function(){C.Sf._ReInit.call(this);this.TS._ReInit(
);},_Mark:function(D){var B;C.Sf._Mark.call(this,D);if((B=this.TS)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"};C.AIb={PO:null,Um:
null,ZH:null,W1:null,Init:function(aArg){var B;var F;this.A8(this.PO);if(!!A._GetAutoObject(
C.A1).Q){var TH=(C.AnimalMultiInfoScreen.isPrototypeOf(B=(F=A._GetAutoObject(C.A1
).Q,F[1].call(F[0])))?B:null);if(!TH){A.aa8("%s",AUm);return;}else{if(TH.Ahz)this.
PO.U(A.z2(A.abg.Bf));else this.PO.U(A.z2(A.abg.EK));var Av8=A._GetAutoObject(A.Device.
Device).Aq.Filter;if(!Av8||A._GetAutoObject(A.Device.Helper).Aom(Av8))this.W1.An(
false);else if(!A._GetAutoObject(A.Device.Device).Aq.Cd()){this.Um.An(false);this.
PO.An(false);}}}},Abg:function(H){var Ab=(C.B9.isPrototypeOf(H)?H:null);if(!Ab)return;
A._GetAutoObject(A.Device.Device).Cn(0);if(Ab===this.ZH)A._GetAutoObject(C.A1).BX(
9);else if(Ab===this.Um)A._GetAutoObject(A.Device.Device).Cn(7);else if(Ab===this.
PO)this.Bum();else if(Ab===this.W1)this.AV0();else throw new Error(AuY);},Bum:function(
){var B;var F;var TH=(C.AnimalMultiInfoScreen.isPrototypeOf(B=(F=A._GetAutoObject(
C.A1).Q,F[1].call(F[0])))?B:null);if(!TH){A.aa8("%s",AUm);return;}TH.A4g(this);}
,AV0:function(){var B;var F;var TH=(C.AnimalMultiInfoScreen.isPrototypeOf(B=(F=A.
_GetAutoObject(C.A1).Q,F[1].call(F[0])))?B:null);if(!TH){A.aa8("%s",AUm);return;
}TH.Ry(this);},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.LI._Init.
call(this.PO={I:this},0);C.LI._Init.call(this.Um={I:this},0);C.LI._Init.call(this.
ZH={I:this},0);C.LI._Init.call(this.W1={I:this},0);this.__proto__=C.AIb;this.G(AdD
);this.PO.G(Yf);this.PO.An(true);this.PO.U(A.z2(A.abg.EK));this.PO.Bk(true);this.
Um.G(RQ);this.Um.An(true);this.Um.U(A.z2(A.abg.APw));this.Um.Bk(true);this.ZH.G(
Kc);this.ZH.U(A.z2(A.abg.Aiz));this.ZH.Bk(true);this.W1.G(BI);this.W1.U(A.z2(A.abg.
AyA));this.W1.Bk(true);this.J(this.PO,0);this.J(this.Um,0);this.J(this.ZH,0);this.
J(this.W1,0);this.PO.AR=[this,this.Abg];this.Um.AR=[this,this.Abg];this.ZH.AR=[this
,this.Abg];this.W1.AR=[this,this.Abg];this.Init(aArg);},_Done:function(){this.__proto__=
C.OverlayMenu;this.PO._Done();this.Um._Done();this.ZH._Done();this.W1._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.PO._ReInit();this.Um._ReInit();this.ZH._ReInit();this.W1._ReInit();this.PO.
U(A.z2(A.abg.EK));this.Um.U(A.z2(A.abg.APw));this.ZH.U(A.z2(A.abg.Aiz));this.W1.
U(A.z2(A.abg.AyA));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((
B=this.PO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Um)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ZH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W1)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"};C.MultiInfoActionsScreen={
_Init:function(aArg){C.H9._Init.call(this,aArg);this.__proto__=C.MultiInfoActionsScreen;
this.N.Cb(A.z2(A.abg.Bac));},_className:"Application::MultiInfoActionsScreen"};C.
Jj={SB:null,Ee:null,Wx:null,Background:null,Am:null,HR:null,HQ:null,Mh:0,AI:0,Ai:
function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var FT=((Ae&0x10)===0x10);var
Gv=((Ae&0x40)===0x40);if(Gv){this.Background.L(A.iF.A6);this.Am.L(A.iF.Bg);this.
DC(256);}else if(FT){this.Background.L(this.Mh);this.Am.L(A.iF.Text);this.DC(256
);}else{this.Background.L(this.Mh);this.Am.L(A.iF.Text);this.DC(128);}if(!this.AI
)this.Am.Cc(0);else if(this.AI>0){if(A.z_(this.SB,[B=A._GetAutoObject(A.Device.Device
),B.As6,B.Avp]))this.Am.Cc(2);else if(A.z_(this.SB,[B=A._GetAutoObject(A.Device.
Device),B.As5,B.Avo]))this.Am.Cc(3);else if(!!this.Wx&&((F=this.Wx,F[1].call(F[0
]))===1))this.Am.Cc(1);else this.Am.Cc(0);}else if(A.z_(this.SB,[B=A._GetAutoObject(
A.Device.Device),B.As6,B.Avp]))this.Am.Cc(6);else if(A.z_(this.SB,[B=A._GetAutoObject(
A.Device.Device),B.As5,B.Avo]))this.Am.Cc(7);else if(!!this.Wx&&((F=this.Wx,F[1].
call(F[0]))===1))this.Am.Cc(5);else this.Am.Cc(4);},Ad8:function(H){this.Jz(this
);},Ad7:function(H){this.Ju(this);},Jz:function(H){this.Bu(1);},Ju:function(H){this.
Bu(-1);},BfT:function(E){if(A.z_(this.SB,E))return;if(!!this.SB)A.zn([this,this.
AXv],this.SB,0);this.SB=E;if(!!E)A.za([this,this.AXv],this.SB,0);A.ow([this,this.
AXv],this);},UN:function(E){if(A.z_(this.Ee,E))return;if(!!this.Ee)A.zn([this,this.
Ad6],this.Ee,0);this.Ee=E;if(!!E)A.za([this,this.Ad6],this.Ee,0);if(!!E)A.ow([this
,this.Ad6],this);},AXv:function(H){var F;if(!!this.SB)this.Bu((F=this.SB,F[1].call(
F[0])));},Ad6:function(H){A.ow([this,this.Buv],this);},Dg:function(E){if(this.Mh===
E)return;this.Mh=E;this.Al();},Bu:function(E){var F;if(this.AI===E)return;this.AI=
E;if(!!this.SB)(F=this.SB,F[2].call(F[0],E));this.Al();A.aat([this,this.SR,this.
Bu],0);},A3u:function(E){if(A.z_(this.Wx,E))return;if(!!this.Wx)A.zn([this,this.
Ad6],this.Wx,0);this.Wx=E;if(!!E)A.za([this,this.Ad6],this.Wx,0);if(!!E)A.ow([this
,this.Ad6],this);},Buv:function(H){var F,C$;if(!this.Wx||!this.Ee)return;this.BfT(
A._GetAutoObject(A.Device.Helper).A8s((F=this.Wx,F[1].call(F[0])),(C$=this.Ee,C$[
1].call(C$[0]))));this.Al();},SR:function(){return this.AI;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);
A.abh.Am._Init.call(this.Am={I:this},0);A.Core.B0._Init.call(this.HR={I:this},0);
A.Core.B0._Init.call(this.HQ={I:this},0);this.__proto__=C.Jj;this.G(AED);this.Background.
AW(0x3F);this.Background.G(AED);this.Am.AW(0x3C);this.Am.G(AED);this.HR.Filter=4;
this.HQ.Filter=5;this.Mh=A.iF.CD;this.J(this.Background,0);this.J(this.Am,0);this.
Am.Ar(A.zW(A.abi.APS));this.HR.B1=[this,this.Ad8];this.HQ.B1=[this,this.Ad7];},_Done:
function(){this.__proto__=A.Core.O;this.Background._Done();this.Am._Done();this.
HR._Done();this.HQ._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.Background._ReInit();this.Am._ReInit();this.HR._ReInit(
);this.HQ._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.SB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ee)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Wx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.HR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HQ).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AHN={Xv:function(H){var F;this.Aer();if(!!A._GetAutoObject(A.Device.Helper).
AKn((F=this.D0,F[1].call(F[0])),0,true))this.AYT(A.z2(A.abg.A03),[this,this.BgP]
,A._GetAutoObject(A.Device.Device).Akc);else A._GetAutoObject(C.Cy).Ag2(A.z2(A.abg.
A03));A._GetAutoObject(C.Cy).IS();this.DX(A.z2(A.abg.LinkTransponder),[this,this.
AOu],8);this.DX(A.z2(A.abg.Ox),[this,this.Z0],9);this.DX(A.z2(A.abg.Bjp),[this,this.
BgD],10);this.DX(A.z2(A.abg.Apm),[this,this.Ao7],3);this.DX(A.z2(A.abg.AfK),[this
,this.Aig],2);A._GetAutoObject(C.Cy).IS();A._GetAutoObject(C.Cy).V1(A.z2(A.abg.Aen
)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.Device).Cn(6);},DS:function(H){},
Acd:function(){return C.Y8;},Ace:function(){return C.Aci;},Ry:function(H){var F;
A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(A.Device.Helper).A0J((F=
this.D0,F[1].call(F[0]))));},HX:function(H){var F;C.Ge.HX.call(this,H);if(this.AhY(
)===false){this.N.Cm(A._GetAutoObject(A.Device.Converter).A$Y((F=this.D0,F[1].call(
F[0]))));this.N.Cg=[this,this.AEU];this.N.Fr(A.jm);}this.N.O3(false);this.N.O4(false
);},Ad$:function(){A._GetAutoObject(C.A1).BX(59);},Ad_:function(){A._GetAutoObject(
C.A1).BX(60);},AXy:function(H){C.Ge.AXy.call(this,H);A.ow([this,this.A6L],this);
},BgP:function(H){A._GetAutoObject(A.Device.Device).Cn(0);A._GetAutoObject(A.Device.
Device).As_(!A._GetAutoObject(A.Device.Device).Akc);this.AlL(this);},AlL:function(
H){var F;var Bb=A._GetAutoObject(A.Device.Device).Aq.Filter.F0();A._GetAutoObject(
A.Device.Helper).Bhl(Bb);if(A._GetAutoObject(A.Device.Device).Akc){var AWG=A._GetAutoObject(
A.Device.Helper).AKn((F=this.D0,F[1].call(F[0])),21600,true);Bb.CO(AWG);}A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);},_Init:function(aArg){C.Ge._Init.call(this,aArg);this.
__proto__=C.AHN;var B;this.Et(A.z2(A.abg.ANq));this.Afq([B=A._GetAutoObject(A.Device.
Device),B.A17,B.A6a]);},_className:"Application::ActionListScreen"};C.AHM={_Init:
function(aArg){C.Iy._Init.call(this,aArg);this.__proto__=C.AHM;},_className:"Application::ActionListFilterScreen"
};C.AHL={_Init:function(aArg){C.H9._Init.call(this,aArg);this.__proto__=C.AHL;this.
N.Cb(A.z2(A.abg.A$_));},_className:"Application::ActionListActionsScreen"};C.AK7={
Ig:null,I3:null,A7:null,LX:A.jm,Init:function(aArg){var B;A.za([this,this.MC],[B=
A._GetAutoObject(A.Device.Helper).V,B.A2G,B.A3W],0);A.za([this,this.MC],[B=A._GetAutoObject(
A.Device.Device).Aq,B.Fd,B.Ff],0);},CW:function(E){C.If.CW.call(this,E);this.I3.
L(E);},Ez:function(H){C.If.Ez.call(this,H);var Av8=A._GetAutoObject(A.Device.Device
).Aq.Filter;if(!Av8||A._GetAutoObject(A.Device.Helper).Aom(Av8))this.Ig.W(false);
else this.Ig.W(true);if(A._GetAutoObject(A.Device.Helper).V.An9())this.AtH(((A._GetAutoObject(
A.Device.Helper).V.Ct+1).toFixed()+A5C)+A._GetAutoObject(A.Device.Device).Aq.Cd(
).toFixed());else this.AtH(A5D);},AtH:function(E){if(this.LX===E)return;this.LX=
E;this.I3.R(E);},_Init:function(aArg){C.If._Init.call(this,aArg);A.abh.Am._Init.
call(this.Ig={I:this},0);A.abh.Text._Init.call(this.I3={I:this},0);A.abh.DU._Init.
call(this.A7={I:this},0);this.__proto__=C.AK7;this.IH.G(Bj5);this.CL.G(Bj6);this.
Ig.G(Bj7);this.Ig.L(A.iF.Text);this.I3.G(A5E);this.I3.HT(2);this.I3.KF(true);this.
I3.A0(0x12);this.I3.R(A5F);this.A7.D$(AUi);this.A7.Eg(AUj);this.A7.L(A.iF.A7);this.
J(this.Ig,0);this.J(this.I3,0);this.J(this.A7,0);this.Ig.Ar(A.zW(A.abi.Acm));this.
I3.Y(A.zW(A.eV.AB));this.Init(aArg);},_Done:function(){this.__proto__=C.If;this.
Ig._Done();this.I3._Done();this.A7._Done();C.If._Done.call(this);},_ReInit:function(
){C.If._ReInit.call(this);this.Ig._ReInit();this.I3._ReInit();this.A7._ReInit();
},_Mark:function(D){var B;C.If._Mark.call(this,D);if((B=this.Ig)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A7)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.ApL={Text:null,Bh:function(aSize){C.Oa.Bh.call(this,aSize);this.Text.G(A.aaN(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.Oa.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(JU);else this.Text.R(this.AC.GP((F=this.Q,F[1].call(F[0]
))));var Gv=((Ae&0x40)===0x40);if(Gv)this.Text.L(A.iF.Bg);else this.Text.L(A.iF.
Text);},_Init:function(aArg){C.Oa._Init.call(this,aArg);A.abh.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.ApL;this.Text.R(Qj);this.J(this.Text,0);this.Text.
Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.Oa;this.Text._Done();C.Oa._Done.
call(this);},_ReInit:function(){C.Oa._ReInit.call(this);this.Text._ReInit();},_Mark:
function(D){var B;C.Oa._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::TextSelector"};C.Aoj={CN:null,Bh:function(aSize){C.
Oa.Bh.call(this,aSize);this.CN.G(A.aaN(this.CN.M,aSize));},Ai:function(Ae){var B;
var F;C.Oa.Ai.call(this,Ae);if(!this.AC||!this.Q)this.CN.Ar(null);else{this.CN.Ar(
this.AC.Aze(this.AC.DT((F=this.Q,F[1].call(F[0])))));this.CN.Cc(this.AC.Azg(this.
AC.DT((F=this.Q,F[1].call(F[0])))));}var Gv=((Ae&0x40)===0x40);if(Gv)this.CN.L(A.
iF.Bg);else this.CN.L(A.iF.Text);},_Init:function(aArg){C.Oa._Init.call(this,aArg
);A.abh.Am._Init.call(this.CN={I:this},0);this.__proto__=C.Aoj;this.G(AED);this.
CN.G(A5B);this.J(this.CN,0);this.CN.Ar(A.zW(A.abj.J4));},_Done:function(){this.__proto__=
C.Oa;this.CN._Done();C.Oa._Done.call(this);},_ReInit:function(){C.Oa._ReInit.call(
this);this.CN._ReInit();},_Mark:function(D){var B;C.Oa._Mark.call(this,D);if((B=
this.CN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.ArW={T9:null,DirectionOfCountingToString:null,Ab0:null,Du:function(){return 2;
},Da:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return aIndex;
},GP:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return A.jm;return this.
DirectionOfCountingToString.Ca(aIndex);},DT:function(A2){return A2;},HN:function(
){return this.Du()-1;},AF:function(E){var F;C.AC.AF.call(this,E);if(!!this.T9)(F=
this.T9,F[2].call(F[0],E));},Aze:function(aIndex){if((aIndex<0)||(aIndex>=this.Du(
)))return null;return this.Ab0.ApM(aIndex);},Azg:function(aIndex){if((aIndex<0)||(
aIndex>=this.Du()))return-1;return this.Ab0.ApN(aIndex);},AWb:function(H){var F;
if(!!this.T9)this.Q=(F=this.T9,F[1].call(F[0]));else this.Q=0;A.aat([this,this.Cz
,this.CB],0);},Z3:function(E){if(A.z_(this.T9,E))return;if(!!this.T9)A.zn([this,
this.AWb],this.T9,0);this.T9=E;if(!!this.T9)A.za([this,this.AWb],this.T9,0);A.ow([
this,this.AWb],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Ab0._Init.call(this.Ab0={I:this},0);this.__proto__=C.ArW;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Ab0._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Ab0._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.T9)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab0)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AH5={GL:null,Ee:null,AnimalIdGenerationMethodToString:
null,AbG:null,Du:function(){return 4;},Da:function(aIndex){var F;var A2=-1;if((aIndex<
0)||(aIndex>=this.Du()))return-1;switch(aIndex){case 0:A2=0;break;case 1:A2=1;break;
case 2:A2=this.BrJ((F=this.Ee,F[1].call(F[0])));break;case 3:A2=5;break;default:
throw new Error(Bj8+aIndex.toFixed());}return A2;},GP:function(aIndex){if((aIndex<
0)||(aIndex>=this.Du()))return A.jm;return this.AnimalIdGenerationMethodToString.
Ca(this.Da(aIndex));},DT:function(A2){var aIndex=-1;switch(A2){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bj9+A2.toFixed());}return aIndex;},HN:function(){return this.
Du()-1;},AF:function(E){var F;C.AC.AF.call(this,E);if(!!this.GL)(F=this.GL,F[2].
call(F[0],E));},Aze:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;
return this.AbG.ApM(this.Da(aIndex));},Azg:function(aIndex){if((aIndex<0)||(aIndex>=
this.Du()))return-1;return this.AbG.ApN(this.Da(aIndex));},AVH:function(H){var F;
if(!!this.GL)this.Q=(F=this.GL,F[1].call(F[0]));else this.Q=0;A.aat([this,this.Cz
,this.CB],0);},BeM:function(E){if(A.z_(this.GL,E))return;if(!!this.GL)A.zn([this
,this.AVH],this.GL,0);this.GL=E;if(!!this.GL)A.za([this,this.AVH],this.GL,0);A.ow([
this,this.AVH],this);},UN:function(E){if(A.z_(this.Ee,E))return;if(!!this.Ee)A.zn([
this,this.Ad6],this.Ee,0);this.Ee=E;if(!!this.Ee)A.za([this,this.Ad6],this.Ee,0);
A.ow([this,this.Ad6],this);},Ad6:function(H){A.ow([this,this.BqB],this);},BrJ:function(
Lm){var Vz=0;switch(Lm){case 0:Vz=2;break;case 1:Vz=3;break;case 2:Vz=4;break;default:
throw new Error(Bj_+Lm.toFixed());}return Vz;},BqB:function(H){var A9m=this.Da(this.
DT(this.Q));if(this.Q!==A9m)this.AF(A9m);A.vv(this,0);},_Init:function(aArg){C.AC.
_Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.call(this.
AnimalIdGenerationMethodToString={I:this},0);A.Device.AbG._Init.call(this.AbG={I:
this},0);this.__proto__=C.AH5;},_Done:function(){this.__proto__=C.AC;this.AnimalIdGenerationMethodToString.
_Done();this.AbG._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.
call(this);this.AnimalIdGenerationMethodToString._ReInit();this.AbG._ReInit();},
_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.GL)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ee)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.ACD={Fa:null,Y0:null,Q:null,EU:null,EM:null,G_:null,UI:null,AX:null,Hn:null,
Jg:null,A3:0,AI:0,Ajb:0,Init:function(aArg){var B;A.za([this,this.A9C],[B=A._GetAutoObject(
A.Device.Device),B.Ak8,B.Al7],0);},Ai:function(Ae){C.DV.Ai.call(this,Ae);if(this.
A3===1){if(this.GW){this.AX.GE(A.iF.CD);this.G_.Dg(A.iF.CD);this.UI.Dg(A.iF.CD);
this.Background.L(A.iF.CP);this.T.L(A.iF.Text);}else{this.AX.GE(A.iF.CP);this.G_.
Dg(A.iF.CP);this.UI.Dg(A.iF.CP);this.Background.L(A.iF.CD);this.T.L(A.iF.Text);}
}else{if(this.GW){this.AX.GE(A.iF.CD);this.G_.Dg(A.iF.CD);this.UI.Dg(A.iF.CD);}else{
this.AX.GE(A.iF.CP);this.G_.Dg(A.iF.CP);this.UI.Dg(A.iF.CP);}this.A8(null);}},JC:
function(H){C.DV.JC.call(this,H);if(!this.A3)this.Gy(this);else this.Gu(this);},
Dz:function(H){var F;if(!this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(
F[0])).C8(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GX(A.jm);(F=this.N,F[1].call(
F[0])).CA=[this,this.Gu];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(
F[0])).Fr(A.jm);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).Db(
null);(F=this.N,F[1].call(F[0])).Cb(A.jm);(F=this.N,F[1].call(F[0])).Cl=null;}break;
default:this.Fa.Aiw((F=this.N,F[1].call(F[0])));}},Gy:function(H){this.Ec(1);},Gu:
function(H){this.Ec(0);},Ec:function(EH){var F;if(!this.A3&&!!this.N)this.Fa.Ahf((
F=this.N,F[1].call(F[0])));this.A3=EH;if(this.A3<0)this.A3=0;else if(this.A3>1)this.
A3=1;switch(this.A3){case 0:this.A8(null);break;case 1:{if(this.AX.A2n())this.A8(
this.AX);else this.A8(this.UI);if(!this.AI)this.AX.UU(2);else this.AX.UU(7);}break;
default:throw new Error(Aqe+this.A3.toFixed());}this.Dz(this);this.Al();},AF:function(
E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.CY],this.Q,0);this.Q=E;if(
!!E)A.za([this,this.CY],E,0);if(!!E)A.ow([this,this.CY],this);},CY:function(H){var
F;if(!!this.Q){this.Bu((F=this.Q,F[1].call(F[0])));A.aat([this,this.SR,this.Bu],
0);}},Bu:function(E){var F;if(this.AI===E)return;this.AI=E;if(!!this.Q)(F=this.Q
,F[2].call(F[0],this.AI));},NG:function(H){this.Axz(2);},Md:function(H){this.Axz(
7);},Axz:function(GJ){var B;var Av9=(A.Core.O.isPrototypeOf(B=this.A6)?B:null);if(
!!Av9){var AwS=(A.Core.O.isPrototypeOf(B=this.Q8(Av9,GJ,0x15))?B:null);if(!!AwS){
this.A8(AwS);return true;}}return false;},Amp:function(H){A.ow([this,this.A9C],this
);},AYf:function(H){var B;var F;if(!this.Hn.GL){this.Jg.Z3(null);return;}switch((
F=this.Hn.GL,F[1].call(F[0]))){case 0:case 1:this.Jg.Z3(null);break;case 3:this.
Jg.Z3([B=A._GetAutoObject(A.Device.Device),B.ANM,B.AUD]);break;case 2:this.Jg.Z3([
B=A._GetAutoObject(A.Device.Device),B.ANN,B.AUE]);break;case 4:this.Jg.Z3([B=A._GetAutoObject(
A.Device.Device),B.As1,B.Avl]);break;case 5:this.Jg.Z3([B=A._GetAutoObject(A.Device.
Device),B.As1,B.Avl]);break;default:throw new Error(Bj$+(F=this.Hn.GL,F[1].call(
F[0])).toFixed());}},A9C:function(H){var F;if(!this.Hn.GL)return;A.ow([this,this.
AYf],this);var AqR=false;switch((F=this.Hn.GL,F[1].call(F[0]))){case 3:case 2:case
5:case 4:{AqR=true;this.AX.A4c(-1);}break;case 0:case 1:{AqR=false;this.AX.A4c(A.
_GetAutoObject(A.Device.Device).Fn);}break;default:throw new Error(Au8+(F=this.Hn.
GL,F[1].call(F[0])).toFixed());}this.AX.An(AqR);this.G_.An(AqR);this.G_.W(AqR);if(((
F=this.Hn.GL,F[1].call(F[0]))!==this.Ajb)||(AqR===false)){var BR=this.AI;this.Bu(
A._GetAutoObject(A.Device.Helper).AY7((F=this.Hn.GL,F[1].call(F[0])),A._GetAutoObject(
A.Device.Helper).V));if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AI));A.aat(this.Q,0);}}if(A._GetAutoObject(A.Device.Helper).Bci((F=this.Hn.GL,F[
1].call(F[0])),A._GetAutoObject(A.Device.Helper).V))this.AX.JM(A._GetAutoObject(
A.Device.Device).Fn);else this.AX.JM(0);this.Ajb=(F=this.Hn.GL,F[1].call(F[0]));
},A3c:function(E){var B;if(this.Y0===E)return;if(!!this.Y0){A.zn([this,this.Amp]
,[B=this.Y0,B.Xu,B.J7],0);A.zn([this,this.Amp],[B=this.Y0,B.AoD,B.O2],0);A.zn([this
,this.Amp],[B=this.Y0,B.Ah7,B.Nc],0);this.Hn.UN(null);}this.Y0=E;if(!!E){A.za([this
,this.Amp],[B=this.Y0,B.Xu,B.J7],0);A.za([this,this.Amp],[B=this.Y0,B.AoD,B.O2],
0);A.za([this,this.Amp],[B=this.Y0,B.Ah7,B.Nc],0);this.Hn.UN([B=this.Y0,B.Xu,B.J7
]);}if(!!E)A.ow([this,this.Amp],this);},SR:function(){return this.AI;},_Init:function(
aArg){C.DV._Init.call(this,aArg);A.Core.B0._Init.call(this.EU={I:this},0);A.Core.
B0._Init.call(this.EM={I:this},0);C.Aoj._Init.call(this.G_={I:this},0);C.Aoj._Init.
call(this.UI={I:this},0);C.AsJ._Init.call(this.AX={I:this},0);C.AH5._Init.call(this.
Hn={I:this},0);C.ArW._Init.call(this.Jg={I:this},0);this.__proto__=C.ACD;var B;this.
G(Ye);this.T.An(false);this.T.R(Ap_);this.T.L(A.iF.Bg);this.EU.Filter=6;this.EM.
Filter=7;this.G_.G(Bka);this.G_.An(false);this.UI.G(Bkb);this.AX.G(Bkc);this.AX.
An(false);this.J(this.G_,0);this.J(this.UI,0);this.J(this.AX,0);this.Fa=A._NewObject(
C.Aca,0);this.EU.B1=[this,this.NG];this.EM.B1=[this,this.Md];this.G_.Dh(this.Jg);
this.G_.AF([B=this.Jg,B.Cz,B.CB]);this.UI.Dh(this.Hn);this.UI.AF([B=this.Hn,B.Cz
,B.CB]);this.AX.AF([this,this.SR,this.Bu]);this.Hn.BeM([B=A._GetAutoObject(A.Device.
Device),B.Ak8,B.Al7]);this.Init(aArg);},_Done:function(){this.__proto__=C.DV;this.
EU._Done();this.EM._Done();this.G_._Done();this.UI._Done();this.AX._Done();this.
Hn._Done();this.Jg._Done();C.DV._Done.call(this);},_ReInit:function(){C.DV._ReInit.
call(this);this.EU._ReInit();this.EM._ReInit();this.G_._ReInit();this.UI._ReInit(
);this.AX._ReInit();this.Hn._ReInit();this.Jg._ReInit();},_Mark:function(D){var B;
C.DV._Mark.call(this,D);if((B=this.Fa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Y0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.UI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Hn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jg)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDGeneration"};C.Gi={Awo:null
,EU:null,EM:null,Hp:null,Gf:null,El:null,Q2:0,AIG:0,Ayr:0,SV:0,A5k:-1,AIF:false,
Init:function(aArg){A.ow([this,this.AU6],this);},Ai:function(Ae){A.Core.O.Ai.call(
this,Ae);this.El.W(this.AIF);this.El.G(A.vS(this.Acc(this.Ayr).M,this.Acc((this.
Ayr+this.AIG)-1).M));},NG:function(H){var DF=(A.Core.B0.isPrototypeOf(H)?H:null);
var AVY=this.A_Z(2);if(AVY===false)DF.PE=true;},Md:function(H){var DF=(A.Core.B0.
isPrototypeOf(H)?H:null);var AVY=this.A_Z(7);if(AVY===false)DF.PE=true;},A_Z:function(
GJ){var B;var Ea=(C.DM.isPrototypeOf(B=this.A6)?B:null);Ea=this.A8u(Ea,GJ,true);
if(!!Ea){this.A8(Ea);this.Awo=(C.DM.isPrototypeOf(B=this.A6)?B:null);return true;
}return false;},Abf:function(H){A.aa8("%s",AiV);},HA:function(s){this.Abf(s);},GE:
function(E){if(this.Q2===E)return;this.Q2=E;this.Gf.Dg(E);this.Hp.Dg(E);},UU:function(
GJ){var B;switch(GJ){case 2:this.A8(this.Hp);break;case 7:this.A8(this.Gf);break;
default:A.aa8("%s%e",Bkd,GJ);}this.Awo=(C.DM.isPrototypeOf(B=this.A6)?B:null);},
Lv:function(H){},AU6:function(s){this.Lv(s);},AA3:function(E){if(this.AIF===E)return;
this.AIF=E;this.Al();},A3i:function(E){if(this.AIG===E)return;this.AIG=E;this.Al(
);},A3h:function(E){if(this.Ayr===E)return;this.Ayr=E;this.Al();},Acc:function(KR
){var Cf=null;switch(KR){case-1:case 0:Cf=this.Gf;break;case 1:Cf=this.Hp;break;
default:A.aa8("%s",Al6);}return Cf;},JM:function(E){if(this.SV===E)return;this.SV=
E;this.Aj9();},Aj9:function(){A.aa8("%s",AiV);},A8u:function(AaO,GJ,Lq){var B;if(
!!AaO){var Bb;if(Lq)Bb=0x11;else Bb=0x0;switch(GJ){case 2:AaO=(C.DM.isPrototypeOf(
B=this.An0(AaO,Bb))?B:null);break;case 7:AaO=(C.DM.isPrototypeOf(B=this.Zp(AaO,Bb
))?B:null);break;default:throw new Error(Bke);}}return AaO;},A4c:function(E){if(
this.A5k===E)return;this.A5k=E;var Ea=this.Gf;var AWj;while(!!Ea){AWj=!!E;Ea.An(
AWj);Ea.W(AWj);if(Ea===this.Awo)this.A8(Ea);Ea=this.A8u(Ea,2,false);if(E>0)E=E-1;
}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.B0._Init.call(this.
EU={I:this},0);A.Core.B0._Init.call(this.EM={I:this},0);C.DM._Init.call(this.Hp={
I:this},0);C.DM._Init.call(this.Gf={I:this},0);A.abh.CR._Init.call(this.El={I:this
},0);this.__proto__=C.Gi;this.G(Bkf);this.EU.Filter=6;this.EM.Filter=7;this.Q2=A.
iF.CD;this.Hp.G(EG);this.Gf.G(A5G);this.El.G(Bkg);this.El.N5(2);this.El.L(A.iF.E1
);this.J(this.Hp,0);this.J(this.Gf,0);this.J(this.El,0);this.EU.B1=[this,this.NG
];this.EU.D_=[this,this.NG];this.EM.B1=[this,this.Md];this.EM.D_=[this,this.Md];
this.Awo=this.Gf;this.Hp.Ds=[this,this.HA];this.Gf.Ds=[this,this.HA];this.Init(aArg
);},_Done:function(){this.__proto__=A.Core.O;this.EU._Done();this.EM._Done();this.
Hp._Done();this.Gf._Done();this.El._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.EU._ReInit();this.EM._ReInit();this.Hp._ReInit(
);this.Gf._ReInit();this.El._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.Awo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Hp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.El)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber"
};C.AQn={XT:null,Aav:null,AQm:0,CE:function(H){this.Aav.An(true);},Fc:function(H
){this.Aav.An(false);},BgB:function(E){if(this.AQm===E)return;this.AQm=E;this.XT.
R((((A.z2(A.abg.A5g)+AaH)+E.toFixed())+Bkh)+A.z2(A.abg.Kx));},Bey:function(){return this.
AQm;},Bto:function(H){A._GetAutoObject(C.A1).BX(3);A._GetAutoObject(A.Device.Device
).Alc(1);},_Init:function(aArg){C.Wc._Init.call(this,aArg);C.CH._Init.call(this.
XT={I:this},0);A.abm.FC._Init.call(this.Aav={I:this},0);this.__proto__=C.AQn;this.
Acx.G(Bki);this.S4.R(A.jm);this.XT.G(Bkj);this.XT.R(A.z2(A.abg.A5g)+Bkk);this.XT.
L(A.iF.Text);this.Aav.IF(1);this.Aav.FI(5000);this.Aav.BW=100;this.J(this.XT,0);
this.XT.Y(A.zW(A.eV.Au));this.XT.Bz(A.zW(A.eV.AB));this.XT.C7(A.zW(A.eV.Cq));this.
Aav.Rm=[this,this.Bto];this.Aav.Q=[this,this.Bey,this.BgB];},_Done:function(){this.
__proto__=C.Wc;this.XT._Done();this.Aav._Done();C.Wc._Done.call(this);},_ReInit:
function(){C.Wc._ReInit.call(this);this.XT._ReInit();this.Aav._ReInit();},_Mark:
function(D){var B;C.Wc._Mark.call(this,D);if((B=this.XT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aav)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::UpdateScreen"
};C.ANk={Km:null,LS:null,A9c:false,Init:function(aArg){this.A8(this.GU);},EY:function(
H){var B;if(!!this.Km)this.Km.EY(this);C.UL.EY.call(this,H);},Ad9:function(H){var
B;if(!!this.Km)this.Km.Ad9(this);C.UL.Ad9.call(this,H);},CE:function(H){var B;if(
!this.A9c){this.A9c=true;A.ow([this,this.AXP],this);}else if(!this.Km){this.Km=A.
_NewObject(C.ANm,0);this.Km.A3s([this,this.Axp]);this.Lv(this);this.Km.Lv(this);
if(!A._GetAutoObject(A.Device.Helper).V.NaisIdMother)this.EY(this);else C.UL.CE.
call(this,H);}else C.UL.CE.call(this,H);},Anq:function(H){var B;if(!!this.Km)this.
Km.Anq(this);},Axp:function(H){var B;var F;this.Lv(this);this.Km.Lv(this);A.ow([
this,this.Vs],this);var A8S=this.K9;this.Ate(A._GetAutoObject(A.Device.Helper).Ahw(
A._GetAutoObject(A.Device.Helper).V.AnimalType));A._GetAutoObject(A.Device.Helper
).AQl(A._GetAutoObject(A.Device.Helper).V,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,A8S);if(A8S)A._GetAutoObject(A.Device.Helper).V.Nc(A._GetAutoObject(A.Device.Helper
).V.NaisId);A._GetAutoObject(A.Device.Helper).V.XE(A._GetAutoObject(A.Device.Helper
).AY7((F=this.Dl.Hn.GL,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).V));this.
Pw(this.GU);},AXP:function(H){A._GetAutoObject(C.A1).BX(90);},_Init:function(aArg
){C.UL._Init.call(this,aArg);C.AfG._Init.call(this.LS={I:this},0);this.__proto__=
C.ANk;var B;this.LS.G(AfV);this.LS.Aj(true);this.LS.U(A.z2(A.abg.AZW));this.J(this.
LS,-8);this.Lg(this.M8,-1);this.LS.Hb([this,this.Es,this.HU]);this.LS.AF([B=A._GetAutoObject(
A.Device.Helper).V,B.ANV,B.Alj]);this.Init(aArg);},_Done:function(){this.__proto__=
C.UL;this.LS._Done();C.UL._Done.call(this);},_ReInit:function(){C.UL._ReInit.call(
this);this.LS._ReInit();},_Mark:function(D){var B;C.UL._Mark.call(this,D);if((B=
this.Km)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LS)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalCalvingDataScreen"};C.Az6={AeJ:null,AeK:null
,MU:null,MT:null,EC:null,FB:null,D7:null,D6:null,D5:null,C0:null,GE:function(E){
if(this.Q2===E)return;C.KA.GE.call(this,E);this.C0.Dg(E);this.D5.Dg(E);this.D6.Dg(
E);this.D7.Dg(E);this.FB.Dg(E);this.EC.Dg(E);this.MT.Dg(E);this.MU.Dg(E);this.AeK.
Dg(E);this.AeJ.Dg(E);},Acc:function(KR){var Cf=null;switch(KR){case-1:case 0:Cf=
this.Gf;break;case 1:Cf=this.C0;break;case 2:Cf=this.D5;break;case 3:Cf=this.D6;
break;case 4:Cf=this.D7;break;case 5:Cf=this.FB;break;case 6:Cf=this.EC;break;case
7:Cf=this.MT;break;case 8:Cf=this.MU;break;case 9:Cf=this.AeK;break;case 10:Cf=this.
AeJ;break;case 11:Cf=this.Hp;break;default:A.aa8("%s",Al6);}return Cf;},_Init:function(
aArg){C.KA._Init.call(this,aArg);C.DM._Init.call(this.AeJ={I:this},0);C.DM._Init.
call(this.AeK={I:this},0);C.DM._Init.call(this.MU={I:this},0);C.DM._Init.call(this.
MT={I:this},0);C.DM._Init.call(this.EC={I:this},0);C.DM._Init.call(this.FB={I:this
},0);C.DM._Init.call(this.D7={I:this},0);C.DM._Init.call(this.D6={I:this},0);C.DM.
_Init.call(this.D5={I:this},0);C.DM._Init.call(this.C0={I:this},0);this.__proto__=
C.Az6;this.G(Bkl);this.Hp.G(AEE);this.AeJ.G(Ave);this.AeK.G(AUn);this.MU.G(AUo);
this.MT.G(AUp);this.EC.G(AUq);this.FB.G(AUr);this.D7.G(AUs);this.D6.G(A5H);this.
D5.G(AUt);this.C0.G(Bkm);this.Gf.G(Bkn);this.J(this.AeJ,-2);this.J(this.AeK,-2);
this.J(this.MU,-2);this.J(this.MT,-2);this.J(this.EC,-2);this.J(this.FB,-2);this.
J(this.D7,-2);this.J(this.D6,-2);this.J(this.D5,-2);this.J(this.C0,-2);this.AeJ.
Ds=[this,this.HA];this.AeK.Ds=[this,this.HA];this.MU.Ds=[this,this.HA];this.MT.Ds=[
this,this.HA];this.EC.Ds=[this,this.HA];this.FB.Ds=[this,this.HA];this.D7.Ds=[this
,this.HA];this.D6.Ds=[this,this.HA];this.D5.Ds=[this,this.HA];this.C0.Ds=[this,this.
HA];},_Done:function(){this.__proto__=C.KA;this.AeJ._Done();this.AeK._Done();this.
MU._Done();this.MT._Done();this.EC._Done();this.FB._Done();this.D7._Done();this.
D6._Done();this.D5._Done();this.C0._Done();C.KA._Done.call(this);},_ReInit:function(
){C.KA._ReInit.call(this);this.AeJ._ReInit();this.AeK._ReInit();this.MU._ReInit(
);this.MT._ReInit();this.EC._ReInit();this.FB._ReInit();this.D7._ReInit();this.D6.
_ReInit();this.D5._ReInit();this.C0._ReInit();},_Mark:function(D){var B;C.KA._Mark.
call(this,D);if((B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.MU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
MT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber12"
};C.ON={Q:null,AI:0,Ai:function(Ae){C.Gi.Ai.call(this,Ae);this.Aj9();},Abf:function(
H){var B;var F;var Kj=A.jm;var Cf=this.Hp;while(!!Cf){if(Cf.FA>0)Kj=Kj+Cf.FA.toFixed(
);else Kj=Kj+String.fromCharCode(0x30);Cf=(C.DM.isPrototypeOf(B=this.Zp(Cf,0x11)
)?B:null);}var BR=this.AI;this.Bu(A.vQ(Kj,-1,10));if(this.AI!==BR){if(!!this.Q)(
F=this.Q,F[2].call(F[0],this.AI));A.aat(this.Q,0);}},Lv:function(H){},Aj9:function(
){var B;var F;if(!!this.Q){var Ea=this.Gf;var Abl=this.SV;var A2=(F=this.Q,F[1].
call(F[0]));while(!!Ea){if(A2>0){Ea.Mu(A2%10);A2=(A2/10)|0;}else if(Abl>0)Ea.Mu(
0);else Ea.Mu(-1);Ea=(C.DM.isPrototypeOf(B=this.An0(Ea,0x11))?B:null);Abl=Abl-1;
}}},CY:function(H){var F;if(!!this.Q)this.Bu((F=this.Q,F[1].call(F[0])));},AF:function(
E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.CY],this.Q,0);this.Q=E;if(
!!E)A.za([this,this.CY],E,0);if(!!E)A.ow([this,this.CY],this);},Bu:function(E){if(
this.AI===E)return;this.AI=E;this.Al();},_Init:function(aArg){C.Gi._Init.call(this
,aArg);this.__proto__=C.ON;},_Mark:function(D){var B;C.Gi._Mark.call(this,D);if((
B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_32"
};C.KA={AI:0,Q:null,Ai:function(Ae){C.Gi.Ai.call(this,Ae);this.Aj9();},Abf:function(
H){var B;var F;var Kj=A.jm;var Cf=this.Hp;while(!!Cf){if(Cf.FA>0)Kj=Kj+Cf.FA.toFixed(
);else Kj=Kj+String.fromCharCode(0x30);Cf=(C.DM.isPrototypeOf(B=this.Zp(Cf,0x11)
)?B:null);}var BR=this.AI;this.Bu(A.aa2(Kj,0,10));if(this.AI!==BR){if(!!this.Q)(
F=this.Q,F[2].call(F[0],this.AI));A.aat(this.Q,0);}},Lv:function(H){},Aj9:function(
){var B;var F;if(!!this.Q){var Ea=this.Gf;var Abl=this.SV;var A2=(F=this.Q,F[1].
call(F[0]));while(!!Ea){if(A2>0){Ea.Mu((A2%10)|0);A2=Math.trunc(A2/10);}else if(
Abl>0)Ea.Mu(0);else Ea.Mu(-1);Ea=(C.DM.isPrototypeOf(B=this.An0(Ea,0x11))?B:null
);Abl=Abl-1;}}},CY:function(H){var F;if(!!this.Q)this.Bu((F=this.Q,F[1].call(F[0
])));},AF:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.CY],this.
Q,0);this.Q=E;if(!!E)A.za([this,this.CY],E,0);if(!!E)A.ow([this,this.CY],this);}
,Bu:function(E){if(this.AI===E)return;this.AI=E;this.Al();},_Init:function(aArg){
C.Gi._Init.call(this,aArg);this.__proto__=C.KA;},_Mark:function(D){var B;C.Gi._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::InputNumber2_64"};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:
null,Du:function(){return 2;},Da:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},GP:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jm;return this.
EartagNrAssignmentModeToString.Ca(aIndex);},DT:function(A2){return A2;},HN:function(
){return 1;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString.
_Init.call(this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AsJ={D7:null,D6:null,D5:null,C0:null,GE:function(E){if(this.Q2===E)return;C.
ON.GE.call(this,E);this.C0.Dg(E);this.D5.Dg(E);this.D6.Dg(E);this.D7.Dg(E);},Acc:
function(KR){var Cf=null;switch(KR){case-1:case 0:Cf=this.Gf;break;case 1:Cf=this.
C0;break;case 2:Cf=this.D5;break;case 3:Cf=this.D6;break;case 4:Cf=this.D7;break;
case 5:Cf=this.Hp;break;default:A.aa8("%s",Al6);}return Cf;},_Init:function(aArg
){C.ON._Init.call(this,aArg);C.DM._Init.call(this.D7={I:this},0);C.DM._Init.call(
this.D6={I:this},0);C.DM._Init.call(this.D5={I:this},0);C.DM._Init.call(this.C0={
I:this},0);this.__proto__=C.AsJ;this.G(ADP);this.Hp.G(ADQ);this.D7.G(ADR);this.D6.
G(ADS);this.D5.G(ADT);this.C0.G(ADU);this.Gf.G(ADV);this.El.G(A5I);this.J(this.D7
,-2);this.J(this.D6,-2);this.J(this.D5,-2);this.J(this.C0,-2);this.D7.Ds=[this,this.
HA];this.D6.Ds=[this,this.HA];this.D5.Ds=[this,this.HA];this.C0.Ds=[this,this.HA
];},_Done:function(){this.__proto__=C.ON;this.D7._Done();this.D6._Done();this.D5.
_Done();this.C0._Done();C.ON._Done.call(this);},_ReInit:function(){C.ON._ReInit.
call(this);this.D7._ReInit();this.D6._ReInit();this.D5._ReInit();this.C0._ReInit(
);},_Mark:function(D){var B;C.ON._Mark.call(this,D);if((B=this.D7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.APC={AttributeSet:null,Ai:function(Ae){var B;C.B_.
Ai.call(this,Ae);var FT=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);var Gv=((Ae&
0x40)===0x40);var Fu=this.Bi.Bw;var Gb=A.iF.CD;var G1=A.iF.Text;if(this.GW){Gb=A.
iF.Bg;G1=A.iF.Text;}if(!FT){this.Background.L(A.iF.CP);this.T.L(A.iF.CD);this.AttributeSet.
Afm(A.iF.CD);}else if(Fu){this.Background.L(A.iF.A6);this.T.L(A.iF.Bg);this.AttributeSet.
Afm(A.iF.Bg);}else if(Gv){this.Background.L(A.iF.A6);this.T.L(A.iF.Bg);this.AttributeSet.
Afm(A.iF.Bg);}else if(Fv){this.Background.L(A.iF.AkN);this.T.L(A.iF.Bg);this.AttributeSet.
Afm(A.iF.Bg);}else{this.Background.L(Gb);this.T.L(G1);this.AttributeSet.Afm(G1);
}this.Lq=FT;this.Ko=Fv;this.QB=Fu;this.Awn=Gv;},Init:function(aArg){this.AttributeSet.
BhJ(0);this.AttributeSet.BhK(1);this.AttributeSet.BhL(4);},GD:function(H){var B;
var Fw=this.De.ID;var Cj=(A.abh.ArK.isPrototypeOf(B=this.De.B4)?B:null);Cj.A3e(this.
AttributeSet);Cj.A0(0x12);if(!Cj)return;if(!!this.AC)Cj.R(this.BrA(this.AC.GP(Fw
)));else Cj.R(JU);Cj.G(A.aaN(Cj.M,[this.De.Us,(B=this.De.M)[3]-B[1]]));},BrA:function(
Bp1){var Aw$=Bp1;Aw$=A._GetAutoObject(A.Device.Helper).Nh(Aw$,Bko,Bkp);Aw$=A._GetAutoObject(
A.Device.Helper).Nh(Aw$,Bkq,Bkr);return Bks+Aw$;},_Init:function(aArg){C.B_._Init.
call(this,aArg);A.Graphics.AttrSet._Init.call(this.AttributeSet={I:this},0);this.
__proto__=C.APC;this.De.G(Bkt);this.De.I0(2);this.De.Nb(A.abh.ArK);this.AttributeSet.
Afm(this.T.AV);this.AttributeSet.BfC(A.zW(A.eV.AKc));this.AttributeSet.BfB(A.zW(
A.eV.AB));this.AttributeSet.AoU(A.zW(A.eV.AB));this.Init(aArg);},_Done:function(
){this.__proto__=C.B_;this.AttributeSet._Done();C.B_._Done.call(this);},_ReInit:
function(){C.B_._ReInit.call(this);this.AttributeSet._ReInit();},_Mark:function(
D){var B;C.B_._Mark.call(this,D);if((B=this.AttributeSet)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSpecialChars"};C.NewAnimalsSetTransponderScreen={
_Init:function(aArg){C.Apz._Init.call(this,aArg);this.__proto__=C.NewAnimalsSetTransponderScreen;
this.Dt(C.Azx);},_className:"Application::NewAnimalsSetTransponderScreen"};C.ReasonOfLeaving={
ReasonOfLeavingToString:null,Du:function(){return 14;},Da:function(aIndex){if((aIndex<
0)||(aIndex>=14))return-1;return aIndex;},GP:function(aIndex){if((aIndex<0)||(aIndex>=
14))return A.jm;return this.ReasonOfLeavingToString.Ca(aIndex);},DT:function(A2){
return A2;},HN:function(){return 13;},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.N7={Fa:null,EnumToCodeset:
null,IX:null,A3:0,Number:0,Ai:function(Ae){C.B_.Ai.call(this,Ae);if(this.A3===1){
if(this.GW){this.Background.L(A.iF.CP);this.T.L(A.iF.Text);}else{this.Background.
L(A.iF.CD);this.T.L(A.iF.Text);}}},Bu:function(E){C.B_.Bu.call(this,E);var Bsp=this.
EnumToCodeset.Akp(this.Number);var A9l=this.AC.Da(this.AI);if(Bsp!==A9l){this.ABA(
this.EnumToCodeset.Ab4(A9l));A.aat([this,this.ANX,this.ABA],0);}},Dz:function(H){
var F;if(!this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).C8(A.
zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GX(A.jm);(F=this.N,F[1].call(F[0])).CA=[
this,this.Gu];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).Fr(
A.jm);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).Db(null);(F=
this.N,F[1].call(F[0])).Cb(A.jm);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:
this.Fa.Aiw((F=this.N,F[1].call(F[0])));}},Gy:function(H){this.Ec(1);},Gu:function(
H){this.Ec(0);},Ec:function(EH){var F;if(!this.A3)this.Fa.Ahf((F=this.N,F[1].call(
F[0])));this.A3=EH;if((this.A3<0)||(this.A3>1))this.A3=0;this.Dz(this);if(!this.
A3)this.A8(null);else this.AWw();this.Al();},ABA:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.An6()>E)E=this.EnumToCodeset.
An6();if(this.EnumToCodeset.HN()<E)E=this.EnumToCodeset.HN();}this.Number=E;var BR=
this.AI;if(!!this.EnumToCodeset){var Brp=this.EnumToCodeset.Akp(E);this.Bu(this.
AC.DT(Brp));if(this.AI!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.Da(this.AI)));A.aat(this.Q,0);}}},ABd:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},Tx:function(H){this.Ec(this.A3+1);},AWw:function(){A.aa8(
"%s",Bku);},ANX:function(){return this.Number;},_Init:function(aArg){C.B_._Init.
call(this,aArg);A.Core.B0._Init.call(this.IX={I:this},0);this.__proto__=C.N7;this.
IX.Filter=1;this.Fa=A._NewObject(C.Aca,0);this.IX.B1=[this,this.Tx];},_Done:function(
){this.__proto__=C.B_;this.IX._Done();C.B_._Done.call(this);},_ReInit:function(){
C.B_._ReInit.call(this);this.IX._ReInit();},_Mark:function(D){var B;C.B_._Mark.call(
this,D);if((B=this.Fa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IX)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AcG={Text:null,Ai:function(
Ae){C.D1.Ai.call(this,Ae);this.Text.L(this.Azc);},Bu:function(E){if(this.AI===E)
return;this.AI=E;this.Text.R(A._GetAutoObject(A.Device.Converter).U_(this.AI));this.
Al();},YK:function(H){A.ow([this,this.Ad5],this);},YJ:function(H){A.ow([this,this.
Ad5],this);},AjK:function(H){A.ow([this,this.Ad5],this);},Ad5:function(H){if((!this.
HM||!this.Fn)||!this.Fb)return;},_Init:function(aArg){C.D1._Init.call(this,aArg);
A.abh.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AcG;this.Text.AW(0x3F
);this.Text.G(Ap4);this.Text.R(A.z2(A.abg.Unknown));this.J(this.Text,0);this.Text.
Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.D1;this.Text._Done();C.D1._Done.
call(this);},_ReInit:function(){C.D1._ReInit.call(this);this.Text._ReInit();},_Mark:
function(D){var B;C.D1._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NaisIDReadonly"};C.ANd={Gd:0,CZ:null,AX:null,EL:null
,Jj:null,CountryToString:null,Kv:0,Lr:false,Init:function(aArg){A.za([this,this.
Tn],[this,this.Rn,this.KE],0);},Ai:function(Ae){C.D1.Ai.call(this,Ae);this.AX.GE(
this.K3);this.EL.Dg(this.K3);this.Jj.Dg(this.K3);},Dz:function(H){var F;if(!this.
N)return;switch(this.A3){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C8(A.zW(
A.abi.ET));(F=this.N,F[1].call(F[0])).GX(A.jm);(F=this.N,F[1].call(F[0])).CA=[this
,this.Gu];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).Fr(A.jm
);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).Db(null);(F=this.
N,F[1].call(F[0])).Cb(this.CountryToString.Ca(this.Kv));(F=this.N,F[1].call(F[0]
)).Cl=null;}break;default:{(F=this.N,F[1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.
N,F[1].call(F[0])).GX(A.jm);(F=this.N,F[1].call(F[0])).CA=[this,this.Gu];(F=this.
N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).Db(null);(F=this.N,F[1].call(F[0])).Cb(
A.jm);(F=this.N,F[1].call(F[0])).Cl=null;}}},Ec:function(EH){var YI=this.A3;this.
A3=EH;if(this.A3<0)this.A3=0;else if(this.A3>this.Qz)this.A3=this.Qz;switch(this.
A3){case 0:{this.A8(null);if(!this.Gd)this.KE(0);}break;case 1:this.A8(this.Jj);
break;case 2:this.A8(this.EL);break;case 3:{this.A8(this.AX);if(!this.Gd||(YI>0)
)this.AX.UU(2);else this.AX.UU(7);}break;default:throw new Error(Aqe+this.A3.toFixed(
));}C.D1.Ec.call(this,EH);},AmO:function(H){this.Jj.UN(this.Ee);},YK:function(H){
var F;this.AX.A3h((F=this.Fb,F[1].call(F[0])));},YJ:function(H){var F;this.AX.A3i((
F=this.Fn,F[1].call(F[0])));},Bu:function(E){if(this.AI===E)return;this.AI=E;this.
Lr=true;this.Ro(A._GetAutoObject(A.Device.Helper).T$(E,0,12));this.KE(A._GetAutoObject(
A.Device.Converter).AfQ(E));this.Lr=false;if(!!E)this.AX.JM(12);else this.AX.JM(
0);this.Al();},AjK:function(H){A.ow([this,this.Ad5],this);},Gy:function(H){var F;
if(!this.AI){var BR=this.AI;this.Bu(A._GetAutoObject(A.Device.Helper).Azm());if(
this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.aat(this.Q,0);}}this.
Ec(3);},Ahu:function(){return this.Gd;},Ahy:function(){return 999999999999;},KE:
function(E){if(this.Kv===E)return;this.Kv=E;if(this.Lr===false)A.ow([this,this.TJ
],this);A.aat([this,this.Rn,this.KE],0);},Ro:function(E){if(this.Gd===E)return;this.
Gd=E;if(this.Lr===false)A.ow([this,this.TJ],this);A.aat([this,this.ZW,this.Ro],0
);},TJ:function(H){var F;var aString=A.aaq(A._GetAutoObject(A.Device.Converter).
ArO(this.Kv),3,10)+A.aar(this.Gd,12,10);var BR=this.AI;this.Bu(A.aa2(aString,0,10
));if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.aat(this.Q,
0);}},Ad5:function(H){var F;if((!this.HM||!this.Fn)||!this.Fb)return;if(!(F=this.
HM,F[1].call(F[0])))this.AX.AA3(true);else this.AX.AA3(false);},Rn:function(){return this.
Kv;},ZW:function(){return this.Gd;},_Init:function(aArg){C.D1._Init.call(this,aArg
);C.CZ._Init.call(this.CZ={I:this},0);C.Az6._Init.call(this.AX={I:this},0);C.ApL.
_Init.call(this.EL={I:this},0);C.Jj._Init.call(this.Jj={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.ANd;var B;this.Qz=3;
this.AX.G(Bkv);this.EL.G(A5J);this.Jj.G(A5K);this.J(this.AX,0);this.J(this.EL,0);
this.J(this.Jj,0);this.CZ.AA9([this,this.Rn,this.KE]);this.AX.AF([this,this.ZW,this.
Ro]);this.EL.Dh(this.CZ);this.EL.AF([B=this.CZ,B.Cz,B.CB]);this.Jj.A3u([B=A._GetAutoObject(
A.Device.Device),B.AAL,B.AEL]);this.Init(aArg);},_Done:function(){this.__proto__=
C.D1;this.CZ._Done();this.AX._Done();this.EL._Done();this.Jj._Done();this.CountryToString.
_Done();C.D1._Done.call(this);},_ReInit:function(){C.D1._ReInit.call(this);this.
CZ._ReInit();this.AX._ReInit();this.EL._ReInit();this.Jj._ReInit();this.CountryToString.
_ReInit();},_Mark:function(D){var B;C.D1._Mark.call(this,D);if((B=this.CZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"
};C.ANc={Gd:0,CZ:null,AX:null,WT:null,JJ:null,EL:null,Jj:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,OJ:0,Kv:0,Lr:false,Init:function(aArg){A.
za([this,this.Tn],[this,this.O0,this.DO],0);A.za([this,this.Tn],[this,this.Rn,this.
KE],0);A.za([this,this.Tn],[this,this.Ak9,this.Afo],0);},Ai:function(Ae){C.D1.Ai.
call(this,Ae);this.AX.GE(this.K3);this.WT.GE(this.K3);this.JJ.GE(this.K3);this.EL.
Dg(this.K3);this.Jj.Dg(this.K3);},Dz:function(H){var F;if(!this.N)return;switch(
this.A3){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.
N,F[1].call(F[0])).GX(A.jm);(F=this.N,F[1].call(F[0])).CA=[this,this.Gu];(F=this.
N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).Db(null);(F=this.N,F[1].call(F[0])).Cb(
this.CountryToString.Ca(this.Kv));(F=this.N,F[1].call(F[0])).Cl=null;}break;case
3:{(F=this.N,F[1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GX(A.
jm);(F=this.N,F[1].call(F[0])).CA=[this,this.Gu];(F=this.N,F[1].call(F[0])).Cm(null
);(F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.
N,F[1].call(F[0])).Db(null);switch(this.AnimalType){case 0:(F=this.N,F[1].call(F[
0])).Cb(((A.z2(A.abg.ACO)+A.z2(A.abg.Colon))+AaH)+A.z2(A.abg.Bam));break;case 1:(
F=this.N,F[1].call(F[0])).Cb(((A.z2(A.abg.ACO)+A.z2(A.abg.Colon))+AaH)+A.z2(A.abg.
BhQ));break;case 2:(F=this.N,F[1].call(F[0])).Cb(((A.z2(A.abg.ACO)+A.z2(A.abg.Colon
))+AaH)+A.z2(A.abg.Bbf));break;default:(F=this.N,F[1].call(F[0])).Cb(((A.z2(A.abg.
ACO)+A.z2(A.abg.Colon))+AaH)+A.z2(A.abg.Unknown));}(F=this.N,F[1].call(F[0])).Cl=
null;}break;case 4:{(F=this.N,F[1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.N,F[1].
call(F[0])).GX(A.jm);(F=this.N,F[1].call(F[0])).CA=[this,this.Gu];(F=this.N,F[1].
call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(F[0
])).Cg=null;(F=this.N,F[1].call(F[0])).Db(null);(F=this.N,F[1].call(F[0])).Cb((A.
z2(A.abg.Gn)+AuR)+this.GermanStateToString.KL(A._GetAutoObject(A.Device.Converter
).AKl(this.OJ)));(F=this.N,F[1].call(F[0])).Cl=null;}break;default:{(F=this.N,F[
1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GX(A.jm);(F=this.N,
F[1].call(F[0])).CA=[this,this.Gu];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N
,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(
F[0])).Db(null);(F=this.N,F[1].call(F[0])).Cb(A.jm);(F=this.N,F[1].call(F[0])).Cl=
null;}}},Ec:function(EH){var YI=this.A3;if(EH<0)EH=0;else if(EH>this.Qz)EH=this.
Qz;switch(EH){case 0:{this.A8(null);if((!this.Gd&&!this.AnimalType)&&!this.OJ)this.
KE(0);}break;case 1:this.A8(this.Jj);break;case 2:this.A8(this.EL);break;case 3:
if(!YI)A.ow([this,this.Btz],this);else this.A8(this.WT);break;case 4:this.A8(this.
JJ);break;case 5:if(((YI===4)&&!this.OJ)&&!this.Gd)return;else{this.A8(this.AX);
if(!this.Gd||(YI>0))this.AX.UU(2);else this.AX.UU(7);}break;default:throw new Error(
Aqe+EH.toFixed());}this.A3=EH;C.D1.Ec.call(this,EH);},Bu:function(E){if(this.AI===
E)return;this.AI=E;this.Lr=true;this.Ro(A._GetAutoObject(A.Device.Helper).T$(E,0
,8));this.Afo(A._GetAutoObject(A.Device.Helper).T$(E,8,2)|0);this.DO(A._GetAutoObject(
A.Device.Helper).T$(E,10,2)|0);this.KE(A._GetAutoObject(A.Device.Converter).AfQ(
E));this.Lr=false;if(!!this.AI){this.WT.JM(2);this.JJ.JM(2);this.AX.JM(8);}else{
this.WT.JM(0);this.JJ.JM(0);this.AX.JM(0);}this.Al();},AmO:function(H){this.Jj.UN(
this.Ee);},YK:function(H){var F;this.AX.A3h((F=this.Fb,F[1].call(F[0])));},YJ:function(
H){var F;this.AX.A3i((F=this.Fn,F[1].call(F[0])));},AjK:function(H){A.ow([this,this.
Ad5],this);},Gy:function(H){var F;if(!this.AI){var BR=this.AI;this.Bu(A._GetAutoObject(
A.Device.Helper).Azm());if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AI));A.aat(this.Q,0);}this.Ec(3);}else this.Ec(this.Qz);},Ahu:function(){return this.
Gd;},Ahy:function(){return 99999999;},KE:function(E){if(this.Kv===E)return;this.
Kv=E;if(this.Lr===false)A.ow([this,this.TJ],this);A.aat([this,this.Rn,this.KE],0
);},Ro:function(E){if(this.Gd===E)return;this.Gd=E;if(this.Lr===false)A.ow([this
,this.TJ],this);A.aat([this,this.ZW,this.Ro],0);},TJ:function(H){var F;var aString=((
A.aaq(A._GetAutoObject(A.Device.Converter).ArO(this.Kv),3,10)+A.aaq(this.AnimalType
,2,10))+A.aaq(this.OJ,2,10))+A.aar(this.Gd,8,10);var BR=this.AI;this.Bu(A.aa2(aString
,0,10));if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.aat(this.
Q,0);}},Ad5:function(H){var F;if((!this.HM||!this.Fn)||!this.Fb)return;if(!(F=this.
HM,F[1].call(F[0])))this.AX.AA3(true);else this.AX.AA3(false);},DO:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.Lr===false)A.ow([this,this.
TJ],this);A.aat([this,this.O0,this.DO],0);},Afo:function(E){if(this.OJ===E)return;
this.OJ=E;if(this.Lr===false)A.ow([this,this.TJ],this);A.aat([this,this.Ak9,this.
Afo],0);},Btz:function(H){var F;if(!!this.Je){var HF=(F=this.Je,F[1].call(F[0]));
var AVI=0;switch(HF){case 0:case 1:AVI=0;break;case 2:AVI=1;break;default:A.aa8(
"%s%e",Ap5,HF);}this.DO(AVI);}if(!this.OJ)this.Ec(4);else this.Ec(5);},Rn:function(
){return this.Kv;},ZW:function(){return this.Gd;},O0:function(){return this.AnimalType;
},Ak9:function(){return this.OJ;},_Init:function(aArg){C.D1._Init.call(this,aArg
);C.CZ._Init.call(this.CZ={I:this},0);C.AMC._Init.call(this.AX={I:this},0);C.AsI.
_Init.call(this.WT={I:this},0);C.AsI._Init.call(this.JJ={I:this},0);C.ApL._Init.
call(this.EL={I:this},0);C.Jj._Init.call(this.Jj={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ANc;var B;this.Qz=5;this.AX.G(
Bkw);this.WT.G(Bkx);this.WT.FP(2);this.JJ.G(Bky);this.JJ.FP(16);this.EL.G(A5J);this.
Jj.G(A5K);this.J(this.AX,0);this.J(this.WT,0);this.J(this.JJ,0);this.J(this.EL,0
);this.J(this.Jj,0);this.CZ.AA9([this,this.Rn,this.KE]);this.AX.AF([this,this.ZW
,this.Ro]);this.WT.AF([this,this.O0,this.DO]);this.JJ.AF([this,this.Ak9,this.Afo
]);this.EL.Dh(this.CZ);this.EL.AF([B=this.CZ,B.Cz,B.CB]);this.Jj.A3u([B=A._GetAutoObject(
A.Device.Device),B.AAL,B.AEL]);this.Init(aArg);},_Done:function(){this.__proto__=
C.D1;this.CZ._Done();this.AX._Done();this.WT._Done();this.JJ._Done();this.EL._Done(
);this.Jj._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.D1._Done.call(this);},_ReInit:function(){C.D1._ReInit.call(this);this.CZ._ReInit(
);this.AX._ReInit();this.WT._ReInit();this.JJ._ReInit();this.EL._ReInit();this.Jj.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.D1._Mark.call(this,D);if((B=this.CZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.D1={AI:0,As9:null,Q:null,Ee:
null,Fn:null,Fb:null,HM:null,N:null,Je:null,EU:null,EM:null,Azc:0,K3:0,A3:0,Qz:0
,Init:function(aArg){A.ow([this,this.Lv],this);},Ai:function(Ae){A.Core.O.Ai.call(
this,Ae);if(!this.A3)this.A8(null);},BfD:function(E){if(this.Azc===E)return;this.
Azc=E;this.Al();},AcM:function(E){if(this.K3===E)return;this.K3=E;this.Al();},Dz:
function(H){A.aa8("%s",AiV);},Tn:function(s){this.Dz(s);},Ec:function(EH){A.ow([
this,this.Tn],this);A.ow(this.As9,this);},AF:function(E){if(A.z_(this.Q,E))return;
if(!!this.Q)A.zn([this,this.CY],this.Q,0);this.Q=E;if(!!E)A.za([this,this.CY],E,
0);if(!!E)A.ow([this,this.CY],this);},CY:function(H){var F;if(!!this.Q)this.Bu((
F=this.Q,F[1].call(F[0])));},Bu:function(E){A.aa8("%s",AUu);},NG:function(H){if(
this.A3>1)this.Ec(this.A3-1);},Md:function(H){if((this.A3>0)&&(this.A3<this.Qz))
this.Ec(this.A3+1);},UN:function(E){if(A.z_(this.Ee,E))return;if(!!this.Ee)A.zn([
this,this.AUX],this.Ee,0);this.Ee=E;if(!!E)A.za([this,this.AUX],this.Ee,0);A.ow([
this,this.AUX],this);},AmO:function(H){},AUX:function(s){this.AmO(s);},P2:function(
E){if(A.z_(this.Fn,E))return;if(!!this.Fn)A.zn([this,this.AU1],this.Fn,0);this.Fn=
E;if(!!E)A.za([this,this.AU1],E,0);if(!!E)A.ow([this,this.AU1],this);},Rq:function(
E){if(A.z_(this.Fb,E))return;if(!!this.Fb)A.zn([this,this.AU3],this.Fb,0);this.Fb=
E;if(!!E)A.za([this,this.AU3],E,0);if(!!E)A.ow([this,this.AU3],this);},YK:function(
H){},AU3:function(s){this.YK(s);},YJ:function(H){},AU1:function(s){this.YJ(s);},
SS:function(E){if(A.z_(this.HM,E))return;if(!!this.HM)A.zn([this,this.AU0],this.
HM,0);this.HM=E;if(!!E)A.za([this,this.AU0],E,0);if(!!E)A.ow([this,this.AU0],this
);},AjK:function(H){},AU0:function(s){this.AjK(s);},Gy:function(H){A.aa8("%s",A5L
);},Byc:function(s){this.Gy(s);},Gu:function(H){this.Ec(0);},Ahu:function(){A.aa8(
"%s",AUu);return 0;},Ahy:function(){A.aa8("%s",AUu);return 0;},Lv:function(H){},
Alb:function(E){if(A.z_(this.Je,E))return;if(!!this.Je)A.zn([this,this.Amo],this.
Je,0);this.Je=E;if(!!E)A.za([this,this.Amo],this.Je,0);A.ow([this,this.Amo],this
);},Amo:function(H){},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.
B0._Init.call(this.EU={I:this},0);A.Core.B0._Init.call(this.EM={I:this},0);this.
__proto__=C.D1;this.G(Ap4);this.Azc=A.iF.Text;this.K3=A.iF.CP;this.EU.Filter=6;this.
EM.Filter=7;this.EU.B1=[this,this.NG];this.EM.B1=[this,this.Md];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.O;this.EU._Done();this.EM._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.EU._ReInit(
);this.EM._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.As9)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ee)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Fn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fb)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.HM)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Je
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisID"
};C.AfG={AI:0,Dw:null,Fa:null,Ee:null,Fn:null,Fb:null,HM:null,Q:null,Je:null,AAw:-
1,AJI:false,AO6:false,ACj:true,Init:function(aArg){A.ow([this,this.AxT],this);},
Ai:function(Ae){C.DV.Ai.call(this,Ae);if(!this.Dw)return;if(this.Dw.A3>0){if(this.
GW){this.Dw.AcM(A.iF.CD);this.Background.L(A.iF.CP);this.T.L(A.iF.Text);}else{this.
Dw.AcM(A.iF.CP);this.Background.L(A.iF.CD);this.T.L(A.iF.Text);}}else{if(this.GW
)this.Dw.AcM(A.iF.CD);else this.Dw.AcM(A.iF.CP);this.Dw.BfD(this.T.AV);}},JC:function(
H){C.DV.JC.call(this,H);if(!this.Dw)return;if(!this.Dw.A3)this.Gy(this);else this.
Gu(this);},Hb:function(E){C.DV.Hb.call(this,E);if(!!this.Dw)this.Dw.N=E;},UN:function(
E){if(A.z_(this.Ee,E))return;if(!!this.Ee)A.zn([this,this.AmO],this.Ee,0);this.Ee=
E;if(!!E)A.za([this,this.AmO],this.Ee,0);A.ow([this,this.AmO],this);},AmO:function(
H){if(!!this.Dw)this.Dw.UN(this.Ee);},P2:function(E){if(A.z_(this.Fn,E))return;this.
Fn=E;if(!!this.Dw)this.Dw.P2(E);},Rq:function(E){if(A.z_(this.Fb,E))return;this.
Fb=E;if(!!this.Dw)this.Dw.Rq(E);},SS:function(E){if(A.z_(this.HM,E))return;this.
HM=E;if(!!this.Dw)this.Dw.SS(E);},Bt4:function(H){var AXh=0;if(!!this.Dw){AXh=this.
Dw.A3;this.Dw.N=null;this.HW(this.Dw);}switch(this.AAw){case 0:this.Dw=A._NewObject(
C.AcG,0);break;case 1:this.Dw=A._NewObject(C.ANd,0);break;case 2:this.Dw=A._NewObject(
C.ANc,0);break;case 3:this.Dw=A._NewObject(C.AO8,0);break;case 4:this.Dw=A._NewObject(
C.AO7,0);break;case 5:this.Dw=A._NewObject(C.ANe,0);break;default:throw new Error(
Bkz+this.AAw.toFixed());}this.J(this.Dw,0);this.Dw.Alb(this.Je);this.Dw.G(BkA);this.
Dw.N=this.N;this.Dw.UN(this.Ee);this.Dw.As9=[this,this.As9];this.Dw.AF([this,this.
SR,this.Bu]);this.Dw.SS(this.HM);this.Dw.P2(this.Fn);this.Dw.Rq(this.Fb);if(AXh>
0)this.Dw.Ec(AXh);this.A8(this.Dw);this.Al();},Gy:function(H){var B;var F;if(!!this.
Dw){if(!!this.N)this.Fa.Ahf((F=this.N,F[1].call(F[0])));else this.Fa=A._NewObject(
C.Aca,0);this.Dw.Gy(this);}},Gu:function(H){var B;if(!!this.Dw)this.Dw.Gu(this);
},Ahu:function(){if(!this.Dw)return 0;return this.Dw.Ahu();},Ahy:function(){if(!
this.Dw)return 0;return this.Dw.Ahy();},CY:function(H){var F;if(!!this.Q){this.Bu((
F=this.Q,F[1].call(F[0])));A.aat([this,this.SR,this.Bu],0);}},AF:function(E){if(
A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.CY],this.Q,0);this.Q=E;if(!!E)
A.za([this,this.CY],E,0);if(!!E)A.ow([this,this.CY],this);},Bu:function(E){var F;
if(this.AI===E)return;this.AI=E;if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.
aat(this.Q,0);A.ow([this,this.AxT],this);},Bgc:function(E){if(this.AAw===E)return;
this.AAw=E;A.ow([this,this.Bt4],this);},AtK:function(E){if(this.ACj===E)return;this.
ACj=E;A.ow([this,this.AxT],this);},AxT:function(H){var AmZ;if(this.ACj){if(this.
AJI)AmZ=5;else AmZ=0;}else if(this.AO6){if(A._GetAutoObject(A.Device.Converter).
AfQ(this.AI)===10)AmZ=4;else AmZ=3;}else if(A._GetAutoObject(A.Device.Converter).
AfQ(this.AI)===10)AmZ=2;else AmZ=1;this.Bgc(AmZ);},As9:function(H){var F;if((!!this.
N&&!!this.Dw)&&!this.Dw.A3)this.Fa.Aiw((F=this.N,F[1].call(F[0])));this.Al();},Alb:
function(E){if(A.z_(this.Je,E))return;if(!!this.Je)A.zn([this,this.Amo],this.Je,
0);this.Je=E;if(!!E)A.za([this,this.Amo],this.Je,0);A.ow([this,this.Amo],this);}
,Amo:function(H){if(!!this.Dw)this.Dw.Alb(this.Je);},A3T:function(E){if(this.AO6===
E)return;this.AO6=E;A.ow([this,this.AxT],this);},Be$:function(E){if(this.AJI===E
)return;this.AJI=E;A.ow([this,this.AxT],this);},SR:function(){return this.AI;},_Init:
function(aArg){C.DV._Init.call(this,aArg);this.__proto__=C.AfG;this.G(Ye);this.T.
R(Ap_);this.T.L(A.iF.Bg);this.Fa=A._NewObject(C.Aca,0);this.Init(aArg);},_Mark:function(
D){var B;C.DV._Mark.call(this,D);if((B=this.Dw)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Fa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ee)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Fn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Fb)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.HM)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Je)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AMC={EC:null,FB:null,D7:null,D6:null,D5:null
,C0:null,GE:function(E){if(this.Q2===E)return;C.KA.GE.call(this,E);this.C0.Dg(E);
this.D5.Dg(E);this.D6.Dg(E);this.D7.Dg(E);this.FB.Dg(E);this.EC.Dg(E);},Acc:function(
KR){var Cf=null;switch(KR){case-1:case 0:Cf=this.Gf;break;case 1:Cf=this.C0;break;
case 2:Cf=this.D5;break;case 3:Cf=this.D6;break;case 4:Cf=this.D7;break;case 5:Cf=
this.FB;break;case 6:Cf=this.EC;break;case 7:Cf=this.Hp;break;default:A.aa8("%s"
,Al6);}return Cf;},_Init:function(aArg){C.KA._Init.call(this,aArg);C.DM._Init.call(
this.EC={I:this},0);C.DM._Init.call(this.FB={I:this},0);C.DM._Init.call(this.D7={
I:this},0);C.DM._Init.call(this.D6={I:this},0);C.DM._Init.call(this.D5={I:this},
0);C.DM._Init.call(this.C0={I:this},0);this.__proto__=C.AMC;this.G(BkB);this.Hp.
G(AEE);this.EC.G(Ave);this.FB.G(AUn);this.D7.G(AUo);this.D6.G(AUp);this.D5.G(AUq
);this.C0.G(AUr);this.Gf.G(AUs);this.El.G(A5I);this.J(this.EC,-2);this.J(this.FB
,-2);this.J(this.D7,-2);this.J(this.D6,-2);this.J(this.D5,-2);this.J(this.C0,-2);
this.EC.Ds=[this,this.HA];this.FB.Ds=[this,this.HA];this.D7.Ds=[this,this.HA];this.
D6.Ds=[this,this.HA];this.D5.Ds=[this,this.HA];this.C0.Ds=[this,this.HA];},_Done:
function(){this.__proto__=C.KA;this.EC._Done();this.FB._Done();this.D7._Done();this.
D6._Done();this.D5._Done();this.C0._Done();C.KA._Done.call(this);},_ReInit:function(
){C.KA._ReInit.call(this);this.EC._ReInit();this.FB._ReInit();this.D7._ReInit();
this.D6._ReInit();this.D5._ReInit();this.C0._ReInit();},_Mark:function(D){var B;
C.KA._Mark.call(this,D);if((B=this.EC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AsI={Q:null,Hp:null,Gf:null,El:null,HR:null,HQ:null,Q2:0,SV:0,AI:0,Fq:99,Init:
function(aArg){A.ow([this,this.Lv],this);},Ai:function(Ae){var B;A.Core.O.Ai.call(
this,Ae);this.El.W(false);this.El.G(A.vS(this.Acc(0).M,this.Acc(-1).M));var Gv=((
Ae&0x40)===0x40);if(Gv){this.A_0(A.iF.A6);this.A_1(A.iF.Bg);}else{this.A_0(this.
Q2);this.A_1(A.iF.Text);}this.Aj9();},GE:function(E){if(this.Q2===E)return;this.
Q2=E;this.Al();},Lv:function(H){},Acc:function(KR){var Cf=null;switch(KR){case-1:
case 0:Cf=this.Gf;break;case 1:Cf=this.Hp;break;default:A.aa8("%s",Al6);}return Cf;
},JM:function(E){if(this.SV===E)return;this.SV=E;this.Aj9();},Aj9:function(){var
B;var F;if(!!this.Q){var Ea=this.Gf;var Abl=this.SV;var A2=(F=this.Q,F[1].call(F[
0]));while(!!Ea){if(A2>0){Ea.Mu(A2%10);A2=(A2/10)|0;}else if(Abl>0)Ea.Mu(0);else
Ea.Mu(-1);Ea=(C.FA.isPrototypeOf(B=this.An0(Ea,0x11))?B:null);Abl=Abl-1;}}},Ad8:
function(H){var F;var BR=this.AI;this.Bu(this.AI+1);if(this.AI!==BR){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AI));A.aat(this.Q,0);}},Ad7:function(H){var F;var
BR=this.AI;this.Bu(this.AI-1);if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[
0],this.AI));A.aat(this.Q,0);}},CY:function(H){var F;if(!!this.Q)this.Bu((F=this.
Q,F[1].call(F[0])));},AF:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([
this,this.CY],this.Q,0);this.Q=E;if(!!E)A.za([this,this.CY],E,0);if(!!E)A.ow([this
,this.CY],this);},Bu:function(E){if(E<0)E=0;if(E>this.Fq)E=this.Fq;if(this.AI===
E)return;this.AI=E;this.Al();},FP:function(E){if(this.Fq===E)return;this.Fq=E;this.
Al();},A_0:function(aColor){this.Gf.Dg(aColor);this.Hp.Dg(aColor);},A_1:function(
aColor){this.Gf.AoT(aColor);this.Hp.AoT(aColor);},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);C.FA._Init.call(this.Hp={I:this},0);C.FA._Init.call(this.Gf={
I:this},0);A.abh.CR._Init.call(this.El={I:this},0);A.Core.B0._Init.call(this.HR={
I:this},0);A.Core.B0._Init.call(this.HQ={I:this},0);this.__proto__=C.AsI;this.G(
BkC);this.Q2=A.iF.CD;this.Hp.G(AEE);this.Gf.G(Ave);this.El.G(Ave);this.El.N5(2);
this.El.L(A.iF.E1);this.HR.Filter=4;this.HQ.Filter=5;this.J(this.Hp,0);this.J(this.
Gf,0);this.J(this.El,0);this.HR.B1=[this,this.Ad8];this.HR.D_=[this,this.Ad8];this.
HQ.B1=[this,this.Ad7];this.HQ.D_=[this,this.Ad7];this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.O;this.Hp._Done();this.Gf._Done();this.El._Done();this.HR.
_Done();this.HQ._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Hp._ReInit();this.Gf._ReInit();this.El._ReInit();this.HR.
_ReInit();this.HQ._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.El
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"
};C.FA={AeE:null,Background:null,Text:null,FA:-1,Mh:0,Aky:0,AnH:false,Ai:function(
Ae){A.Core.O.Ai.call(this,Ae);if(this.FA<0)this.Text.R(Qj);else this.Text.R(this.
FA.toFixed());this.Background.L(this.Mh);this.Text.L(this.Aky);},Mu:function(E){
if(this.FA===E)return;var Cf=E;if((Cf<0)||(Cf>9))Cf=-1;this.FA=Cf;this.Al();},Dg:
function(E){if(this.Mh===E)return;this.Mh=E;this.Al();},Aia:function(E){if(this.
AnH===E)return;this.AnH=E;this.AeE.An(E);if(E===false)this.Text.W(true);},AoT:function(
E){if(this.Aky===E)return;this.Aky=E;this.Al();},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.abm.Y5._Init.call(this.AeE={I:this},0);A.abh.AH._Init.call(this.
Background={I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);this.__proto__=
C.FA;var B;this.G(AEC);this.Mh=A.iF.CD;this.AeE.FI(750);this.AeE.Z6(750);this.AeE.
Aie(750);this.Aky=A.iF.Text;this.Background.AW(0x3);this.Background.G(AEC);this.
Text.AW(0x3);this.Text.G(AEC);this.Text.R(Qj);this.J(this.Background,0);this.J(this.
Text,0);this.AeE.Q=[B=this.Text,B.Fe,B.W];this.Text.Y(A.zW(A.eV.Au));},_Done:function(
){this.__proto__=A.Core.O;this.AeE._Done();this.Background._Done();this.Text._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
AeE._ReInit();this.Background._ReInit();this.Text._ReInit();},_Mark:function(D){
var B;A.Core.O._Mark.call(this,D);if((B=this.AeE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::Digit"};C.E0={Ac:null,IB:null,AJQ:
A.jm,ANr:A.jm,RX:0,AFK:0,AWm:false,AVW:false,Init:function(aArg){},CE:function(H
){var B;C.Aw.CE.call(this,H);A.za([this,this.AxO],[B=A._GetAutoObject(A.Device.Device
).Aq,B.Fd,B.Ff],0);A.za([this,this.Tn],[B=A._GetAutoObject(A.Device.Device).Aq,B.
Fd,B.Ff],0);A.ow([this,this.AxO],this);A.ow([this,this.Tn],this);},Fc:function(H
){var B;C.Aw.Fc.call(this,H);A.zn([this,this.AxO],[B=A._GetAutoObject(A.Device.Device
).Aq,B.Fd,B.Ff],0);},Bqn:function(Oi){A._GetAutoObject(A.Device.Helper).HS(Oi);this.
Anr(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).V.Id);
},Anr:function(Lk,AaK){A.aa8("%s",AiV);},TE:function(H){var As=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!!As&&(As.PopupState===9))A.z3([this,this.Brh],this);
else if(!!As&&(As.PopupState===5)){this.AVW=true;this.EY(this);}},Brh:function(H
){if(this.RX>0){this.AVW=false;this.Aba(this);this.A4f(0);}},Agh:function(H){if((
this.AFK+1)<this.RX)this.A4f(this.AFK+1);else A.z3([this,this.Bo0],this);},Bo1:function(
s){this.Agh(s);},A4f:function(E){this.AFK=E;if(this.AVW===false){this.Bqn(E);A.z3([
this,this.Bo1],this);var VV=(this.AFK/this.RX)*100;A._GetAutoObject(A.Device.Device
).A_(49,true,A.aap(VV,0,0),0,[this,this.TE]);}},Ys:function(H){A._GetAutoObject(
A.Device.Device).A_(49,false,BkD,0,[this,this.TE]);this.AWm=true;A.ow([this,this.
AHb],this);},Bo0:function(s){this.Ys(s);},Aba:function(H){this.IB.W(true);this.AWm=
false;this.AHb(this);},Bx9:function(s){this.Aba(s);},Aw8:function(H){var Bb=A._GetAutoObject(
A.Device.Helper).A0M();A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);},EY:function(
H){A._GetAutoObject(C.A1).Fl();},AXK:function(H){A._GetAutoObject(C.A1).BX(95);}
,Dz:function(H){this.N.W(true);this.N.C8(A.zW(A.abi.ET));this.N.CA=[this,this.EY
];this.N.Cm(A.zW(A.abi.AzX));if(!A._GetAutoObject(A.Device.Device).Aq.Filter||A.
_GetAutoObject(A.Device.Helper).Aom(A._GetAutoObject(A.Device.Device).Aq.Filter)
){this.N.Cg=null;this.N.Ji.DC(100);}else{this.N.Cg=[this,this.Aw8];this.N.Ji.DC(
255);}this.N.Db(A.zW(A.abi.Acm));this.N.Cl=[this,this.AXK];},Tn:function(s){this.
Dz(s);},AxO:function(H){this.RX=A._GetAutoObject(A.Device.Device).Aq.Cd();if(this.
RX>0)A._GetAutoObject(A.Device.Device).A_(49,true,Yg,0,[this,this.TE]);else{this.
Aba(this);this.Ys(this);}},Aic:function(E){if(this.AJQ===E)return;this.AJQ=E;A.ow([
this,this.AHb],this);},AHb:function(H){var B;if(this.AWm===false){this.IB.R(A.jm
);return;}var AmC;if(!A._GetAutoObject(A.Device.Device).Aq.Cd()){var Agm=A._GetAutoObject(
A.Device.Device).Aq.Filter;A.zn([this,this.AxO],[B=A._GetAutoObject(A.Device.Device
).Aq,B.Fd,B.Ff],0);this.Aw8(this);if(!A._GetAutoObject(A.Device.Device).Aq.PF()||
!Agm)AmC=A.z2(A.abg.WarningNoAnimalsRegistered);else if(A._GetAutoObject(A.Device.
Helper).Azi(A._GetAutoObject(A.Device.Device).Aq.Filter)===1)AmC=A.z2(A.abg.AJK);
else AmC=A.z2(A.abg.AJJ);A._GetAutoObject(A.Device.Device).Aq.Bo(Agm);A.za([this
,this.AxO],[B=A._GetAutoObject(A.Device.Device).Aq,B.Fd,B.Ff],0);}else AmC=this.
ANr;AmC=AmC+(AUv+this.AJQ);this.IB.R(AmC);},Afr:function(E){if(this.ANr===E)return;
this.ANr=E;A.ow([this,this.AHb],this);},_Init:function(aArg){C.Aw._Init.call(this
,aArg);A.Core.Ac._Init.call(this.Ac={I:this},0);C.Aix._Init.call(this.IB={I:this
},0);this.__proto__=C.E0;this.Dt(C.Zr);this.Ac.G(FK);this.Ac.Le(1);this.IB.G(FK);
this.J(this.Ac,0);this.J(this.IB,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Aw;this.Ac._Done();this.IB._Done();C.Aw._Done.call(this);},_ReInit:function(){
C.Aw._ReInit.call(this);this.Ac._ReInit();this.IB._ReInit();},_Mark:function(D){
var B;C.Aw._Mark.call(this,D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A1i={Af:null,AY:0,_Init:function(aArg){this.__proto__=C.A1i;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AsK={Kf:null,L$:null,AM:0,Ws:function(){this.Kf=null;this.L$=null;this.AM=0;
},NM:function(A2){var Gx;Gx=A._NewObject(C.A1i,0);Gx.AY=A2;if(!this.Kf){this.Kf=
Gx;this.L$=Gx;this.AM=1;}else{this.L$.Af=Gx;this.L$=Gx;this.AM=this.AM+1;}},AkH:
function(){var B;var QD=0;var Nz=this.Kf;while(!!Nz){QD+=Nz.AY;Nz=Nz.Af;}return QD;
},Ahv:function(){if(!this.AM)return 0;return this.AkH()/this.AM;},An7:function(){
var B;if(!this.AM)return 0;var AVP=this.Ahv();var Aa3=0;var Nz=this.Kf;while(!!Nz
){Aa3+=Math.pow(Nz.AY-AVP,2);Nz=Nz.Af;}Aa3/=this.AM;Aa3=Math.sqrt(Aa3);return Aa3;
},_Init:function(aArg){this.__proto__=C.AsK;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Kf)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.L$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AJR={Fs:null,Ach:null,Wz:null,DU:null,IB:null,
C3:function(){this.AYz(this);},Init:function(aArg){A.y_([this,this.AYz],A._GetAutoObject(
A.Device.Device).OD,0);A.ow([this,this.AYz],this);},EY:function(H){A._GetAutoObject(
C.A1).Fl();},AYz:function(H){this.Wz.B7(-1);this.IB.W(!this.Fs.AZ.Cd());},_Init:
function(aArg){C.Aw._Init.call(this,aArg);C.Fs._Init.call(this.Fs={I:this},0);C.
Ach._Init.call(this.Ach={I:this},0);C.Wz._Init.call(this.Wz={I:this},0);A.abh.DU.
_Init.call(this.DU={I:this},0);C.Aix._Init.call(this.IB={I:this},0);this.__proto__=
C.AJR;this.N.W(true);this.Dt(C.AKM);this.Fs.G(Al4);this.Fs.Nb(C.AnY);this.Ach.G(
Kc);this.Wz.G(Ap7);this.DU.D$(BkE);this.DU.Eg(BkF);this.DU.N5(3);this.DU.L(A.iF.
Text);this.IB.G(AlV);this.IB.R((A.z2(A.abg.A1U)+AUv)+A.z2(A.abg.A0r));this.J(this.
Fs,0);this.J(this.Ach,0);this.J(this.Wz,0);this.J(this.DU,0);this.J(this.IB,0);this.
N.CA=[this,this.EY];this.N.C8(A.zW(A.abi.ET));this.Fs.Xz(A._GetAutoObject(A.Device.
Device).OD);this.Wz.Xz(A._GetAutoObject(A.Device.Device).OD);this.Init(aArg);},_Done:
function(){this.__proto__=C.Aw;this.Fs._Done();this.Ach._Done();this.Wz._Done();
this.DU._Done();this.IB._Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw.
_ReInit.call(this);this.Fs._ReInit();this.Ach._ReInit();this.Wz._ReInit();this.DU.
_ReInit();this.IB._ReInit();this.IB.R((A.z2(A.abg.A1U)+AUv)+A.z2(A.abg.A0r));this.
C3();},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.Fs)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ach)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wz).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DU)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AJU={Aq8:null,Aq7:null,Aq_:null,Aq9:null,Ara:null,Aq$:null,Arc:null,Arb:null
,YM:null,WK:null,Zl:null,Zk:null,RatedAttribute:0,Init:function(aArg){this.Rs(2);
},DS:function(H){var DF=(A.Core.B0.isPrototypeOf(H)?H:null);switch(DF.CM){case 6:
switch(this.RatedAttribute){case 2:this.Rs(3);break;case 1:this.Rs(2);break;case
4:this.Rs(1);break;case 3:this.Rs(4);break;default:this.Rs(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.Rs(1);break;case 1:this.Rs(4);break;case 4:this.
Rs(3);break;case 3:this.Rs(2);break;default:this.Rs(0);}break;default:DF.PE=true;
}},Anr:function(Lk,AaK){if(!Lk)return;var EZ=A._NewObject(A.Device.Filter,0);var
Hh=A._NewObject(A.Device.Int32FilterCriterion,0);Hh.Initialize(1,0,AaK,true);EZ.
CO(Hh);var Axo=A._NewObject(A.Device.AssessmentFilterCriterion,0);Axo.Initialize(
3,5,0,true);EZ.CO(Axo);Lk.Bo(EZ);},Agh:function(H){var Ano=0;var AX1=A._GetAutoObject(
A.Device.Device).Bt.Cd();var B$=A._NewObject(A.Device.Rating,0);while(Ano<AX1){B$.
Fo(Ano,A._GetAutoObject(A.Device.Device).Bt);this.A8x(B$,0);var Buj=A._GetAutoObject(
A.Device.Helper).XU(2);this.A8x(B$,Buj);Ano++;}C.E0.Agh.call(this,H);},Ys:function(
H){A.ow([this,this.A8b],this);C.E0.Ys.call(this,H);},Aba:function(H){this.Aq8=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Aq7=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aq9=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aq_=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aq$=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Ara=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Arb=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Arc=A._NewObject(A.Device.Int32ArrayWrapper,0);C.E0.Aba.
call(this,H);},Dz:function(H){C.E0.Dz.call(this,H);this.N.O3(true);this.N.O4(true
);},A8x:function(DD,A6$){if(!DD||(DD.Timestamp<A6$))return;if(!A6$){this.Aq8.Set(
DD.Appearance,this.Aq8.Get(DD.Appearance)+1);this.Aq_.Set(DD.Faeces,this.Aq_.Get(
DD.Faeces)+1);this.Ara.Set(DD.Feed,this.Ara.Get(DD.Feed)+1);this.Arc.Set(DD.Respiratory
,this.Arc.Get(DD.Respiratory)+1);}else{this.Aq7.Set(DD.Appearance,this.Aq7.Get(DD.
Appearance)+1);this.Aq9.Set(DD.Faeces,this.Aq9.Get(DD.Faeces)+1);this.Aq$.Set(DD.
Feed,this.Aq$.Get(DD.Feed)+1);this.Arb.Set(DD.Respiratory,this.Arb.Get(DD.Respiratory
)+1);}},Rs:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
WK.JN(this.YM.KL(E));A.ow([this,this.A8b],this);},A8b:function(H){var YN=null;var
YO=null;switch(this.RatedAttribute){case 2:{YN=this.Aq7;YO=this.Aq8;}break;case 4:{
YN=this.Aq9;YO=this.Aq_;}break;case 1:{YN=this.Aq$;YO=this.Ara;}break;case 0:{YN=
A._NewObject(A.Device.Int32ArrayWrapper,0);YO=A._NewObject(A.Device.Int32ArrayWrapper
,0);}break;case 3:{YN=this.Arb;YO=this.Arc;}break;default:throw new Error(BkG+this.
RatedAttribute.toFixed());}var ACk=A._NewObject(A.abw.APi,0);ACk.NM(YN.Get(3),A.
iF.E1);ACk.NM(YN.Get(2),A.iF.Hy);ACk.NM(YN.Get(1),A.iF.FY);var ACl=A._NewObject(
A.abw.APi,0);ACl.NM(YO.Get(3),A.iF.E1);ACl.NM(YO.Get(2),A.iF.Hy);ACl.NM(YO.Get(1
),A.iF.FY);this.Zk.Z8(ACk);this.Zl.Z8(ACl);var AYm=YN.AkH()-YN.Get(5);var A_x=0;
var A_v=0;if(AYm>0){A_x=(YN.Get(2)/AYm)*100;A_v=(YN.Get(1)/AYm)*100;}var AG3=YO.
AkH()-YO.Get(5);this.IB.W(!AG3);var A_y=0;var A_w=0;if(AG3>0){A_y=(YO.Get(2)/AG3
)*100;A_w=(YO.Get(1)/AG3)*100;}this.Zk.A4d(A.aap(A_x,0,0)+AdG);this.Zk.A3V(A.aap(
A_v,0,0)+AdG);this.Zl.A4d(A.aap(A_y,0,0)+AdG);this.Zl.A3V(A.aap(A_w,0,0)+AdG);},
_Init:function(aArg){C.E0._Init.call(this,aArg);A.Device.RatedAttributeToString.
_Init.call(this.YM={I:this},0);C.MP._Init.call(this.WK={I:this},0);C.Ay4._Init.call(
this.Zl={I:this},0);C.Ay4._Init.call(this.Zk={I:this},0);this.__proto__=C.AJU;this.
Dt(C.AKN);this.Aic(A.z2(A.abg.A0s));this.Afr(A.z2(A.abg.Ak6));this.WK.G(Kc);this.
WK.Aj(true);this.WK.U(A.z2(A.abg.At6)+A.z2(A.abg.Colon));this.WK.Bk(false);this.
WK.Bga(false);this.Zl.G(BkH);this.Zl.U(A.z2(A.abg.AB9));this.Zk.G(BkI);this.Zk.U(
A.z2(A.abg.A1p));this.IB.G(AlV);this.J(this.WK,-1);this.J(this.Zl,-1);this.J(this.
Zk,-1);this.Aq8=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aq7=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Aq_=A._NewObject(A.Device.Int32ArrayWrapper,0
);this.Aq9=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Ara=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aq$=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Arc=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Arb=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Init(aArg);},_Done:function(){this.__proto__=C.E0;this.YM._Done();this.
WK._Done();this.Zl._Done();this.Zk._Done();C.E0._Done.call(this);},_ReInit:function(
){C.E0._ReInit.call(this);this.YM._ReInit();this.WK._ReInit();this.Zl._ReInit();
this.Zk._ReInit();this.Aic(A.z2(A.abg.A0s));this.Afr(A.z2(A.abg.Ak6));this.WK.U(
A.z2(A.abg.At6)+A.z2(A.abg.Colon));this.Zl.U(A.z2(A.abg.AB9));this.Zk.U(A.z2(A.abg.
A1p));},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Aq8)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aq7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aq9)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Ara)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aq$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arc)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Arb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.YM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.WK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Zl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zk)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::EvaluationRatingsScreen"};C.AJV={Acg:null,Td:null,Te:null
,Acf:null,Ta:null,Tb:null,AFM:0,AFL:0,AFs:0,AFr:0,Aa5:false,C3:function(){this.Ys(
this);},Anr:function(Lk,AaK){if(!Lk)return;var EZ=A._NewObject(A.Device.Filter,0
);var Hh=A._NewObject(A.Device.Int32FilterCriterion,0);Hh.Initialize(1,0,AaK,true
);EZ.CO(Hh);var AxG=A._NewObject(A.Device.Int32FilterCriterion,0);AxG.Initialize(
7,2,0,true);EZ.CO(AxG);Lk.Bo(EZ);},Agh:function(H){if(A._GetAutoObject(A.Device.
Helper).V.LastRatingTemperature===2)this.AFM++;else if(A._GetAutoObject(A.Device.
Helper).V.LastRatingTemperature===1)this.AFL++;var Ano=0;var AX1=A._GetAutoObject(
A.Device.Device).Bt.Cd();var Aq6;var AxZ=0;while(Ano<AX1){this.Aa5=true;Aq6=A._GetAutoObject(
A.Device.Device).Bt.IC(Ano,9);if(Aq6===1)AxZ=1;else if((Aq6===2)&&(AxZ!==1))AxZ=
2;Ano++;}if(AxZ===1)this.AFr++;else if(AxZ===2)this.AFs++;C.E0.Agh.call(this,H);
},Ys:function(H){var A_t=0;var A_u=0;if(this.RX>0){A_t=(this.AFM/this.RX)*100;A_u=(
this.AFL/this.RX)*100;}this.Td.JN(((((((A.aap(A_t,0,0)+AEF)+this.AFM.toFixed())+
Cv)+A.z2(A.abg.AAB))+Cv)+this.RX.toFixed())+Nr);this.Te.JN(((((((A.aap(A_u,0,0)+
AEF)+this.AFL.toFixed())+Cv)+A.z2(A.abg.AAB))+Cv)+this.RX.toFixed())+Nr);var A_r=
0;var A_s=0;if(this.RX>0){A_r=(this.AFs/this.RX)*100;A_s=(this.AFr/this.RX)*100;
}this.Ta.JN(((((((A.aap(A_r,0,0)+AEF)+this.AFs.toFixed())+Cv)+A.z2(A.abg.AAB))+Cv
)+this.RX.toFixed())+Nr);this.Tb.JN(((((((A.aap(A_s,0,0)+AEF)+this.AFr.toFixed()
)+Cv)+A.z2(A.abg.AAB))+Cv)+this.RX.toFixed())+Nr);this.IB.W(!this.Aa5);C.E0.Ys.call(
this,H);},Aba:function(H){this.AFr=0;this.AFs=0;this.AFL=0;this.AFM=0;this.Aa5=false;
C.E0.Aba.call(this,H);},_Init:function(aArg){C.E0._Init.call(this,aArg);C.Aeu._Init.
call(this.Acg={I:this},0);C.Ag9._Init.call(this.Td={I:this},0);C.Ag9._Init.call(
this.Te={I:this},0);C.Aeu._Init.call(this.Acf={I:this},0);C.Ag9._Init.call(this.
Ta={I:this},0);C.Ag9._Init.call(this.Tb={I:this},0);this.__proto__=C.AJV;this.Dt(
C.AKO);this.Aic(A.z2(A.abg.A0t));this.Afr(A.z2(A.abg.Aox));this.Acg.G(Kc);this.Acg.
Aj(true);this.Acg.U(A.z2(A.abg.A0x));this.Acg.Bk(false);this.Td.G(RQ);this.Td.Aj(
true);this.Td.U(A.z2(A.abg.Moderate)+A.z2(A.abg.Colon));this.Td.Bk(true);this.Td.
Aii(2);this.Te.G(Yf);this.Te.Aj(true);this.Te.U(A.z2(A.abg.Asp)+A.z2(A.abg.Colon
));this.Te.Bk(true);this.Te.Aii(1);this.Acf.G(AiW);this.Acf.Aj(true);this.Acf.U(
A.z2(A.abg.A0y));this.Acf.Bk(false);this.Ta.G(AlY);this.Ta.Aj(true);this.Ta.U(A.
z2(A.abg.Moderate)+A.z2(A.abg.Colon));this.Ta.Bk(true);this.Ta.Aii(2);this.Tb.G(
Ap7);this.Tb.Aj(true);this.Tb.U(A.z2(A.abg.Asp)+A.z2(A.abg.Colon));this.Tb.Bk(true
);this.Tb.Aii(1);this.J(this.Acg,0);this.J(this.Td,0);this.J(this.Te,0);this.J(this.
Acf,0);this.J(this.Ta,0);this.J(this.Tb,0);this.Td.Y(A.zW(A.eV.AB));this.Te.Y(A.
zW(A.eV.AB));this.Ta.Y(A.zW(A.eV.AB));this.Tb.Y(A.zW(A.eV.AB));},_Done:function(
){this.__proto__=C.E0;this.Acg._Done();this.Td._Done();this.Te._Done();this.Acf.
_Done();this.Ta._Done();this.Tb._Done();C.E0._Done.call(this);},_ReInit:function(
){C.E0._ReInit.call(this);this.Acg._ReInit();this.Td._ReInit();this.Te._ReInit();
this.Acf._ReInit();this.Ta._ReInit();this.Tb._ReInit();this.Aic(A.z2(A.abg.A0t));
this.Afr(A.z2(A.abg.Aox));this.Acg.U(A.z2(A.abg.A0x));this.Td.U(A.z2(A.abg.Moderate
)+A.z2(A.abg.Colon));this.Te.U(A.z2(A.abg.Asp)+A.z2(A.abg.Colon));this.Acf.U(A.z2(
A.abg.A0y));this.Ta.U(A.z2(A.abg.Moderate)+A.z2(A.abg.Colon));this.Tb.U(A.z2(A.abg.
Asp)+A.z2(A.abg.Colon));this.Td.Y(A.zW(A.eV.AB));this.Te.Y(A.zW(A.eV.AB));this.Ta.
Y(A.zW(A.eV.AB));this.Tb.Y(A.zW(A.eV.AB));this.C3();},_Mark:function(D){var B;C.
E0._Mark.call(this,D);if((B=this.Acg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Td
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Te)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ta)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Tb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationTemperaturesScreen"
};C.Ar0={Ks:null,AgX:null,AgY:null,Aj$:null,Zw:null,Va:null,Zt:null,RH:null,Zu:null
,RI:null,Zx:null,Vb:null,AD:null,Aa0:0,AwW:0,AmT:0,AWZ:0,A82:0,C3:function(){this.
Ys(this);},DS:function(H){switch(this.CF.CM){case 4:{if(this.IB.Fe())return;var Pv=
this.Ac.Br[1]+80;this.Ac.Gk([this.Ac.Br[0],Pv]);this.Ac.AbB(null,null);}break;case
5:{if(this.IB.Fe())return;var Pv=this.Ac.Br[1]-80;this.Ac.Gk([this.Ac.Br[0],Pv]);
this.Ac.AbB(null,null);}break;default:C.E0.DS.call(this,H);}},Anr:function(Lk,AaK
){if(!Lk)return;var EZ=A._NewObject(A.Device.Filter,0);var Hh=A._NewObject(A.Device.
Int32FilterCriterion,0);Hh.Initialize(1,0,AaK,true);EZ.CO(Hh);var AaW=A._NewObject(
A.Device.Int32FilterCriterion,0);AaW.Initialize(8,2,0,true);EZ.CO(AaW);Lk.Bo(EZ);
},Agh:function(H){if(this.A8T()){this.Ks.NM(A._GetAutoObject(A.Device.Helper).V.
LastBodyWeight);if(A._GetAutoObject(A.Device.Helper).V.Aon()){var Pl=A._GetAutoObject(
A.Device.Helper).L6(A._GetAutoObject(A.Device.Helper).V.TimestampFirstWeighing,A.
_GetAutoObject(A.Device.Helper).V.TimestampLastWeighing);if(Pl>0){var AWy=A._GetAutoObject(
A.abk.Dv).Ajg(Pl,A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).V.LastBodyWeight);this.AgX.NM(AWy);}}var AXd=A._GetAutoObject(A.
Device.Device).Bt.Cd()-2;if(AXd>=0){var Bsl=A._GetAutoObject(A.Device.Device).Bt.
Azj(AXd,8);var Bsk=A._GetAutoObject(A.Device.Device).Bt.Hr(AXd,6);var Pl=A._GetAutoObject(
A.Device.Helper).L6(Bsk,A._GetAutoObject(A.Device.Helper).V.TimestampLastWeighing
);if(Pl>0){var AWy=((A._GetAutoObject(A.Device.Helper).V.LastBodyWeight-Bsl)/Pl)|
0;this.AgY.NM(AWy);}}if((A._GetAutoObject(A.Device.Helper).V.Aon()&&((A._GetAutoObject(
A.Device.Helper).V.FirstBodyWeight*2)<A._GetAutoObject(A.Device.Helper).V.LastBodyWeight
))&&(A._GetAutoObject(A.Device.Helper).V.NN()<=180)){var AHi=A._GetAutoObject(A.
Device.Helper).V.LastBodyWeight-A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight;
var R7=A._GetAutoObject(A.Device.Helper).L6(A._GetAutoObject(A.Device.Helper).V.
TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).V.TimestampLastWeighing
);var Btw=A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight/(AHi/R7);this.Aj$.
NM(Btw);}if(A._GetAutoObject(A.Device.Helper).V.AnimalType===1){this.Aa0++;this.
AmT=A._GetAutoObject(A.Device.Helper).V.VisualId;}if(A._GetAutoObject(A.Device.Helper
).V.TimestampLastWeighing<A._GetAutoObject(A.Device.Helper).XU(7)){this.AwW++;this.
AWZ=A._GetAutoObject(A.Device.Helper).V.VisualId;this.A82=A._GetAutoObject(A.Device.
Helper).L6(A._GetAutoObject(A.Device.Helper).V.TimestampLastWeighing,A._GetAutoObject(
A.Device.Helper).DN());}}C.E0.Agh.call(this,H);},Ys:function(H){var AYK=this.AgX.
Ahv()|0;var AYM=this.AgY.Ahv()|0;if(this.Aa0>1)A._GetAutoObject(A.Device.Device).
A_(56,true,this.Aa0.toFixed(),0,null);if(this.Aa0===1)A._GetAutoObject(A.Device.
Device).A_(53,true,this.AmT.toFixed(),0,null);if(this.AwW>1)A._GetAutoObject(A.Device.
Device).A_(52,true,this.AwW.toFixed(),0,null);if(this.AwW===1)A._GetAutoObject(A.
Device.Device).A_(57,true,(this.AWZ.toFixed()+Ap9)+this.A82.toFixed(),0,null);if(
this.Ks.AM>0)this.Va.U(((((((A._GetAutoObject(A.Device.Converter).AuE(this.Ks.Ahv(
)|0,1)+Avf)+A._GetAutoObject(A.Device.Converter).AuE(this.Ks.An7()|0,1))+Cv)+A._GetAutoObject(
A.abk.Dv).Aa$())+Avg)+this.Ks.AM.toFixed())+Nr);else this.Va.U(A.z2(A.abg.Unknown
));if(this.AgX.AM>0)this.RH.U(((((((A._GetAutoObject(A.Device.Converter).Nl(AYK,
2,true)+Avf)+A._GetAutoObject(A.Device.Converter).Nl(this.AgX.An7()|0,2,true))+Cv
)+A._GetAutoObject(A.abk.Dv).Yx())+Avg)+this.AgX.AM.toFixed())+Nr);else this.RH.
U(A.z2(A.abg.Unknown));if(this.AgY.AM>0)this.RI.U(((((((A._GetAutoObject(A.Device.
Converter).Nl(AYM,2,true)+Avf)+A._GetAutoObject(A.Device.Converter).Nl(this.AgY.
An7()|0,2,true))+Cv)+A._GetAutoObject(A.abk.Dv).Yx())+Avg)+this.AgY.AM.toFixed()
)+Nr);else this.RI.U(A.z2(A.abg.Unknown));if(this.Aj$.AM>0)this.Vb.U(((((((A.aap(
this.Aj$.Ahv(),0,1)+Avf)+A.aap(this.Aj$.An7(),0,1))+Cv)+A.z2(A.abg.BaN))+Avg)+this.
Aj$.AM.toFixed())+Nr);else this.Vb.U(A.z2(A.abg.Unknown));var AYL=0;var AYN=0;var
Aa5=false;if(this.Ks.AM>0)Aa5=true;var HF=0;if(!!A._GetAutoObject(A.Device.Device
).Aq.Filter){var AF3=A._GetAutoObject(A.Device.Device).Aq.Filter.DG(14,0);if(!!(
A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AF3)?AF3:null))HF=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AF3)?AF3:null).AY;}if(this.AgX.AM>0){Aa5=true;AYL=A._GetAutoObject(
A.Device.Converter).A5r(AYK,HF);}if(this.AgY.AM>0){Aa5=true;AYN=A._GetAutoObject(
A.Device.Converter).A5r(AYM,HF);}this.RH.Aii(AYL);this.RI.Aii(AYN);this.IB.W(!Aa5
);C.E0.Ys.call(this,H);},Aba:function(H){this.Ks.Ws();this.AgX.Ws();this.AgY.Ws(
);this.Aj$.Ws();this.Aa0=0;this.AwW=0;this.AmT=0;this.AWZ=0;C.E0.Aba.call(this,H
);},FX:function(H){var B;this.AD.N0((B=this.Ac.Dd(0x1))[3]-B[1]);this.AD.N4((B=this.
Ac.M)[3]-B[1]);this.AD.N2(-this.Ac.Br[1]);},A8T:function(){return A._GetAutoObject(
A.Device.Helper).V.LastBodyWeight>0;},Iu:function(H){A.ow([this,this.FX],this);}
,_Init:function(aArg){C.E0._Init.call(this,aArg);C.Aeu._Init.call(this.Zw={I:this
},0);C.H8._Init.call(this.Va={I:this},0);C.Aeu._Init.call(this.Zt={I:this},0);C.
Ag9._Init.call(this.RH={I:this},0);C.Aeu._Init.call(this.Zu={I:this},0);C.Ag9._Init.
call(this.RI={I:this},0);C.Aeu._Init.call(this.Zx={I:this},0);C.H8._Init.call(this.
Vb={I:this},0);C.AD._Init.call(this.AD={I:this},0);this.__proto__=C.Ar0;this.Dt(
C.Asm);this.Aic(A.z2(A.abg.A0u));this.Afr(A.z2(A.abg.Aoy));this.Zw.G(AEA);this.Zw.
Aj(true);this.Zw.U(A.z2(A.abg.AZq));this.Zw.Bk(false);this.Zw.JM(5);this.Va.G(AUw
);this.Va.Aj(true);this.Va.U(A.jm);this.Va.Bk(true);this.Zt.G(Aqb);this.Zt.Aj(true
);this.Zt.U(A.z2(A.abg.AHG));this.Zt.Bk(false);this.Zt.JM(5);this.RH.G(Aqc);this.
RH.Aj(true);this.RH.U(A.jm);this.RH.Bk(true);this.RH.JN(A.jm);this.Zu.G(Aqd);this.
Zu.Aj(true);this.Zu.U(A.z2(A.abg.Aru));this.Zu.Bk(false);this.Zu.JM(5);this.RI.G(
BkJ);this.RI.Aj(true);this.RI.U(A.jm);this.RI.Bk(true);this.RI.JN(A.jm);this.Zx.
G(AUx);this.Zx.Aj(true);this.Zx.U(A.z2(A.abg.AZB));this.Zx.Bk(false);this.Zx.JM(
5);this.Vb.G(Al5);this.Vb.Aj(true);this.Vb.U(A.jm);this.Vb.Bk(true);this.AD.G(JT
);this.J(this.Zw,-1);this.J(this.Va,-1);this.J(this.Zt,-1);this.J(this.RH,-1);this.
J(this.Zu,-1);this.J(this.RI,-1);this.J(this.Zx,-1);this.J(this.Vb,-1);this.J(this.
AD,-1);this.Ac.Eu=[this,this.Iu];this.Ks=A._NewObject(C.AsK,0);this.AgX=A._NewObject(
C.AsK,0);this.AgY=A._NewObject(C.AsK,0);this.Va.Y(A.zW(A.eV.Au));this.RH.Y(A.zW(
A.eV.AB));this.RI.Y(A.zW(A.eV.AB));this.Vb.Y(A.zW(A.eV.AB));this.Aj$=A._NewObject(
C.A0E,0);},_Done:function(){this.__proto__=C.E0;this.Zw._Done();this.Va._Done();
this.Zt._Done();this.RH._Done();this.Zu._Done();this.RI._Done();this.Zx._Done();
this.Vb._Done();this.AD._Done();C.E0._Done.call(this);},_ReInit:function(){C.E0.
_ReInit.call(this);this.Zw._ReInit();this.Va._ReInit();this.Zt._ReInit();this.RH.
_ReInit();this.Zu._ReInit();this.RI._ReInit();this.Zx._ReInit();this.Vb._ReInit(
);this.AD._ReInit();this.Aic(A.z2(A.abg.A0u));this.Afr(A.z2(A.abg.Aoy));this.Zw.
U(A.z2(A.abg.AZq));this.Zt.U(A.z2(A.abg.AHG));this.Zu.U(A.z2(A.abg.Aru));this.Zx.
U(A.z2(A.abg.AZB));this.Va.Y(A.zW(A.eV.Au));this.RH.Y(A.zW(A.eV.AB));this.RI.Y(A.
zW(A.eV.AB));this.Vb.Y(A.zW(A.eV.AB));this.C3();},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Ks)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aj$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zw)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Va)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zt)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.RH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Zu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Zr={_Init:function(aArg){C.AhA._Init.call(this,aArg);this.__proto__=C.Zr;this.
CV.Ar(A.zW(A.abi.AzT));},_className:"Application::HeaderEvaluationFilter"};C.JI={
C3:function(){this.Text.R(A.z2(A.abg.None));},Ez:function(H){C.AhA.Ez.call(this,
H);this.CV.Ar(A._GetAutoObject(A.Device.Converter).Aey(A._GetAutoObject(A.Device.
Device).Jd));},_Init:function(aArg){C.AhA._Init.call(this,aArg);this.__proto__=C.
JI;},_ReInit:function(){C.AhA._ReInit.call(this);this.C3();},_className:"Application::HeaderListFilter"
};C.Asm={Init:function(aArg){this.CV.Ar(A._GetAutoObject(A.abk.Dv).A8q());},_Init:
function(aArg){C.Zr._Init.call(this,aArg);this.__proto__=C.Asm;this.Init(aArg);}
,_className:"Application::HeaderEvaluationWeightsFilter"};C.AKO={Init:function(aArg
){this.CV.Ar(A.zW(A.abi.ZA));},_Init:function(aArg){C.Zr._Init.call(this,aArg);this.
__proto__=C.AKO;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AKN={Init:function(aArg){this.CV.Ar(A.zW(A.abi.AkM));},_Init:function(aArg){
C.Zr._Init.call(this,aArg);this.__proto__=C.AKN;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AKM={WI:null,CV:null,AP:null,C3:function(){this.WI.R(A.z2(A.abg.AZI));},CW:function(
E){C.BU.CW.call(this,E);this.WI.L(E);this.CV.L(E);},_Init:function(aArg){C.BU._Init.
call(this,aArg);C.CH._Init.call(this.WI={I:this},0);A.abh.Am._Init.call(this.CV={
I:this},0);A.abh.DU._Init.call(this.AP={I:this},0);this.__proto__=C.AKM;this.WI.
G(BkK);this.WI.R(A.z2(A.abg.AZI));this.WI.A0(0x11);this.CV.G(BkL);this.AP.D$(BkM
);this.AP.Eg(BkN);this.AP.L(A.iF.A7);this.J(this.WI,0);this.J(this.CV,0);this.J(
this.AP,0);this.WI.Y(A.zW(A.eV.Au));this.WI.Bz(A.zW(A.eV.AB));this.CV.Ar(A.zW(A.
abi.ALU));},_Done:function(){this.__proto__=C.BU;this.WI._Done();this.CV._Done();
this.AP._Done();C.BU._Done.call(this);},_ReInit:function(){C.BU._ReInit.call(this
);this.WI._ReInit();this.CV._ReInit();this.AP._ReInit();this.C3();},_Mark:function(
D){var B;C.BU._Mark.call(this,D);if((B=this.WI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderEvaluationLosses"};C.Ach={Zs:null,AhI:null,AhF:
null,AhG:null,_Init:function(aArg){C.Ef._Init.call(this,aArg);C.CH._Init.call(this.
Zs={I:this},0);A.abh.Am._Init.call(this.AhI={I:this},0);A.abh.Am._Init.call(this.
AhF={I:this},0);A.abh.Am._Init.call(this.AhG={I:this},0);this.__proto__=C.Ach;this.
Zs.G(BkO);this.Zs.R(A.z2(A.abg.Year));this.Zs.A0(0x11);this.Zs.L(A.iF.Text);this.
AhI.G(A5M);this.AhI.L(A.iF.Text);this.AhF.G(BkP);this.AhF.L(A.iF.Text);this.AhG.
G(BkQ);this.AhG.L(A.iF.Text);this.J(this.Zs,0);this.J(this.AhI,0);this.J(this.AhF
,0);this.J(this.AhG,0);this.Zs.Y(A.zW(A.eV.OI));this.Zs.Bz(A.zW(A.eV.K7));this.AhI.
Ar(A.zW(A.abi.AL5));this.AhF.Ar(A.zW(A.abi.AL4));this.AhG.Ar(A.zW(A.abi.AMa));},
_Done:function(){this.__proto__=C.Ef;this.Zs._Done();this.AhI._Done();this.AhF._Done(
);this.AhG._Done();C.Ef._Done.call(this);},_ReInit:function(){C.Ef._ReInit.call(
this);this.Zs._ReInit();this.AhI._ReInit();this.AhF._ReInit();this.AhG._ReInit();
},_Mark:function(D){var B;C.Ef._Mark.call(this,D);if((B=this.Zs)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AhI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AhG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineEvaluationLosses"};C.AnY={Ahc:null,AP:null,A4:null,DQ:null
,U0:null,S8:null,Gp:null,VV:0,AqC:0,Ajm:0,Ax1:0,Init:function(aArg){},Bh:function(
aSize){C.A$.Bh.call(this,aSize);this.T.G(A.aaQ(this.T.M,((aSize[0]*25)/100)|0));
this.AP.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);this.S8.G([this.T.M[2],0,((aSize[
0]*50)/100)|0,aSize[1]]);this.A4.G([this.S8.M[2]-1,0,this.S8.M[2]+1,aSize[1]]);this.
U0.G([this.S8.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.DQ.G([this.U0.M[2]-1,
0,this.U0.M[2]+1,aSize[1]]);this.Gp.G([this.U0.M[2],0,aSize[0],aSize[1]]);this.Ahc.
G(this.Gp.M);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.U(this.Ax1.toFixed());
this.S8.L(this.T.AV);this.S8.R(this.Ajm.toFixed());this.U0.L(this.T.AV);this.U0.
R(this.AqC.toFixed());var B$=this.Btv(this.VV);this.Gp.L(A._GetAutoObject(A.abk.
Assessment).VJ(B$));this.Ahc.L(A._GetAutoObject(A.abk.Assessment).Pp(B$));this.Gp.
R(A.aap(this.VV,0,0)+AdG);},B7:function(Z){if(!this.AZ)return;this.Hl=Z;Z=(this.
AZ.Cd()-Z)-1;if(!!this.AZ){this.Ajm=this.AZ.Cp(Z,1);this.AqC=this.AZ.Cp(Z,2);this.
Ax1=this.AZ.Cp(Z,0);if(this.Ajm>0)this.VV=(this.AqC/this.Ajm)*100;else this.VV=0;
this.Al();}},Btv:function(VV){if(VV>=8)return 1;else if(VV>=4)return 2;else return 3;
},_Init:function(aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(this.Ahc={
I:this},0);A.abh.AH._Init.call(this.AP={I:this},0);A.abh.AH._Init.call(this.A4={
I:this},0);A.abh.AH._Init.call(this.DQ={I:this},0);A.abh.Text._Init.call(this.U0={
I:this},0);A.abh.Text._Init.call(this.S8={I:this},0);A.abh.Text._Init.call(this.
Gp={I:this},0);this.__proto__=C.AnY;this.Ahc.G(AlW);this.AP.L(A.iF.A7);this.A4.L(
A.iF.A7);this.DQ.G(AlW);this.DQ.L(A.iF.A7);this.U0.L(A.iF.Text);this.S8.G(AlW);this.
S8.L(A.iF.Text);this.Gp.L(A.iF.Text);this.J(this.Ahc,0);this.J(this.AP,0);this.J(
this.A4,0);this.J(this.DQ,0);this.J(this.U0,0);this.J(this.S8,0);this.J(this.Gp,
0);this.U0.Y(A.zW(A.eV.Au));this.S8.Y(A.zW(A.eV.Au));this.Gp.Y(A.zW(A.eV.Au));this.
Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Ahc._Done();this.AP._Done(
);this.A4._Done();this.DQ._Done();this.U0._Done();this.S8._Done();this.Gp._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.Ahc._ReInit(
);this.AP._ReInit();this.A4._ReInit();this.DQ._ReInit();this.U0._ReInit();this.S8.
_ReInit();this.Gp._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((
B=this.Ahc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.U0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::EvaluationLossesListItem"};C.Ag9={B2:null,Auz:A.jm,Rating:0,Ai:function(
Ae){C.H8.Ai.call(this,Ae);if(!!this.Rating){this.Background.L(A._GetAutoObject(A.
abk.Assessment).Pp(this.Rating));this.T.L(A._GetAutoObject(A.abk.Assessment).VJ(
this.Rating));}this.B2.L(this.T.AV);},Y:function(E){C.H8.Y.call(this,E);if((E===
A.zW(A.eV.OI))||(E===A.zW(A.eV.Au)))this.B2.Y(A.zW(A.eV.Au));else if((E===A.zW(A.
eV.K7))||(E===A.zW(A.eV.AB)))this.B2.Y(A.zW(A.eV.AB));else this.B2.Y(E);},JN:function(
E){if(this.Auz===E)return;this.Auz=E;this.B2.R(E);},Aii:function(E){if(this.Rating===
E)return;this.Rating=E;this.Al();},_Init:function(aArg){C.H8._Init.call(this,aArg
);A.abh.Text._Init.call(this.B2={I:this},0);this.__proto__=C.Ag9;this.B2.AW(0x34
);this.B2.G(Yi);this.B2.IZ(true);this.B2.A0(0x11);this.B2.L(A.iF.Text);this.B2.Aj(
true);this.J(this.B2,0);this.B2.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=
C.H8;this.B2._Done();C.H8._Done.call(this);},_ReInit:function(){C.H8._ReInit.call(
this);this.B2._ReInit();},_Mark:function(D){var B;C.H8._Mark.call(this,D);if((B=
this.B2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"
};C.Ay4={Nf:null,Rw:null,T:null,Alu:null,Alt:null,Ac7:null,Ac6:null,Dk:RP,A5w:A.
jm,A4u:A.jm,Z8:function(E){if(this.Nf===E)return;this.Nf=E;this.Rw.Z8(this.Nf);}
,U:function(E){if(this.Dk===E)return;this.Dk=E;this.T.R(E);},A4d:function(E){if(
this.A5w===E)return;this.A5w=E;this.Ac7.R(E);},A3V:function(E){if(this.A4u===E)return;
this.A4u=E;this.Ac6.R(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.
abw.Rw._Init.call(this.Rw={I:this},0);A.abh.Text._Init.call(this.T={I:this},0);A.
abh.AH._Init.call(this.Alu={I:this},0);A.abh.AH._Init.call(this.Alt={I:this},0);
A.abh.Text._Init.call(this.Ac7={I:this},0);A.abh.Text._Init.call(this.Ac6={I:this
},0);this.__proto__=C.Ay4;this.G(BkR);this.Rw.G(BkS);this.Rw.An(false);this.Rw.Bgh(
360);this.Rw.Bgp(0.5);this.T.AW(0x1D);this.T.G(Vl);this.T.KF(true);this.T.R(RP);
this.T.L(A.iF.Text);this.Alu.G(A5N);this.Alu.L(A.iF.Hy);this.Alt.G(A5O);this.Alt.
L(A.iF.FY);this.Ac7.AW(0x1D);this.Ac7.G(A5N);this.Ac7.L(A.iF.Text);this.Ac6.AW(0x1D
);this.Ac6.G(A5O);this.Ac6.L(A.iF.CP);this.J(this.Rw,0);this.J(this.T,0);this.J(
this.Alu,0);this.J(this.Alt,0);this.J(this.Ac7,0);this.J(this.Ac6,0);this.Rw.Bgr(
A.zW(A.abw.AO0));this.T.Y(A.zW(A.eV.AB));this.Ac7.Y(A.zW(A.eV.AB));this.Ac6.Y(A.
zW(A.eV.AB));},_Done:function(){this.__proto__=A.Core.O;this.Rw._Done();this.T._Done(
);this.Alu._Done();this.Alt._Done();this.Ac7._Done();this.Ac6._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Rw._ReInit();this.
T._ReInit();this.Alu._ReInit();this.Alt._ReInit();this.Ac7._ReInit();this.Ac6._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Nf)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Rw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Alu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Alt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ac6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.Aix={Background:null,Text:null,String:A.jm,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.abh.AH._Init.call(this.Background={I:this},0);C.CH._Init.call(this.Text={
I:this},0);this.__proto__=C.Aix;this.G(Vp);this.Background.AW(0x3F);this.Background.
G(Vp);this.Background.L(A.iF.BcG);this.Text.AW(0x3F);this.Text.G(Vp);this.Text.A0(
0x12);this.Text.L(A.iF.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.Y(A.zW(A.eV.Au));this.Text.Bz(A.zW(A.eV.AB));},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Text._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SemiTransparentTextOverlay"};C.P9={AiH:null,M1:null,CN:null,Aas:null
,Jh:null,TemperatureUnit:null,L0:null,O5:null,Q6:null,SX:null,KG:null,RD:null,X6:
null,X5:null,Q9:null,G9:null,Ahk:null,Init:function(aArg){this.TemperatureUnit.R(
A._GetAutoObject(A.abk.Temperature).Aju());this.SX.R(A._GetAutoObject(A.abk.Temperature
).Aju());this.Q9.W(!A._GetAutoObject(A.Device.Device).Akz);},Ai:function(Ae){C.Aw.
Ai.call(this,Ae);this.AlK();this.Auw();this.Aau();this.Aux();},JC:function(H){this.
UY(this);},CE:function(H){var B;C.Aw.CE.call(this,H);A.za([this,this.AGx],[B=A._GetAutoObject(
A.Device.Device),B.AAM,B.AEM],0);A.za([this,this.Aw9],[B=A._GetAutoObject(A.Device.
Device),B.AAQ,B.AEP],0);A.za([this,this.Aw9],[B=A._GetAutoObject(A.Device.Device
),B.ANZ,B.AUK],0);A.za([this,this.AXt],[B=A._GetAutoObject(A.Device.Device),B.AoC
,B.Aqf],0);A.za([this,this.AXp],[B=A._GetAutoObject(A.Device.Device),B.AAK,B.AEK
],0);A._GetAutoObject(A.Device.Device).AfJ();if(A._GetAutoObject(A.Device.Device
).Akz)A._GetAutoObject(A.Device.Device).AcP(true);A._GetAutoObject(A.Device.Device
).Auk();A.ow([this,this.AXp],this);A.ow([this,this.Aw9],this);A.ow([this,this.AXt
],this);},Fc:function(H){var B;A._GetAutoObject(A.Device.Device).AfJ();A._GetAutoObject(
A.Device.Device).Z$(false);A._GetAutoObject(A.Device.Device).AcY(false);A._GetAutoObject(
A.Device.Device).AcP(false);A.zn([this,this.AGx],[B=A._GetAutoObject(A.Device.Device
),B.AAM,B.AEM],0);A.zn([this,this.Aw9],[B=A._GetAutoObject(A.Device.Device),B.AAQ
,B.AEP],0);A.zn([this,this.Aw9],[B=A._GetAutoObject(A.Device.Device),B.ANZ,B.AUK
],0);A.zn([this,this.AXt],[B=A._GetAutoObject(A.Device.Device),B.AoC,B.Aqf],0);A.
zn([this,this.AXp],[B=A._GetAutoObject(A.Device.Device),B.AAK,B.AEK],0);},Aw9:function(
H){this.Al();},AlK:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.iF.CD);this.CN.L(A.iF.FY);this.Jh.L(this.CN.AV);this.
L0.L(this.CN.AV);this.TemperatureUnit.L(this.CN.AV);}break;default:{this.Background.
L(A.iF.CD);this.CN.L(A.iF.A6);this.Jh.L(A.iF.Text);this.L0.L(this.Jh.AV);this.TemperatureUnit.
L(this.Jh.AV);this.G9.L(A.iF.FY);}}},Auw:function(){this.AiH.An(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.Jh.R(A.z2(A.abg.Az7));this.CN.Ar(A.zW(A.abi.AsB));this.CN.Cc(0);this.
M1.Cc(0);}break;case 1:{this.AQo(A._GetAutoObject(A.Device.Device).JR,false);this.
CN.Ar(A.zW(A.abi.AsB));this.M1.Cc(0);}break;case 2:{this.Q6.R(A._GetAutoObject(A.
Device.Converter).AiG(A._GetAutoObject(A.Device.Device).ACb));this.AQo(A._GetAutoObject(
A.Device.Device).JR,false);this.CN.Ar(null);this.M1.Cc(1);this.Aas.W(true);this.
O5.W(true);this.Q6.W(true);this.SX.W(true);}break;case 3:{this.APB();this.AQo(A.
_GetAutoObject(A.Device.Device).JR,true);this.Aas.W(false);this.O5.W(false);this.
Q6.W(false);this.SX.W(false);}break;case 4:{this.Jh.R(A.z2(A.abg.BcT));this.L0.R(
A.z2(A.abv.Ah2));this.CN.Ar(A.zW(A.abi.AsD));this.CN.Cc(2);this.M1.Cc(0);}break;
default:A.aa8("%s%e",AD3,A._GetAutoObject(A.Device.Device).MeasureState);}},Aau:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).JR<=3240)||(A._GetAutoObject(A.Device.Device
).JR>=5460))this.N.Db(null);else this.N.Db(A.zW(A.abi.Acl));this.N.Cm(null);}break;
case 3:break;case 4:break;default:;}},ApF:function(H){A._GetAutoObject(C.A1).Fl(
);},UY:function(H){},AUV:function(s){this.UY(s);},AiB:function(H){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:this.Btj(this);break;case 3:break;case
4:break;default:;}},AUU:function(s){this.AiB(s);},AQo:function(Amf,Bsc){if(Bsc)this.
KG.L(A.iF.Bg);else this.KG.L(A.iF.FY);if(Amf<=3240){this.L0.W(false);this.TemperatureUnit.
W(false);this.KG.W(true);this.KG.R(A.z2(A.abv.AQc));}else if(Amf>=5460){this.L0.
W(false);this.TemperatureUnit.W(false);this.KG.W(true);this.KG.R(A.z2(A.abv.BiF)
);}else{this.L0.W(true);this.TemperatureUnit.W(true);this.KG.W(false);this.L0.R(
A._GetAutoObject(A.Device.Converter).AiG(Amf));}},Aux:function(){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(A.Device.Device
).JR<=3240)||(A._GetAutoObject(A.Device.Device).JR>=5460))this.Jh.R(A.z2(A.abg.Az7
));else this.Jh.R(A.z2(A.abg.Bjc));break;case 3:break;case 4:break;default:;}},Auy:
function(){},BiX:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.X6.An(true);break;case 4:this.X5.An(true);break;default:{this.X6.An(
false);this.X5.An(false);A._GetAutoObject(A.Device.Device).AcY(false);}}},AGx:function(
H){this.Al();this.Auy();this.BiX();this.BiV();},AXt:function(H){if(A._GetAutoObject(
A.Device.Device).AkA){this.Q9.L(A.iF.Hy);this.Q9.Cc(1);}else{this.Q9.L(A.iF.Bg);
this.Q9.Cc(0);}},Btj:function(H){if(!A._GetAutoObject(A.Device.Device).Akz)A._GetAutoObject(
A.Device.Device).AcP(!A._GetAutoObject(A.Device.Device).AkA);},BiV:function(){if(
A._GetAutoObject(A.Device.Device).Akz){this.Q9.W(false);if(A._GetAutoObject(A.Device.
Device).MeasureState===1)A._GetAutoObject(A.Device.Device).AcP(true);else A._GetAutoObject(
A.Device.Device).AcP(false);}else if(A._GetAutoObject(A.Device.Device).MeasureState===
1)this.Q9.W(true);else this.Q9.W(false);},AGz:function(H){this.CE(this);},APB:function(
){A.aa8("%s",A5L);},AXp:function(H){if(A._GetAutoObject(A.Device.Device).G9){this.
Jh.G(BkT);this.L0.G(BkU);this.TemperatureUnit.G(BkV);}else{this.Jh.G(BkW);this.L0.
G(BkX);this.TemperatureUnit.G(BkY);}},_Init:function(aArg){C.Aw._Init.call(this,
aArg);A.abm.FC._Init.call(this.AiH={I:this},0);A.abh.Am._Init.call(this.M1={I:this
},0);A.abh.Am._Init.call(this.CN={I:this},0);A.abh.Am._Init.call(this.Aas={I:this
},0);A.abh.Text._Init.call(this.Jh={I:this},0);A.abh.Text._Init.call(this.TemperatureUnit={
I:this},0);A.abh.Text._Init.call(this.L0={I:this},0);A.abh.Text._Init.call(this.
O5={I:this},0);A.abh.Text._Init.call(this.Q6={I:this},0);A.abh.Text._Init.call(this.
SX={I:this},0);C.CH._Init.call(this.KG={I:this},0);A.Device.Y5._Init.call(this.RD={
I:this},0);A.Device.Y5._Init.call(this.X6={I:this},0);A.Device.Y5._Init.call(this.
X5={I:this},0);A.abh.Am._Init.call(this.Q9={I:this},0);C.CH._Init.call(this.G9={
I:this},0);A.abm.Y5._Init.call(this.Ahk={I:this},0);this.__proto__=C.P9;var B;this.
N.W(true);this.AiH.FI(1000);this.AiH.BW=2;this.M1.G(BkZ);this.M1.L(A.iF.CP);this.
CN.G(Bk0);this.CN.L(A.iF.A6);this.CN.Cc(0);this.CN.W(true);this.Aas.G(Bk1);this.
Aas.L(A.iF.Text);this.Aas.W(false);this.Jh.KF(true);this.Jh.R(A.z2(A.abg.Az7));this.
Jh.L(A.iF.Text);this.TemperatureUnit.A0(0x9);this.TemperatureUnit.L(A.iF.Text);this.
L0.A0(0x14);this.L0.R(A.z2(A.abv.Ah2));this.L0.L(A.iF.Text);this.O5.G(Bk2);this.
O5.R(A.z2(A.abg.O5));this.O5.L(A.iF.Text);this.O5.W(false);this.Q6.G(Bk3);this.Q6.
A0(0x14);this.Q6.R(Bk4);this.Q6.L(A.iF.Text);this.Q6.W(false);this.SX.G(Bk5);this.
SX.R(Bk6);this.SX.L(A.iF.Text);this.SX.W(false);this.KG.G(Bk7);this.KG.R(A.z2(A.
abv.AQc));this.KG.A0(0x12);this.KG.L(A.iF.FY);this.RD.BW=false;this.RD.Ch=true;this.
RD.IF(1);this.RD.FI(4000);this.RD.Z6(0);this.X6.BW=false;this.X6.Ch=true;this.X6.
IF(2);this.X6.FI(400);this.X6.Z6(200);this.X5.BW=false;this.X5.Ch=true;this.X5.IF(
3);this.X5.FI(500);this.X5.Z6(250);this.Q9.G(Bk8);this.G9.G(Bk9);this.G9.W(A._GetAutoObject(
A.Device.Device).G9);this.G9.R(A.z2(A.abg.G9));this.G9.A0(0x12);this.G9.L(A.iF.FY
);this.Ahk.An(A._GetAutoObject(A.Device.Device).G9);this.Ahk.FI(500);this.Ahk.Z6(
1000);this.J(this.M1,0);this.J(this.CN,0);this.J(this.Aas,0);this.J(this.Jh,0);this.
J(this.TemperatureUnit,0);this.J(this.L0,0);this.J(this.O5,0);this.J(this.Q6,0);
this.J(this.SX,0);this.J(this.KG,0);this.J(this.Q9,0);this.J(this.G9,0);this.N.CA=[
this,this.ApF];this.N.Cg=[this,this.AUU];this.N.Cl=[this,this.AUV];this.N.C8(A.zW(
A.abi.Ack));this.AiH.Q=[B=this.CN,B.ANQ,B.Cc];this.M1.Ar(A.zW(A.abi.M1));this.CN.
Ar(A.zW(A.abi.AsB));this.Aas.Ar(A.zW(A.abi.AMn));this.Jh.Y(A.zW(A.eV.Au));this.TemperatureUnit.
Y(A.zW(A.eV.Au));this.L0.Y(A.zW(A.eV.Ab$));this.O5.Y(A.zW(A.eV.Au));this.Q6.Y(A.
zW(A.eV.Gg));this.SX.Y(A.zW(A.eV.Gg));this.KG.Y(A.zW(A.eV.Ab$));this.KG.Bz(A.zW(
A.eV.Gg));this.KG.C7(A.zW(A.eV.Au));this.RD.Q=[B=A._GetAutoObject(A.Device.Device
),B.A2T,B.A6A];this.X6.Q=[B=A._GetAutoObject(A.Device.Device),B.AAR,B.AEQ];this.
X5.Q=[B=A._GetAutoObject(A.Device.Device),B.AAR,B.AEQ];this.Q9.Ar(A.zW(A.abi.An2
));this.G9.Y(A.zW(A.eV.Gg));this.G9.Bz(A.zW(A.eV.OI));this.G9.C7(A.zW(A.eV.K7));
this.Ahk.Q=[B=this.G9,B.Fe,B.W];this.Init(aArg);},_Done:function(){this.__proto__=
C.Aw;this.AiH._Done();this.M1._Done();this.CN._Done();this.Aas._Done();this.Jh._Done(
);this.TemperatureUnit._Done();this.L0._Done();this.O5._Done();this.Q6._Done();this.
SX._Done();this.KG._Done();this.RD._Done();this.X6._Done();this.X5._Done();this.
Q9._Done();this.G9._Done();this.Ahk._Done();C.Aw._Done.call(this);},_ReInit:function(
){C.Aw._ReInit.call(this);this.AiH._ReInit();this.M1._ReInit();this.CN._ReInit();
this.Aas._ReInit();this.Jh._ReInit();this.TemperatureUnit._ReInit();this.L0._ReInit(
);this.O5._ReInit();this.Q6._ReInit();this.SX._ReInit();this.KG._ReInit();this.RD.
_ReInit();this.X6._ReInit();this.X5._ReInit();this.Q9._ReInit();this.G9._ReInit(
);this.Ahk._ReInit();this.Jh.R(A.z2(A.abg.Az7));this.L0.R(A.z2(A.abv.Ah2));this.
O5.R(A.z2(A.abg.O5));this.KG.R(A.z2(A.abv.AQc));this.G9.R(A.z2(A.abg.G9));this.Jh.
Y(A.zW(A.eV.Au));this.TemperatureUnit.Y(A.zW(A.eV.Au));this.L0.Y(A.zW(A.eV.Ab$));
this.O5.Y(A.zW(A.eV.Au));this.Q6.Y(A.zW(A.eV.Gg));this.SX.Y(A.zW(A.eV.Gg));this.
KG.Y(A.zW(A.eV.Ab$));this.KG.Bz(A.zW(A.eV.Gg));this.KG.C7(A.zW(A.eV.Au));this.G9.
Y(A.zW(A.eV.Gg));this.G9.Bz(A.zW(A.eV.OI));this.G9.C7(A.zW(A.eV.K7));},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.AiH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.M1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aas)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jh)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
L0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Q6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Q9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahk)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::TemperatureScreen"};C.AP4={Aau:function(){C.P9.Aau.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:break;
case 3:{this.N.Cm(null);this.N.Db(A.zW(A.abi.Aoh));}break;case 4:{this.N.Cm(null
);this.N.Db(A.zW(A.abi.Aoh));}break;default:;}},UY:function(H){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(A.Device.Device
).JR>3240)&&(A._GetAutoObject(A.Device.Device).JR<5460)){A._GetAutoObject(A.Device.
Device).AfJ();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}break;case
3:case 4:this.AGz(this);break;default:;}},Aux:function(){C.P9.Aux.call(this);switch(
A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:break;case 3:this.
Jh.R(A.z2(A.abg.BcU));break;case 4:break;default:;}},Auy:function(){C.P9.Auy.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).AcW(16711680);this.RD.An(true);}break;default:this.RD.An(false);
}},APB:function(){this.CN.Ar(A.zW(A.abi.AsD));this.CN.Cc(0);this.M1.Cc(0);},_Init:
function(aArg){C.P9._Init.call(this,aArg);this.__proto__=C.AP4;this.Dt(C.AKK);},
_className:"Application::TemperatureMeasurementScreen"};C.AKP={CV:null,Ig:null,M4:
null,AP:null,Ae0:null,A4:null,CW:function(E){C.BU.CW.call(this,E);this.CV.L(E);this.
Ig.L(E);this.M4.L(E);this.Ae0.L(E);},_Init:function(aArg){C.BU._Init.call(this,aArg
);A.abh.Am._Init.call(this.CV={I:this},0);A.abh.Am._Init.call(this.Ig={I:this},0
);A.abh.Am._Init.call(this.M4={I:this},0);A.abh.DU._Init.call(this.AP={I:this},0
);A.abh.Am._Init.call(this.Ae0={I:this},0);A.abh.DU._Init.call(this.A4={I:this},
0);this.__proto__=C.AKP;this.CV.G(AUh);this.Ig.G(ADB);this.M4.G(ADE);this.AP.D$(
A5P);this.AP.Eg(A5Q);this.AP.L(A.iF.A7);this.Ae0.G(Bk_);this.Ae0.L(A.iF.CP);this.
A4.D$(Bk$);this.A4.Eg(Bla);this.A4.L(A.iF.A7);this.J(this.CV,0);this.J(this.Ig,0
);this.J(this.M4,0);this.J(this.AP,0);this.J(this.Ae0,0);this.J(this.A4,0);this.
CV.Ar(A.zW(A.abi.AzT));this.Ig.Ar(A.zW(A.abi.Acm));this.M4.Ar(A.zW(A.abi.Asw));this.
Ae0.Ar(A.zW(A.abi.ALT));},_Done:function(){this.__proto__=C.BU;this.CV._Done();this.
Ig._Done();this.M4._Done();this.AP._Done();this.Ae0._Done();this.A4._Done();C.BU.
_Done.call(this);},_ReInit:function(){C.BU._ReInit.call(this);this.CV._ReInit();
this.Ig._ReInit();this.M4._ReInit();this.AP._ReInit();this.Ae0._ReInit();this.A4.
_ReInit();},_Mark:function(D){var B;C.BU._Mark.call(this,D);if((B=this.CV)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ig)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
M4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ae0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.DL={Ek:null,CL:null,ACv:
0,AJn:0,Init:function(aArg){A.y_([this,this.AG$],A._GetAutoObject(A.Device.Device
).Aq,0);A.ow([this,this.AG$],this);},AG$:function(H){var Z=this.ACv;if(Z<0){this.
CL.GZ();this.CL.DO(this.AJn);return;}this.CL.DO(A._GetAutoObject(A.Device.Device
).Aq.AkF(Z,14));this.CL.AA_(A._GetAutoObject(A.Device.Device).Aq.IC(Z,13));this.
CL.AcQ(A._GetAutoObject(A.Device.Device).Aq.Hq(Z,8));this.CL.ST(A._GetAutoObject(
A.Device.Device).Aq.Hq(Z,11));this.CL.AcS(A._GetAutoObject(A.Device.Device).Aq.Hq(
Z,12));this.CL.AcU(A._GetAutoObject(A.Device.Device).Aq.Cp(Z,5));},A3X:function(
E){if(this.ACv===E)return;this.ACv=E;A.ow([this,this.AG$],this);},A3t:function(E
){if(this.AJn===E)return;this.AJn=E;A.ow([this,this.AG$],this);},A2J:function(){
return this.ACv;},_Init:function(aArg){C.Ef._Init.call(this,aArg);C.CH._Init.call(
this.Ek={I:this},0);C.CL._Init.call(this.CL={I:this},0);this.__proto__=C.DL;this.
Ek.G(Blb);this.Ek.R(A.z2(A.abg.Hs));this.Ek.A0(0x11);this.Ek.L(A.iF.Text);this.CL.
G(A5R);this.J(this.Ek,0);this.J(this.CL,0);this.Ek.Y(A.zW(A.eV.Au));this.Ek.Bz(A.
zW(A.eV.AB));this.Ek.C7(A.zW(A.eV.Cq));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ef;this.Ek._Done();this.CL._Done();C.Ef._Done.call(this);},_ReInit:function(){
C.Ef._ReInit.call(this);this.Ek._ReInit();this.CL._ReInit();this.Ek.R(A.z2(A.abg.
Hs));this.Ek.Y(A.zW(A.eV.Au));this.Ek.Bz(A.zW(A.eV.AB));this.Ek.C7(A.zW(A.eV.Cq)
);},_Mark:function(D){var B;C.Ef._Mark.call(this,D);if((B=this.Ek)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineAnimalId"
};C.OL={AeI:null,Text:null,Adb:null,CW:function(E){C.BU.CW.call(this,E);this.AeI.
L(E);this.Text.L(E);this.Adb.L(E);},_Init:function(aArg){C.BU._Init.call(this,aArg
);A.abh.Am._Init.call(this.AeI={I:this},0);C.CH._Init.call(this.Text={I:this},0);
A.abh.Am._Init.call(this.Adb={I:this},0);this.__proto__=C.OL;this.AeI.G(Blc);this.
AeI.L(A.iF.Text);this.Text.G(ADO);this.Text.An(false);this.Text.R(A.jm);this.Text.
L(A.iF.Text);this.Adb.G(Bld);this.Adb.L(A.iF.Text);this.J(this.AeI,0);this.J(this.
Text,0);this.J(this.Adb,0);this.AeI.Ar(A.zW(A.abi.AKR));this.Text.Y(A.zW(A.eV.OI
));this.Text.Bz(A.zW(A.eV.K7));},_Done:function(){this.__proto__=C.BU;this.AeI._Done(
);this.Text._Done();this.Adb._Done();C.BU._Done.call(this);},_ReInit:function(){
C.BU._ReInit.call(this);this.AeI._ReInit();this.Text._ReInit();this.Adb._ReInit(
);},_Mark:function(D){var B;C.BU._Mark.call(this,D);if((B=this.AeI)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adb).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AKI={_Init:
function(aArg){C.OL._Init.call(this,aArg);this.__proto__=C.AKI;this.Text.R(A.z2(
A.abg.Device));},_className:"Application::HeaderDeviceMenu"};C.AKK={_Init:function(
aArg){C.OL._Init.call(this,aArg);this.__proto__=C.AKK;this.Lg(this.Adb,-2);this.
Adb.Ar(A.zW(A.abi.ZA));},_className:"Application::HeaderDeviceTemperature"};C.Wz={
Ai:function(Ae){C.AnY.Ai.call(this,Ae);this.U(A.z2(A.abg.BiG)+A.z2(A.abg.Colon));
},B7:function(Z){var B;if(!this.AZ)return;this.Ajm=0;this.AqC=0;this.VV=0;if(!!this.
AZ){var P;for(P=0;P<this.AZ.Cd();P++){this.Ajm+=this.AZ.Cp(P,1);this.AqC+=this.AZ.
Cp(P,2);}if(this.Ajm>0)this.VV=(this.AqC/this.Ajm)*100;this.Al();}},_Init:function(
aArg){C.AnY._Init.call(this,aArg);this.__proto__=C.Wz;this.AP.W(false);this.A4.W(
false);this.DQ.W(false);this.T.Y(A.zW(A.eV.OI));this.T.Bz(A.zW(A.eV.K7));},_className:
"Application::EvaluationLossesSumItem"};C.A0D={Af:null,AY:0,_Init:function(aArg){
this.__proto__=C.A0D;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::FloatRecord"};C.A0E={Kf:null,L$:null,AM:0,Ws:function(
){this.Kf=null;this.L$=null;this.AM=0;},NM:function(A2){var Gx;Gx=A._NewObject(C.
A0D,0);Gx.AY=A2;if(!this.Kf){this.Kf=Gx;this.L$=Gx;this.AM=1;}else{this.L$.Af=Gx;
this.L$=Gx;this.AM=this.AM+1;}},AkH:function(){var B;var QD=0;var Nz=this.Kf;while(
!!Nz){QD+=Nz.AY;Nz=Nz.Af;}return QD;},Ahv:function(){if(!this.AM)return 0;return this.
AkH()/this.AM;},An7:function(){var B;if(!this.AM)return 0;var AVP=this.Ahv();var
Aa3=0;var Nz=this.Kf;while(!!Nz){Aa3+=Math.pow(Nz.AY-AVP,2);Nz=Nz.Af;}Aa3/=this.
AM;Aa3=Math.sqrt(Aa3);return Aa3;},_Init:function(aArg){this.__proto__=C.A0E;A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Kf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.L$)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::FloatRecordList"};C.Aeu={Background:
null,T:null,J_:0,SV:5,GW:false,Ai:function(Ae){C.GM.Ai.call(this,Ae);if(this.GW)
this.Background.L(A.iF.Bg);else this.Background.L(A.iF.CD);},U:function(E){C.GM.
U.call(this,E);this.T.R(E);},Bk:function(E){if(this.GW===E)return;this.GW=E;this.
Al();},JM:function(E){if(this.SV===E)return;this.SV=E;this.T.G([].concat(E,this.
T.M.slice(1,4)));},_Init:function(aArg){C.GM._Init.call(this,aArg);A.abh.AH._Init.
call(this.Background={I:this},0);C.CH._Init.call(this.T={I:this},0);this.__proto__=
C.Aeu;this.G(BI);this.Background.AW(0x3F);this.Background.G(BI);this.T.AW(0x3F);
this.T.G(AEx);this.T.A0(0x11);this.T.L(A.iF.Text);this.J_=A.iF.Text;this.J(this.
Background,0);this.J(this.T,0);this.T.Y(A.zW(A.eV.OI));this.T.Bz(A.zW(A.eV.K7));
this.T.C7(A.zW(A.eV.Cq));},_Done:function(){this.__proto__=C.GM;this.Background.
_Done();this.T._Done();C.GM._Done.call(this);},_ReInit:function(){C.GM._ReInit.call(
this);this.Background._ReInit();this.T._ReInit();},_Mark:function(D){var B;C.GM.
_Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
T)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadingItem"};
C.AJD={Xv:function(H){this.Aer();this.DX(A.z2(A.abg.AQb),[this,this.AOP],5);this.
DX(A.z2(A.abg.AP$),[this,this.AOO],7);this.DX(A.z2(A.abg.Calving),[this,this.BeP
],11);this.DX(A.z2(A.abg.AfK),[this,this.Aig],2);this.DX(A.z2(A.abg.AbC),[this,this.
AoN],1);this.DX(A.z2(A.abg.Aem),[this,this.Ah_],0);A._GetAutoObject(C.Cy).IS();A.
_GetAutoObject(C.Cy).V1(A.z2(A.abg.Aen)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.
Device).Cn(6);},DS:function(H){},Acd:function(){return C.AIO;},Ace:function(){return C.
ALa;},Ry:function(H){A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(A.
Device.Helper).Azf());},HX:function(H){C.Ge.HX.call(this,H);if(this.AhY()===false
){this.N.Cm(A.zW(A.abi.ALB));this.N.Cg=[this,this.A0b];this.N.Fr(A.jm);}this.N.O3(
false);this.N.O4(false);},Ad$:function(){A._GetAutoObject(C.A1).BX(70);},Ad_:function(
){A._GetAutoObject(C.A1).BX(71);},_Init:function(aArg){C.Ge._Init.call(this,aArg
);this.__proto__=C.AJD;var B;this.Dt(C.AKL);this.Et(A.z2(A.abg.A1V));this.Afq([B=
A._GetAutoObject(A.Device.Device),B.A2m,B.A6m]);},_className:"Application::DryCowListScreen"
};C.AJC={_Init:function(aArg){C.Iy._Init.call(this,aArg);this.__proto__=C.AJC;this.
Ky.An(false);this.Ky.Aj(false);this.Ky.W(false);this.IT.An(false);this.IT.Aj(false
);this.IT.W(false);},_className:"Application::DryCowListFilterScreen"};C.AJB={_Init:
function(aArg){C.H9._Init.call(this,aArg);this.__proto__=C.AJB;this.N.Cb(A.z2(A.
abg.AZu));},_ReInit:function(){C.H9._ReInit.call(this);this.N.Cb(A.z2(A.abg.AZu)
);},_className:"Application::DryCowListActionsScreen"};C.AKL={Ez:function(H){C.JI.
Ez.call(this,H);this.CV.Ar(A._GetAutoObject(A.Device.Converter).Aey(9));},_Init:
function(aArg){C.JI._Init.call(this,aArg);this.__proto__=C.AKL;},_className:"Application::HeaderDryCowListFilter"
};C.AnZ={Filter:null,AC2:A.jm,D8:0,AB7:1,Operator:1,Bh:function(aSize){C.AlB.Bh.
call(this,aSize);this.T.G([10,0,this.AX.M[0]-10,aSize[1]]);},Bo:function(E){if(A.
z_(this.Filter,E))return;if(!!this.Filter)A.zn([this,this.Lt],this.Filter,0);this.
Filter=E;if(!!E)A.za([this,this.Lt],E,0);A.ow([this,this.Lt],this);},Lt:function(
H){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.R_((F=this.Filter
,F[1].call(F[0])).DG(this.D8,this.Operator));else this.R_(null);},Mv:function(E){
if(this.D8===E)return;this.D8=E;A.ow([this,this.Lt],this);},R_:function(AK){if(!
!AK){var AWr;if(this.AB7!==1)AWr=this.AB7;else AWr=AK.Operator;this.U((this.AC2+
Cv)+A._GetAutoObject(A.Device.Converter).A0z(AWr));this.XC(false);}else{this.U(this.
AC2);this.XC(true);}},N1:function(E){if(this.Operator===E)return;this.Operator=E;
A.ow([this,this.Lt],this);},Aik:function(E){if(this.AC2===E)return;this.AC2=E;A.
ow([this,this.Lt],this);},A3M:function(E){if(this.AB7===E)return;this.AB7=E;A.ow([
this,this.Lt],this);},_Init:function(aArg){C.AlB._Init.call(this,aArg);this.__proto__=
C.AnZ;this.G(Ap4);this.AX.G(Ble);},_Mark:function(D){var B;C.AlB._Mark.call(this
,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.Ahp={Ae2:null,Ai:function(Ae){C.PB.Ai.call(this,Ae);this.Ae2.L(this.T.AV);},
R_:function(AK){if(!!AK){this.Hv.Cc(1);this.XC(true);}else{this.Hv.Cc(0);this.XC(
false);}},_Init:function(aArg){C.PB._Init.call(this,aArg);A.abh.Am._Init.call(this.
Ae2={I:this},0);this.__proto__=C.Ahp;this.IG=40;this.Ae2.G(Blf);this.Ae2.L(A.iF.
Text);this.J(this.Ae2,0);this.Ae2.Ar(A.zW(A.abi.ALp));},_Done:function(){this.__proto__=
C.PB;this.Ae2._Done();C.PB._Done.call(this);},_ReInit:function(){C.PB._ReInit.call(
this);this.Ae2._ReInit();},_Mark:function(D){var B;C.PB._Mark.call(this,D);if((B=
this.Ae2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ExistsFilterItem"
};C.Ayp={Q:null,C3:function(){this.U(A._GetAutoObject(A.Device.Helper).AkG(this.
TableId,this.D8));},R_:function(AK){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])
))this.Hv.Cc(1);else this.Hv.Cc(0);},Oo:function(H){A.ow([this,this.Lt],this);},
AF:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.Oo],this.Q,0
);this.Q=E;if(!!E)A.za([this,this.Oo],E,0);if(!!E)A.ow([this,this.Oo],this);},_Init:
function(aArg){C.PB._Init.call(this,aArg);this.__proto__=C.Ayp;},_ReInit:function(
){C.PB._ReInit.call(this);this.C3();},_Mark:function(D){var B;C.PB._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"
};C.ALa={W4:null,IE:null,_Init:function(aArg){C.DL._Init.call(this,aArg);A.abh.Text.
_Init.call(this.W4={I:this},0);A.abh.Text._Init.call(this.IE={I:this},0);this.__proto__=
C.ALa;this.A3t(1);this.W4.G(Blg);this.W4.KF(true);this.W4.R(A.z2(A.abg.AAg));this.
W4.L(A.iF.Text);this.IE.G(RO);this.IE.R(((A.z2(A.abg.NN)+A5S)+A.z2(A.abg.A5v))+Nr
);this.IE.L(A.iF.Text);this.J(this.W4,0);this.J(this.IE,0);this.W4.Y(A.zW(A.eV.AB
));this.IE.Y(A.zW(A.eV.Cq));},_Done:function(){this.__proto__=C.DL;this.W4._Done(
);this.IE._Done();C.DL._Done.call(this);},_ReInit:function(){C.DL._ReInit.call(this
);this.W4._ReInit();this.IE._ReInit();this.W4.R(A.z2(A.abg.AAg));this.IE.R(((A.z2(
A.abg.NN)+A5S)+A.z2(A.abg.A5v))+Nr);this.W4.Y(A.zW(A.eV.AB));this.IE.Y(A.zW(A.eV.
Cq));},_Mark:function(D){var B;C.DL._Mark.call(this,D);if((B=this.W4)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.IE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdDryCow"
};C.AIO={LC:null,Lc:null,Aes:null,AP:null,A4:null,VB:0,Init:function(aArg){},Bh:
function(aSize){C.A$.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.
M,aSize));this.T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.LC.G(this.T.M);this.
AP.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);this.Lc.G([this.T.M[2],0,((aSize[
0]*58)/100)|0,aSize[1]]);this.A4.G([this.Lc.M[2]-1,0,this.Lc.M[2]+1,aSize[1]]);this.
Aes.G([this.Lc.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae
);this.Lc.L(this.T.AV);this.Aes.L(this.T.AV);if(!!this.VB&&(this.VB!==5)){this.LC.
L(A._GetAutoObject(A.abk.Assessment).Pp(this.VB));this.T.L(A._GetAutoObject(A.abk.
Assessment).VJ(this.VB));}else this.LC.L(this.Background.AV);},B7:function(Z){if(
!this.AZ)return;this.Hl=Z;if(!!this.AZ){var Ow=this.AZ.Cp(Z,1);var AWX=this.AZ.Cp(
Z,29);var Yt=this.AZ.Hr(Z,4);var K0=this.AZ.IC(Z,13);var Ajp=this.AZ.IC(Z,17);var
Ajy=this.AZ.Hq(Z,11);this.VB=A._GetAutoObject(A.Device.Helper).AH2(K0,Ajy,Ajp);this.
U(Ow.toFixed());this.Lc.R(AWX.toFixed());this.Aes.R(A._GetAutoObject(A.abk.K5).Azd(
Yt,A._GetAutoObject(A.Device.Helper).DN(),Blh));this.Al();}},_Init:function(aArg
){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(this.LC={I:this},0);A.abh.Text.
_Init.call(this.Lc={I:this},0);A.abh.Text._Init.call(this.Aes={I:this},0);A.abh.
AH._Init.call(this.AP={I:this},0);A.abh.AH._Init.call(this.A4={I:this},0);this.__proto__=
C.AIO;this.LC.G(Ap$);this.AP.L(A.iF.A7);this.A4.L(A.iF.A7);this.J(this.LC,0);this.
J(this.Lc,0);this.J(this.Aes,0);this.J(this.AP,0);this.J(this.A4,0);this.Lc.Y(A.
zW(A.eV.Au));this.Aes.Y(A.zW(A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.LC._Done();this.Lc._Done();this.Aes._Done();this.AP._Done();this.A4._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.LC._ReInit(
);this.Lc._ReInit();this.Aes._ReInit();this.AP._ReInit();this.A4._ReInit();},_Mark:
function(D){var B;C.A$._Mark.call(this,D);if((B=this.LC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aes)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"};C.QK={AFO:
0,A8Q:false,Ai:function(Ae){C.E$.Ai.call(this,Ae);if(this.A8Q){this.U(A.z2(A.abg.
AJz));this.JN(A.jm);}else{this.U(A.z2(A.abg.Bcw));if(this.AFO>0)this.JN(this.AFO.
toFixed());else this.JN(JU);}},B7:function(H){C.E$.B7.call(this,H);this.A8Q=A._GetAutoObject(
A.Device.Helper).V.IsDry;var Ajj=A._GetAutoObject(A.Device.Helper).V.DateOfLastCalving;
if(Ajj>0)this.AFO=A._GetAutoObject(A.Device.Helper).L6(Ajj,A._GetAutoObject(A.Device.
Helper).DN());else this.AFO=0;this.Al();},_Init:function(aArg){C.E$._Init.call(this
,aArg);this.__proto__=C.QK;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AH6={AYC:A.jm,Ai:function(Ae){C.E$.Ai.call(this,Ae);this.U(A.z2(A.abg.NN));this.
JN(this.AYC);},B7:function(H){C.E$.B7.call(this,H);var Yt=A._GetAutoObject(A.Device.
Helper).V.DateOfBirth;this.AYC=A._GetAutoObject(A.abk.K5).Azd(Yt,A._GetAutoObject(
A.Device.Helper).DN(),((((Bli+A.z2(A.abg.A$O))+Blj)+A.z2(A.abg.A$N))+Blk)+A.z2(A.
abg.AHH));this.Al();},_Init:function(aArg){C.E$._Init.call(this,aArg);this.__proto__=
C.AH6;this.AYC=A.z2(A.abg.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.AJt={SO:null,Xi:null,UG:null,UH:null,Rj:null,Init:function(aArg){this.A8(this.
SO);A.ow([this,this.Dz],this);},Aw4:function(H){A._GetAutoObject(A.Device.Device
).Cn(1);},_Init:function(aArg){C.GN._Init.call(this,aArg);C.Rk._Init.call(this.SO={
I:this},0);C.Rk._Init.call(this.Xi={I:this},0);C.Rk._Init.call(this.UG={I:this},
0);C.ZS._Init.call(this.UH={I:this},0);C.AcC._Init.call(this.Rj={I:this},0);this.
__proto__=C.AJt;var B;this.Dt(C.AKI);this.SO.G(Kc);this.SO.Aj(true);this.SO.U(A.
z2(A.abg.AyO));this.SO.Bk(false);this.SO.Rt(94);this.Xi.G(RQ);this.Xi.Aj(true);this.
Xi.U(A.abg.Info);this.Xi.Bk(true);this.Xi.Rt(93);this.UG.G(Yf);this.UG.Aj(true);
this.UG.U(A.z2(A.abg.ACy));this.UG.Bk(false);this.UG.Rt(73);this.UH.G(AiW);this.
UH.Aj(true);this.UH.U(A.z2(A.abg.TempMeasurement));this.UH.Bk(true);this.UH.Rt(68
);this.Rj.G(AlY);this.Rj.Aj(true);this.Rj.U(A.z2(A.abg.Ay$));this.Rj.Bk(false);this.
J(this.SO,0);this.J(this.Xi,0);this.J(this.UG,0);this.J(this.UH,0);this.J(this.Rj
,0);this.N.Cg=[this,this.Aw4];this.N.Cm(A.zW(A.abi.AzY));this.SO.AR=[B=this.SO,B.
Rv];this.Xi.AR=[B=this.Xi,B.Rv];this.UG.AR=[B=this.UG,B.Rv];this.UH.AR=[B=this.UH
,B.Rv];this.Rj.AR=null;this.Rj.Afl([B=this.Rj,B.Avu]);this.Rj.Hb([this,this.Es,this.
HU]);this.Rj.A3j([B=A._GetAutoObject(A.Device.Device),B.AoC,B.Aqf]);this.Init(aArg
);},_Done:function(){this.__proto__=C.GN;this.SO._Done();this.Xi._Done();this.UG.
_Done();this.UH._Done();this.Rj._Done();C.GN._Done.call(this);},_ReInit:function(
){C.GN._ReInit.call(this);this.SO._ReInit();this.Xi._ReInit();this.UG._ReInit();
this.UH._ReInit();this.Rj._ReInit();this.SO.U(A.z2(A.abg.AyO));this.UG.U(A.z2(A.
abg.ACy));this.UH.U(A.z2(A.abg.TempMeasurement));this.Rj.U(A.z2(A.abg.Ay$));},_Mark:
function(D){var B;C.GN._Mark.call(this,D);if((B=this.SO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Xi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.UH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rj)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"};C.AJu={SN:null
,ZP:null,UD:null,Init:function(aArg){this.A8(this.SN);},Brs:function(H){var As=(
A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).UpdateFirmware();},Bdn:function(H){if(A._GetAutoObject(A.Device.
Device).Y4<=20)A._GetAutoObject(A.Device.Device).A_(76,true,Bll,0,null);else A._GetAutoObject(
A.Device.Device).A_(39,true,A.jm,0,[this,this.Brs]);},_Init:function(aArg){C.GN.
_Init.call(this,aArg);C.Rk._Init.call(this.SN={I:this},0);C.B9._Init.call(this.ZP={
I:this},0);C.ZS._Init.call(this.UD={I:this},0);this.__proto__=C.AJu;var B;this.Dt(
C.AKJ);this.SN.G(Kc);this.SN.Aj(true);this.SN.U(A.z2(A.abg.AZK));this.SN.Bk(false
);this.SN.Rt(74);this.ZP.G(RQ);this.ZP.Aj(true);this.ZP.U(A.z2(A.abg.A0B));this.
ZP.Bk(true);this.UD.G(Yf);this.UD.Aj(true);this.UD.U(A.z2(A.abg.RangeTest));this.
UD.Bk(false);this.UD.Rt(15);this.J(this.SN,0);this.J(this.ZP,0);this.J(this.UD,0
);this.SN.AR=[B=this.SN,B.Rv];this.ZP.AR=[this,this.Bdn];this.UD.AR=[B=this.UD,B.
Rv];this.Init(aArg);},_Done:function(){this.__proto__=C.GN;this.SN._Done();this.
ZP._Done();this.UD._Done();C.GN._Done.call(this);},_ReInit:function(){C.GN._ReInit.
call(this);this.SN._ReInit();this.ZP._ReInit();this.UD._ReInit();this.SN.U(A.z2(
A.abg.AZK));this.ZP.U(A.z2(A.abg.A0B));this.UD.U(A.z2(A.abg.RangeTest));},_Mark:
function(D){var B;C.GN._Mark.call(this,D);if((B=this.SN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ZP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UD)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceServiceScreen"};C.AKJ={_Init:function(
aArg){C.OL._Init.call(this,aArg);this.__proto__=C.AKJ;this.Text.R(A.z2(A.abg.ACy
));},_ReInit:function(){C.OL._ReInit.call(this);this.Text.R(A.z2(A.abg.ACy));},_className:
"Application::HeaderDeviceServiceMenu"};C.Rk={Ae1:null,Ai:function(Ae){C.ZS.Ai.call(
this,Ae);this.Ae1.L(this.T.AV);},_Init:function(aArg){C.ZS._Init.call(this,aArg);
A.abh.Am._Init.call(this.Ae1={I:this},0);this.__proto__=C.Rk;this.Ae1.AW(0x38);this.
Ae1.G(Blm);this.J(this.Ae1,0);this.T.C7(A.zW(A.eV.Cq));this.Ae1.Ar(A.zW(A.abi.Ag_
));},_Done:function(){this.__proto__=C.ZS;this.Ae1._Done();C.ZS._Done.call(this);
},_ReInit:function(){C.ZS._ReInit.call(this);this.Ae1._ReInit();},_Mark:function(
D){var B;C.ZS._Mark.call(this,D);if((B=this.Ae1)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemSubMenu"};C.AJq={Ae8:null,Afc:null,Afe:null,Afa:
null,AhP:null,Ae$:null,Ae_:null,Ae9:null,AhN:null,Ae7:null,AhO:null,Afd:null,AhQ:
null,Afb:null,AhR:null,Init:function(aArg){this.A8(this.Ae8);},_Init:function(aArg
){C.GN._Init.call(this,aArg);C.OY._Init.call(this.Ae8={I:this},0);C.OY._Init.call(
this.Afc={I:this},0);C.OY._Init.call(this.Afe={I:this},0);C.OY._Init.call(this.Afa={
I:this},0);C.OY._Init.call(this.AhP={I:this},0);C.OY._Init.call(this.Ae$={I:this
},0);C.OY._Init.call(this.Ae_={I:this},0);C.OY._Init.call(this.Ae9={I:this},0);C.
OY._Init.call(this.AhN={I:this},0);C.OY._Init.call(this.Ae7={I:this},0);C.OY._Init.
call(this.AhO={I:this},0);C.OY._Init.call(this.Afd={I:this},0);C.OY._Init.call(this.
AhQ={I:this},0);C.OY._Init.call(this.Afb={I:this},0);C.OY._Init.call(this.AhR={I:
this},0);this.__proto__=C.AJq;this.Dt(C.AKF);this.Ae8.G(AEA);this.Ae8.Aj(true);this.
Ae8.Rp(1);this.Afc.G(AUw);this.Afc.Aj(true);this.Afc.Bk(true);this.Afc.Rp(2);this.
Afe.G(Aqb);this.Afe.Aj(true);this.Afe.Bk(false);this.Afe.Rp(3);this.Afa.G(Aqc);this.
Afa.Aj(true);this.Afa.Bk(true);this.Afa.Rp(4);this.AhP.G(Ap8);this.AhP.Aj(true);
this.AhP.Rp(5);this.Ae$.G(Bln);this.Ae$.Aj(true);this.Ae$.Bk(true);this.Ae$.Rp(6
);this.Ae_.G(Aqd);this.Ae_.Aj(true);this.Ae_.Bk(false);this.Ae_.Rp(7);this.Ae9.G(
Avd);this.Ae9.Aj(true);this.Ae9.Bk(true);this.Ae9.Rp(8);this.AhN.G(AUx);this.AhN.
Aj(true);this.AhN.Rp(9);this.Ae7.G(Al5);this.Ae7.Aj(true);this.Ae7.Bk(true);this.
Ae7.Rp(10);this.AhO.G(Blo);this.AhO.Aj(true);this.AhO.Rp(11);this.Afd.G(Blp);this.
Afd.Aj(true);this.Afd.Bk(true);this.Afd.Rp(12);this.AhQ.G(Blq);this.AhQ.Aj(true);
this.AhQ.Rp(13);this.Afb.G(Blr);this.Afb.Aj(true);this.Afb.Bk(true);this.Afb.Rp(
14);this.AhR.G(Bls);this.AhR.Aj(true);this.AhR.Rp(15);this.J(this.Ae8,0);this.J(
this.Afc,0);this.J(this.Afe,0);this.J(this.Afa,0);this.J(this.AhP,0);this.J(this.
Ae$,0);this.J(this.Ae_,0);this.J(this.Ae9,0);this.J(this.AhN,0);this.J(this.Ae7,
0);this.J(this.AhO,0);this.J(this.Afd,0);this.J(this.AhQ,0);this.J(this.Afb,0);this.
J(this.AhR,0);this.Init(aArg);},_Done:function(){this.__proto__=C.GN;this.Ae8._Done(
);this.Afc._Done();this.Afe._Done();this.Afa._Done();this.AhP._Done();this.Ae$._Done(
);this.Ae_._Done();this.Ae9._Done();this.AhN._Done();this.Ae7._Done();this.AhO._Done(
);this.Afd._Done();this.AhQ._Done();this.Afb._Done();this.AhR._Done();C.GN._Done.
call(this);},_ReInit:function(){C.GN._ReInit.call(this);this.Ae8._ReInit();this.
Afc._ReInit();this.Afe._ReInit();this.Afa._ReInit();this.AhP._ReInit();this.Ae$.
_ReInit();this.Ae_._ReInit();this.Ae9._ReInit();this.AhN._ReInit();this.Ae7._ReInit(
);this.AhO._ReInit();this.Afd._ReInit();this.AhQ._ReInit();this.Afb._ReInit();this.
AhR._ReInit();},_Mark:function(D){var B;C.GN._Mark.call(this,D);if((B=this.Ae8).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Afc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afa)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AhP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ae_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae9)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AhN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ae7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhO)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Afd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhR)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceCheckScreen"};C.AKF={_Init:
function(aArg){C.OL._Init.call(this,aArg);this.__proto__=C.AKF;this.Text.R(A.z2(
A.abg.AZ7));},_ReInit:function(){C.OL._ReInit.call(this);this.Text.R(A.z2(A.abg.
AZ7));},_className:"Application::HeaderDeviceCheck"};C.OY={DeviceComponentToString:
null,JG:null,ArU:0,A7s:false,C3:function(){this.T.R(this.DeviceComponentToString.
Ca(this.ArU));},Bh:function(aSize){var B;C.B9.Bh.call(this,aSize);this.JG.G(A.aaP(
this.JG.M,aSize[0]-((B=this.JG.M)[2]-B[0])));this.T.G(A.aaQ(this.T.M,this.JG.M[0
]));},Ai:function(Ae){C.B9.Ai.call(this,Ae);this.JG.AA2(this.T.AV);if(this.A7s)this.
JG.Ats(A.iF.E1);else this.JG.Ats(A.iF.FY);},Rp:function(E){if(this.ArU===E)return;
this.ArU=E;this.U(this.DeviceComponentToString.Ca(E));this.Ez(this);},Ez:function(
H){this.A7s=A._GetAutoObject(A.Device.Device).AFF(this.ArU);this.Al();},_Init:function(
aArg){C.B9._Init.call(this,aArg);A.Device.DeviceComponentToString._Init.call(this.
DeviceComponentToString={I:this},0);C.JG._Init.call(this.JG={I:this},0);this.__proto__=
C.OY;this.T.G(Blt);this.T.A0(0x11);this.JG.G(Blu);this.J(this.JG,0);},_Done:function(
){this.__proto__=C.B9;this.DeviceComponentToString._Done();this.JG._Done();C.B9.
_Done.call(this);},_ReInit:function(){C.B9._ReInit.call(this);this.DeviceComponentToString.
_ReInit();this.JG._ReInit();this.C3();},_Mark:function(D){var B;C.B9._Mark.call(
this,D);if((B=this.DeviceComponentToString)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.JG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Q5={AD:null,EA:null,Ac:null,Init:function(aArg){A.ow([this,this.Aw8],this);}
,A8:function(E){C.Aw.A8.call(this,E);this.AHc(this);this.Dz(this);},CE:function(
H){A.ow([this,this.Tn],this);},FX:function(H){var B;this.AD.N0((B=this.Ac.Dd(0x1
))[3]-B[1]);this.AD.N4((B=this.Ac.M)[3]-B[1]);this.AD.N2(-this.Ac.Br[1]);},Aw8:function(
H){var Bb=A._GetAutoObject(A.Device.Helper).A0M();A._GetAutoObject(A.Device.Device
).Aq.Bo(Bb);A.ow([this,this.Tn],this);},EY:function(H){A._GetAutoObject(C.A1).Fl(
);},AXK:function(H){A._GetAutoObject(C.A1).BX(95);},Dz:function(H){this.N.C8(A.zW(
A.abi.ET));this.N.CA=[this,this.EY];this.N.Cm(A.zW(A.abi.AzX));if(!A._GetAutoObject(
A.Device.Device).Aq.Filter||A._GetAutoObject(A.Device.Helper).Aom(A._GetAutoObject(
A.Device.Device).Aq.Filter)){this.N.Cg=null;this.N.Ji.DC(100);}else{this.N.Cg=[this
,this.Aw8];this.N.Ji.DC(255);}this.N.Db(A.zW(A.abi.Acm));this.N.Cl=[this,this.AXK
];},Tn:function(s){this.Dz(s);},AHc:function(H){A.aa8("%s",Blv);},Bye:function(s
){this.AHc(s);},Iu:function(H){A.ow([this,this.FX],this);},_Init:function(aArg){
C.Aw._Init.call(this,aArg);C.AD._Init.call(this.AD={I:this},0);A.abh.AH._Init.call(
this.EA={I:this},0);A.Core.Ac._Init.call(this.Ac={I:this},0);this.__proto__=C.Q5;
this.N.An(false);this.N.W(true);this.Dt(C.Zr);this.AD.G(JT);this.EA.AW(0x3F);this.
EA.G(FK);this.EA.L(A.iF.CD);this.Ac.G(Od);this.Ac.Le(9);this.J(this.AD,0);this.J(
this.EA,0);this.J(this.Ac,0);this.Ac.Eu=[this,this.Iu];this.Init(aArg);},_Done:function(
){this.__proto__=C.Aw;this.AD._Done();this.EA._Done();this.Ac._Done();C.Aw._Done.
call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.AD._ReInit();this.EA.
_ReInit();this.Ac._ReInit();},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((
B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuScreen"
};C.AJS={Wq:null,Wp:null,We:null,Sm:null,Dz:function(H){C.Q5.Dz.call(this,H);if(
this.A6===this.Sm){this.N.Cm(null);this.N.Cg=null;this.N.Db(null);this.N.Cl=null;
}},AHc:function(H){if(this.A6===this.Sm)this.Dt(C.AKP);else this.Dt(C.Zr);},BrP:
function(){switch(A._GetAutoObject(A.Device.Device).TemperatureUnit){case 0:return A.
zW(A.abi.ALN);case 1:return A.zW(A.abi.ALO);default:A.aa8("%s%s",Blw,A._GetAutoObject(
A.Device.Device).TemperatureUnit.toFixed());}return null;},BrQ:function(){switch(
A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.zW(A.abi.ALP);case 1:
return A.zW(A.abi.ALQ);default:A.aa8("%s%s",AEG,A._GetAutoObject(A.Device.Device
).MassUnit.toFixed());}return null;},H4:function(H){var Ce=(C.E3.isPrototypeOf(H
)?H:null);if(!Ce)return;if(Ce===this.Wq)A._GetAutoObject(C.A1).BX(75);else if(Ce===
this.Wp)A._GetAutoObject(C.A1).BX(64);else if(Ce===this.We)A._GetAutoObject(C.A1
).BX(66);else if(Ce===this.Sm)A._GetAutoObject(C.A1).BX(67);},_Init:function(aArg
){C.Q5._Init.call(this,aArg);C.E3._Init.call(this.Wq={I:this},0);C.E3._Init.call(
this.Wp={I:this},0);C.E3._Init.call(this.We={I:this},0);C.E3._Init.call(this.Sm={
I:this},0);this.__proto__=C.AJS;this.Wq.G(Nn);this.Wq.Aj(true);this.Wq.U(A.z2(A.
abg.AfT));this.Wp.G(Ka);this.Wp.Aj(true);this.Wp.U(A.z2(A.abg.Temperature));this.
We.G(Blx);this.We.Aj(true);this.We.U(A.z2(A.abg.Rating));this.Sm.G(Bly);this.Sm.
Aj(true);this.Sm.U(A.z2(A.abg.A1I));this.J(this.Wq,0);this.J(this.Wp,0);this.J(this.
We,0);this.J(this.Sm,0);this.Wq.AR=[this,this.H4];this.Wq.Dx(this.BrQ());this.Wp.
AR=[this,this.H4];this.Wp.Dx(this.BrP());this.We.AR=[this,this.H4];this.We.Dx(A.
zW(A.abi.ALL));this.Sm.AR=[this,this.H4];this.Sm.Dx(A.zW(A.abi.ALM));},_Done:function(
){this.__proto__=C.Q5;this.Wq._Done();this.Wp._Done();this.We._Done();this.Sm._Done(
);C.Q5._Done.call(this);},_ReInit:function(){C.Q5._ReInit.call(this);this.Wq._ReInit(
);this.Wp._ReInit();this.We._ReInit();this.Sm._ReInit();this.Wq.U(A.z2(A.abg.AfT
));this.Wp.U(A.z2(A.abg.Temperature));this.We.U(A.z2(A.abg.Rating));this.Sm.U(A.
z2(A.abg.A1I));},_Mark:function(D){var B;C.Q5._Mark.call(this,D);if((B=this.Wq).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Wp)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.We)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sm)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuMainScreen"};C.AJT={T3:null,Wg:null,
Wr:null,AHc:function(H){this.Dt(C.Asm);},BrT:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.zW(A.abi.AMs);case 1:return A.zW(A.abi.
AMt);default:A.aa8("%s%s",AEG,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},H4:function(H){var Ce=(C.E3.isPrototypeOf(H)?H:null);if(!Ce)return;
if(Ce===this.T3)A._GetAutoObject(C.A1).BX(77);else if(Ce===this.Wr)A._GetAutoObject(
C.A1).BX(65);else if(Ce===this.Wg)A._GetAutoObject(C.A1).BX(76);},BrS:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.zW(A.abi.ALz);
case 1:return A.zW(A.abi.ALA);default:A.aa8("%s%s",AEG,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},BrU:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.zW(A.abi.AMu);case 1:return A.zW(A.abi.
AMv);default:A.aa8("%s%s",AEG,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},_Init:function(aArg){C.Q5._Init.call(this,aArg);C.E3._Init.call(
this.T3={I:this},0);C.E3._Init.call(this.Wg={I:this},0);C.E3._Init.call(this.Wr={
I:this},0);this.__proto__=C.AJT;this.T3.G(Nn);this.T3.Aj(true);this.T3.U(A.z2(A.
abg.A5l));this.Wg.G(AUy);this.Wg.Aj(true);this.Wg.U(A.z2(A.abg.AZC));this.Wr.G(Oe
);this.Wr.Aj(true);this.Wr.U(A.z2(A.abg.A5q));this.J(this.T3,0);this.J(this.Wg,0
);this.J(this.Wr,0);this.T3.AR=[this,this.H4];this.T3.Dx(this.BrT());this.T3.Z5(
A.zW(A.abi.M2));this.Wg.AR=[this,this.H4];this.Wg.Dx(this.BrS());this.Wr.AR=[this
,this.H4];this.Wr.Dx(this.BrU());},_Done:function(){this.__proto__=C.Q5;this.T3.
_Done();this.Wg._Done();this.Wr._Done();C.Q5._Done.call(this);},_ReInit:function(
){C.Q5._ReInit.call(this);this.T3._ReInit();this.Wg._ReInit();this.Wr._ReInit();
this.T3.U(A.z2(A.abg.A5l));this.Wg.U(A.z2(A.abg.AZC));this.Wr.U(A.z2(A.abg.A5q));
},_Mark:function(D){var B;C.Q5._Mark.call(this,D);if((B=this.T3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Wg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wr)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"};C.
AJW={A8T:function(){return(A._GetAutoObject(A.Device.Helper).V.LastBodyWeight>0)&&(
A._GetAutoObject(A.Device.Helper).V.TimestampLastWeighing>A._GetAutoObject(A.Device.
Helper).XU(0));},_Init:function(aArg){C.Ar0._Init.call(this,aArg);this.__proto__=
C.AJW;this.Afr(A.z2(A.abg.Bdg));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AJP={Af6:null,Zv:null,Tc:null,YZ:null,OB:null,Ag7:null,Aew:null,Ag8:null,Aex:
null,AD:null,YR:null,Aa0:0,AmT:0,DS:function(H){switch(this.CF.CM){case 4:{if(this.
IB.Fe())return;var Pv=this.Ac.Br[1]+80;this.Ac.Gk([this.Ac.Br[0],Pv]);this.Ac.AbB(
null,null);}break;case 5:{if(this.IB.Fe())return;var Pv=this.Ac.Br[1]-80;this.Ac.
Gk([this.Ac.Br[0],Pv]);this.Ac.AbB(null,null);}break;default:C.E0.DS.call(this,H
);}},Anr:function(Lk,AaK){if(!Lk)return;var EZ=A._NewObject(A.Device.Filter,0);var
Hh=A._NewObject(A.Device.Int32FilterCriterion,0);Hh.Initialize(1,0,AaK,true);EZ.
CO(Hh);var AaW=A._NewObject(A.Device.Int32FilterCriterion,0);AaW.Initialize(8,2,
0,true);EZ.CO(AaW);Lk.Bo(EZ);},Agh:function(H){if(A._GetAutoObject(A.Device.Helper
).V.Aon()){this.Af6.NM(A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight);var AvU=
this.BrN(A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight,A._GetAutoObject(A.
Device.Device).MassUnit);this.YR.Set(AvU,this.YR.Get(AvU)+1);if(A._GetAutoObject(
A.Device.Helper).V.AnimalType===1){this.Aa0++;this.AmT=A._GetAutoObject(A.Device.
Helper).V.VisualId;}}C.E0.Agh.call(this,H);},Ys:function(H){if(this.Aa0>1)A._GetAutoObject(
A.Device.Device).A_(56,true,this.Aa0.toFixed(),0,null);if(this.Aa0===1)A._GetAutoObject(
A.Device.Device).A_(53,true,this.AmT.toFixed(),0,null);if(this.Af6.AM>0)this.Tc.
U(((((((A._GetAutoObject(A.Device.Converter).AuE(this.Af6.Ahv()|0,1)+Avf)+A._GetAutoObject(
A.Device.Converter).AuE(this.Af6.An7()|0,1))+Cv)+A._GetAutoObject(A.abk.Dv).Aa$(
))+Avg)+this.Af6.AM.toFixed())+Nr);else this.Tc.U(A.z2(A.abg.Unknown));var QD=this.
YR.AkH();var P;for(P=0;P<this.YR.LZ;P++){var A5=this.Br7(P);if(!!A5){var DW=this.
YR.Get(P);A5.Be5(DW);if(!QD)A5.A3S(0);else A5.A3S(Math.round((DW*100)/QD)|0);A5.
BgE(this.Br6(P,A._GetAutoObject(A.Device.Device).MassUnit));}}var Aa5=false;if(this.
Af6.AM>0)Aa5=true;this.IB.W(!Aa5);C.E0.Ys.call(this,H);},Aba:function(H){this.Af6.
Ws();this.YR.GZ();this.Aa0=0;this.AmT=0;C.E0.Aba.call(this,H);},Br7:function(aIndex
){var A5=null;switch(aIndex){case 0:A5=this.OB;break;case 1:A5=this.Ag7;break;case
2:A5=this.Aew;break;case 3:A5=this.Ag8;break;case 4:A5=this.Aex;break;default:throw new
Error(Avh+aIndex.toFixed());}return A5;},Br6:function(aIndex,Amb){var B;var R$=A.
jm;switch(Amb){case 0:{switch(aIndex){case 0:R$=Blz;break;case 1:R$=BlA;break;case
2:R$=BlB;break;case 3:R$=BlC;break;case 4:R$=BlD;break;default:throw new Error(Avh+
aIndex.toFixed());}R$=R$+(Cv+A.z2(A.abg.AGm));}break;case 1:{switch(aIndex){case
0:R$=BlE;break;case 1:R$=BlF;break;case 2:R$=BlG;break;case 3:R$=BlH;break;case 4:
R$=BlI;break;default:throw new Error(Avh+aIndex.toFixed());}R$=R$+(Cv+A.z2(A.abg.
A1q));}break;default:A.aa8("%s%e",A5T,Amb);}return R$;},BrO:function(AEY,Amb){var
AaX=0;switch(Amb){case 0:switch(AEY){case 0:AaX=35000;break;case 1:AaX=40000;break;
case 2:AaX=45000;break;case 3:AaX=50000;break;case 4:AaX=2147483647;break;default:
throw new Error(Avh+AEY.toFixed());}break;case 1:switch(AEY){case 0:AaX=36287;break;
case 1:AaX=40823;break;case 2:AaX=45359;break;case 3:AaX=49895;break;case 4:AaX=
2147483647;break;default:throw new Error(Avh+AEY.toFixed());}break;default:A.aa8(
"%s%e",A5T,Amb);}return AaX;},BrN:function(A2,Amb){var AvU=0;var P;for(P=0;P<this.
YR.LZ;P++)if(A2<this.BrO(P,Amb)){AvU=P;break;}return AvU;},FX:function(H){var B;
this.AD.N0((B=this.Ac.Dd(0x1))[3]-B[1]);this.AD.N4((B=this.Ac.M)[3]-B[1]);this.AD.
N2(-this.Ac.Br[1]);},Iu:function(H){A.ow([this,this.FX],this);},_Init:function(aArg
){C.E0._Init.call(this,aArg);C.Aeu._Init.call(this.Zv={I:this},0);C.H8._Init.call(
this.Tc={I:this},0);C.YZ._Init.call(this.YZ={I:this},0);C.OB._Init.call(this.OB={
I:this},0);C.OB._Init.call(this.Ag7={I:this},0);C.OB._Init.call(this.Aew={I:this
},0);C.OB._Init.call(this.Ag8={I:this},0);C.OB._Init.call(this.Aex={I:this},0);C.
AD._Init.call(this.AD={I:this},0);A.Device.Int32ArrayWrapper._Init.call(this.YR={
I:this},0);this.__proto__=C.AJP;this.Dt(C.Asm);this.Aic(A.z2(A.abg.A0q));this.Afr(
A.z2(A.abg.A1T));this.Zv.G(AEA);this.Zv.Aj(true);this.Zv.U(A.z2(A.abg.AZo));this.
Zv.Bk(false);this.Zv.JM(5);this.Tc.G(AUw);this.Tc.Aj(true);this.Tc.U(A.jm);this.
Tc.Bk(true);this.Tc.JM(5);this.YZ.G(Aqb);this.YZ.Aj(true);this.OB.G(Aqc);this.OB.
Aj(true);this.OB.Bk(true);this.Ag7.G(Aqd);this.Ag7.Aj(true);this.Aew.G(Avd);this.
Aew.Aj(true);this.Aew.Bk(true);this.Ag8.G(AUx);this.Ag8.Aj(true);this.Aex.G(Al5);
this.Aex.Aj(true);this.Aex.Bk(true);this.AD.G(JT);this.YR.XD(5);this.J(this.Zv,-
1);this.J(this.Tc,-1);this.J(this.YZ,-1);this.J(this.OB,-1);this.J(this.Ag7,-1);
this.J(this.Aew,-1);this.J(this.Ag8,-1);this.J(this.Aex,-1);this.J(this.AD,-1);this.
Ac.Eu=[this,this.Iu];this.Af6=A._NewObject(C.AsK,0);this.Tc.Y(A.zW(A.eV.Au));},_Done:
function(){this.__proto__=C.E0;this.Zv._Done();this.Tc._Done();this.YZ._Done();this.
OB._Done();this.Ag7._Done();this.Aew._Done();this.Ag8._Done();this.Aex._Done();this.
AD._Done();this.YR._Done();C.E0._Done.call(this);},_ReInit:function(){C.E0._ReInit.
call(this);this.Zv._ReInit();this.Tc._ReInit();this.YZ._ReInit();this.OB._ReInit(
);this.Ag7._ReInit();this.Aew._ReInit();this.Ag8._ReInit();this.Aex._ReInit();this.
AD._ReInit();this.YR._ReInit();this.Aic(A.z2(A.abg.A0q));this.Afr(A.z2(A.abg.A1T
));this.Zv.U(A.z2(A.abg.AZo));this.Tc.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;
C.E0._Mark.call(this,D);if((B=this.Af6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Zv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OB)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ag7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aew)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ag8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.YR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationBirthWeightsScreen"
};C.YZ={II:null,Gp:null,Bh:function(aSize){C.H8.Bh.call(this,aSize);this.II.G([((
aSize[0]*57)/100)|0,0,((aSize[0]*80)/100)|0,aSize[1]]);this.Gp.G([this.II.M[2],0
,aSize[0],aSize[1]]);},Ai:function(Ae){C.H8.Ai.call(this,Ae);this.II.L(this.T.AV
);this.Gp.L(this.T.AV);},_Init:function(aArg){C.H8._Init.call(this,aArg);A.abh.Text.
_Init.call(this.II={I:this},0);A.abh.Text._Init.call(this.Gp={I:this},0);this.__proto__=
C.YZ;this.U(A.z2(A.abg.A5o));this.II.G(BlJ);this.II.KF(true);this.II.R(A.z2(A.abg.
AyF));this.II.L(A.iF.Text);this.Gp.G(A5U);this.Gp.R(AdG);this.Gp.L(A.iF.Text);this.
J(this.II,0);this.J(this.Gp,0);this.T.Y(A.zW(A.eV.K7));this.II.Y(A.zW(A.eV.K7));
this.Gp.Y(A.zW(A.eV.OI));},_Done:function(){this.__proto__=C.H8;this.II._Done();
this.Gp._Done();C.H8._Done.call(this);},_ReInit:function(){C.H8._ReInit.call(this
);this.II._ReInit();this.Gp._ReInit();},_Mark:function(D){var B;C.H8._Mark.call(
this,D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"};
C.OB={AP:null,A4:null,RC:null,II:null,Gp:null,A5p:A.jm,AyF:0,A4j:0,Bh:function(aSize
){C.H8.Bh.call(this,aSize);this.RC.G([0,0,((aSize[0]*57)/100)|0,aSize[1]]);this.
AP.G([this.RC.M[2]-1,0,this.RC.M[2]+1,aSize[1]]);this.II.G([this.RC.M[2],0,((aSize[
0]*75)/100)|0,aSize[1]]);this.A4.G([this.II.M[2]-1,0,this.II.M[2]+1,aSize[1]]);this.
Gp.G([this.II.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.H8.Ai.call(this,Ae);
this.RC.L(this.T.AV);this.II.L(this.T.AV);this.Gp.L(this.T.AV);},BgE:function(E){
if(this.A5p===E)return;this.A5p=E;this.RC.R(E);},Be5:function(E){if(this.AyF===E
)return;this.AyF=E;this.II.R(E.toFixed());},A3S:function(E){if(this.A4j===E)return;
this.A4j=E;this.Gp.R(E.toFixed()+AaG);},_Init:function(aArg){C.H8._Init.call(this
,aArg);A.abh.AH._Init.call(this.AP={I:this},0);A.abh.AH._Init.call(this.A4={I:this
},0);A.abh.Text._Init.call(this.RC={I:this},0);A.abh.Text._Init.call(this.II={I:
this},0);A.abh.Text._Init.call(this.Gp={I:this},0);this.__proto__=C.OB;this.AP.L(
A.iF.A7);this.A4.L(A.iF.A7);this.RC.G(BlK);this.RC.R(A.z2(A.abg.A5o));this.RC.L(
A.iF.Text);this.II.R(Yg);this.II.L(A.iF.Text);this.Gp.R(BlL);this.Gp.L(A.iF.Text
);this.J(this.AP,0);this.J(this.A4,0);this.J(this.RC,0);this.J(this.II,0);this.J(
this.Gp,0);this.RC.Y(A.zW(A.eV.Au));this.II.Y(A.zW(A.eV.Au));this.Gp.Y(A.zW(A.eV.
Au));},_Done:function(){this.__proto__=C.H8;this.AP._Done();this.A4._Done();this.
RC._Done();this.II._Done();this.Gp._Done();C.H8._Done.call(this);},_ReInit:function(
){C.H8._ReInit.call(this);this.AP._ReInit();this.A4._ReInit();this.RC._ReInit();
this.II._ReInit();this.Gp._ReInit();},_Mark:function(D){var B;C.H8._Mark.call(this
,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemWeightClassRow"};C.AIg={AGN:function(){var Bb=A._GetAutoObject(
A.Device.Helper).LO();A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);},_Init:function(
aArg){C.Akh._Init.call(this,aArg);this.__proto__=C.AIg;},_className:"Application::AnimalSearchUnfilteredOverlay"
};C.AM0={QQ:null,QV:null,QP:null,QS:null,OC:null,QR:null,AHa:function(H){A.ow([this
,this.BuE],this);A.ow([this,this.Bur],this);A.ow([this,this.Buo],this);A.ow([this
,this.AYv],this);A.ow([this,this.Buu],this);A.ow([this,this.Bus],this);},H4:function(
H){var Ce=(C.Rh.isPrototypeOf(H)?H:null);if(!Ce)return;if(Ce===this.QV)A._GetAutoObject(
C.A1).BX(20);else if(Ce===this.OC)A._GetAutoObject(C.A1).BX(14);else if(Ce===this.
QQ)A._GetAutoObject(C.A1).BX(12);else if(Ce===this.QS)A._GetAutoObject(C.A1).BX(
46);else if(Ce===this.QP)A._GetAutoObject(C.A1).BX(58);else if(Ce===this.QR)A._GetAutoObject(
C.A1).BX(69);},Bur:function(H){var Bb=A._GetAutoObject(A.Device.Helper).LO();var
Av2=A._NewObject(A.Device.BoolFilterCriterion,0);Av2.Initialize(9,0,true,true);Bb.
CO(Av2);A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);this.OC.Z9(A._GetAutoObject(
A.Device.Device).Aq.Cd().toFixed());},BuE:function(H){var Bb=A._GetAutoObject(A.
Device.Helper).LO();var AxX=A._NewObject(A.Device.BoolFilterCriterion,0);AxX.Initialize(
12,0,true,true);Bb.CO(AxX);A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);this.QV.Z9(
A._GetAutoObject(A.Device.Device).Aq.Cd().toFixed());},Buo:function(H){var Bb=A.
_GetAutoObject(A.Device.Helper).LO();var AvH=A._NewObject(A.Device.BoolFilterCriterion
,0);AvH.Initialize(8,0,true,true);Bb.CO(AvH);A._GetAutoObject(A.Device.Device).Aq.
Bo(Bb);this.QQ.Z9(A._GetAutoObject(A.Device.Device).Aq.Cd().toFixed());},AYv:function(
H){var Bb=A._GetAutoObject(A.Device.Helper).A0J(A._GetAutoObject(A.Device.Device
).Ax5);A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);this.QP.Z9(A._GetAutoObject(A.
Device.Device).Aq.Cd().toFixed());},Buu:function(H){var Bb=A._GetAutoObject(A.Device.
Helper).A0P();A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);this.QS.Z9(A._GetAutoObject(
A.Device.Device).Aq.Cd().toFixed());},Bus:function(H){var Bb=A._GetAutoObject(A.
Device.Helper).Azf();A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);this.QR.Z9(A._GetAutoObject(
A.Device.Device).Aq.Cd().toFixed());},_Init:function(aArg){C.SJ._Init.call(this,
aArg);C.Rh._Init.call(this.QQ={I:this},0);C.Rh._Init.call(this.QV={I:this},0);C.
Rh._Init.call(this.QP={I:this},0);C.Rh._Init.call(this.QS={I:this},0);C.Rh._Init.
call(this.OC={I:this},0);C.Rh._Init.call(this.QR={I:this},0);this.__proto__=C.AM0;
this.QQ.G(Nn);this.QQ.Aj(true);this.QQ.U(A.z2(A.abg.Alarm));this.QQ.Z1(true);this.
QV.G(AUy);this.QV.Aj(true);this.QV.U(A.z2(A.abg.Apg));this.QV.Z1(true);this.QP.G(
Oe);this.QP.Aj(true);this.QP.U(A.z2(A.abg.ActionList));this.QP.Z1(true);this.QS.
G(MB);this.QS.Aj(true);this.QS.U(A.z2(A.abg.AKj));this.QS.Z1(true);this.OC.G(RL);
this.OC.An(false);this.OC.Aj(false);this.OC.W(false);this.OC.U(A.z2(A.abg.AI_));
this.OC.Z1(true);this.QR.G(Ti);this.QR.Aj(true);this.QR.U(A.z2(A.abg.A0m));this.
QR.Z1(true);this.J(this.QQ,0);this.J(this.QV,0);this.J(this.QP,0);this.J(this.QS
,0);this.J(this.OC,0);this.J(this.QR,0);this.QQ.AR=[this,this.AdI];this.QQ.Dx(A.
zW(A.abi.AzL));this.QQ.Z5(A.zW(A.abi.M2));this.QV.AR=[this,this.AdI];this.QV.Dx(
A.zW(A.abi.AMr));this.QV.Z5(A.zW(A.abi.M2));this.QP.AR=[this,this.AdI];this.QP.Dx(
A.zW(A.abi.ALl));this.QP.Z5(A.zW(A.abi.M2));this.QS.AR=[this,this.AdI];this.QS.Dx(
A.zW(A.abi.ALS));this.QS.Z5(A.zW(A.abi.M2));this.OC.AR=[this,this.AdI];this.OC.Dx(
A.zW(A.abi.AzL));this.OC.Z5(A.zW(A.abi.M2));this.QR.AR=[this,this.AdI];this.QR.Dx(
A.zW(A.abi.ALI));this.QR.Z5(A.zW(A.abi.M2));},_Done:function(){this.__proto__=C.
SJ;this.QQ._Done();this.QV._Done();this.QP._Done();this.QS._Done();this.OC._Done(
);this.QR._Done();C.SJ._Done.call(this);},_ReInit:function(){C.SJ._ReInit.call(this
);this.QQ._ReInit();this.QV._ReInit();this.QP._ReInit();this.QS._ReInit();this.OC.
_ReInit();this.QR._ReInit();this.QQ.U(A.z2(A.abg.Alarm));this.QV.U(A.z2(A.abg.Apg
));this.QP.U(A.z2(A.abg.ActionList));this.QS.U(A.z2(A.abg.AKj));this.OC.U(A.z2(A.
abg.AI_));this.QR.U(A.z2(A.abg.A0m));},_Mark:function(D){var B;C.SJ._Mark.call(this
,D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QV)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QR
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"};C.AMZ={
Iz:null,QW:null,QT:null,QU:null,AHa:function(H){A.ow([this,this.BuB],this);A.ow([
this,this.Buz],this);A.ow([this,this.BuA],this);A.ow([this,this.BuF],this);},H4:
function(H){var Ce=(C.Rh.isPrototypeOf(H)?H:null);if(!Ce)return;if(Ce===this.Iz)
A._GetAutoObject(C.A1).BX(85);if(Ce===this.QT)A._GetAutoObject(C.A1).BX(80);if(Ce===
this.QU)A._GetAutoObject(C.A1).BX(50);if(Ce===this.QW)A._GetAutoObject(C.A1).BX(
96);},BuA:function(H){var Bb=A._GetAutoObject(A.Device.Helper).AKt();A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);this.QU.Z9(A._GetAutoObject(A.Device.Device).Aq.Cd().
toFixed());},BuF:function(H){var Bb=A._GetAutoObject(A.Device.Helper).A0Y();A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);this.QW.Z9(A._GetAutoObject(A.Device.Device).Aq.Cd().
toFixed());},Buz:function(H){var Bb=A._GetAutoObject(A.Device.Helper).A0T();A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);this.QT.Z9(A._GetAutoObject(A.Device.Device).Aq.Cd().
toFixed());},BuB:function(H){var Bb=A._GetAutoObject(A.Device.Helper).A0W();A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);this.Iz.Z9(A._GetAutoObject(A.Device.Device).Aq.Cd().
toFixed());},_Init:function(aArg){C.SJ._Init.call(this,aArg);C.Rh._Init.call(this.
Iz={I:this},0);C.Rh._Init.call(this.QW={I:this},0);C.Rh._Init.call(this.QT={I:this
},0);C.Rh._Init.call(this.QU={I:this},0);this.__proto__=C.AMZ;this.Iz.G(Nn);this.
Iz.Aj(true);this.Iz.U(A.z2(A.abg.AID));this.Iz.Z1(true);this.QW.G(BlM);this.QW.Aj(
true);this.QW.U(A.z2(A.abg.A1O));this.QW.Z1(true);this.QT.G(BlN);this.QT.Aj(true
);this.QT.U(A.z2(A.abg.A1S));this.QT.Z1(true);this.QU.G(BlO);this.QU.Aj(true);this.
QU.U(A.z2(A.abg.A1X));this.QU.Z1(true);this.J(this.Iz,0);this.J(this.QW,0);this.
J(this.QT,0);this.J(this.QU,0);this.Iz.AR=[this,this.AdI];this.Iz.Dx(A.zW(A.abi.
ALD));this.Iz.Z5(A.zW(A.abi.M2));this.QW.AR=[this,this.AdI];this.QW.Dx(A.zW(A.abi.
AL7));this.QW.Z5(A.zW(A.abi.M2));this.QT.AR=[this,this.AdI];this.QT.Dx(A.zW(A.abi.
AL9));this.QT.Z5(A.zW(A.abi.M2));this.QU.AR=[this,this.AdI];this.QU.Dx(A.zW(A.abi.
AL$));this.QU.Z5(A.zW(A.abi.M2));},_Done:function(){this.__proto__=C.SJ;this.Iz.
_Done();this.QW._Done();this.QT._Done();this.QU._Done();C.SJ._Done.call(this);},
_ReInit:function(){C.SJ._ReInit.call(this);this.Iz._ReInit();this.QW._ReInit();this.
QT._ReInit();this.QU._ReInit();this.Iz.U(A.z2(A.abg.AID));this.QW.U(A.z2(A.abg.A1O
));this.QT.U(A.z2(A.abg.A1S));this.QU.U(A.z2(A.abg.A1X));},_Mark:function(D){var
B;C.SJ._Mark.call(this,D);if((B=this.Iz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.QU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsIdManagementScreen"
};C.ANv={Xv:function(H){this.Aer();this.DX(A.z2(A.abg.Apm),[this,this.Ao7],3);this.
DX(A.z2(A.abg.AfK),[this,this.Aig],2);this.DX(A.z2(A.abg.Ox),[this,this.Z0],9);this.
DX(A.z2(A.abg.A1u),[this,this.Bgq],16);this.DX(A.z2(A.abg.A1t),[this,this.Bf9],12
);this.DX(A.z2(A.abg.Aem),[this,this.Ah_],0);A._GetAutoObject(C.Cy).IS();A._GetAutoObject(
C.Cy).V1(A.z2(A.abg.Aen)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.Device).Cn(
6);},DS:function(H){},Acd:function(){return C.Y8;},Ace:function(){return C.Aci;}
,Ry:function(H){A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(A.Device.
Helper).A0T());},HX:function(H){var F;C.Ge.HX.call(this,H);if(this.AhY()===false
){if(!!this.D0&&((F=this.D0,F[1].call(F[0]))===16)){this.N.Cm(A.zW(A.abi.AMk));this.
N.Cg=[this,this.A0k];}else{this.N.Cm(A.zW(A.abi.AL1));this.N.Cg=[this,this.A0h];
}this.N.Fr(A.jm);}this.N.O3(false);this.N.O4(false);},Ad$:function(){A._GetAutoObject(
C.A1).BX(81);},Ad_:function(){A._GetAutoObject(C.A1).BX(82);},_Init:function(aArg
){C.Ge._Init.call(this,aArg);this.__proto__=C.ANv;var B;this.Dt(C.AK2);this.Et(A.
z2(A.abg.Bc9));this.Afq([B=A._GetAutoObject(A.Device.Device),B.A2D,B.A6v]);},_className:
"Application::NoNaisIdListScreen"};C.ANu={_Init:function(aArg){C.Iy._Init.call(this
,aArg);this.__proto__=C.ANu;this.LT.An(false);this.LT.Aj(false);this.LT.W(false);
},_className:"Application::NoNaisIdListFilterScreen"};C.ANt={_Init:function(aArg
){C.H9._Init.call(this,aArg);this.__proto__=C.ANt;this.N.Cb(A.z2(A.abg.Baa));},_className:
"Application::NoNaisIdListActionsScreen"};C.AK2={Ez:function(H){C.JI.Ez.call(this
,H);this.CV.Ar(A._GetAutoObject(A.Device.Converter).Aey(10));},_Init:function(aArg
){C.JI._Init.call(this,aArg);this.__proto__=C.AK2;},_className:"Application::HeaderNoNaisIdListFilter"
};C.APo={A_B:false,Xv:function(H){if((!!this.Bf&&!!this.Bf.AZ)&&(this.Bf.AZ.Cd()>
0)){A._GetAutoObject(C.Cy).Aep(A.z2(A.abg.AJF),[this,this.Bdy]);A._GetAutoObject(
C.Cy).IS();if(this.BqQ())A._GetAutoObject(C.Cy).Aep(A.z2(A.abg.AJY),[this,this.ANF
]);else A._GetAutoObject(C.Cy).Ag2(A.z2(A.abg.AJY));A._GetAutoObject(C.Cy).IS();
A._GetAutoObject(C.Cy).Aep(A.z2(A.abg.Ayz),[this,this.Bdu]);A._GetAutoObject(C.Cy
).IS();A._GetAutoObject(C.Cy).Aep(A.z2(A.abg.A5f),[this,this.Bdx]);A._GetAutoObject(
C.Cy).IS();A._GetAutoObject(C.Cy).Aep(A.z2(A.abg.AZN),[this,this.Bdt]);}else{A._GetAutoObject(
C.Cy).Ag2(A.z2(A.abg.AJF));A._GetAutoObject(C.Cy).IS();A._GetAutoObject(C.Cy).Ag2(
A.z2(A.abg.AJY));A._GetAutoObject(C.Cy).IS();A._GetAutoObject(C.Cy).Ag2(A.z2(A.abg.
Ayz));A._GetAutoObject(C.Cy).IS();A._GetAutoObject(C.Cy).Ag2(A.z2(A.abg.A5f));A.
_GetAutoObject(C.Cy).IS();A._GetAutoObject(C.Cy).Ag2(A.z2(A.abg.AZN));}A._GetAutoObject(
C.Cy).IS();this.DX(A.z2(A.abg.AJF),[this,this.Be_],17);this.DX(A.z2(A.abg.BaU),[
this,this.Bgm],13);this.DX(A.z2(A.abg.Aem),[this,this.Ah_],0);A._GetAutoObject(C.
Cy).IS();A._GetAutoObject(C.Cy).V1(A.z2(A.abg.Aen)+A.z2(A.abg.Colon));A._GetAutoObject(
A.Device.Device).Cn(6);},DS:function(H){},CE:function(H){C.Ge.CE.call(this,H);if(
this.A_B&&(A._GetAutoObject(A.Device.Device).Ac3>0))A.ow([this,this.ANF],this);}
,Acd:function(){return C.Ayw;},Ace:function(){return C.AzF;},Ry:function(H){A._GetAutoObject(
A.Device.Device).Aq.Bo(A._GetAutoObject(A.Device.Helper).A0W());},HX:function(H){
C.Ge.HX.call(this,H);this.N.Cm(A.zW(A.abi.AMg));this.N.Cg=[this,this.A0j];this.N.
Fr(A.jm);this.N.O3(false);this.N.O4(false);},Ad$:function(){A._GetAutoObject(C.A1
).BX(83);},Ad_:function(){A._GetAutoObject(C.A1).BX(84);},Bdt:function(H){A._GetAutoObject(
A.Device.Device).Cn(0);var AGM=A._GetAutoObject(A.Device.Device).BatchResetBirthAnnouncementPending(
);A._GetAutoObject(A.Device.Device).A_(62,true,AGM.toFixed(),0,null);},Bdu:function(
H){A._GetAutoObject(A.Device.Device).Cn(0);this.A0d(this);},ANF:function(H){var B;
A._GetAutoObject(A.Device.Device).Cn(0);if(!A._GetAutoObject(A.Device.Device).Ac3
){A._GetAutoObject(A.Device.Device).A_(73,true,A.jm,0,[this,this.BsW]);return;}if(
A._GetAutoObject(A.Device.Device).AsM()===false){A.za([this,this.AgA],[B=A._GetAutoObject(
A.Device.Device),B.AcK,B.AdH],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.
jm,0,[this,this.Am9]);return;}var Awk=A._GetAutoObject(A.Device.Device).Auj(0);if(
Awk.ACT){A._GetAutoObject(A.Device.Device).BatchResetBirthAnnouncementPending();
this.Et(A.z2(A.abg.Bhj));A._GetAutoObject(A.Device.Device).ArS(Awk);}else A._GetAutoObject(
A.Device.Device).A_(70,true,A.jm,0,null);},BsW:function(H){var As=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!!As&&(As.PopupState===7)){this.A_B=true;A._GetAutoObject(
C.A1).BX(87);}},Am9:function(H){var B;var As=(A.Device.PopupContext.isPrototypeOf(
H)?H:null);if(!!As&&(As.PopupState===5))A.zn([this,this.AgA],[B=A._GetAutoObject(
A.Device.Device),B.AcK,B.AdH],0);},AgA:function(H){var B;if(A._GetAutoObject(A.Device.
Device).AiM===3){A._GetAutoObject(A.Device.Device).A_(74,false,A.jm,0,[this,this.
Am9]);A.zn([this,this.AgA],[B=A._GetAutoObject(A.Device.Device),B.AcK,B.AdH],0);
A.ow([this,this.ANF],this);}},BqQ:function(){var AV7=this.Bf.AZ;if(!AV7)return false;
var P;for(P=0;P<AV7.Cd();P++)if(A._GetAutoObject(A.Device.Helper).AhM(AV7.AKz(P,
34))===false)return true;return false;},Bdx:function(H){A._GetAutoObject(A.Device.
Device).Cn(0);this.A0f(this);},Bdy:function(H){A._GetAutoObject(A.Device.Device).
Cn(0);this.A0g(this);},_Init:function(aArg){C.Ge._Init.call(this,aArg);this.__proto__=
C.APo;var B;this.Dt(C.AK4);this.Et(A.z2(A.abg.Bdd));this.Afq([B=A._GetAutoObject(
A.Device.Device),B.A2F,B.A6w]);},_className:"Application::RegistrationsListScreen"
};C.APn={_Init:function(aArg){C.Iy._Init.call(this,aArg);this.__proto__=C.APn;},
_className:"Application::RegistrationsListFilterScreen"};C.APm={_Init:function(aArg
){C.H9._Init.call(this,aArg);this.__proto__=C.APm;this.N.Cb(A.z2(A.abg.AZx));},_ReInit:
function(){C.H9._ReInit.call(this);this.N.Cb(A.z2(A.abg.AZx));},_className:"Application::RegistrationsListActionsScreen"
};C.AK4={Ez:function(H){C.Ud.Ez.call(this,H);this.CV.Ar(A._GetAutoObject(A.Device.
Converter).Aey(11));},_Init:function(aArg){C.Ud._Init.call(this,aArg);this.__proto__=
C.AK4;this.Text.G(BlP);this.Text.R(A.z2(A.abg.AID));this.Text.A0(0x12);},_className:
"Application::HeaderRegistrationsList"};C.Ayw={R4:0,AP:null,A4:null,DQ:null,HP:null
,S_:null,G0:null,Ow:0,J1:0,Init:function(aArg){},Bh:function(aSize){C.A$.Bh.call(
this,aSize);this.Background.G(A.aaN(this.Background.M,aSize));this.T.G(A.aaQ(this.
T.M,((aSize[0]*30)/100)|0));this.AP.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);
this.HP.G([this.T.M[2],0,this.T.M[2]+(((aSize[0]*15)/100)|0),aSize[1]]);this.A4.
G([this.HP.M[2]-1,0,this.HP.M[2]+1,aSize[1]]);this.S_.G([this.HP.M[2],0,this.HP.
M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.DQ.G([this.S_.M[2]-1,0,this.S_.M[2]+
1,aSize[1]]);this.G0.G([this.S_.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.
Ai.call(this,Ae);this.HP.L(this.T.AV);this.G0.L(this.T.AV);this.S_.L(this.T.AV);
if(A._GetAutoObject(A.Device.Helper).AhM(this.J1)){this.T.Y(A.zW(A.eV.LN));this.
U(A5V);this.S_.R(Qj);}else{this.T.Y(A.zW(A.eV.Au));this.U(this.Ow.toFixed());this.
S_.R(A._GetAutoObject(A.Device.Helper).T$(this.R4,0,5).toFixed());}},B7:function(
Z){if(!this.AZ)return;this.Hl=Z;if(!!this.AZ){this.Ow=this.AZ.Cp(Z,1);this.J1=this.
AZ.AKz(Z,34);var AqL=this.AZ.AKq(Z,7);this.R4=this.AZ.LP(Z,26);var AvO=this.AZ.Hr(
Z,4);var AdR=A._GetAutoObject(A.Device.Helper).L6(AvO,A._GetAutoObject(A.Device.
Helper).DN());this.HP.Ar(A._GetAutoObject(A.Device.Converter).AkE(AqL));if(AdR<100
)this.G0.R((AdR.toFixed()+Cv)+A.z2(A.abg.AHH));else this.G0.R(A._GetAutoObject(A.
abk.K5).Azd(AvO,A._GetAutoObject(A.Device.Helper).DN(),AEr));this.Al();}},_Init:
function(aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(this.AP={I:this},0
);A.abh.AH._Init.call(this.A4={I:this},0);A.abh.AH._Init.call(this.DQ={I:this},0
);A.abh.Am._Init.call(this.HP={I:this},0);A.abh.Text._Init.call(this.S_={I:this}
,0);C.CH._Init.call(this.G0={I:this},0);this.__proto__=C.Ayw;this.AP.G(AlZ);this.
AP.L(A.iF.A7);this.A4.G(Al0);this.A4.L(A.iF.A7);this.DQ.G(BlQ);this.DQ.L(A.iF.A7
);this.HP.G(A5W);this.HP.L(A.iF.Text);this.S_.G(Ava);this.G0.G(BlR);this.J(this.
AP,0);this.J(this.A4,0);this.J(this.DQ,0);this.J(this.HP,0);this.J(this.S_,0);this.
J(this.G0,0);this.HP.Ar(A.zW(A.abj.J4));this.S_.Y(A.zW(A.eV.Au));this.G0.Y(A.zW(
A.eV.Au));this.G0.Bz(A.zW(A.eV.AB));this.G0.C7(A.zW(A.eV.Cq));this.Init(aArg);},
_Done:function(){this.__proto__=C.A$;this.AP._Done();this.A4._Done();this.DQ._Done(
);this.HP._Done();this.S_._Done();this.G0._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.AP._ReInit();this.A4._ReInit();this.DQ._ReInit(
);this.HP._ReInit();this.S_._ReInit();this.G0._ReInit();},_Mark:function(D){var B;
C.A$._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.G0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListRegistrationItem"
};C.AzF={AhJ:null,AhH:null,M3:null,_Init:function(aArg){C.DL._Init.call(this,aArg
);A.abh.Am._Init.call(this.AhJ={I:this},0);A.abh.Am._Init.call(this.AhH={I:this}
,0);A.abh.Am._Init.call(this.M3={I:this},0);this.__proto__=C.AzF;this.AhJ.G(BlS);
this.AhJ.L(A.iF.Text);this.AhH.G(BlT);this.AhH.L(A.iF.Text);this.M3.G(A5M);this.
M3.L(A.iF.Text);this.J(this.AhJ,0);this.J(this.AhH,0);this.J(this.M3,0);this.AhJ.
Ar(A.zW(A.abi.Az1));this.AhH.Ar(A.zW(A.abi.AzS));this.M3.Ar(A.zW(A.abi.AzO));},_Done:
function(){this.__proto__=C.DL;this.AhJ._Done();this.AhH._Done();this.M3._Done();
C.DL._Done.call(this);},_ReInit:function(){C.DL._ReInit.call(this);this.AhJ._ReInit(
);this.AhH._ReInit();this.M3._ReInit();},_Mark:function(D){var B;C.DL._Mark.call(
this,D);if((B=this.AhJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhH)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.M3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRegistration"
};C.AK3={I3:null,AeU:null,IH:null,A7:null,LX:A.jm,AnimalId:-1,WhereAbouts:0,Gender:
2,Init:function(aArg){var B;A.za([this,this.Ez],[B=A._GetAutoObject(A.Device.Helper
).V,B.A2G,B.A3W],0);A.za([this,this.Ez],[B=A._GetAutoObject(A.Device.Helper).V,B.
Xu,B.J7],0);A.za([this,this.Ez],[B=A._GetAutoObject(A.Device.Helper).V,B.AoH,B.XE
],0);A.y_([this,this.Ez],A._GetAutoObject(A.Device.Helper).V,0);A.ow([this,this.
Ez],this);},CW:function(E){C.BU.CW.call(this,E);this.I3.L(E);this.AeU.L(E);this.
IH.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.IH.R(A.z2(A.abg.Als));else this.IH.R(((A.z2(A.abg.Hs)+A.z2(A.abg.Colon
))+Cv)+E.toFixed());},Ez:function(H){if(A._GetAutoObject(A.Device.Helper).V.An9(
)){this.AtH(((A._GetAutoObject(A.Device.Helper).V.Ct+1).toFixed()+A5C)+A._GetAutoObject(
A.Device.Device).Aq.Cd().toFixed());this.J7(A._GetAutoObject(A.Device.Helper).V.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.VisualId);this.Aaa(
A._GetAutoObject(A.Device.Helper).V.WhereAbouts);}else{this.AtH(A5D);this.J7(2);
this.OnSetAnimalId(-1);this.Aaa(0);}},J7:function(E){if(this.Gender===E)return;this.
Gender=E;this.AeU.Ar(A._GetAutoObject(A.Device.Converter).AkE(E));},AtH:function(
E){if(this.LX===E)return;this.LX=E;this.I3.R(E);},Aaa:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).AhM(E))this.IH.
W(false);else this.IH.W(true);},_Init:function(aArg){C.BU._Init.call(this,aArg);
A.abh.Text._Init.call(this.I3={I:this},0);A.abh.Am._Init.call(this.AeU={I:this},
0);A.abh.Text._Init.call(this.IH={I:this},0);A.abh.DU._Init.call(this.A7={I:this
},0);this.__proto__=C.AK3;this.I3.G(A5E);this.I3.HT(2);this.I3.KF(true);this.I3.
A0(0x12);this.I3.R(A5F);this.AeU.G(BlU);this.IH.G(BlV);this.IH.A0(0x11);this.IH.
R(A.z2(A.abg.Als));this.A7.D$(AUi);this.A7.Eg(AUj);this.A7.L(A.iF.A7);this.J(this.
I3,0);this.J(this.AeU,0);this.J(this.IH,0);this.J(this.A7,0);this.I3.Y(A.zW(A.eV.
AB));this.AeU.Ar(A._GetAutoObject(A.Device.Converter).AkE(2));this.IH.Y(A.zW(A.eV.
Au));this.Init(aArg);},_Done:function(){this.__proto__=C.BU;this.I3._Done();this.
AeU._Done();this.IH._Done();this.A7._Done();C.BU._Done.call(this);},_ReInit:function(
){C.BU._ReInit.call(this);this.I3._ReInit();this.AeU._ReInit();this.IH._ReInit();
this.A7._ReInit();},_Mark:function(D){var B;C.BU._Mark.call(this,D);if((B=this.I3
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A7)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.Y1={EaseOfDeliveryToString:
null,AeM:null,B7:function(H){C.MP.B7.call(this,H);var AFX=A._GetAutoObject(A.Device.
Helper).V.EaseOfDelivery;this.JN(this.EaseOfDeliveryToString.KL(AFX));this.GO.R(
this.AeM.Ab4(AFX).toFixed());},CW:function(E){C.MP.CW.call(this,E);this.GO.L(E);
},_Init:function(aArg){C.MP._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AeM._Init.call(this.
AeM={I:this},0);this.__proto__=C.Y1;this.U(A.z2(A.abg.Akl));},_Done:function(){this.
__proto__=C.MP;this.EaseOfDeliveryToString._Done();this.AeM._Done();C.MP._Done.call(
this);},_ReInit:function(){C.MP._ReInit.call(this);this.EaseOfDeliveryToString._ReInit(
);this.AeM._ReInit();this.U(A.z2(A.abg.Akl));},_Mark:function(D){var B;C.MP._Mark.
call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.V6={WhereAboutsToString:null,Adx:null,B7:function(H){C.MP.B7.call(this,H);var
J1=A._GetAutoObject(A.Device.Helper).V.WhereAbouts;this.JN(this.WhereAboutsToString.
KL(J1));this.GO.R(this.Adx.Ab4(J1).toFixed());},CW:function(E){C.MP.CW.call(this
,E);this.GO.L(E);},_Init:function(aArg){C.MP._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.Adx._Init.call(this.Adx={
I:this},0);this.__proto__=C.V6;this.U(A.z2(A.abg.Vc));},_Done:function(){this.__proto__=
C.MP;this.WhereAboutsToString._Done();this.Adx._Done();C.MP._Done.call(this);},_ReInit:
function(){C.MP._ReInit.call(this);this.WhereAboutsToString._ReInit();this.Adx._ReInit(
);this.U(A.z2(A.abg.Vc));},_Mark:function(D){var B;C.MP._Mark.call(this,D);if((B=
this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adx)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.QN={CF:null,Ac:null,AD:null,Init:function(aArg){},CE:function(H){var B;C.DK.
CE.call(this,H);A.za([this,this.AdJ],[B=A._GetAutoObject(A.Device.Helper).V,B.P0
,B.OnSetId],0);A.za([this,this.AdJ],[B=A._GetAutoObject(A.Device.Helper),B.Tl,B.
Tm],0);A.ow([this,this.AdJ],this);},Fc:function(H){var B;C.DK.Fc.call(this,H);A.
zn([this,this.AdJ],[B=A._GetAutoObject(A.Device.Helper).V,B.P0,B.OnSetId],0);A.zn([
this,this.AdJ],[B=A._GetAutoObject(A.Device.Helper),B.Tl,B.Tm],0);},FX:function(
H){var B;this.AD.N0((B=this.Ac.Dd(0x1))[3]-B[1]);this.AD.N4((B=this.Ac.M)[3]-B[1
]);this.AD.N2(-this.Ac.Br[1]);},DS:function(H){switch(this.CF.CM){case 6:case 7:
this.CF.PE=true;break;case 4:this.A_X(4);break;case 5:this.A_X(5);break;default:;
}},A_X:function(GJ){var B;switch(GJ){case 5:{var Ck=this.Ac.Br[1]-40;if(Ck<-(((B=
this.Ac.Dd(0x1))[3]-B[1])-((B=this.Ac.M)[3]-B[1])))Ck=-(((B=this.Ac.Dd(0x1))[3]-
B[1])-((B=this.Ac.M)[3]-B[1]));if(Ck>0)Ck=0;this.Ac.Gk([this.Ac.Br[0],Ck]);}break;
case 4:{var Ck=this.Ac.Br[1]+40;if(Ck>0)Ck=0;this.Ac.Gk([this.Ac.Br[0],Ck]);}break;
default:throw new Error(BlW);}},Iw:function(H){var B;var X=this.Ac.Af;var Ab;while(
!!X&&!((X.S&0x200)===0x200)){if(((X.S&0x400)===0x400)){Ab=(C.Ix.isPrototypeOf(X)?
X:null);if(!!Ab)Ab.B7(this);}X=X.Af;}},AdJ:function(s){this.Iw(s);},TA:function(
H){var B;this.Ac.AbB(null,null);if(!!this.A6&&((this.A6.S&0x400)===0x400))this.Ac.
IA(this.A6,true,null,null);},Iu:function(H){A.ow([this,this.FX],this);},_Init:function(
aArg){C.DK._Init.call(this,aArg);A.Core.B0._Init.call(this.CF={I:this},0);A.Core.
Ac._Init.call(this.Ac={I:this},0);C.AD._Init.call(this.AD={I:this},0);this.__proto__=
C.QN;this.CF.Filter=147;this.Ac.G(Vp);this.Ac.Le(1);this.AD.G(AiS);this.J(this.Ac
,0);this.J(this.AD,0);this.CF.B1=[this,this.DS];this.CF.D_=[this,this.DS];this.Ac.
Eu=[this,this.Iu];this.Init(aArg);},_Done:function(){this.__proto__=C.DK;this.CF.
_Done();this.Ac._Done();this.AD._Done();C.DK._Done.call(this);},_ReInit:function(
){C.DK._ReInit.call(this);this.CF._ReInit();this.Ac._ReInit();this.AD._ReInit();
},_Mark:function(D){var B;C.DK._Mark.call(this,D);if((B=this.CF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.V7={YW:null,
V3:null,YX:null,V4:null,Y1:null,V6:null,_Init:function(aArg){C.QN._Init.call(this
,aArg);C.YW._Init.call(this.YW={I:this},0);C.V3._Init.call(this.V3={I:this},0);C.
YX._Init.call(this.YX={I:this},0);C.V4._Init.call(this.V4={I:this},0);C.Y1._Init.
call(this.Y1={I:this},0);C.V6._Init.call(this.V6={I:this},0);this.__proto__=C.V7;
this.YW.G(BI);this.YW.Aj(true);this.V3.G(Kc);this.V3.Aj(true);this.V3.Bk(true);this.
YX.G(RQ);this.YX.Aj(true);this.V4.G(Yf);this.V4.Aj(true);this.V4.Bk(true);this.Y1.
G(AiW);this.Y1.Aj(true);this.V6.G(AlY);this.V6.Aj(true);this.V6.Bk(true);this.J(
this.YW,0);this.J(this.V3,0);this.J(this.YX,0);this.J(this.V4,0);this.J(this.Y1,
0);this.J(this.V6,0);},_Done:function(){this.__proto__=C.QN;this.YW._Done();this.
V3._Done();this.YX._Done();this.V4._Done();this.Y1._Done();this.V6._Done();C.QN.
_Done.call(this);},_ReInit:function(){C.QN._ReInit.call(this);this.YW._ReInit();
this.V3._ReInit();this.YX._ReInit();this.V4._ReInit();this.Y1._ReInit();this.V6.
_ReInit();},_Mark:function(D){var B;C.QN._Mark.call(this,D);if((B=this.YW)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V6)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalRegistrationInfos"};C.V4={BreedToString:null
,GO:null,MS:null,B7:function(H){C.H7.B7.call(this,H);var Bn=A._GetAutoObject(A.Device.
Helper).V.Breed;this.U(this.BreedToString.Ca(Bn));this.GO.R(this.MS.Ab4(Bn).toFixed(
));},CW:function(E){C.H7.CW.call(this,E);this.GO.L(E);},_Init:function(aArg){C.H7.
_Init.call(this,aArg);A.Device.BreedToString._Init.call(this.BreedToString={I:this
},0);A.abh.Text._Init.call(this.GO={I:this},0);A.Device.MS._Init.call(this.MS={I:
this},0);this.__proto__=C.V4;this.B2.G(BlX);this.GO.G(BlY);this.GO.HT(5);this.GO.
A0(0x14);this.GO.R(BlZ);this.GO.L(A.iF.Text);this.J(this.GO,0);this.GQ.Ar(A.zW(A.
abi.AzR));this.GO.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.H7;this.BreedToString.
_Done();this.GO._Done();this.MS._Done();C.H7._Done.call(this);},_ReInit:function(
){C.H7._ReInit.call(this);this.BreedToString._ReInit();this.GO._ReInit();this.MS.
_ReInit();},_Mark:function(D){var B;C.H7._Mark.call(this,D);if((B=this.BreedToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.MS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"
};C.YX={B7:function(H){C.H7.B7.call(this,H);var AwR=A._GetAutoObject(A.Device.Helper
).V.NaisIdMother;if(AwR>0)this.U(A._GetAutoObject(A.Device.Converter).U_(AwR));else
this.U(A.z2(A.abg.Unknown));},_Init:function(aArg){C.H7._Init.call(this,aArg);this.
__proto__=C.YX;this.GQ.Ar(A.zW(A.abi.ALJ));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.V3={WO:null,B7:function(H){C.H7.B7.call(this,H);var Yt=A._GetAutoObject(A.Device.
Helper).V.DateOfBirth;var AdV=A._GetAutoObject(A.Device.Helper).V.BirthType;if(Yt>
0)this.U(A._GetAutoObject(A.abk.K5).Aht(Yt));else this.U(A.z2(A.abg.Unknown));var
AvQ=A.zW(A.abj.J4);switch(AdV){case 0:AvQ=A.zW(A.abi.AzP);break;case 1:{AvQ=A.zW(
A.abi.Asu);this.WO.Cc(0);}break;case 2:{AvQ=A.zW(A.abi.Asu);this.WO.Cc(1);}break;
case 3:{AvQ=A.zW(A.abi.Asu);this.WO.Cc(2);}break;default:A.aa8("%s%e",Bl0,AdV);}
this.WO.Ar(AvQ);},_Init:function(aArg){C.H7._Init.call(this,aArg);A.abh.Am._Init.
call(this.WO={I:this},0);this.__proto__=C.V3;this.B2.G(Bl1);this.WO.G(ADX);this.
WO.L(A.iF.Text);this.J(this.WO,0);this.GQ.Ar(A.zW(A.abi.AzO));this.WO.Ar(A.zW(A.
abi.AzP));},_Done:function(){this.__proto__=C.H7;this.WO._Done();C.H7._Done.call(
this);},_ReInit:function(){C.H7._ReInit.call(this);this.WO._ReInit();},_Mark:function(
D){var B;C.H7._Mark.call(this,D);if((B=this.WO)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalInfoIconItemBirth"};C.YW={R4:0,V5:null,J1:0,Bh:function(
aSize){C.H7.Bh.call(this,aSize);this.V5.G(this.GQ.M);},Ai:function(Ae){C.H7.Ai.call(
this,Ae);this.V5.L(this.B2.AV);if(A._GetAutoObject(A.Device.Helper).AhM(this.J1)
){this.U(A.z2(A.abg.AnimalLoss));this.GQ.W(false);this.V5.W(true);}else if(this.
R4>0){this.U(A._GetAutoObject(A.Device.Converter).U_(this.R4));this.GQ.W(true);this.
V5.W(false);}else{this.U(A.z2(A.abg.Unknown));this.GQ.W(true);this.V5.W(false);}
},B7:function(H){C.H7.B7.call(this,H);this.R4=A._GetAutoObject(A.Device.Helper).
V.NaisId;this.J1=A._GetAutoObject(A.Device.Helper).V.WhereAbouts;this.Al();},_Init:
function(aArg){C.H7._Init.call(this,aArg);A.abh.Text._Init.call(this.V5={I:this}
,0);this.__proto__=C.YW;this.V5.R(A5V);this.J(this.V5,0);this.GQ.Ar(A.zW(A.abi.AzS
));this.V5.Y(A.zW(A.eV.LN));},_Done:function(){this.__proto__=C.H7;this.V5._Done(
);C.H7._Done.call(this);},_ReInit:function(){C.H7._ReInit.call(this);this.V5._ReInit(
);},_Mark:function(D){var B;C.H7._Mark.call(this,D);if((B=this.V5)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.AId={V7:null
,DS:function(H){var DF=(A.Core.B0.isPrototypeOf(H)?H:null);switch(DF.CM){case 6:
this.NG(this);break;case 7:this.Md(this);break;default:DF.PE=true;}},CE:function(
H){var B;this.V7.CE(this);C.Aw.CE.call(this,H);},Fc:function(H){var B;this.V7.Fc(
this);C.Aw.Fc.call(this,H);},Ak7:function(H){A._GetAutoObject(C.A1).Fl();},BgR:function(
H){A._GetAutoObject(C.A1).Afu(85);},Md:function(H){if(A._GetAutoObject(A.Device.
Device).Aq.Cd()<=1)return;var KS=A._GetAutoObject(A.Device.Helper).V.Ct;KS=KS+1;
if(KS>=A._GetAutoObject(A.Device.Device).Aq.Cd())KS=0;A._GetAutoObject(A.Device.
Helper).HS(KS);},NG:function(H){if(A._GetAutoObject(A.Device.Device).Aq.Cd()<=1)
return;var KS=A._GetAutoObject(A.Device.Helper).V.Ct;KS=KS-1;if(KS<0)KS=A._GetAutoObject(
A.Device.Device).Aq.Cd()-1;A._GetAutoObject(A.Device.Helper).HS(KS);},_Init:function(
aArg){C.Aw._Init.call(this,aArg);C.V7._Init.call(this.V7={I:this},0);this.__proto__=
C.AId;this.Background.G(B3);this.N.W(true);this.N.O3(true);this.N.O4(true);this.
Dt(C.AK3);this.V7.G(FK);this.J(this.V7,0);this.N.CA=[this,this.Ak7];this.N.Cg=[this
,this.BgR];this.N.C8(A.zW(A.abi.ET));this.N.Cm(A.zW(A.abi.AMh));},_Done:function(
){this.__proto__=C.Aw;this.V7._Done();C.Aw._Done.call(this);},_ReInit:function(){
C.Aw._ReInit.call(this);this.V7._ReInit();},_Mark:function(D){var B;C.Aw._Mark.call(
this,D);if((B=this.V7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationDetailsScreen"
};C.H7={GQ:null,B2:null,U:function(E){C.Ix.U.call(this,E);this.B2.R(this.Dk);},CW:
function(E){C.Ix.CW.call(this,E);this.GQ.L(E);this.B2.L(E);},_Init:function(aArg
){C.Ix._Init.call(this,aArg);A.abh.Am._Init.call(this.GQ={I:this},0);C.CH._Init.
call(this.B2={I:this},0);this.__proto__=C.H7;this.GQ.G(Bl2);this.GQ.L(A.iF.Text);
this.B2.G(Bl3);this.B2.A0(0x11);this.B2.L(A.iF.Text);this.J(this.GQ,0);this.J(this.
B2,0);this.GQ.Ar(A.zW(A.abj.J4));this.B2.Y(A.zW(A.eV.Au));this.B2.Bz(A.zW(A.eV.AB
));},_Done:function(){this.__proto__=C.Ix;this.GQ._Done();this.B2._Done();C.Ix._Done.
call(this);},_ReInit:function(){C.Ix._ReInit.call(this);this.GQ._ReInit();this.B2.
_ReInit();},_Mark:function(D){var B;C.Ix._Mark.call(this,D);if((B=this.GQ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.B2)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoIconItem"};C.Ix={Background:null,J_:0,GW:false,C3:function(
){this.B7(this);},Init:function(aArg){var B;A.za([this,this.A6N],[B=A._GetAutoObject(
A.Device.Helper).V,B.P0,B.OnSetId],0);A.ow([this,this.A6N],this);},Bh:function(aSize
){C.GM.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.M,aSize));},Ai:
function(Ae){C.GM.Ai.call(this,Ae);if(this.GW)this.Background.L(A.iF.Bg);else this.
Background.L(A.iF.CD);},B7:function(H){},A6N:function(s){this.B7(s);},Bk:function(
E){if(this.GW===E)return;this.GW=E;this.Al();},CW:function(E){if(this.J_===E)return;
this.J_=E;},_Init:function(aArg){C.GM._Init.call(this,aArg);A.abh.AH._Init.call(
this.Background={I:this},0);this.__proto__=C.Ix;this.G(BI);this.Background.G(AEt
);this.J_=A.iF.Text;this.J(this.Background,0);this.Init(aArg);},_Done:function(){
this.__proto__=C.GM;this.Background._Done();C.GM._Done.call(this);},_ReInit:function(
){C.GM._ReInit.call(this);this.Background._ReInit();this.C3();},_Mark:function(D
){var B;C.GM._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoBaseItem"};C.MP={GO:null,Btn:function(H){
this.B2.G(A.aaQ(this.B2.M,this.GO.M[0]));},_Init:function(aArg){C.E$._Init.call(
this,aArg);A.abh.Text._Init.call(this.GO={I:this},0);this.__proto__=C.MP;this.GO.
AW(0xA);this.GO.G(Bl4);this.GO.HT(5);this.GO.IZ(true);this.GO.A0(0x14);this.GO.R(
A.jm);this.GO.L(A.iF.Text);this.J(this.GO,0);this.GO.Rr([this,this.Btn]);this.GO.
Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.E$;this.GO._Done();C.E$._Done.
call(this);},_ReInit:function(){C.E$._ReInit.call(this);this.GO._ReInit();},_Mark:
function(D){var B;C.E$._Mark.call(this,D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalMonochromeWrappingInfoItem"};C.AtZ={A4O:false
,_Init:function(aArg){C.AcZ._Init.call(this,aArg);this.__proto__=C.AtZ;},_className:
"Application::OptionsOverlayCheckableNode"};C.AJh={ABk:function(E){C.AnO.ABk.call(
this,E);if(E)this.OE.R(Bl5);else this.OE.R(A5X);},_Init:function(aArg){C.AnO._Init.
call(this,aArg);this.__proto__=C.AJh;this.OE.R(A5X);this.OE.Y(A.zW(A.eV.LN));},_className:
"Application::DarkThemeRadioMenuItem"};C.At1={AkO:false,_Init:function(aArg){C.AcZ.
_Init.call(this,aArg);this.__proto__=C.At1;},_className:"Application::OptionsOverlayRadioNode"
};C.AO9={Ga:null,_Init:function(aArg){C.CG._Init.call(this,aArg);C.AfG._Init.call(
this.Ga={I:this},0);this.__proto__=C.AO9;var B;this.Lf(A.z2(A.abg.Ay7));this.Ga.
G(AfV);this.Ga.Aj(true);this.Ga.W(true);this.Ga.U(A.z2(A.abg.ACc));this.Ga.AtK(false
);this.Ga.A3T(true);this.J(this.Ga,0);this.Ga.Afl([B=this.Ga,B.Gy]);this.Ga.Hb([
this,this.Es,this.HU]);this.Ga.Aid(A.zW(A.abi.Edit));this.Ga.AF([B=A._GetAutoObject(
A.Device.Device),B.AN0,B.AUL]);},_Done:function(){this.__proto__=C.CG;this.Ga._Done(
);C.CG._Done.call(this);},_ReInit:function(){C.CG._ReInit.call(this);this.Ga._ReInit(
);this.Lf(A.z2(A.abg.Ay7));this.Ga.U(A.z2(A.abg.ACc));},_Mark:function(D){var B;
C.CG._Mark.call(this,D);if((B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.AO7={Gd:0,CZ:null,AX:null,JJ:null,EL:null
,GermanStateToString:null,CountryToString:null,OJ:0,Kv:0,Lr:false,Init:function(
aArg){A.za([this,this.Tn],[this,this.Rn,this.KE],0);A.za([this,this.Tn],[this,this.
Ak9,this.Afo],0);},Ai:function(Ae){C.D1.Ai.call(this,Ae);this.AX.GE(this.K3);this.
JJ.GE(this.K3);this.EL.Dg(this.K3);},Dz:function(H){var F;if(!this.N)return;switch(
this.A3){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.
N,F[1].call(F[0])).GX(A.jm);(F=this.N,F[1].call(F[0])).CA=[this,this.Gu];(F=this.
N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).Db(null);(F=this.N,F[1].call(F[0])).Cb(
this.CountryToString.Ca(this.Kv));(F=this.N,F[1].call(F[0])).Cl=null;}break;case
2:{(F=this.N,F[1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GX(A.
jm);(F=this.N,F[1].call(F[0])).CA=[this,this.Gu];(F=this.N,F[1].call(F[0])).Cm(null
);(F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.
N,F[1].call(F[0])).Db(null);(F=this.N,F[1].call(F[0])).Cb((A.z2(A.abg.Gn)+AuR)+this.
GermanStateToString.KL(A._GetAutoObject(A.Device.Converter).AKl(this.OJ)));(F=this.
N,F[1].call(F[0])).Cl=null;}break;default:{(F=this.N,F[1].call(F[0])).C8(A.zW(A.
abi.ET));(F=this.N,F[1].call(F[0])).GX(A.jm);(F=this.N,F[1].call(F[0])).CA=[this
,this.Gu];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).Fr(A.jm
);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).Db(null);(F=this.
N,F[1].call(F[0])).Cb(A.jm);(F=this.N,F[1].call(F[0])).Cl=null;}}},Ec:function(EH
){var YI=this.A3;if(EH<0)EH=0;else if(EH>this.Qz)EH=this.Qz;switch(EH){case 0:{this.
A8(null);if(!this.Gd&&!this.OJ)this.KE(0);}break;case 1:this.A8(this.EL);break;case
2:this.A8(this.JJ);break;case 3:if(((YI===2)&&!this.OJ)&&!this.Gd)return;else{this.
A8(this.AX);if(!this.Gd||(YI>0))this.AX.UU(2);else this.AX.UU(7);}break;default:
throw new Error(Aqe+EH.toFixed());}this.A3=EH;C.D1.Ec.call(this,EH);},Bu:function(
E){if(this.AI===E)return;this.AI=E;this.Lr=true;this.Ro(A._GetAutoObject(A.Device.
Helper).T$(E,0,10));this.Afo(A._GetAutoObject(A.Device.Helper).T$(E,10,2)|0);this.
KE(A._GetAutoObject(A.Device.Converter).AfQ(E));this.Lr=false;if(!!this.AI){this.
JJ.JM(2);this.AX.JM(10);}else{this.JJ.JM(0);this.AX.JM(0);}this.Al();},Gy:function(
H){var F;if(!this.AI){var BR=this.AI;this.Bu(A._GetAutoObject(A.Device.Helper).Azm(
));if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.aat(this.Q,
0);}this.Ec(2);}else this.Ec(this.Qz);},Ahu:function(){return this.Gd;},Ahy:function(
){return 9999999999;},KE:function(E){if(this.Kv===E)return;this.Kv=E;if(this.Lr===
false)A.ow([this,this.TJ],this);A.aat([this,this.Rn,this.KE],0);},Ro:function(E){
if(this.Gd===E)return;this.Gd=E;if(this.Lr===false)A.ow([this,this.TJ],this);A.aat([
this,this.ZW,this.Ro],0);},TJ:function(H){var F;var aString=(A.aaq(A._GetAutoObject(
A.Device.Converter).ArO(this.Kv),3,10)+A.aaq(this.OJ,2,10))+A.aar(this.Gd,10,10);
var BR=this.AI;this.Bu(A.aa2(aString,0,10));if(this.AI!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AI));A.aat(this.Q,0);}},Afo:function(E){if(this.OJ===E)return;
this.OJ=E;if(this.Lr===false)A.ow([this,this.TJ],this);A.aat([this,this.Ak9,this.
Afo],0);},Rn:function(){return this.Kv;},ZW:function(){return this.Gd;},Ak9:function(
){return this.OJ;},_Init:function(aArg){C.D1._Init.call(this,aArg);C.CZ._Init.call(
this.CZ={I:this},0);C.AMA._Init.call(this.AX={I:this},0);C.AsI._Init.call(this.JJ={
I:this},0);C.ApL._Init.call(this.EL={I:this},0);A.Device.GermanStateToString._Init.
call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(this.
CountryToString={I:this},0);this.__proto__=C.AO7;var B;this.Qz=3;this.AX.G(Bl6);
this.JJ.G(Bl7);this.JJ.FP(16);this.EL.G(A5Y);this.J(this.AX,0);this.J(this.JJ,0);
this.J(this.EL,0);this.CZ.AA9([this,this.Rn,this.KE]);this.AX.AF([this,this.ZW,this.
Ro]);this.JJ.AF([this,this.Ak9,this.Afo]);this.EL.Dh(this.CZ);this.EL.AF([B=this.
CZ,B.Cz,B.CB]);this.Init(aArg);},_Done:function(){this.__proto__=C.D1;this.CZ._Done(
);this.AX._Done();this.JJ._Done();this.EL._Done();this.GermanStateToString._Done(
);this.CountryToString._Done();C.D1._Done.call(this);},_ReInit:function(){C.D1._ReInit.
call(this);this.CZ._ReInit();this.AX._ReInit();this.JJ._ReInit();this.EL._ReInit(
);this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:function(
D){var B;C.D1._Mark.call(this,D);if((B=this.CZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::PremisesIDGerman"};C.AMA={MU:null,MT:null,EC:null,
FB:null,D7:null,D6:null,D5:null,C0:null,GE:function(E){if(this.Q2===E)return;C.KA.
GE.call(this,E);this.C0.Dg(E);this.D5.Dg(E);this.D6.Dg(E);this.D7.Dg(E);this.FB.
Dg(E);this.EC.Dg(E);this.MT.Dg(E);this.MU.Dg(E);},Acc:function(KR){var Cf=null;switch(
KR){case-1:case 0:Cf=this.Gf;break;case 1:Cf=this.C0;break;case 2:Cf=this.D5;break;
case 3:Cf=this.D6;break;case 4:Cf=this.D7;break;case 5:Cf=this.FB;break;case 6:Cf=
this.EC;break;case 7:Cf=this.MT;break;case 8:Cf=this.MU;break;case 9:Cf=this.Hp;
break;default:A.aa8("%s",Al6);}return Cf;},_Init:function(aArg){C.KA._Init.call(
this,aArg);C.DM._Init.call(this.MU={I:this},0);C.DM._Init.call(this.MT={I:this},
0);C.DM._Init.call(this.EC={I:this},0);C.DM._Init.call(this.FB={I:this},0);C.DM.
_Init.call(this.D7={I:this},0);C.DM._Init.call(this.D6={I:this},0);C.DM._Init.call(
this.D5={I:this},0);C.DM._Init.call(this.C0={I:this},0);this.__proto__=C.AMA;this.
G(Bl8);this.Hp.G(AEE);this.MU.G(Ave);this.MT.G(AUn);this.EC.G(AUo);this.FB.G(AUp
);this.D7.G(AUq);this.D6.G(AUr);this.D5.G(AUs);this.C0.G(A5H);this.Gf.G(AUt);this.
El.G(AUt);this.J(this.MU,-2);this.J(this.MT,-2);this.J(this.EC,-2);this.J(this.FB
,-2);this.J(this.D7,-2);this.J(this.D6,-2);this.J(this.D5,-2);this.J(this.C0,-2);
this.MU.Ds=[this,this.HA];this.MT.Ds=[this,this.HA];this.EC.Ds=[this,this.HA];this.
FB.Ds=[this,this.HA];this.D7.Ds=[this,this.HA];this.D6.Ds=[this,this.HA];this.D5.
Ds=[this,this.HA];this.C0.Ds=[this,this.HA];},_Done:function(){this.__proto__=C.
KA;this.MU._Done();this.MT._Done();this.EC._Done();this.FB._Done();this.D7._Done(
);this.D6._Done();this.D5._Done();this.C0._Done();C.KA._Done.call(this);},_ReInit:
function(){C.KA._ReInit.call(this);this.MU._ReInit();this.MT._ReInit();this.EC._ReInit(
);this.FB._ReInit();this.D7._ReInit();this.D6._ReInit();this.D5._ReInit();this.C0.
_ReInit();},_Mark:function(D){var B;C.KA._Mark.call(this,D);if((B=this.MU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.MT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C0)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber10"};C.AO8={Gd:0,CZ:null,AX:null
,EL:null,CountryToString:null,Kv:0,Lr:false,Init:function(aArg){A.za([this,this.
Tn],[this,this.Rn,this.KE],0);},Ai:function(Ae){C.D1.Ai.call(this,Ae);this.AX.GE(
this.K3);this.EL.Dg(this.K3);},Dz:function(H){var F;if(!this.N)return;switch(this.
A3){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.N
,F[1].call(F[0])).GX(A.jm);(F=this.N,F[1].call(F[0])).CA=[this,this.Gu];(F=this.
N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).Db(null);(F=this.N,F[1].call(F[0])).Cb(
this.CountryToString.Ca(this.Kv));(F=this.N,F[1].call(F[0])).Cl=null;}break;default:{(
F=this.N,F[1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GX(A.jm);(
F=this.N,F[1].call(F[0])).CA=[this,this.Gu];(F=this.N,F[1].call(F[0])).Cm(null);(
F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,
F[1].call(F[0])).Db(null);(F=this.N,F[1].call(F[0])).Cb(A.jm);(F=this.N,F[1].call(
F[0])).Cl=null;}}},Ec:function(EH){var YI=this.A3;if(EH<0)EH=0;else if(EH>this.Qz
)EH=this.Qz;switch(EH){case 0:{this.A8(null);if(!this.Gd)this.KE(0);}break;case 1:
this.A8(this.EL);break;case 2:{this.A8(this.AX);if(!this.Gd||(YI>0))this.AX.UU(2
);else this.AX.UU(7);}break;default:throw new Error(Aqe+EH.toFixed());}this.A3=EH;
C.D1.Ec.call(this,EH);},Bu:function(E){if(this.AI===E)return;this.AI=E;this.Lr=true;
this.Ro(A._GetAutoObject(A.Device.Helper).T$(E,0,12));this.KE(A._GetAutoObject(A.
Device.Converter).AfQ(E));this.Lr=false;if(!!this.AI)this.AX.JM(12);else this.AX.
JM(0);this.Al();},Gy:function(H){var F;if(!this.AI){var BR=this.AI;this.Bu(A._GetAutoObject(
A.Device.Helper).Azm());if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AI));A.aat(this.Q,0);}}this.Ec(this.Qz);},Ahu:function(){return this.Gd;},Ahy:function(
){return 999999999999;},KE:function(E){if(this.Kv===E)return;this.Kv=E;if(this.Lr===
false)A.ow([this,this.TJ],this);A.aat([this,this.Rn,this.KE],0);},Ro:function(E){
if(this.Gd===E)return;this.Gd=E;if(this.Lr===false)A.ow([this,this.TJ],this);A.aat([
this,this.ZW,this.Ro],0);},TJ:function(H){var F;var aString=A.aaq(A._GetAutoObject(
A.Device.Converter).ArO(this.Kv),3,10)+A.aar(this.Gd,12,10);var BR=this.AI;this.
Bu(A.aa2(aString,0,10));if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AI));A.aat(this.Q,0);}},Rn:function(){return this.Kv;},ZW:function(){return this.
Gd;},_Init:function(aArg){C.D1._Init.call(this,aArg);C.CZ._Init.call(this.CZ={I:
this},0);C.Az6._Init.call(this.AX={I:this},0);C.ApL._Init.call(this.EL={I:this},
0);A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.AO8;var B;this.Qz=2;this.AX.G(Bl9);this.EL.G(A5Y);this.J(this.AX,0);this.J(this.
EL,0);this.CZ.AA9([this,this.Rn,this.KE]);this.AX.AF([this,this.ZW,this.Ro]);this.
EL.Dh(this.CZ);this.EL.AF([B=this.CZ,B.Cz,B.CB]);this.Init(aArg);},_Done:function(
){this.__proto__=C.D1;this.CZ._Done();this.AX._Done();this.EL._Done();this.CountryToString.
_Done();C.D1._Done.call(this);},_ReInit:function(){C.D1._ReInit.call(this);this.
CZ._ReInit();this.AX._ReInit();this.EL._ReInit();this.CountryToString._ReInit();
},_Mark:function(D){var B;C.D1._Mark.call(this,D);if((B=this.CZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::PremisesIDInternational"};C.NewMenu={EA:null,Ac:null,
AD:null,Wl:null,Wm:null,Wk:null,Wj:null,DS:function(H){var B;C.Aw.DS.call(this,H
);if(!!this.A6&&((this.A6.S&0x400)===0x400))this.Ac.IA(this.A6,true,null,null);}
,CE:function(H){C.Aw.CE.call(this,H);A._GetAutoObject(A.Device.Device).Aq.Bo(null
);A._GetAutoObject(A.Device.Device).Bt.Bo(null);A._GetAutoObject(A.Device.Helper
).Aiv();A._GetAutoObject(A.Device.Helper).Apr();},H4:function(H){var Ce=(C.E3.isPrototypeOf(
H)?H:null);if(!Ce)return;if(Ce===this.Wl)A._GetAutoObject(C.A1).BX(27);else if(Ce===
this.Wm)A._GetAutoObject(C.A1).BX(26);else if(Ce===this.Wk)A._GetAutoObject(C.A1
).BX(62);else if(Ce===this.Wj)A._GetAutoObject(C.A1).BX(89);},AXD:function(H){A.
_GetAutoObject(C.A1).Fl();},FX:function(H){var B;this.AD.N0((B=this.Ac.Dd(0x1))[
3]-B[1]);this.AD.N4((B=this.Ac.M)[3]-B[1]);this.AD.N2(-this.Ac.Br[1]);},Iu:function(
H){A.ow([this,this.FX],this);},_Init:function(aArg){C.Aw._Init.call(this,aArg);A.
abh.AH._Init.call(this.EA={I:this},0);A.Core.Ac._Init.call(this.Ac={I:this},0);C.
AD._Init.call(this.AD={I:this},0);C.E3._Init.call(this.Wl={I:this},0);C.E3._Init.
call(this.Wm={I:this},0);C.E3._Init.call(this.Wk={I:this},0);C.E3._Init.call(this.
Wj={I:this},0);this.__proto__=C.NewMenu;this.Background.L(A.iF.CP);this.N.W(true
);this.N.Cb(A.jm);this.D9.An(false);this.Dt(C.Aso);this.EA.AW(0x3F);this.EA.G(FK
);this.EA.L(A.iF.CD);this.Ac.G(FK);this.Ac.Le(9);this.AD.G(JT);this.Wl.G(Nn);this.
Wl.Aj(true);this.Wl.U(A.z2(A.abg.A1M));this.Wm.G(AUy);this.Wm.Aj(true);this.Wm.U(
A.z2(A.abg.NewAnimals));this.Wk.G(Oe);this.Wk.Aj(true);this.Wk.U(A.z2(A.abg.Calving
));this.Wj.G(MB);this.Wj.Aj(true);this.Wj.U(A.z2(A.abg.AnimalLoss));this.J(this.
EA,0);this.J(this.Ac,0);this.J(this.AD,0);this.J(this.Wl,0);this.J(this.Wm,0);this.
J(this.Wk,0);this.J(this.Wj,0);this.N.CA=[this,this.AXD];this.N.C8(A.zW(A.abi.ET
));this.Ac.Eu=[this,this.Iu];this.Wl.AR=[this,this.H4];this.Wl.Dx(A.zW(A.abi.Az2
));this.Wm.AR=[this,this.H4];this.Wm.Dx(A.zW(A.abi.AsC));this.Wk.AR=[this,this.H4
];this.Wk.Dx(A.zW(A.abi.ALC));this.Wj.AR=[this,this.H4];this.Wj.Dx(A.zW(A.abi.ALt
));},_Done:function(){this.__proto__=C.Aw;this.EA._Done();this.Ac._Done();this.AD.
_Done();this.Wl._Done();this.Wm._Done();this.Wk._Done();this.Wj._Done();C.Aw._Done.
call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.EA._ReInit();this.Ac.
_ReInit();this.AD._ReInit();this.Wl._ReInit();this.Wm._ReInit();this.Wk._ReInit(
);this.Wj._ReInit();this.Wl.U(A.z2(A.abg.A1M));this.Wm.U(A.z2(A.abg.NewAnimals));
this.Wk.U(A.z2(A.abg.Calving));this.Wj.U(A.z2(A.abg.AnimalLoss));},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.EA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Wk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wj)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewMenu"};C.ANl={Km:null,EaseOfDelivery:
null,BirthType:null,AaA:null,LS:null,DZ:null,GA:null,K$:null,Awm:true,Init:function(
aArg){this.A8(this.GU);A.ow([this,this.Iw],this);},EY:function(H){var B;A._GetAutoObject(
A.Device.Helper).V.GZ();A._GetAutoObject(C.A1).Fl();if(!!this.Km)this.Km.EY(this
);},Ad9:function(H){var B;var F;A._GetAutoObject(A.Device.Helper).V.DO((F=this.Df.
Q,F[1].call(F[0])));A._GetAutoObject(A.Device.Helper).V.Atx(true);if(!!this.Km)this.
Km.Ad9(this);if(A._GetAutoObject(A.Device.Device).Aq.Mp())A._GetAutoObject(A.Device.
Helper).AWE(A._GetAutoObject(A.Device.Helper).V,5,5,0,[this,this.Aw0]);else{this.
Anp();A.ow([this,this.Anq],this);}},Arf:function(){this.N.Cb(A.jm);this.N.Db(A.zW(
A.abi.Az5));this.N.Cl=[this,this.Avt];},CE:function(H){var B;C.Hm.CE.call(this,H
);if(A._GetAutoObject(A.Device.Device).Aq.Mp()){A._GetAutoObject(A.Device.Device
).A_(41,true,A._GetAutoObject(A.Device.Device).Aq.Ie().toFixed(),0,null);this.EY(
this);}else if(this.Awm){this.Awm=false;A.ow([this,this.AXP],this);}else if(!this.
Km){this.Km=A._NewObject(C.ANm,0);this.Km.A3s([this,this.Axp]);A._GetAutoObject(
A.Device.Helper).V.GC();A._GetAutoObject(A.Device.Helper).Ax$(A._GetAutoObject(A.
Device.Helper).V);A._GetAutoObject(A.Device.Helper).V.Aaa(this.ApW.Ab4(6));this.
Km.Lv(this);if(!A._GetAutoObject(A.Device.Helper).V.NaisIdMother)this.EY(this);}
},Anp:function(){A._GetAutoObject(A.Device.Helper).V.Cr(A._GetAutoObject(A.Device.
Device).Aq);var Oi=A._GetAutoObject(A.Device.Device).Aq.LL(0,A._GetAutoObject(A.
Device.Helper).V.Id);A._GetAutoObject(A.Device.Device).UV(Oi);if(A._GetAutoObject(
A.Device.Helper).AkP()){if(A._GetAutoObject(A.Device.Device).Bt.Mp())A._GetAutoObject(
A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bt.Ie().toFixed(),
0,null);else{var B$=A._NewObject(A.Device.Rating,0);B$.GC();B$.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).V.Id);B$.OnSetBodyWeight(this.PA);B$.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).V.DateOfBirth);B$.Cr(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A0Z(A._GetAutoObject(A.Device.Helper).V.DateOfBirth
,true);},Anq:function(H){var B;if(!!this.Km)this.Km.Anq(this);},Iw:function(H){if(
A._GetAutoObject(A.Device.Helper).AkP())this.EF.W(true);else this.EF.W(false);},
Aw0:function(H){var As=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!As)return;
switch(As.Id){case 41:break;default:A.aa8("%s%e",Au9,As.Id);}},Axp:function(H){this.
Lv(this);this.Ate(A._GetAutoObject(A.Device.Helper).Ahw(A._GetAutoObject(A.Device.
Helper).V.AnimalType));this.Pw(this.GU);},Am5:function(H){var F;C.Hm.Am5.call(this
,H);(F=this.EF.Q,F[2].call(F[0],this.EF.AlC));},AXP:function(H){A._GetAutoObject(
C.A1).BX(90);},_Init:function(aArg){C.Hm._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AaA._Init.call(this.AaA={I:this},0);C.AfG._Init.call(this.LS={I:this
},0);C.AlA._Init.call(this.DZ={I:this},0);C.B_._Init.call(this.GA={I:this},0);C.
B_._Init.call(this.K$={I:this},0);this.__proto__=C.ANl;var B;this.Dt(C.AK1);this.
LS.G(AfV);this.LS.Aj(true);this.LS.U(A.z2(A.abg.AZW));this.FD.G(Yh);this.DZ.G(Yh
);this.DZ.Aj(true);this.DZ.U(A.z2(A.abg.AnR));this.DZ.AOB(true);this.GA.G(Yh);this.
GA.Aj(true);this.GA.U(A.z2(A.abg.AsT));this.K$.G(Yh);this.K$.Aj(true);this.K$.U(
A.z2(A.abg.Akl));this.J(this.LS,-4);this.J(this.DZ,-2);this.J(this.GA,0);this.J(
this.K$,0);this.EaseOfDelivery.NZ(A._GetAutoObject(A.Device.Helper).V);this.BirthType.
NZ(A._GetAutoObject(A.Device.Helper).V);this.AaA.NZ(A._GetAutoObject(A.Device.Helper
).V);this.LS.Hb([this,this.Es,this.HU]);this.LS.AF([B=A._GetAutoObject(A.Device.
Helper).V,B.ANV,B.Alj]);this.DZ.Hb([this,this.Es,this.HU]);this.DZ.M$([B=this.DZ
,B.Gy]);this.DZ.Na(A.zW(A.abi.Edit));this.DZ.AcV([B=A._GetAutoObject(A.Device.Helper
).V,B.AAI,B.AcO]);this.M8.AF([B=this.AaA,B.Cz,B.CB]);this.M8.Dh(this.AaA);this.GA.
AF([B=this.BirthType,B.Cz,B.CB]);this.GA.Dh(this.BirthType);this.K$.AF([B=this.EaseOfDelivery
,B.Cz,B.CB]);this.K$.Dh(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.Hm;this.EaseOfDelivery._Done();this.BirthType._Done();this.AaA.
_Done();this.LS._Done();this.DZ._Done();this.GA._Done();this.K$._Done();C.Hm._Done.
call(this);},_ReInit:function(){C.Hm._ReInit.call(this);this.EaseOfDelivery._ReInit(
);this.BirthType._ReInit();this.AaA._ReInit();this.LS._ReInit();this.DZ._ReInit(
);this.GA._ReInit();this.K$._ReInit();},_Mark:function(D){var B;C.Hm._Mark.call(
this,D);if((B=this.Km)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.K$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewAnimalLossDataScreen"};C.AIf={Init:function(aArg){var B;A.za([this
,this.A$v],[B=A._GetAutoObject(A.Device.Device),B.AAO,B.AEN],0);A.ow([this,this.
A$v],this);},AGN:function(){var Bb=null;switch(A._GetAutoObject(A.Device.Device).
ZT){case 0:Bb=A._GetAutoObject(A.Device.Helper).Azf();break;case 1:Bb=A._GetAutoObject(
A.Device.Helper).AKm();break;case 2:Bb=A._GetAutoObject(A.Device.Helper).LO();break;
default:throw new Error(AUz+A._GetAutoObject(A.Device.Device).ZT.toFixed());}A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);},A$v:function(H){switch(A._GetAutoObject(A.Device.Device
).ZT){case 0:this.Et(A.z2(A.abg.A1V));break;case 1:this.Et(A.z2(A.abg.Bc$));break;
case 2:this.Et(A.z2(A.abg.ANq));break;default:A.aa8("%s",AUz+A._GetAutoObject(A.
Device.Device).ZT.toFixed());}},_Init:function(aArg){C.Akh._Init.call(this,aArg);
this.__proto__=C.AIf;this.Bf_(C.ALe);this.D9.Z2(A._NewObject(C.AK6,0));this.Init(
aArg);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ANm={AwR:0,Agm:
null,ArR:null,A9b:0,AX2:0,AW7:0,Init:function(aArg){this.A9b=A._GetAutoObject(A.
Device.Helper).V.Id;this.Agm=A._GetAutoObject(A.Device.Device).Aq.Filter;this.AwR=
A._GetAutoObject(A.Device.Helper).V.NaisId;this.AW7=A._GetAutoObject(A.Device.Helper
).V.AnimalType;},Lv:function(H){A._GetAutoObject(A.Device.Helper).V.Alj(this.AwR
);A._GetAutoObject(A.Device.Helper).V.Alg(true);switch(this.AW7){case 0:case 1:A.
_GetAutoObject(A.Device.Helper).V.DO(0);break;case 2:A._GetAutoObject(A.Device.Helper
).V.DO(2);break;default:A.aa8("%s%e",AUk,this.AW7);}},EY:function(H){A._GetAutoObject(
A.Device.Device).Aq.Bo(this.Agm);if(!!this.AX2)this.A$x();},Ad9:function(H){A._GetAutoObject(
A.Device.Device).Aq.Bo(null);},A$x:function(){var AqT=A._NewObject(A.Device.Animal
,0);var Z=A._GetAutoObject(A.Device.Device).Aq.LL(0,this.A9b);AqT.Fo(Z,A._GetAutoObject(
A.Device.Device).Aq);AqT.Atk(A._GetAutoObject(A.Device.Helper).V.DateOfBirth);AqT.
Ao2(false);AqT.Aty(AqT.LactationNumber+1);AqT.Cr(A._GetAutoObject(A.Device.Device
).Aq);},Anq:function(H){this.AX2++;var BqH=A._GetAutoObject(A.Device.Converter).
Baj(A._GetAutoObject(A.Device.Helper).V.BirthType);if((this.AX2<BqH)&&(A._GetAutoObject(
A.Device.Helper).AhM(A._GetAutoObject(A.Device.Helper).V.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A_(59,true,A.jm,0,[this,this.TE]);else this.A8d(
this);},TE:function(H){var As=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(
!!As&&(As.PopupState===8))this.A8d(this);else if(!!As&&(As.PopupState===7))this.
Axp(this);},Axp:function(H){var B;var HF=A._GetAutoObject(A.Device.Helper).V.AnimalType;
var AdV=A._GetAutoObject(A.Device.Helper).V.BirthType;var Bn=A._GetAutoObject(A.
Device.Helper).V.Breed;var Yt=A._GetAutoObject(A.Device.Helper).V.DateOfBirth;var
AFX=A._GetAutoObject(A.Device.Helper).V.EaseOfDelivery;if(!!this.ArR)(B=this.ArR
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).V.DO(HF);A._GetAutoObject(
A.Device.Helper).V.Ah$(AdV);A._GetAutoObject(A.Device.Helper).V.O1(Bn);A._GetAutoObject(
A.Device.Helper).V.AcO(Yt);A._GetAutoObject(A.Device.Helper).V.Aib(AFX);},A8d:function(
H){this.A$x();A._GetAutoObject(C.A1).Fl();A._GetAutoObject(A.Device.Device).Aq.Bo(
this.Agm);},A3s:function(E){if(A.z$(this.ArR,E))return;this.ArR=E;},_Init:function(
aArg){this.__proto__=C.ANm;this.Init(aArg);A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Agm)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.ArR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AIw={Init:function(aArg){
var B;A.za([this,this.A9z],[B=A._GetAutoObject(A.Device.Device),B.ANG,B.AUA],0);
this.A9z(this);},Cr:function(){A.aa8("%s",Bl_);},Fo:function(AaJ){C.AbA.Fo.call(
this,AaJ);var P;for(P=16;P>0;P--)this.Iq.Set(P,this.Iq.Get(P-1));this.Iq.Set(0,0
);if(this.DW<17)this.DW++;else A.aa8("%s",Bl$);},A9z:function(H){this.Fo(A._GetAutoObject(
A.Device.Device).Ary);A.vv(this,0);},A1j:function(Jr){switch(Jr){case 2048:return false;
default:return true;}},_Init:function(aArg){C.AbA._Init.call(this,aArg);this.__proto__=
C.AIw;this.Init(aArg);},_className:"Application::AutoActionsSelectableClass"};C.
Ayl={_Init:function(){C.AIw._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.Jc={DU:null,T:null,A1F:true,U:function(E){C.Ix.U.call(this,E);this.
T.R(E);},CW:function(E){C.Ix.CW.call(this,E);this.T.L(E);},Bga:function(E){if(this.
A1F===E)return;this.A1F=E;this.DU.W(E);},_Init:function(aArg){C.Ix._Init.call(this
,aArg);A.abh.DU._Init.call(this.DU={I:this},0);C.CH._Init.call(this.T={I:this},0
);this.__proto__=C.Jc;this.DU.D$(Bma);this.DU.Eg(Bmb);this.DU.L(A.iF.A7);this.T.
AW(0x3F);this.T.G(Bmc);this.T.A0(0x11);this.T.L(A.iF.Text);this.J(this.DU,0);this.
J(this.T,0);this.T.Y(A.zW(A.eV.OI));this.T.Bz(A.zW(A.eV.K7));this.T.C7(A.zW(A.eV.
Cq));},_Done:function(){this.__proto__=C.Ix;this.DU._Done();this.T._Done();C.Ix.
_Done.call(this);},_ReInit:function(){C.Ix._ReInit.call(this);this.DU._ReInit();
this.T._ReInit();},_Mark:function(D){var B;C.Ix._Mark.call(this,D);if((B=this.DU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.AK6={AeR:null,Zo:null,EU:null,EM:null,CV:null
,Init:function(aArg){var B;A.za([this,this.AYx],[B=A._GetAutoObject(A.Device.Device
),B.AAO,B.AEN],0);A.ow([this,this.AYx],this);},CW:function(E){C.WH.CW.call(this,
E);this.CV.L(E);},A3a:function(H){A.ow([this,this.AYx],this);},AX3:function(H){var
B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].call(F[
0])).F0();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.
DG(1,4))?B:null);if(!!FilterCriterion)Filter.P6(FilterCriterion);A._GetAutoObject(
A.Device.Device).Aq.Bo(Filter);}},CY:function(H){var B;var F;C.WH.CY.call(this,H
);if(!(F=this.Q,F[1].call(F[0]))){this.CV.Ar(A.zW(A.abi.AhC));return;}var Brj=(A.
Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DG(38,0))?
B:null);var Avx=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,F[
1].call(F[0])).DG(14,0))?B:null);if(!!Brj)this.CV.Ar(A.zW(A.abi.Azs));else if(!!
Avx&&(Avx.AY===1))this.CV.Ar(A.zW(A.abi.ALE));else this.CV.Ar(A.zW(A.abi.AhC));}
,AYx:function(H){var F;var Filter=null;var AJ_;switch(A._GetAutoObject(A.Device.
Device).ZT){case 0:Filter=A._GetAutoObject(A.Device.Helper).Azf();break;case 1:Filter=
A._GetAutoObject(A.Device.Helper).AKm();break;case 2:Filter=A._GetAutoObject(A.Device.
Helper).LO();break;default:throw new Error(AUz+A._GetAutoObject(A.Device.Device).
ZT.toFixed());}var Axy=this.Afi();if(Axy>0){AJ_=A._NewObject(A.Device.Int32FilterCriterion
,0);AJ_.Initialize(1,4,Axy,false);Filter.CO(AJ_);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AX.Aia(false);},NG:function(H){if(!this.Afi())this.AX.Aia(true
);this.A8(this.AX);this.Al();},Md:function(H){this.AX.Aia(false);this.A8(this.AeR
);this.Al();},_Init:function(aArg){C.WH._Init.call(this,aArg);C.Aoj._Init.call(this.
AeR={I:this},0);C.Zo._Init.call(this.Zo={I:this},0);A.Core.B0._Init.call(this.EU={
I:this},0);A.Core.B0._Init.call(this.EM={I:this},0);A.abh.Am._Init.call(this.CV={
I:this},0);this.__proto__=C.AK6;var B;this.G(Bmd);this.CL.G(Bme);this.CL.W(false
);this.AX.G(Bmf);this.AeR.G(Bmg);this.Zo.AF(A._GetAutoObject(A.Device.Device).ZT
);this.EU.Filter=6;this.EM.Filter=7;this.CV.G(Bmh);this.J(this.AeR,0);this.J(this.
CV,0);this.AeR.Dh(this.Zo);this.AeR.AF([B=this.Zo,B.Cz,B.CB]);this.EU.B1=[this,this.
NG];this.EM.B1=[this,this.Md];this.CV.Ar(A.zW(A.abi.AhC));this.Init(aArg);},_Done:
function(){this.__proto__=C.WH;this.AeR._Done();this.Zo._Done();this.EU._Done();
this.EM._Done();this.CV._Done();C.WH._Done.call(this);},_ReInit:function(){C.WH.
_ReInit.call(this);this.AeR._ReInit();this.Zo._ReInit();this.EU._ReInit();this.EM.
_ReInit();this.CV._ReInit();},_Mark:function(D){var B;C.WH._Mark.call(this,D);if((
B=this.AeR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"
};C.Zo={AcF:null,Init:function(aArg){var B;A.za([this,this.A9d],[B=A._GetAutoObject(
A.Device.Device),B.AAO,B.AEN],0);A.ow([this,this.A9d],this);},Du:function(){return 3;
},AF:function(E){C.Dj.AF.call(this,E);A._GetAutoObject(A.Device.Device).AtD(E);}
,Aze:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;return this.
AcF.ApM(aIndex);},Azg:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-
1;return this.AcF.ApN(aIndex);},A9d:function(H){this.Q=A._GetAutoObject(A.Device.
Device).ZT;A.aat([this,this.Cz,this.CB],0);},_Init:function(aArg){C.Dj._Init.call(
this,aArg);A.Device.AcF._Init.call(this.AcF={I:this},0);this.__proto__=C.Zo;this.
Ci.Set(0,0);this.Ci.Set(1,1);this.Ci.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Dj;this.AcF._Done();C.Dj._Done.call(this);},_ReInit:function(){
C.Dj._ReInit.call(this);this.AcF._ReInit();},_Mark:function(D){var B;C.Dj._Mark.
call(this,D);if((B=this.AcF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.ALe={Ek:null,Ii:null,_Init:function(aArg){C.Ef._Init.call(this,aArg);C.CH._Init.
call(this.Ek={I:this},0);A.abh.Text._Init.call(this.Ii={I:this},0);this.__proto__=
C.ALe;this.G(Np);this.Background.G(Np);this.Ek.G(AEu);this.Ek.R(A.z2(A.abg.A04));
this.Ek.A0(0x12);this.Ek.L(A.iF.Text);this.Ii.AW(0x3F);this.Ii.G(Ai0);this.Ii.HT(
5);this.Ii.A0(0x14);this.Ii.R(A.z2(A.abg.ACR));this.Ii.L(A.iF.Text);this.J(this.
Ek,0);this.J(this.Ii,0);this.Ek.Y(A.zW(A.eV.Au));this.Ek.Bz(A.zW(A.eV.K7));this.
Ek.C7(A.zW(A.eV.Cq));this.Ii.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=
C.Ef;this.Ek._Done();this.Ii._Done();C.Ef._Done.call(this);},_ReInit:function(){
C.Ef._ReInit.call(this);this.Ek._ReInit();this.Ii._ReInit();this.Ek.R(A.z2(A.abg.
A04));this.Ii.R(A.z2(A.abg.ACR));this.Ek.Y(A.zW(A.eV.Au));this.Ek.Bz(A.zW(A.eV.K7
));this.Ek.C7(A.zW(A.eV.Cq));this.Ii.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;
C.Ef._Mark.call(this,D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ii)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={Jp:null,A_$:function(){if(A._GetAutoObject(A.Device.Helper
).V.NaisId>0)this.A9V(this);else A._GetAutoObject(A.Device.Device).A_(63,true,A.
jm,0,[this,this.TE]);},A9V:function(H){A._GetAutoObject(C.A1).Fl();},TE:function(
H){var As=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if((!!As&&(As.Id===63)
)&&(As.PopupState===7))this.A9V(this);},_Init:function(aArg){C.Lz._Init.call(this
,aArg);A.abh.Text._Init.call(this.Jp={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dt(C.AK5);this.IK.G(Bmi);this.IK.Ail(2);this.Aan.W(false);this.AM7=12;this.
Number.G(Bmj);this.Number.R(A.z2(A.abg.A4J));this.AY6=false;this.Jp.G(Bmk);this.
Jp.HT(5);this.Jp.KF(true);this.Jp.R(((A.z2(A.abg.Ok)+A.z2(A.abg.Colon))+Cv)+A.z2(
A.abg.Ax9));this.Jp.L(A.iF.Text);this.Lg(this.IK,-1);this.Lg(this.In,-1);this.Lg(
this.Aan,-1);this.J(this.Jp,0);this.Jp.Y(A.zW(A.eV.Au));},_Done:function(){this.
__proto__=C.Lz;this.Jp._Done();C.Lz._Done.call(this);},_ReInit:function(){C.Lz._ReInit.
call(this);this.Jp._ReInit();this.Number.R(A.z2(A.abg.A4J));this.Jp.R(((A.z2(A.abg.
Ok)+A.z2(A.abg.Colon))+Cv)+A.z2(A.abg.Ax9));this.Jp.Y(A.zW(A.eV.Au));},_Mark:function(
D){var B;C.Lz._Mark.call(this,D);if((B=this.Jp)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::MotherScanScreen"};C.AK5={_Init:function(aArg){C.An_._Init.
call(this,aArg);this.__proto__=C.AK5;this.CL.DO(1);},_className:"Application::HeaderScannedCowId"
};C.IK={ZL:null,ZK:null,ZJ:null,Q3:null,ApP:0,Ail:function(E){if(this.ApP===E)return;
this.ApP=E;var bitmap=null;var AWg=Bml;var AWf=null;var AWh=false;switch(E){case
0:bitmap=A.zW(A.abi.Aog);break;case 1:{bitmap=A.zW(A.abi.AMe);AWg=Bmm;AWf=A.zW(A.
eV.AB);AWh=true;}break;case 2:{bitmap=A.zW(A.abi.AMf);AWg=Bmn;AWf=A.zW(A.eV.Cq);
AWh=true;}break;default:throw new Error(Bmo+E.toFixed());}this.ZJ.Ar(bitmap);this.
ZK.Ar(bitmap);this.ZL.Ar(bitmap);this.Q3.G(A.aaM(this.Q3.M,AWg));this.Q3.Y(AWf);
this.Q3.W(AWh);this.G(A.aaN(this.M,bitmap.FrameSize));},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.abh.Am._Init.call(this.ZL={I:this},0);A.abh.Am._Init.call(
this.ZK={I:this},0);A.abh.Am._Init.call(this.ZJ={I:this},0);A.abh.Text._Init.call(
this.Q3={I:this},0);this.__proto__=C.IK;this.G(AEH);this.ZL.AW(0x3);this.ZL.G(AEH
);this.ZL.L(A.iF.Hy);this.ZL.Cc(2);this.ZK.AW(0x3);this.ZK.G(AEH);this.ZK.L(A.iF.
AeH);this.ZK.Cc(1);this.ZJ.AW(0x3);this.ZJ.G(AEH);this.ZJ.L(A.iF.Text);this.ZJ.Cc(
0);this.Q3.AW(0x14);this.Q3.G(Bmp);this.Q3.R(A._NewObject(A.Device.LanguageToString
,0).KL(A._GetAutoObject(A.Device.Device).Language)+Bmq);this.Q3.L(0xFF020202);this.
Q3.W(false);this.J(this.ZL,0);this.J(this.ZK,0);this.J(this.ZJ,0);this.J(this.Q3
,0);this.ZL.Ar(A.zW(A.abi.Aog));this.ZK.Ar(A.zW(A.abi.Aog));this.ZJ.Ar(A.zW(A.abi.
Aog));this.Q3.Y(A.zW(A.eV.AB));},_Done:function(){this.__proto__=A.Core.O;this.ZL.
_Done();this.ZK._Done();this.ZJ._Done();this.Q3._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.ZL._ReInit();this.ZK._ReInit(
);this.ZJ._ReInit();this.Q3._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.ZL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.ZJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q3)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"};C.ApP={Transponder:
0,BxQ:1,BxR:2};C.AK1={Am:null,CW:function(E){C.BU.CW.call(this,E);this.Am.L(E);}
,_Init:function(aArg){C.BU._Init.call(this,aArg);A.abh.Am._Init.call(this.Am={I:
this},0);this.__proto__=C.AK1;this.Am.G(AUl);this.J(this.Am,0);this.Am.Ar(A.zW(A.
abi.AKT));},_Done:function(){this.__proto__=C.BU;this.Am._Done();C.BU._Done.call(
this);},_ReInit:function(){C.BU._ReInit.call(this);this.Am._ReInit();},_Mark:function(
D){var B;C.BU._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={Ja:0,YF:4,
AjQ:function(H){C.S1.AjQ.call(this,H);if(A._GetAutoObject(A.Device.Helper).A8O()
){this.Ja=A._GetAutoObject(A.Device.Helper).S2.Id;var Agj=A._GetAutoObject(A.Device.
Helper).AMG(this.Ja);if(Agj){A._GetAutoObject(A.Device.Device).A_(21,true,A._GetAutoObject(
A.Device.Converter).U_(this.Ja),0,[this,this.TE]);return;}Agj=A._GetAutoObject(A.
Device.Helper).AMI(this.Ja);if(Agj&&(A._GetAutoObject(A.Device.Helper).V.TransponderId
!==this.Ja)){A._GetAutoObject(A.Device.Device).A_(25,true,A._GetAutoObject(A.Device.
Converter).U_(this.Ja),0,[this,this.TE]);return;}this.YF=A._GetAutoObject(A.Device.
Helper).AMJ(this.Ja);switch(this.YF){case 0:A._GetAutoObject(A.Device.Device).A_(
45,true,this.Ja.toFixed().length.toFixed(),0,[this,this.TE]);break;case 1:case 2:{
var BJ=A._GetAutoObject(A.Device.Converter).Aut(this.Ja);A._GetAutoObject(A.Device.
Device).A_(46,true,BJ.toFixed(),0,[this,this.TE]);}break;case 3:this.A_2();break;
default:throw new Error(AEi+this.YF.toFixed());}}},EY:function(H){A._GetAutoObject(
C.A1).Fl();},TE:function(H){var As=(A.Device.PopupContext.isPrototypeOf(H)?H:null
);if(!!As)switch(As.PopupState){case 4:if(this.YF===2)this.A_2();else A._GetAutoObject(
A.Device.Device).Adg();break;case 5:this.EY(this);break;default:;}},A_2:function(
){A._GetAutoObject(A.Device.Helper).V.O2(this.Ja);if(!A._GetAutoObject(A.Device.
Helper).V.TransponderId)A._GetAutoObject(A.Device.Helper).V.Nc(this.Ja);A._GetAutoObject(
A.Device.Helper).V.Cr(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(A.Device.
Device).A_(68,true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(),0,null
);this.EY(this);},_Init:function(aArg){C.S1._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.W(true);this.Dt(C.If);this.Number.R(A.z2(A.abg.Bhy)
);this.IK.G(Bmr);this.In.G(Bms);this.Ail(1);this.N.CA=[this,this.EY];this.N.C8(A.
zW(A.abi.ET));},_className:"Application::SetSaveNaisIdScreen"};C.AJE={Lv:function(
H){C.AnW.Lv.call(this,H);A.ow([this,this.BtZ],this);},BtZ:function(H){this.Pw(this.
OU);},_Init:function(aArg){C.AnW._Init.call(this,aArg);this.__proto__=C.AJE;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.ApV={Animal:null,WhereAboutsToString:
null,GP:function(aIndex){return this.WhereAboutsToString.Ca(this.Da(aIndex));},AF:
function(E){C.Dj.AF.call(this,E);if(!!this.Animal)this.Animal.Aaa(E);},AYG:function(
H){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.aat([this,this.
Cz,this.CB],0);},NZ:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.zn([this,this.AYG],[B=this.Animal,B.AN_,B.Aaa],0);this.Animal=E;if(!!this.Animal
)A.za([this,this.AYG],[B=this.Animal,B.AN_,B.Aaa],0);A.ow([this,this.AYG],this);
},_Init:function(aArg){C.Dj._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.ApV;this.Ci.Set(0,1);
this.Ci.Set(1,2);this.Ci.Set(2,3);this.Ci.Set(3,4);this.Ci.Set(4,5);},_Done:function(
){this.__proto__=C.Dj;this.WhereAboutsToString._Done();C.Dj._Done.call(this);},_ReInit:
function(){C.Dj._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Dj._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.AQI={Du:function(){return 6;},_Init:function(aArg){C.ApV._Init.call(this,aArg
);this.__proto__=C.AQI;this.Ci.Set(0,0);this.Ci.Set(1,1);this.Ci.Set(2,2);this.Ci.
Set(3,3);this.Ci.Set(4,4);this.Ci.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AaA={Du:function(){return 5;},_Init:function(aArg){C.ApV._Init.call(this,aArg
);this.__proto__=C.AaA;this.Ci.Set(0,6);this.Ci.Set(1,7);this.Ci.Set(2,8);this.Ci.
Set(3,9);this.Ci.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AbD={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.za([this,this.A7y],[B=A._GetAutoObject(A.Device.
Device),B.ANH,B.AUB],0);A.ow([this,this.A7y],this);},Du:function(){return 2;},Da:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},GP:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jm;return this.AnimalIdAutoGenerationMethodToString.
Ca(aIndex);},DT:function(A2){return A2;},HN:function(){return 1;},AF:function(E){
C.AC.AF.call(this,E);A._GetAutoObject(A.Device.Device).As$(E);},A7y:function(H){
this.Q=A._GetAutoObject(A.Device.Device).Aev;A.aat([this,this.Cz,this.CB],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AbD;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.APE={Fa:null
,Ee:null,EartagNrAssignmentMode:null,EU:null,EM:null,G_:null,AX:null,Jg:null,Mn:
null,A3:0,AI:0,Init:function(aArg){},Ai:function(Ae){C.DV.Ai.call(this,Ae);if(this.
A3===1){if(this.GW){this.AX.GE(A.iF.CD);this.G_.Dg(A.iF.CD);this.Background.L(A.
iF.CP);this.T.L(A.iF.Text);}else{this.AX.GE(A.iF.CP);this.G_.Dg(A.iF.CP);this.Background.
L(A.iF.CD);this.T.L(A.iF.Text);}}else{if(this.GW){this.AX.GE(A.iF.CD);this.G_.Dg(
A.iF.CD);}else{this.AX.GE(A.iF.CP);this.G_.Dg(A.iF.CP);}this.A8(null);}this.Mn.L(
this.T.AV);},JC:function(H){C.DV.JC.call(this,H);if(!this.A3)this.Gy(this);else this.
Gu(this);},Dz:function(H){var F;if(!this.N)return;switch(this.A3){case 1:{(F=this.
N,F[1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GX(A.jm);(F=this.
N,F[1].call(F[0])).CA=[this,this.Gu];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.
N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(
F[0])).Db(null);(F=this.N,F[1].call(F[0])).Cb(A.jm);(F=this.N,F[1].call(F[0])).Cl=
null;}break;default:this.Fa.Aiw((F=this.N,F[1].call(F[0])));}},Gy:function(H){this.
Ec(1);},Gu:function(H){this.Ec(0);},Ec:function(EH){var F;if(!this.A3&&!!this.N)
this.Fa.Ahf((F=this.N,F[1].call(F[0])));this.A3=EH;if(this.A3<0)this.A3=0;else if(
this.A3>1)this.A3=1;switch(this.A3){case 0:this.A8(null);break;case 1:{this.A8(this.
AX);if(!this.AI)this.AX.UU(2);else this.AX.UU(7);}break;default:throw new Error(
Aqe+this.A3.toFixed());}this.Dz(this);this.Al();},Bu:function(E){if(this.AI===E)
return;this.AI=E;},NG:function(H){this.Axz(2);},Md:function(H){this.Axz(7);},Axz:
function(GJ){var B;var Av9=(A.Core.O.isPrototypeOf(B=this.A6)?B:null);if(!!Av9){
var AwS=(A.Core.O.isPrototypeOf(B=this.Q8(Av9,GJ,0x15))?B:null);if(!!AwS){this.A8(
AwS);return true;}}return false;},Ad1:function(H){var F;if(!this.Ee||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.Mn.Ar(
A._GetAutoObject(A.Device.Converter).AkE(2));break;case 1:this.Mn.Ar(A._GetAutoObject(
A.Device.Converter).AkE((F=this.Ee,F[1].call(F[0]))));break;default:throw new Error(
A5Z+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.ow([this,this.
AYf],this);},AYf:function(H){var B;var F;if(!this.Ee||!this.EartagNrAssignmentMode
){this.Jg.Z3(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0])
)){case 0:{this.AX.AF([B=A._GetAutoObject(A.Device.Device),B.Ak_,B.Al8]);this.Jg.
Z3([B=A._GetAutoObject(A.Device.Device),B.As1,B.Avl]);}break;case 1:switch((F=this.
Ee,F[1].call(F[0]))){case 1:{this.AX.AF([B=A._GetAutoObject(A.Device.Device),B.As2
,B.Avm]);this.Jg.Z3([B=A._GetAutoObject(A.Device.Device),B.ANM,B.AUD]);}break;case
0:{this.AX.AF([B=A._GetAutoObject(A.Device.Device),B.As3,B.Avn]);this.Jg.Z3([B=A.
_GetAutoObject(A.Device.Device),B.ANN,B.AUE]);}break;case 2:{this.AX.AF([B=A._GetAutoObject(
A.Device.Device),B.Ak_,B.Al8]);this.Jg.Z3([B=A._GetAutoObject(A.Device.Device),B.
As1,B.Avl]);}break;default:throw new Error(Bmt+(F=this.Ee,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(A5Z+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},UN:function(E){if(A.z_(this.Ee,E))return;if(!!this.Ee)A.zn([this
,this.Ad1],this.Ee,0);this.Ee=E;if(!!E)A.za([this,this.Ad1],this.Ee,0);if(!!E)A.
ow([this,this.Ad1],this);},Ald:function(E){if(A.z_(this.EartagNrAssignmentMode,E
))return;if(!!this.EartagNrAssignmentMode)A.zn([this,this.Ad1],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.za([this,this.Ad1],this.EartagNrAssignmentMode
,0);if(!!E)A.ow([this,this.Ad1],this);},SR:function(){return this.AI;},_Init:function(
aArg){C.DV._Init.call(this,aArg);A.Core.B0._Init.call(this.EU={I:this},0);A.Core.
B0._Init.call(this.EM={I:this},0);C.Aoj._Init.call(this.G_={I:this},0);C.AsJ._Init.
call(this.AX={I:this},0);C.ArW._Init.call(this.Jg={I:this},0);A.abh.Am._Init.call(
this.Mn={I:this},0);this.__proto__=C.APE;var B;this.G(Ye);this.T.An(false);this.
T.R(Ap_);this.T.L(A.iF.Bg);this.EU.Filter=6;this.EM.Filter=7;this.G_.G(Bmu);this.
AX.G(Bmv);this.Mn.G(Bmw);this.J(this.G_,0);this.J(this.AX,0);this.J(this.Mn,0);this.
Fa=A._NewObject(C.Aca,0);this.EU.B1=[this,this.NG];this.EM.B1=[this,this.Md];this.
G_.Dh(this.Jg);this.G_.AF([B=this.Jg,B.Cz,B.CB]);this.AX.AF([this,this.SR,this.Bu
]);this.Init(aArg);},_Done:function(){this.__proto__=C.DV;this.EU._Done();this.EM.
_Done();this.G_._Done();this.AX._Done();this.Jg._Done();this.Mn._Done();C.DV._Done.
call(this);},_ReInit:function(){C.DV._ReInit.call(this);this.EU._ReInit();this.EM.
_ReInit();this.G_._ReInit();this.AX._ReInit();this.Jg._ReInit();this.Mn._ReInit(
);},_Mark:function(D){var B;C.DV._Mark.call(this,D);if((B=this.Fa)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ee)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Jg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.AJs={UF:
null,Xl:null,ZQ:null,UB:null,Init:function(aArg){this.A8(this.UF);},AAD:function(
H){var A8$=(C.Ak2.isPrototypeOf(H)?H:null);if(!!A8$)A._GetAutoObject(A.Device.Device
).A_(A8$.Abm,true,A.jm,0,null);},DS:function(H){if((this.CF.CM===7)&&(this.A6===
this.UB))A._GetAutoObject(A.Device.Device).A_(10,true,A.jm,0,null);C.GN.DS.call(
this,H);},_Init:function(aArg){C.GN._Init.call(this,aArg);C.Ak2._Init.call(this.
UF={I:this},0);C.Ak2._Init.call(this.Xl={I:this},0);C.Ak2._Init.call(this.ZQ={I:
this},0);C.Ak2._Init.call(this.UB={I:this},0);this.__proto__=C.AJs;this.Dt(C.AKH
);this.UF.G(Kc);this.UF.Aj(true);this.UF.U(A.z2(A.abg.AfF));this.UF.Bk(false);this.
UF.Abm=79;this.Xl.G(RQ);this.Xl.Aj(true);this.Xl.U(A.z2(A.abg.A4W));this.Xl.Bk(true
);this.Xl.Abm=77;this.ZQ.G(Yf);this.ZQ.Aj(true);this.ZQ.U(A.abg.Bb4);this.ZQ.Bk(
false);this.ZQ.Abm=78;this.UB.G(AiW);this.UB.Aj(true);this.UB.U(A.z2(A.abg.About
));this.UB.Bk(true);this.UB.Abm=3;this.J(this.UF,0);this.J(this.Xl,0);this.J(this.
ZQ,0);this.J(this.UB,0);this.UF.AR=[this,this.AAD];this.Xl.AR=[this,this.AAD];this.
ZQ.AR=[this,this.AAD];this.UB.AR=[this,this.AAD];this.Init(aArg);},_Done:function(
){this.__proto__=C.GN;this.UF._Done();this.Xl._Done();this.ZQ._Done();this.UB._Done(
);C.GN._Done.call(this);},_ReInit:function(){C.GN._ReInit.call(this);this.UF._ReInit(
);this.Xl._ReInit();this.ZQ._ReInit();this.UB._ReInit();this.UF.U(A.z2(A.abg.AfF
));this.Xl.U(A.z2(A.abg.A4W));this.UB.U(A.z2(A.abg.About));},_Mark:function(D){var
B;C.GN._Mark.call(this,D);if((B=this.UF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Xl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.UB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceInfoScreen"
};C.AKH={_Init:function(aArg){C.OL._Init.call(this,aArg);this.__proto__=C.AKH;this.
Text.R(A.abg.Info);},_className:"Application::HeaderDeviceInfoMenu"};C.AJr={AjT:
null,Xf:null,ZR:null,ZO:null,SP:null,FactoryResetScope:null,Init:function(aArg){
this.A8(this.Xf);A.ow([this,this.Dz],this);},A9I:function(H){var B;var AwD=A._GetAutoObject(
A.Device.Device).Az_();switch(AwD){case 1:A._GetAutoObject(A.Device.Device).A_(84
,true,A.jm,0,null);break;case 0:A._GetAutoObject(A.Device.Device).A_(92,true,Yg,
0,[this,this.A92]);break;case 2:{this.AjT=[this,this.A9I];A.za([this,this.AgA],[
B=A._GetAutoObject(A.Device.Device),B.AcK,B.AdH],0);A._GetAutoObject(A.Device.Device
).A_(74,true,A.jm,0,[this,this.Am9]);}break;default:throw new Error(A50+AwD.toFixed(
));}},Am9:function(H){var B;var As=(A.Device.PopupContext.isPrototypeOf(H)?H:null
);if(!!As&&(As.PopupState===5)){A.zn([this,this.AgA],[B=A._GetAutoObject(A.Device.
Device),B.AcK,B.AdH],0);this.AjT=null;}},AgA:function(H){var B;if(A._GetAutoObject(
A.Device.Device).AiM===3){A._GetAutoObject(A.Device.Device).A_(74,false,A.jm,0,[
this,this.Am9]);A.zn([this,this.AgA],[B=A._GetAutoObject(A.Device.Device),B.AcK,
B.AdH],0);if(!!this.AjT)A.ow(this.AjT,this);this.AjT=null;}},A94:function(H){var
B;var AwD=A._GetAutoObject(A.Device.Device).Az$();switch(AwD){case 1:A._GetAutoObject(
A.Device.Device).A_(84,true,A.jm,0,null);break;case 0:A._GetAutoObject(A.Device.
Device).A_(96,true,A.jm,0,[this,this.BsB]);break;case 2:{this.AjT=[this,this.A94
];A.za([this,this.AgA],[B=A._GetAutoObject(A.Device.Device),B.AcK,B.AdH],0);A._GetAutoObject(
A.Device.Device).A_(74,true,A.jm,0,[this,this.Am9]);}break;case 3:A._GetAutoObject(
A.Device.Device).A_(95,true,A.jm,0,null);break;case 4:A._GetAutoObject(A.Device.
Device).A_(94,true,A.jm,0,null);break;default:throw new Error(A50+AwD.toFixed());
}},Bdm:function(H){switch(this.FactoryResetScope.Da(this.FactoryResetScope.Q)){case
1:A._GetAutoObject(A.Device.Device).A_(33,true,A.jm,0,[this,this.A_Q]);break;case
0:A._GetAutoObject(A.Device.Device).A_(7,true,A.jm,0,[this,this.A_Q]);break;default:
A.aa8("%s%i",Bmx,this.FactoryResetScope.Q);}},A_Q:function(H){var As=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!!As&&(As.PopupState===7))switch(As.Id){case 7:{A._GetAutoObject(
A.Device.Device).Bhn();A._GetAutoObject(A.Device.Device).A_(8,true,A.jm,0,null);
A._GetAutoObject(C.A1).BX(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).
Bhm();A._GetAutoObject(A.Device.Device).AoZ(0);A._GetAutoObject(A.Device.Device).
Ao0(0);A._GetAutoObject(A.Device.Device).Ao1(0);A._GetAutoObject(A.Device.Device
).Ao4(0);A._GetAutoObject(A.Device.Device).Ao5(0);A._GetAutoObject(A.Device.Device
).Ao6(0);A._GetAutoObject(A.Device.Device).SS(5);A._GetAutoObject(A.Device.Device
).Atn(0);A._GetAutoObject(A.Device.Device).Ato(0);A._GetAutoObject(A.Device.Device
).Atp(0);A._GetAutoObject(A.Device.Device).AtE(1);A._GetAutoObject(A.Device.Device
).AtF(1);A._GetAutoObject(A.Device.Device).AtG(1);A._GetAutoObject(A.Device.Device
).A_(34,true,A.jm,0,null);}break;default:A.aa8("%s%e",AEj,As.Id);}},A9J:function(
H){var B;if(!A._GetAutoObject(A.Device.Device).Aq.Cd()){A._GetAutoObject(A.Device.
Device).A_(30,true,A.jm,0,null);return;}if(A._GetAutoObject(A.Device.Device).AsM(
)===false){this.AjT=[this,this.A9J];A.za([this,this.AgA],[B=A._GetAutoObject(A.Device.
Device),B.AcK,B.AdH],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.jm,0,[this
,this.Am9]);return;}var Awk=A._GetAutoObject(A.Device.Device).Auj(1);if(Awk.ACT)
A._GetAutoObject(A.Device.Device).ArS(Awk);else A._GetAutoObject(A.Device.Device
).A_(88,true,A.jm,0,null);},A92:function(H){var As=(A.Device.PopupContext.isPrototypeOf(
H)?H:null);switch(As.Id){case 92:if(As.PopupState===9)A.z3([this,this.Brg],this);
break;case 93:if(As.PopupState===9)A.z3([this,this.Bri],this);break;default:throw new
Error(Bmy+As.Id.toFixed());}},Brg:function(H){if(A._GetAutoObject(A.Device.Device
).AyK()){var AXf=A._GetAutoObject(A.Device.Device).Aq.PF();A._GetAutoObject(A.Device.
Device).A_(80,true,AXf.toFixed(),0,null);}else A._GetAutoObject(A.Device.Device).
A_(82,true,A.jm,0,null);A._GetAutoObject(A.Device.Device).A_(92,false,A.jm,0,null
);},Bri:function(H){if(A._GetAutoObject(A.Device.Device).ACp()){var AXf=A._GetAutoObject(
A.Device.Device).Aq.PF();A._GetAutoObject(A.Device.Device).A_(81,true,AXf.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A_(83,true,A.jm,0,null);A._GetAutoObject(
A.Device.Device).A_(93,false,A.jm,0,null);},BsB:function(H){var As=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!!As&&(As.PopupState===7))A.ow([this,this.Bua],this);
},Bua:function(H){A._GetAutoObject(A.Device.Device).A_(93,true,Yg,0,[this,this.A92
]);},_Init:function(aArg){C.GN._Init.call(this,aArg);C.B9._Init.call(this.Xf={I:
this},0);C.B9._Init.call(this.ZR={I:this},0);C.B9._Init.call(this.ZO={I:this},0);
C.B_._Init.call(this.SP={I:this},0);C.FactoryResetScope._Init.call(this.FactoryResetScope={
I:this},0);this.__proto__=C.AJr;var B;this.Dt(C.AKG);this.Xf.G(Kc);this.Xf.Aj(true
);this.Xf.U(A.z2(A.abg.AyK));this.Xf.Bk(false);this.ZR.G(RQ);this.ZR.Aj(true);this.
ZR.U(A.z2(A.abg.ACp));this.ZR.Bk(true);this.ZO.G(Yf);this.ZO.Aj(true);this.ZO.U(
A.z2(A.abg.A0v));this.ZO.Bk(false);this.SP.G(Bmz);this.SP.Aj(true);this.SP.BeL(true
);this.SP.U(A.z2(A.abg.A0w));this.SP.Bk(true);this.J(this.Xf,0);this.J(this.ZR,0
);this.J(this.ZO,0);this.J(this.SP,0);this.Xf.AR=[this,this.A9I];this.ZR.AR=[this
,this.A94];this.ZO.AR=[this,this.A9J];this.SP.AR=[this,this.Bdm];this.SP.AF([B=this.
FactoryResetScope,B.Cz,B.CB]);this.SP.Dh(this.FactoryResetScope);this.Init(aArg);
},_Done:function(){this.__proto__=C.GN;this.Xf._Done();this.ZR._Done();this.ZO._Done(
);this.SP._Done();this.FactoryResetScope._Done();C.GN._Done.call(this);},_ReInit:
function(){C.GN._ReInit.call(this);this.Xf._ReInit();this.ZR._ReInit();this.ZO._ReInit(
);this.SP._ReInit();this.FactoryResetScope._ReInit();this.Xf.U(A.z2(A.abg.AyK));
this.ZR.U(A.z2(A.abg.ACp));this.ZO.U(A.z2(A.abg.A0v));this.SP.U(A.z2(A.abg.A0w));
},_Mark:function(D){var B;C.GN._Mark.call(this,D);if((B=this.AjT)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Xf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
ZR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FactoryResetScope)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"};C.AKG={
_Init:function(aArg){C.OL._Init.call(this,aArg);this.__proto__=C.AKG;this.Text.R(
A.z2(A.abg.AyO));},_ReInit:function(){C.OL._ReInit.call(this);this.Text.R(A.z2(A.
abg.AyO));},_className:"Application::HeaderDeviceDatamanagementMenu"};C.Aci={PQ:
null,Ut:null,_Init:function(aArg){C.Su._Init.call(this,aArg);C.CH._Init.call(this.
PQ={I:this},0);C.CH._Init.call(this.Ut={I:this},0);this.__proto__=C.Aci;this.PQ.
G(BmA);this.PQ.R(A.z2(A.abg.A4N));this.PQ.A0(0x12);this.PQ.L(A.iF.Text);this.Ut.
G(A5U);this.Ut.R(A.z2(A.abg.AlJ));this.Ut.L(A.iF.Text);this.J(this.PQ,0);this.J(
this.Ut,0);this.PQ.Y(A.zW(A.eV.Au));this.PQ.Bz(A.zW(A.eV.AB));this.PQ.C7(A.zW(A.
eV.Cq));this.Ut.Y(A.zW(A.eV.Au));this.Ut.Bz(A.zW(A.eV.AB));},_Done:function(){this.
__proto__=C.Su;this.PQ._Done();this.Ut._Done();C.Su._Done.call(this);},_ReInit:function(
){C.Su._ReInit.call(this);this.PQ._ReInit();this.Ut._ReInit();this.PQ.R(A.z2(A.abg.
A4N));this.Ut.R(A.z2(A.abg.AlJ));this.PQ.Y(A.zW(A.eV.Au));this.PQ.Bz(A.zW(A.eV.AB
));this.PQ.C7(A.zW(A.eV.Cq));this.Ut.Y(A.zW(A.eV.Au));this.Ut.Bz(A.zW(A.eV.AB));
},_Mark:function(D){var B;C.Su._Mark.call(this,D);if((B=this.PQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ut)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"
};C.AK$={PR:null,_Init:function(aArg){C.Su._Init.call(this,aArg);C.CH._Init.call(
this.PR={I:this},0);this.__proto__=C.AK$;this.PR.G(BmB);this.PR.R(A.z2(A.abg.ZU)
);this.PR.A0(0x12);this.PR.L(A.iF.Text);this.J(this.PR,0);this.PR.Y(A.zW(A.eV.Au
));this.PR.Bz(A.zW(A.eV.AB));this.PR.C7(A.zW(A.eV.Cq));},_Done:function(){this.__proto__=
C.Su;this.PR._Done();C.Su._Done.call(this);},_ReInit:function(){C.Su._ReInit.call(
this);this.PR._ReInit();this.PR.R(A.z2(A.abg.ZU));this.PR.Y(A.zW(A.eV.Au));this.
PR.Bz(A.zW(A.eV.AB));this.PR.C7(A.zW(A.eV.Cq));},_Mark:function(D){var B;C.Su._Mark.
call(this,D);if((B=this.PR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Y8={HP:null,Zz:null,DQ:null,Bh:function(aSize){C.Mi.Bh.call(this,aSize);this.
HP.G([this.G0.M[2],0,this.G0.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.DQ.G([
this.HP.M[2]-1,0,this.HP.M[2]+1,aSize[1]]);this.Zz.G([this.HP.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Mi.Ai.call(this,Ae);this.Zz.L(this.G0.AV);this.HP.L(this.
G0.AV);},B7:function(Z){C.Mi.B7.call(this,Z);if(!this.AZ)return;this.Hl=Z;if(!!this.
AZ){var HF=this.AZ.AkF(Z,14);var AqL=this.AZ.AKq(Z,7);this.HP.Ar(A._GetAutoObject(
A.Device.Converter).AkE(AqL));this.Zz.Ar(A._GetAutoObject(A.Device.Converter).AY$(
HF));this.Al();}},_Init:function(aArg){C.Mi._Init.call(this,aArg);A.abh.Am._Init.
call(this.HP={I:this},0);A.abh.Am._Init.call(this.Zz={I:this},0);A.abh.AH._Init.
call(this.DQ={I:this},0);this.__proto__=C.Y8;this.HP.G(A5W);this.HP.L(A.iF.Text);
this.Zz.G(BmC);this.Zz.L(A.iF.Text);this.DQ.G(BmD);this.DQ.L(A.iF.A7);this.J(this.
HP,0);this.J(this.Zz,0);this.J(this.DQ,0);this.HP.Ar(A.zW(A.abj.J4));this.Zz.Ar(
A.zW(A.abj.J4));},_Done:function(){this.__proto__=C.Mi;this.HP._Done();this.Zz._Done(
);this.DQ._Done();C.Mi._Done.call(this);},_ReInit:function(){C.Mi._ReInit.call(this
);this.HP._ReInit();this.Zz._ReInit();this.DQ._ReInit();},_Mark:function(D){var B;
C.Mi._Mark.call(this,D);if((B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Zz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AIN={Aaq:null,Bh:
function(aSize){C.Mi.Bh.call(this,aSize);this.Aaq.G([this.G0.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Mi.Ai.call(this,Ae);this.Aaq.L(this.G0.AV);},B7:function(
Z){C.Mi.B7.call(this,Z);if(!this.AZ)return;this.Hl=Z;if(!!this.AZ){var R4=this.AZ.
LP(Z,26);if(R4>0)this.Aaq.R(A.aa4(R4.toFixed(),5));else this.Aaq.R(Qj);this.Al();
}},_Init:function(aArg){C.Mi._Init.call(this,aArg);A.abh.Text._Init.call(this.Aaq={
I:this},0);this.__proto__=C.AIN;this.Aaq.G(BmE);this.J(this.Aaq,0);this.Aaq.Y(A.
zW(A.eV.Au));},_Done:function(){this.__proto__=C.Mi;this.Aaq._Done();C.Mi._Done.
call(this);},_ReInit:function(){C.Mi._ReInit.call(this);this.Aaq._ReInit();},_Mark:
function(D){var B;C.Mi._Mark.call(this,D);if((B=this.Aaq)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"};C.ANe={Am:null
,Ai:function(Ae){C.AcG.Ai.call(this,Ae);this.Am.L(this.Text.AV);},_Init:function(
aArg){C.AcG._Init.call(this,aArg);A.abh.Am._Init.call(this.Am={I:this},0);this.__proto__=
C.ANe;this.Text.G(BmF);this.Am.G(A5R);this.J(this.Am,0);this.Am.Ar(A.zW(A.abi.Ac4
));},_Done:function(){this.__proto__=C.AcG;this.Am._Done();C.AcG._Done.call(this
);},_ReInit:function(){C.AcG._ReInit.call(this);this.Am._ReInit();},_Mark:function(
D){var B;C.AcG._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::NaisIDReadonlyElectronic"};C.Ud={Text:null,CV:null,AP:
null,Sx:null,GF:null,A4:null,Init:function(aArg){var B;A.za([this,this.MC],[B=A.
_GetAutoObject(A.Device.Device),B.AAG,B.AEJ],0);A.y_([this,this.MC],A._GetAutoObject(
A.Device.Device).Aq,0);A.ow([this,this.MC],this);},CW:function(E){C.BU.CW.call(this
,E);this.CV.L(E);this.Text.L(E);this.Sx.L(E);this.GF.AoT(E);},AcM:function(E){C.
BU.AcM.call(this,E);this.GF.Dg(E);},Ez:function(H){this.GF.U(A._GetAutoObject(A.
Device.Device).Aq.Cd().toFixed());},MC:function(s){this.Ez(s);},_Init:function(aArg
){C.BU._Init.call(this,aArg);C.CH._Init.call(this.Text={I:this},0);A.abh.Am._Init.
call(this.CV={I:this},0);A.abh.DU._Init.call(this.AP={I:this},0);A.abh.Am._Init.
call(this.Sx={I:this},0);C.GF._Init.call(this.GF={I:this},0);A.abh.DU._Init.call(
this.A4={I:this},0);this.__proto__=C.Ud;this.Text.G(BmG);this.Text.A0(0x11);this.
CV.G(AUh);this.AP.D$(A5P);this.AP.Eg(A5Q);this.AP.L(A.iF.A7);this.Sx.G(BmH);this.
Sx.L(A.iF.CP);this.GF.AW(0x14);this.GF.G(BmI);this.GF.AoT(A.iF.Bg);this.GF.Dg(A.
iF.AiJ);this.GF.HT(2);this.A4.D$(BmJ);this.A4.Eg(BmK);this.A4.L(A.iF.A7);this.J(
this.Text,0);this.J(this.CV,0);this.J(this.AP,0);this.J(this.Sx,0);this.J(this.GF
,0);this.J(this.A4,0);this.Text.Y(A.zW(A.eV.Au));this.Text.Bz(A.zW(A.eV.AB));this.
CV.Ar(A.zW(A.abi.AhC));this.Sx.Ar(A.zW(A.abi.Sx));this.GF.Y(A.zW(A.eV.Cq));this.
Init(aArg);},_Done:function(){this.__proto__=C.BU;this.Text._Done();this.CV._Done(
);this.AP._Done();this.Sx._Done();this.GF._Done();this.A4._Done();C.BU._Done.call(
this);},_ReInit:function(){C.BU._ReInit.call(this);this.Text._ReInit();this.CV._ReInit(
);this.AP._ReInit();this.Sx._ReInit();this.GF._ReInit();this.A4._ReInit();this.Text.
Y(A.zW(A.eV.Au));this.Text.Bz(A.zW(A.eV.AB));this.GF.Y(A.zW(A.eV.Cq));},_Mark:function(
D){var B;C.BU._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Sx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GF)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"
};C.Adf={Fa:null,Jn:null,Jm:null,Ait:null,Aiu:null,P5:null,PD:null,Zy:null,Uf:null
,PT:null,PU:null,SI:null,FN:null,FO:null,IX:null,Ajw:0,AjB:0,DH:0,Dy:0,A3:0,Bh:function(
aSize){var B;this.De.G([this.GS.M[2]-10,this.GS.M[1],this.Ht.M[0]+10,this.GS.M[3
]]);this.De.ABm((B=this.De.M)[2]-B[0]);this.De.IA(this.De.FJ,true,null,null);},Ai:
function(Ae){var B;C.B_.Ai.call(this,Ae);var Fv=((Ae&0x20)===0x20);var Fu=this.Bi.
Bw;if(!!this.Q)this.Iw(this);if((this.A3===1)||(this.A3===2)){var AVF=this.AWB(this.
A3);if(!!AVF){this.Zy.W(true);this.Zy.G(AVF.M);this.Zy.L(this.T.AV);this.Uf.W(true
);this.Uf.G(AVF.M);}else{this.Zy.W(false);this.Uf.W(false);}this.GS.W(false);this.
Ht.W(false);}else{this.Zy.W(false);this.Uf.W(false);this.GS.W(Fv||Fu);this.Ht.W(
Fv||Fu);}},Pr:function(H){if(!!this.Q){if(this.E9===1)A.ow([this,this.Tx],this);
else if(this.E9===4)A.ow([this,this.AUY],this);else if(this.E9===5)A.ow([this,this.
AUW],this);}C.B_.Pr.call(this,H);},Jz:function(H){switch(this.A3){case 0:C.B_.Jz.
call(this,H);break;case 2:break;default:this.AjO(this);}},Ju:function(H){switch(
this.A3){case 0:C.B_.Ju.call(this,H);break;default:this.Agb(this);}},AV9:function(
H){var F;if(this.A3===1){var BR=this.DH;this.DH=this.DH-10;if(this.DH<this.AjB)this.
DH=this.AjB;if(this.DH<A._GetAutoObject(A.Device.Device).X4)this.DH=A._GetAutoObject(
A.Device.Device).X4;if(this.Dy!==BR){if(!!this.Jn)(F=this.Jn,F[2].call(F[0],this.
DH));A.aat(this.Jn,0);}}if(this.A3===2){var BR=this.Dy;this.Dy=this.Dy-10;if(this.
Dy<this.DH)this.Dy=this.DH;if(this.Dy!==BR){if(!!this.Jm)(F=this.Jm,F[2].call(F[
0],this.Dy));A.aat(this.Jm,0);}}this.Dz(this);this.Al();},AUW:function(s){this.AV9(
s);},AjN:function(H){this.E9=5;this.Al();if(this.Bi.Bw){A.ow([this,this.AUW],this
);this.Bi.An(false);}this.Bi.An(true);},AWJ:function(H){var F;if(this.A3===1){var
BR=this.DH;this.DH=this.DH+10;if(this.DH>this.Dy)this.DH=this.Dy;if(this.DH!==BR
){if(!!this.Jn)(F=this.Jn,F[2].call(F[0],this.DH));A.aat(this.Jn,0);}}if(this.A3===
2){var BR=this.Dy;this.Dy=this.Dy+10;if(this.Dy>this.Ajw)this.Dy=this.Ajw;if(this.
Dy!==BR){if(!!this.Jm)(F=this.Jm,F[2].call(F[0],this.Dy));A.aat(this.Jm,0);}}this.
Dz(this);this.Al();},AUY:function(s){this.AWJ(s);},AjP:function(H){this.E9=4;this.
Al();if(this.Bi.Bw){A.ow([this,this.AUY],this);this.Bi.An(false);}this.Bi.An(true
);return;},Tx:function(H){this.Ec(this.A3+1);},AjO:function(H){this.E9=1;this.Al(
);if(this.Bi.Bw){A.ow([this,this.Tx],this);this.Bi.An(false);}this.Bi.An(true);}
,Iw:function(H){},AdJ:function(s){this.Iw(s);},Dz:function(H){var F;if(!this.N)return;
switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.N,
F[1].call(F[0])).GX(A.jm);(F=this.N,F[1].call(F[0])).CA=[this,this.Gu];(F=this.N
,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).Db(A.zW(A.abi.Acl));(F=this.N,F[1].call(
F[0])).Cb(A.jm);(F=this.N,F[1].call(F[0])).Cl=[this,this.Tx];}break;case 2:{(F=this.
N,F[1].call(F[0])).C8(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GX(A.jm);(F=this.
N,F[1].call(F[0])).CA=[this,this.Gu];(F=this.N,F[1].call(F[0])).Cm(A.zW(A.abi.AkL
));(F=this.N,F[1].call(F[0])).Fr(A.jm);(F=this.N,F[1].call(F[0])).Cg=[this,this.
Agb];(F=this.N,F[1].call(F[0])).Db(null);(F=this.N,F[1].call(F[0])).Cb(A.jm);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.Fa.Aiw((F=this.N,F[1].call(F[
0])));}},A3P:function(E){if(A.z_(this.Jn,E))return;if(!!this.Jn)A.zn([this,this.
AXR],this.Jn,0);this.Jn=E;if(!!this.Jn)A.za([this,this.AXR],this.Jn,0);A.ow([this
,this.AXR],this);},AXR:function(H){var F;this.DH=(F=this.Jn,F[1].call(F[0]));this.
Al();},A3O:function(E){if(A.z_(this.Jm,E))return;if(!!this.Jm)A.zn([this,this.AXQ
],this.Jm,0);this.Jm=E;if(!!this.Jm)A.za([this,this.AXQ],this.Jm,0);A.ow([this,this.
AXQ],this);},AXQ:function(H){var F;this.Dy=(F=this.Jm,F[1].call(F[0]));this.Al();
},Gy:function(H){this.Ec(1);},Gu:function(H){this.Ec(0);},Ec:function(EH){var F;
if(!this.A3)this.Fa.Ahf((F=this.N,F[1].call(F[0])));this.A3=EH;if((this.A3<0)||(
this.A3>2))this.A3=0;this.Dz(this);this.FO.Bw=!!this.A3;this.FN.Bw=!!this.A3;this.
Al();},Agb:function(H){if(this.A3>1)this.Ec(this.A3-1);},AX5:function(H){},Avv:function(
s){this.AX5(s);},AXG:function(H){},A6Q:function(s){this.AXG(s);},AWB:function(Aqm
){return null;},_Init:function(aArg){C.B_._Init.call(this,aArg);A.abh.AH._Init.call(
this.Ait={I:this},0);A.abh.AH._Init.call(this.Aiu={I:this},0);A.abh.AH._Init.call(
this.P5={I:this},0);A.abh.Am._Init.call(this.PD={I:this},0);A.abh.AH._Init.call(
this.Zy={I:this},0);A.abh.CR._Init.call(this.Uf={I:this},0);A.abh.Text._Init.call(
this.PT={I:this},0);A.abh.Text._Init.call(this.PU={I:this},0);A.abh.Text._Init.call(
this.SI={I:this},0);A.Core.B0._Init.call(this.FN={I:this},0);A.Core.B0._Init.call(
this.FO={I:this},0);A.Core.B0._Init.call(this.IX={I:this},0);this.__proto__=C.Adf;
this.G(AdD);this.U(A.z2(A.abg.AAp));this.Background.G(AdD);this.T.G(BI);this.T.R(
A.z2(A.abg.A47));this.T.A0(0x12);this.Ait.G(BmL);this.Ait.L(A.iF.FY);this.Aiu.G(
BmM);this.Aiu.L(A.iF.Hy);this.P5.G(BmN);this.P5.L(A.iF.E1);this.PD.G(BmO);this.Zy.
G(BmP);this.Uf.G(BmQ);this.Uf.N5(3);this.Uf.L(A.iF.A6);this.Uf.W(false);this.PT.
G(BmR);this.PT.HT(8);this.PT.IZ(true);this.PT.A0(0x11);this.PT.L(0xFF000000);this.
PU.G(BmS);this.PU.HT(8);this.PU.IZ(true);this.PU.A0(0x11);this.PU.L(0xFF000000);
this.SI.G(BmT);this.SI.IZ(false);this.SI.A0(0x12);this.SI.L(0xFF000000);this.FN.
Filter=5;this.FN.Bw=false;this.FO.Filter=4;this.FO.Bw=false;this.IX.Filter=1;this.
Lg(this.De,-2);this.J(this.Ait,-1);this.J(this.Aiu,-1);this.J(this.P5,-1);this.J(
this.PD,-1);this.J(this.Zy,-1);this.J(this.Uf,-1);this.J(this.PT,-1);this.J(this.
PU,0);this.J(this.SI,0);this.PD.Ar(A.zW(A.abi.AzQ));this.PT.Y(A.zW(A.eV.Au));this.
PU.Y(A.zW(A.eV.Au));this.SI.Y(A.zW(A.eV.AB));this.FN.B1=[this,this.AjN];this.FN.
D_=[this,this.AUW];this.FO.B1=[this,this.AjP];this.FO.D_=[this,this.AUY];this.IX.
B1=[this,this.AjO];this.Fa=A._NewObject(C.Aca,0);},_Done:function(){this.__proto__=
C.B_;this.Ait._Done();this.Aiu._Done();this.P5._Done();this.PD._Done();this.Zy._Done(
);this.Uf._Done();this.PT._Done();this.PU._Done();this.SI._Done();this.FN._Done(
);this.FO._Done();this.IX._Done();C.B_._Done.call(this);},_ReInit:function(){C.B_.
_ReInit.call(this);this.Ait._ReInit();this.Aiu._ReInit();this.P5._ReInit();this.
PD._ReInit();this.Zy._ReInit();this.Uf._ReInit();this.PT._ReInit();this.PU._ReInit(
);this.SI._ReInit();this.FN._ReInit();this.FO._ReInit();this.IX._ReInit();},_Mark:
function(D){var B;C.B_._Mark.call(this,D);if((B=this.Fa)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Jn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Jm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ait)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aiu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zy
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IX)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.G7={
V8:null,Aak:null,AlN:0,AlO:0,Du:function(){if(!this.V8)return 0;return this.V8.LZ;
},Da:function(aIndex){if(!this.V8||(aIndex>=this.V8.LZ))return-1;return this.V8.
Get(aIndex);},GP:function(aIndex){return this.Aak.Ca(this.Da(aIndex));},DT:function(
A2){if(!this.V8)return-1;return this.V8.Asj(A2);},HN:function(){if(!this.V8)return-
1;return this.V8.HN();},Aln:function(E){if(this.AlN===E)return;this.AlN=E;A.ow([
this,this.AQp],this);},AUR:function(Ao){this.Aln(Ao);},Alo:function(E){if(this.AlO===
E)return;this.AlO=E;A.ow([this,this.AQq],this);},AUS:function(Ao){this.Alo(Ao);}
,AQq:function(H){A.aat([this,this.AN9,this.AUS],0);},AQp:function(H){A.aat([this
,this.AN8,this.AUR],0);},AN8:function(){return this.AlN;},AN9:function(){return this.
AlO;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalTypeToString.
_Init.call(this.Aak={I:this},0);this.__proto__=C.G7;},_Done:function(){this.__proto__=
C.AC;this.Aak._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(
this);this.Aak._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.V8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aak)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::AnimalThresholds"};C.AIj={Init:function(aArg
){A.y_([this,this.A98],A._GetAutoObject(A.Device.Helper).S7,0);A.y_([this,this.A96
],A._GetAutoObject(A.Device.Helper).S6,0);this.A98(this);this.A96(this);},AF:function(
E){C.G7.AF.call(this,E);this.Alo(A._GetAutoObject(A.Device.Helper).S7.Get(this.DT(
E)));this.Aln(A._GetAutoObject(A.Device.Helper).S6.Get(this.DT(E)));},Aln:function(
E){if(this.AlN===E)return;C.G7.Aln.call(this,E);A._GetAutoObject(A.Device.Helper
).S6.Set(this.DT(this.Q),E);A._GetAutoObject(A.Device.Helper).S6.Cr();},Alo:function(
E){if(this.AlO===E)return;C.G7.Alo.call(this,E);A._GetAutoObject(A.Device.Helper
).S7.Set(this.DT(this.Q),E);A._GetAutoObject(A.Device.Helper).S7.Cr();},A98:function(
H){this.AlO=A._GetAutoObject(A.Device.Helper).S7.Get(this.DT(this.Q));A.ow([this
,this.AQq],this);},A96:function(H){this.AlN=A._GetAutoObject(A.Device.Helper).S6.
Get(this.DT(this.Q));A.ow([this,this.AQp],this);},_Init:function(aArg){C.G7._Init.
call(this,aArg);this.__proto__=C.AIj;this.V8=A._GetAutoObject(A.Device.Helper).AbI;
this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"};C.AIk={
Ayn:0,Aym:0,Init:function(aArg){A.y_([this,this.A_f],A._GetAutoObject(A.Device.Helper
).Adv,0);A.y_([this,this.A_d],A._GetAutoObject(A.Device.Helper).Adu,0);A.y_([this
,this.A_b],A._GetAutoObject(A.Device.Helper).Adt,0);A.y_([this,this.A_h],A._GetAutoObject(
A.Device.Helper).Adw,0);this.A_f(this);this.A_d(this);this.A_b(this);this.A_h(this
);},AF:function(E){C.G7.AF.call(this,E);this.Alo(A._GetAutoObject(A.Device.Helper
).Adv.Get(this.DT(E)));this.Aln(A._GetAutoObject(A.Device.Helper).Adu.Get(this.DT(
E)));this.AOc(A._GetAutoObject(A.Device.Helper).Adt.Get(this.DT(E)));this.AOd(A.
_GetAutoObject(A.Device.Helper).Adw.Get(this.DT(E)));},Aln:function(E){if(this.AlN===
E)return;C.G7.Aln.call(this,E);A._GetAutoObject(A.Device.Helper).Adu.Set(this.DT(
this.Q),E);A._GetAutoObject(A.Device.Helper).Adu.Cr();},Alo:function(E){if(this.
AlO===E)return;C.G7.Alo.call(this,E);A._GetAutoObject(A.Device.Helper).Adv.Set(this.
DT(this.Q),E);A._GetAutoObject(A.Device.Helper).Adv.Cr();},A_f:function(H){this.
AlO=A._GetAutoObject(A.Device.Helper).Adv.Get(this.DT(this.Q));A.ow([this,this.AQq
],this);},A_d:function(H){this.AlN=A._GetAutoObject(A.Device.Helper).Adu.Get(this.
DT(this.Q));A.ow([this,this.AQp],this);},AOd:function(E){if(this.Ayn===E)return;
this.Ayn=E;A._GetAutoObject(A.Device.Helper).Adw.Set(this.DT(this.Q),E);A._GetAutoObject(
A.Device.Helper).Adw.Cr();A.ow([this,this.A5j],this);},AOc:function(E){if(this.Aym===
E)return;this.Aym=E;A._GetAutoObject(A.Device.Helper).Adt.Set(this.DT(this.Q),E);
A._GetAutoObject(A.Device.Helper).Adt.Cr();A.ow([this,this.A5i],this);},A5i:function(
H){A.aat([this,this.A2h,this.AOc],0);},A5j:function(H){A.aat([this,this.A2i,this.
AOd],0);},A_b:function(H){this.Aym=A._GetAutoObject(A.Device.Helper).Adt.Get(this.
DT(this.Q));A.ow([this,this.A5i],this);},A_h:function(H){this.Ayn=A._GetAutoObject(
A.Device.Helper).Adw.Get(this.DT(this.Q));A.ow([this,this.A5j],this);},A2i:function(
){return this.Ayn;},A2h:function(){return this.Aym;},_Init:function(aArg){C.G7._Init.
call(this,aArg);this.__proto__=C.AIk;this.V8=A._GetAutoObject(A.Device.Helper).AeB;
this.Init(aArg);},_className:"Application::AnimalThresholdsWeightGain"};C.AH3={QF:
null,Init:function(aArg){var B;A.za([this,this.AqX],[B=this.AnimalType,B.Cz,B.CB
],0);A.ow([this,this.AqX],this);this.A8(this.QF);},Bo:function(E){C.Iy.Bo.call(this
,E);this.QF.Bu(this.IT.AI);},AqX:function(H){A._GetAutoObject(A.Device.Device).Atq(
this.AnimalType.Q);},_Init:function(aArg){C.Iy._Init.call(this,aArg);C.Sl._Init.
call(this.QF={I:this},0);this.__proto__=C.AH3;var B;this.QF.G(BmU);this.QF.Aj(true
);this.QF.Mv(14);this.QF.Aft(0);this.QF.N1(0);this.IT.An(false);this.IT.Aj(false
);this.IT.W(false);this.J(this.QF,-2);this.QF.AR=[this,this.AwY];this.QF.AF([B=this.
AnimalType,B.Cz,B.CB]);this.QF.Dh(this.AnimalType);this.Init(aArg);},_Done:function(
){this.__proto__=C.Iy;this.QF._Done();C.Iy._Done.call(this);},_ReInit:function(){
C.Iy._ReInit.call(this);this.QF._ReInit();},_Mark:function(D){var B;C.Iy._Mark.call(
this,D);if((B=this.QF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.Sl={Filter:null,D8:0,TableId:0,Operator:1,C3:function(){var F;this.R_((F=this.
Filter,F[1].call(F[0])).DG(this.D8,this.Operator));},Bh:function(aSize){var B;C.
B_.Bh.call(this,aSize);this.T.G([10,0,((B=this.M)[2]-B[0])-10,40]);this.GS.G(Nq);
this.Ht.G([aSize[0]-40,40,aSize[0],80]);this.De.G([this.GS.M[2]-5,this.GS.M[1],this.
Ht.M[0]+5,this.GS.M[3]]);this.De.ABm((B=this.De.M)[2]-B[0]);this.De.IA(this.De.FJ
,true,null,null);},Bo:function(E){if(A.z_(this.Filter,E))return;if(!!this.Filter
)A.zn([this,this.Lt],this.Filter,0);this.Filter=E;if(!!E)A.za([this,this.Lt],E,0
);A.ow([this,this.Lt],this);},Lt:function(H){var F;if(!!this.Filter&&!!(F=this.Filter
,F[1].call(F[0])))this.R_((F=this.Filter,F[1].call(F[0])).DG(this.D8,this.Operator
));else this.R_(null);},Aft:function(E){if(this.TableId===E)return;this.TableId=
E;A.ow([this,this.Lt],this);},Mv:function(E){if(this.D8===E)return;this.D8=E;A.ow([
this,this.Lt],this);},R_:function(AK){this.U(A._GetAutoObject(A.Device.Helper).AkG(
this.TableId,this.D8));this.Al();},N1:function(E){if(this.Operator===E)return;this.
Operator=E;A.ow([this,this.Lt],this);},_Init:function(aArg){C.B_._Init.call(this
,aArg);this.__proto__=C.Sl;this.G(KM);this.T.A0(0x11);this.T.C7(A.zW(A.eV.Cq));}
,_ReInit:function(){C.B_._ReInit.call(this);this.T.C7(A.zW(A.eV.Cq));this.C3();}
,_Mark:function(D){var B;C.B_._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"};C.Apz={
Xr:null,_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg);A.abh.
Text._Init.call(this.Xr={I:this},0);this.__proto__=C.Apz;this.N.Cb(A.abg.Bbb);this.
Number.G(BmV);this.IK.G(BmW);this.In.G(BmX);this.Ail(2);this.A7U=false;this.A8W=
true;this.Xr.G(BmY);this.Xr.KF(true);this.Xr.R(A.z2(A.abg.A4V));this.Xr.L(A.iF.Text
);this.J(this.Xr,0);this.N.CA=null;this.N.Cl=[this,this.AES];this.N.C8(null);this.
Xr.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.
Xr._Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Xr._ReInit();this.Xr.R(A.z2(A.abg.A4V));this.Xr.Y(A.zW(A.
eV.Au));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Xr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.AMB={C0:null,GE:function(E){if(this.Q2===E)return;C.ON.GE.call(this,E);this.
C0.Dg(E);},Acc:function(KR){var Cf=null;switch(KR){case-1:case 0:Cf=this.Gf;break;
case 1:Cf=this.C0;break;case 2:Cf=this.Hp;break;default:A.aa8("%s",Al6);}return Cf;
},_Init:function(aArg){C.ON._Init.call(this,aArg);C.DM._Init.call(this.C0={I:this
},0);this.__proto__=C.AMB;this.G(BmZ);this.C0.G(A5G);this.Gf.G(Bm0);this.J(this.
C0,-2);this.C0.Ds=[this,this.HA];},_Done:function(){this.__proto__=C.ON;this.C0.
_Done();C.ON._Done.call(this);},_ReInit:function(){C.ON._ReInit.call(this);this.
C0._ReInit();},_Mark:function(D){var B;C.ON._Mark.call(this,D);if((B=this.C0)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.ACB={Gi:null
,Bh:function(aSize){C.N7.Bh.call(this,aSize);this.T.G(A.aaQ(this.T.M,this.Gi.M[0
]));},Ai:function(Ae){C.N7.Ai.call(this,Ae);if(this.GW)this.Gi.GE(A.iF.CD);else this.
Gi.GE(A.iF.CP);},AWw:function(){this.A8(this.Gi);},_Init:function(aArg){C.N7._Init.
call(this,aArg);C.ON._Init.call(this.Gi={I:this},0);this.__proto__=C.ACB;this.Gi.
G(Bm1);this.J(this.Gi,0);this.Gi.AF([this,this.ANX,this.ABA]);},_Done:function(){
this.__proto__=C.N7;this.Gi._Done();C.N7._Done.call(this);},_ReInit:function(){C.
N7._ReInit.call(this);this.Gi._ReInit();},_Mark:function(D){var B;C.N7._Mark.call(
this,D);if((B=this.Gi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.ACC={Gi:null,Bh:function(aSize){C.N7.Bh.call(this,aSize);this.T.G(A.aaQ(this.
T.M,this.Gi.M[0]));},Ai:function(Ae){C.N7.Ai.call(this,Ae);if(this.GW)this.Gi.GE(
A.iF.CD);else this.Gi.GE(A.iF.CP);},AWw:function(){this.A8(this.Gi);},_Init:function(
aArg){C.N7._Init.call(this,aArg);C.AMB._Init.call(this.Gi={I:this},0);this.__proto__=
C.ACC;this.Gi.AW(0x18);this.Gi.G(Bm2);this.J(this.Gi,0);this.Gi.AF([this,this.ANX
,this.ABA]);},_Done:function(){this.__proto__=C.N7;this.Gi._Done();C.N7._Done.call(
this);},_ReInit:function(){C.N7._ReInit.call(this);this.Gi._ReInit();},_Mark:function(
D){var B;C.N7._Mark.call(this,D);if((B=this.Gi)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Aal={ScreenTypeToString:
null,Du:function(){return 4;},GP:function(aIndex){if((aIndex<0)||(aIndex>=99))return A.
jm;return this.ScreenTypeToString.Ca(this.Da(aIndex));},_Init:function(aArg){C.Dj.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Aal;this.Ci.Set(0,3);this.Ci.Set(1,34);this.Ci.Set(2
,33);this.Ci.Set(3,46);},_Done:function(){this.__proto__=C.Dj;this.ScreenTypeToString.
_Done();C.Dj._Done.call(this);},_ReInit:function(){C.Dj._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Dj._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AQM={Xv:function(H){this.Aer();this.DX(A.z2(A.abg.Apm),[this,this.Ao7],3);this.
DX(A.z2(A.abg.AfK),[this,this.Aig],2);this.DX(A.z2(A.abg.AbC),[this,this.AoN],1);
this.DX(A.z2(A.abg.LinkTransponder),[this,this.AOu],8);this.DX(A.z2(A.abg.Aem),[
this,this.Ah_],0);this.DX(A.z2(A.abg.Ox),[this,this.Z0],9);A._GetAutoObject(C.Cy
).IS();A._GetAutoObject(C.Cy).V1(A.z2(A.abg.Aen)+A.z2(A.abg.Colon));A._GetAutoObject(
A.Device.Device).Cn(6);},DS:function(H){},Acd:function(){return C.Y8;},Ace:function(
){return C.Aci;},Ry:function(H){A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(
A.Device.Helper).A0Y());},HX:function(H){C.Ge.HX.call(this,H);if(this.AhY()===false
){this.N.Cm(A.zW(A.abi.Ast));this.N.Cg=[this,this.AJy];this.N.Fr(A.jm);}this.N.O3(
false);this.N.O4(false);},Ad$:function(){A._GetAutoObject(C.A1).BX(97);},Ad_:function(
){A._GetAutoObject(C.A1).BX(98);},_Init:function(aArg){C.Ge._Init.call(this,aArg
);this.__proto__=C.AQM;var B;this.Dt(C.Azy);this.Et(A.z2(A.abg.Bdh));this.Afq([B=
A._GetAutoObject(A.Device.Device),B.ANW,B.AUI]);},_className:"Application::YoungNoTransponderListScreen"
};C.AQL={_Init:function(aArg){C.Iy._Init.call(this,aArg);this.__proto__=C.AQL;this.
J$.An(false);this.J$.Aj(false);this.J$.W(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AQK={_Init:function(aArg){C.H9._Init.call(this,aArg);this.__proto__=C.AQK;this.
N.Cb(A.z2(A.abg.Bab));},_className:"Application::YoungNoTransponderListActionsScreen"
};
C._Init=function(){C.AIq.__proto__=A.Core.Root;C.Aw.__proto__=C.Zi;C.US.__proto__=
A.Core.O;C.NP.__proto__=A.Core.O;C.XH.__proto__=A.abm.FC;C.D9.__proto__=A.Core.O;
C.Wc.__proto__=C.Aw;C.APO.__proto__=C.Aw;C.Asq.__proto__=C.Aw;C.S1.__proto__=C.Aw;
C.E3.__proto__=C.GM;C.AD.__proto__=A.Core.O;C.CG.__proto__=C.Aw;C.Aso.__proto__=
C.BU;C.BU.__proto__=A.Core.O;C.N.__proto__=A.Core.O;C.Azz.__proto__=C.AkJ;C.ACX.
__proto__=C.Dr;C.B9.__proto__=C.S9;C.C9.__proto__=C.DV;C.JQ.__proto__=C.C9;C.B_.
__proto__=C.C9;C.AlA.__proto__=C.C9;C.NX.__proto__=C.Dj;C.P_.__proto__=C.AC;C.AP3.
__proto__=C.A$;C.Fs.__proto__=A.Core.O;C.A$.__proto__=C.B9;C.Ge.__proto__=C.Aw;C.
Ayv.__proto__=C.A$;C.AbT.__proto__=C.Aw;C.LE.__proto__=C.NP;C.APY.__proto__=C.Aw;
C.An_.__proto__=C.Azz;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.APF.__proto__=C.Adf;C.Ef.__proto__=A.Core.O;C.Rating.__proto__=
A.Core.O;C.Apu.__proto__=A.Core.O;C.ACE.__proto__=C.C9;C.CH.__proto__=A.Core.O;C.
AhA.__proto__=C.Ud;C.Akf.__proto__=C.P9;C.Afy.__proto__=A.Core.O;C.GN.__proto__=
C.Aw;C.AO2.__proto__=C.Aw;C.LI.__proto__=C.B9;C.Ak2.__proto__=C.B9;C.OverlayMenu.
__proto__=C.Zi;C.ALk.__proto__=C.OverlayMenu;C.FZ.__proto__=A.Core.O;C.Zi.__proto__=
A.Core.O;C.APK.__proto__=A.abm.Ab6;C.AkJ.__proto__=C.BU;C.AzA.__proto__=C.AkJ;C.
LJ.__proto__=C.AC;C.APH.__proto__=C.C9;C.ACe.__proto__=C.Aw;C.Hm.__proto__=C.Aw;
C.UL.__proto__=C.Aow;C.If.__proto__=C.AzA;C.Iy.__proto__=C.Aw;C.AH0.__proto__=C.
ACe;C.AHW.__proto__=C.Ge;C.AJa.__proto__=C.Ge;C.Ab9.__proto__=C.B9;C.PB.__proto__=
C.Ab9;C.AK9.__proto__=C.BU;C.Asn.__proto__=C.BU;C.DM.__proto__=C.FA;C.AX.__proto__=
A.Core.O;C.Ft.__proto__=C.AC;C.Ade.__proto__=C.B_;C.APa.__proto__=C.Aw;C.ZS.__proto__=
C.B9;C.AcC.__proto__=C.B9;C.AJl.__proto__=C.CG;C.AP5.__proto__=C.CG;C.AJv.__proto__=
C.CG;C.APk.__proto__=C.CG;C.U$.__proto__=A.Core.O;C.Rh.__proto__=C.E3;C.GF.__proto__=
A.Core.O;C.SJ.__proto__=C.Aw;C.AQx.__proto__=C.Ge;C.AH1.__proto__=C.AuD;C.AQj.__proto__=
C.CG;C.Acy.__proto__=C.AC;C.AuD.__proto__=C.Aw;C.AQG.__proto__=C.CG;C.APG.__proto__=
C.Adf;C.Ax4.__proto__=A.Graphics.GY;C.Ag1.__proto__=C.Aw;C.AM6.__proto__=A.Core.
O;C.K1.__proto__=C.OverlayMenu;C.AnC.__proto__=C.B_;C.Arx.__proto__=C.B9;C.AHK.__proto__=
C.K1;C.Dj.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AHQ.__proto__=C.AbA;C.AHR.
__proto__=C.K1;C.Aeo.__proto__=C.AcC;C.AIv.__proto__=C.AbA;C.UC.__proto__=C.E3;C.
TP.__proto__=A.Core.O;C.JO.__proto__=A.Core.O;C.ANn.__proto__=C.Hm;C.APd.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Dj;C.AJb.__proto__=C.Akf;C.GM.__proto__=A.
Core.O;C.AQz.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Dj;C.V$.__proto__=
C.Ft;C.Auu.__proto__=C.Ax4;C.AOX.__proto__=C.OverlayMenu;C.AKd.__proto__=A.Core.
O;C.Ne.__proto__=A.Core.O;C.AOY.__proto__=A.Core.O;C.APJ.__proto__=A.abm.Ab6;C.ApA.
__proto__=C.JQ;C.Akh.__proto__=C.OverlayMenu;C.Ayx.__proto__=C.A$;C.WH.__proto__=
C.Asn;C.AnW.__proto__=C.Hm;C.AlB.__proto__=C.C9;C.WeightRecordingScope.__proto__=
C.AC;C.ArE.__proto__=C.Aw;C.API.__proto__=C.JQ;C.AHY.__proto__=C.Aw;C.Aow.__proto__=
C.Hm;C.ADe.__proto__=A.Core.O;C.AQC.__proto__=A.Core.O;C.DV.__proto__=C.B9;C.AcD.
__proto__=C.DV;C.AsR.__proto__=C.AcD;C.SetTransponderScreen.__proto__=C.S1;C.AzG.
__proto__=C.Ef;C.ADi.__proto__=C.A$;C.WeightListScreen.__proto__=C.Aw;C.Lz.__proto__=
C.S1;C.AHI.__proto__=C.Lz;C.ManualActionScanScreen.__proto__=C.Lz;C.AHJ.__proto__=
A.Core.O;C.ALb.__proto__=C.DL;C.AzE.__proto__=C.DL;C.Su.__proto__=C.DL;C.ALd.__proto__=
C.DL;C.AIS.__proto__=C.A$;C.Mi.__proto__=C.A$;C.AIQ.__proto__=C.A$;C.IU.__proto__=
A.Core.O;C.AIP.__proto__=C.A$;C.AkI.__proto__=C.Sl;C.AB8.__proto__=C.At0;C.Ain.__proto__=
C.At0;C.AcZ.__proto__=C.Ain;C.AJi.__proto__=C.S9;C.S9.__proto__=C.GM;C.ALg.__proto__=
C.Ef;C.CL.__proto__=A.Core.O;C.AIM.__proto__=C.Ahg;C.AzC.__proto__=C.Sv;C.JG.__proto__=
A.Core.O;C.AnO.__proto__=C.LI;C.AKD.__proto__=C.JI;C.AutoRegistrationMode.__proto__=
C.AC;C.ALh.__proto__=C.Ef;C.Sf.__proto__=C.Aw;C.DK.__proto__=A.Core.O;C.AH$.__proto__=
C.QN;C.AIo.__proto__=C.AbH;C.AIi.__proto__=C.AbH;C.APc.__proto__=C.A$;C.ALf.__proto__=
C.Ef;C.AIc.__proto__=C.AbH;C.H8.__proto__=C.Ix;C.QH.__proto__=C.E$;C.QL.__proto__=
C.E$;C.Se.__proto__=C.Jc;C.Pz.__proto__=C.E$;C.Sd.__proto__=C.Jc;C.AHX.__proto__=
C.Ag1;C.H9.__proto__=C.Ag1;C.AMz.__proto__=C.CG;C.AbH.__proto__=C.DK;C.Jd.__proto__=
C.Dj;C.AM2.__proto__=C.CG;C.AH9.__proto__=C.Ku;C.AH_.__proto__=C.DK;C.AH7.__proto__=
C.Ku;C.AH8.__proto__=C.Ku;C.UW.__proto__=C.DV;C.APD.__proto__=C.UW;C.QM.__proto__=
C.E$;C.AK8.__proto__=C.If;C.AJc.__proto__=C.Aw;C.AIV.__proto__=C.AbT;C.AHV.__proto__=
C.Iy;C.AQw.__proto__=C.Iy;C.AI$.__proto__=C.H9;C.AQv.__proto__=C.H9;C.AHU.__proto__=
C.H9;C.AKE.__proto__=C.JI;C.AK_.__proto__=C.JI;C.ALc.__proto__=C.Sv;C.AIR.__proto__=
C.Ahg;C.Sv.__proto__=C.DL;C.AnJ.__proto__=A.abw.AyE;C.Ahg.__proto__=C.A$;C.Dr.__proto__=
A.Core.O;C.AIE.__proto__=C.Dr;C.Pa.__proto__=C.Dr;C.An8.__proto__=A.Core.O;C.AIe.
__proto__=C.Fs;C.APg.__proto__=A.Core.O;C.Ku.__proto__=C.DK;C.AJj.__proto__=C.CG;
C.Ax6.__proto__=C.B9;C.Azw.__proto__=C.BU;C.Azx.__proto__=C.BU;C.E$.__proto__=C.
Jc;C.AKi.__proto__=C.Ge;C.AKh.__proto__=C.Iy;C.AKg.__proto__=C.H9;C.AKQ.__proto__=
C.JI;C.AzD.__proto__=C.DL;C.Ayu.__proto__=C.A$;C.APb.__proto__=C.Afy;C.FactoryResetScope.
__proto__=C.Dj;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ANA.
__proto__=C.Ge;C.ANz.__proto__=C.Iy;C.ANy.__proto__=C.H9;C.Azy.__proto__=C.JI;C.
Aye.__proto__=C.Ft;C.AHO.__proto__=C.K1;C.AHZ.__proto__=C.ArE;C.NewAnimalSetTransponderScreen.
__proto__=C.Apz;C.CZ.__proto__=C.AC;C.Oa.__proto__=A.Core.O;C.QI.__proto__=C.E$;
C.QJ.__proto__=C.E$;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.AIx.
__proto__=C.CG;C.AM9.__proto__=C.OverlayMenu;C.AJg.__proto__=C.AcC;C.AM$.__proto__=
C.B9;C.AnimalSingleInfoScreen.__proto__=C.Sf;C.AnimalMultiInfoScreen.__proto__=C.
Sf;C.AIb.__proto__=C.OverlayMenu;C.MultiInfoActionsScreen.__proto__=C.H9;C.Jj.__proto__=
A.Core.O;C.AHN.__proto__=C.Ge;C.AHM.__proto__=C.Iy;C.AHL.__proto__=C.H9;C.AK7.__proto__=
C.If;C.ApL.__proto__=C.Oa;C.Aoj.__proto__=C.Oa;C.ArW.__proto__=C.AC;C.AH5.__proto__=
C.AC;C.ACD.__proto__=C.DV;C.Gi.__proto__=A.Core.O;C.AQn.__proto__=C.Wc;C.ANk.__proto__=
C.UL;C.Az6.__proto__=C.KA;C.ON.__proto__=C.Gi;C.KA.__proto__=C.Gi;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AsJ.__proto__=C.ON;C.APC.__proto__=C.B_;C.NewAnimalsSetTransponderScreen.
__proto__=C.Apz;C.ReasonOfLeaving.__proto__=C.AC;C.N7.__proto__=C.B_;C.AcG.__proto__=
C.D1;C.ANd.__proto__=C.D1;C.ANc.__proto__=C.D1;C.D1.__proto__=A.Core.O;C.AfG.__proto__=
C.DV;C.AMC.__proto__=C.KA;C.AsI.__proto__=A.Core.O;C.FA.__proto__=A.Core.O;C.E0.
__proto__=C.Aw;C.AJR.__proto__=C.Aw;C.AJU.__proto__=C.E0;C.AJV.__proto__=C.E0;C.
Ar0.__proto__=C.E0;C.Zr.__proto__=C.AhA;C.JI.__proto__=C.AhA;C.Asm.__proto__=C.Zr;
C.AKO.__proto__=C.Zr;C.AKN.__proto__=C.Zr;C.AKM.__proto__=C.BU;C.Ach.__proto__=C.
Ef;C.AnY.__proto__=C.A$;C.Ag9.__proto__=C.H8;C.Ay4.__proto__=A.Core.O;C.Aix.__proto__=
A.Core.O;C.P9.__proto__=C.Aw;C.AP4.__proto__=C.P9;C.AKP.__proto__=C.BU;C.DL.__proto__=
C.Ef;C.OL.__proto__=C.BU;C.AKI.__proto__=C.OL;C.AKK.__proto__=C.OL;C.Wz.__proto__=
C.AnY;C.Aeu.__proto__=C.GM;C.AJD.__proto__=C.Ge;C.AJC.__proto__=C.Iy;C.AJB.__proto__=
C.H9;C.AKL.__proto__=C.JI;C.AnZ.__proto__=C.AlB;C.Ahp.__proto__=C.PB;C.Ayp.__proto__=
C.PB;C.ALa.__proto__=C.DL;C.AIO.__proto__=C.A$;C.QK.__proto__=C.E$;C.AH6.__proto__=
C.E$;C.AJt.__proto__=C.GN;C.AJu.__proto__=C.GN;C.AKJ.__proto__=C.OL;C.Rk.__proto__=
C.ZS;C.AJq.__proto__=C.GN;C.AKF.__proto__=C.OL;C.OY.__proto__=C.B9;C.Q5.__proto__=
C.Aw;C.AJS.__proto__=C.Q5;C.AJT.__proto__=C.Q5;C.AJW.__proto__=C.Ar0;C.AJP.__proto__=
C.E0;C.YZ.__proto__=C.H8;C.OB.__proto__=C.H8;C.AIg.__proto__=C.Akh;C.AM0.__proto__=
C.SJ;C.AMZ.__proto__=C.SJ;C.ANv.__proto__=C.Ge;C.ANu.__proto__=C.Iy;C.ANt.__proto__=
C.H9;C.AK2.__proto__=C.JI;C.APo.__proto__=C.Ge;C.APn.__proto__=C.Iy;C.APm.__proto__=
C.H9;C.AK4.__proto__=C.Ud;C.Ayw.__proto__=C.A$;C.AzF.__proto__=C.DL;C.AK3.__proto__=
C.BU;C.Y1.__proto__=C.MP;C.V6.__proto__=C.MP;C.QN.__proto__=C.DK;C.V7.__proto__=
C.QN;C.V4.__proto__=C.H7;C.YX.__proto__=C.H7;C.V3.__proto__=C.H7;C.YW.__proto__=
C.H7;C.AId.__proto__=C.Aw;C.H7.__proto__=C.Ix;C.Ix.__proto__=C.GM;C.MP.__proto__=
C.E$;C.AtZ.__proto__=C.AcZ;C.AJh.__proto__=C.AnO;C.At1.__proto__=C.AcZ;C.AO9.__proto__=
C.CG;C.AO7.__proto__=C.D1;C.AMA.__proto__=C.KA;C.AO8.__proto__=C.D1;C.NewMenu.__proto__=
C.Aw;C.ANl.__proto__=C.Hm;C.AIf.__proto__=C.Akh;C.AIw.__proto__=C.AbA;C.Jc.__proto__=
C.Ix;C.AK6.__proto__=C.WH;C.Zo.__proto__=C.Dj;C.ALe.__proto__=C.Ef;C.MotherScanScreen.
__proto__=C.Lz;C.AK5.__proto__=C.An_;C.IK.__proto__=A.Core.O;C.AK1.__proto__=C.BU;
C.SetSaveNaisIdScreen.__proto__=C.S1;C.AJE.__proto__=C.AnW;C.ApV.__proto__=C.Dj;
C.AQI.__proto__=C.ApV;C.AaA.__proto__=C.ApV;C.AbD.__proto__=C.AC;C.APE.__proto__=
C.DV;C.AJs.__proto__=C.GN;C.AKH.__proto__=C.OL;C.AJr.__proto__=C.GN;C.AKG.__proto__=
C.OL;C.Aci.__proto__=C.Su;C.AK$.__proto__=C.Su;C.Y8.__proto__=C.Mi;C.AIN.__proto__=
C.Mi;C.ANe.__proto__=C.AcG;C.Ud.__proto__=C.BU;C.Adf.__proto__=C.B_;C.G7.__proto__=
C.AC;C.AIj.__proto__=C.G7;C.AIk.__proto__=C.G7;C.AH3.__proto__=C.Iy;C.Sl.__proto__=
C.B_;C.Apz.__proto__=C.SetTransponderScreen;C.AMB.__proto__=C.ON;C.ACB.__proto__=
C.N7;C.ACC.__proto__=C.N7;C.Aal.__proto__=C.Dj;C.AQM.__proto__=C.Ge;C.AQL.__proto__=
C.Iy;C.AQK.__proto__=C.H9;};C._ReInit=function(){var B;if((B=C.ACK._this))B._ReInit(
);if((B=C.ACL._this))B._ReInit();if((B=C.A1._this))B._ReInit();if((B=C.Py._this)
)B._ReInit();if((B=C.AutoActions._this))B._ReInit();if((B=C.AfB._this))B._ReInit(
);if((B=C.Cy._this))B._ReInit();if((B=C.XF._this))B._ReInit();if((B=C.Auc._this)
)B._ReInit();if((B=C.ApB._this))B._ReInit();if((B=C.DJ._this))B._ReInit();if((B=
C.Ayl._this))B._ReInit();};C.Dn=function(D){var B;if((B=C.ACK._this)&&(B._cycle!=
D))B._Done(C.ACK._this=null);if((B=C.ACL._this)&&(B._cycle!=D))B._Done(C.ACL._this=
null);if((B=C.A1._this)&&(B._cycle!=D))B._Done(C.A1._this=null);if((B=C.Py._this
)&&(B._cycle!=D))B._Done(C.Py._this=null);if((B=C.AutoActions._this)&&(B._cycle!=
D))B._Done(C.AutoActions._this=null);if((B=C.AfB._this)&&(B._cycle!=D))B._Done(C.
AfB._this=null);if((B=C.Cy._this)&&(B._cycle!=D))B._Done(C.Cy._this=null);if((B=
C.XF._this)&&(B._cycle!=D))B._Done(C.XF._this=null);if((B=C.Auc._this)&&(B._cycle
!=D))B._Done(C.Auc._this=null);if((B=C.ApB._this)&&(B._cycle!=D))B._Done(C.ApB._this=
null);if((B=C.DJ._this)&&(B._cycle!=D))B._Done(C.DJ._this=null);if((B=C.Ayl._this
)&&(B._cycle!=D))B._Done(C.Ayl._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */