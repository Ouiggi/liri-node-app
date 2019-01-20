// Axios

var axios = require("axios");

var movieName = process.argv[2];

axios.get("http://www.omdbapi.com/?t=" + movieName + "&plot=short&apikey=trilogy").then(
  function(response) {
    console.log(response.data.Title);
    console.log(response.data.imdbRating);
    console.log(response.data.Year);
    console.log(response.data.Plot);

  }
);

// Spotify

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 74348fb0445a4099b9eb4701c2f932ae;
  secret: 60d9fae95470450fb1af0e37c9412c9e;
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
