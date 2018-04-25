#!/usr/bin/env node

// console.log('hello world');

// const args = process.argv;
// console.log(args);

const open = require('open');

const argv = require('yargs')
  .version()
  .usage('rsdx <command> [options]')
  .command(['init [dir]', 'initialize', 'i'], 'Initialize the directory', require('./commandModules/init'))
  .command('firstName [name]', 'desc of name', require('./commandModules/printName'))
  .command('get', 'make a get HTTP request', {url : {alias: 'u', default: 'http://yargs.js.org/'}})
  .example('rsdx init my-project', 'Initialize `my-project` directory with `default` engine')
  .example('rsdx init my-project --engine turbo', 'Initialize `my-project` directory with `turbo` engine')
  .demandCommand(1, 'You need at least one command before moving on')
  .help('h')
  .alias('h', 'help')
  .argv;

  console.log('length: ', argv._.length);
  console.log('argv._: ', argv._);
  console.log('argv.$0: ', argv.$0);
  console.log('argv.verbose: ', argv.verbose);
  console.log('argv: ', argv);

/*
routing logic based on flags
call other modules from here
this acts like a trigger
*/

