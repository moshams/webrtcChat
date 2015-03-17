var ip = require('ip');
var PeerServer = require('peer').PeerServer;
var port = process.env.OPENSHIFT_NODEJS_PORT||9000;
var ip = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var server = new PeerServer({port: port, ip:ip});

server.on('connection', function (id) {
  console.log('new connection with id ' + id);
});

server.on('disconnect', function (id) {
  console.log('disconnect with id ' + id);
});

console.log('peer server running on ' +
            ip.address() + ':' + port);
