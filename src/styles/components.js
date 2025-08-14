import styled, { css } from 'styled-components'
import { Button, Input, Card, Space, Typography } from 'antd'

// Base component styles that can be reused

// Button variants
export const StyledButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  border-radius: ${props => props.theme.borderRadius.base};
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${props => props.theme.colors.shadowLight};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  ${props => props.variant === 'ghost' && css`
    background: transparent;
    border-color: ${props.theme.colors.border};
    color: ${props.theme.colors.textSecondary};
    
    &:hover {
      background: ${props.theme.colors.backgroundSecondary};
      border-color: ${props.theme.colors.borderDark};
      color: ${props.theme.colors.text};
    }
  `}
  
  ${props => props.variant === 'danger' && css`
    background: ${props.theme.colors.error};
    border-color: ${props.theme.colors.error};
    color: ${props.theme.colors.textInverse};
    
    &:hover {
      background: #ff7875;
      border-color: #ff7875;
    }
  `}
`

// Input components
export const StyledInput = styled(Input)`
  border-radius: ${props => props.theme.borderRadius.base};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  transition: all ${props => props.theme.transitions.fast};
  
  &:focus,
  &.ant-input-focused {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primaryLight};
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.textTertiary};
    font-style: italic;
  }
`

// Card component
export const StyledCard = styled(Card)`
  .ant-card-body {
    padding: ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.background};
    border-radius: ${props => props.theme.borderRadius.lg};
    border: 1px solid ${props => props.theme.colors.border};
    box-shadow: 0 2px 8px ${props => props.theme.colors.shadowLight};
    transition: all ${props => props.theme.transitions.normal};
  }
  
  &:hover {
    box-shadow: 0 4px 16px ${props => props.theme.colors.shadow};
    transform: translateY(-2px);
  }
  
  .ant-card-head {
    background: ${props => props.theme.colors.backgroundSecondary};
    border-bottom: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.lg} ${props => props.theme.borderRadius.lg} 0 0;
  }
  
  .ant-card-head-title {
    color: ${props => props.theme.colors.text};
    font-weight: ${props => props.theme.typography.fontWeight.semibold};
  }
`

// Layout components
export const FlexContainer = styled.div`
  display: flex;
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'flex-start'};
  gap: ${props => props.gap || props.theme.spacing.md};
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  ${props => props.fullHeight && css`
    height: 100%;
  `}
  
  ${props => props.center && css`
    align-items: center;
    justify-content: center;
  `}
  
  ${props => props.between && css`
    justify-content: space-between;
  `}
`

export const GridContainer = styled.div`
  display: grid;
  gap: ${props => props.gap || props.theme.spacing.md};
  grid-template-columns: ${props => props.columns || '1fr'};
  grid-template-rows: ${props => props.rows || 'auto'};
  
  ${props => props.responsive && css`
    @media (max-width: ${props.theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  `}
`

// Typography components
export const StyledTitle = styled(Typography.Title)`
  color: ${props => props.theme.colors.text} !important;
  font-weight: ${props => props.theme.typography.fontWeight.semibold} !important;
  margin-bottom: ${props => props.theme.spacing.md} !important;
  
  ${props => props.gradient && css`
    background: linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.primaryHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`

export const StyledText = styled(Typography.Text)`
  color: ${props => {
    if (props.type === 'secondary') return props.theme.colors.textSecondary;
    if (props.type === 'tertiary') return props.theme.colors.textTertiary;
    if (props.type === 'danger') return props.theme.colors.error;
    if (props.type === 'success') return props.theme.colors.success;
    if (props.type === 'warning') return props.theme.colors.warning;
    return props.theme.colors.text;
  }} !important;
  
  font-size: ${props => {
    if (props.size === 'xs') return props.theme.typography.fontSize.xs;
    if (props.size === 'sm') return props.theme.typography.fontSize.sm;
    if (props.size === 'lg') return props.theme.typography.fontSize.lg;
    if (props.size === 'xl') return props.theme.typography.fontSize.xl;
    return props.theme.typography.fontSize.base;
  }} !important;
  
  ${props => props.mono && css`
    font-family: ${props.theme.typography.fontFamilyMono} !important;
  `}
  
  ${props => props.truncate && css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`

// Icon components
export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size || '20px'};
  height: ${props => props.size || '20px'};
  color: ${props => props.color || props.theme.colors.textSecondary};
  transition: color ${props => props.theme.transitions.fast};
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  ${props => props.clickable && css`
    cursor: pointer;
    border-radius: ${props.theme.borderRadius.base};
    padding: ${props.theme.spacing.xs};
    
    &:hover {
      background: ${props.theme.colors.backgroundSecondary};
      color: ${props.theme.colors.text};
    }
  `}
