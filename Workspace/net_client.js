const net = require('net');

const client = net.connect({port:49694},()=>{
    console.log('connected to server');
    client.write(' Hello World!');
});

client.on('data',(data)=>{
    console.log(data.toString());
    client.end();
});

client.on('end',()=>{
    console.log('disconnected from server');
});