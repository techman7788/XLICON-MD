const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94756470464"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94756470464' 
global.devs = '94756470464';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pDM01NY3liMTVRK3REWWd0blk0aEpzWDlibmh2c3NXMG1wQUZwSlAyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3czdERMcklKUTBZR0dBTHZLVW5PZHhtSGdNTUhyb0hXY1pPMDY4YU93UT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQ2lvVlJuNytpOWU2NVFjbnBONnJCZE1MSTJnNGY4WG9nRlRhdTc5UVd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSem5NTU5QY3hKTzBZQktMaWFSQWthNjdOU0dkSzMzanhhNmc0cWgxSmdvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFCbUFORzJ5amVMTlZsZVdnN0x6YmZvc3dCQUxTalFEQ1o2dHhjUlRnR289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkM3TDloeFAvbE15V2F1VWFDVEdrTFZtSDJKRkx0K29PL3dYUTJVU2diUnM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoT3k3QmhYdDA3c05veVhKMnp5M3M5Tkw5VlFUNzM1azVabkJVTHZQbmJnOGpZNERpc1ZWNjRPQlhhbXFQNmpDUmx5V0pJYXVsOWpGUlQwZGhOelZDZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEyNiwiYWR2U2VjcmV0S2V5IjoiWDVkS2ZWUDlzUzBjaUtTZ1NjZ1NUdjRPd3FzWUhNZ3c2MnkwNXFPc1ZCST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMjFubDR4cFlSVFNaRkxtRkJnY1g2ZyIsInBob25lSWQiOiIwNTViYTg5YS03YmIxLTRlODUtODQ1ZS1kMjEwNTFiOGNhNzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlIwY09GQlMydTRNOW5mRmRBa3luOXo1emxVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSCtPNVEyYWlOS2tlNXZKc2MxemxHeE9jc1U9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbU52MFFRbnFIUHJBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIweUJIRG1OQ0V6enlkV05JUmtoYkNNekhIdXVDS3k1RVhjRVJXNVMxc1RjPSIsImFjY291bnRTaWduYXR1cmUiOiIrNkdUMk1IdjVDTUkzSmg0QXlKTStVSmVVNEV6RXZhV3VkM0JTdzlQN0h1OGRmM1NZRHlMN3NmL3F1UGxmL1JRVG1JOUlVSXNJU3lmUmNLZ3gvUXpDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaFRuZytPSjgvbFFMdjArTTJmQWJNWk03WWRvQ1hTcGFMVzQwd1BmVmdqQzNQRi9GS05yU3p3ZVZUNTJmVmdDTXRxRVkwS05HMTBBQ1NPU1ZLbGJhRFE9PSJ9LCJtZSI6eyJpZCI6Ijk0NzU2NDcwNDY0OjJAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTY0NzA0NjQ6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkTWdSdzVqUWhNODhuVmpTRVpJV3dqTXh4N3JnaXN1UkYzQkVWdVV0YkUzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA0MTg2MDE3fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@kaveesha',
  packname:  process.env.PACK_NAME || 'Kaveesha',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Kaveesha' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'I am alive now.' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