`

// Loading components
export const LoadingSpinner = styled.div`
  display: inline-block;
  width: ${props => props.size || '20px'};
  height: ${props => props.size || '20px'};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  border-top-color: ${props => props.theme.colors.primary};
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.background}cc;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.theme.zIndex.modal};
  backdrop-filter: blur(4px);
`

// Modal and overlay components
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.theme.zIndex.modalBackdrop};
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease-out;
`

export const ModalContent = styled.div`
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: 0 20px 40px ${props => props.theme.colors.shadowDark};
  max-width: ${props => props.maxWidth || '500px'};
  max-height: 90vh;
  width: 90vw;
  overflow: hidden;
  animation: slideUp 0.3s ease-out;
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`

// Notification components
export const NotificationContainer = styled.div`
  position: fixed;
  top: ${props => props.theme.spacing.lg};
  right: ${props => props.theme.spacing.lg};
  z-index: ${props => props.theme.zIndex.tooltip};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  pointer-events: none;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    top: ${props => props.theme.spacing.md};
    right: ${props => props.theme.spacing.md};
    left: ${props => props.theme.spacing.md};
  }
`

export const NotificationItem = styled.div`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-left: 4px solid ${props => {
    if (props.type === 'success') return props.theme.colors.success;
    if (props.type === 'error') return props.theme.colors.error;
    if (props.type === 'warning') return props.theme.colors.warning;
    return props.theme.colors.info;
  }};
  border-radius: ${props => props.theme.borderRadius.base};
  padding: ${props => props.theme.spacing.md};
  box-shadow: 0 4px 12px ${props => props.theme.colors.shadow};
  pointer-events: auto;
  animation: slideInRight 0.3s ease-out;
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

// Divider component
export const Divider = styled.div`
  height: ${props => props.vertical ? '100%' : '1px'};
  width: ${props => props.vertical ? '1px' : '100%'};
  background: ${props => props.theme.colors.border};
  margin: ${props => props.theme.spacing.md} 0;
  
  ${props => props.vertical && css`
    margin: 0 ${props.theme.spacing.md};
  `}
`

// Tooltip component
export const TooltipContent = styled.div`
  background: ${props => props.theme.colors.backgroundTertiary};
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.base};
  font-size: ${props => props.theme.typography.fontSize.xs};
  box-shadow: 0 4px 12px ${props => props.theme.colors.shadow};
  border: 1px solid ${props => props.theme.colors.border};
  z-index: ${props => props.theme.zIndex.tooltip};
  max-width: 250px;
  word-wrap: break-word;
`

// Badge component
export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => {
    if (props.variant === 'success') return props.theme.colors.success;
    if (props.variant === 'error') return props.theme.colors.error;
    if (props.variant === 'warning') return props.theme.colors.warning;
    if (props.variant === 'secondary') return props.theme.colors.backgroundSecondary;
    return props.theme.colors.primary;
  }};
  color: ${props => props.variant === 'secondary' 
    ? props.theme.colors.text 
    : props.theme.colors.textInverse
  };
  line-height: 1;
`

// Scrollable area
export const ScrollableArea = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: ${props => props.maxHeight || 'none'};
  
  ${props => props.theme.mixins && props.theme.mixins.scrollbar && props.theme.mixins.scrollbar(props.theme)}
  
  /* Fallback scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.backgroundSecondary};
    border-radius: ${props => props.theme.borderRadius.base};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.base};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.borderDark};
  }
`

export default {
  StyledButton,
  StyledInput,
  StyledCard,
  FlexContainer,
  GridContainer,
  StyledTitle,
  StyledText,
  IconWrapper,
  LoadingSpinner,
  LoadingOverlay,
  ModalOverlay,
  ModalContent,
  NotificationContainer,
  NotificationItem,
  Divider,
  TooltipContent,
  Badge,
  ScrollableArea
}