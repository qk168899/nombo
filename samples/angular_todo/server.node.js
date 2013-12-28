var argv = require('optimist').argv;
var port = argv._[0] ? argv._[0] : 8000;
var release = argv.hasOwnProperty('r');
var Master = require('nombo').Master;

var options = {
	port: port,
	release: release,
	sessionTimeout: 5000,
	title: 'Todo App',
	angular: true
};

var nombo = new Master(options);
nombo.start();