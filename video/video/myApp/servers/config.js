var mysql = require('mysql');
// Initialize pool
pool     =    mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : '',
    password : '',
    database : 'test',
    debug    :  false
});    
module.exports = pool;