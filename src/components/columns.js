import { compareAsc, format } from 'date-fns'
//sort by date

import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
    {
        Header: '#',
        accessor: '#',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    },
    {
        Header: 'PLAYER',
        accessor: 'PLAYER',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'TEAM',
        accessor: 'TEAM',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'GP',
        accessor: 'GP',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    },
    {
        Header: 'MIN',
        accessor: 'MIN',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    },
    {
        Header: 'PTS',
        accessor: 'PTS',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    },
    {
        Header: 'REB',
        accessor: 'REB',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    },
    {
        Header: 'AST',
        accessor: 'AST',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    }
]