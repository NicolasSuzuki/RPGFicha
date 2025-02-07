import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'containers': resolve(__dirname, 'src/containers'),
      'components': resolve(__dirname, 'src/components'),
      'settings': resolve(__dirname, 'src/constants/settings.js'),
      'routes': resolve(__dirname, 'src/routes'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});