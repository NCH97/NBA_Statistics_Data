import React, { useState, useEffect, useMemo } from 'react'
import { useTable , useSortBy , useGlobalFilter, useFilters} from 'react-table'
import { GlobalFilter} from './GlobalFilter'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'

export const Nba_sorting_table = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy)

    const { getTableProps, 
        getTableBodyProps, 
        headerGroups,
        rows, 
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance

    const { globalFilter } = state


  return (
    <div className="container">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                    <span>
                        {column.isSorted ? (column.isSortedDesc ? '  Desc' : '  Asc') : ''}
                    </span>
                </th>
            ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                return (
                <tr {...row.getRowProps()}>
                    {
                        row.cells.map((cell) => {
                            return (
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            );
                        })
                    }
                </tr>
                );
            })}
        </tbody>
    </table>
    </div>
  )
}

