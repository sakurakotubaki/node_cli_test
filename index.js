const path = require("path");
const { marked } = require("marked");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { getPackageName } = require("./lib/name");
const { readMarkdownFileSync, writeHtmlFileSync } = require("./lib/file");
const { argv } = yargs(hideBin(process.argv))
  .option("name", {
    description: "CLI名を表示",
    type: "boolean",
  })
  .option("file", {
    description: "Markdownファイルのパス",
    type: "string",
  })
  .help();

if (argv.name) {
  const name = getPackageName();
  console.log(name);
  process.exit(0);
}

if (!argv.file) {
  console.error("--file オプションで Markdown ファイルを指定してください");
  process.exit(1);
}

const markdownStr = readMarkdownFileSync(path.resolve(__dirname, argv.file));
const html = marked(markdownStr);

writeHtmlFileSync(path.resolve(__dirname, "output.html"), html);
