const router = require('express').Router();
const { PlayerSeasonStats } = require('../models/playerseasonstatsModel');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const axios = require("axios");

let actualplayerstats;

const options = {
  method: 'GET',
  url: `https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2023?key=${process.env.API_KEY}`,
};

axios.request(options).then(function (response) {
    actualplayerstats = response.data
}).catch(function (error) {
	console.error(error);
});

router.get('/', async (req, res) => {
    const playerseasonstats = await PlayerSeasonStats.find()
    res.send(playerseasonstats)
})


router.get('/newplayerstats', async (req, res) => {
    await PlayerSeasonStats.insertMany(
        actualplayerstats
    ).then(function(){
        console.log("Data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });
})

router.delete('/deleteplayerstats', async (req, res) => {

    await PlayerSeasonStats.deleteMany({ Season : 2022}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });
})



module.exports = router;