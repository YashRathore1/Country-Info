import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker';
import path from 'path';

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: 
  [
    react(),
    checker({
      typescript: false, // optional, if you want TypeScript checking
      overlay: true,    // error overlay in browser
    }),
  ],
});