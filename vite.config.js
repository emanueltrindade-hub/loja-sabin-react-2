import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permitir acesso externo
    watch: {
      usePolling: true, // Habilitar polling para detectar alterações
    },
  },
})
