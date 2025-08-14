// Monaco Editor configuration utilities

/**
 * Default Monaco Editor options
 */
export const defaultEditorOptions = {
  fontSize: 14,
  fontFamily: '"JetBrains Mono", "Monaco", "Menlo", "Ubuntu Mono", monospace',
  fontLigatures: true,
  minimap: { 
    enabled: true,
    scale: 1,
    showSlider: 'mouseover'
  },
  scrollBeyondLastLine: false,
  automaticLayout: true,
  wordWrap: 'on',
  lineNumbers: 'on',
  lineNumbersMinChars: 3,
  renderWhitespace: 'selection',
  contextmenu: true,
  mouseWheelZoom: true,
  cursorSmoothCaretAnimation: 'on',
  smoothScrolling: true,
  
  // IntelliSense settings
  suggestOnTriggerCharacters: true,
  acceptSuggestionOnEnter: 'on',
  tabCompletion: 'on',
  wordBasedSuggestions: 'matchingDocuments',
  parameterHints: {
    enabled: true,
    cycle: true
  },
  quickSuggestions: {
    other: true,
    comments: true,
    strings: true
  },
  
  // Folding
  folding: true,
  foldingStrategy: 'indentation',
  showFoldingControls: 'mouseover',
  
  // Selection
  selectOnLineNumbers: true,
  roundedSelection: true,
  multiCursorModifier: 'alt',
  
  // Scrolling
  scrollbar: {
    verticalScrollbarSize: 10,
    horizontalScrollbarSize: 10,
    arrowSize: 11
  },
  
  // Performance
  enableSplitViewResizing: false,
  
  // Accessibility
  accessibilitySupport: 'auto',
  accessibilityPageSize: 10,
  
  // Find widget
  find: {
    seedSearchStringFromSelection: 'selection',
    autoFindInSelection: 'multiline'
  },
  
  // Hover
  hover: {
    enabled: true,
    delay: 300,
    sticky: true
  },
  
  // Links
  links: true,
  
  // Brackets
  matchBrackets: 'always',
  
  // Comments
  comments: {
    insertSpace: true,
    ignoreEmptyLines: true
  }
}

/**
 * Language-specific editor options
 */
export const languageEditorOptions = {
  javascript: {
    ...defaultEditorOptions,
    tabSize: 2,
    insertSpaces: true,
    detectIndentation: true,
    trimAutoWhitespace: true,
    formatOnType: true,
    formatOnPaste: true
  },
  
  typescript: {
    ...defaultEditorOptions,
    tabSize: 2,
    insertSpaces: true,
    detectIndentation: true,
    trimAutoWhitespace: true,
    formatOnType: true,
    formatOnPaste: true
  },
  
  html: {
    ...defaultEditorOptions,
    tabSize: 2,
    insertSpaces: true,
    formatOnType: true,
    formatOnPaste: true,
    autoClosingBrackets: 'always',
    autoClosingQuotes: 'always',
    autoSurround: 'languageDefined'
  },
  
  css: {
    ...defaultEditorOptions,
    tabSize: 2,
    insertSpaces: true,
    formatOnType: true,
    formatOnPaste: true,
    autoClosingBrackets: 'always'
  },
  
  json: {
    ...defaultEditorOptions,
    tabSize: 2,
    insertSpaces: true,
    formatOnType: true,
    formatOnPaste: true,
    autoClosingBrackets: 'always',
    autoClosingQuotes: 'always'
  },
  
  markdown: {
    ...defaultEditorOptions,
    tabSize: 2,
    insertSpaces: true,
    wordWrap: 'on',
    wrappingIndent: 'indent',
    quickSuggestions: false,
    minimap: { enabled: false }
  },
  
  python: {
    ...defaultEditorOptions,
    tabSize: 4,
    insertSpaces: true,
    detectIndentation: true,
    trimAutoWhitespace: true
  },
  
  plaintext: {
    ...defaultEditorOptions,
    wordWrap: 'on',
    quickSuggestions: false,
    parameterHints: { enabled: false },
    suggestOnTriggerCharacters: false,
    acceptSuggestionOnEnter: 'off',
    tabCompletion: 'off',
    minimap: { enabled: false }
  }
}

/**
 * Get editor options for specific language
 * @param {string} language - Monaco language ID
 * @param {Object} customOptions - Custom options to override
 * @returns {Object} Editor options
 */
export function getEditorOptions(language, customOptions = {}) {
  const baseOptions = languageEditorOptions[language] || defaultEditorOptions
  return {
    ...baseOptions,
    ...customOptions
  }
}

/**
 * Theme definitions for Monaco Editor
 */
