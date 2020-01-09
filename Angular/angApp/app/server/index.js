express = require('express')
app = express();
myModule = require('./module');
bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	
	//res.responseType = 'arraybuffer' | 'blob' | 'json' | 'text'
    next();
  });

session = require('express-session'); 
app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge:60000 }
}))



app.get('/',(req,res)=>{
	res.send('Ashok======');


})



app.post('/api/signup', function(req,res){
	myModule.mytable(req,res);

	
	
})


app.post('/login', function(req,res){

	//myModule.selectData(req,res)
	//module.exports.selectData = function(req,res){
	var email = req.body.email;
	var password = req.body.password;
	var privateKey = 'loginsign';
		
	pool.getConnection(function(err,connection){
		console.log('=============')
    connection.query('SELECT * FROM login_table WHERE email = ? AND password = ?',[email,password], function (error, results,fields) {
	
		if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       if(results.length >0) {	
	 //  sessionData = req.session;
	  // sessionData.email = email;
	   //console.log( sessionData.email+"----------::--------")
	   
	   var token = jwt.sign({email,password}, privateKey, { /*expiresIn: 60 * 60*/ });
	   connection.release();
	    res.json({'status':1,'message':'You have successfully loggedIn','token':token, 'type':false});
				
				
				//res.send(req.body)
				
			} else {
				res.json({'status':0,'message':'Incorrect Username and/or Password!','type':true});
			}			
		
       //https://school.geekwall.in/p/rJOahBTP7/login-and-authentication-with-angular-6
      }
    });
	
	

		
		
			
	})
//}
	
})
app.get('/logout',(req,res)=>{
	 sessionData = req.session;	
     sessionData.destroy(function(err) {
        if(err){
            msg = 'Error destroying session';
            res.json({'logoutStatus':0, 'message':msg});
        }else{
            msg = 'Session destroy successfully';
            res.json({'logoutStatus':1, 'message':msg});
			res.json(msg);
        }
    });
})	

app.listen(3000, ()=>{
 console.log('Example app listenssing on port 3000!')
})

