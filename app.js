var http = require('http');
var fs = require('fs');
var express = require('express');
// var cors = require('cors');
const path = require('path');
// var indexFile = path.resolve(__dirname, '../index.html');

var app = express();
// app.use(cors());
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
// app.get('/', function(req, res){
// 	res.sendFile(indexFile);
// });

app.get('/home', function(req, res){
	res.render('home');
})
app.get('/', function(req, res){
	res.render('home');
})

app.get('/name/:name', function(req, res){
	var james = {age:20, job:"ninja"}
	res.render('home', {dat:james});
})

app.listen(4100);

console.log('server now running at port 4100');