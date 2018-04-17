var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyparser = require('body-parser')
// var cors = require('cors');
const path = require('path');
// var indexFile = path.resolve(__dirname, '../index.html');
var urlEncodedParser = bodyparser.urlencoded({extended:false})

var app = express();
// app.use(cors());
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/home', function(req, res){
	res.render('home');
})
app.get('/', function(req, res){
	res.render('home');
})

app.get('*', function(req, res){
	res.render('notFound');
})

app.post('/home', urlEncodedParser, function(req, res){
	req.body
	console.log(req.body)
	res.render('next', {data:req.body})
})

app.get('/name/:name', function(req, res){
	var james = {age:20, job:"ninja"}
	res.render('home', {dat:james});
})


app.listen(4100);

console.log('server now running at port 4100');