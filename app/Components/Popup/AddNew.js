import { Modal } from 'antd'
import styled from 'styled-components'

const UpdateModalStyled = styled(Modal)`
  .ant-modal-title {
    text-align: center;
    margin-top: 24px;
    font-size: 24px;
  }

  .ant-modal-body {
    padding-top: 0;
    scrollbar-width: thin;
    scrollbar-color: #888 transparent;
  }

  .ant-modal-body::-webkit-scrollbar {
    width: 8px;
  }

  .ant-modal-body::-webkit-scrollbar-thumb {
    background-color: #888;
  }

  .ant-modal-body::-webkit-scrollbar-track {
    background-color: transparent;
  }
`

const AddNew = ({ isOpen, setIsOpen, title, children }) => {
  return (
    <UpdateModalStyled
      open={!!isOpen}
      className="w-[50vw]"
      onCancel={() => setIsOpen(false)}
      footer={null}
      centered
      bodyStyle={{
        maxHeight: 'calc(100vh - 80px)',
      }}
      title={title}
    >
      {children}
    </UpdateModalStyled>
  )
}

export default AddNew
