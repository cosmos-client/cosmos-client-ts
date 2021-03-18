const fs = require("fs");

const sources = ["LICENSE", "package-lock.json", "package.json", "README.md"];

for (const source of sources) {
  fs.copyFileSync(source, `dist/${source}`);
}
fs.copyFileSync("src/proto.js", `dist/proto.js`);
fs.copyFileSync("src/proto.d.ts", `dist/proto.d.ts`);
