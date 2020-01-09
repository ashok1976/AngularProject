  var mysql = require('mysql');
pool     =    mysql.createPool({
    connectionLimit :10,
    host     : 'localhost',
    user     : '',
    password : '',
    database : 'singup',
    debug    :  false
});    
module.exports = pool;