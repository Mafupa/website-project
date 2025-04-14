import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [tailwindcss()],
  server: {port: 5000},
  build: {
    rollupOptions: {
      input: {
        main: './index.html',         
        contact: './contact.html',  
        privacy: './privacy.html',  
      },
    },
  },
})