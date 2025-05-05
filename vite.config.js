import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   base: "./", 
  plugins: [react()],
   preview: {
  host: '0.0.0.0',
  port: Number(process.env.PORT) || 4173,
  allowedHosts: true
}
})
