import { compareAsc, format } from 'date-fns'
//sort by date

import { ColumnFilter } from '../../components/ColumnFilter'

export const COLUMNS = [
    {
        Header: 'NAME',
        accessor: 'FanDuelName',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    },
    {
        Header: 'POS',
        accessor: 'Position',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'HT',
        accessor: 'Height',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'WT',
        accessor: 'Weight',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    },
    {
        Header: 'COLLEGE',
        accessor: 'College',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    },
    {
        Header: 'SALARY',
        accessor: 'Salary',
        Filter: ColumnFilter,
        disableFilters: true,
        disableGlobalFilter:true
    }
]