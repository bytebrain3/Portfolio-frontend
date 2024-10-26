import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    global: {}
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@ui': path.resolve(__dirname, 'src/components/ui'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils' : path.resolve(__dirname , "src/utils"),
      "@admin" : path.resolve(__dirname , "src/pages/Admin"),
      '@page' : path.resolve(__dirname , "src/pages")
    },
  },
})
