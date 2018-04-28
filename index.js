#!/usr/bin/env node

const listDir = process.platform === 'win32' ? 'dir' : 'ls -a';

// ensure we are in a sfdx project first
let exec = require('child_process').exec; 
exec(listDir, (err, stdout, stderr) => {
  if (stdout.includes('.forceignore')) {
    followYargs();
  } else {
    console.log('Please navigate to your DX project and try again')
  }
});

/**
 * @description router for commands after rsdx is called in terminal
 * @method followYargs
 */
function followYargs() {
  const argv = require('yargs')
    .usage('rsdx <command>')
      .command('convert')
      .command('create', 'create command', require('./commandModules/create.js'))
      .command('delete', 'Delete command', require('./commandModules/delete.js'))
      .command('deploy')
      .command('display', 'Display command', require('./commandModules/display.js'))
      .command('export', 'Export commands', require('./commandModules/export.js'))
      .command('generate', 'Generate command', require('./commandModules/generate.js'))
      .command('get')
      .command('import', 'Import commands', require('./commandModules/import.js'))
      .command('install', 'Installs a package in the target org.', require('./commandModules/install.js'))
      .command('list', 'use when a list is expected to be returned', require('./commandModules/list.js'))
      .command('login')
      .command('open', 'Open command', require('./commandModules/open.js'))
      .command('pull', 'Pull command', require('./commandModules/pull.js'))
      .command('push', 'Push command', require('./commandModules/push.js'))
      .command('query', 'Query commands', require('./commandModules/query.js'))
      .command('report', 'Report commands', require('./commandModules/test.js'))
      .command('retrieve', 'Retrieve command', require('./commandModules/retrieve.js'))
      .command('run')
      .command('set', 'Set command', require('./commandModules/set.js'))
      .command('upgrade', 'Upgrade commands', require('./commandModules/upgrade.js'))
    .help()
    .argv
}
//"preinstall": "npm install --global sfdx-cli",