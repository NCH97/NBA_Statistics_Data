const router = require('express').Router();
const { Team } = require('../models/teamModel');

router.get('/', async (req, res) => {
    const teams = await Team.find()
    res.send(teams)
})

module.exports = router;