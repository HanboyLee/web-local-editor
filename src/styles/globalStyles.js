import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset and base styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${props => props.theme.typography.fontSize.base};
    line-height: ${props => props.theme.typography.lineHeight.normal};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    height: 100%;
    overflow: hidden; /* Prevent body scroll in editor */
    
    /* Improve text rendering */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  #root {
    height: 100%;
    width:100% ;
    display: flex;
    flex-direction: column;
  }

  /* Focus management for accessibility */
  :focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  /* Improve focus visibility for keyboard users */
  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
  }

  /* Selection styles */
  ::selection {
    background-color: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.text};
  }

  ::-moz-selection {
    background-color: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.text};
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${props => props.theme.typography.fontWeight.semibold};
    line-height: ${props => props.theme.typography.lineHeight.tight};
    color: ${props => props.theme.colors.text};
    margin-bottom: ${props => props.theme.spacing.md};
  }

  h1 { font-size: ${props => props.theme.typography.fontSize.xxl}; }
  h2 { font-size: ${props => props.theme.typography.fontSize.xl}; }
  h3 { font-size: ${props => props.theme.typography.fontSize.lg}; }
  h4 { font-size: ${props => props.theme.typography.fontSize.base}; }
  h5 { font-size: ${props => props.theme.typography.fontSize.sm}; }
  h6 { font-size: ${props => props.theme.typography.fontSize.xs}; }

  p {
    margin-bottom: ${props => props.theme.spacing.md};
    color: ${props => props.theme.colors.textSecondary};
  }

  /* Link styles */
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color ${props => props.theme.transitions.fast};
  }

  a:hover {
    color: ${props => props.theme.colors.primaryHover};
    text-decoration: underline;
  }

  /* Form elements */
  button {
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Code styles */
  code, pre {
    font-family: ${props => props.theme.typography.fontFamilyMono};
    font-size: 0.9em;
  }

  code {
    background-color: ${props => props.theme.colors.backgroundSecondary};
    color: ${props => props.theme.colors.text};
    padding: 2px 4px;
    border-radius: ${props => props.theme.borderRadius.sm};
    border: 1px solid ${props => props.theme.colors.border};
  }

  pre {
    background-color: ${props => props.theme.colors.backgroundSecondary};
    color: ${props => props.theme.colors.text};
    padding: ${props => props.theme.spacing.md};
    border-radius: ${props => props.theme.borderRadius.base};
    border: 1px solid ${props => props.theme.colors.border};
    overflow-x: auto;
    line-height: 1.4;
  }

  pre code {
    background: none;
    border: none;
    padding: 0;
  }

  /* Custom scrollbars */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.backgroundSecondary};
    border-radius: ${props => props.theme.borderRadius.base};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.base};
    transition: background ${props => props.theme.transitions.fast};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.borderDark};
  }

  /* Firefox scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.colors.border} ${props => props.theme.colors.backgroundSecondary};
  }

  /* Utility classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Ant Design customizations */
  .ant-layout {
    background: ${props => props.theme.colors.background} !important;
  }

  .ant-layout-sider {
    background: ${props => props.theme.colors.backgroundSecondary} !important;
  }

  .ant-layout-header {
    background: ${props => props.theme.colors.background} !important;
    border-bottom: 1px solid ${props => props.theme.colors.border} !important;
    padding: 0 !important;
  }

  .ant-layout-content {
    background: ${props => props.theme.colors.background} !important;
  }

  .ant-menu {
    background: ${props => props.theme.colors.backgroundSecondary} !important;
    border-right: 1px solid ${props => props.theme.colors.border} !important;
  }

  .ant-menu-item {
    color: ${props => props.theme.colors.textSecondary} !important;
  }

  .ant-menu-item:hover {
    color: ${props => props.theme.colors.text} !important;
    background-color: ${props => props.theme.colors.backgroundTertiary} !important;
  }

  .ant-menu-item-selected {
    background-color: ${props => props.theme.colors.primaryLight} !important;
    color: ${props => props.theme.colors.primary} !important;
  }

  .ant-tabs {
    color: ${props => props.theme.colors.text} !important;
  }

  .ant-tabs-nav {
    background: ${props => props.theme.colors.backgroundSecondary} !important;
    border-bottom: 1px solid ${props => props.theme.colors.border} !important;
  }

  .ant-tabs-tab {
    color: ${props => props.theme.colors.textSecondary} !important;
  }

  .ant-tabs-tab:hover {
    color: ${props => props.theme.colors.text} !important;
  }

  .ant-tabs-tab-active {
    color: ${props => props.theme.colors.primary} !important;
  }

  .ant-drawer-content {
    background: ${props => props.theme.colors.background} !important;
  }

  .ant-drawer-header {
    background: ${props => props.theme.colors.backgroundSecondary} !important;
    border-bottom: 1px solid ${props => props.theme.colors.border} !important;
  }

  .ant-drawer-title {
    color: ${props => props.theme.colors.text} !important;
  }

  .ant-drawer-close {
    color: ${props => props.theme.colors.textSecondary} !important;
  }

  .ant-drawer-close:hover {
    color: ${props => props.theme.colors.text} !important;
  }

  .ant-typography {
    color: ${props => props.theme.colors.text} !important;
  }

  .ant-typography-title {
    color: ${props => props.theme.colors.text} !important;
  }

  .ant-switch {
    background-color: ${props => props.theme.colors.border} !important;
  }

  .ant-switch-checked {
    background-color: ${props => props.theme.colors.primary} !important;
  }

  .ant-slider-rail {
    background-color: ${props => props.theme.colors.border} !important;
  }

  .ant-slider-track {
    background-color: ${props => props.theme.colors.primary} !important;
  }

  .ant-slider-handle {
    border-color: ${props => props.theme.colors.primary} !important;
  }

  .ant-slider-handle:hover,
  .ant-slider-handle:focus {
    border-color: ${props => props.theme.colors.primaryHover} !important;
    box-shadow: 0 0 0 5px ${props => props.theme.colors.primaryLight} !important;
  }

  .ant-btn {
    border-radius: ${props => props.theme.borderRadius.base} !important;
    font-weight: ${props => props.theme.typography.fontWeight.medium} !important;
    transition: all ${props => props.theme.transitions.fast} !important;
  }

  .ant-btn-primary {
    background-color: ${props => props.theme.colors.primary} !important;
    border-color: ${props => props.theme.colors.primary} !important;
  }

  .ant-btn-primary:hover {
    background-color: ${props => props.theme.colors.primaryHover} !important;
    border-color: ${props => props.theme.colors.primaryHover} !important;
  }

  .ant-input {
    background-color: ${props => props.theme.colors.background} !important;
    border-color: ${props => props.theme.colors.border} !important;
    color: ${props => props.theme.colors.text} !important;
  }

  .ant-input:focus,
  .ant-input-focused {
    border-color: ${props => props.theme.colors.primary} !important;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primaryLight} !important;
  }

  .ant-input::placeholder {
    color: ${props => props.theme.colors.textTertiary} !important;
  }

  .ant-dropdown {
    background: ${props => props.theme.colors.background} !important;
    border: 1px solid ${props => props.theme.colors.border} !important;
    box-shadow: 0 6px 16px -8px ${props => props.theme.colors.shadow} !important;
  }

  .ant-dropdown-menu {
    background: ${props => props.theme.colors.background} !important;
  }

  .ant-dropdown-menu-item {
    color: ${props => props.theme.colors.text} !important;
  }

  .ant-dropdown-menu-item:hover {
    background: ${props => props.theme.colors.backgroundSecondary} !important;
  }

  /* Monaco Editor container */
  .monaco-editor {
    background-color: ${props => props.theme.colors.editorBackground} !important;
  }

  .monaco-editor .margin {
    background-color: ${props => props.theme.colors.editorBackground} !important;
  }

  .monaco-editor-background {
    background-color: ${props => props.theme.colors.editorBackground} !important;
  }

  .monaco-editor .monaco-editor-background {
    background-color: ${props => props.theme.colors.editorBackground} !important;
  }

  /* Animation classes */
  .fade-in {
    animation: fadeIn 0.3s ease-out;
  }

  .slide-in {
    animation: slideIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Media queries for responsive design */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
    
    .ant-layout-sider {
      position: fixed !important;
      z-index: ${props => props.theme.zIndex.fixed} !important;
      height: 100vh !important;
    }
  }

  /* Accessibility improvements */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  @media (prefers-contrast: high) {
    :focus {
      outline-width: 3px;
      outline-offset: 3px;
    }
  }

  /* Print styles */
  @media print {
    * {
      background: white !important;
      color: black !important;
      box-shadow: none !important;
    }
    
    .ant-layout-sider,
    .ant-drawer,
    button:not(.no-print) {
      display: none !important;
    }
  }
`

export default GlobalStyles