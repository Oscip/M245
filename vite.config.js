import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Ändere dies von '@vitejs/react-swc' zu '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/M245/',
})