/**
 * @description 
 * @method exportDataTreeHandler
 * @param {array} argv 
 */
function exportDataTreeHandler(argv) {
    let baseCommand = 'sfdx force:data:soql:query';
    const yargs = require('yargs')
        .option('q', {alias: 'query', demandOption: true, desc: 'SOQL to execute'})
        .option('t', {alias: 'usetooltippingapi', demandOption: false, type: 'boolean', desc: 'execute query using tooling API'})
        .option('r', {alias: 'resultformat', demandOption: false,desc: 'format to use for display, json flag overrides this. Options(human, csv, json)'})
        .option('p', {alias: 'perfloglevel', demandOption: false, desc: 'API performance metrics from server'})
        .option('u', {alias: 'targetusername', demandOption: true, desc: 'username or alias of org to run query on'})

        .option('j', {alias: 'json', demandOption: false, type: 'boolean', desc: 'FLAG: Format output as JSON.'})
        .option('l', {alias: 'loglevel', demandOption: false, desc: 'STRING: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. Permissible values are: trace, debug, info, warn, error, fatal. DEFAULT: error.'})

    const options = yargs.getOptions().alias;

    Object.keys(options).map(opt => {
        if (yargs.argv[opt] === true) {
            baseCommand += ` --${options[opt]}`;
        } else if (yargs.argv[opt] != null && typeof yargs.argv[opt] != 'boolean') {
            baseCommand += ` --${options[opt]} ${yargs.argv[opt]}`;
        }
    })

    console.log("RUNNING COMMAND: ", baseCommand);

    let exec = require('child_process').exec; 

    exec(baseCommand, (err, stdout, stderr) => {
      if (err) {
        // err stuff
      } else {
        // not err stuff
      }
      // happen regardless stuff
    });
    
}

// export module
module.exports = {
    handler: exportDataTreeHandler
};