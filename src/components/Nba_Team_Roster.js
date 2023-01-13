import React from 'react'
import { Nba_sorting_table} from './Nba_sorting_table'
import { Nba_table } from './Nba_table'
import { Nba_troster } from './Nba_troster'
import Nba_ButtonGroup from './Nba_ButtonGroup'
import Container from 'react-bootstrap/Container';

export const Team_Roster = () => {
    return(
        <Container>
            <h1>TEAM ROSTER</h1>
            <Nba_troster/>
        </Container>
    )
}