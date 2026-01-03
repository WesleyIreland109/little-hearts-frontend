// Copy dist/index.html to dist/404.html so GitHub Pages serves the SPA for unknown routes like /enrollment
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('Created 404.html from index.html for GitHub Pages SPA routing');
} else {
  console.error('index.html not found in dist; did you run `vite build`?');
  process.exit(1);
}
