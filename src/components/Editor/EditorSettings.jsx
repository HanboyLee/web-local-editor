import { useState } from 'react'
import { Drawer, Switch, Slider, Typography, Divider, Button, Row, Col, Space } from 'antd'
import { SettingOutlined, SunOutlined, MoonOutlined, FontSizeOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const { Title, Text } = Typography

const StyledDrawer = styled(Drawer)`
  .ant-drawer-content {
    background: ${props => props.theme === 'dark' ? '#1e1e1e' : '#ffffff'};
  }
  
  .ant-drawer-header {
    background: ${props => props.theme === 'dark' ? '#252526' : '#f5f5f5'};
    border-bottom: 1px solid ${props => props.theme === 'dark' ? '#333' : '#d9d9d9'};
    
    .ant-drawer-title {
      color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
    }
  }
  
  .ant-drawer-body {
    background: ${props => props.theme === 'dark' ? '#1e1e1e' : '#ffffff'};
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
  }
`

const SettingsSection = styled.div`
  margin-bottom: 24px;
  
  .section-title {
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'} !important;
    font-weight: 600;
    margin-bottom: 16px;
  }
  
  .setting-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    
    .setting-label {
      color: ${props => props.theme === 'dark' ? '#cccccc' : '#666666'};
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`

const FontSizeSlider = styled(Slider)`
  flex: 1;
  margin-left: 16px;
  
  .ant-slider-rail {
    background: ${props => props.theme === 'dark' ? '#333333' : '#f5f5f5'};
  }
  
  .ant-slider-track {
    background: #1890ff;
  }
  
  .ant-slider-handle {
    border-color: #1890ff;
    &:hover, &:focus {
      border-color: #40a9ff;
      box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.12);
    }
  }
`

const ThemePreview = styled.div`
  width: 40px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme === 'dark' ? '#333' : '#d9d9d9'};
  background: ${props => props.previewTheme === 'dark' 
    ? 'linear-gradient(135deg, #1e1e1e 50%, #252526 50%)' 
    : 'linear-gradient(135deg, #ffffff 50%, #f5f5f5 50%)'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
`

const ResetButton = styled(Button)`
  background: ${props => props.theme === 'dark' ? '#333333' : '#f5f5f5'};
  border-color: ${props => props.theme === 'dark' ? '#555555' : '#d9d9d9'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
  
  &:hover {
    background: ${props => props.theme === 'dark' ? '#404040' : '#e6e6e6'};
    border-color: ${props => props.theme === 'dark' ? '#666666' : '#b3b3b3'};
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
  }
`

function EditorSettings({ visible, onClose, settings, onSettingsChange, theme }) {
  const [tempSettings, setTempSettings] = useState(settings)

  const handleThemeChange = (checked) => {
    const newTheme = checked ? 'dark' : 'light'
    const newSettings = { ...tempSettings, theme: newTheme }
    setTempSettings(newSettings)
    onSettingsChange(newSettings)
  }

  const handleFontSizeChange = (value) => {
    const newSettings = { ...tempSettings, fontSize: value }
    setTempSettings(newSettings)
    onSettingsChange(newSettings)
  }

  const handleReset = () => {
    const defaultSettings = { theme: 'light', fontSize: 14 }
    setTempSettings(defaultSettings)
    onSettingsChange(defaultSettings)
  }

  const fontSizeMarks = {
    10: '10px',
    12: '12px', 
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    24: '24px'
  }

  return (
    <StyledDrawer
      title={
        <Space>
          <SettingOutlined />
          Editor Settings
        </Space>
      }
      placement="right"
      onClose={onClose}
      open={visible}
      width={360}
      theme={theme}
    >
      <SettingsSection theme={theme}>
        <Title level={4} className="section-title">
          Appearance
        </Title>
        
        <div className="setting-item">
          <div className="setting-label">
            {theme === 'dark' ? <MoonOutlined /> : <SunOutlined />}
            <Text style={{ color: theme === 'dark' ? '#cccccc' : '#666666' }}>
              Dark Theme
            </Text>
          </div>
          <Space>
            <ThemePreview previewTheme="light" theme={theme} />
            <Switch
              checked={tempSettings.theme === 'dark'}
              onChange={handleThemeChange}
              size="small"
            />
            <ThemePreview previewTheme="dark" theme={theme} />
          </Space>
        </div>
      </SettingsSection>

      <SettingsSection theme={theme}>
        <Title level={4} className="section-title">
          Editor
        </Title>
        
        <div className="setting-item">
          <div className="setting-label">
            <FontSizeOutlined />
            <Text style={{ color: theme === 'dark' ? '#cccccc' : '#666666' }}>
              Font Size: {tempSettings.fontSize}px
            </Text>
          </div>
        </div>
        
        <FontSizeSlider
          min={10}
          max={24}
          step={1}
          value={tempSettings.fontSize}
          onChange={handleFontSizeChange}
          marks={fontSizeMarks}
          theme={theme}
          tooltip={{
            formatter: value => `${value}px`
          }}
        />
      </SettingsSection>

      <Divider style={{ 
        borderColor: theme === 'dark' ? '#333333' : '#d9d9d9' 
      }} />

      <SettingsSection theme={theme}>
        <Title level={4} className="section-title">
          Advanced
        </Title>
        
        <Row gutter={16}>
          <Col span={24}>
            <ResetButton 
              block 
              onClick={handleReset}
              theme={theme}
            >
              Reset to Default Settings
            </ResetButton>
          </Col>
        </Row>
      </SettingsSection>

      <Divider style={{ 
        borderColor: theme === 'dark' ? '#333333' : '#d9d9d9' 
      }} />

      <SettingsSection theme={theme}>
        <Title level={4} className="section-title">
          About
        </Title>
        
        <Text type="secondary" style={{ 
          fontSize: '12px',
          color: theme === 'dark' ? '#888888' : '#999999'
        }}>
          Web Code Editor v1.0<br />
          Built with React, Monaco Editor, and Ant Design
        </Text>
      </SettingsSection>
    </StyledDrawer>
  )
}

export default EditorSettings