// Language configuration utilities for Monaco Editor

/**
 * Mapping of file extensions to Monaco Editor language IDs
 */
export const extensionToLanguage = {
  // JavaScript / TypeScript
  'js': 'javascript',
  'jsx': 'javascript',
  'mjs': 'javascript',
  'cjs': 'javascript',
  'ts': 'typescript',
  'tsx': 'typescript',
  
  // Web languages
  'html': 'html',
  'htm': 'html',
  'xhtml': 'html',
  'css': 'css',
  'scss': 'scss',
  'sass': 'sass',
  'less': 'less',
  
  // Data formats
  'json': 'json',
  'jsonc': 'json', // JSON with comments
  'xml': 'xml',
  'yaml': 'yaml',
  'yml': 'yaml',
  'toml': 'ini', // Using ini for TOML
  
  // Documentation
  'md': 'markdown',
  'markdown': 'markdown',
  'mdown': 'markdown',
  'mkd': 'markdown',
  
  // Shell scripts
  'sh': 'shell',
  'bash': 'shell',
  'zsh': 'shell',
  'fish': 'shell',
  'bat': 'bat',
  'cmd': 'bat',
  'ps1': 'powershell',
  
  // Programming languages
  'py': 'python',
  'pyw': 'python',
  'py3': 'python',
  'pyi': 'python',
  
  'java': 'java',
  'class': 'java',
  
  'c': 'c',
  'h': 'c',
  
  'cpp': 'cpp',
  'cc': 'cpp',
  'cxx': 'cpp',
  'c++': 'cpp',
  'hpp': 'cpp',
  'hh': 'cpp',
  'hxx': 'cpp',
  
  'cs': 'csharp',
  'csx': 'csharp',
  
  'php': 'php',
  'phtml': 'php',
  'php3': 'php',
  'php4': 'php',
  'php5': 'php',
  
  'rb': 'ruby',
  'rbw': 'ruby',
  'rake': 'ruby',
  'gemspec': 'ruby',
  
  'go': 'go',
  
  'rs': 'rust',
  
  'swift': 'swift',
  
  'kt': 'kotlin',
  'kts': 'kotlin',
  
  'scala': 'scala',
  'sc': 'scala',
  
  'r': 'r',
  'R': 'r',
  
  'sql': 'sql',
  'mysql': 'mysql',
  'pgsql': 'pgsql',
  
  // Config files
  'dockerfile': 'dockerfile',
  'Dockerfile': 'dockerfile',
  'gitignore': 'ignore',
  'gitattributes': 'ignore',
  'editorconfig': 'ini',
  'ini': 'ini',
  'cfg': 'ini',
  'conf': 'ini',
  'config': 'ini',
  'properties': 'properties',
  
  // Others
  'txt': 'plaintext',
  'text': 'plaintext',
  'log': 'log',
  
  // Web assembly
  'wasm': 'wasm',
  
  // Protocol Buffers
  'proto': 'protobuf'
}

/**
 * Get Monaco Editor language ID from filename
 * @param {string} filename - The filename to analyze
 * @returns {string} Monaco Editor language ID
 */
export function getLanguageFromFilename(filename) {
  if (!filename) return 'plaintext'
  
  // Handle special cases first
  if (filename === 'Dockerfile' || filename.endsWith('Dockerfile')) {
    return 'dockerfile'
  }
  
  if (filename === '.gitignore' || filename === '.gitattributes') {
    return 'ignore'
  }
  
  if (filename === '.editorconfig') {
    return 'ini'
  }
  
  if (filename === 'package.json' || filename === 'tsconfig.json' || filename === 'composer.json') {
    return 'json'
  }
  
  if (filename === 'package-lock.json' || filename === 'yarn.lock') {
    return 'json'
  }
  
  // Extract extension
  const parts = filename.toLowerCase().split('.')
  if (parts.length < 2) {
    return 'plaintext'
  }
  
  const extension = parts[parts.length - 1]
  return extensionToLanguage[extension] || 'plaintext'
}

/**
 * Language configuration for syntax highlighting and IntelliSense
 */
