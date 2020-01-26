const fs = require("fs");

const sources = ["LICENSE", "package-lock.json", "package.json", "README.md"];

for (const source of sources) {
  fs.copyFileSync(source, `dist/${source}`);
}
