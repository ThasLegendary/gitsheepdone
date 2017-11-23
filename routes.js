var index = require('./routes/index');
var home = require('./routes/home');

module.exports = function (app) {
    app.use('/', index);
    app.use('/home', home);
}