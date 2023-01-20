const router = require('express').Router();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const { Standing } = require('../models/standingModel');

const axios = require("axios");

let actualstanding;


const options = {
  method: 'GET',
  url: `https://api.sportsdata.io/v3/nba/scores/json/Standings/2023?key=${process.env.API_KEY}`,
};

axios.request(options).then(function (response) {
    actualstanding = response.data
	//console.log(actualstandings);
}).catch(function (error) {
	console.error(error);
});

//const newstandings = require('./lastS2k23.json')

router.get('/', async (req, res) => {
    const standing = await Standing.find() 
    return res.send(standing)
})

router.get('/2023', async (req, res) => {
    const standing = await Standing.find({ 
        Season : 2023 
    })
    
    return res.send(standing)
})

router.get('/newstanding', async (req, res) => {
    await Standing.insertMany(
        actualstanding
    ).then(function(){
        console.log("Data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });
})

router.delete('/deletestanding', async (req, res) => {

    await Standing.deleteMany({ Season : 2022}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });
})


module.exports = router;