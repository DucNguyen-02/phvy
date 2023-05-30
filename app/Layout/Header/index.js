import UserIcon from '@/app/Icons/UserIcon'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="bg-[#f5f5f6] flex items-center justify-between px-8 py-2">
      <Image src={'/images/logo.jpg'} width={150} height={50} />
      <div className="w-[60%]">
        <input type="text" placeholder="Tìm kiếm" className="w-full p-2" />
      </div>
      <div className="person">
        <div className="flex flex-col items-center ">
          <UserIcon />
          <h5 className="text-[#3498db] font-semibold text-[18px]">PhuongVy</h5>
        </div>
      </div>
    </div>
  )
}

export default Header
