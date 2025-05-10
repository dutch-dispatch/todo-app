/**
 * Vite configuration file for a Vue.js project.
 * Sets up the Vue plugin and configures the development server to run on localhost:3000 with strict port enforcement.
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    host: 'localhost',
    port: 3000,
    strictPort: true,
  },
});