const crypto = require('crypto');

const cipher= crypto.createCipher('aes192','password');

var encrypted = cipher.update("Our Crypto Module",'utf8','hex');

encrypted+=cipher.final('hex');

console.log(encrypted);