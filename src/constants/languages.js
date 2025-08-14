// Supported languages configuration for the code editor

export const SupportedLanguages = {
  JAVASCRIPT: 'javascript',
  TYPESCRIPT: 'typescript',
  HTML: 'html',
  CSS: 'css',
  SCSS: 'scss',
  SASS: 'sass',
  LESS: 'less',
  JSON: 'json',
  MARKDOWN: 'markdown',
  PYTHON: 'python',
  JAVA: 'java',
  PHP: 'php',
  CPP: 'cpp',
  C: 'c',
  CSHARP: 'csharp',
  RUBY: 'ruby',
  GO: 'go',
  RUST: 'rust',
  SWIFT: 'swift',
  KOTLIN: 'kotlin',
  SCALA: 'scala',
  R: 'r',
  SQL: 'sql',
  SHELL: 'shell',
  POWERSHELL: 'powershell',
  DOCKERFILE: 'dockerfile',
  YAML: 'yaml',
  XML: 'xml',
  INI: 'ini',
  PROPERTIES: 'properties',
  PLAINTEXT: 'plaintext'
}

export const LanguageCategories = {
  WEB: 'Web Development',
  SYSTEMS: 'Systems Programming',
  SCRIPTING: 'Scripting',
  DATA: 'Data & Configuration',
  MOBILE: 'Mobile Development',
  OTHER: 'Other'
}

