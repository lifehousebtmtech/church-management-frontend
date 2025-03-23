import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,  // Open the visualization after build
      filename: 'dist/stats.html' // Output file
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: true,
    port: 5178,
    allowedHosts: ['demo.lifehousechurch.in'],
  },
  build: {
    // You can increase this limit to avoid warnings
    chunkSizeWarningLimit: 1000,
    // Or use manual chunks for better code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Add other chunks as needed
        }
      }
    }
  }
})

