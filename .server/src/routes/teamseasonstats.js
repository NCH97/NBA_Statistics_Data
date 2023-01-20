const router = require('express').Router();
const { TeamSeasonStats } = require('../models/teamseasonstatsModel');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const axios = require("axios");

let actualteamstats;

const options = {
  method: 'GET',
  url: `https://api.sportsdata.io/v3/nba/scores/json/TeamSeasonStats/2023?key=${process.env.API_KEY}`,
};

axios.request(options).then(function (response) {
    actualteamstats = response.data
}).catch(function (error) {
	console.error(error);
});

router.get('/', async (req, res) => {
    const teamseasonstats = await TeamSeasonStats.find()
    res.send(teamseasonstats)
})

router.get('/newteamstats', async (req, res) => {
    await TeamSeasonStats.insertMany(
        actualteamstats
    ).then(function(){
        console.log("Data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });
})

router.delete('/deleteteamstats', async (req, res) => {

    await TeamSeasonStats.deleteMany({ Season : 2023}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });
})

module.exports = router;