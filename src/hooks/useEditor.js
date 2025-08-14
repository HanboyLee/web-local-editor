import { useState, useEffect, useCallback } from 'react'

// PATTERN: Custom hook for editor state management
function useEditor() {
  const [openFiles, setOpenFiles] = useState([])
  const [activeFile, setActiveFile] = useState(null)
  const [settings, setSettings] = useState(() => {
    // PATTERN: Load settings from localStorage
    const saved = localStorage.getItem('editor-settings')
    return saved ? JSON.parse(saved) : { theme: 'light', fontSize: 14 }
  })

  // PATTERN: Persist settings changes
  useEffect(() => {
    localStorage.setItem('editor-settings', JSON.stringify(settings))
  }, [settings])

  // PATTERN: Persist open files to localStorage
  useEffect(() => {
    localStorage.setItem('editor-open-files', JSON.stringify(openFiles))
  }, [openFiles])

  // Load open files on mount
  useEffect(() => {
    const savedFiles = localStorage.getItem('editor-open-files')
    if (savedFiles) {
      try {
        const parsedFiles = JSON.parse(savedFiles)
        if (Array.isArray(parsedFiles) && parsedFiles.length > 0) {
          setOpenFiles(parsedFiles)
          // Set the first file as active if no active file
          if (!activeFile && parsedFiles.length > 0) {
            setActiveFile(parsedFiles[0].id)
          }
        }
      } catch (error) {
        console.warn('Failed to load saved files:', error)
      }
    }
  }, [])

  const openFile = useCallback((file) => {
    // PATTERN: Check if file already open
    const existing = openFiles.find(f => f.id === file.id)
    if (!existing) {
      const newFile = {
        ...file,
        modified: false
      }
      setOpenFiles(prev => [...prev, newFile])
    }
    setActiveFile(file.id)
  }, [openFiles])

  const closeFile = useCallback((fileId) => {
    setOpenFiles(prev => {
      const newFiles = prev.filter(f => f.id !== fileId)
      
      // If closing active file, switch to another file
      if (fileId === activeFile) {
        if (newFiles.length > 0) {
          // Find the file that was after the closed one, or the last one
          const closedIndex = prev.findIndex(f => f.id === fileId)
          const nextFile = newFiles[closedIndex] || newFiles[newFiles.length - 1]
          setActiveFile(nextFile.id)
        } else {
          setActiveFile(null)
        }
      }
      
      return newFiles
    })
  }, [activeFile])

  const updateFileContent = useCallback((fileId, content) => {
    setOpenFiles(prev => prev.map(file => {
      if (file.id === fileId) {
        return {
          ...file,
          content,
          modified: true
        }
      }
      return file
    }))
  }, [])

  const saveFile = useCallback((fileId) => {
    setOpenFiles(prev => prev.map(file => {
      if (file.id === fileId) {
        return {
          ...file,
          modified: false
        }
      }
      return file
    }))
  }, [])

  const saveAllFiles = useCallback(() => {
    setOpenFiles(prev => prev.map(file => ({
      ...file,
      modified: false
    })))
  }, [])

  const updateSettings = useCallback((newSettings) => {
    setSettings(prev => ({
      ...prev,
      ...newSettings
    }))
  }, [])

  const getActiveFile = useCallback(() => {
    return openFiles.find(file => file.id === activeFile)
  }, [openFiles, activeFile])

  const hasUnsavedChanges = useCallback(() => {
    return openFiles.some(file => file.modified)
  }, [openFiles])

  const createNewFile = useCallback((name, content = '', type = 'file') => {
    const newFile = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name,
      content,
      type,
      modified: false
    }
    
    setOpenFiles(prev => [...prev, newFile])
    setActiveFile(newFile.id)
    
    return newFile
  }, [])

  const duplicateFile = useCallback((fileId) => {
    const file = openFiles.find(f => f.id === fileId)
    if (file) {
      const nameParts = file.name.split('.')
      const extension = nameParts.length > 1 ? `.${nameParts.pop()}` : ''
      const baseName = nameParts.join('.')
      const newName = `${baseName}_copy${extension}`
      
      return createNewFile(newName, file.content)
    }
  }, [openFiles, createNewFile])

  const renameFile = useCallback((fileId, newName) => {
    setOpenFiles(prev => prev.map(file => {
      if (file.id === fileId) {
        return {
          ...file,
          name: newName,
          modified: true
        }
      }
      return file
    }))
  }, [])

  return {
    // State
    openFiles,
    activeFile: getActiveFile(),
    settings,
    
    // File operations
    openFile,
    closeFile,
    updateFileContent,
    saveFile,
    saveAllFiles,
    createNewFile,
    duplicateFile,
    renameFile,
    
    // Settings
    updateSettings,
    
    // Utilities
    hasUnsavedChanges,
    setActiveFile
  }
}

export default useEditor