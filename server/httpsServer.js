const fs = require('fs');

// letsencrypt for HTTPS Support
const privateKey = fs.readFileSync('/etc/letsencrypt/live/timothyb.me/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/timothyb.me/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/timothyb.me/chain.pem', 'utf8');

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};

const server = require('https').createServer(credentials, app);

module.exports = {server}

