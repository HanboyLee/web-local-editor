import { Tabs, Dropdown, Button } from 'antd'
import { CloseOutlined, DownOutlined, FileOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const StyledTabs = styled(Tabs)`
  &.ant-tabs {
    margin: 0;
    
    .ant-tabs-nav {
      margin: 0;
      background: ${props => props.theme === 'dark' ? '#1e1e1e' : '#f5f5f5'};
      border-bottom: 1px solid ${props => props.theme === 'dark' ? '#333' : '#d9d9d9'};
      
      .ant-tabs-nav-wrap {
        padding: 0 8px;
      }
      
      .ant-tabs-tab {
        border-radius: 0;
        border: none;
        background: transparent;
        margin: 0;
        padding: 8px 12px;
        min-width: 120px;
        max-width: 200px;
        position: relative;
        
        &:hover {
          background: ${props => props.theme === 'dark' ? '#2a2a2a' : '#e6f7ff'};
          
          .tab-close-btn {
            opacity: 1;
          }
        }
        
        &.ant-tabs-tab-active {
          background: ${props => props.theme === 'dark' ? '#252526' : '#ffffff'};
          border-bottom: 2px solid #1890ff;
        }
        
        .ant-tabs-tab-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          font-size: 13px;
          
          .file-name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex: 1;
            text-align: left;
          }
          
          .modified-indicator {
            color: #1890ff;
            margin-left: 4px;
            font-weight: bold;
          }
        }
      }
    }
  }
`

const TabCloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme === 'dark' ? '#ccc' : '#666'};
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  padding: 2px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
    background: ${props => props.theme === 'dark' ? '#333' : '#e6e6e6'};
    border-radius: 2px;
  }
`

const TabOverflowButton = styled(Button)`
  margin-left: 8px;
  border: none;
  background: transparent;
  color: ${props => props.theme === 'dark' ? '#ccc' : '#666'};
  
  &:hover {
    background: ${props => props.theme === 'dark' ? '#2a2a2a' : '#e6f7ff'};
    color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  }
`

function EditorTabs({ openFiles, activeFile, onTabChange, onTabClose, theme }) {
  // Handle tab change
  const handleTabChange = (key) => {
    onTabChange(key)
  }

  // Handle tab close with middle click or close button
  const handleTabClose = (e, fileId) => {
    e.stopPropagation()
    onTabClose(fileId)
  }

  // Get file icon based on extension
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

  // Create dropdown menu items for overflow tabs (if any)
  const createOverflowMenu = () => {
    return {
      items: openFiles.map(file => ({
        key: file.id,
        label: (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>
              {getFileIcon(file.name)} {file.name}
              {file.modified && <span style={{ color: '#1890ff', marginLeft: 4 }}>●</span>}
            </span>
            <CloseOutlined 
              style={{ marginLeft: 8, opacity: 0.6 }}
              onClick={(e) => handleTabClose(e, file.id)}
            />
          </div>
        ),
        onClick: () => onTabChange(file.id)
      }))
    }
  }

  // Create tab items
  const tabItems = openFiles.map(file => ({
    key: file.id,
    label: (
      <div className="ant-tabs-tab-btn">
        <span className="file-name">
          {getFileIcon(file.name)} {file.name}
          {file.modified && <span className="modified-indicator">●</span>}
        </span>
        <TabCloseButton
          className="tab-close-btn"
          theme={theme}
          onClick={(e) => handleTabClose(e, file.id)}
          title="Close file"
        >
          <CloseOutlined style={{ fontSize: 10 }} />
        </TabCloseButton>
      </div>
    ),
    closable: false // We handle closing manually
  }))

  if (openFiles.length === 0) {
    return (
      <div style={{ 
        height: 40, 
        background: theme === 'dark' ? '#1e1e1e' : '#f5f5f5',
        borderBottom: `1px solid ${theme === 'dark' ? '#333' : '#d9d9d9'}`,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 16,
        color: theme === 'dark' ? '#888' : '#666',
        fontSize: 13
      }}>
        No files open
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StyledTabs
        type="card"
        size="small"
        activeKey={activeFile?.id}
        onChange={handleTabChange}
        items={tabItems}
        theme={theme}
        tabBarStyle={{ margin: 0 }}
      />
      
      {/* Overflow dropdown for when there are many tabs */}
      {openFiles.length > 5 && (
        <Dropdown menu={createOverflowMenu()} placement="bottomRight">
          <TabOverflowButton 
            size="small" 
            icon={<DownOutlined />}
            theme={theme}
            title="Show all open files"
          />
        </Dropdown>
      )}
    </div>
  )
}

export default EditorTabs