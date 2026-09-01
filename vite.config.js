import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Tailwind v4 runs entirely through the Vite plugin above, not postcss.
  // An unrelated postcss.config.js/tailwind.config.js (v3-style) sitting in
  // this machine's home directory gets auto-discovered by postcss-load-config
  // otherwise, which conflicts with v4's `@import "tailwindcss"` syntax.
  css: {
    postcss: {
      plugins: [],
    },
  },
})
