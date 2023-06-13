import { Tabs } from 'antd'
import styled from 'styled-components'
import Home from '../Home'
import Policy from '../Policy'
import PolicyRegister from '../PolicyRegister'
import History from '../History'
import StorageUtil, { STORAGE_KEY } from '@/app/util/storage'
import { useEffect, useState } from 'react'

const TabStyled = styled(Tabs)`
  .ant-tabs-nav::before {
    border-bottom: 1px solid #3e3e3e;
  }
  .ant-tabs-tab .ant-tabs-tab-btn {
    font-weight: 600;
    font-size: 18px;
  }
`

const MainBoard = () => {
  const [role, setRole] = useState('')

  useEffect(() => {
    const currentRole = StorageUtil.get(STORAGE_KEY.ROLE)
    if (currentRole) {
      setRole(currentRole)
    }
  }, [])

  const roleAdmin = [
    {
      key: 'Home',
      label: `Trang chủ`,
      children: <Home />,
    },
    {
      key: 'Policy',
      label: `Cập nhật Chính sách bảo hành`,
      children: <Policy />,
    },
  ]

  const roleUser = [
    {
      key: 'Home',
      label: `Trang chủ`,
      children: <Home />,
    },
    {
      key: 'Policy Register',
      label: `Hỗ trợ`,
      children: <PolicyRegister />,
    },
    {
      key: 'History',
      label: `Lịch sử đăng ký`,
      children: <History />,
    },
  ]

  return (
    <div className="w-full p-4 pt-2 bg-white rounded-2xl">
      <TabStyled
        items={role === 'USER' ? roleUser : role === 'MANAGER' ? roleAdmin : []}
      />
    </div>
  )
}

export default MainBoard
