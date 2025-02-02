import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: { //vitest configuration
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js',
  }
})
