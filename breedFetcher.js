const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName,
    ///what do do with response from website
    function (error, response, body) {
      if (error) {
        callback(error, null);
      } else if (body === '[]') {
        callback("Breed not found", null);
      } else {
        callback(null, JSON.parse(body)[0].description);
      }
    });
};

module.exports = { fetchBreedDescription };