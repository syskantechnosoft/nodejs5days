const dns = require('dns');

dns.lookup('www.spring.io', (err, addresses, family) => {
    console.log('address:', addresses);
    console.log('family:', family);
});