const axios = require('axios');
const fs = require('fs');

const JSON_FILE_PATH = './datanba.json';

const API_URL = 'https://api.sportsdata.io/v3/nba/scores/json/teams?key=60ee33fd0bd1400992e2d6c4374b0dbc';
// Send a GET request to the API URL
axios.get(API_URL)
  .then((response) => {
    // Access the API data from the response
    const apiData = response.data;

    // Parse the API data as JSON
    const jsonData = JSON.parse(apiData);

    const validJson = jsonData.replaceAll(`'`, `"`);

    // Do something with the API data here
    //console.log(apiData);

    console.log(validJson);

  })
  .catch((error) => {
    // Handle any errors that occurred in the request
    console.error(error);
  });
