const server = require('./api/server.js');

const PORT = 7000;

server.listen(PORT, () => {
    console.log(`Ths server is running on port ${PORT}. This is from index.js`);
});