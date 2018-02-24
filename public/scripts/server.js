var http = require('http');
var fs = require('fs');
var express = require('express');
var cors = require('cors');
const path = require('path');
var indexFile = path.resolve(__dirname, '../index.html');

var app = express();
app.use(cors());

app.get('/', function(req, res){
	res.sendFile(indexFile);
}).listen(4100);
console.log('server now running at port 4100');