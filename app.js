// Global requires
const http = require('http');

// Local requires
const routes = require('./routes');

// Spin up the server
const server = http.createServer(routes.handler);

// Begin listening on port 3000
server.listen(3000);