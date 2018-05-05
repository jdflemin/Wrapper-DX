/**
 * @description Authorizes a Salesforce org by opening a browser so you can log in through salesforce.com.
 * @method loginSorgHandler
 * @param {array} argv 
 */
function loginSorgHandler(argv) {
    let baseCommand = 'sfdx force:auth:web:login';
    const yargs = require('yargs')
        .option('u', {alias: 'targetusername', demandOption: true, desc: 'STRING: A username or alias for the target org. Overrides the default target org.'})
        .option('i', {alias: 'clientid', demandOption: false, desc: 'STRING: The OAuth client ID (sometimes referred to as the consumer key).'})      
        .option('r', {alias: 'instanceurl', demandOption: false, desc: 'URL: The login URL of the Salesforce instance that the org lives on.'})      
        .option('d', {alias: 'setdefaultdevhubusername', demandOption: false, type: 'boolean', desc: 'FLAG: Sets the authenticated org as the default Dev Hub org for scratch org creation.'})      
        .option('s', {alias: 'setdefaultusername', demandOption: false, type: 'boolean', desc: 'FLAG: Sets the authenticated org as the default username that all commands run against.'})      
        .option('a', {alias: 'setalias', demandOption: false, desc: 'STRING: Sets an alias for the authenticated org.'})
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
    handler: loginSorgHandler
};