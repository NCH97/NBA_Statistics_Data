import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../datas/TeamsList/teamslist.json'
import React, { useState, useEffect, useMemo } from 'react'
//import teams from '../datas/TeamsList/teamslist.json'
import TeamNBA from './TeamNBA'
import axios from 'axios'

//const teams = require('../datas/TeamsList/teamslist.json');

//const teams_data = JSON.parse(JSON.stringify(teams));

export const Teams = () => {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const result = await axios.get('http://localhost:8080/api/v1/teams/');
            setTeams(result.data);
            //console.log("standing>>>>",result.data);
        };
        fetchdata();
        
    }, []);

    return(
        <>
            
            <h1>NBA Teams</h1>
            <Container>
                <Row xs={1} md={2}>
                    <Col xs><h1>EASTERN DIVISION</h1></Col>
                    <Col xs><h1>WESTERN DIVISION</h1></Col>
                </Row>

                <Row xs={1} md={2}>
                    <Col xs>
                        <div className="wrapper">
                        {teams.filter(team => team.Conference === "Eastern")
                        .map(team =>
                            <TeamNBA
                            Name={team.Name}
                            WikipediaLogoUrl={team.WikipediaLogoUrl}
                            
                            />
                        )
                        }
                    </div>
                    </Col>

                    <Col xs>
                        <div className="wrapper">
                        {teams.filter(team => team.Conference === "Western")
                        .map(team =>
                            <TeamNBA
                            Name={team.Name}
                            WikipediaLogoUrl={team.WikipediaLogoUrl}
                            
                            />
                        )
                        }
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}