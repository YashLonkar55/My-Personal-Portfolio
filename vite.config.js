import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: "/vite-deploy",

  server: {
    host: true, // Allows access from external devices
    port: 5173, // Optional: Ensure the port is correct
  },
})
