var mysql = require('mysql');  
var jwt = require('jsonwebtoken');
pool = mysql.createPool({
    connectionLimit :1,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'user_id',
    debug    :  false
});  

module.exports.userTable = function(req,res){
	values ={
		name: req.body.name,
		userid: req.body.userid,
		email: req.body.email,
		role: req.body.role,
		password: req.body.password
	}
	var sql = "INSERT INTO user_info SET ?";
    pool.getConnection(function(err,connection){
	    if (err){
			connection.release();// connection release form block;
			console.log('Error connecting to Db');
			throw err;
		}	
		connection.query('SELECT * FROM user_info  where email = ?', [req.body.email], function(err,result){
				if(result.length > 0){
					connection.release();
					console.log('Email is already exists');
					res.send({message:'email is already exists'});
				}else{
				  connection.query(sql,[values], function(err,result){
						if(err){
							throw err;               
						}
						res.send({success:'successfull data insert' });
						connection.release();
					 });
				}
		})		
		connection.on('err', function(err) {   
			throw err;
			return;
		})
	})
}
module.exports.log = function(req,res){
	var email = req.body.email;
	var pass = req.body.password;
	var privateKey = 'loginsign';
	pool.getConnection(function(err,connection){
	connection.query('SELECT * FROM user_info  WHERE email = ?', [email], function(error,results,field){
				if(error){ 
					res.send({code:'400', failer:'error ocurred'})
					connection.release();
					throw error
				}else{
												
					if(results.length > 0){
						var token = jwt.sign({email,pass}, privateKey, { /*expiresIn: 60 * 60*/ });
						
						console.log('success fully'+"::"+results[0].password)
						if(results[0].password == pass){
							console.log('success fully'+pass +"::"+results[0].password)
							res.send({message:'login sucessfull','token':token, status:1, flag:true});

							connection.release();
						}
					
					}
					
				};
			
		})	

		
	})
}
module.exports.logout = function(req,res){
	
	pool.getConnection(function(err,connection){
		if(!err){
			
			res.send({message:'you have successfuly logout?'});
			connection.release()
		}else{
		
			res.send({message:'logout fail'});
			connection.release()
		}
		
	})
	
}
