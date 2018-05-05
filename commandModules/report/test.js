/**
 * @description 
 * @method testHandler
 * @param {array} argv 
 */
function testHandler(argv) {
    let baseCommand = 'sfdx force:data:soql:query';
    const yargs = require('yargs')
        .option('i', {alias: 'testrunid', demandOption: true, desc: 'Id of test run'})
        .option('c', {alias: 'codecoverage', demandOption: false, type: 'boolean', desc: 'FLAG: get code coverage results'})
        .option('d', {alias: 'outputdir', demandOption: false, desc: 'output directory'})
        .option('r', {alias: 'resultformat', demandOption: false, desc: 'format of results (human, tap, junit, json) json flag overrides this'})
        .option('w', {alias: 'wait', demandOption: false, desc: 'number of minutes before timeout'})
        .option('u', {alias: 'targetusername', demandOption: true, desc: 'username or alias for org'})
        .option('v', {alias: 'verbose', demandOption: true, desc: 'displayss test processing details'})
// will v work in our wrapper?
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
    handler: testHandler
};