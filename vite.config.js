import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    target: 'es2018',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
  },
});
