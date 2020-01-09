var express = require('express');
var app = express();
var pool = require('./config');
var reqests = require('./controller/res-control');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true }));
app.use(function(req, res, next) {
 
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

// Returns content-type = text/plain
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, {'Content-Type': 'text/plain' });
  res.end('ok');
});


app.get('/', function(req,res){
res.cookie('name','nameCookie');
 res.send({"authenticated" : "ok" });
 console.log('ok')
 res.send("http://localhost:4200/Form");
 
});




app.post('/api/reg', function(req,res){
	reqests.register(req,res);
	console.log('reg')

})

app.get('/api/user', function(req,res){
	reqests.datainsert(req,res);
})

app.post('/api/signup', function (req,res){
		reqests.con(req,res);
    
 
  
})

var server=app.listen(8082,function(){}


);
