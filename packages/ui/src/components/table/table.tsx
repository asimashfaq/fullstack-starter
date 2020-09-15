import React from 'react'
import styled from 'styled-components'
import { useTable, usePagination } from 'react-table'


const Styles = styled.div`
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  table {
    width:100%;  
    border-spacing: 0;
    border-bottom: 0px solid #e2e8f0;
    
    th {
       color: #a0aec0;
       font-weight: 200;
       text-transform: uppercase;
       text-align: start;
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #e2e8f0;
      font-weight:100;
      text-align: start;
      font-size: 0.875rem;
    }
  }

  .pagination {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows: 50px;

    place-content: space-between;
    margin-top: 0.5rem;
    .icons {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .center-col {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        span {
            font-weight:100;
            font-size: 0.875rem;
        }
    }
    .show-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        select {
            font-weight:100;
            font-size: 0.875rem;
            border: 1px solid rgba(237,242,247);
            border-radius: 0.25rem;
            padding: 0.75rem;
        }
    }
    
  }
  
`

export const Table = ({ columns, data }) => {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page, // Instead of using 'rows', we'll use page,
      // which has only the rows for the active page
  
      // The rest of these things are super handy, too ;)
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 2 },
      },
      usePagination
    )
  
    // Render the UI for your table
    return (
      <>
        <Styles>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
        <div className="pagination">
            <div className="icons">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
            </div>
            <div className="center-col">
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page:{' '}
                    <input
                    className='cursor-pointer p-2'
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                    }}
                    style={{ width: '100px', border:'1px solid #e2e8f0'}}
                    />
                </span>{' '}
            </div>
            <div className="show-btn">
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
            </select>    
            </div>
        </div>
        </Styles>
      </>
    )
  }