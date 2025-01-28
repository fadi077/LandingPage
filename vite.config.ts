import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Use @tailwindcss/postcss for Tailwind integration
        autoprefixer(), // Ensures compatibility with different browsers
      ],
    },
  },
})
