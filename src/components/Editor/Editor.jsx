import { useRef, useEffect } from 'react'
import Editor from '@monaco-editor/react'

function CodeEditor({ file, onChange, theme, fontSize }) {
  const editorRef = useRef()
  
  // CRITICAL: Handle editor mount and language setup
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
    
    // PATTERN: Configure IntelliSense and language services
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2020,
      allowNonTsExtensions: true
    })

    // Configure TypeScript language service
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

    // Enable suggestions for all languages
    monaco.languages.registerCompletionItemProvider('javascript', {
      provideCompletionItems: function(model, position) {
        // Basic JavaScript completions
        const suggestions = [
          {
            label: 'console.log',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'console.log(${1:value})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Log output to console'
          },
          {
            label: 'function',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'function ${1:name}(${2:params}) {\n\t${3:// body}\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Function declaration'
          }
        ]
        return { suggestions }
      }
    })
  }
  
  // Helper function to detect language from filename
  const detectLanguage = (filename) => {
    if (!filename) return 'javascript'
    
    const extension = filename.split('.').pop().toLowerCase()
    const languageMap = {
      'js': 'javascript',
      'jsx': 'javascript',
      'ts': 'typescript',
      'tsx': 'typescript',
      'html': 'html',
      'htm': 'html',
      'css': 'css',
      'scss': 'scss',
      'sass': 'sass',
      'less': 'less',
      'md': 'markdown',
      'markdown': 'markdown',
      'json': 'json',
      'xml': 'xml',
      'sql': 'sql',
      'py': 'python',
      'php': 'php',
      'java': 'java',
      'c': 'c',
      'cpp': 'cpp',
      'cs': 'csharp'
    }
    
    return languageMap[extension] || 'plaintext'
  }
  
  // PATTERN: Cleanup on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (editorRef.current) {
        editorRef.current.dispose()
      }
    }
  }, [])

  // Handle content changes
  const handleChange = (value) => {
    if (onChange && file) {
      onChange(file.id, value)
    }
  }
  
  if (!file) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: '#666',
        fontSize: '16px'
      }}>
        Select a file to start editing
      </div>
    )
  }
  
  return (
    <Editor
      height="100%"
      language={detectLanguage(file.name)}
      value={file.content}
      theme={theme === 'dark' ? 'vs-dark' : 'vs'}
      onChange={handleChange}
      onMount={handleEditorDidMount}
      options={{
        fontSize: fontSize || 14,
        minimap: { enabled: true },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        wordWrap: 'on',
        lineNumbers: 'on',
        renderWhitespace: 'selection',
        contextmenu: true,
        mouseWheelZoom: true,
        cursorSmoothCaretAnimation: 'on',
        smoothScrolling: true,
        suggestOnTriggerCharacters: true,
        acceptSuggestionOnEnter: 'on',
        tabCompletion: 'on',
        wordBasedSuggestions: 'matchingDocuments',
        parameterHints: {
          enabled: true
        },
        quickSuggestions: {
          other: true,
          comments: true,
          strings: true
        }
      }}
    />
  )
}

export default CodeEditor