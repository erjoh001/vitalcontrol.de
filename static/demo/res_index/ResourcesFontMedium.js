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
);if(index.abP)throw new Error("The file file 'ResourcesFontMedium.js' included twice!"
);
index.abP=[19,5,0,16,192,192,"\
\u0000\u8001\u7FF2\u0007\u000E\u8009\u0000\u0000\u0020\u8000\u8000\u0000\u0000\u8005\u0000\u0144\
\u0021\u8001\u7FF2\u0003\u000E\u8005\u0000\u0144\u0022\u8001\u7FF1\u0005\u0005\u8006\u0000\u01A6\
\u0023\u8001\u7FF2\u000C\u000E\u800C\u0000\u01EC\u0024\u8001\u7FEF\u000A\u0013\u800B\u0000\u03ED\
\u0025\u8001\u7FF2\u000D\u000E\u800F\u0000\u0651\u0026\u8001\u7FF2\u000C\u000E\u800C\u0000\u08C9\
\u0027\u8001\u7FF1\u0002\u0005\u8003\u0000\u0B06\u0028\u8001\u7FF0\u0006\u0015\u8007\u0000\u0B1F\
\u0029\u8000\u7FF0\u0006\u0015\u8007\u0000\u0C77\u002A\u8000\u7FF2\u0009\u0009\u8009\u0000\u0DCF\
\u002B\u8000\u7FF3\u000B\u000C\u800B\u0000\u0ECB\u002C\u8000\u7FFE\u0003\u0005\u8004\u0000\u0FB5\
\u002D\u8000\u7FF9\u0006\u0002\u8006\u0000\u0FEC\u002E\u8001\u7FFE\u0003\u0002\u8005\u0000\u1010\
\u002F\u8000\u7FF2\u0008\u000F\u8008\u0000\u1025\u0030\u8001\u7FF2\u000A\u000E\u800B\u0000\u1140\
\u0031\u8001\u7FF2\u0007\u000E\u800B\u0000\u12C7\u0032\u8000\u7FF2\u000B\u000E\u800B\u0000\u137F\
\u0033\u8000\u7FF2\u000A\u000E\u800B\u0000\u1553\u0034\u8000\u7FF2\u000B\u000E\u800B\u0000\u1729\
\u0035\u8001\u7FF2\u000A\u000E\u800B\u0000\u1880\u0036\u8001\u7FF2\u000A\u000E\u800B\u0000\u1A41\
\u0037\u8000\u7FF2\u000B\u000E\u800B\u0000\u1C10\u0038\u8001\u7FF2\u000A\u000E\u800B\u0000\u1D8D\
\u0039\u8001\u7FF2\u0009\u000E\u800B\u0000\u1F7B\u003A\u8001\u7FF5\u0003\u000B\u8005\u0000\u214E\
\u003B\u8000\u7FF5\u0004\u000E\u8004\u0000\u2199\u003C\u8000\u7FF5\u0009\u0009\u800A\u0000\u2214\
\u003D\u8001\u7FF7\u0009\u0006\u800B\u0000\u2339\u003E\u8001\u7FF5\u0009\u0009\u800A\u0000\u23DE\
\u003F\u8000\u7FF2\u0009\u000E\u8009\u0000\u2515\u0040\u8001\u7FF2\u0011\u0012\u8012\u0000\u2675\
\u0041\u8000\u7FF2\u000D\u000E\u800D\u0000\u2A91\u0042\u8001\u7FF2\u000B\u000E\u800C\u0000\u2C7D\
\u0043\u8001\u7FF2\u000C\u000E\u800D\u0000\u2E29\u0044\u8001\u7FF2\u000B\u000E\u800D\u0000\u301F\
\u0045\u8001\u7FF2\u000A\u000E\u800B\u0000\u3198\u0046\u8001\u7FF2\u000A\u000E\u800B\u0000\u32C9\
\u0047\u8001\u7FF2\u000C\u000E\u800E\u0000\u33D3\u0048\u8001\u7FF2\u000C\u000E\u800E\u0000\u35E3\
\u0049\u8001\u7FF2\u0003\u000E\u8005\u0000\u36E6\u004A\u8000\u7FF2\u000A\u000E\u800B\u0000\u371D\
\u004B\u8001\u7FF2\u000C\u000E\u800D\u0000\u382D\u004C\u8001\u7FF2\u000A\u000E\u800B\u0000\u39D8\
\u004D\u8001\u7FF2\u000F\u000E\u8011\u0000\u3A90\u004E\u8001\u7FF2\u000C\u000E\u800E\u0000\u3C96\
\u004F\u8001\u7FF2\u000C\u000E\u800E\u0000\u3DFC\u0050\u8001\u7FF2\u000C\u000E\u800D\u0000\u4004\
\u0051\u8001\u7FF2\u000C\u0011\u800E\u0000\u4185\u0052\u8001\u7FF2\u000B\u000E\u800C\u0000\u43F0\
\u0053\u8000\u7FF2\u000C\u000E\u800C\u0000\u4592\u0054\u8000\u7FF2\u000C\u000E\u800C\u0000\u47EF\
\u0055\u8001\u7FF2\u000B\u000E\u800D\u0000\u48F2\u0056\u8000\u7FF2\u000D\u000E\u800D\u0000\u4A23\
\u0057\u8000\u7FF2\u0012\u000E\u8012\u0000\u4BF9\u0058\u8000\u7FF2\u000C\u000E\u800D\u0000\u4EB7\
\u0059\u8000\u7FF2\u000C\u000E\u800C\u0000\u50BD\u005A\u8000\u7FF2\u000C\u000E\u800C\u0000\u5235\
\u005B\u8001\u7FF0\u0005\u0013\u8005\u0000\u53DD\u005C\u8000\u7FF2\u0008\u000F\u8008\u0000\u5466\
\u005D\u8000\u7FF0\u0004\u0013\u8005\u0000\u558E\u005E\u8000\u7FF2\u0008\u0007\u8008\u0000\u5602\
\u005F\u8000\u8000\u0009\u0002\u8009\u0000\u56BA\u0060\u8000\u7FF1\u0005\u0003\u8006\u0000\u56F0\
\u0061\u8001\u7FF5\u0009\u000B\u800B\u0000\u5728\u0062\u8001\u7FF1\u000A\u000F\u800B\u0000\u5895\
\u0063\u8000\u7FF5\u000A\u000B\u800A\u0000\u5A17\u0064\u8000\u7FF1\u000A\u000F\u800B\u0000\u5B90\
\u0065\u8001\u7FF5\u000A\u000B\u800B\u0000\u5D1B\u0066\u8000\u7FF1\u0007\u000F\u8007\u0000\u5EAD\
\u0067\u8000\u7FF5\u000A\u000F\u800B\u0000\u5F82\u0068\u8001\u7FF1\u0009\u000F\u800B\u0000\u617B\
\u0069\u8001\u7FF1\u0003\u000F\u8005\u0000\u6275\u006A\u7FFF\u7FF1\u0005\u0013\u8005\u0000\u62CF\
\u006B\u8001\u7FF1\u000A\u000F\u800A\u0000\u637E\u006C\u8001\u7FF1\u0003\u000F\u8005\u0000\u64D8\
\u006D\u8001\u7FF5\u0010\u000B\u8012\u0000\u6512\u006E\u8001\u7FF5\u0009\u000B\u800B\u0000\u66A1\
\u006F\u8000\u7FF5\u000B\u000B\u800B\u0000\u6773\u0070\u8001\u7FF5\u000A\u000F\u800B\u0000\u690E\
\u0071\u8000\u7FF5\u000A\u000F\u800B\u0000\u6AAB\u0072\u8001\u7FF5\u0006\u000B\u8007\u0000\u6C43\
\u0073\u8000\u7FF5\u000A\u000B\u800A\u0000\u6CC4\u0074\u8000\u7FF2\u0007\u000E\u8007\u0000\u6E6E\
\u0075\u8001\u7FF5\u0009\u000B\u800B\u0000\u6F22\u0076\u8000\u7FF5\u000A\u000B\u800A\u0000\u6FEF\
\u0077\u8000\u7FF5\u000F\u000B\u800F\u0000\u713A\u0078\u8000\u7FF5\u000A\u000B\u800A\u0000\u7336\
\u0079\u8000\u7FF5\u0009\u000F\u8009\u0000\u74AB\u007A\u8000\u7FF5\u000A\u000B\u800A\u0000\u7643\
\u007B\u8000\u7FF0\u0007\u0014\u8007\u0000\u7770\u007C\u8001\u7FF2\u0003\u0011\u8005\u0000\u78BA\
\u007D\u8000\u7FF0\u0007\u0014\u8007\u0000\u78F8\u007E\u8001\u7FF8\u000C\u0004\u800E\u0000\u7A45\
\u00A0\u8000\u8000\u0000\u0000\u8005\u0000\u7B01\u00A1\u8001\u7FF5\u0003\u000F\u8005\u0000\u7B01\
\u00A2\u8001\u7FF2\u0009\u0011\u800B\u0000\u7B6B\u00A3\u8001\u7FF2\u000B\u000E\u800C\u0000\u7D24\
\u00A4\u8000\u7FF3\u000E\u000E\u800E\u0000\u7EB3\u00A5\u8000\u7FF2\u000C\u000E\u800C\u0000\u812A\
\u00A6\u8001\u7FF2\u0003\u0011\u8005\u0000\u831B\u00A7\u8000\u7FF2\u000B\u0013\u800C\u0000\u8375\
\u00A8\u8001\u7FF2\u0007\u0002\u8008\u0000\u868F\u00A9\u8001\u7FF2\u000E\u000E\u8010\u0000\u86B1\
\u00AA\u8001\u7FF2\u0007\u0007\u8009\u0000\u89A7\u00AB\u8001\u7FF7\u0008\u0008\u8009\u0000\u8A78\
\u00AC\u8001\u7FF8\u0009\u0004\u800B\u0000\u8B6A\u00AD\u8000\u7FF9\u0006\u0002\u8006\u0000\u8BD2\
\u00AE\u8001\u7FF2\u000E\u000E\u8010\u0000\u8BF6\u00AF\u8001\u7FF2\u0008\u0001\u8009\u0000\u8EA0\
\u00B0\u8001\u7FF2\u0006\u0006\u8007\u0000\u8EC9\u00B1\u8001\u7FF4\u0009\u000C\u800B\u0000\u8F53\
\u00B2\u8000\u7FF2\u0007\u0008\u8007\u0000\u9045\u00B3\u8000\u7FF2\u0007\u0008\u8007\u0000\u911B\
\u00B4\u8001\u7FF1\u0005\u0003\u8006\u0000\u920A\u00B5\u8001\u7FF5\u0009\u000F\u800B\u0000\u9244\
\u00B6\u8000\u7FF2\u0009\u000E\u800A\u0000\u934F\u00B7\u8001\u7FF8\u0003\u0002\u8005\u0000\u9441\
\u00B8\u8001\u8000\u0004\u0004\u8005\u0000\u9457\u00B9\u8001\u7FF2\u0004\u0008\u8007\u0000\u94A4\
\u00BA\u8001\u7FF2\u0007\u0007\u8009\u0000\u94F8\u00BB\u8000\u7FF7\u000A\u0008\u8009\u0000\u95C9\
\u00BC\u8001\u7FF2\u000D\u000E\u800F\u0000\u96CF\u00BD\u8001\u7FF2\u000E\u000E\u8010\u0000\u98D4\
\u00BE\u8000\u7FF2\u000F\u000E\u8010\u0000\u9B0B\u00BF\u8000\u7FF5\u0009\u000F\u8009\u0000\u9DA9\
\u00C0\u8000\u7FEE\u000D\u0012\u800D\u0000\u9F14\u00C1\u8000\u7FEE\u000D\u0012\u800D\u0000\uA16A\
\u00C2\u8000\u7FEE\u000D\u0012\u800D\u0000\uA3C0\u00C3\u8000\u7FEE\u000D\u0012\u800D\u0000\uA639\
\u00C4\u8000\u7FEF\u000D\u0011\u800D\u0000\uA8B2\u00C5\u8000\u7FED\u000D\u0013\u800D\u0000\uAAED\
\u00C6\u7FFF\u7FF2\u0014\u000E\u8013\u0000\uAD6E\u00C7\u8001\u7FF2\u000C\u0012\u800D\u0000\uB005\
\u00C8\u8001\u7FEE\u000A\u0012\u800B\u0000\uB277\u00C9\u8001\u7FEE\u000A\u0012\u800B\u0000\uB406\
\u00CA\u8001\u7FEE\u000A\u0012\u800B\u0000\uB595\u00CB\u8001\u7FEF\u000A\u0011\u800B\u0000\uB747\
\u00CC\u7FFF\u7FEE\u0005\u0012\u8005\u0000\uB8BE\u00CD\u8001\u7FEE\u0006\u0012\u8005\u0000\uB95B\
\u00CE\u7FFF\u7FEE\u0007\u0012\u8005\u0000\uBA0A\u00CF\u8000\u7FEF\u0007\u0011\u8005\u0000\uBAEE\
\u00D0\u8000\u7FF2\u000D\u000E\u800D\u0000\uBB9A\u00D1\u8001\u7FEE\u000C\u0012\u800E\u0000\uBD66\
\u00D2\u8001\u7FEE\u000C\u0012\u800E\u0000\uBF55\u00D3\u8001\u7FEE\u000C\u0012\u800E\u0000\uC1C3\
\u00D4\u8001\u7FEE\u000C\u0012\u800E\u0000\uC431\u00D5\u8001\u7FEE\u000C\u0012\u800E\u0000\uC6C2\
\u00D6\u8001\u7FEF\u000C\u0011\u800E\u0000\uC953\u00D7\u8000\u7FF5\u000A\u0009\u800B\u0000\uCBA7\
\u00D8\u8001\u7FF1\u000C\u0010\u800E\u0000\uCD00\u00D9\u8001\u7FEE\u000B\u0012\u800D\u0000\uCF96\
\u00DA\u8001\u7FEE\u000B\u0012\u800D\u0000\uD129\u00DB\u8001\u7FEE\u000B\u0012\u800D\u0000\uD2BC\
\u00DC\u8001\u7FEF\u000B\u0011\u800D\u0000\uD472\u00DD\u8000\u7FEE\u000C\u0012\u800C\u0000\uD5EC\
\u00DE\u8001\u7FF2\u000A\u000E\u800C\u0000\uD7CA\u00DF\u8001\u7FF1\u000B\u000F\u800C\u0000\uD922\
\u00E0\u8001\u7FF1\u0009\u000F\u800B\u0000\uDAE5\u00E1\u8001\u7FF1\u0009\u000F\u800B\u0000\uDCAC\
\u00E2\u8001\u7FF0\u0009\u0010\u800B\u0000\uDE73\u00E3\u8001\u7FF0\u0009\u0010\u800B\u0000\uE066\
\u00E4\u8001\u7FF1\u0009\u000F\u800B\u0000\uE259\u00E5\u8001\u7FF0\u0009\u0010\u800B\u0000\uE412\
\u00E6\u8000\u7FF5\u0011\u000B\u8011\u0000\uE600\u00E7\u8000\u7FF5\u000A\u000F\u800A\u0000\uE8B4\
\u00E8\u8001\u7FF1\u000A\u000F\u800B\u0000\uEA9C\u00E9\u8001\u7FF1\u000A\u000F\u800B\u0000\uEC8C\
\u00EA\u8001\u7FF0\u000A\u0010\u800B\u0000\uEE7C\u00EB\u8001\u7FF1\u000A\u000F\u800B\u0000\uF099\
\u00EC\u7FFF\u7FF1\u0005\u000F\u8005\u0000\uF27B\u00ED\u8001\u7FF1\u0005\u000F\u8005\u0000\uF309\
\u00EE\u7FFF\u7FF0\u0007\u0010\u8005\u0000\uF397\u00EF\u7FFF\u7FF1\u0007\u000F\u8005\u0000\uF46D\
\u00F0\u8001\u7FF1\u000A\u000F\u800C\u0000\uF50B\u00F1\u8001\u7FF0\u0009\u0010\u800B\u0000\uF72B\
\u00F2\u8000\u7FF1\u000B\u000F\u800B\u0000\uF883\u00F3\u8000\u7FF1\u000B\u000F\u800B\u0000\uFA80\
\u00F4\u8000\u7FF0\u000B\u0010\u800B\u0000\uFC7D\u00F5\u8000\u7FF0\u000B\u0010\u800B\u0000\uFEA8\
\u00F6\u8000\u7FF1\u000B\u000F\u800B\u0001\u00D3\u00F7\u8000\u7FF4\u000B\u000A\u800B\u0001\u02C2\
\u00F8\u8000\u7FF4\u000B\u000E\u800B\u0001\u03B8\u00F9\u8001\u7FF1\u0009\u000F\u800B\u0001\u05D3\
\u00FA\u8001\u7FF1\u0009\u000F\u800B\u0001\u06FA\u00FB\u8001\u7FF0\u0009\u0010\u800B\u0001\u0821\
\u00FC\u8001\u7FF1\u0009\u000F\u800B\u0001\u0974\u00FD\u8000\u7FF1\u0009\u0013\u8009\u0001\u0A8D\
\u00FE\u8001\u7FF1\u000A\u0013\u800C\u0001\u0C7F\u00FF\u8000\u7FF1\u0009\u0013\u8009\u0001\u0E33\
\u0000\u0000\u0000\u0000\u0000\u0000\u0001\u1017"
,"\
\uDEF7\uEF7B\uFF1D\uEF7B\uA7AE\uA4F0\uF94C\u8F50\u2067\uC246\u0FBC\uE600\u207D\uA246\
\uCF1E\u5320\u9E3E\u93C2\u7FE3\uDDEF\uDCF5\u2005\u1058\u600C\u07DC\uACE3\uFBC5\u1F73\
\u8301\u10E9\u0182\u8FEF\u07F7\u66D4\u906D\u4659\u7114\uDFEF\uDBBE\u11BE\u3EF7\uEF75\
\uDCF3\u981B\u9983\u1E40\u1FC6\u3C64\uC4D2\uFEFF\uFBED\uEFB7\u7FE3\uB8D7\uD577\u0FBD\
\u61F2\uB024\uF30E\u9900\u0722\u9618\u0134\u0022\u0376\uAC00\uAE7F\uC0DF\u29D7\u3FEA\
\u93E4\u9EFB\uAF19\u37E5\u9BC4\u5C25\u57E8\uFCE5\uCF15\u66E2\uCEFD\uC897\u5BFF\u5D9E\
\u7F30\u4677\u42AB\u35BC\u3FA2\u5410\u297C\u93E6\uE6F1\uBFF3\uF5E7\u7B13\uA886\u24DF\
\uE3DE\u2BF7\u0320\uE7BC\u4034\u773F\u133F\u7CF0\uCF91\uF89F\u3905\u93B8\u045F\uB839\
\u53D3\u3C3F\uE45F\uE3B3\u0BF7\u73F4\uB3F7\uF57E\uF780\u7E9C\uBFAA\u1673\uDF88\uE3AF\
\uF7EC\u5F81\u753D\uBAE4\uEA78\u2627\uF882\u42FD\u044C\u3D4F\u91D4\u52EB\uBE1F\uFB38\
\u987D\u9EFB\u9E06\u8877\u81F5\uBDE3\u7CFF\u32C0\u0565\uA528\u04D6\uBE6F\uDFBF\u106C\
\uD64F\uC0DB\u2ABB\uAC3E\uCD61\uFDFE\u27C6\uBCBB\u7963\uE7DE\u432D\uE604\u3B3B\uE54B\
\u421B\u47C4\u3CC7\uBCF7\uEF91\uF630\uF14C\uEBEC\u5DC4\u4C48\u0778\u0ADE\u3CE6\u7A29\
\u660E\uF0FC\u648D\u0FE4\u818F\u2263\u240C\u1048\uC712\u63C2\uE460\uBE0F\u9891\u43F1\
\u1AF4\uEB98\uDE24\uB98A\u79E0\u4617\uC0F7\u171C\uF1DE\u89E0\uF503\u3FC0\uD206\u1083\
\u6058\u1081\u0F48\u31FE\u0F50\u0E2A\u78EE\uEA78\u7E32\u783D\u05DE\u173C\uD400\u8C4A\
\u78D7\uEDFF\u2BBF\uF9D7\uEB0D\u4FFF\uA786\uAA06\u1BFB\u3C1F\u1BD3\u8FA8\u00FA\u6001\
\u059C\u0000\u0000\uBDC6\uEB77\uEF7B\uC002\uF7B8\u7D6E\u5DEF\u0000\u0000\uBB20\uEFC0\
\uCCC2\uDF91\uF5AC\u7BDE\u006F\u4CF3\uC401\u6099\uE05A\u80AB\u03CA\u164E\u7D44\u9A60\
\u57E0\u6301\uF01C\u4165\u0FAC\u98AC\u7BE0\uC602\uE038\u02CB\uFFF4\u2F9E\u5BF1\u9E29\
\u9E1B\uFB1A\u279E\u5B5F\uF10F\u4945\uCF05\u0130\u0002\u0000\u0098\u0A91\u0CF1\uEF7F\
\u5F10\uAA94\uF7DC\uBE54\u56FC\uE78A\uC406\u87FA\u6EFA\uE7A7\u64F7\uEE62\u793D\u01DE\
\u0000\u0000\u0000\u0000\uFDE2\uF3DF\uE40D\u299E\uFF9E\u73A0\u7B9E\u789E\u7CA9\uFC43\
\u7E2C\u842F\u53C5\uBD30\uEA80\u8039\u9EFA\uA817\uF9EF\uE301\u7E7B\uF8C0\u3F3F\uFC60\
\u1F9F\u46E0\u7BDD\uBDEF\u004B\uDE20\uFF73\u906F\u867B\u3B9C\uAE74\uCF73\uD393\u1D1C\
\uFDA2\u0DED\u600C\uF1BC\uDC61\uE7BB\u0037\uC363\uF7B8\u56BF\uF903\uB946\u081B\uAC63\
\u6F10\u372C\uDCFA\uA333\uFD8D\u9C84\u8137\uFF79\u6C80\uEF00\u9800\u02F5\u67B2\uDE01\
\u02F1\u1D66\uF640\u801A\u3477\uA9E0\uF7BC\u795E\u097F\uBAC0\uDEF7\uE57B\u01FD\u0000\
\uDEEA\uEF7B\u24BD\uB080\uBDEF\u72F7\u6024\u0044\u78E6\uDDCF\u9113\u8C33\uF177\uFFBE\
\uDF7B\u4378\u64CD\u28CE\u9FC0\u1F79\u4A48\u9E0F\u2A37\uF73B\u5FBD\u61BC\u25BD\u5BEA\
\uEF90\u03BE\u9EE6\u3C03\uFEAF\u81DF\uFF8E\u184A\u0739\uCE50\uEE77\u38AF\u09FA\u7BF5\
\uFCA4\uDBDD\uA71A\u4F58\u048E\u5CFE\u7F05\uA2B1\uD61F\u1993\uDF1D\u1DBD\uF32F\u1157\
\u2FF5\uDEE3\uEF7B\uF7BD\u003E\uB8C4\uDEF7\uEF7B\u0518\uF1A8\uDC02\u007C\u7EA3\u1D00\
\u3013\u05EA\u98E8\u5180\u0033\uBC6F\u7C80\u0056\u0FDA\uCF90\u8093\uDFFE\u25F3\u4AF6\
\uDCF1\u8CF0\uEFB1\uF279\uD7F5\uFC43\u170C\u9E10\u21E8\uAE7E\u72FC\u53DF\u90FD\u32E0\
\uFADF\u33DF\uFB57\u4BE2\u35D1\u2005\uC562\u621B\u4655\u3CC7\uB4F7\u7B96\uA8A6\u10FD\
\uB9EF\u45FF\u19EC\u5FB2\uCF9D\u3BB9\u5567\u617E\uFF1C\u309C\u89F2\u4409\u17E5\u2FC6\
\u3C75\uEEE7\uE427\u227E\uBF9E\uBF29\u3E73\u8031\u43F6\uBB3C\uC19E\uDF3D\u1FA8\uF3E4\
\uC2FD\u533C\u7798\u0002\uCF30\uCC14\u0933\u9DE6\u0000\u7E00\u9817\uE469\uD667\u9802\
\u582F\u4DE7\u4FA2\uF78F\uEF17\uF55D\u4FFB\uC739\u0AFE\uC6B9\u2BFF\uDF44\uBF59\u113D\
\u3A7D\u1FDE\uFF58\uD737\uF7BD\u7BDE\u005F\uDEEB\uEF7B\u2FBD\u7580\uBDEF\uDEF7\uC017\
\u013B\u9EF9\uF80E\uCF7D\uEFBA\uF3C0\uCFFB\u7FB5\uD903\uEAB7\uE8C3\uF55B\uBF99\uD73D\
\u37FF\uEF7E\uEEB3\uE49B\u3A7B\uB580\uF9EF\uB792\u7887\uC476\u7DCC\u13CF\uBF53\uB443\
\uAB13\u1D30\u1D10\uC40F\uFC7F\uBE12\u1EFC\u9AA8\u180F\uB036\u016E\uE600\u0079\uCC00\
\uB9DF\uB7E7\uEA00\u56FF\uEA88\uA053\uB1BE\uBDF6\uB777\u206F\uB1BF\u607B\u9BAC\uED07\
\uFCA6\uF3DD\u9C46\uC8F1\u4DE7\u4BB9\u92CC\u7B6B\uF262\uEF7A\u705F\uFF1F\u6427\u89CD\
\u93C9\u2922\uD31F\u9840\u1387\u0A49\u8A66\uC04B\uEC49\u0D69\u1E22\uCCCF\uD630\u7EDF\
\uCFC2\uBF77\uFEC7\u73FD\u78AA\u8E8D\uDFE8\u4F1A\u19FD\uA6B5\uCE75\uE7D2\u817C\uDE37\
\u055F\u0563\u7B90\uEFD4\uBBDC\u013B\uDFB9\uF14A\u01EC\uBAC0\u800B\u07CF\uE460\u02C8\
\uE2F8\u01C4\u7AC4\u2AB2\u1580\u89C7\u7C09\uA8F1\uC0FC\u0B18\u0E4F\uF9F8\uE7E3\uE983\
\uEF77\u16DD\u009E\uE4C4\uDDF8\uEF7B\uF9FD\u8D64\u3502\u78C6\u807C\uEFD7\uF7B9\uFBDE\
\u06FF\u3E40\u81FF\uF7BE\u159E\u880D\u00F6\u0030\uF9F9\uF7D0\uFFDE\u0BD3\u2FC0\uF7D1\
\uFBDE\u05E5\u5678\u000E\u6016\u78AE\u7BE8\u7DEF\u0DE3\uEA20\u885B\uF7DE\u26FC\u5EE4\
\uD443\uE1FB\uED64\u7F7B\u99E3\u519E\u41BF\u3F5D\u05DB\u4E63\u078F\u7F78\u0042\u8000\
\u0010\u0F1E\uFEF0\u176C\u5CE4\u519E\uA0DF\u8F8E\uCF93\uF7BE\u9E37\uEE49\uA295\u8FBE\
\uDEE7\uCF7B\u026F\uBD44\uD03B\uDEF7\u18DF\uA01F\u5576\u5C01\uA007\u004C\u0099\u000C\
\u0019\u0265\u0BB4\uD9E2\u1EA3\uDEFA\u8DF3\u01F1\uEF51\uCF0E\uF7BD\u7BDE\u0BEF\u7D00\
\uBDEF\uBEF7\u0000\u0000\uEF7D\uF7BD\u0007\uDEFA\uEF7B\u000F\u0000\uDF40\uEF7B\u3FBD\
\u9E00\uEF7B\uF7BD\u05DE\u7D00\uBDEF\u2EF7\u0000\u8000\uF7BE\uBBDE\u4000\u7BDF\u5DEF\
\u0000\u0000\u0000\u7A20\uB3DF\uE417\u435E\uFE8C\u64E1\u7BED\uA8F7\u8CF6\u1BF1\u7F8C\
\uDB4C\uE20B\u49FB\uA80B\u32C7\u0000\uDEF7\u637B\u0019\uC286\uB7BD\uF9F8\uC005\uFCA8\
\u5117\uDF13\uBF18\uCF7B\u9F2F\uFB10\u90AD\uF7CF\uEE79\u9E02\u02FB\u0000\u0000\u0000\
\u7D00\uBDEF\u7EF7\u0000\uEF7D\uF7BD\u007E\u0000\u0000\u0000\uB8C0\u002F\u0000\u0000\
\uDCF0\u0005\u0000\u0000\u0000\u0000\u0020\u59E6\u17F0\uB78F\uD398\u6633\uEEFC\u637D\
\u6F0E\u510F\uEBEF\u0BB9\uFDF4\uD600\u0FAA\u74F0\u00FD\u37E3\u403E\uC7FE\u2009\u9BAE\
\uFDC0\u93E7\uA980\u016B\u7FC6\u5D3D\u17C0\uF97E\u4025\u389C\u4600\u178F\uAAC0\u00F9\
\uE2F8\uCF97\u005D\u0000\u0000\u0000\u0000\u0000\u0000\u8000\uF7BE\u7BDE\u0007\uBDCF\
\uB005\u0FEF\u3007\u4406\uF005\u5409\u104C\u06AB\u7E6E\uC560\u1819\u165F\uF2FC\uC409\
\u838C\u0FCA\u7A88\u1382\uF013\uA29A\u022A\uE318\uE333\uF800\uF9F2\u00B2\uE8CC\u00FC\
\u32B0\u0026\u2B3E\uBAC0\uB01F\uC3EE\u0053\u0378\uC8C0\u801F\u9EB7\uF002\u1BC6\uF900\
\u0FE6\u1AC0\u014F\uF138\uC802\u5F37\u6B00\u0DCC\u44E0\uC801\u0017\u806B\uEFB5\u4DF9\
\u7F88\u510F\u0FEF\uD65F\uF7BE\uD597\uC6AA\u506F\u663B\uBDFC\u6620\u2A54\u2FE0\u00A7\
\u03A6\u5300\uD300\u0549\uE5FC\u0BDF\u4662\u8D55\uA0DF\u31FE\u37C3\uDF6A\u1BFB\uC4D5\
\u21EE\uFDEA\uF711\u7BDE\uEEEF\u3000\u0ED6\uBDD4\uEEF7\u06CA\uBF18\u0058\u113C\u9E00\
\uC008\uA2F8\uF750\uBBDE\u6C9F\u5C80\u513B\uDEF7\uEFFB\u0000\u0000\u0000\u6B00\uF3DF\
\u109B\u87BB\uF7A8\u6F87\uBED4\u37F7\u35EA\uFC6A\uF506\u158F\u2F3F\u1988\u586B\u76C0\
\uC018\u0B12\uCB00\u9600\u1618\u9DB0\u179F\uB4C4\u8D46\uA0DF\u31FE\u37C3\uDF6A\u1BFB\
\u12F5\u87BB\u0908\uBED6\u3CE7\u2773\uD7C0\u0019\u19D6\uDEEB\uEF7B\u4DFF\u9C80\uE07B\
\uF7BB\u9FFE\u80B8\u72FC\uC004\u0034\u01A6\u2F8C\uF82B\uBDEE\uC9FB\uA017\uE276\uF7BB\
\u03E6\uE3A0\uF007\u53D4\u6F00\u00BC\u66F9\uEE63\u7773\uDF83\uC23B\uFF58\uD560\uF7D8\
\u9FFE\uF1FC\u83D7\uF2FC\u2521\u3F78\u78BE\u27BF\u87A8\u8FFC\u3BE7\u817B\uF7B1\uD1CC\
\u04FF\uFDE3\u27EF\u9E5F\uF182\u8A8D\u5EF8\u1160\uFE4F\uB906\uC32A\uD46F\uF7BE\uF1DF\
\uFB12\u90AD\u9773\uEF75\uF7BD\u7BDE\u02EF\u7580\uBDEF\uDEF2\u177B\u0000\u0000\u0000\
\u0000\u0000\u0000\u0000\u0000\u77BC\u7180\u005F\u0000\u0000\u0000\u0000\u0000\uC016\
\u41B1\u2789\u0AD6\u5EB1\uB65F\uF73E\uBC74\uFE69\u109E\u6FCF\uF79A\uBC05\uCE77\u8058\
\uCB15\u028A\u1515\u073E\u871C\u0591\u0B2A\u3C5F\uE278\uC781\uF1C1\uD641\uE213\u04A9\
\u9627\u7F15\u89E0\u7FBF\uC04C\uAAAA\uF005\uFD79\u4601\u1666\uCF80\uEA07\u3836\uF07F\
\u51DD\u3051\u0722\u18AC\u019E\u2145\u18B3\u7B0A\u8D8C\uB365\uA20D\u1EAA\u3DFC\u4D94\
\uEDF9\u2A28\uC606\u8EC3\uF151\u1467\u0C54\uA8AB\uFE52\uD5B0\uCB88\u1CCE\uCA0A\u14BF\
\uED4B\u6018\u5DCC\u8C41\u1F3D\uF2A0\u50D9\u1B95\u47F8\uFC14\u0142\u0725\u888C\uF881\
\u049F\uEDEF\u78E8\uCC61\uCF6C\u0F53\u8BDA\uFC5F\uACC2\u8859\u8E8E\u06CE\uE6B3\u6F17\
\u6F00\u53D4\u2080\uAE00\u26A7\uC6B0\uB2FC\uF203\uD6CD\uC1F1\u2F1B\uD54F\uACC3\uF0A7\
\u2FC6\uE3B2\uF907\uAFC6\u036F\uFB7D\u198D\u3310\uDE3A\uE868\u5668\u24AE\u98D7\uF8E8\
\uD1D1\uD4F0\u7CCC\u40AA\u57EB\uE303\u6A79\u400E\u068B\u2348\u0000\u0000\u0000\uBDC0\
\uDEF7\uEF7B\u03FD\uB820\uDEF7\u6F7B\u8069\uAB55\uD500\u80D5\uF378\uF803\u1BC6\uAE80\
\u00B7\uAACF\uC805\u7E5F\uC700\uC009\u7A3B\u6200\uEF7A\uF7BD\u3BDE\uE000\uF7BD\u6006\
\u00DF\u0000\u0000\u0000\u0000\u37D8\uBCC0\u6605\u601C\u8055\u262F\uE318\uBE03\u302C\
\u00E3\u02AB\u317C\u18C1\uF01F\u8165\u7F15\u6B10\uF805\u02C7\uDF95\uDEFF\uFC1F\u002F\
\u0000\u0000\u0000\u0BFF\u6F60\uC630\uF018\u7C66\u7A88\u0AE6\u7C66\u4C5F\uCABE\u4FAC\
\uE1E5\uDD64\uEF7B\uF7BD\u005E\u3FF1\u8E29\uF8C3\uE219\uDFFD\u86F3\u33BC\uFCC5\u467B\
\u7BDF\uD46A\u2FFA\u18E2\uFDF2\uFBDF\u7B91\uE826\uFF58\u3F7B\u4E96\u4D30\uB9AA\u7BDE\
\u837F\u86FA\u7F5C\u77FB\u0001\u0000\uF200\uE73B\uE037\u113E\u4FF5\uFFCC\u4F3D\uBE34\
\u5F14\u0214\u022A\u0C30\u30C0\uA808\uBE08\uBE21\u3C28\u9EFB\u7E27\u7EC4\u6A22\uF207\
\u773B\uE42F\uC27E\u8FE8\uE637\u7BB9\u153C\uDE35\u6E30\uE3E6\uE307\u033F\u0040\uFC78\
\uD620\u1A88\uC61D\uCBD7\uEB1B\u5DDC\uE4B3\uC27E\u5F78\uB880\u003F\u0000\uFC80\uF9CE\
\uC41E\u227D\u0F9E\u7CBF\uF7FE\uA0FF\u4BE2\u92F9\u3051\u0308\u0610\u6320\uC0C1\u2FCA\
\u8BE4\uE7CE\uFFDC\uB883\uC44F\uE1B3\uDDF9\u25F3\u57D6\uB9E2\u7B21\u7BEC\u5F3B\u673F\
\uC6B0\uF1E3\uF7BF\u91DE\u2002\uEE22\uF7BD\u1BDE\u0A33\u7C70\uE30F\uD47D\uEF8A\u3DDE\
\uFE93\uA22A\u05BE\uDF73\uCF3F\u0C3B\uBEAE\u3087\u6E79\uF739\u3C01\u9CB7\u00FB\u0000\
\u0000\u0000\uDF90\uBF39\uFFF1\uFB89\uD444\uE93F\uFFAC\u3FFD\uF158\uF94B\uF112\u80C0\
\u3004\u9100\u0305\uFC4F\uBE52\uB378\uF7FE\u20FF\u13EE\u7F51\uEFC8\u1F9C\uBF21\u5C62\
\uACDB\uBDDF\uD47B\uFF54\u8C27\u79FE\u006F\u0000\u6000\uB9F4\u70BB\u1856\u125F\u7BBF\
\u789E\u4B78\u0EBC\u120F\u0000\u0000\u0000\u39E0\u60CF\u079E\u7DCF\u0000\u0000\u29E6\
\u3CC0\u5805\u01F7\u0000\u0000\u0000\u17F0\u3EEB\u84F1\uC5FC\u077B\u0000\u0000\uF100\
\u033F\u8FF8\u806F\u746F\u7E81\u827A\uD56F\uE602\u0678\u7FD0\uA817\u8DF8\uF017\uB33C\
\uBF00\u02FC\u3788\uEB3E\u003E\u0000\u0000\uB73C\u7FFA\u53FF\uCEFD\u12F9\u4ADF\uBEF9\
\u8ABF\u0E78\uEFC6\u699E\uB9D6\uC73B\u57E0\u8DE2\uC2F8\u4CF8\u8C06\u4811\u0000\u0000\
\u0000\u0000\u0000\u0000\u9BDE\uEE7D\u9C2E\uC615\uC497\u9EEF\u1E27\u12DE\uC3AF\u0483\
\u0000\u0000\u0000\uFA20\uFF7F\u881D\u4AFF\uFEB9\u8F41\uDFFA\u8D7F\uE566\uE52F\u972F\
\u0511\u189E\u701C\u82E1\u88C3\u5407\u2B0C\u297F\u597F\uA8F4\uFDFF\uF8D7\uFF11\u7295\
\uC3FD\uE4EF\uCE77\u206F\u13F6\uFF51\uF3C4\uFFBF\uC68A\uF29B\u8517\u1501\u1801\u6006\
\u0C18\u08A8\uE53A\u0A2F\uBFF5\u8AFF\uF7C6\uD444\u3C4E\u39DF\u04BF\u0000\u6000\uCEFC\
\uC6F9\uE57D\u22BF\u3F9E\u78DE\uF7FE\uA0FF\u4BF2\u32F9\u0C14\u0038\u600E\uC144\uE540\
\uC617\u8E8B\uDCE7\u20FD\u4577\u1F3C\uEFE4\uEF9C\u0001\u0000\uF758\u4EF9\u4FD3\uF604\
\uE97D\u1301\u0000\u0000\uFD40\uF9CE\uA83D\u455F\uB7D4\uF1B8\uF7BB\u2F17\u504B\uCFFB\
\uDF17\uADF9\u9831\u52BF\u0B7D\u3BF5\uF97B\u2AC4\u5746\uF784\uC62D\u888A\u7F37\uEEF7\
\uAC9C\uC2AF\u1B78\u0BBF\uE000\uCB77\u00BD\u5BBF\u05EE\u0000\u0000\u3018\u1BEC\u25BC\
\u6EFD\uEE20\u000B\u0000\u0000\uA400\u7244\u61BC\u9E5C\uCE78\u49DD\u257E\u8F9E\u2EE7\
\uB758\uF89E\u2FC1\u1ACB\u8E41\u6FE2\u3E51\uFF2A\u73FC\u2AA0\u1EA2\u54F8\uC1F9\u7BC8\
\u8073\uEAA7\u7E01\u1F11\uC630\uCC48\uE0FB\u0FB9\u3B9E\u1FCB\uC6D7\u32B6\u150B\u350B\
\u8D42\uF150\u10C6\u6C59\u9FE5\u4A2B\u3CD9\uEAFE\u3F51\u28FF\u8D54\uEEDC\u7AC8\u8F60\
\u945F\u8CF2\u943F\u4459\u0ABD\uC446\u8EC5\u504C\u8F0A\u9E42\u388D\uF227\u8B1D\u0E8E\
\uBC6B\u6631\uDC4D\u8EE8\uC617\uF59C\uF826\u04C4\u88DE\u3C17\u7CCF\u40D6\uF674\u2E2F\
\u5B3A\u63BC\u59A9\u2B0F\uDCDF\u1037\uFF77\u2C2C\uE9BF\uBF8F\u5519\u53C1\u6FE1\uF8A9\
\uE2B3\u1FEF\uA88B\u7A8A\uD702\u0F2F\uF13C\u8144\u02A5\u5DFC\u1FE0\u780F\uC156\u3F73\
\u110D\u4BE3\uEF70\uF7BD\u0BDE\uB820\uDEF7\uF8FB\uF580\u8174\u9FA7\uF205\u3E37\uD710\
\uBE01\u25F1\u7AE8\uC40B\uF7D2\u7BDE\u0007\uDF90\uD8C4\uB851\u497E\u828C\u0034\u5800\
\uE22E\u62C6\uFA9C\uE305\u1A3F\uCDF2\uD309\u0201\u0100\u2464\u27A8\u9DA1\uDC81\u8E73\
\u001B\u0000\u0000\uF300\uA84B\u03D8\u69F9\uAA88\u6180\u0100\u6380\u8CC1\u881B\uCEAF\
\uDE20\u0671\u3B2B\u2D70\u0000\uC848\u6408\uC615\uC6CD\u76B3\uFE42\u7FEE\uEFC1\u4B71\
\u1EF6\u7956\uEFB2\u631E\uCEDF\uE627\u7632\uBAA7\u339E\uCF19\u3079\u25FE\u9803\u0830\
\u8000\uC091\u3FD8\u6000\uEB1D\uF837\u8A75\uE7FA\u6353\uB3DF\uAFA2\u443B\u2B4F\uBC07\
\u001F\u2B00\u3C07\uBAEB\uF983\uA7ED\uBEC6\u8DF7\u5BF6\u6A29\uFA0F\uBF58\u0004\uFF63\
\uB580\uF9EF\uF80D\u887A\u0FFA\u13C6\u7BBF\u3456\u598F\u2BA2\u2E19\u5EFC\uF800\uFA7F\
\u17DE\uF000\uE6DF\u2FBD\uC000\u6002\u03FB\uCBFE\uDEEF\uEF7B\u001D\u0000\u8EF4\u77E7\
\u9ECE\uFBF1\uDC61\u22AF\u7BC6\u3D0B\uFC62\uFDEE\uC455\u318F\u176A\u7BF5\uE1E2\u81A7\
\u1976\u8031\u09CC\u3000\u0062\u9399\u069F\u65DA\uED64\u7EA2\u144F\uCCBF\uBBF1\u57F7\
\u7F19\uF3CE\u2AFF\uBC62\u55FF\u9F3C\u77E7\u9ECE\uCDBA\u03FB\u777E\u51CE\u4603\u74D5\
\uB85D\u319A\uC3C7\uE633\u4740\uD1D3\u6F10\u95AE\u806F\uEF95\u163B\uF7BC\uC466\uF7B8\
\u0005\u7BDE\uBCAF\uBEF7\uF7BC\u795E\u7DEF\u8001\uDEF7\uEF2B\u2FBD\u7800\u00EF\uE000\
\u03BD\u1DEF\u0000\uE880\uEF7D\uC46E\u835E\u36B1\uD66F\u77BE\uB18F\uDF0C\u1C60\u485B\
\uDDC8\uFF8E\u303B\uAA86\uFB98\u0F7C\uAABE\uE227\u76F9\u53E4\uEFBF\u3BFC\u47C7\uD720\
\u2B3F\uE9F3\u1101\uAE4E\uBE7D\u1BF9\uF8D3\u15BF\u5BCF\u31B3\uE77F\u2B2B\u248D\u5F9E\
\u33C7\u0BF6\u3386\u3AB2\u76A9\uB1BD\uF7FE\uC6FE\u6A98\u14CF\uB7A3\uA7FD\u024F\uBD10\
\uD9EF\uC02B\uDD73\uEE7B\u85D9\u77A7\uC60F\uBE7B\uBF12\uE393\uCE77\uE317\uCD7B\uF11A\
\u88AF\u53E7\uFE73\u15AE\uBDEF\uF93D\u73FF\u9C89\u3FAC\u04CF\u7200\u9C89\u3FAC\uFACF\
\u2B5D\u7BDE\uF27B\uB3DF\uFC46\uE22B\uD4F9\uF19C\u633B\uCEFC\u62F9\u2F7C\uFF4F\u307B\
\u7CFA\uE785\uF7BA\uBBDC\uF30B\uFF7F\u78CB\uFBBF\u31EB\u52F6\uDFA6\uFEFF\uEB99\u0F77\
\u963C\u9F31\u39FF\uCC19\uCC7F\uC87F\uD1EE\uCE1D\u9CF3\uF1E7\uFBE6\u0BE6\u9BC0\u9BEF\
\uCE2F\u9CF3\u21E7\u47BB\uFC77\uBDEE\uDEF7\u00FB\uDDF8\uEF7B\u006D\uF7BC\u1BDE\uA200\
\u3DF7\u057B\uAE78\uCF7B\uBB3D\uF4F0\uC1EE\uCF78\uE257\uF277\uEF7F\uE5F9\u5EF8\u1AEF\
\u7510\u9CD4\u47F5\u3BDF\uFF93\u89CE\u77BE\uCF35\u0802\u1390\uEF7D\uF1F3\uDFAC\uFE01\
\uFF83\u359E\u5040\uC673\uE4EF\u317F\uF8EF\u9E5E\u3DBE\uEF18\u0AF9\u76CF\uB9EF\u1767\
\u7BFF\uBDEF\uF437\uE9D9\u3159\uFB8E\u3DDC\uB812\uDDCF\u9F23\uE315\uB8C2\u000F\u0000\
\uEF70\uBEDD\uFF7B\uEE00\uDBBD\uEF77\u001F\u8C00\uE0FB\uEF77\uF7BD\u05DE\uFCC0\uFFDF\
\uDEA3\uBF94\uCF30\u50ED\u8C6F\u066F\uFFF3\u74BD\u8B7F\uC567\uDEEF\uB005\uF7FE\uA8FF\
\uF94E\uB3C5\u5DEF\uC621\u577B\uEF07\u3B7D\u0472\uD4F1\uF73E\u678D\u1A76\uA85F\u13FB\
\u7E6F\uDC56\uDEF0\uDC40\u0017\u0000\u0000\u0030\u0616\u69BC\u30BC\u77FE\u303F\uFD53\
\uD0EB\uFBFF\uBF1B\u0005\u0000\uFDF2\u7BDF\uB187\u8267\u401B\u400C\u2402\u0C40\u1B80\
\uB180\u0267\uFEF9\u04EF\u0000\u0000\u79E6\uFE82\uBF0F\uC7FA\uE1B8\u7DF7\uF311\uCEFB\
\uC4FB\uB4E8\u0017\uE600\uFEFF\uF9A7\uEDF6\u7E77\u78F5\u3FC6\uCD60\u6B09\uEBFE\u8CF1\
\u7CFF\uF6FB\uFD3B\u7E5E\uF42F\uF47A\u307A\u2FE6\uFCC7\u7A25\u3D1C\u000E\u71E8\u38F4\
\uF98C\u31CB\u497F\u47AF\u87AF\uDE78\u600D\u337F\u37C0\u3398\uACC1\uF7E4\u884E\u00EE\
\uCFD0\u3004\u0356\uE770\uF3C8\u5603\u37B4\uF7E0\uB78F\u39AD\uDF80\uE4F3\u167B\u7AA8\
\u1E9D\uFBC0\u1CE6\uADEF\u93FA\u0173\u3F90\uBDE6\uEAB7\uCF1F\u01BB\uDFD8\uF80C\uCC06\
\u3099\uE12B\u4EF7\u7744\uD000\u04CF\uAC60\uC006\u639D\uEFFE\u01FF\uBA2B\u94DE\uE0BF\
\uDFB7\u9E66\u01DB\uE7BF\u6F51\u6F8C\u5506\uCC2F\uF7FF\u7DE2\uDD13\u42DF\u85CE\uC567\
\uDEEF\u7F25\u5000\uFEFB\u8017\u86F8\u01EC\uC0DF\uEFBB\u6267\u1256\uDE6B\u79EF\uEE88\
\uCC00\u9FA0\u5C89\uEEEB\u8D31\uA0D5\u77FF\u774B\u3C8E\uF93F\uECA5\u4567\u037B\uFFCF\
\u57FE\u6DBC\u01CD\u7BF0\u7C9E\u02CF\uBD54\u0F4E\uF780\u39CD\u5BDE\u87F5\u0B9C\uF200\
\uBCC7\u56F7\uF1FD\u099C\u7800\u04CE\u8C00\u03DF\u353C\uFC40\u8162\u7F2F\u6F01\u0FBD\
\u398C\u2827\u007F\uEF18\u3748\u9DE5\u519E\uFBFF\u351F\u67FC\uF5C8\uF883\u049F\uC710\
\u6001\u0CFC\u9E00\u003D\u7758\uF001\u00F9\u1C8C\u0059\u9C5F\u8038\u4F58\u0556\uE2B0\
\u3138\u2F81\u951E\u181F\uE163\u01C9\u7F3F\u7CFC\uFD30\uBDEE\uC2DB\u8013\u1C98\u7BBF\
\uBDEF\u9F3F\u51AC\uC6A0\u8F18\uF00F\u01FA\u7F75\uE200\u0FCD\u8AC0\u001B\u4EE6\uD600\
\u005D\u3E7C\u2300\u1647\u17C0\u0E27\uD620\u5593\uAC01\u4E38\uE04C\u478B\u07E5\u58C6\
\u7278\uCFC0\u3F1F\u4C1F\u7BBF\uB6EF\u04F0\u2620\uEFC7\u7BDE\uCFEF\u6B27\uA814\uC631\
\u03E3\u7EBC\uDE60\uC00F\uBB7C\u403E\uD7FC\uCDFA\uC401\u3DAF\u007B\uBBAC\uF800\u007C\
\u8E46\u802C\u4E2F\u401C\u27AC\u02AB\u7158\u989C\u17C0\uCA8F\u8C0F\uF0B1\u80E4\u3F9F\
\u3E7E\u7E98\uDEF7\uE16D\u4009\u8E4C\uBDDF\uDEF7\u4F9F\u28D6\u6350\uC78C\u7807\u00FD\
\u3004\uE9F6\u2E78\uD6F0\uFB39\u03F7\u36BE\uE7FF\u5801\u0177\uF9F0\u8C00\u591C\u5F00\
\u389C\u5880\u564F\uB005\u38E2\u8131\u1E2F\u1F95\u6318\uC9E1\u3F01\uFC7F\u307C\uEEFD\
\uDBBD\u13C2\u9880\uBF1C\uEF7B\u3FBD\uAC9F\uA051\u18C6\u0F8F\uFAF0\uFF61\u93E9\u0000\
\u7FD8\u24FA\uBAC0\u800B\u07CF\uE460\u02C8\uE2F8\u01C4\u7AC4\u2AB2\u1580\u89C7\u7C09\
\uA8F1\uC0FC\u0B18\u0E4F\uF9F8\uE7E3\uE983\uEF77\u16DD\u009E\uE4C4\uDDF8\uEF7B\uF9FD\
\u8D64\u3502\u78C6\u807C\u0FD7\uF7E2\u00FF\uFBBC\u139F\u0000\uFBBC\u139F\u7E20\u0FFF\
\u7580\u0017\u0F9F\uC8C0\u0591\uC5F0\u0389\uF588\u5564\u2B00\u138E\uF813\u51E2\u81F9\
\u1631\u1C9E\uF3F0\uCFC7\uD307\uDEEF\u2DBB\u013C\uC988\uBBF1\uDEF7\uF3FB\u1AC9\u6A05\
\uF18C\u00F8\u1FAF\u7D80\uBDEF\uDEF7\u03FB\u46B0\u0000\u3BC4\uF71E\u7BDE\u0FEF\u17E0\
\u0097\uF500\u233C\u0000\uB46F\u0001\u7CAC\uE713\u7BDE\u902F\u2E6F\u000E\uA378\uBEC1\
\uDEF7\u9E0B\uDDF2\uDB7B\uA004\u0001\uB378\uBDEE\u7EF7\uC006\uF198\uDE01\uEF7B\uF7BD\
\u7571\u0980\uE880\uCF7D\u426F\u35EE\uBD44\u4E1F\uBED6\u37F7\uE99E\uF519\uD41B\uB3F5\
\u305D\uF4E6\u8078\u27F7\u0004\u0800\uE001\u00F1\uCFEF\u4176\uE5CE\uF519\uEA0D\u38F8\
\uECF9\u7F7B\u99E3\u5EE4\uEA29\u20FB\uBFFA\u3F46\uBF00\u07FA\uB8C0\uE001\u7DF7\uF101\
\u093F\u71C4\uE300\u0067\u3D9E\uB9E0\uDEF7\uEF7B\u017D\uEFA0\uF7BD\u17DE\u0000\uA000\
\uBDEF\uFEF7\u4000\u7BDF\uFDEF\u0001\u0000\u7BE8\uBDEF\u07F7\uA800\u03FB\uCDE2\u580F\
\u0371\u3B98\uDCF1\uEF7B\uF7BD\u00BE\uF7D0\u7BDE\u0BEF\u0000\uD000\uDEF7\u7F7B\uA000\
\uBDEF\uFEF7\u0000\u0000\uBDF4\uDEF7\u03FB\uF300\uC07E\uBB7C\u883E\u5AFF\u39BF\uBF10\
\uECF6\u73C1\uBDEF\uDEF7\u02FB\uDF40\uEF7B\u2FBD\u0000\u4000\u7BDF\uFDEF\u8001\uF7BE\
\uFBDE\u0003\u0000\uF7D0\u7BDE\u0FEF\uF600\u3E9F\u0009\u9FF6\uE93E\uF7B9\u7BDE\u7DEF\
\uA001\uBDEF\uDEF7\u0017\u0000\uEFA0\uF7BD\u00FE\uDF40\uEF7B\u01FD\u0000\uE800\uEF7B\
\uF7BD\u4007\u4FFC\uE38A\u7E30\uCF06\u8C1E\u02FB\u0000\u0000\u0000\uA000\u8FEE\uF378\
\uC563\uE60D\uC64E\u017D\u0000\u0000\u0000\u0000\u3000\u87EF\u76F9\uE27D\uD6BF\u8E6F\
\uB5F8\u0F67\u7DC6\u0001\u0000\u0000\u0000\u0000\uC000\uD3FE\u0127\u4FFB\u349F\u0BEE\
\u0000\u0000\u0000\u0000\u0000\u8800\uEF7B\uBBBD\u8003\uEEB1\u7900\uDDEF\uFE33\u3001\
\u8EDE\u6006\u02C5\u4540\u47BE\uFBDE\u0862\uF000\u791E\u8BEF\u0021\u48A8\u1D00\u600B\
\u2B7C\uF21A\uBBDE\uF89F\u2007\uDF46\u4001\uB180\uC74F\uC173\uE75B\uDFEC\u7C0F\uFE6D\
\u83CF\u3F75\uDD60\uA787\uF000\u8006\u3F91\u6F00\u053D\u8DE0\u0037\uCDF2\u801F\u9E35\
\u7002\u05E2\u6F90\u00BE\u98D6\uC01B\u0289\u2F90\uD600\uF880\u049F\uE388\u1800\u033F\
\uB3C0\uC007\uF7DA\u26FC\uBFC4\uA887\u87F7\u6B2F\uFBDF\u6ACB\uE355\uA837\u331D\u5EFE\
\u3310\u152A\u97F0\u0053\u01D3\u2980\uE980\u02A4\uF2FE\u05EF\uA331\uC6AA\u506F\u98FF\
\u1BE1\uEFB5\u8DFD\u626A\u10F7\uFEF5\uEA00\u00FE\uCDE2\u600F\u0DC5\uB980\uB013\u3DF6\
\u09BF\uEFF1\uEA21\uE1FD\uDACB\uFEF7\u5AB2\uF8D5\u6A0D\u8CC7\u17BF\u8CC4\u054A\uE5FC\
\uC014\u0074\u0A60\u3A60\u80A9\uFCBF\u417B\uA8CC\uF1AA\uD41B\u663F\u46F8\u7BED\uA37F\
\uD89A\u443D\u3FBD\uDE60\u600F\u5DBE\u101F\uB5FF\u737E\uF880\u67B5\u600F\u7BED\u137E\
\uDFE2\uD443\uC3FB\uB597\uFDEF\uB565\uF1AA\uD41B\u198E\u2F7F\u1988\u0A95\uCBF8\u8029\
\u00E9\u14C0\u74C0\u0152\uF97F\u82F7\u5198\uE355\uA837\uCC7F\u8DF0\uF7DA\u46FE\uB135\
\u887B\u7F7A\u0400\uFB18\u3C74\uBC17\uCE75\uFDFE\uD7C0\uFFE6\uC03C\uF7DA\u26FC\uBFC4\
\uA887\u87F7\u6B2F\uFBDF\u6ACB\uE355\uA837\u331D\u5EFE\u3310\u152A\u97F0\u0053\u01D3\
\u2980\uE980\u02A4\uF2FE\u05EF\uA331\uC6AA\u506F\u98FF\u1BE1\uEFB5\u8DFD\u626A\u10F7\
\uFEF5\uFEC0\u27D3\u0001\u3FEC\u127D\u7DAC\u6FCF\uFC42\u887B\u7F7A\uB2F8\uBDF6\uACBF\
\u3556\u837E\u31DA\uEFE3\u3105\u52A3\u7F01\u0539\u1D30\u9800\u9802\u2A4E\u2FE0\u5EFF\
\u3310\u6AAA\u06FC\u8FF5\uBE19\uFB51\uDFDE\u26A8\u0F76\uEF51\uB30F\u7F21\uBFE1\u389A\
\uE3CF\u6B57\u7FC5\u8AFC\uF55F\uEF1E\uAF03\u267C\u91C4\u84CF\uBC6F\uBC7B\u5F93\u8CF5\
\u78FF\u7FCB\uE22D\u3CFF\u8C00\uDCC2\uECE7\u7F95\u77EC\u8C44\u55DE\u31BE\uF77E\u9FFE\
\u9F20\u17F8\uE563\u8F93\uD037\u3DB3\uA147\u37D6\u949D\u3B78\u8252\u139E\u1A52\u25F3\
\u31E5\u37DD\uE729\uDA71\u3E22\uCE4F\u975A\uCFF1\uBD27\uDF61\uC7BB\uB1F8\u1DF2\uF461\
\uFE0E\uEE77\uF773\uF102\u093F\uE388\u8C00\u019F\uECF0\uEF01\u601D\u17DC\u0000\u0000\
\u0000\u0000\u0000\u0580\u6C70\uE250\uB589\uAC42\u97D7\uCFAD\u1D3D\u9A6F\u27BF\uF3C4\
\u409B\u1FDD\uDE20\u00FC\u6E2B\uE600\u784E\u00EF\uBEE3\u0000\u0000\u0000\u0000\u0000\
\u2C00\u6380\u1283\uAC4F\u6215\uBEBD\u7D6C\uE9EE\uD378\u3DFC\u9E21\u04DF\u7EF3\uF980\
\u7D76\uFE20\uFD6B\u80E6\uB5F8\u0F67\u3BDE\uB8C0\u002F\u0000\u0000\u0000\u0000\u0000\
\uE00B\uA0D8\u13C4\u856B\uAF58\u5B2F\u7B9F\uDE3A\u7F34\u884F\u37E7\uFFB1\u49F4\uC000\
\uD3FE\u7927\u00EF\uBEE3\u0000\u0000\u0000\u0000\u0000\u2C00\u6380\u1283\uAC4F\u6215\
\uBEBD\u7D6C\uE9EE\uD378\u3DFC\u9E21\u04DF\uFDD4\uC401\u1F9B\u8AC0\u001B\u2773\u6DF4\
\u6FA0\u31BF\u6203\uC746\u0D1B\uCD1D\u95CA\u1AE4\u1D13\u3A3F\u9E1A\u999A\u154F\uFD68\
\u606A\u4F3C\u01CD\uD168\u6900\u0004\u0000\u0000\u8C00\u00BB\u0000\uDF40\u777B\u6007\
\u7FAC\uF7D0\u5DDE\u05E3\u2FC6\u801E\u0091\u8123\u8BF1\uEFA2\uBBBD\u0346\uFD63\uBE83\
\uEEF7\u000E\uF788\uBDDC\u7FC0\uD186\u350B\uFFC6\uF17E\uF6C3\uE7A6\u8409\u6789\uBC01\
\u02F1\uD662\u0000\u6620\uC035\uD6BB\uA00F\uE7BF\u7803\u079E\u43C6\u013D\uDDF5\u8BFB\
\uCF09\uD94C\uFC4D\u824F\u0E38\u7E30\uF006\u01EC\uFEF1\u79EF\uDE43\u6299\u3DFE\uEFA3\
\u353D\uFD6A\u7117\uF90C\uEFFE\uC8FD\u133D\uAC74\uBDFF\u4B1F\u9827\uD526\uEF5C\uBFBD\
\u7D41\uAE43\u0DBF\u7F75\uDE20\uC0FC\u1B8A\uEE60\u7884\uF7FF\u21BC\u4CEF\uFF31\uD19E\
\u9EF7\uB51A\u8BFE\u8638\uFF7C\u7EF7\u9EE4\u3A09\uFFD6\u8FDE\u13A5\u934C\uAE6A\uDEF7\
\uA0DF\u21BE\uDFD7\uBCC6\u981F\uD76F\uF887\uF5AF\u839B\uB5F8\u0F67\uC400\uBFFB\u0DE7\
\u6779\uF98A\u8CF7\uF7BE\uA8D4\u5FF5\u31C4\uFBE4\uF7BF\uF723\uD04C\uFEB1\u7EF7\u9D2C\
\u9A60\u7354\uF7BD\u06FE\u0DF5\uFEB9\u2036\uFB18\u3C74\uB797\uD9CE\u1FBF\u9B5F\uF3FF\
\u2000\uFFDE\u6F3D\u3BC8\uCC53\u67BF\uBDF4\u46A7\uFFAD\u8E22\uDF21\uBDFF\uB91F\u8267\
\uF58E\uF7BF\uE963\uD304\u9AA4\uBDEB\u37F7\u6FA8\uF5C8\uD9B7\uFA7F\u0024\u9FF6\u093E\
\uBC40\u7BFF\u90DE\uA677\u7F98\uE8CF\u4F7B\u5A8D\u45FF\u431C\uFFBE\u3F7B\uCF72\u1D04\
\u7FEB\uC7EF\u09D2\u49A6\uD735\uEF7B\u506F\u90DF\u6FEB\uBF13\u07FF\uFDDE\u09CF\uDE00\
\uCFFD\uF109\u7FFB\uEF10\u9EFF\uE437\u299D\uDFE6\uFA33\u53DE\uD6A3\u117F\u90C7\uFFEF\
\u8FDE\u33DC\uC741\uDFFA\uB1FB\u8274\u5269\uF5CD\uFBDE\uD41B\uE437\uDBFA\uBF3C\uF773\
\u7E34\uFCE7\uD606\u6157\uDFBC\u22BF\u5FEA\uF3FC\uEF77\u67CE\uEEFC\u69FD\u7FBE\u4A31\
\u3517\u3247\uB9F7\uFA77\uBDEE\u0977\u8EFD\u0000\uBE33\uEF7B\uEFB4\uF7BD\u91DE\u1EB1\
\u8050\u86A1\uCB58\u82BB\uC431\uFB93\uB69E\uB9F4\u1F77\u19BE\uEE72\u3FFE\uE721\u7E45\
\uEEE7\uDC85\u184F\uF1FD\u3CC6\u8F77\uA2A7\u1BC6\uCDC6\uFC7C\uFC60\u0067\u0008\u1F8F\
\u1AC4\uA351\uF8C3\u797A\u9D63\u6BBB\uDC96\u184F\u8BEF\u66FC\u09DE\uEAFC\uC01F\u01B8\
\u7DF8\u205F\u27FE\u3881\u600E\u0CFC\uB3C0\uF007\uEEFC\u12F9\u2BEB\uDCF1\u3D90\uBDF6\
\uAF9D\u339F\uE358\uF8F1\u7BDF\u48EF\u1001\uF711\u7BDE\u8DEF\u0519\uBE38\uF187\u6A3E\
\u77C5\u9EEF\u7F49\u5115\u02DF\u7F75\uBC40\u01F9\u6E2B\u7300\uF027\uEEFC\u12F9\u2BEB\
\uDCF1\u3D90\uBDF6\uAF9D\u339F\uE358\uF8F1\u7BDF\u48EF\u1001\uF711\u7BDE\u8DEF\u0519\
\uBE38\uF187\u6A3E\u77C5\u9EEF\u7F49\u5115\u82DF\u3F79\uBE60\u1F5D\u7FC4\uDFAD\u881C\
\u7B5F\u00F6\u9E00\u3DDF\u625F\u257D\u1B9E\uC7B2\uB7BE\uF5F3\u0673\u3C6B\uFF1E\uEF7B\
\u291D\u2200\uDEE2\uEF7B\u31BD\u00A3\uF7C7\uDE30\uAD47\uEEF8\u33DD\uAFE9\uEA22\uEC5B\
\u7D3F\u0012\u3FEC\u127D\u7800\uF77E\u897C\u95F5\u6E78\u1EC8\uDEFB\uD7CE\u19CF\uF1AC\
\uFC78\uBDEF\uA477\u8800\u7B88\uBDEF\uC6F7\u028C\uDF1C\u78C3\uB51F\uBBE2\uCF77\uBFA4\
\uA88A\u896F\u49FF\u1C71\uCFC6\uD9E0\u7583\u001F\u0000\u0000\uD400\u89FD\u3F37\u6E2B\
\u3B98\uF759\u0001\u0000\u0000\uE600\u30FD\uAEDF\uFC4F\uFAD7\u11CD\uF6BF\u01EC\uDD60\
\u0007\u0000\u0000\u0000\u6000\uE9FF\u8093\uA7FD\u024F\uF758\u0001\u0000\u0000\u0000\
\uE000\u0EFF\uC822\uF739\uEF37\u7F24\u7AFF\u77DE\u3D41\u07E5\uF7F6\uD1EB\u95F0\u1395\
\uDF73\u9BF3\uFA51\uA21D\uC8CA\uDF15\uFBBD\u1F71\u87BF\u8AF1\u0163\u58E7\uF250\u7BF1\
\u6F98\uD93C\uDDF1\uFAFB\uBF58\uA88A\u017F\u6304\u8E9F\uF2E7\u39D6\uF7FB\u6BE3\u7FF3\
\u001E\u9BDE\uEE7D\u9C2E\uC615\uC497\u9EEF\u1E27\u12DE\uC3AF\u0483\u0000\u0000\u0000\
\uFE20\u0127\u1C71\uF180\u0033\u3D9E\uE880\uFDFF\u2077\u2BFE\uFAE5\u3D07\u7FEA\u35FF\
\u959A\u94BF\u5CBF\u1446\u6278\uC070\u0B85\u230E\u501E\uAC31\uA5FC\u65FC\uA3D1\uF7FE\
\uE35F\uFC47\uCA57\u0FF5\uEEA0\u100F\u7E6F\u1580\u0037\u2773\uFD10\uFFBF\uC40E\uA57F\
\uFF5C\u47A0\uEFFD\u46BF\uF2B3\uF297\uCB97\u0288\u0C4F\uB80E\uC170\uC461\u2A03\u9586\
\u94BF\u2CBF\uD47A\uFEFF\uFC6B\uFF88\uB94A\u01FE\uFDE6\uF300\uFAED\uFC40\uFAD7\u01CD\
\u6BF1\u1ECF\u8000\uFFE8\u77FD\uFE20\uE52B\u07FA\uEA3D\uFF7F\u9A35\uBF95\uBF94\u465C\
\u7814\u7062\u85C0\u0E0B\u1E23\u3150\uFCAC\uFCA5\uD165\uFEA3\u5FF7\u47E3\u57FC\uF5CA\
\u000F\u6301\u8E9F\uC2E7\uE75B\uDFEC\uBE0F\uFF36\u01E7\u4400\uEFFF\u03BF\u5FF1\uD729\
\uE83F\uFF51\uAFFB\uACD1\uA5FC\uE5FC\uA232\u13C0\u0383\u5C2E\u1870\u80F1\u618A\u2FE5\
\u2FE5\u1E8B\uBFF5\u1AFF\uE23F\u52BF\u7FAE\uFF60\u93E9\u8000\uA7FD\u024F\uA200\uF7FF\
\u81DF\uAFF8\uEB94\uF41F\uFFA8\uD7FD\u5668\u52FE\u72FE\u5119\u89E0\u01C1\u2E17\u8C38\
\u4078\uB0C5\u97F2\u97F2\u8F45\uDFFA\u8D7F\uF11F\u295F\u3FD7\u3AC0\u7005\u4005\u079F\
\uB000\uBDEE\uDEF7\uEF7B\uC000\uF7BA\u7BDE\uBDEF\u0003\u4EB0\u5C01\u8001\u0938\uBFFD\
\u7FFF\uB125\uCA57\u82B1\uF51E\uAFBF\uB1FC\u97F2\u37BE\u88CB\uAE62\uC4F9\u88E0\uD76E\
\uE8E4\u5C35\u6231\u6AD5\u8F1E\uBF15\uF919\u13E5\u587A\uFFF7\u8FE4\u32F8\uDAE5\uDF81\
\uDFF9\u077F\u01EC\uFF10\u2093\u038E\u9F8C\u3C01\uE07B\u0377\u5F71\u0000\u0000\u0000\
\u2520\uE392\uE30D\uC4F2\uEE73\uF24E\uF12B\u407C\u1FDD\u3788\uB03F\u06E2\u3B98\uBBF1\
\uB881\u002F\u0000\u0000\u9000\uC912\u86F1\u7971\u39E2\u2777\u95F9\u3E78\uEF30\uE607\
\uF5DB\uFE21\uFD6B\u20E6\uED7E\u03D9\uDF80\uC40D\u017D\u0000\u0000\u8000\u4894\u378E\
\uCB8C\uCF13\u3BB9\uAFC9\uF3C4\uFF61\u93E9\uD800\uFA7F\u0024\u1BBF\uFB88\u0002\u0000\
\u0000\u2900\u1C91\u186F\u2797\u739E\u9277\u895F\u03E7\uFDD4\u7881\u03F3\u6E2B\uB980\
\u7D93\u7103\uCFF7\uF2C2\uFE9B\u9BF8\u1551\u153C\u96FE\u3F8A\uFE2B\uB1FE\uAA88\u27A8\
\uFD70\uC0F2\u4F13\u5814\uC02A\u05DF\uF1FE\u6780\u3C15\uD3F7\u3110\u84BE\u2EE7\u0000\
\u0000\uF580\uFFBF\u6F05\uECA7\uDF05\u6FBD\uC1BC\u30FB\u2C67\u76C0\u4B00\u9600\u6C00\
\uF787\uCE61\uF858\u7DEE\u0DE3\u4AE6\u2EF9\uFEDC\uFFDF\u0004\u0000\uFF60\u93E9\uD800\
\uFA7F\u8024\u037D\uF771\uC2CF\u9BF2\uF8FE\u519B\u3C15\uFE15\u8A96\u2B3F\uFEFE\u88B1\
\uA8AA\u7027\uF2FD\u13C0\u144F\u2A58\uDFC0\uFE05\u80F1\u1567\uF73C\u10D3\uBE31\u0004"
,null,null];

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */