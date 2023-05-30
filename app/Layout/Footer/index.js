import PhoneIcon from '@/app/Icons/PhoneIcon'
import React from 'react'

const Fotoer = () => {
  return (
    <div className="bg-[#10375c] py-8 px-32 text-white">
      <div className="grid grid-cols-3">
        <div>
          <h4 className="mb-8">Về Panasonic Việt Nam</h4>
          <h4>Sơ đô website</h4>
        </div>
        <div>
          <h4 className="mb-8">Đăng ký bảo hành đại lý</h4>
          <h4>Điều khoản sử dụng</h4>
        </div>
        <div>
          <div className="flex items-center mb-3">
            <div className="p-2 rounded-2xl mr-3 bg-[#3498db]">
              <PhoneIcon />
            </div>{' '}
            <span>1800 1593</span>
          </div>

          <div className="flex items-center">
            <div className="p-2 rounded-2xl mr-3 bg-[#3498db]">
              <PhoneIcon />
            </div>{' '}
            <span>Thiết bị Panasonic</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fotoer
