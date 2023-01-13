import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../datas/TeamsList/teamslist.json'
//import teams from '../datas/TeamsList/teamslist.json'
import TeamNBA from './TeamNBA'

const teams = require('../datas/TeamsList/teamslist.json');

const teams_data = JSON.parse(JSON.stringify(teams));

//console.log(teams_data)
{teams_data.map(team =>
    console.log(team.Name)
)}

export const Teams = () => {
    return(
        <>
            <h1>NBA Teams</h1>
            <Container>
                <Row xs={1} md={2}>
                    <Col xs><h1>EASTERN DIVISION</h1></Col>
                    <Col xs><h1>WESTERN DIVISION</h1></Col>
                </Row>
                
                <div className="wrapper">
                    {teams_data.map(team =>
                        <TeamNBA
                        Name={team.Name}
                        />
                    )}
                </div>
                
            </Container>
        </>
    )
}