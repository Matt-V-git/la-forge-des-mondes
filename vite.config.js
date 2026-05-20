import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/la-forge-des-mondes/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})