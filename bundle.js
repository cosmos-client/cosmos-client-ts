const fs = require("fs");

const sources = ["LICENSE", "package-lock.json", "package.json", "README.md"];

for (const source of sources) {
  fs.copyFileSync(source, `dist/${source}`);
}
fs.copyFileSync("src/generated/proto.js", `dist/generated/proto.js`);
fs.copyFileSync("src/generated/proto.d.ts", `dist/generated/proto.d.ts`);
