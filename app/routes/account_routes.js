const fetch = require("node-fetch");
const request = require('request');

module.exports = function(app) {
    app.get('/accounts', (req, res) => {
        fetch('http://localhost:8080/accounts')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                res.send(myJson);
            });
    });

	app.get('/account/:accountNumber', (req, res) => {
        const accountNumber = req.params.accountNumber;
        fetch('http://localhost:8080/account/' + accountNumber)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                res.send(myJson);
            });
 	});

	app.post('/account', (req, res) => {
        fetch('http://localhost:8080/account', {
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
        const accountNumber = req.params.accountNumber;
        fetch('http://localhost:8080/account/' + accountNumber, {
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
        const accountNumber = req.params.accountNumber;
        fetch('http://localhost:8080/account/' + accountNumber, {
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