var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;




var express = require('express');
var router = express.Router();
var request = require('request');
var client_id = '5d0b4dc198d944c6a8a50c9fc6eac622'; // Your client id
var client_secret = 'b47489765d6545fa852a6656914b0085'; // Your client secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

/* GET home page. */

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/12588209/playlists?limit=5',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      var t = body;
      console.log(t.items[0].uri)

      router.get('/', function(req, res, next) {
        res.render('index', { 
          title: 'Spotify', 
          spotifyData: {albumArt: body.items[0].images[0].url, href: t.items[0].uri, name: body.items[0].name, },
          spotifyData2: {albumArt: body.items[1].images[0].url, href: body.items[1].external_urls.spotify, name: body.items[1].name, },
          spotifyData3: {albumArt: body.items[2].images[0].url, href: body.items[2].external_urls.spotify, name: body.items[2].name, },
          spotifyData4: {albumArt: body.items[3].images[0].url, href: body.items[3].external_urls.spotify, name: body.items[3].name, },
          spotifyData5: {albumArt: body.items[4].images[0].url, href: body.items[4].external_urls.spotify, name: body.items[4].name, },
        });
      });
    });
  }
});

module.exports = router;