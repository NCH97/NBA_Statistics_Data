const router = require('express').Router();
const { Player } = require('../models/playerModel');

router.get('/', async (req, res) => {
    const players = await Player.find()
    res.send(players)
})

module.exports = router;