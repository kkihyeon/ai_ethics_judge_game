const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const html = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(baseDir, 'style.css'), 'utf8');
const js = fs.readFileSync(path.join(baseDir, 'app.js'), 'utf8');

let combined = html;
combined = combined.replace(/<link\s+rel=["']stylesheet["']\s+href=["']style\.css["']\s*\/?>/i, `<style>\n${css}\n</style>`);
combined = combined.replace(/<script\s+src=["']app\.js["']><\/script>/i, `<script>\n${js}\n</script>`);

fs.writeFileSync(path.join(baseDir, 'digital_ethics.html'), combined, 'utf8');
console.log('Single HTML file (digital_ethics.html) successfully created!');
