import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/raboni-styles/scss/icons/fonts/*',
          dest: 'assets/fonts'
        }
      ]
    })
  ],
  server: {
    port: 5173,
    host: true,
    strictPort: true
  },
  define: {
    'process.env': process.env
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'raboni-styles': path.resolve(__dirname, 'node_modules/raboni-styles')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "raboni-styles/scss/importMixins";`,
      },
    },
  }
})