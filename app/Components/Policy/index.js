import { AppTable } from '@/app/Shared/AppTable'
import Button from '@/app/Shared/Button'
import { useEffect, useState } from 'react'
import AddNewPolicy from './AddNewPolicy'
import axios from 'axios'

const initUpdate = {
  maCSBH: '',
  maLoaiSP: '',
  xuatXu: '',
  thoiHanBH: 0,
  thoiHanDB: '',
}

const Policy = () => {
  const [data, setData] = useState([])
  const [type, setType] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [dataUpdate, setDataUpdate] = useState(initUpdate)

  const fetchData = async () => {
    const data = await axios.get('http://127.0.0.1:3000/csbh')
    setData(data.data)
  }

  const fetchTypeProduct = async () => {
    const data = await axios.get('http://127.0.0.1:3000/loaisp')
    setType(data.data)
  }

  useEffect(() => {
    fetchData()
    fetchTypeProduct()
  }, [])

  const handleUpdate = async () => {
    await axios.put('http://127.0.0.1:3000/csbh', dataUpdate)
    fetchData()
    setDataUpdate(initUpdate)
  }

  const handleDelete = async () => {
    await axios.delete(`http://127.0.0.1:3000/csbh/${dataUpdate.maCSBH}`)
    fetchData()
    setDataUpdate(initUpdate)
  }

  const columns = [
    {
      title: 'Mã CSBH',
      dataIndex: 'maCSBH',
      render: (text, record) => (
        <a onClick={() => setDataUpdate(record)}>{text}</a>
      ),
    },
    {
      title: 'Loại SP',
      dataIndex: 'tenloaiSP',
    },
    {
      title: 'Xuất xứ',
      dataIndex: 'xuatXu',
    },
    {
      title: 'Thời hạn BH',
      dataIndex: 'thoiHanBH',
    },
    {
      title: 'Thời hạn DB',
      dataIndex: 'thoiHanDB',
    },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">
        Cập nhật chính sách bảo hành
      </h2>
      <div className="rounded border border-2 bg-[#fcfcfc] p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center m-auto">
            <span className="text-[red] mr-2">*</span>
            <h4 className="mr-4 text-[20px]">Loại sản phẩm</h4>
            <select
              placeholder="Loại sản phẩm"
              className="px-4 py-1 text-[20px]"
              value={dataUpdate?.maLoaiSP}
              name="loaiSP"
              as="select"
              onChange={(e) => {
                setDataUpdate({ ...dataUpdate, maLoaiSP: e.target.value })
              }}
            >
              <option disabled value="">
                --Chọn loại sản phẩm--
              </option>
              {type?.map((item) => {
                return <option value={item.maLoaiSP}>{item.tenLoaiSP}</option>
              })}
            </select>
          </div>
          <div className="flex items-center m-auto">
            <span className="text-[red] mr-2">*</span>
            <h4 className="mr-4 text-[20px]">Xuất xứ</h4>
            <input
              placeholder="Xuất xứ"
              className="px-4 py-1 text-[20px]"
              value={dataUpdate?.xuatXu}
              onChange={(e) => {
                setDataUpdate({ ...dataUpdate, xuatXu: e.target.value })
              }}
              name="xuatXu"
            />
          </div>
          <div className="flex items-center m-auto">
            <span className="text-[red] mr-2">*</span>
            <h4 className="mr-4 text-[20px]">Thời hạn bảo hành (tháng)</h4>
            <input
              placeholder="Thời hạn bảo hành"
              className="px-4 py-1 text-[20px]"
              value={dataUpdate?.thoiHanBH}
              name="thoiHanBH"
              type="number"
              onChange={(e) => {
                setDataUpdate({ ...dataUpdate, thoiHanBH: e.target.value })
              }}
            />
          </div>
          <div className="flex items-center m-auto">
            <span className="text-[red] mr-2">*</span>
            <h4 className=" mr-4 text-[20px]">Thời hạn đặc biệt</h4>
            <input
              placeholder="Thời hạn đặc biệt"
              className="px-4 py-1 text-[20px]"
              value={dataUpdate?.thoiHanDB}
              name="thoiHanDB"
              onChange={(e) => {
                setDataUpdate({ ...dataUpdate, thoiHanDB: e.target.value })
              }}
            />
          </div>
        </div>

        <div className="flex gap-8 justify-center mb-4">
          <Button
            className={`${
              !dataUpdate?.maCSBH ? 'bg-[#858585]' : 'bg-[#dbeafe]'
            }`}
            disabled={!dataUpdate?.maCSBH}
            onClick={(e) => {
              e.preventDefault()
              setDataUpdate(initUpdate)
            }}
          >
            Hủy
          </Button>
          <Button
            className="bg-[#2563eb] text-white"
            onClick={(e) => {
              e.preventDefault()
              setIsOpen(true)
            }}
          >
            Thêm
          </Button>
          <Button
            className={` text-white ${
              !dataUpdate?.maCSBH ? 'bg-[#858585]' : 'bg-[#ffc93d]'
            } `}
            onClick={(e) => {
              e.preventDefault()

              handleUpdate()
            }}
            disabled={!dataUpdate?.maCSBH}
          >
            Cập nhật
          </Button>
          <Button
            className={` text-white ${
              !dataUpdate?.maCSBH ? 'bg-[#858585]' : 'bg-[#e43958]'
            } `}
            onClick={(e) => {
              e.preventDefault()
              handleDelete()
            }}
            disabled={!dataUpdate?.maCSBH}
          >
            Xóa
          </Button>
        </div>

        <div>
          <AppTable columns={columns} dataSource={data} />
        </div>
      </div>

      <AddNewPolicy
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        type={type}
        fetchData={fetchData}
      />
    </div>
  )
}

export default Policy
