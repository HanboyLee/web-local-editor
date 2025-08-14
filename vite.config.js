import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configure worker imports for Monaco Editor
  worker: {
    format: 'es'
  },
  optimizeDeps: {
    include: ['@monaco-editor/react']
  },
  // PATTERN: Optimize build for Monaco Editor
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          monaco: ['@monaco-editor/react']
        }
      }
    }
  }
})
