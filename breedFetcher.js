const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err) return callback(err);
  
    const JSONBody = JSON.parse(body);

    try {
      const description = JSONBody[0].description;
      return callback(null, description);
    } catch (err) {
      return callback(err.message);
    }
  

  });
};

module.exports = { fetchBreedDescription };