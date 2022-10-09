import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
    extensions: [".ts", ".js", '.jsx', '.tsx'],
  },
  plugins: [vue()]
})
