import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

// Vite plugin: auto-regenerate sitemap.xml on every build
const sitemapPlugin = {
  name: 'generate-sitemap',
  closeBundle() {
    try {
      execSync('node scripts/generate-sitemap.js', { stdio: 'inherit' });
    } catch (e) {
      console.warn('⚠️  Sitemap generation failed:', (e as Error).message);
    }
  }
};

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    sitemapPlugin,
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
