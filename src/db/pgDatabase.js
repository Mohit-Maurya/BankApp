const { Client } = require('pg')
const client = new Client({
    host: 'localhost',
    user: 'bankdb_admin',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
})
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});