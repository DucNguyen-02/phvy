import UploadIcon from '@/app/Icons/UploadIcon'
import { AppTable } from '@/app/Shared/AppTable'
import Button from '@/app/Shared/Button'
import React from 'react'

const Service = () => {
  const columns = [
    {
      title: 'Mã DVSC',
      dataIndex: 'maDVSC',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Tên DVSC',
      dataIndex: 'tenDVSC',
    },
  ]

  const data = [
    {
      maDVSC: 1,
      tenDVSC: 'Sửa chữa tủ lạnh',
    },
    {
      maDVSC: 2,
      tenDVSC: 'Sửa chữa điều hòa',
    },
    {
      maDVSC: 3,
      tenDVSC: 'Sửa chữa lò vi sóng',
    },
    {
      maDVSC: 4,
      tenDVSC: 'Sửa chữa bếp điện từ',
    },
    {
      maDVSC: 5,
      tenDVSC: 'Sửa chữa máy giặt',
    },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Cập nhật dịch vụ</h2>
      <div className="rounded border border-2 bg-[#fcfcfc] p-4 flex justify-center gap-20">
        <div>
          <div
            style={{
              border: '1px dashed #3E3E3E',
            }}
            className={`p-5 mb-2 h-[200px] mt-4 flex flex-col justify-center items-center rounded-[8px] cursor-pointer `}
          >
            <UploadIcon />
            <span className="text-[20px] font-semibold ">Tải ảnh lên</span>
          </div>
          <div className="flex items-center">
            <h2 className="text-[16px] font-semibold mr-4">Tên dịch vụ</h2>
            <input
              placeholder="Tên dịch vụ"
              type="text"
              className="px-4 py-1 text-[16px] border border-2"
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

export default Service
