var mysql = require('mysql');
pool     =    mysql.createPool({
    connectionLimit :10,
    host     : 'localhost',
    user     : '',
    password : '',
    database : 'user_id',
    debug    :  false
});    
module.exports = pool;