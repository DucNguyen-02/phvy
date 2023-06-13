import UserIcon from '@/app/Icons/UserIcon'
import StorageUtil, { STORAGE_KEY } from '@/app/util/storage'
import { Dropdown } from 'antd'
import Image from 'next/image'
import Router from 'next/router'
import React from 'react'

const Header = () => {
  const items = [
    {
      key: '1',
      label: (
        <div
          onClick={() => {
            StorageUtil.remove(STORAGE_KEY.ROLE)
            Router.push('/login')
          }}
        >
          Đăng xuất
        </div>
      ),
    },
  ]

  return (
    <div className="bg-[#f5f5f6] flex items-center justify-between px-8 py-2">
      <Image src={'/images/logo.jpg'} width={150} height={50} />
      <div className="w-[60%]">
        <input type="text" placeholder="Tìm kiếm" className="w-full p-2" />
      </div>
      <div className="person">
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          arrow
        >
          <div className="flex  items-center ">
            <h5 className="text-[#3498db] font-semibold text-[18px] mr-1">
              PhuongVy
            </h5>
            <UserIcon />
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header
