var express = require('express');  
var app = express();

var queue = [];

var port = process.env.PORT || 4002;

require('./router')(app, queue); 

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});


setInterval(function(){
	if(queue.length > 0){
		handleQueue(queue.shift());
	}
}, 3000);

function handleQueue(callbackFunction){

	callbackFunction();
}

module.exports = app;