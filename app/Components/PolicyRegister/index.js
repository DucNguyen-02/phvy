import Button from '@/app/Shared/Button'
import AppAPI from '@/app/api'
import { notification } from 'antd'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'

const PolicyRegister = () => {
  const [type, setType] = useState([])
  const [api, contextHolder] = notification.useNotification()

  const fetchTypeProduct = async () => {
    const data = await AppAPI.getTypeProduct()
    setType(data.data)
  }

  useEffect(() => {
    fetchTypeProduct()
  }, [])

  const handleSubmit = async (values, { resetForm }) => {
    const res = await AppAPI.registerPolicy(values)
    if (res.data.message === 'error') {
      opeErrorNotification('topRight')
    } else {
      openSuccessNotification('topRight')
      resetForm()
    }
  }

  const openSuccessNotification = (placement) => {
    api.success({
      message: `Thành công`,
      description: <div>Đăng ký bảo hành thành công</div>,
      placement,
    })
  }

  const opeErrorNotification = (placement) => {
    api.error({
      message: `Thất bại`,
      description: <div>Đăng ký bảo hành thất bại</div>,
      placement,
    })
  }

  return (
    <Formik
      enableReinitialize
      validationSchema={Yup.object().shape({
        maLoaiSP: Yup.string().required('maLoaiSP Bắt buộc'),
        soDT: Yup.string().required('SDT Bắt buộc'),
        ngayDen: Yup.string().required('Ngày đến Bắt buộc'),
        gioHen: Yup.string().required('Giờ hẹn Bắt buộc'),
        diaChi: Yup.string().required('Địa chỉ Bắt buộc'),
        ghiChu: Yup.string().required('Ghi chú Bắt buộc'),
      })}
      initialValues={{
        maLoaiSP: '',
        soDT: '',
        ngayDen: '',
        anhPBH: '',
        gioHen: '',
        ghiChu: '',
        diaChi: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form>
            {contextHolder}
            <div>
              <h2 className="text-xl font-semibold mb-3">Đăng ký bảo hành</h2>
              <div className="rounded border border-2 bg-[#fcfcfc] p-4">
                <div className="grid grid-cols-2 gap-4 mb-4 px-16">
                  <div className="flex ">
                    <span className="text-[red] mr-2">*</span>
                    <h4 className="mr-4 text-[20px] min-w-[150px] ">
                      Loại sản phẩm
                    </h4>
                    <div>
                      <div>
                        <Field
                          placeholder="Loại sản phẩm"
                          className="px-4 py-1 text-[20px]"
                          as="select"
                          name="maLoaiSP"
                          value={values.maLoaiSP}
                        >
                          <option disabled value="">
                            --Chọn loại sản phẩm--
                          </option>
                          {type?.map((item) => {
                            return (
                              <option value={item.maLoaiSP}>
                                {item.tenLoaiSP}
                              </option>
                            )
                          })}
                        </Field>
                        <div className="text-[red] ">
                          <ErrorMessage name="maLoaiSP" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <span className="text-[red] mr-2">*</span>
                    <h4 className="mr-4 text-[20px] min-w-[150px]">
                      Số điện thoại
                    </h4>
                    <div>
                      <Field
                        placeholder="Số điện thoại"
                        className="px-4 py-1 text-[20px]"
                        name="soDT"
                        value={values.soDT}
                      />
                      <div className="text-[red]">
                        <ErrorMessage name="soDT" />
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <span className="text-[red] mr-2">*</span>
                    <h4 className="mr-4 text-[20px] min-w-[150px]">Ngày đến</h4>
                    <div>
                      <Field
                        placeholder="Thời hạn bảo hành"
                        className="px-4 py-1 text-[20px]"
                        type="date"
                        name="ngayDen"
                        value={values.ngayDen}
                      />
                      <div className="text-[red]">
                        <ErrorMessage name="ngayDen" />
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <span className="text-[red] mr-2">*</span>
                    <h4 className=" mr-4 text-[20px] min-w-[150px]">
                      Ảnh phiếu BH
                    </h4>
                    <Field
                      className="px-4 py-1 text-[20px]"
                      type="file"
                      name="anhPBH"
                      onChange={(e) => {
                        setFieldValue(
                          'anhPBH',
                          URL.createObjectURL(e.target.files[0])
                        )
                      }}
                    />
                    <img src={values.anhPBH} alt="" />
                  </div>
                  <div className="flex ">
                    <span className="text-[red] mr-2">*</span>
                    <h4 className=" mr-4 text-[20px] min-w-[150px]">Giờ hẹn</h4>
                    <div>
                      <Field
                        className="px-4 py-1 text-[20px]"
                        name="gioHen"
                        type="time"
                        value={values.gioHen}
                      />
                      <div className="text-[red]">
                        <ErrorMessage name="gioHen" />
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <span className="text-[red] mr-2">*</span>
                    <h4 className=" mr-4 text-[20px] min-w-[150px]">Mô tả</h4>
                    <div>
                      <Field
                        placeholder="Mô tả"
                        className="px-4 py-1 text-[20px]"
                        name="ghiChu"
                        value={values.ghiChu}
                      />
                      <div className="text-[red]">
                        <ErrorMessage name="ghiChu" />
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <span className="text-[red] mr-2">*</span>
                    <h4 className=" mr-4 text-[20px] min-w-[150px]">Địa chỉ</h4>
                    <div>
                      <Field
                        placeholder="Địa chỉ"
                        className="px-4 py-1 text-[20px]"
                        name="diaChi"
                        value={values.diaChi}
                      />
                      <div className="text-[red]">
                        <ErrorMessage name="diaChi" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-8 justify-center mb-4">
                  <Button className={`bg-[#dbeafe]`}>Đăng ký bảo hành</Button>
                </div>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default PolicyRegister
