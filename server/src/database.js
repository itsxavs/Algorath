const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'golazos98',
    database: 'algorath',
    port: '5432'
});

module.exports = pool