import * as path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@component/ui": path.resolve(__dirname, "src/components/ui"),
      "@component/svg-icon": path.resolve(__dirname, "src/components/svg-icon"),
    },
  },
});
