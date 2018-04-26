#!/usr/bin/env node

// ensure we are in a sfdx project first
let exec = require('child_process').exec; 
exec('dir', (err, stdout, stderr) => {
  if (stdout.includes('.forceignore')) {
    followYargs();
  } else {
    console.log('Please navigate to your DX project and try again')
  }
});
  

// console.log(process.platform);


/**
 * @description router for commands after rsdx is called in terminal
 * @method followYargs
 */
function followYargs() {
  const argv = require('yargs')
  .usage('rsdx <command>')
    .command('convert')
    .command('create', 'create command', require('./commandModules/create.js'))
    .command('delete')
    .command('deploy')
    .command('display')
    .command('export')
    .command('generate')
    .command('get')
    .command('import')
    .command('install')
    .command('list', 'use when a list is expected to be returned', require('./commandModules/list.js'))
    .command('login')
    .command('open')
    .command('pull')
    .command('push')
    .command('query')
    .command('report')
    .command('retrieve')
    .command('run')
    .command('set')
    .command('upgrade')
  .help()
  .argv
}
//"preinstall": "npm install --global sfdx-cli",