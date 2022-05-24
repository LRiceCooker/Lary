const FS = require('fs');
const { execSync, spawnSync } = require('child_process');

const playgroundDirectoryExist = () => {
  try {
    FS.accessSync('./.playground');
    return true;
  } catch (e) {
    return false;
  }
};

const createPlaygroundDirectory = () => {
  console.log('Creating playground directory...');
  FS.mkdirSync('./.playground');
};

const cloneProjectSampleInPlayground = () => {
  console.log('Cloning project sample in playground...');
  execSync('cd ./.playground && git clone https://github.com/RiceCooker-dev/Lary-Scafold.git');
};

const installProjectSampleInPlayground = () => {
  console.log('Installing project sample in playground...');
  execSync('cd ./.playground/Lary-Scafold && yarn');
};

const compileLibrary = () => {
  console.log('Compiling library...');
  execSync('yarn rollup');
};

const loadLibInPlayground = () => {
  console.log('Loading library in playground...');
  execSync(
    'rm -rdf ./.playground/Lary-Scafold/node_modules/lary/dist && cp -r dist ./.playground/Lary-Scafold/node_modules/lary/dist'
  );
};

const generate = () => {
  if (!playgroundDirectoryExist()) {
    createPlaygroundDirectory();
  }
  cloneProjectSampleInPlayground();
  installProjectSampleInPlayground();
};

const run = () => {
  compileLibrary();
  loadLibInPlayground();
  console.log('Running playground, it might be take more than one minute for the first run...');
  execSync('cd ./.playground/Lary-Scafold && yarn web', (error, stdout, stderr) => {
    callback(stdout);
  });
};

module.exports = {
  generate,
  run
};
