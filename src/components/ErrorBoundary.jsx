import React from 'react'
import { Result, Button, Typography, Card, Space } from 'antd'
import { BugOutlined, ReloadOutlined, HomeOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const { Paragraph, Text } = Typography

const ErrorContainer = styled.div`
  padding: ${props => props.theme?.spacing?.xl || '32px'};
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme?.colors?.background || '#ffffff'};
`

const ErrorCard = styled(Card)`
  max-width: 600px;
  width: 100%;
  text-align: center;
  
  .ant-card-body {
    padding: ${props => props.theme?.spacing?.xl || '32px'};
  }
`

const ErrorDetails = styled.div`
  background: ${props => props.theme?.colors?.backgroundSecondary || '#f5f5f5'};
  border: 1px solid ${props => props.theme?.colors?.border || '#d9d9d9'};
  border-radius: ${props => props.theme?.borderRadius?.base || '4px'};
  padding: ${props => props.theme?.spacing?.md || '16px'};
  margin: ${props => props.theme?.spacing?.md || '16px'} 0;
  text-align: left;
  font-family: ${props => props.theme?.typography?.fontFamilyMono || 'monospace'};
  font-size: ${props => props.theme?.typography?.fontSize?.sm || '14px'};
  white-space: pre-wrap;
  overflow-x: auto;
  max-height: 200px;
  overflow-y: auto;
`

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { 
      hasError: true,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // Update state with error details
    this.setState({
      error: error,
      errorInfo: errorInfo
    })

    // Send error to logging service (if configured)
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Report to error tracking service
    this.reportError(error, errorInfo)
  }

  reportError = (error, errorInfo) => {
    // In a real application, you would send this to your error tracking service
    // like Sentry, LogRocket, or Bugsnag
    const errorReport = {
      id: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.props.userId || 'anonymous'
    }

    // For development, just log to console
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Report:', errorReport)
    }

    // In production, send to error tracking service
    // Example: Sentry.captureException(error, { extra: errorReport })
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    })

    if (this.props.onRetry) {
      this.props.onRetry()
    }
  }

  handleReload = () => {
    window.location.reload()
  }

  handleGoHome = () => {
    if (this.props.onGoHome) {
      this.props.onGoHome()
    } else {
      window.location.href = '/'
    }
  }

  copyErrorDetails = () => {
    const errorText = `
Error ID: ${this.state.errorId}
Message: ${this.state.error?.message}
Stack: ${this.state.error?.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
Timestamp: ${new Date().toISOString()}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
    `.trim()

    navigator.clipboard.writeText(errorText).then(() => {
      console.log('Error details copied to clipboard')
    }).catch(err => {
      console.error('Failed to copy error details:', err)
    })
  }

  render() {
    if (this.state.hasError) {
      const { error, errorInfo, errorId } = this.state
      const { fallback: CustomFallback, showDetails = false } = this.props

      // If custom fallback provided, use it
      if (CustomFallback) {
        return (
          <CustomFallback
            error={error}
            errorInfo={errorInfo}
            errorId={errorId}
            onRetry={this.handleRetry}
            onReload={this.handleReload}
          />
        )
      }

      // Default error UI
      return (
        <ErrorContainer theme={this.props.theme}>
          <ErrorCard>
            <Result
              icon={<BugOutlined style={{ color: '#ff4d4f' }} />}
              title="Something went wrong"
              subTitle={
                <div>
                  <Paragraph>
                    We're sorry, but something unexpected happened. 
                    The error has been reported and we'll look into it.
                  </Paragraph>
                  {errorId && (
                    <Paragraph>
                      <Text type="secondary">Error ID: </Text>
                      <Text code>{errorId}</Text>
                    </Paragraph>
                  )}
                </div>
              }
              extra={
                <Space direction="vertical" size="middle">
                  <Space>
                    <Button 
                      type="primary" 
                      icon={<ReloadOutlined />}
                      onClick={this.handleRetry}
                    >
                      Try Again
                    </Button>
                    <Button 
                      icon={<ReloadOutlined />}
                      onClick={this.handleReload}
                    >
                      Reload Page
                    </Button>
                    <Button 
                      icon={<HomeOutlined />}
                      onClick={this.handleGoHome}
                    >
                      Go Home
                    </Button>
                  </Space>

                  {showDetails && error && (
                    <Card 
                      size="small" 
                      title="Error Details" 
                      extra={
                        <Button size="small" onClick={this.copyErrorDetails}>
                          Copy Details
                        </Button>
                      }
                      style={{ textAlign: 'left', maxWidth: '100%' }}
                    >
                      <ErrorDetails theme={this.props.theme}>
                        <strong>Error:</strong> {error.message}
                        {error.stack && (
                          <>
                            <br /><br />
                            <strong>Stack Trace:</strong><br />
                            {error.stack}
                          </>
                        )}
                        {errorInfo?.componentStack && (
                          <>
                            <br /><br />
                            <strong>Component Stack:</strong><br />
                            {errorInfo.componentStack}
                          </>
                        )}
                      </ErrorDetails>
                    </Card>
                  )}
                </Space>
              }
            />
          </ErrorCard>
        </ErrorContainer>
      )
    }

    return this.props.children
  }
}

