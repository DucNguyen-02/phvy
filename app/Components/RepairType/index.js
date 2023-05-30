import { AppTable } from '@/app/Shared/AppTable'
import Button from '@/app/Shared/Button'
import { formatToPrice } from '@/app/util/helpers'
import React from 'react'

const RepairType = () => {
  const columns = [
    {
      title: 'Mã DVSC',
      dataIndex: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Dịch vụ',
      dataIndex: 'serice',
    },
    {
      title: 'Giá tiền',
      dataIndex: 'price',
      render: (name) => {
        return <div>{formatToPrice(name)}</div>
      },
    },
    {
      title: 'Loại sửa chữa',
      dataIndex: 'type',
    },
  ]

  const data = [
    {
      id: 1,
      serice: 'Sửa chữa tủ lạnh',
      price: 200000,
      type: 'Xử lý sự cố không lạnh',
    },
    {
      id: 2,
      serice: 'Sửa chữa tủ lạnh',
      price: 200000,
      type: 'Xử lý sự cố không lạnh',
    },
    {
      id: 3,
      serice: 'Sửa chữa tủ lạnh',
      price: 200000,
      type: 'Xử lý sự cố không lạnh',
    },
    {
      id: 4,
      serice: 'Sửa chữa tủ lạnh',
      price: 200000,
      type: 'Xử lý sự cố không lạnh',
    },
    {
      id: 5,
      serice: 'Sửa chữa tủ lạnh',
      price: 200000,
      type: 'Xử lý sự cố không lạnh',
    },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Cập nhật loại sửa chữa</h2>
      <div className="rounded border border-2 bg-[#fcfcfc] p-4 flex justify-center gap-20">
        <div>
          <div className="flex items-center m-auto">
            <span className="text-[red] mr-2">*</span>
            <h4 className="mr-4 text-[20px]">Dịch vụ</h4>
            <input
              placeholder="Dịch vụ"
              type="text"
              className="border border-2 mb-2 px-4 py-1 text-[20px]"
            />
          </div>
          <div className="flex items-center m-auto">
            <span className="text-[red] mr-2">*</span>
            <h4 className="mr-4 text-[20px]">Giá tiền</h4>
            <input
              placeholder="Giá tiền"
              type="text"
              className="border border-2 mb-2 px-4 py-1 text-[20px]"
            />
          </div>
          <div className="flex items-center m-auto">
            <span className="text-[red] mr-2">*</span>
            <h4 className="mr-4 text-[20px]">Loại sửa chữa</h4>
            <input
              placeholder="Loại sửa chữa"
              type="text"
              className="border border-2 mb-2 px-4 py-1 text-[20px]"
            />
          </div>
        </div>

        <div>
          <div className="flex gap-8 justify-center mb-4">
            <Button className="bg-[#dbeafe] px-14">Hủy</Button>
            <Button className="bg-[#2563eb] px-14 text-white">Thêm</Button>
            <Button className="bg-[#ffc93d] px-14 text-white">Cập nhật</Button>
            <Button className="bg-[#e43958] px-14 text-white">Xóa</Button>
          </div>

          <div>
            <AppTable columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepairType
