import { Tabs } from 'antd'
import styled from 'styled-components'
import Home from '../Home'
import Policy from '../Policy'

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
  return (
    <div className="w-full p-4 pt-2 bg-white rounded-2xl">
      <TabStyled
        items={[
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
        ]}
      />
    </div>
  )
}

export default MainBoard
