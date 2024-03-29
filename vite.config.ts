import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    react({
      include: '**/*.ts',
    }),
  ],
  resolve: {
    alias: {
      '@data': `${path.resolve(__dirname, './src/data')}`,
      '@models': `${path.resolve(__dirname, './src/models')}`,
      '@redux': `${path.resolve(__dirname, './src/redux')}`,
      '@components': `${path.resolve(__dirname, './src/components')}`,
      '@utils': `${path.resolve(__dirname, './src/utils')}`,
      '@regex': `${path.resolve(__dirname, './src/regex')}`,
    },
  },
  root: __dirname,
});
