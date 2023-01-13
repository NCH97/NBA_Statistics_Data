import React from 'react'

import Box from '@mui/material/Box';

import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';

import { Nba_sorting_table} from './Nba_sorting_table'
import { Nba_table } from './Nba_table'
import Nba_ButtonGroup from './Nba_ButtonGroup'
import Layout from './TabsComponent';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const Standing = () => {
    return(
        <>
            <h1>NBA STANDING 2022-2023</h1>
            <>
                <Layout/>
            </>
        </>
    )
}