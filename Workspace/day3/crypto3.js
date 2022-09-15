const crypto= require('crypto');

const decipher = crypto.createDecipher('aes192','password');

var encrypted = '95050db5bd3ec56c73cf6f9057bc10e649510333288efc0f039a12f2bc423097';
var decrypted = decipher.update(encrypted,'hex','utf8');
decrypted+=decipher.final('utf8');

console.log(decrypted);