export const languageConfigs = {
  javascript: {
    displayName: 'JavaScript',
    icon: '🟨',
    fileExtensions: ['js', 'jsx', 'mjs', 'cjs'],
    hasIntelliSense: true,
    features: ['syntax', 'completion', 'hover', 'signature', 'definition', 'references']
  },
  
  typescript: {
    displayName: 'TypeScript',
    icon: '🔷',
    fileExtensions: ['ts', 'tsx'],
    hasIntelliSense: true,
    features: ['syntax', 'completion', 'hover', 'signature', 'definition', 'references', 'diagnostics']
  },
  
  html: {
    displayName: 'HTML',
    icon: '🧡',
    fileExtensions: ['html', 'htm', 'xhtml'],
    hasIntelliSense: true,
    features: ['syntax', 'completion', 'hover', 'formatting']
  },
  
  css: {
    displayName: 'CSS',
    icon: '🎨',
    fileExtensions: ['css'],
    hasIntelliSense: true,
    features: ['syntax', 'completion', 'hover', 'validation']
  },
  
  scss: {
    displayName: 'SCSS',
    icon: '🎨',
    fileExtensions: ['scss'],
    hasIntelliSense: true,
    features: ['syntax', 'completion', 'hover', 'validation']
  },
  
  json: {
    displayName: 'JSON',
    icon: '📋',
    fileExtensions: ['json', 'jsonc'],
    hasIntelliSense: true,
    features: ['syntax', 'validation', 'formatting']
  },
  
  markdown: {
    displayName: 'Markdown',
    icon: '📝',
    fileExtensions: ['md', 'markdown', 'mdown', 'mkd'],
    hasIntelliSense: false,
    features: ['syntax', 'preview']
  },
  
  python: {
    displayName: 'Python',
    icon: '🐍',
    fileExtensions: ['py', 'pyw', 'py3', 'pyi'],
    hasIntelliSense: false,
    features: ['syntax', 'basic-completion']
  },
  
  java: {
    displayName: 'Java',
    icon: '☕',
    fileExtensions: ['java'],
    hasIntelliSense: false,
    features: ['syntax', 'basic-completion']
  },
  
  php: {
    displayName: 'PHP',
    icon: '🐘',
    fileExtensions: ['php', 'phtml', 'php3', 'php4', 'php5'],
    hasIntelliSense: false,
    features: ['syntax', 'basic-completion']
  },
  
  cpp: {
    displayName: 'C++',
    icon: '⚙️',
    fileExtensions: ['cpp', 'cc', 'cxx', 'c++', 'hpp', 'hh', 'hxx'],
    hasIntelliSense: false,
    features: ['syntax', 'basic-completion']
  },
  
  c: {
    displayName: 'C',
    icon: '⚙️',
    fileExtensions: ['c', 'h'],
    hasIntelliSense: false,
    features: ['syntax', 'basic-completion']
  },
  
  csharp: {
    displayName: 'C#',
    icon: '💜',
    fileExtensions: ['cs', 'csx'],
    hasIntelliSense: false,
    features: ['syntax', 'basic-completion']
  },
  
  plaintext: {
    displayName: 'Plain Text',
    icon: '📄',
    fileExtensions: ['txt', 'text'],
    hasIntelliSense: false,
    features: []
  }
}

/**
 * Get language configuration
 * @param {string} languageId - Monaco Editor language ID
 * @returns {Object} Language configuration object
 */
export function getLanguageConfig(languageId) {
  return languageConfigs[languageId] || languageConfigs.plaintext
}

/**
 * Get file icon based on language
 * @param {string} filename - The filename
 * @returns {string} Icon emoji or component
 */
export function getFileIcon(filename) {
  const language = getLanguageFromFilename(filename)
  const config = getLanguageConfig(language)
  return config.icon
}

/**
 * Configure Monaco Editor language services
 * @param {Object} monaco - Monaco Editor instance
 */
