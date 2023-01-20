const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema(
    {
        "PlayerID": {
          "type": "Number"
        },
        "SportsDataID": {
          "type": "String"
        },
        "Status": {
          "type": "String"
        },
        "TeamID": {
          "type": "Number"
        },
        "Team": {
          "type": "String"
        },
        "Jersey": {
          "type": "Number"
        },
        "PositionCategory": {
          "type": "String"
        },
        "Position": {
          "type": "String"
        },
        "FirstName": {
          "type": "String"
        },
        "LastName": {
          "type": "String"
        },
        "Height": {
          "type": "Number"
        },
        "Weight": {
          "type": "Number"
        },
        "BirthDate": {
          "type": "Date"
        },
        "BirthCity": {
          "type": "String"
        },
        "BirthState": {
          "type": "String"
        },
        "BirthCountry": {
          "type": "String"
        },
        "HighSchool": {
          "type": "Mixed"
        },
        "College": {
          "type": "String"
        },
        "Salary": {
          "type": "Number"
        },
        "PhotoUrl": {
          "type": "String"
        },
        "Experience": {
          "type": "Number"
        },
        "SportRadarPlayerID": {
          "type": "String"
        },
        "RotoworldPlayerID": {
          "type": "Number"
        },
        "RotoWirePlayerID": {
          "type": "Number"
        },
        "FantasyAlarmPlayerID": {
          "type": "Number"
        },
        "StatsPlayerID": {
          "type": "Number"
        },
        "SportsDirectPlayerID": {
          "type": "Number"
        },
        "XmlTeamPlayerID": {
          "type": "Number"
        },
        "InjuryStatus": {
          "type": "String"
        },
        "InjuryBodyPart": {
          "type": "String"
        },
        "InjuryStartDate": {
          "type": "Date"
        },
        "InjuryNotes": {
          "type": "String"
        },
        "FanDuelPlayerID": {
          "type": "Number"
        },
        "DraftKingsPlayerID": {
          "type": "Number"
        },
        "YahooPlayerID": {
          "type": "Number"
        },
        "FanDuelName": {
          "type": "String"
        },
        "DraftKingsName": {
          "type": "String"
        },
        "YahooName": {
          "type": "String"
        },
        "DepthChartPosition": {
          "type": "String"
        },
        "DepthChartOrder": {
          "type": "Number"
        },
        "GlobalTeamID": {
          "type": "Number"
        },
        "FantasyDraftName": {
          "type": "String"
        },
        "FantasyDraftPlayerID": {
          "type": "Number"
        },
        "UsaTodayPlayerID": {
          "type": "Number"
        },
        "UsaTodayHeadshotUrl": {
          "type": "String"
        },
        "UsaTodayHeadshotNoBackgroundUrl": {
          "type": "String"
        },
        "UsaTodayHeadshotUpdated": {
          "type": "Date"
        },
        "UsaTodayHeadshotNoBackgroundUpdated": {
          "type": "Date"
        },
        "NbaDotComPlayerID": {
          "type": "Number"
        }
      }
)

const Player = mongoose.model('player', playerSchema);

module.exports = {Player};