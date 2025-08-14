// File operation utilities

/**
 * Generate unique file ID
 * @returns {string} Unique identifier
 */
export function generateFileId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Validate filename
 * @param {string} filename - Filename to validate
 * @returns {Object} Validation result
 */
export function validateFilename(filename) {
  const errors = []
  
  if (!filename || !filename.trim()) {
    errors.push('Filename cannot be empty')
    return { valid: false, errors }
  }
  
  const trimmed = filename.trim()
  
  // Check for invalid characters (Windows + Unix)
  const invalidChars = /[<>:"|?*\x00-\x1F]/
  if (invalidChars.test(trimmed)) {
    errors.push('Filename contains invalid characters')
  }
  
  // Check for reserved names (Windows)
  const reservedNames = /^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(\.|$)/i
  if (reservedNames.test(trimmed)) {
    errors.push('Filename uses a reserved name')
  }
  
  // Check length
  if (trimmed.length > 255) {
    errors.push('Filename is too long (max 255 characters)')
  }
  
  // Check for leading/trailing dots or spaces
  if (trimmed.startsWith('.') && trimmed.length === 1) {
    errors.push('Filename cannot be just a dot')
  }
  
  if (trimmed === '..') {
    errors.push('Filename cannot be ".."')
  }
  
  if (trimmed.endsWith(' ') || trimmed.endsWith('.')) {
    errors.push('Filename cannot end with a space or dot')
  }
  
  return {
    valid: errors.length === 0,
    errors,
    sanitized: trimmed
  }
}

/**
 * Sanitize filename by removing invalid characters
 * @param {string} filename - Filename to sanitize
 * @returns {string} Sanitized filename
 */
export function sanitizeFilename(filename) {
  if (!filename) return 'untitled'
  
  return filename
    .trim()
    // Replace invalid characters with underscores
    .replace(/[<>:"|?*\x00-\x1F]/g, '_')
    // Remove multiple consecutive underscores
    .replace(/_{2,}/g, '_')
    // Remove leading/trailing underscores
    .replace(/^_+|_+$/g, '')
    // Ensure it's not empty
    || 'untitled'
}

/**
 * Extract file extension from filename
 * @param {string} filename - Filename
 * @returns {string} File extension (without dot)
 */
export function getFileExtension(filename) {
  if (!filename) return ''
  
  const parts = filename.split('.')
  return parts.length > 1 ? parts.pop().toLowerCase() : ''
}

/**
 * Get filename without extension
 * @param {string} filename - Filename
 * @returns {string} Filename without extension
 */
export function getFilenameWithoutExtension(filename) {
  if (!filename) return ''
  
  const parts = filename.split('.')
  return parts.length > 1 ? parts.slice(0, -1).join('.') : filename
}

/**
 * Create default content for different file types
 * @param {string} filename - Filename to create content for
 * @returns {string} Default content
 */
export function getDefaultFileContent(filename) {
  const extension = getFileExtension(filename)
  const baseName = getFilenameWithoutExtension(filename)
  
  const contentTemplates = {
    'js': `// ${baseName}
console.log('Hello from ${filename}!')

// Your JavaScript code here
`,
    
    'jsx': `import React from 'react'

function ${toPascalCase(baseName)}() {
  return (
    <div>
      <h1>Hello from ${baseName}!</h1>
      <p>This is a React component.</p>
    </div>
  )
}

export default ${toPascalCase(baseName)}
`,
    
    'ts': `// ${baseName}

interface ${toPascalCase(baseName)}Options {
  // Define your interface here
}

function ${toCamelCase(baseName)}(options: ${toPascalCase(baseName)}Options): void {
  console.log('Hello from ${filename}!')
  // Your TypeScript code here
}

export { ${toCamelCase(baseName)} }
`,
    
    'tsx': `import React from 'react'

interface ${toPascalCase(baseName)}Props {
  // Define your props here
}

const ${toPascalCase(baseName)}: React.FC<${toPascalCase(baseName)}Props> = (props) => {
  return (
    <div>
      <h1>Hello from ${baseName}!</h1>
      <p>This is a TypeScript React component.</p>
    </div>
  )
}

export default ${toPascalCase(baseName)}
`,
    
    'html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${baseName}</title>
</head>
<body>
  <h1>Welcome to ${baseName}</h1>
  <p>Your HTML content goes here.</p>
</body>
</html>
`,
    
    'css': `/* ${baseName} styles */

:root {
  --primary-color: #007bff;
  --text-color: #333;
  --background-color: #fff;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
  margin: 0;
  padding: 0;
}

/* Your CSS styles here */
`,
    
    'scss': `// ${baseName} styles

$primary-color: #007bff;
$text-color: #333;
$background-color: #fff;

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: $text-color;
  background-color: $background-color;
  margin: 0;
  padding: 0;
}

// Your SCSS styles here
`,
    
    'json': `{
  "name": "${baseName}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "MIT"
}
`,
    
    'md': `# ${baseName}

Welcome to the ${baseName} documentation.

## Getting Started

Add your content here.

## Features

- Feature 1
- Feature 2
- Feature 3

## Usage

\`\`\`javascript
// Example code
console.log('Hello, world!')
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
`,
    
    'py': `#!/usr/bin/env python3
"""
${baseName}

Your Python script description here.
"""

def main():
    """Main function."""
    print(f"Hello from {filename}!")
    # Your Python code here

if __name__ == "__main__":
    main()
`,
    
    'java': `public class ${toPascalCase(baseName)} {
    public static void main(String[] args) {
        System.out.println("Hello from ${filename}!");
        // Your Java code here
    }
}
`,
    
    'php': `<?php
/**
 * ${baseName}
 * 
 * Your PHP script description here.
 */

echo "Hello from ${filename}!\\n";

// Your PHP code here
?>
`,
    
    'sql': `-- ${baseName}
-- Your SQL queries here

SELECT 'Hello from ${filename}!' AS message;

-- Example table creation
-- CREATE TABLE example (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
`,
    
    'dockerfile': `# ${baseName}
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
`,
    
    'yml': `# ${baseName}
name: ${baseName}
description: Your YAML configuration

# Your YAML content here
`,
    
    'yaml': `# ${baseName}
name: ${baseName}
description: Your YAML configuration

# Your YAML content here
`
  }
  
  return contentTemplates[extension] || `// ${filename}

Your content goes here.
`
}

/**
 * Convert string to PascalCase
 * @param {string} str - String to convert
 * @returns {string} PascalCase string
 */
function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(' ')
    .filter(word => word.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

/**
 * Convert string to camelCase
 * @param {string} str - String to convert
 * @returns {string} camelCase string
 */
function toCamelCase(str) {
  const pascalCase = toPascalCase(str)
  return pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1)
}

/**
 * Format file size in human readable format
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size
 */
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Get file type category
 * @param {string} filename - Filename
 * @returns {string} File type category
 */
export function getFileTypeCategory(filename) {
  const extension = getFileExtension(filename)
  
  const categories = {
    'code': ['js', 'jsx', 'ts', 'tsx', 'py', 'java', 'c', 'cpp', 'cs', 'php', 'rb', 'go', 'rs', 'swift', 'kt'],
    'web': ['html', 'css', 'scss', 'sass', 'less'],
    'data': ['json', 'xml', 'yaml', 'yml', 'csv', 'tsv'],
    'document': ['md', 'txt', 'doc', 'docx', 'pdf'],
    'image': ['jpg', 'jpeg', 'png', 'gif', 'svg', 'bmp', 'webp'],
    'config': ['ini', 'cfg', 'conf', 'config', 'env', 'dockerfile'],
    'archive': ['zip', 'tar', 'gz', 'rar', '7z']
  }
  
  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(extension)) {
      return category
    }
  }
  
  return 'other'
}

