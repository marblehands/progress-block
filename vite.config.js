import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/progress-block/',
  plugins: [tsconfigPaths()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
