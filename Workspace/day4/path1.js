var path = require("path");

//Normalization
console.log('Normalization ' + path.normalize("/sstest/welcome//node/myfolder/system/ts..."));

//join
console.log ( "combined path :" + path.join('/WELCOME','second','testfolder/my','sub/folder','...'));


//resolve
console.log('resolve: '+ path.resolve('path1.js'));

//Extension
console.log('extension name :' + path.extname('path1.js'));

