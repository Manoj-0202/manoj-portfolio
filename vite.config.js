import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: { jsx: 'automatic' },
  server: {
    watch: {
      usePolling: true,
      ignored: ['**/node_modules-onedrive-backup/**', '**/.git/**']
    }
  }
})
