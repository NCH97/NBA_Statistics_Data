const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://api.sportsdata.io/v3/nba/scores/json/Player/20000441?key=60ee33fd0bd1400992e2d6c4374b0dbc',
  headers: {
    
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// Parse the API data as JSON
const jsonData = JSON.parse(apiData);

// Write the JSON data to the file
fs.writeFile(JSON_FILE_PATH, jsonData, (error) => {
    if (error) {
      // Handle any errors that occurred while writing the file
      console.error(error);
      return;
    }

    console.log('Successfully saved the data to the file.');
  });