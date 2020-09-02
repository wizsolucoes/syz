const { argv } = require("yargs");
const copyfiles = require("copyfiles");
const { exec } = require("child_process");

const sitePath = stripTrailingSlash(argv.sitePath);
const siteAssetsPath = `${sitePath}/src/assets`;

function start() {
  copyMarkdownFiles();
}

function onMarkDownCopied() {
  console.log("INFO: Component documenation copied");
  buildListOfDocs();
}

function onListOfDocsBuilt() {
  console.log("INFO: Component documenation list built");
  copyDists();
}

function onDistsCopied() {
  console.log("INFO: Dist folders copied");
  copyLoaders();
}

function onLoadersCopied() {
  console.log("INFO: Loader folders copied");
  console.log("SUCCESS: Site documentation built.");
}

function copyMarkdownFiles() {
  copyfiles(
    ["packages/components/**/*.story.md", `${siteAssetsPath}/docs`],
    true,
    onMarkDownCopied
  );
}

function buildListOfDocs() {
  exec(
    `ls ${siteAssetsPath}/docs > ${siteAssetsPath}/docs/components-list.txt`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
      } else {
        onListOfDocsBuilt();
      }
    }
  );
}

function copyDists() {
  copyfiles(
    ["packages/components/**/dist/**", `${siteAssetsPath}/libs/syz`],
    { up: 2, exclude: "**/node_modules/**" },
    onDistsCopied
  );
}

function copyLoaders() {
  copyfiles(
    ["packages/components/**/loader/**", `${siteAssetsPath}/libs/syz`],
    { up: 2, exclude: "**/node_modules/**" },
    onLoadersCopied
  );
}

function stripTrailingSlash(path) {
  return path.replace(/\/+$/, "");
}

start();
