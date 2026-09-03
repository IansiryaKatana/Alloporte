import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  cacheDir: 'node_modules/.vite-dev',
  server: {
    port: 3027,
    watch: {
      ignored: ['**/.netlify/**', '**/.vercel/**'],
    },
  },
  ssr: {
    noExternal: ['gsap', '@gsap/react'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['gsap'],
  },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    nitro(),
    viteReact(),
  ],
})
