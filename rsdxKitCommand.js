#!/usr/bin/env node
let sfdx = require('./index.js')
    .handler()
    .then(res => projectChecked(res))
    .catch(err => console.log("RSDX KIT ERR: ", err));

function projectChecked(res) {
    if(res) {
        console.log('running rsdx-kit')

        const argv = require('yargs')
        .usage('rsdx <command>')
            .command('')
        .help()
        .argv
    }
}