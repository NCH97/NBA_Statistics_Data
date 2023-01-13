import React,{useState} from 'react'

import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { Nba_table } from './Nba_table';
import { Nba_sorting_table} from './Nba_sorting_table'

export default function Layout () {

    const [selectedTab, setSelectedTab] = React.useState('1')

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }


    return(
        <Container>
            <h1>NBA Stat Leaders 2022-23</h1>
            <TabContext value={selectedTab}>
                <TabList onChange={handleChange}>
                    <Tab label="Players" value="1"></Tab>
                    <Tab label="Teams" value="2"></Tab>
                </TabList>
                <TabPanel value="1">
                    <Row xs={1} md={2}>
                        <Col xs><h4>Offensive Leaders</h4></Col>
                        <Col xs><h4>Deffensive Leaders</h4></Col>
                    </Row>
                    <Row xs={1} md={2}>
                        <Col xs><Nba_table/></Col>
                        <Col xs><Nba_table/></Col>
                    </Row>
                </TabPanel>
                <TabPanel value="2">
                    <Row xs={1} md={2}>
                            <Col xs><h4>Offensive Leaders</h4></Col>
                            <Col xs><h4>Deffensive Leaders</h4></Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col xs><Nba_table/></Col>
                            <Col xs><Nba_table/></Col>
                    </Row>
                </TabPanel>
            </TabContext>
            
        </Container>
    )
}