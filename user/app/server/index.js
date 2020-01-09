var express = require('express');
app = express()
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	
	//res.responseType = 'arraybuffer' | 'blob' | 'json' | 'text'
    next();
  });
  
userModules = require('./userModule');
var jwt = require('jsonwebtoken');
app.get('/',(req,res)=>{
	//res.send('Ashok======');


})
app.post('/api/signup', function(req,res){
	 userModules.userTable(req,res);
})
app.post('/api/login', function(req, res){
		//console.log('request coming from to login page'+req.body);
		userModules.log(req,res)
	
})
app.post('/api/logout', function(req, res){
		userModules.logout(req,res)
	
})

  app.listen(3000, ()=>{
 console.log('Example app listenssing on port 3000!')
})
