import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/m245/', // WICHTIG: Hier dein Repository-Name
})
