var express = require('express'),
    routes  = require('./routes'),
    http = require('http'),
    https = require('https'),
    path    = require('path'),
    bodyParser = require('body-parser'),
    request = require('request');


var app = module.exports = express();

app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/public');
app.set('view engine', 'html');



// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/stylesheet",  express.static(__dirname + '/public/stylesheet'));
// app.use("/stylesheet",  express.static(__dirname + '/public/stylesheets/partials'));
app.use("/js", express.static(__dirname + '/public/js'));
app.use("/assets", express.static(__dirname + '/public/assets'));
// app.use("/images",  express.static(__dirname + '/public/images'));






/********
 * Routes
 ********/

// serve index and view partials
// app.get('/', routes.index);


app.get('/data', function(req, res) {


  // res.json(Data);
  var userId = '20694160';
  var instaAccessToken = "20694160.475cd8b.f772e39e2831440782498dd0284da5b7"; //staple access token
  var endpoint = 'https://api.instagram.com/v1/users/'+userId+'/media/recent?access_token='+instaAccessToken;
  var instaTotal, thisData;




  request(endpoint, function (error, response, body) {

    // var jsonp = JSON.parse(body);

    if (!error && response.statusCode == 200) {
      // console.log(response) // Show the HTML for the Google homepage.
      // JSON.stringify(body);
      var info = JSON.parse(response.body)
    //  // do more stuff
    //  console.log(info);
       res.jsonp(info);


    }
  })



});



app.get('partials/:name', routes.partials);


// redirect all others to the index (HTML5 history)
app.get('*', routes.index);










app.listen(7000);
