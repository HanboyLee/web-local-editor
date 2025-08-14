// Theme configuration for styled-components
export const lightTheme = {
  colors: {
    primary: '#1890ff',
    primaryHover: '#40a9ff',
    primaryLight: '#e6f7ff',
    
    background: '#ffffff',
    backgroundSecondary: '#f5f5f5',
    backgroundTertiary: '#fafafa',
    
    text: '#000000',
    textSecondary: '#666666',
    textTertiary: '#999999',
    textInverse: '#ffffff',
    
    border: '#d9d9d9',
    borderLight: '#f0f0f0',
    borderDark: '#bfbfbf',
    
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
    info: '#1890ff',
    
    shadow: 'rgba(0, 0, 0, 0.1)',
    shadowLight: 'rgba(0, 0, 0, 0.05)',
    shadowDark: 'rgba(0, 0, 0, 0.15)',
    
    // Monaco Editor specific
    editorBackground: '#ffffff',
    editorForeground: '#000000',
    editorLineNumbers: '#999999',
    editorSelection: '#add6ff',
    editorCursor: '#000000'
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    fontFamilyMono: '"JetBrains Mono", "Monaco", "Menlo", "Ubuntu Mono", monospace',
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px'
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  
  borderRadius: {
    none: '0',
    sm: '2px',
    base: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    full: '9999px'
  },
  
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070
  },
  
  breakpoints: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px'
  },
  
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '450ms ease'
  }
}

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: '#4096ff',
    primaryHover: '#69b1ff',
    primaryLight: '#1f4662',
    
    background: '#141414',
    backgroundSecondary: '#1f1f1f',
    backgroundTertiary: '#262626',
    
    text: '#ffffff',
    textSecondary: '#d9d9d9',
    textTertiary: '#8c8c8c',
    textInverse: '#000000',
    
    border: '#434343',
    borderLight: '#303030',
    borderDark: '#1f1f1f',
    
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
    info: '#1890ff',
    
    shadow: 'rgba(0, 0, 0, 0.45)',
    shadowLight: 'rgba(0, 0, 0, 0.25)',
    shadowDark: 'rgba(0, 0, 0, 0.65)',
    
    // Monaco Editor specific
    editorBackground: '#1e1e1e',
    editorForeground: '#d4d4d4',
    editorLineNumbers: '#858585',
    editorSelection: '#264f78',
    editorCursor: '#ffffff'
  }
}

// Theme utilities
export const getTheme = (themeName) => {
  switch (themeName) {
    case 'dark':
      return darkTheme
    case 'light':
    default:
      return lightTheme
  }
}

// Media query helpers
export const media = {
  xs: `@media (min-width: ${lightTheme.breakpoints.xs})`,
  sm: `@media (min-width: ${lightTheme.breakpoints.sm})`,
  md: `@media (min-width: ${lightTheme.breakpoints.md})`,
  lg: `@media (min-width: ${lightTheme.breakpoints.lg})`,
  xl: `@media (min-width: ${lightTheme.breakpoints.xl})`,
  xxl: `@media (min-width: ${lightTheme.breakpoints.xxl})`
}

// Common mixins
export const mixins = {
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  
  flexBetween: `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  
  absoluteFill: `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  
  visuallyHidden: `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `,
  
  truncateText: `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  
  scrollbar: (theme) => `
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${theme.colors.backgroundSecondary};
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.border};
      border-radius: ${theme.borderRadius.base};
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.borderDark};
    }
  `
}

export default {
  light: lightTheme,
  dark: darkTheme,
  getTheme,
  media,
  mixins
}