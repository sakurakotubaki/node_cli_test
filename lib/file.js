const fs = require("fs");

exports.readMarkdownFileSync = (filePath) => {
  return fs.readFileSync(filePath, "utf8");
};

exports.writeHtmlFileSync = (filePath, html) => {
  fs.writeFileSync(filePath, html, "utf8");
};
