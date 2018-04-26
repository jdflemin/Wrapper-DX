#!/usr/bin/env node

/**
 * @description router for commands after rsdx is called in terminal
 */
const argv = require('yargs')
  // .usage('init <command>')
  //.command('login')
  // way to normalize user input????????
  .command('create', 'create command', require('./commandModules/create.js'))
  .command('delete')
  .command('list')
  .argv
  


/**
 * Will keep for now as reference but will be deleted soon
 */
// const argv = require('yargs')
//   .version()
//   .usage('rsdx <command> [options]')
//   .command(['init [dir]', 'initialize', 'i'], 'Initialize the directory', require('./commandModules/init'))
//   .command('firstName [name]', 'desc of name', require('./commandModules/printName'))
//   .command('get', 'make a get HTTP request', {url : {alias: 'u', default: 'http://yargs.js.org/'}})
//   .example('rsdx init my-project', 'Initialize `my-project` directory with `default` engine')
//   .example('rsdx init my-project --engine turbo', 'Initialize `my-project` directory with `turbo` engine')
//   .demandCommand(1, 'You need at least one command before moving on')
//   .help('h')
//   .alias('h', 'help')
//   .argv;