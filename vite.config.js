import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5175,        // 👈 Always use port 5175
    strictPort: true,  // 👈 Fail if port 5175 is busy (don’t auto-switch)
    open: true,        // 👈 Auto-open in browser
    proxy: {
      '/api': {
        target: 'https://help-hive-server-side.vercel.app',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
