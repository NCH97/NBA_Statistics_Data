import React,{useState} from 'react'

import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { Nba_sorting_table} from './Nba_sorting_table'
import { Nba_standing_table } from './Nba_standing_table';

export default function Layout () {

    const [selectedTab, setSelectedTab] = React.useState('1')

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }


    return(
        <>
            <TabContext value={selectedTab}>
                <TabList onChange={handleChange}>
                    <Tab label="League" value="1"></Tab>
                    <Tab label="Conference" value="2"></Tab>
                    <Tab label="Division" value="3"></Tab>
                </TabList>
                <TabPanel value="1">
                    <h3>NBA</h3>
                    <Nba_standing_table/>

                </TabPanel>
                <TabPanel value="2">
                    <h3>Eastern Conference</h3>
                    <Nba_sorting_table/>
                    <h3>Western Conference</h3>
                    <Nba_sorting_table/>
                </TabPanel>
                <TabPanel value="3"><Nba_sorting_table/></TabPanel>
            </TabContext>
            
        </>
    )
}