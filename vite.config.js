// Vite Configuration for Amma Veedu Multi-page Site Build
import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Dynamically discover all HTML entry points under category/ and products/
function getHtmlEntries() {
  const entries = {
    main: resolve(__dirname, 'index.html')
  };

  const traverse = (dir, prefix) => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const fullPath = resolve(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        const indexHtml = resolve(fullPath, 'index.html');
        if (fs.existsSync(indexHtml)) {
          const key = prefix + '_' + file.replace(/[^a-zA-Z0-9]/g, '_');
          entries[key] = indexHtml;
        }
        traverse(fullPath, prefix + '_' + file);
      }
    });
  };

  traverse(resolve(__dirname, 'products'), 'products');
  traverse(resolve(__dirname, 'category'), 'category');

  return entries;
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: getHtmlEntries()
    }
  }
});
