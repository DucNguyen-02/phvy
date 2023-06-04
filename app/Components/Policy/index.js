import { AppTable } from '@/app/Shared/AppTable'
import Button from '@/app/Shared/Button'
import { useState } from 'react'
import AddNewPolicy from './AddNewPolicy'
import { Field, Form, Formik } from 'formik'

const initUpdate = {
  maCS: '',
  loaiSP: '',
  xuatXu: '',
  thoiHanBH: 0,
  thoiHanDB: '',
}

const Policy = () => {
  const initData = [
    {
      maCS: '#AS13',
      loaiSP: 'Điều hòa nhỏ',
      xuatXu: 'Việt Nam',
      thoiHanBH: 12,
      thoiHanDB: 'Bo mạch lạnh được bảo hành 36 tháng từ ngày sản xuất',
    },
    {
      maCS: '#FS61',
      loaiSP: 'Điều hòa nhỏ',
      xuatXu: 'Việt Nam',
      thoiHanBH: 24,
      thoiHanDB: 'Bo mạch lạnh được bảo hành 36 tháng từ ngày sản xuất',
    },
    {
      maCS: '#AK47',
      loaiSP: 'Điều hòa nhỏ',
      xuatXu: 'Việt Nam',
      thoiHanBH: 36,
      thoiHanDB: 'Bo mạch lạnh được bảo hành 36 tháng từ ngày sản xuất',
    },
  ]

  const [data, setData] = useState(initData)
  const [isOpen, setIsOpen] = useState(false)
  const [dataUpdate, setDataUpdate] = useState(initUpdate)

  const columns = [
    {
      title: 'Mã CS',
      dataIndex: 'maCS',
      render: (text, record) => (
        <a onClick={() => setDataUpdate(record)}>{text}</a>
      ),
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

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">
        Cập nhật chính sách bảo hành
      </h2>
      <div className="rounded border border-2 bg-[#fcfcfc] p-4">
        <Formik
          enableReinitialize
          initialValues={dataUpdate}
          onSubmit={handleSubmit}
        >
          {({ values }) => {
            return (
              <Form>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center m-auto">
                    <span className="text-[red] mr-2">*</span>
                    <h4 className="mr-4 text-[20px]">Loại sản phẩm</h4>
                    <Field
                      placeholder="Loại sản phẩm"
                      className="px-4 py-1 text-[20px]"
                      value={values?.loaiSP}
                      name="loaiSP"
                      as="select"
                    >
                      <option disabled value="">
                        --Chọn loại sản phẩm--
                      </option>
                      <option value="Điều hòa">Điều hòa</option>
                      <option value="Tivi">Tivi</option>
                      <option value="Tủ lạnh">Tủ lạnh</option>
                    </Field>
                  </div>
                  <div className="flex items-center m-auto">
                    <span className="text-[red] mr-2">*</span>
                    <h4 className="mr-4 text-[20px]">Xuất xứ</h4>
                    <Field
                      placeholder="Xuất xứ"
                      className="px-4 py-1 text-[20px]"
                      value={values?.xuatXu}
                      name="xuatXu"
                    />
                  </div>
                  <div className="flex items-center m-auto">
                    <span className="text-[red] mr-2">*</span>
                    <h4 className="mr-4 text-[20px]">
                      Thời hạn bảo hành (tháng)
                    </h4>
                    <Field
                      placeholder="Thời hạn bảo hành"
                      className="px-4 py-1 text-[20px]"
                      value={values?.thoiHanBH}
                      name="thoiHanBH"
                      type="number"
                    />
                  </div>
                  <div className="flex items-center m-auto">
                    <span className="text-[red] mr-2">*</span>
                    <h4 className=" mr-4 text-[20px]">Thời hạn đặc biệt</h4>
                    <Field
                      placeholder="Thời hạn đặc biệt"
                      className="px-4 py-1 text-[20px]"
                      value={values?.thoiHanDB}
                      name="thoiHanDB"
                    />
                  </div>
                </div>

                <div className="flex gap-8 justify-center mb-4">
                  <Button
                    className={`${
                      !dataUpdate.maCS ? 'bg-[#858585]' : 'bg-[#dbeafe]'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setDataUpdate(initUpdate)
                    }}
                    disabled={!dataUpdate.maCS}
                  >
                    Hủy
                  </Button>
                  <Button
                    className="bg-[#2563eb] text-white"
                    onClick={() => setIsOpen(true)}
                  >
                    Thêm
                  </Button>
                  <Button
                    className={` text-white ${
                      !dataUpdate.maCS ? 'bg-[#858585]' : 'bg-[#ffc93d]'
                    } `}
                    onClick={(e) => {
                      e.preventDefault()
                      setData(
                        data.map((item) => {
                          if (item.maCS === values.maCS) {
                            return { ...item, ...values }
                          }
                          return item
                        })
                      )
                      setDataUpdate(initUpdate)
                    }}
                    disabled={!dataUpdate.maCS}
                  >
                    Cập nhật
                  </Button>
                  <Button
                    className={` text-white ${
                      !dataUpdate.maCS ? 'bg-[#858585]' : 'bg-[#e43958]'
                    } `}
                    onClick={(e) => {
                      e.preventDefault()
                      setData(
                        data.filter((item) => {
                          return item.maCS !== values.maCS
                        })
                      )
                      setDataUpdate(initUpdate)
                    }}
                    disabled={!dataUpdate.maCS}
                  >
                    Xóa
                  </Button>
                </div>
              </Form>
            )
          }}
        </Formik>

        <div>
          <AppTable columns={columns} dataSource={data} />
        </div>
      </div>

      <AddNewPolicy
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setData={setData}
        data={data}
      />
    </div>
  )
}

export default Policy
