import { compareAsc, format } from 'date-fns'
//sort by date

import { ColumnFilter } from '../../components/ColumnFilter'

export const STANDING = [
    {
        Header: 'Teams',
        accessor: 'Name',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    },
    {
        Header: 'W',
        accessor: 'Wins',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'L',
        accessor: 'Losses',
        Filter: ColumnFilter,
        disableFilters: true
    }
]