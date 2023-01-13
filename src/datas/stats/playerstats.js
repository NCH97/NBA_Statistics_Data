import { compareAsc, format } from 'date-fns'
//sort by date

import { ColumnFilter } from '../../components/ColumnFilter'

export const COLUMNS = [
    {
        Header: 'NAME',
        accessor: 'Name',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    },
    {
        Header: 'TEAM',
        accessor: 'Team',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'POS',
        accessor: 'Position',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'GP',
        accessor: 'Games',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    },
    {
        Header: 'PTS',
        accessor: 'FantasyPoints',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    },
    {
        Header: 'REB',
        accessor: 'Rebounds',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    },
    {
        Header: 'AST',
        accessor: 'Assists',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    }
]