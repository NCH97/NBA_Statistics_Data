import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Nba_pagination_table } from './Nba_pagination_table'
import { Nba_table } from './Nba_table';
import TabsStats from './TabsStats'

export const Stats = () => {
    return(
        <>
            <TabsStats/>
        </>
    )
}

//TabList Item