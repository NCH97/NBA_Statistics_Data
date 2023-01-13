import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TeamNBA({ Name }) {
  return(
    <Row xs={1} md={2}>
    <Col xs>
        <section>
            <a href="#">
                <p>IMG</p>
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
}