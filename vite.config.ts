import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoBase = '/uni-track/'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? repoBase : '/',
  plugins: [react()],
}))
