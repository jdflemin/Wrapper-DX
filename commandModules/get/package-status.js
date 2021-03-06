/**
 * @description Retrieves the status of a package installation request.
 * @method getPackageStatusHandler
 * @param {array} argv 
 */
function getPackageStatusHandler(argv) {
    let baseCommand = 'sfdx force:package:install:get';
    const yargs = require('yargs')
        .option('u', {alias: 'targetusername', demandOption: true, desc: 'STRING: A username or alias for the target org. Overrides the default target org.'})
        .option('i', {alias: 'requestid', demandOption: true, desc: 'ID: The ID of the package install request you want to check.'})      
        .option('j', {alias: 'json', demandOption: false, type: 'boolean', desc: 'FLAG: Format output as JSON.'})
        .option('loglevel', {alias: 'loglevel', demandOption: false, desc: 'STRING: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. Permissible values are: trace, debug, info, warn, error, fatal. DEFAULT: error.'})

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
    handler: getPackageStatusHandler
};