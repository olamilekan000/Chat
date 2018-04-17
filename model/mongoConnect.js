const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Chat');

mongoose.connection.once('open', function(){
	console.log('connection now open');
}).on('error', function(error){
	console.log('encountered error : value,'+ error);
})