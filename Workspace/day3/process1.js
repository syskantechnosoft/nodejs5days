console.log(`Process Architecture : ${process.arch}`);
console.log(`Process PID : ${process.pid}`);
console.log(`Process Platform : ${process.platform}`);
console.log(`Process Version : ${process.version}`);
// console.log(`Process cpu Usage : ${process.cpuUsage}`);

console.log(`Current Directory : ${process.cwd()}`);
console.log(`Uptime : ${process.uptime()}`);
console.log(`HR Time : ${process.hrtime()}`);
console.log(`Memory Usage : ${JSON.stringify(process.memoryUsage())}`);