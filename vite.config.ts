import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: './public',
  plugins: [react(), tsconfigPaths(), svgrPlugin({
    svgrOptions: {
      icon: true,
    }
  })],
});
