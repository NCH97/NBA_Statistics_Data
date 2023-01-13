import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nba_sorting_table} from './Nba_sorting_table'
import './playerheader.css'

export const Players_Info = () => {
  return (
    <Container>
        <div class="PlayerHeader__Container">
          <div class="PlayerHeader__Image">
            <img src={require('../utils/moranja.jpg')} />
          </div>
          <div class="PlayerHeader__TeamInfo">
            <h1><span>Ja Morant</span></h1>
            <p><strong>Position</strong> : Point Guard</p>
            <p><strong>Team</strong> : MEM</p>
            <p><strong>Jersey</strong> : #12</p>
          </div>
          <div class="PlayerHeader__Data">
              <p><strong>HT/WT</strong> : 6' 3", 174 lbs</p>
              <p><strong>Birthdate</strong> : 15/02/98</p>
              <p><strong>College</strong> : Murray St</p>
              <p><strong>Status</strong> : Active</p>
              <p><strong>Experience</strong>: 11 </p>
          </div>
          <div class="PlayerHeader__Stats">
            <table class="roundedCorners">
                <tr>
                  <th>POINTS</th>
                  <th>REBOUNDS</th>
                  <th>ASSISTS</th>
                </tr>
                <tr>
                  <td>27.6</td>
                  <td>5.9</td>
                  <td>7.9</td>
                </tr>
            </table>
          </div>
        </div>
        <Container>
          <h3>Stats</h3>
          <h5>Regular Season Averages</h5>
        </Container>
    </Container>

  )
}
