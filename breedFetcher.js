const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return callback(error);
    } else {
      const data = JSON.parse(body);
      if (data.length < 1) {
        return callback('The requested breed was not found.');
      } else {
        return callback(data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };;
  