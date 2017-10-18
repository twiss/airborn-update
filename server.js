require('newrelic');

var express = require('express');
var app = express();

app.get(/^\/(v2\/)?current$/, function(req, res) {
	res.set('Content-Type', 'application/zip');
	res.sendfile(req.path.substr(1).replace('/', '-'));
});

app.get(/^\/(v2\/)?current-id$/, function(req, res) {
	res.set('Content-Type', 'text/plain');
	res.sendfile(req.path.substr(1).replace('/', '-'));
});

var server = app.listen(process.env.PORT || 8080, function() {
	console.log('Listening on port %d', server.address().port);
});