export const themes = {
  light: {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '008000', fontStyle: 'italic' },
      { token: 'keyword', foreground: '0000ff' },
      { token: 'string', foreground: 'a31515' },
      { token: 'number', foreground: '098658' },
      { token: 'regexp', foreground: 'a31515' },
      { token: 'type', foreground: '267f99' },
      { token: 'class', foreground: '267f99' },
      { token: 'function', foreground: '795e26' },
      { token: 'variable', foreground: '001080' },
      { token: 'constant', foreground: '0070c1' }
    ],
    colors: {
      'editor.foreground': '#000000',
      'editor.background': '#ffffff',
      'editor.selectionBackground': '#add6ff',
      'editor.lineHighlightBackground': '#f5f5f5',
      'editorCursor.foreground': '#000000',
      'editorWhitespace.foreground': '#e3e4e229',
      'editorIndentGuide.background': '#d3d3d3',
      'editorIndentGuide.activeBackground': '#939393',
      'editorLineNumber.foreground': '#999999',
      'editorLineNumber.activeForeground': '#333333'
    }
  },
  
  dark: {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '6a9955', fontStyle: 'italic' },
      { token: 'keyword', foreground: '569cd6' },
      { token: 'string', foreground: 'ce9178' },
      { token: 'number', foreground: 'b5cea8' },
      { token: 'regexp', foreground: 'd16969' },
      { token: 'type', foreground: '4ec9b0' },
      { token: 'class', foreground: '4ec9b0' },
      { token: 'function', foreground: 'dcdcaa' },
      { token: 'variable', foreground: '9cdcfe' },
      { token: 'constant', foreground: '4fc1ff' }
    ],
    colors: {
      'editor.foreground': '#d4d4d4',
      'editor.background': '#1e1e1e',
      'editor.selectionBackground': '#264f78',
      'editor.lineHighlightBackground': '#2a2d2e',
      'editorCursor.foreground': '#ffffff',
      'editorWhitespace.foreground': '#e3e4e229',
      'editorIndentGuide.background': '#404040',
      'editorIndentGuide.activeBackground': '#707070',
      'editorLineNumber.foreground': '#858585',
      'editorLineNumber.activeForeground': '#c6c6c6'
    }
  }
}

/**
 * Configure Monaco Editor themes
 * @param {Object} monaco - Monaco Editor instance
 */
export function configureThemes(monaco) {
  monaco.editor.defineTheme('custom-light', themes.light)
  monaco.editor.defineTheme('custom-dark', themes.dark)
}

/**
 * Keyboard shortcuts configuration
 */
export const keyboardShortcuts = [
  {
    id: 'editor.action.formatDocument',
    key: 'shift+alt+f',
    label: 'Format Document'
  },
  {
    id: 'editor.action.commentLine',
    key: 'ctrl+/',
    label: 'Toggle Line Comment'
  },
  {
    id: 'editor.action.blockComment',
    key: 'shift+alt+a',
    label: 'Toggle Block Comment'
  },
  {
    id: 'editor.action.addSelectionToNextFindMatch',
    key: 'ctrl+d',
    label: 'Add Selection To Next Find Match'
  },
  {
    id: 'editor.action.moveSelectionToPreviousFindMatch',
    key: 'ctrl+k ctrl+d',
    label: 'Move Last Selection To Previous Find Match'
  },
  {
    id: 'editor.action.selectHighlights',
    key: 'ctrl+shift+l',
    label: 'Select All Occurrences'
  },
  {
    id: 'editor.action.duplicateSelection',
    key: 'shift+alt+down',
    label: 'Duplicate Line or Selection'
  },
  {
    id: 'editor.action.moveLinesDownAction',
    key: 'alt+down',
    label: 'Move Line Down'
  },
  {
    id: 'editor.action.moveLinesUpAction',
    key: 'alt+up',
    label: 'Move Line Up'
  },
  {
    id: 'editor.action.copyLinesDownAction',
    key: 'shift+alt+down',
    label: 'Copy Line Down'
  },
  {
    id: 'editor.action.copyLinesUpAction',
    key: 'shift+alt+up',
    label: 'Copy Line Up'
  },
  {
    id: 'editor.action.deleteLines',
    key: 'ctrl+shift+k',
    label: 'Delete Line'
  },
  {
    id: 'editor.action.insertLineAfter',
    key: 'ctrl+enter',
    label: 'Insert Line Below'
  },
  {
    id: 'editor.action.insertLineBefore',
    key: 'ctrl+shift+enter',
    label: 'Insert Line Above'
  },
  {
    id: 'editor.action.jumpToBracket',
    key: 'ctrl+shift+\\',
    label: 'Go to Bracket'
  },
  {
    id: 'editor.action.indentLines',
    key: 'ctrl+]',
    label: 'Indent Line'
  },
  {
    id: 'editor.action.outdentLines',
    key: 'ctrl+[',
    label: 'Outdent Line'
  },
  {
    id: 'editor.action.triggerSuggest',
    key: 'ctrl+space',
    label: 'Trigger Suggestion'
  },
  {
    id: 'editor.action.triggerParameterHints',
    key: 'ctrl+shift+space',
    label: 'Trigger Parameter Hints'
  },
  {
    id: 'editor.action.showHover',
    key: 'ctrl+k ctrl+i',
    label: 'Show Hover'
  }
]