/**
 * Check if file is binary based on extension
 * @param {string} filename - Filename
 * @returns {boolean} True if file is likely binary
 */
export function isBinaryFile(filename) {
  const extension = getFileExtension(filename)
  const binaryExtensions = [
    // Images
    'jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'ico', 'webp', 'tiff', 'tif',
    // Videos
    'mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv',
    // Audio
    'mp3', 'wav', 'ogg', 'flac', 'aac', 'm4a',
    // Archives
    'zip', 'tar', 'gz', 'rar', '7z', 'bz2', 'xz',
    // Executables
    'exe', 'dll', 'so', 'dylib', 'app', 'deb', 'rpm',
    // Documents
    'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx',
    // Fonts
    'ttf', 'otf', 'woff', 'woff2', 'eot'
  ]
  
  return binaryExtensions.includes(extension)
}

/**
 * Generate unique filename if duplicate exists
 * @param {string} filename - Desired filename
 * @param {Array} existingFiles - Array of existing filenames
 * @returns {string} Unique filename
 */
export function generateUniqueFilename(filename, existingFiles) {
  if (!existingFiles.includes(filename)) {
    return filename
  }
  
  const extension = getFileExtension(filename)
  const baseName = getFilenameWithoutExtension(filename)
  
  let counter = 1
  let newFilename
  
  do {
    const suffix = `_${counter}`
    newFilename = extension 
      ? `${baseName}${suffix}.${extension}`
      : `${baseName}${suffix}`
    counter++
  } while (existingFiles.includes(newFilename))
  
  return newFilename
}

export default {
  generateFileId,
  validateFilename,
  sanitizeFilename,
  getFileExtension,
  getFilenameWithoutExtension,
  getDefaultFileContent,
  formatFileSize,
  getFileTypeCategory,
  isBinaryFile,
  generateUniqueFilename
}