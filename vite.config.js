import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for build
    sourcemap: true, // Optional: generate source maps for easier debugging
    rollupOptions: {
      // Optional: customize Rollup options here
      input: {
        main: 'index.html',
        // Add more entry points if needed
      },
    },
  },
  server: {
    host: true,
    strictPort: true,
    port: 8000, // Optional: specify the port for the development server
  },
});
