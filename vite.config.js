import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      keep_fnames: true, // Prevent function names (including component names) from being mangled
      keep_classnames: true, // Prevent class names from being mangled
    }
  }
})
