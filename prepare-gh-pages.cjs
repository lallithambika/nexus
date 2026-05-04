const fs = require('fs');
const path = require('path');

const distDir = path.join(process.cwd(), 'dist/client');
const indexHtmlPath = path.join(process.cwd(), 'index.html');
const targetPath = path.join(distDir, 'index.html');

if (!fs.existsSync(distDir)) {
  console.error('dist/client directory not found. Run build first.');
  process.exit(1);
}

const assetsDir = path.join(distDir, 'assets');
const files = fs.readdirSync(assetsDir);
const mainJs = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
const mainCss = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

if (!mainJs) {
  console.error('Could not find main JS asset.');
  process.exit(1);
}

let html = fs.readFileSync(indexHtmlPath, 'utf8');

// Replace /src/main.tsx with the built asset path
// We use the base /nexus/ as configured in vite.config.ts
html = html.replace('/src/main.tsx', `/nexus/assets/${mainJs}`);
if (mainCss) {
  html = html.replace('</head>', `    <link rel="stylesheet" href="/nexus/assets/${mainCss}">\n  </head>`);
}

fs.writeFileSync(targetPath, html);
console.log(`Generated ${targetPath} pointing to ${mainJs}`);
