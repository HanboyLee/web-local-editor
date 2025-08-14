import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ConfigProvider, theme } from 'antd'
import AppLayout from './components/Layout/AppLayout'
import ErrorBoundary from './components/ErrorBoundary'
import GlobalStyles from './styles/globalStyles'
import { getTheme } from './styles/theme'
import useEditor from './hooks/useEditor'

function App() {
  const { settings } = useEditor()
  const appTheme = getTheme(settings.theme)

  // Ant Design theme configuration
  const antdTheme = {
    token: {
      colorPrimary: appTheme.colors.primary,
      colorBgContainer: appTheme.colors.background,
      colorText: appTheme.colors.text,
      colorTextSecondary: appTheme.colors.textSecondary,
      colorBorder: appTheme.colors.border,
      borderRadius: parseInt(appTheme.borderRadius.base),
      fontFamily: appTheme.typography.fontFamily,
      fontSize: parseInt(appTheme.typography.fontSize.base)
    },
    algorithm: settings.theme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
  }

  return (
    <ErrorBoundary>
      <ThemeProvider theme={appTheme}>
        <ConfigProvider theme={antdTheme}>
          <GlobalStyles />
          <AppLayout />
        </ConfigProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
