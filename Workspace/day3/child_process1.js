const exec = require('child_process').exec;

exec('my.bat', (err, stdout,stderr)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(stdout)
});