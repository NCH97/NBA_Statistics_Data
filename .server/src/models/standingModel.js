const mongoose = require('mongoose');

const standingSchema = new mongoose.Schema(
    {
            "Season": {
              "type": "Number"
            },
            "SeasonType": {
              "type": "Number"
            },
            "TeamID": {
              "type": "Number"
            },
            "Key": {
              "type": "String"
            },
            "City": {
              "type": "String"
            },
            "Name": {
              "type": "String"
            },
            "Conference": {
              "type": "String"
            },
            "Division": {
              "type": "String"
            },
            "Wins": {
              "type": "Number"
            },
            "Losses": {
              "type": "Number"
            },
            "Percentage": {
              "type": "Number"
            },
            "ConferenceWins": {
              "type": "Number"
            },
            "ConferenceLosses": {
              "type": "Number"
            },
            "DivisionWins": {
              "type": "Number"
            },
            "DivisionLosses": {
              "type": "Number"
            },
            "HomeWins": {
              "type": "Number"
            },
            "HomeLosses": {
              "type": "Number"
            },
            "AwayWins": {
              "type": "Number"
            },
            "AwayLosses": {
              "type": "Number"
            },
            "LastTenWins": {
              "type": "Number"
            },
            "LastTenLosses": {
              "type": "Number"
            },
            "PointsPerGameFor": {
              "type": "Number"
            },
            "PointsPerGameAgainst": {
              "type": "Number"
            },
            "Streak": {
              "type": "Number"
            },
            "GamesBack": {
              "type": "Number"
            },
            "StreakDescription": {
              "type": "String"
            },
            "GlobalTeamID": {
              "type": "Number"
            },
            "ConferenceRank": {
              "type": "Number"
            },
            "DivisionRank": {
              "type": "Number"
            }

    }
)

const Standing = mongoose.model('standing', standingSchema);

module.exports = {Standing: Standing};