import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TeamNBA({ Name,WikipediaLogoUrl,Conference }) {
  return(
    <Row xs={1} md={2}>
    <Col xs>
        <section>
            <a href="#">
                <img src={WikipediaLogoUrl} alt="team" width="40" height="40"></img>
            </a>
            <div>
                <a href="#">
                    <h2>{Name}</h2>
                </a>
                <div class="">
                    <span><a href="#">Roster</a></span>
                    <span>  |  </span>
                    <span><a href="#">Statistics</a></span>
                </div>
            </div>
        </section>
    </Col>
    </Row>
  )
}

TeamNBA.propTypes = {
  Name: PropTypes.string.isRequired,
  WikipediaLogoUrl : PropTypes.string.isRequired,
  Conference : PropTypes.string.isRequired,
}