import { AppTable } from '@/app/Shared/AppTable'
import Button from '@/app/Shared/Button'

const Policy = () => {
  const columns = [
    {
      title: 'Mã CS',
      dataIndex: 'maCS',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Loại SP',
      dataIndex: 'loaiSP',
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

  const data = [
    {
      maCS: 1,
      loaiSP: 'Điều hòa nhỏ',
      xuatXu: 'Việt Nam',
      thoiHanBH: 24,
      thoiHanDB: 'Bo mạch lạnh được bảo hành 36 tháng từ ngày sản xuất',
    },
    {
      maCS: 2,
      loaiSP: 'Điều hòa nhỏ',
      xuatXu: 'Việt Nam',
      thoiHanBH: 24,
      thoiHanDB: 'Bo mạch lạnh được bảo hành 36 tháng từ ngày sản xuất',
    },
    {
      maCS: 3,
      loaiSP: 'Điều hòa nhỏ',
      xuatXu: 'Việt Nam',
      thoiHanBH: 24,
      thoiHanDB: 'Bo mạch lạnh được bảo hành 36 tháng từ ngày sản xuất',
    },
    {
      maCS: 4,
      loaiSP: 'Điều hòa nhỏ',
      xuatXu: 'Việt Nam',
      thoiHanBH: 24,
      thoiHanDB: 'Bo mạch lạnh được bảo hành 36 tháng từ ngày sản xuất',
    },
    {
      maCS: 5,
      loaiSP: 'Điều hòa nhỏ',
      xuatXu: 'Việt Nam',
      thoiHanBH: 24,
      thoiHanDB: 'Bo mạch lạnh được bảo hành 36 tháng từ ngày sản xuất',
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
            <input
              placeholder="Loại sản phẩm"
              type="text"
              className="px-4 py-1 text-[20px]"
            />
          </div>
          <div className="flex items-center m-auto">
            <span className="text-[red] mr-2">*</span>
            <h4 className="mr-4 text-[20px]">Xuất xứ</h4>
            <input
              placeholder="Xuất xứ"
              type="text"
              className="px-4 py-1 text-[20px]"
            />
          </div>
          <div className="flex items-center m-auto">
            <span className="text-[red] mr-2">*</span>
            <h4 className="mr-4 text-[20px]">Thời hạn bảo hành (tháng)</h4>
            <input
              placeholder="Thời hạn bảo hành"
              type="text"
              className="px-4 py-1 text-[20px]"
            />
          </div>
          <div className="flex items-center m-auto">
            <span className="text-[red] mr-2">*</span>
            <h4 className=" mr-4 text-[20px]">Thời hạn đặc biệt</h4>
            <input
              placeholder="Thời hạn đặc biệt"
              type="text"
              className="px-4 py-1 text-[20px]"
            />
          </div>
        </div>

        <div className="flex gap-8 justify-center mb-4">
          <Button className="bg-[#dbeafe]">Hủy</Button>
          <Button className="bg-[#2563eb] text-white">Thêm</Button>
          <Button className="bg-[#ffc93d] text-white">Cập nhật</Button>
          <Button className="bg-[#e43958] text-white">Xóa</Button>
        </div>

        <div>
          <AppTable columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  )
}

export default Policy
