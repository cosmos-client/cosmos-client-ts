const fs = require('fs');

const sources = ['LICENSE', 'package-lock.json', 'package.json', 'README.md'];

for (const source of sources) {
  fs.copyFileSync(source, `dist/${source}`);
}
fs.copyFileSync('src/proto.cjs', `dist/cjs/proto.js`);
fs.copyFileSync('src/proto.d.ts', `dist/cjs/proto.d.ts`);
fs.copyFileSync('src/proto.js', `dist/esm/proto.js`);
fs.copyFileSync('src/proto.d.ts', `dist/esm/proto.d.ts`);
