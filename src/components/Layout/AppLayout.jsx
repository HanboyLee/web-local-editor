import { useState } from 'react'
import { Layout, message } from 'antd'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'
import CodeEditor from '../Editor/Editor'
import EditorTabs from '../Editor/EditorTabs'
import EditorSettings from '../Editor/EditorSettings'
import useEditor from '../../hooks/useEditor'

const { Content } = Layout

const StyledLayout = styled(Layout)`
  height: 100vh;
  background: ${props => props.theme === 'dark' ? '#1e1e1e' : '#ffffff'};
`

const MainContent = styled(Content)`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme === 'dark' ? '#1e1e1e' : '#ffffff'};
  position: relative;
`

const EditorContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`

const EditorPane = styled.div`
  flex: 1;
  background: ${props => props.theme === 'dark' ? '#1e1e1e' : '#ffffff'};
`

function AppLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [settingsVisible, setSettingsVisible] = useState(false)
  
  const {
    openFiles,
    activeFile,
    settings,
    openFile,
    closeFile,
    updateFileContent,
    saveFile,
    createNewFile,
    updateSettings,
    hasUnsavedChanges,
    setActiveFile
  } = useEditor()


  const handleSidebarToggle = () => {
    console.log('Sidebar toggle clicked, current state:', sidebarCollapsed);
    setSidebarCollapsed(!sidebarCollapsed)
  }

  const handleSettingsClick = () => {
    setSettingsVisible(true)
  }

  const handleNewFile = () => {
    const filename = prompt('Enter filename:')
    if (filename) {
      createNewFile(filename)
      message.success(`Created new file: ${filename}`)
    }
  }

  const handleOpenFile = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.multiple = true
    input.accept = '.js,.ts,.jsx,.tsx,.html,.css,.scss,.sass,.md,.json,.txt,.xml,.sql,.py,.java,.php,.c,.cpp,.cs'
    
    input.onchange = (e) => {
      const files = Array.from(e.target.files)
      files.forEach(file => {
        const reader = new FileReader()
        reader.onload = (event) => {
          const newFile = createNewFile(file.name, event.target.result)
          message.success(`Opened file: ${file.name}`)
        }
        reader.readAsText(file)
      })
    }
    
    input.click()
  }

  const handleSaveFile = () => {
    if (activeFile) {
      saveFile(activeFile.id)
      message.success(`Saved file: ${activeFile.name}`)
    }
  }

  const handleTabChange = (fileId) => {
    setActiveFile(fileId)
  }

  const handleTabClose = (fileId) => {
    closeFile(fileId)
  }

  const handleFileSelect = (fileId) => {
    console.log('handleFileSelect called with fileId:', fileId);
    setActiveFile(fileId)
  }

  const handleEditorChange = (fileId, content) => {
    updateFileContent(fileId, content)
  }

  return (
    <StyledLayout theme={settings.theme}>
      <Header
        theme={settings.theme}
        sidebarCollapsed={sidebarCollapsed}
        onSidebarToggle={handleSidebarToggle}
        onSettingsClick={handleSettingsClick}
        onNewFile={handleNewFile}
        onOpenFile={handleOpenFile}
        onSaveFile={handleSaveFile}
        hasUnsavedChanges={hasUnsavedChanges()}
      />
      
      <Layout>
        <Sidebar
          theme={settings.theme}
          collapsed={sidebarCollapsed}
          openFiles={openFiles}
          activeFile={activeFile}
          onFileSelect={handleFileSelect}
          onNewFile={handleNewFile}
          onOpenFile={handleOpenFile}
          onToggleSidebar={handleSidebarToggle}
        />
        
        <MainContent theme={settings.theme}>
          <EditorContainer>
            <EditorTabs
              openFiles={openFiles}
              activeFile={activeFile}
              onTabChange={handleTabChange}
              onTabClose={handleTabClose}
              theme={settings.theme}
            />
            
            <EditorPane theme={settings.theme}>
              <CodeEditor
                file={activeFile}
                onChange={handleEditorChange}
                theme={settings.theme}
                fontSize={settings.fontSize}
              />
            </EditorPane>
          </EditorContainer>
        </MainContent>
      </Layout>

      <EditorSettings
        visible={settingsVisible}
        onClose={() => setSettingsVisible(false)}
        settings={settings}
        onSettingsChange={updateSettings}
        theme={settings.theme}
      />
    </StyledLayout>
  )
}

export default AppLayout