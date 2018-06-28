const accountRoutes = require('./account_routes');
module.exports = function(app) {
  accountRoutes(app);
};