export function configureLanguageServices(monaco) {
  // JavaScript/TypeScript configuration
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES2020,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    module: monaco.languages.typescript.ModuleKind.CommonJS,
    noEmit: true,
    esModuleInterop: true,
    jsx: monaco.languages.typescript.JsxEmit.React,
    reactNamespace: 'React',
    allowJs: true,
    checkJs: false,
    typeRoots: ['node_modules/@types']
  })

  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES2020,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    module: monaco.languages.typescript.ModuleKind.CommonJS,
    noEmit: true,
    esModuleInterop: true,
    jsx: monaco.languages.typescript.JsxEmit.React,
    reactNamespace: 'React',
    allowJs: true,
    typeRoots: ['node_modules/@types']
  })

  // Configure diagnostics options
  monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
    onlyVisible: false
  })

  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
    onlyVisible: false
  })

  // Add common JavaScript libraries
  const commonLibs = [
    // Console API
    `declare var console: {
      log(...data: any[]): void;
      error(...data: any[]): void;
      warn(...data: any[]): void;
      info(...data: any[]): void;
      debug(...data: any[]): void;
      trace(...data: any[]): void;
      assert(condition?: boolean, ...data: any[]): void;
      clear(): void;
      count(label?: string): void;
      countReset(label?: string): void;
      dir(item?: any): void;
      dirxml(...data: any[]): void;
      group(...data: any[]): void;
      groupCollapsed(...data: any[]): void;
      groupEnd(): void;
      table(tabularData?: any): void;
      time(label?: string): void;
      timeEnd(label?: string): void;
      timeLog(label?: string, ...data: any[]): void;
      timeStamp(label?: string): void;
    };`,
    
    // Common DOM APIs (basic)
    `declare var document: {
      getElementById(elementId: string): HTMLElement | null;
      createElement(tagName: string): HTMLElement;
      querySelector(selectors: string): Element | null;
      querySelectorAll(selectors: string): NodeList;
      addEventListener(type: string, listener: EventListener): void;
      removeEventListener(type: string, listener: EventListener): void;
    };
    
    declare var window: {
      localStorage: Storage;
      sessionStorage: Storage;
      location: Location;
      navigator: Navigator;
      fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
      setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
      clearTimeout(handle?: number): void;
      setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
      clearInterval(handle?: number): void;
    };`,
    
    // Common utility functions
    `declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    declare function clearTimeout(handle?: number): void;
    declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    declare function clearInterval(handle?: number): void;
    declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;`
  ]

  commonLibs.forEach((lib, index) => {
    monaco.languages.typescript.javascriptDefaults.addExtraLib(lib, `lib.common.${index}.d.ts`)
    monaco.languages.typescript.typescriptDefaults.addExtraLib(lib, `lib.common.${index}.d.ts`)
  })

  // CSS custom completions
  monaco.languages.registerCompletionItemProvider('css', {
    provideCompletionItems: (model, position) => {
      const suggestions = [
        {
          label: 'display-flex',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: 'display: flex;\nalign-items: center;\njustify-content: center;',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Flex container with center alignment'
        },
        {
          label: 'grid-center',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: 'display: grid;\nplace-items: center;',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Grid container with center alignment'
        },
        {
          label: 'transition-all',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: 'transition: all 0.3s ease;',
          documentation: 'Smooth transition for all properties'
        }
      ]
      
      return { suggestions }
    }
  })

  // HTML custom completions
  monaco.languages.registerCompletionItemProvider('html', {
    provideCompletionItems: (model, position) => {
      const suggestions = [
        {
          label: 'html5',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: [
            '<!DOCTYPE html>',
            '<html lang="en">',
            '<head>',
            '\t<meta charset="UTF-8">',
            '\t<meta name="viewport" content="width=device-width, initial-scale=1.0">',
            '\t<title>${1:Document}</title>',
            '</head>',
            '<body>',
            '\t${2}',
            '</body>',
            '</html>'
          ].join('\n'),
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'HTML5 boilerplate'
        }
      ]
      
      return { suggestions }
    }
  })

  // JSON schema validation for common files
  const packageJsonSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      version: { type: 'string' },
      description: { type: 'string' },
      main: { type: 'string' },
      scripts: {
        type: 'object',
        additionalProperties: { type: 'string' }
      },
      dependencies: {
        type: 'object',
        additionalProperties: { type: 'string' }
      },
      devDependencies: {
        type: 'object',
        additionalProperties: { type: 'string' }
      }
    }
  }

  monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
    validate: true,
    schemas: [
      {
        uri: 'http://myserver/package-schema.json',
        fileMatch: ['package.json'],
        schema: packageJsonSchema
      }
    ]
  })
}

/**
 * Get supported languages list
 * @returns {Array} Array of language objects
 */
export function getSupportedLanguages() {
  return Object.entries(languageConfigs).map(([id, config]) => ({
    id,
    ...config
  }))
}

/**
 * Check if language supports IntelliSense
 * @param {string} languageId - Monaco Editor language ID
 * @returns {boolean} True if language supports IntelliSense
 */
export function hasIntelliSense(languageId) {
  const config = getLanguageConfig(languageId)
  return config.hasIntelliSense
}

/**
 * Get language features
 * @param {string} languageId - Monaco Editor language ID
 * @returns {Array} Array of supported features
 */
export function getLanguageFeatures(languageId) {
  const config = getLanguageConfig(languageId)
  return config.features || []
}

export default {
  extensionToLanguage,
  getLanguageFromFilename,
  languageConfigs,
  getLanguageConfig,
  getFileIcon,
  configureLanguageServices,
  getSupportedLanguages,
  hasIntelliSense,
  getLanguageFeatures
}