const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

global.apikey = {'https://h-e-r-m-i-t-web.herokuapp.com': 'free'}
global.apiUrl = 'https://h-e-r-m-i-t-web.herokuapp.com/'

const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG)
module.exports = {
	VERSION: 'v4.0.1', 
    SESSION_ID: process.env.SESSION_ID || '',
    MODE: process.env.MODE || 'public',
    HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
    SEND_READ: process.env.READ_COMMAND || false, 
    MSG_LOG: convertToBool(process.env.LOG_MSG) || false, 
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE) || true,
    BOT_NAME: process.env.BOT_NAME || '-vfO🌟',
    BOT_INFO: process.env.BOT_INFO || '-vfO🌟;🌟{𝗠𝗥.𝗦𝗽𝗧}°✅;918891190971;https://i.imgur.com/DddS5es.jpeg',
    AUDIO_DATA: process.env.AUDIO_DATA === undefined ? '-vfO🌟;🌟{𝗠𝗥.𝗦𝗽𝗧}°✅;https://i.imgur.com/DddS5es.jpeg' : process.env.AUDIO_DATA,
    STICKER_DATA: process.env.STICKER_DATA === undefined ? '-vfO🌟;🌟{𝗠𝗥.𝗦𝗽𝗧}°✅' : process.env.AUDIO_DATA,
    ERROR_MESSAGE: convertToBool(process.env.ERROR_MESSAGE) || true, 
    WARN: process.env.WARN || '4',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
       },
       DATABASE_URL: DATABASE_URL,
       DATABASE:
       DATABASE_URL === './database.db' ? new Sequelize({dialect: 'sqlite', storage: DATABASE_URL, logging: false,}) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: {native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false,}),
       RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
       BRAIN_ID: process.env.BRAIN_ID === undefined ? false : process.env.BRAIN_ID,
       ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE) || true,
       SUDO: process.env.SUDO || '918891190971,0',
       DEBUG: DEBUG
};


