import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['.trycloudflare.com'], // permite todos los subdominios
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  }
})
