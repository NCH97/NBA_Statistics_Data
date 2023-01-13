import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nba_pagination_table } from './Nba_pagination_table'
import { Nba_teamleaders_table } from './Nba_teamleaders';
import './teamstats.css'

export const Team_Stats = () => {
    return(
        <>
            <h1>NBA Team Stats 2022-23</h1>
            <Container>
                <Row xs={1} md={2}>
                    <Col xs>
                        <h4>Team Leaders</h4>
                        <div className="wrapper-teamleaders">
                            <section className="wrapper-teamleaders">
                                <a>
                                    <h2>Points</h2>
                                </a>
                                <div className="">
                                    <div>
                                        <p>img</p>
                                    </div>
                                    <div>
                                        <h3>
                                            <span>Player</span>
                                            <span>Pos</span>
                                        </h3>
                                        <div>
                                            30.8
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="wrapper-teamleaders">
                                <a>
                                    <h2>Points</h2>
                                </a>
                                <div className="">
                                    <div>
                                        <p>img</p>
                                    </div>
                                    <div>
                                        <h3>
                                            <span>Player</span>
                                            <span>Pos</span>
                                        </h3>
                                        <div>
                                            30.8
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="wrapper-teamleaders">
                                <a>
                                    <h2>Points</h2>
                                </a>
                                <div className="">
                                    <div>
                                        <p>img</p>
                                    </div>
                                    <div>
                                        <h3>
                                            <span>Player</span>
                                            <span>Pos</span>
                                        </h3>
                                        <div>
                                            30.8
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="wrapper-teamleaders">
                                <a>
                                    <h2>Points</h2>
                                </a>
                                <div className="">
                                    <div>
                                        <p>img</p>
                                    </div>
                                    <div>
                                        <h3>
                                            <span>Player</span>
                                            <span>Pos</span>
                                        </h3>
                                        <div>
                                            30.8
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="wrapper-teamleaders">
                                <a>
                                    <h2>Points</h2>
                                </a>
                                <div className="">
                                    <div>
                                        <p>img</p>
                                    </div>
                                    <div>
                                        <h3>
                                            <span>Player</span>
                                            <span>Pos</span>
                                        </h3>
                                        <div>
                                            30.8
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col xs>
                        <h4>Players Stats</h4>
                    </Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col xs>
                        <Nba_teamleaders_table/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}