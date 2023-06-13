import Button from '@/app/Shared/Button'
import StorageUtil, { STORAGE_KEY } from '@/app/util/storage'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Router from 'next/router'
import '../app/globals.css'
import React, { useState } from 'react'
import * as Yup from 'yup'

const Login = () => {
  const [status, setStatus] = useState('')
  return (
    <Formik
      enableReinitialize
      validationSchema={Yup.object().shape({
        tenTK: Yup.string().required('Không được để trống'),
        matKhau: Yup.string().required('Không được để trống'),
      })}
      initialValues={{
        tenTK: '',
        matKhau: '',
      }}
      onSubmit={async (values) => {
        const res = await axios.post('http://127.0.0.1:3000/login', values)
        if (res?.data?.data?.tenQTC) {
          StorageUtil.set(STORAGE_KEY.ROLE, res.data.data.tenQTC)
          Router.push('/')
        } else {
          setStatus(res.data.message)
        }
      }}
    >
      {({ values }) => (
        <Form>
          <div className="grid grid-cols-2">
            <img src="/images/bg.png" alt="" />
            <div className=" p-12 flex flex-col items-center justify-center">
              <h2 className="text-[48px] text-[#0b2c81] font-semibold mb-12">
                ĐĂNG NHẬP
              </h2>
              <div className="w-[80%] mb-6">
                <h3 className="text-[24px]">Tên tài khoản</h3>
                <Field name="tenTK" className="w-full p-2 bg-[#efefef]" />
                <div className="text-[red] ">
                  <ErrorMessage name="tenTK" />
                </div>
              </div>

              <div className="w-[80%] mb-6">
                <h3 className="text-[24px]">Mật khẩu</h3>
                <Field
                  name="matKhau"
                  type="password"
                  className="w-full p-2 bg-[#efefef]"
                />
                <div className="text-[red] ">
                  <ErrorMessage name="matKhau" />
                  {status && <div>{status}</div>}
                </div>
              </div>

              <div className="flex flex-col w-[80%] items-center text-white">
                <Button className="w-full bg-[#2563eb]">Đăng nhập</Button>
                <Button
                  className="w-full bg-[#dc2626] my-4"
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  Đăng ký
                </Button>
                <p className="text-[red]">Quên mật khấu ?</p>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Login
