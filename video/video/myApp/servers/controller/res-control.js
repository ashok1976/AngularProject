exports.register = function(req, res){
	var sql = 'INSERT INTO tables set ?'
		pool.getConnection(function(err,connection){
		if (err) {
			console.log('error');
          connection.release();
          throw err;
        }
		connection.query(sql, req.body, function(err,rows){
            connection.release();
            if(!err) {
                res.json({data:'data submit successfully'})
            }
        });
        connection.on('error', function(err) {      
              throw err;
              return;
        });
	});
console.log(req.body.firstName);
};
module.exports.datainsert = function(req, res){
	var sql = 'SELECT * from tables'
		pool.getConnection(function(err,connection){
		if (err) {
		//console.log('sss');
          connection.release();
          throw err;
        }
		connection.query(sql, function(err,rows){
            connection.release();
		            if(!err) {
			   res.json({response:rows})
			
            }
        });
        connection.on('error', function(err) {      
              throw err;
              return;
        });
	});
	
};
/*
module.exports.con = function(req,res){
	var email= req.body.email;
	var sql = "SELECT email FROM tables";
	var errorMessage = "your email is not match";
	var successMessage = "Your are successfully login";
	
	var Users = [];
	pool.getConnection(function(err,connection){
			if(err){
			connection.release();
			throw err;
		}
		
connection.query(sql, function(error,results){
	if(error){
		}else{
			alert()
				//Users.push({mail: req.body.email					
					
				})
			 res.send('successfully registered')	
						
				
			
				
					var len = results.length;
					for(i=0; i<len; i++){
							if(results[i].email ==  email){
								res.send({'code': successMessage});
								console.log('====-===');
								break;
							}
					}
			}
	})
		connection.on('error',function(err){
			console.log('erro');
			   throw err;
			   return;
		})
	})
}*/
var pool = require('../config');


//https://stackblitz.com/edit/angular-email-verifiaction