/**
 * Configure custom keyboard shortcuts
 * @param {Object} editor - Monaco Editor instance
 * @param {Function} onSave - Save callback function
 * @param {Function} onNewFile - New file callback function
 * @param {Function} onOpenFile - Open file callback function
 */
export function configureKeyboardShortcuts(editor, { onSave, onNewFile, onOpenFile } = {}) {
  // Save file
  if (onSave) {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, onSave)
  }
  
  // New file
  if (onNewFile) {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyN, onNewFile)
  }
  
  // Open file
  if (onOpenFile) {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyO, onOpenFile)
  }
  
  // Quick file switch (Ctrl+P)
  editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyP, () => {
    // This would open a quick file picker if implemented
    console.log('Quick file picker - not implemented')
  })
  
  // Toggle minimap
  editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyM, () => {
    const currentOptions = editor.getOptions()
    editor.updateOptions({
      minimap: {
        enabled: !currentOptions.get('minimap').enabled
      }
    })
  })
  
  // Toggle word wrap
  editor.addCommand(monaco.KeyMod.Alt | monaco.KeyCode.KeyZ, () => {
    const currentOptions = editor.getOptions()
    const currentWrap = currentOptions.get('wordWrap')
    editor.updateOptions({
      wordWrap: currentWrap === 'on' ? 'off' : 'on'
    })
  })
}

/**
 * Editor performance optimization settings
 */
export const performanceSettings = {
  // For large files (> 1MB)
  largeFile: {
    minimap: { enabled: false },
    wordWrap: 'off',
    folding: false,
    links: false,
    codeLens: false,
    contextmenu: false,
    quickSuggestions: false,
    parameterHints: { enabled: false },
    suggestOnTriggerCharacters: false,
    acceptSuggestionOnEnter: 'off',
    tabCompletion: 'off',
    wordBasedSuggestions: 'off'
  },
  
  // For very large files (> 5MB)
  veryLargeFile: {
    ...performanceSettings?.largeFile,
    lineNumbers: 'off',
    renderWhitespace: 'none',
    renderControlCharacters: false,
    renderIndentGuides: false,
    hover: { enabled: false },
    occurrencesHighlight: false,
    selectionHighlight: false,
    automaticLayout: false
  }
}

/**
 * Get performance-optimized options based on content size
 * @param {string} content - File content
 * @param {Object} baseOptions - Base editor options
 * @returns {Object} Optimized editor options
 */
export function getPerformanceOptimizedOptions(content, baseOptions) {
  const contentSize = new Blob([content]).size
  const oneMB = 1024 * 1024
  const fiveMB = 5 * oneMB
  
  if (contentSize > fiveMB) {
    return {
      ...baseOptions,
      ...performanceSettings.veryLargeFile
    }
  } else if (contentSize > oneMB) {
    return {
      ...baseOptions,
      ...performanceSettings.largeFile
    }
  }
  
  return baseOptions
}

/**
 * Configure editor for specific file type
 * @param {Object} monaco - Monaco Editor instance
 * @param {Object} editor - Editor instance
 * @param {string} language - Language ID
 * @param {string} content - File content
 * @param {Object} userSettings - User preferences
 */
export function configureEditorForFile(monaco, editor, language, content, userSettings = {}) {
  // Get base options for language
  const baseOptions = getEditorOptions(language, {
    fontSize: userSettings.fontSize || 14,
    theme: userSettings.theme === 'dark' ? 'custom-dark' : 'custom-light'
  })
  
  // Apply performance optimizations
  const optimizedOptions = getPerformanceOptimizedOptions(content, baseOptions)
  
  // Update editor options
  editor.updateOptions(optimizedOptions)
  
  // Set theme
  monaco.editor.setTheme(userSettings.theme === 'dark' ? 'custom-dark' : 'custom-light')
}

export default {
  defaultEditorOptions,
  languageEditorOptions,
  getEditorOptions,
  themes,
  configureThemes,
  keyboardShortcuts,
  configureKeyboardShortcuts,
  performanceSettings,
  getPerformanceOptimizedOptions,
  configureEditorForFile
}