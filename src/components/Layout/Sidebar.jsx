import { Layout, Typography, Button, Space, Empty } from 'antd'
import { 
  FileOutlined, 
  FolderOpenOutlined, 
  FileAddOutlined,
  CodeOutlined
} from '@ant-design/icons'
import styled from 'styled-components'

const { Sider } = Layout
const { Title, Text } = Typography

const StyledSider = styled(Sider).withConfig({
  shouldForwardProp: (prop) => !['theme'].includes(prop),
})`
  background: ${props => props.theme === 'dark' ? '#1f1f1f' : '#f5f5f5'} !important;
  border-right: 1px solid ${props => props.theme === 'dark' ? '#434343' : '#d9d9d9'};
  
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
`

const SidebarHeader = styled.div.withConfig({
  shouldForwardProp: (prop) => !['theme'].includes(prop),
})`
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme === 'dark' ? '#434343' : '#d9d9d9'};
  background: ${props => props.theme === 'dark' ? '#262626' : '#ffffff'};
  
  .sidebar-title {
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'} !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    margin: 0 !important;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`

const FileList = styled.div`
  flex: 1;
  padding: 8px;
  overflow-y: auto;
`

const FileItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !['active', 'modified', 'theme'].includes(prop),
})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  margin: 2px 0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  color: ${props => props.theme === 'dark' ? '#d9d9d9' : '#666666'};
  background: ${props => props.active 
    ? (props.theme === 'dark' ? '#1f4662' : '#e6f7ff')
    : 'transparent'};
  
  &:hover {
    background: ${props => props.active 
      ? (props.theme === 'dark' ? '#2d5a87' : '#bae0ff')
      : (props.theme === 'dark' ? '#303030' : '#f0f0f0')};
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
  }
  
  .file-icon {
    font-size: 14px;
    opacity: 0.8;
    pointer-events: none;
  }
  
  .file-name {
    flex: 1;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
  }
  
  .file-modified {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1890ff;
    opacity: ${props => props.modified ? 1 : 0};
    pointer-events: none;
  }
`

const EmptyState = styled.div.withConfig({
  shouldForwardProp: (prop) => !['theme'].includes(prop),
})`
  padding: 24px 16px;
  text-align: center;
  color: ${props => props.theme === 'dark' ? '#8c8c8c' : '#999999'};
  
  .empty-icon {
    font-size: 32px;
    margin-bottom: 12px;
    opacity: 0.6;
    color: ${props => props.theme === 'dark' ? '#8c8c8c' : '#999999'};
  }
  
  .empty-title {
    font-size: 14px;
    margin-bottom: 8px;
    color: ${props => props.theme === 'dark' ? '#d9d9d9' : '#666666'} !important;
  }
  
  .empty-description {
    font-size: 12px;
    margin-bottom: 16px;
    color: ${props => props.theme === 'dark' ? '#8c8c8c' : '#999999'} !important;
  }
`

const QuickActions = styled.div.withConfig({
  shouldForwardProp: (prop) => !['theme'].includes(prop),
})`
  padding: 16px;
  border-top: 1px solid ${props => props.theme === 'dark' ? '#434343' : '#d9d9d9'};
  background: ${props => props.theme === 'dark' ? '#262626' : '#ffffff'};
`

const QuickActionButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => !['theme'].includes(prop),
})`
  width: 100%;
  margin-bottom: 8px;
  background: transparent;
  border-color: ${props => props.theme === 'dark' ? '#434343' : '#d9d9d9'};
  color: ${props => props.theme === 'dark' ? '#d9d9d9' : '#666666'};
  
  &:hover {
    background: ${props => props.theme === 'dark' ? '#303030' : '#f0f0f0'} !important;
    border-color: ${props => props.theme === 'dark' ? '#4096ff' : '#b3b3b3'} !important;
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'} !important;
  }
  
  &:focus {
    background: ${props => props.theme === 'dark' ? '#303030' : '#f0f0f0'} !important;
    border-color: ${props => props.theme === 'dark' ? '#4096ff' : '#b3b3b3'} !important;
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'} !important;
  }
`

function Sidebar({ 
  theme, 
  collapsed, 
  openFiles, 
  activeFile, 
  onFileSelect,
  onNewFile,
  onOpenFile,
  onToggleSidebar
}) {
  console.log('Sidebar render - collapsed:', collapsed, 'theme:', theme);
  
  const getFileIcon = (filename) => {
    if (!filename) return <FileOutlined />
    
    const extension = filename.split('.').pop().toLowerCase()
    const iconMap = {
      'js': '🟨',
      'jsx': '🔵', 
      'ts': '🔷',
      'tsx': '🔷',
      'html': '🧡',
      'css': '🎨',
      'json': '📋',
      'md': '📝',
      'py': '🐍',
      'java': '☕',
      'php': '🐘',
      'cpp': '⚙️',
      'c': '⚙️'
    }
    
    return iconMap[extension] || <FileOutlined />
  }

  return (
    <StyledSider
      width={260}
      collapsed={collapsed}
      collapsedWidth={48}
      theme={theme}
    >
      {collapsed ? (
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '8px 0',
          gap: '8px'
        }}>
          <div 
            style={{
              width: 32,
              height: 32,
              borderRadius: 4,
              background: theme === 'dark' ? '#303030' : '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: theme === 'dark' ? '#d9d9d9' : '#666666'
            }}
            onClick={onToggleSidebar}
            title="Show Explorer"
          >
            <FolderOpenOutlined />
          </div>
        </div>
      ) : (
        <>
    

      <FileList>
        {openFiles.length === 0 ? (
          <EmptyState theme={theme}>
            <div className="empty-icon">
              <FolderOpenOutlined />
            </div>
            <div className="empty-title">沒有開啟檔案</div>
            <Text className="empty-description">
            建立新檔案或打開現有檔案以開始操作
            </Text>
          </EmptyState>
        ) : (
          <div>
            <Text 
              type="secondary" 
              style={{ 
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: theme === 'dark' ? '#8c8c8c' : '#999999',
                marginBottom: 8,
                display: 'block',
                paddingLeft: 12
              }}
            >
              Open Files ({openFiles.length})
            </Text>
            
            {openFiles.map(file => (
              <FileItem
                key={file.id}
                active={activeFile?.id === file.id}
                modified={file.modified}
                theme={theme}
                onClick={() => {
                  console.log('FileItem clicked:', file.id, file.name);
                  onFileSelect(file.id);
                }}
                title={file.name}
              >
                <span className="file-icon">
                  {getFileIcon(file.name)}
                </span>
                <span className="file-name">
                  {file.name}
                </span>
                <div className="file-modified" />
              </FileItem>
            ))}
          </div>
        )}
      </FileList>

      <QuickActions theme={theme}>
        <QuickActionButton
          size="small"
          icon={<FileAddOutlined />}
          onClick={onNewFile}
          theme={theme}
        >
          新檔案
        </QuickActionButton>
        
        <QuickActionButton
          size="small"
          icon={<FolderOpenOutlined />}
          onClick={onOpenFile}
          theme={theme}
        >
          打開檔案
        </QuickActionButton>
      </QuickActions>
        </>
      )}
    </StyledSider>
  )
}

export default Sidebar