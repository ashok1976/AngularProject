var mysql = require('mysql');
// Initialize pool
pool     =    mysql.createPool({
    connectionLimit :10,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'singup',
    debug    :  false
});  


	
module.exports.mytable = function(req,res){
var values = [
		req.body.firstname, 
		req.body.lastname ,
		req.body.email ,
		req.body.password,
		req.body.street,
		req.body.zip,
		req.body.city
		]

console.log(values)
   var sql = "INSERT INTO login_table (firstname,lastname,email,password,street,zip,city) values(?)"
        pool.getConnection(function(err,connection){
        if (err){
		console.log('Error connecting to Db');
		 throw err;
		
        }
		
		console.log('Connection established');
		  connection.query(sql,[values], function(err,result){
	
		 console.log(values)
		   res.json({response:result})
            if(err) {
				throw err;               
            }
			//res.json({response:result});
					
        });
        connection.on('err', function(err) {   
			console.log('console2')		
              throw err;
              return;
        })

})

}
/*
module.exports.selectData = function(req,res){
	var email = req.body.email;
	var password = req.body.password;
	console.log('ashok')
	pool.getConnection(function(err,connection){
    connection.query('SELECT * FROM dbtable WHERE email = ? AND password = ?',[email,password], function (error, results,fields) {
		console.log(results);
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       if(results.length >0) {	

				var sess;	 
				//sess = req.session;
				//sess.email = req.body.email;
				res.json({'status':1,'message':'You have successfully loggedIn'});
				//res.send(req.body)
				
			} else {
				res.json({'status':0,'message':'Incorrect Username and/or Password!'});
			}			
			res.end();
       //https://school.geekwall.in/p/rJOahBTP7/login-and-authentication-with-angular-6
      }
    });
			
				
		
		
			
	})
}

*/
