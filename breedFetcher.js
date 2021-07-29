const request = require('request');

const breed = process.argv[2];

// ?q=value => query parameter
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (response === undefined) {
    console.log(error); 
  } else {
    if (response.statusCode === 200 && !error) {
      const data = JSON.parse(body);
      if (!data[0]) {
        console.log("The requested breed was not found.")
    }
    console.log(data[0].description);
  }
  }
});
