const mongoose = require('mongoose');

const teamseasonstatsSchema = new mongoose.Schema(
    {
    
            "StatID": {
              "type": "Number"
            },
            "TeamID": {
              "type": "Number"
            },
            "SeasonType": {
              "type": "Number"
            },
            "Season": {
              "type": "Number"
            },
            "Name": {
              "type": "String"
            },
            "Team": {
              "type": "String"
            },
            "Wins": {
              "type": "Number"
            },
            "Losses": {
              "type": "Number"
            },
            "OpponentPosition": {
              "type": "Mixed"
            },
            "Possessions": {
              "type": "Number"
            },
            "GlobalTeamID": {
              "type": "Number"
            },
            "Updated": {
              "type": "Date"
            },
            "Games": {
              "type": "Number"
            },
            "FantasyPoints": {
              "type": "Number"
            },
            "Minutes": {
              "type": "Number"
            },
            "Seconds": {
              "type": "Number"
            },
            "FieldGoalsMade": {
              "type": "Number"
            },
            "FieldGoalsAttempted": {
              "type": "Number"
            },
            "FieldGoalsPercentage": {
              "type": "Number"
            },
            "EffectiveFieldGoalsPercentage": {
              "type": "Number"
            },
            "TwoPointersMade": {
              "type": "Number"
            },
            "TwoPointersAttempted": {
              "type": "Number"
            },
            "TwoPointersPercentage": {
              "type": "Number"
            },
            "ThreePointersMade": {
              "type": "Number"
            },
            "ThreePointersAttempted": {
              "type": "Number"
            },
            "ThreePointersPercentage": {
              "type": "Number"
            },
            "FreeThrowsMade": {
              "type": "Number"
            },
            "FreeThrowsAttempted": {
              "type": "Number"
            },
            "FreeThrowsPercentage": {
              "type": "Number"
            },
            "OffensiveRebounds": {
              "type": "Number"
            },
            "DefensiveRebounds": {
              "type": "Number"
            },
            "Rebounds": {
              "type": "Number"
            },
            "OffensiveReboundsPercentage": {
              "type": "Mixed"
            },
            "DefensiveReboundsPercentage": {
              "type": "Mixed"
            },
            "TotalReboundsPercentage": {
              "type": "Mixed"
            },
            "Assists": {
              "type": "Number"
            },
            "Steals": {
              "type": "Number"
            },
            "BlockedShots": {
              "type": "Number"
            },
            "Turnovers": {
              "type": "Number"
            },
            "PersonalFouls": {
              "type": "Number"
            },
            "Points": {
              "type": "Number"
            },
            "TrueShootingAttempts": {
              "type": "Number"
            },
            "TrueShootingPercentage": {
              "type": "Number"
            },
            "PlayerEfficiencyRating": {
              "type": "Mixed"
            },
            "AssistsPercentage": {
              "type": "Mixed"
            },
            "StealsPercentage": {
              "type": "Mixed"
            },
            "BlocksPercentage": {
              "type": "Mixed"
            },
            "TurnOversPercentage": {
              "type": "Mixed"
            },
            "UsageRatePercentage": {
              "type": "Mixed"
            },
            "FantasyPointsFanDuel": {
              "type": "Number"
            },
            "FantasyPointsDraftKings": {
              "type": "Number"
            },
            "FantasyPointsYahoo": {
              "type": "Number"
            },
            "PlusMinus": {
              "type": "Number"
            },
            "DoubleDoubles": {
              "type": "Number"
            },
            "TripleDoubles": {
              "type": "Number"
            },
            "FantasyPointsFantasyDraft": {
              "type": "Number"
            },
            "IsClosed": {
              "type": "Boolean"
            },
            "LineupConfirmed": {
              "type": "Mixed"
            },
            "LineupStatus": {
              "type": "String"
            },
            "OpponentStat": {
              "StatID": {
                "type": "Number"
              },
              "TeamID": {
                "type": "Number"
              },
              "SeasonType": {
                "type": "Number"
              },
              "Season": {
                "type": "Number"
              },
              "Name": {
                "type": "String"
              },
              "Team": {
                "type": "String"
              },
              "Wins": {
                "type": "Number"
              },
              "Losses": {
                "type": "Number"
              },
              "OpponentPosition": {
                "type": "Mixed"
              },
              "Possessions": {
                "type": "Number"
              },
              "GlobalTeamID": {
                "type": "Number"
              },
              "Updated": {
                "type": "Date"
              },
              "Games": {
                "type": "Number"
              },
              "FantasyPoints": {
                "type": "Number"
              },
              "Minutes": {
                "type": "Number"
              },
              "Seconds": {
                "type": "Number"
              },
              "FieldGoalsMade": {
                "type": "Number"
              },
              "FieldGoalsAttempted": {
                "type": "Number"
              },
              "FieldGoalsPercentage": {
                "type": "Number"
              },
              "EffectiveFieldGoalsPercentage": {
                "type": "Number"
              },
              "TwoPointersMade": {
                "type": "Number"
              },
              "TwoPointersAttempted": {
                "type": "Number"
              },
              "TwoPointersPercentage": {
                "type": "Number"
              },
              "ThreePointersMade": {
                "type": "Number"
              },
              "ThreePointersAttempted": {
                "type": "Number"
              },
              "ThreePointersPercentage": {
                "type": "Number"
              },
              "FreeThrowsMade": {
                "type": "Number"
              },
              "FreeThrowsAttempted": {
                "type": "Number"
              },
              "FreeThrowsPercentage": {
                "type": "Number"
              },
              "OffensiveRebounds": {
                "type": "Number"
              },
              "DefensiveRebounds": {
                "type": "Number"
              },
              "Rebounds": {
                "type": "Number"
              },
              "OffensiveReboundsPercentage": {
                "type": "Mixed"
              },
              "DefensiveReboundsPercentage": {
                "type": "Mixed"
              },
              "TotalReboundsPercentage": {
                "type": "Mixed"
              },
              "Assists": {
                "type": "Number"
              },
              "Steals": {
                "type": "Number"
              },
              "BlockedShots": {
                "type": "Number"
              },
              "Turnovers": {
                "type": "Number"
              },
              "PersonalFouls": {
                "type": "Number"
              },
              "Points": {
                "type": "Number"
              },
              "TrueShootingAttempts": {
                "type": "Number"
              },
              "TrueShootingPercentage": {
                "type": "Number"
              },
              "PlayerEfficiencyRating": {
                "type": "Mixed"
              },
              "AssistsPercentage": {
                "type": "Mixed"
              },
              "StealsPercentage": {
                "type": "Mixed"
              },
              "BlocksPercentage": {
                "type": "Mixed"
              },
              "TurnOversPercentage": {
                "type": "Mixed"
              },
              "UsageRatePercentage": {
                "type": "Mixed"
              },
              "FantasyPointsFanDuel": {
                "type": "Number"
              },
              "FantasyPointsDraftKings": {
                "type": "Number"
              },
              "FantasyPointsYahoo": {
                "type": "Number"
              },
              "PlusMinus": {
                "type": "Number"
              },
              "DoubleDoubles": {
                "type": "Number"
              },
              "TripleDoubles": {
                "type": "Number"
              },
              "FantasyPointsFantasyDraft": {
                "type": "Number"
              },
              "IsClosed": {
                "type": "Boolean"
              },
              "LineupConfirmed": {
                "type": "Mixed"
              },
              "LineupStatus": {
                "type": "String"
              },
              "OpponentStat": {
                "type": "Mixed"
              }
            }
          },
)

const TeamSeasonStats = mongoose.model('teamseasonstats', teamseasonstatsSchema);

module.exports = {TeamSeasonStats};