#!/usr/bin/env node

// console.log('hello world');

// const args = process.argv;
// console.log(args);

const open = require('open');

const argv = require('yargs')
  .version()
  .usage('rsdx <command> [options]')
  .command(['init [dir]', 'initialize', 'i'], 'Initialize the directory', require('./lib/init'))
  .example('rsdx init my-project', 'Initialize `my-project` directory with `default` engine')
  .example('rsdx init my-project --engine turbo', 'Initialize `my-project` directory with `turbo` engine')
  .command(['docs'], 'Go to the documentation at https://zaiste.net', {}, _ => open('https://zaiste.net'))
  .demandCommand(1, 'You need at least one command before moving on')
  .help('h')
  .alias('h', 'help')
  .epilogue('for more information, find the documentation at https://zaiste.net')
  .argv;


/*
routing logic based on flags
call other modules from here
this acts like a trigger
*/