export const LanguageInfo = {
  [SupportedLanguages.JAVASCRIPT]: {
    name: 'JavaScript',
    category: LanguageCategories.WEB,
    icon: '🟨',
    extensions: ['.js', '.mjs', '.cjs'],
    hasIntelliSense: true,
    supportsFormatting: true,
    description: 'Dynamic programming language for web development'
  },
  
  [SupportedLanguages.TYPESCRIPT]: {
    name: 'TypeScript',
    category: LanguageCategories.WEB,
    icon: '🔷',
    extensions: ['.ts', '.tsx'],
    hasIntelliSense: true,
    supportsFormatting: true,
    description: 'Typed superset of JavaScript'
  },
  
  [SupportedLanguages.HTML]: {
    name: 'HTML',
    category: LanguageCategories.WEB,
    icon: '🧡',
    extensions: ['.html', '.htm', '.xhtml'],
    hasIntelliSense: true,
    supportsFormatting: true,
    description: 'Hypertext Markup Language for web pages'
  },
  
  [SupportedLanguages.CSS]: {
    name: 'CSS',
    category: LanguageCategories.WEB,
    icon: '🎨',
    extensions: ['.css'],
    hasIntelliSense: true,
    supportsFormatting: true,
    description: 'Cascading Style Sheets for styling web pages'
  },
  
  [SupportedLanguages.SCSS]: {
    name: 'SCSS',
    category: LanguageCategories.WEB,
    icon: '🎨',
    extensions: ['.scss'],
    hasIntelliSense: true,
    supportsFormatting: true,
    description: 'Sassy CSS - CSS with superpowers'
  },
  
  [SupportedLanguages.JSON]: {
    name: 'JSON',
    category: LanguageCategories.DATA,
    icon: '📋',
    extensions: ['.json', '.jsonc'],
    hasIntelliSense: true,
    supportsFormatting: true,
    description: 'JavaScript Object Notation for data exchange'
  },
  
  [SupportedLanguages.MARKDOWN]: {
    name: 'Markdown',
    category: LanguageCategories.OTHER,
    icon: '📝',
    extensions: ['.md', '.markdown', '.mdown', '.mkd'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'Lightweight markup language for formatting text'
  },
  
  [SupportedLanguages.PYTHON]: {
    name: 'Python',
    category: LanguageCategories.SCRIPTING,
    icon: '🐍',
    extensions: ['.py', '.pyw', '.py3', '.pyi'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'High-level programming language for general-purpose programming'
  },
  
  [SupportedLanguages.JAVA]: {
    name: 'Java',
    category: LanguageCategories.SYSTEMS,
    icon: '☕',
    extensions: ['.java'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'Object-oriented programming language'
  },
  
  [SupportedLanguages.PHP]: {
    name: 'PHP',
    category: LanguageCategories.WEB,
    icon: '🐘',
    extensions: ['.php', '.phtml', '.php3', '.php4', '.php5'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'Server-side scripting language for web development'
  },
  
  [SupportedLanguages.CPP]: {
    name: 'C++',
    category: LanguageCategories.SYSTEMS,
    icon: '⚙️',
    extensions: ['.cpp', '.cc', '.cxx', '.c++', '.hpp', '.hh', '.hxx'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'General-purpose programming language'
  },
  
  [SupportedLanguages.C]: {
    name: 'C',
    category: LanguageCategories.SYSTEMS,
    icon: '⚙️',
    extensions: ['.c', '.h'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'Low-level programming language'
  },
  
  [SupportedLanguages.CSHARP]: {
    name: 'C#',
    category: LanguageCategories.SYSTEMS,
    icon: '💜',
    extensions: ['.cs', '.csx'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'Object-oriented programming language from Microsoft'
  },
  
  [SupportedLanguages.GO]: {
    name: 'Go',
    category: LanguageCategories.SYSTEMS,
    icon: '🔵',
    extensions: ['.go'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'Programming language developed by Google'
  },
  
  [SupportedLanguages.RUST]: {
    name: 'Rust',
    category: LanguageCategories.SYSTEMS,
    icon: '🦀',
    extensions: ['.rs'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'Systems programming language focused on safety and performance'
  },
  
  [SupportedLanguages.SWIFT]: {
    name: 'Swift',
    category: LanguageCategories.MOBILE,
    icon: '🧡',
    extensions: ['.swift'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'Programming language for iOS and macOS development'
  },
  
  [SupportedLanguages.SHELL]: {
    name: 'Shell Script',
    category: LanguageCategories.SCRIPTING,
    icon: '💻',
    extensions: ['.sh', '.bash', '.zsh', '.fish'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'Script for Unix-like operating systems'
  },
  
  [SupportedLanguages.YAML]: {
    name: 'YAML',
    category: LanguageCategories.DATA,
    icon: '📄',
    extensions: ['.yml', '.yaml'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'Human-readable data serialization standard'
  },
  
  [SupportedLanguages.XML]: {
    name: 'XML',
    category: LanguageCategories.DATA,
    icon: '📄',
    extensions: ['.xml'],
    hasIntelliSense: false,
    supportsFormatting: true,
    description: 'Extensible Markup Language for data storage and transport'
  },
  
  [SupportedLanguages.SQL]: {
    name: 'SQL',
    category: LanguageCategories.DATA,
    icon: '🗃️',
    extensions: ['.sql'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'Structured Query Language for database management'
  },
  
  [SupportedLanguages.PLAINTEXT]: {
    name: 'Plain Text',
    category: LanguageCategories.OTHER,
    icon: '📄',
    extensions: ['.txt', '.text'],
    hasIntelliSense: false,
    supportsFormatting: false,
    description: 'Plain text file with no special formatting'
  }
}

// Get language info by language ID
export function getLanguageInfo(languageId) {
  return LanguageInfo[languageId] || LanguageInfo[SupportedLanguages.PLAINTEXT]
}

// Get languages by category
export function getLanguagesByCategory(category) {
  return Object.entries(LanguageInfo)
    .filter(([, info]) => info.category === category)
    .map(([id, info]) => ({ id, ...info }))
}

// Get all supported languages
export function getAllLanguages() {
  return Object.entries(LanguageInfo).map(([id, info]) => ({ id, ...info }))
}

// Check if language supports IntelliSense
export function supportsIntelliSense(languageId) {
  const info = getLanguageInfo(languageId)
  return info.hasIntelliSense
}

// Check if language supports formatting
export function supportsFormatting(languageId) {
  const info = getLanguageInfo(languageId)
  return info.supportsFormatting
}

// Get file extensions for a language
export function getExtensionsForLanguage(languageId) {
  const info = getLanguageInfo(languageId)
  return info.extensions || []
}

export default {
  SupportedLanguages,
  LanguageCategories,
  LanguageInfo,
  getLanguageInfo,
  getLanguagesByCategory,
  getAllLanguages,
  supportsIntelliSense,
  supportsFormatting,
  getExtensionsForLanguage
}