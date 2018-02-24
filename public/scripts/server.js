var http = require('http');
var fs = require('fs');
var express = require('express');
var cors = require('cors');
const path = require('path');
var indexFile = path.resolve(__dirname, '../index.html');

var app = express();
app.use(cors());
app.set('view engine', 'ejs');
// app.use(express.static('../styles'));
app.use(express.static(path.join(__dirname, '../styles')));

app.get('/', function(req, res){
	res.sendFile(indexFile);
});

app.get('/home', function(req, res){
	res.render('home');
})
app.listen(4100);

console.log('server now running at port 4100');