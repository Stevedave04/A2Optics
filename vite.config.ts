import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// SECURITY NOTE: API keys and secrets should NEVER be exposed to client-side code.
// The previous configuration used vite's 'define' to embed API keys in the client bundle,
// which would make them publicly accessible to anyone viewing the source code.
// If you need to call external APIs, implement a backend proxy server instead.

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
