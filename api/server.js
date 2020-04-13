const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('../authentication/cationRoutes');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/authentication', authRoutes);

server.get('/', (req, res) => {
    res.send('Yo.');
});

module.exports = server;