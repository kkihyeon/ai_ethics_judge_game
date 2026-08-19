const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const html = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(baseDir, 'style.css'), 'utf8');
let js = fs.readFileSync(path.join(baseDir, 'app.js'), 'utf8');

// Base64 이미지 JSON 읽기
const b64JsonPath = path.join(baseDir, 'case_images_base64.json');
if (fs.existsSync(b64JsonPath)) {
  const jsonContent = fs.readFileSync(b64JsonPath, 'utf8').replace(/^\uFEFF/, '');
  const images = JSON.parse(jsonContent);
  const imageVarDecl = `const EMBEDDED_CASE_IMAGES = ${JSON.stringify(images)};\n`;
  
  // app.js 맨 위에 이미지 상수 삽입
  js = js.replace('document.addEventListener(\'DOMContentLoaded\', () => {', `document.addEventListener('DOMContentLoaded', () => {\n  ${imageVarDecl}`);
  
  // 렌더링 시 Base64 이미지를 우선 사용하도록 치환
  js = js.replace(
    '<img src="src/${idx + 1}.case.png"',
    '<img src="${(typeof EMBEDDED_CASE_IMAGES !== \'undefined\' && EMBEDDED_CASE_IMAGES[\'case\' + (idx + 1)]) ? EMBEDDED_CASE_IMAGES[\'case\' + (idx + 1)] : \'src/\' + (idx + 1) + \'.case.png\'}"'
  );
}

let combined = html;
combined = combined.replace(/<link\s+rel=["']stylesheet["']\s+href=["']style\.css["']\s*\/?>/i, `<style>\n${css}\n</style>`);
combined = combined.replace(/<script\s+src=["']app\.js["']><\/script>/i, `<script>\n${js}\n</script>`);

fs.writeFileSync(path.join(baseDir, 'digital_ethics.html'), combined, 'utf8');
console.log('Single Standalone HTML (digital_ethics.html with embedded images) successfully created!');
