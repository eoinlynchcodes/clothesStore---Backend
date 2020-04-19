require('dotenv').config()

const server = require('./api/server.js');

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Ths server is running on port ${PORT}. This is from index.js`);
});