var express  = require('express');
var path  = require('path');
var app      = express();                               // create our app w/ express

app.use(express.static(path.resolve(__dirname, "www")));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('listening to port ' + app.get('port'));
});