// Higher-order component for wrapping components with error boundary
export function withErrorBoundary(Component, errorBoundaryProps = {}) {
  const WrappedComponent = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  return WrappedComponent
}

// Hook for error reporting in functional components
export function useErrorHandler() {
  const handleError = React.useCallback((error, errorInfo = {}) => {
    // Log error
    console.error('useErrorHandler:', error, errorInfo)

    // Create error report
    const errorReport = {
      id: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      message: error.message || String(error),
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      ...errorInfo
    }

    // In development, just log
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Report:', errorReport)
    }

    // In production, send to error tracking service
    // Example: Sentry.captureException(error, { extra: errorReport })

    return errorReport
  }, [])

  return handleError
}

// Specific error boundary for Monaco Editor
export function MonacoErrorBoundary({ children, onMonacoError }) {
  const handleMonacoError = (error, errorInfo) => {
    console.error('Monaco Editor Error:', error, errorInfo)
    
    // Check if this is a Monaco-specific error
    const isMonacoError = error.message?.includes('monaco') || 
                         error.stack?.includes('monaco') ||
                         error.message?.includes('editorSimpleWorker')

    if (isMonacoError && onMonacoError) {
      onMonacoError(error, errorInfo)
    }
  }

  const monacoFallback = ({ error, onRetry }) => (
    <ErrorContainer>
      <ErrorCard>
        <Result
          icon={<BugOutlined style={{ color: '#ff4d4f' }} />}
          title="Editor Error"
          subTitle={
            <div>
              <Paragraph>
                The code editor encountered an error and needs to be restarted.
                This might be due to a large file or browser compatibility issue.
              </Paragraph>
              {error?.message?.includes('editorSimpleWorker') && (
                <Paragraph type="warning">
                  <strong>Note:</strong> This appears to be a Monaco Editor worker issue. 
                  Try refreshing the page or using a different browser.
                </Paragraph>
              )}
            </div>
          }
          extra={
            <Space>
              <Button type="primary" icon={<ReloadOutlined />} onClick={onRetry}>
                Restart Editor
              </Button>
              <Button icon={<ReloadOutlined />} onClick={() => window.location.reload()}>
                Reload Page
              </Button>
            </Space>
          }
        />
      </ErrorCard>
    </ErrorContainer>
  )

  return (
    <ErrorBoundary
      fallback={monacoFallback}
      onError={handleMonacoError}
      showDetails={process.env.NODE_ENV === 'development'}
    >
      {children}
    </ErrorBoundary>
  )
}

export default ErrorBoundary