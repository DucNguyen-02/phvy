import { Table } from 'antd'
import React from 'react'
import styled from 'styled-components'

const TableStyled = styled(Table)`
  .ant-table-thead .ant-table-cell {
    background-color: #475569 !important;
    color: #fff;
  }

  .ant-table-cell-row-hover {
    background: #f5f5f6 !important;
  }
`

export const AppTable = ({ columns, dataSource }) => {
  return <TableStyled columns={columns} dataSource={dataSource} />
}
