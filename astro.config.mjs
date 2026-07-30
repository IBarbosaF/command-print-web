// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://IBarbosaF.github.io',
  base: '/command-print-web',
  vite: {
    plugins: [tailwindcss()]
  }
});