import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

const resolvedPath =  path.resolve(__dirname, './src') + '/';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': resolvedPath,
    }
  },
  plugins: [react()],
  server: {
    port: 3002
  }
})
