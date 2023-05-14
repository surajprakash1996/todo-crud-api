require('dotenv').config();
const http = require('http');
const { port } = require('./config/connection');
const app = require('./app');
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`App is running on ${port}`);
});
