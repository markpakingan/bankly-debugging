/** Database setup for jobly. */


// Added for testing
const { TextEncoder, TextDecoder } = require('util');


const { Client } = require('pg');
const { DB_URI } = require('./config');

const client = new Client(DB_URI);

client.connect();

module.exports = client;
