const request = require('request');

const breedName = process.argv.slice(2);

const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


request(URL, (err, response, body) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(response && response.statusCode);
  const JSONBody = JSON.parse(body);
  try {
    console.log(JSONBody[0].description);
  } catch (err) {
    console.log(err.message);
    console.log("The breed of cat you entered was not found, please check spelling.");
  }
});
