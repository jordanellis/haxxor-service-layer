const fetch = require("node-fetch");
const request = require('request');

const librarianService = {
    uri: 'http://localhost:',
    port: 9000
};

module.exports = function(app) {
    app.get('/accounts', (req, res) => {
        console.log('GET /accounts');

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');

        fetch(librarianService.uri + librarianService.port + 'accounts')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                res.send(myJson);
            });
    });

	app.get('/account/:accountNumber', (req, res) => {
        console.log('GET /account/:accountNumber');

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');

        const accountNumber = req.params.accountNumber;
        fetch(librarianService.uri + librarianService.port + 'account/' + accountNumber)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                res.send(myJson);
            });
 	});

	app.get('/forget/:accountNumber', (req, res) => {
        console.log('FORGET /account/:accountNumber');

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');

        const accountNumber = req.params.accountNumber;
        fetch(librarianService.uri + librarianService.port + 'account/' + accountNumber, {})
            .then(function(response) {
                console.log(response);
                return response;
            })
            .then(function(response) {
                res.send(response);
            });
	});
};