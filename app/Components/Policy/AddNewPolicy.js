import { Field, Form, Formik, useFormik } from 'formik'
import React from 'react'
import AddNew from '../Popup/AddNew'
import Button from '@/app/Shared/Button'

const AddNewPolicy = ({ isOpen, setIsOpen, data, setData }) => {
  const handleSubmit = (values, { resetForm }) => {
    const arrValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E']
    let hex = '#'

    for (let i = 0; i < 4; i++) {
      const index = Math.floor(Math.random() * arrValues.length)
      hex += arrValues[index]
    }
    setData([...data, { ...values, maCS: hex }])
    setIsOpen(false)
    resetForm()
  }

  return (
    <AddNew
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={'Thêm chính sách bảo hành'}
    >
      <Formik
        enableReinitialize
        initialValues={{
          loaiSP: '',
          xuatXu: '',
          thoiHanBH: 0,
          thoiHanDB: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <div className="mb-3 items-center m-auto">
              <div className="flex">
                <h4 className="mr-1 text-[20px]">Loại sản phẩm</h4>
                <span className="text-[red]">*</span>
              </div>
              <Field
                name="loaiSP"
                placeholder="Loại sản phẩm"
                as="select"
                className="px-4 py-1 text-[20px] w-full border border-2"
              >
                <option disabled value="">
                  --Chọn loại sản phẩm--
                </option>
                <option value="Điều hòa">Điều hòa</option>
                <option value="Tivi">Tivi</option>
                <option value="Tủ lạnh">Tủ lạnh</option>
              </Field>
            </div>
            <div className="mb-3 items-center m-auto">
              <div className="flex">
                <h4 className="mr-1 text-[20px]">Xuất xứ</h4>
                <span className="text-[red]">*</span>
              </div>
              <Field
                name="xuatXu"
                placeholder="Xuất xứ"
                className="px-4 py-1 text-[20px] w-full border border-2"
              />
            </div>{' '}
            <div className="mb-3 items-center m-auto">
              <div className="flex">
                <h4 className="mr-1 text-[20px]">Thời hạn bảo hành (tháng)</h4>
                <span className="text-[red]">*</span>
              </div>
              <Field
                type="number"
                name="thoiHanBH"
                placeholder="Thời hạn bảo hành"
                className="px-4 py-1 text-[20px] w-full border border-2"
              />
            </div>{' '}
            <div className="mb-3 items-center m-auto">
              <div className="flex">
                <h4 className="mr-1 text-[20px]">Thời hạn đặc biệt</h4>
                <span className="text-[red]">*</span>
              </div>
              <Field
                name="thoiHanDB"
                placeholder="Thời hạn đặc biệt"
                type="text"
                className="px-4 py-1 text-[20px] w-full border border-2"
              />
            </div>
            <div className="flex justify-center">
              <Button className="bg-[#2563eb] text-white ">Xác nhận</Button>
            </div>
          </Form>
        )}
      </Formik>
    </AddNew>
  )
}

export default AddNewPolicy
