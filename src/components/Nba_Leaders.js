import Container from 'react-bootstrap/Container';
import { Nba_leaders_table } from './Nba_leadersTable';
import { Nba_pagination_table } from './Nba_pagination_table'

export const Nba_Leaders = () => {
    return(
        <>
            <h1>NBA Player Stats 2022-23</h1>
            <Container>
                <Nba_leaders_table/>
            </Container>
        </>
    )
}