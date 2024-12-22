const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22565651420";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_21_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDUyLFxuICAgICAgICA2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyLFxuICAgICAgICA2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNixcbiAgICAgICAgODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg0LFxuICAgICAgICA2MCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk2LFxuICAgICAgICA0MixcbiAgICAgICAgMjksXG4gICAgICAgIDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDc3LFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxODksXG4gICAgICAgIDE1LFxuICAgICAgICA3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDM5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDk3LFxuICAgICAgICA4OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDY4LFxuICAgICAgICA4MixcbiAgICAgICAgNixcbiAgICAgICAgMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaMUZCV1djeGFLV3diSThGK2xJclp2RERpME5qU3VJSUtkTS9zSGRWZHN3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IHRydWVcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhaSUplbXdfUzBPS2tSVjJLbXVLVkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmIwZWY3ZDMtNzNiOC00YTA5LTlkZTEtZDNhNzI5OTU3OWU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDI1MyxcbiAgICAgIDQxLFxuICAgICAgMjI2LFxuICAgICAgNjYsXG4gICAgICAyMTksXG4gICAgICAzMyxcbiAgICAgIDEzMixcbiAgICAgIDY4LFxuICAgICAgMjA1LFxuICAgICAgMzEsXG4gICAgICA5LFxuICAgICAgMjUxLFxuICAgICAgMTU3LFxuICAgICAgMTUyLFxuICAgICAgMjA0LFxuICAgICAgMjAsXG4gICAgICAxNTIsXG4gICAgICA4MCxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICA1MixcbiAgICAgIDEwMCxcbiAgICAgIDQwLFxuICAgICAgMjE1LFxuICAgICAgMCxcbiAgICAgIDEwNSxcbiAgICAgIDE1LFxuICAgICAgNyxcbiAgICAgIDg3LFxuICAgICAgNjQsXG4gICAgICAxMjEsXG4gICAgICA2NixcbiAgICAgIDY4LFxuICAgICAgMTU2LFxuICAgICAgMTE3LFxuICAgICAgMjQwLFxuICAgICAgMTYyLFxuICAgICAgMTc3LFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVg3MkpZQ0VLUE5vYnNHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWL1J3THYwdVdJSmFEeW1mcSs0SWFLanVZcWF1YjBaUlJxN2pOVUdNTVVjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm44L3JiL0JIVDROWUVWQUtLQUlocEtoZWxtK1lzODV6SnBBTnFYM2x6T2w1dFY3TjFhU09PejRic21hTFhvZStvQTVVSXpEYWJMc2hzM2U1ZFEvRGhnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlp1L2xVLzZVWEpoWXNqaU9UN2pZVGdmK2ZrL1VTWksxR21LUER6WjlqNSs0Z3Z0RjQwNmRWWE1mZ1FGamxQM2NNRnB4aFVlRWZWQld2QlZqMzVIWWdRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1NjU2NTE0MjA6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJbzL/Nh1PMv82HzLfMv82HZMy/zYd+zL/Nh0HMv82HYcy/zYdyzL/Nh2/Mv82HzLjMv82Hbs2HzL9dIMy/zYdcIixcbiAgICBcImxpZFwiOiBcIjYyNjUwOTIyODY4ODE5Ojk0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NjU2NTE0MjA6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0ODk1MjcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2NBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLYisuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2Vi85Zjl6MDNwbWdGK2loNkNzdWpoMXptU3pVVkxNUi8yVXVpNlhMbkQ4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU4NDQ2NTg2MSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzM0ODg5MDU0NDI3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2IxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL1hRWVB1ZFdkMkRFUEIwOEM0aE9YdWhKSXVJaUpYM2FweXVtMkhZQU80ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODQ0NjU4NjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDUxMjI0NTUyOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtiMy5qc29uIjogIntcImtleURhdGFcIjpcInZNRlVZSzlpbmFhLzdORjR1NnVCM3VVTmpiS0gwZ2VETUxKbE0vbXVrWFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTg0NDY1ODYxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMiwwLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDg4NTUzMjg2MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtiNC5qc29uIjogIntcImtleURhdGFcIjpcInJJd2FDejZEaDZ4NmtGeDJaaW5EaHRJVmRLMGpxemVZOXN1N2dtK0Z6eUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTg0NDY1ODYxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ4ODU1MzQ1NjhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLYjYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlTERlT3daN0lvdW9udEtBSnZoamltd0RVZCt0MWgxUWVHS2pFd01SSzRnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU4NDQ2NTg2MSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMywyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ4ODg3NzI2NzZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLYjcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyYnhUekh6WG9mc3pOdlRoRXIwOGh6ZXpVRW5tYStBc1dYbkNQZ09DcHBzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU4NDQ2NTg2MSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzIsMF19LFwidGltZXN0YW1wXCI6XCIxNzM0ODg4Nzc1OTUxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2I5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibVBiWmF5VDhGeFlDT1dhWHdvdmZzZ2NNc2h5alBINTdieGcrMXhoV2dRMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODQ0NjU4NjEsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNF19LFwidGltZXN0YW1wXCI6XCIxNzM0ODg5MDUyODUzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2NBLmpzb24iOiAie1wia2V5RGF0YVwiOlwidFhIUzFKeU91TGdLOVhHcjMyM3ZrWkxwb0M2SFluR3prNy9CeWlGOEdORT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODQ0NjU4NjEsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlsyLDUsMF19LFwidGltZXN0YW1wXCI6XCIxNzM0ODg5Mzc3MjUzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2NCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM3lJMzlXMTJwT1YzSnBCUzRiUHpjWDlYVzVRSm1Bd1FRd3RTaWk1aGJROD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODQ0NjU4NjEsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlsyLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDg4OTM3ODkxNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
