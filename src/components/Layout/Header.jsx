import { Layout, Space, Button, Typography, Dropdown } from 'antd'
import { 
  SettingOutlined, 
  CodeOutlined, 
  SaveOutlined, 
  FolderOpenOutlined,
  FileAddOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined 
} from '@ant-design/icons'
import styled from 'styled-components'

const { Header: AntHeader } = Layout
const { Title } = Typography

const StyledHeader = styled(AntHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: ${props => props.theme === 'dark' ? '#252526' : '#ffffff'} !important;
  border-bottom: 1px solid ${props => props.theme === 'dark' ? '#333333' : '#d9d9d9'};
  height: 48px !important;
  line-height: 48px !important;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  .logo-icon {
    font-size: 20px;
    color: #1890ff;
  }
  
  .logo-text {
    font-size: 16px !important;
    font-weight: 600 !important;
    margin: 0 !important;
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'} !important;
  }
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ActionButton = styled(Button)`
  border: none;
  background: transparent;
  color: ${props => props.theme === 'dark' ? '#cccccc' : '#666666'};
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    background: ${props => props.theme === 'dark' ? '#2a2a2a' : '#f0f0f0'} !important;
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'} !important;
  }
  
  &:focus {
    background: ${props => props.theme === 'dark' ? '#2a2a2a' : '#f0f0f0'} !important;
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'} !important;
  }
`

function Header({ 
  theme, 
  sidebarCollapsed, 
  onSidebarToggle, 
  onSettingsClick,
  onNewFile,
  onOpenFile,
  onSaveFile,
  hasUnsavedChanges 
}) {
  
  const fileMenuItems = {
    items: [
      {
        key: 'new',
        icon: <FileAddOutlined />,
        label: '新檔案',
        onClick: onNewFile
      },
      {
        key: 'open',
        icon: <FolderOpenOutlined />,
        label: '打開檔案',
        onClick: onOpenFile
      },
      {
        type: 'divider'
      },
      {
        key: 'save',
        icon: <SaveOutlined />,
        label: '保存檔案',
        onClick: onSaveFile,
        disabled: !hasUnsavedChanges
      }
    ]
  }

  return (
    <StyledHeader theme={theme}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <ActionButton
          icon={sidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onSidebarToggle}
          theme={theme}
          title={sidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'}
        />
        
        <Logo theme={theme}>
          <CodeOutlined className="logo-icon" />
          <Title level={4} className="logo-text">
            Code Editor
          </Title>
        </Logo>
      </div>

      <HeaderActions>
        <Dropdown menu={fileMenuItems} placement="bottomRight">
          <ActionButton theme={theme}>
            File
          </ActionButton>
        </Dropdown>

        <ActionButton
          icon={<SaveOutlined />}
          onClick={onSaveFile}
          theme={theme}
          title="保存当前档案"
          disabled={!hasUnsavedChanges}
        >
          {hasUnsavedChanges && <span style={{ 
            width: 6, 
            height: 6, 
            borderRadius: '50%', 
            background: '#1890ff', 
            display: 'inline-block',
            marginRight: 4 
          }} />}
        </ActionButton>

        <ActionButton
          icon={<SettingOutlined />}
          onClick={onSettingsClick}
          theme={theme}
          title="Settings"
        />
      </HeaderActions>
    </StyledHeader>
  )
}

export default Header