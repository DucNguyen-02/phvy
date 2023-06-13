import { AppTable } from '@/app/Shared/AppTable'
import AppAPI from '@/app/api'
import axios from 'axios'
import { useEffect, useState } from 'react'

const History = () => {
  const [data, setData] = useState([])

  const columns = [
    {
      title: 'Mã Đơn',
      dataIndex: 'maDon',
    },
    {
      title: 'Tên Loại SP',
      dataIndex: 'tenLoaiSP',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'diaChi',
    },
    {
      title: 'SDT',
      dataIndex: 'soDT',
    },
    {
      title: 'Ngày đến',
      dataIndex: 'ngayDen',
    },
    {
      title: 'Giờ hẹn',
      dataIndex: 'gioHen',
    },
  ]

  const fetchData = async () => {
    const data = await AppAPI.getHistory()
    setData(data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <AppTable columns={columns} dataSource={data} />
    </div>
  )
}

export default History
