const fs = require("fs").promises;
const util = require("util");
const readline = require("readline");

const settingsFile = "./settings.json";
const settings = require(settingsFile);

const SRC_PATH = "./src/";
const EXAMLPE_PATH = "./src/example-dir";

// update the root index file to include references to the methods in all existing katas
async function updateIndexFile() {
  const dir = await fs.opendir(SRC_PATH);
  let delcarations = "";
  let moduleExports = "module.exports = {\n";

  for await (const dirent of dir) {
    let variableName = dirent.name.replace(/^\d\d-/, "").replace(/-/g, "_");
    let dirName = dirent.name;

    if (dirName === "example-dir") continue;

    delcarations += `const ${variableName} = require("${SRC_PATH}${dirName}");\n`;
    moduleExports += `${variableName},\n`;
  }

  moduleExports += `};\n`;
  let fileContents = delcarations + "\n\n\n" + moduleExports;

  await fs.writeFile("./index.js", fileContents, "utf-8");
}

function getDirCount() {
  return parseInt(settings.dircount);
}

async function setDirCount(num) {
  settings.dircount = num;

  await fs.writeFile(settingsFile, JSON.stringify(settings), "utf-8");
}

// Create a new directory with index and test files from templates.
// Options to specify directory name and method name in files
async function newDir(dirName, methodName) {
  let prefix = getDirCount() + 1;
  let newDirName = `${prefix}-${dirName ? dirName : "new-dir"}`;
  let newDirPath = `${SRC_PATH}${newDirName}`;

  await fs.mkdir(newDirPath);

  let indexFile = await fs.readFile(`${EXAMLPE_PATH}/index.js`, "utf-8");
  let testFile = await fs.readFile(`${EXAMLPE_PATH}/index.test.js`, "utf-8");

  if (methodName) {
    indexFile = indexFile.replace(/exampleDir/gi, methodName);
    testFile = testFile.replace(/exampleDir/gi, methodName);
  }

  await fs.writeFile(`${newDirPath}/index.js`, indexFile, "utf-8");
  await fs.writeFile(`${newDirPath}/index.test.js`, testFile, "utf-8");

  await setDirCount(prefix);
}

async function handleNewDir() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Prepare readline.question for promisification
  rl.question[util.promisify.custom] = question => {
    return new Promise(resolve => {
      rl.question(question, resolve);
    });
  };

  const dirName = await util.promisify(rl.question)("Directory name: ");
  const methodName = await util.promisify(rl.question)("Method name: ");

  rl.close();

  if (dirName) {
    await newDir(dirName, methodName).catch(console.error);
  }
}

async function handleDirCount() {
  let count = process.argv[3];
  await setDirCount(count);
}

async function main() {
  let proc = process.argv[2];

  switch (proc) {
    case "new-dir":
      await handleNewDir();
      break;
    case "update-imports":
      await updateIndexFile();
      break;
    case "set-dir-count":
      await handleDirCount();
      break;
    default:
      console.log("Invalid argument");

      break;
  }
}

main();
