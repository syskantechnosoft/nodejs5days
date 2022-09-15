const crypto = require('crypto');

const secret= 'abdefg';
const hash= crypto.createHmac('sha256',secret).update("Using Crypto Module").digest('hex');

console.log(hash);