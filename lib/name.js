const path = require("path");
const fs = require("fs");

// 読み込み先を lib 配下ではなくプロジェクトルートの package.json に変更
const packageStr = fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8");
const pkg = JSON.parse(packageStr);

exports.getPackageName = () => {
  return pkg.name;
};
