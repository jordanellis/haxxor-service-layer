const fetch = require("node-fetch");
const request = require('request');

const librarianService = {
    uri: 'http://localhost:',
    port: 9000
};

module.exports = function(app) {
    app.get('/accounts', (req, res) => {
        console.log('GET /accounts');

        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

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

        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        const accountNumber = req.params.accountNumber;
        fetch(librarianService.uri + librarianService.port + 'account/' + accountNumber)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                res.send(myJson);
            });
 	});

	app.post('/account', (req, res) => {
        console.log('POST /account');

        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        fetch(librarianService.uri + librarianService.port + 'account', {
          method: 'POST',
          body: JSON.stringify({
            accountNumber: req.body.accountNumber,
            name: req.body.name,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            balance: req.body.balance }),
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                res.send(myJson);
            });
	});

	app.put('/account/:accountNumber', (req, res) => {
        console.log('PUT /account/:accountNumber');

        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        const accountNumber = req.params.accountNumber;
        fetch(librarianService.uri + librarianService.port + 'account/' + accountNumber, {
          method: 'PUT',
          body: JSON.stringify({
            accountNumber: req.body.accountNumber,
            name: req.body.name,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            balance: req.body.balance }),
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                res.send(myJson);
            });
  	});

	app.delete('/account/:accountNumber', (req, res) => {
        console.log('DELETE /account/:accountNumber');

        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        const accountNumber = req.params.accountNumber;
        fetch(librarianService.uri + librarianService.port + 'account/' + accountNumber, {
          method: 'DELETE'
        })
            .then(function(response) {
                console.log(response);
                return response;
            })
            .then(function(response) {
                res.send(response);
            });
	});
};