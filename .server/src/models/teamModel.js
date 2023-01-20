const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    TeamID: {
        type: "Number"
    },
    Key: {
        type: "String"
    },
    Active: {
        type: "Boolean"
    },
    City: {
        type: "String"
    },
    Name: {
        type: "String"
    },
    LeagueID: {
        type: "Number"
    },
    StadiumID: {
        type: "Number"
    },
    Conference: {
        type: "String"
    },
    Division: {
        type: "String"
    },
    PrimaryColor: {
        type: "String"
    },
    SecondaryColor: {
        type: "String"
    },
    TertiaryColor: {
        type: "String"
    },
    QuaternaryColor: {
        type: "String"
    },
    WikipediaLogoUrl: {
        type: "String"
    },
    WikipediaWordMarkUrl: {
        type: "Mixed"
    },
    GlobalTeamID: {
        type: "Number"
    },
    NbaDotComTeamID: {
        type: "Number"
    }
});

const Team = mongoose.model('team', teamSchema);

module.exports = {Team};