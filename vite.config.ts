import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/widget.tsx'),
      name: 'ChatUIWidget',
      fileName: 'chat-ui-widget',
      formats: ['umd'],
    },
  },
  define: {
    'process': {
      env: {
        NODE_ENV: 'production'
      }
    }
  }
});
