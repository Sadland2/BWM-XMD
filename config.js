const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXZOiOBT9L3nFHgER1KquWr5E2y8UbIWteQgQIA0CkoBCl/99C+2u6Yed2V6eUgk59+Scc+87yHJM0AI1YPIOihLXkKJuSZsCgQlQqjBEJeiBAFIIJoBd2EgZjeRSuJ4Qj7WI1oFdHcjcc4tGtf3EESHXb8/Vq/AMbj1QVF6K/T8AooM87UPFooczt1maM28fYr1N5n2tf9rFjr3YvlYbR9y7r+QZ3DpEiEucRXoRoxMqYbpAjQlx+T3686XrKYRFrFctp6qjs9bWeGHikH07NUskFv2waWMVrbJk9T36RzpfStw2DA8r61BtX1fRzLRTbJFrOTLVdsi53qKudbo6+A/6BEcZCuYByiimzbd1X605Q1XX0BWquN8wBXnhTeToXJ5T1Q9Ps7qJPYabTtmEfI84v4gGtjHEu6aJE+u4bHUqXeigPavj9ZUx5f1cC4+5t1/z+lfiZvmZleT/6K7qrJ70o5pjpet1WkmVfKGM5AyZQ6450o47jtN2wQ+XWGe/qbvCLAckTrhqyY5W7U6VNZjqyj6aTgN+vIt38/MmlZR6Z8u/6ENalX9iudCOWtRq52O0cOItbhXbOsu1MXS4sySwZir7iDu4DjUO6VAXl5ZiH1u3nY2VWkHjvsNMSzqTTPWajDEH6dydu+ZB3j7fX5SgZh6ACXfrgRJFmNASUpxn9z2e7wEY1BbyS0Tv8oLtXOQkeX1eCUbqM0cXaZor8peDU6vRMHOWp8NZsFOkVmX0DHqgKHMfEYKCGSY0L5sVIgRGiIDJ3z97IENX+jCuKzfgeiDEJaH7rCrSHAafrn4eQt/Pq4xaTear3QKVYML+2kaU4iwinY5VBks/xjVSY0gJmIQwJejWAwGqsY86PHApsY2FmWxdeE5qpva5ONe13FGO8+zxCwqQJ/pD/glCNH4SRtLgCUqh9MQJAuch5IWiFIIewB890935rYXno4fnxgZjyBgsnZ0qS7iOpP3UKvO7DQ/tUYkCMKFlhXrAg35SFXaeoOwPuIbyylhI2GsLi1XQRlpDoUGaJTJH+Qvuw1Mwef81p9Q86PDM0YA7aiMT9MDpHkHcvXzIjgf8mB1y0mAyEP4iPy6djrAofmSIdrAfmncXAkQhTknXTOtynrqjmb5qRUbKDUPWI1mNOlE/PfoM+yNMo7V2Wajr1T5fbRptt/Vdw+g7yw311Tf/RCpu6xFZuSrrAXn+FxAwAWXcvCWnI3TV8f4kFIy0gC9mxMqKvhyJ5lCkqq0eeMMqc9yi5EXJ9hzPvrIVnK5Yh84tP8JJpqq5/7rm2zfHlhOLKJfnrtojK1+LeaFZajnDiMHQSo/hsM05vxXXe2+F9K0Y09bd+SnPDrJksOZqMWyuotaolrYZRgffVpT+diTj1F3ECnOe7gxiQDJU5Ucb3sdA+jF+8b1B3j+SFWJ0n2YZ7Bz6D2++Zpy99b5AfIzH3+RICbXtSI3e7OlC00jE7mfGLq55tS2Pcj54KZd0b0iy7G/tQAK3288eKFJIw7w8gQmAWVDmOAA9kEJC5V9tauMTIhSeCjDhpIHASyNhNO6BUyMXhUUh/exuIHffVHbA7R806Rqt+QcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

