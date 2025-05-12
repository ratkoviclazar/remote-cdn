// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  resolve: {
    alias: {
      'react': 'https://cdn.skypack.dev/react@18',
      'react-dom': 'https://cdn.skypack.dev/react-dom@18'
    }},
  plugins: [react(), reactRefresh()],
  build: {
    lib: {
      entry: './src/main.js',
      formats: ['es'],
      fileName: 'my-component',
    },
  },
});
