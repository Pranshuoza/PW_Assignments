const os = require('os');

console.log('Operating System Information:');
console.log('OS Platform:', os.platform());
console.log('OS Release:', os.release());
console.log('OS Type:', os.type());
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());
console.log('CPU Details:', os.cpus());
