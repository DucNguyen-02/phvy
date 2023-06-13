import Button from '@/app/Shared/Button'
import AppAPI from '@/app/api'
import { Field, Form, Formik } from 'formik'
import AddNew from '../Popup/AddNew'

const AddNewPolicy = ({ isOpen, setIsOpen, type, fetchData }) => {
  const handleSubmit = async (values, { resetForm }) => {
    await AppAPI.createPolicy(values)
    setIsOpen(false)
    fetchData()
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
          maLoaiSP: '',
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
                name="maLoaiSP"
                placeholder="Loại sản phẩm"
                as="select"
                className="px-4 py-1 text-[20px] w-full border border-2"
              >
                <option disabled value="">
                  --Chọn loại sản phẩm--
                </option>
                {type?.map((item) => (
                  <option value={item.maLoaiSP}>{item.tenLoaiSP}</option>
                ))}
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
