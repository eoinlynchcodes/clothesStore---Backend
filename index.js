const server = require('./api/server.js');

const PORT = 6000;

server.listen(PORT, () => {
    console.log(`Ths server is running on port ${PORT}. This is from index.js`);
});