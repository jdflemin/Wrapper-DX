/**
 * @description This command runs all Apex tests in the scratch org asynchronously and then outputs a job ID.
 * @method runApexTestsHandler
 * @param {array} argv 
 */
function runApexTestsHandler(argv) {
    let baseCommand = 'sfdx force:apex:test:run';
    const yargs = require('yargs')
        .option('u', {alias: 'targetusername', demandOption: true, desc: 'STRING: A username or alias for the target org. Overrides the default target org.'})
        .option('n', {alias: 'classnames', demandOption: false, desc: 'STRING: Comma-separated list of Apex test class names to run. You can specify only one of classnames, suitenames, or tests.'})
        .option('s', {alias: 'suitenames', demandOption: false, desc: 'STRING: Comma-separated list of Apex test suite names to run. You can only specify one of classnames, suitenames, or tests.'})
        .option('t', {alias: 'tests', demandOption: false, desc: 'STRING: Comma-separated list of Apex test class names or IDs and test methods, if applicable, to run. You can only specify one of classnames, suitenames, or tests.'})
        .option('c', {alias: 'codecoverage', demandOption: false, type: 'boolean', desc: 'FLAG: Retrieves code coverage results.'})
        .option('d', {alias: 'outputdir', demandOption: false, desc: 'DIRECTORY: Directory to store test run files.'})
        .option('l', {alias: 'testlevel', demandOption: false, desc: 'STRING: Specifies which tests to run, using one of these TestLevel enum values: RunLocalTests, RunAllTestsInOrg, RunSpecifiedTestsu.'})
        .option('r', {alias: 'resultformat', demandOption: false, desc: 'STRING: Format to use when displaying test results. If you also specify the --json flag, --json overrides this parameter. Permissible values are: human, tap, junit, json. Default: human.'})
        .option('w', {alias: 'wait', demandOption: false, desc: 'MINUTES: Sets the streaming client socket timeout, in minutes. If the streaming client socket has no contact from the server for a number of minutes, the client exits. Specify a longer wait time if timeouts occur frequently. Default: 6.'})
        .option('y', {alias: 'synchronous', demandOption: false, type: 'boolean', desc: 'FLAG: Runs test methods from a single Apex class synchronously. If you do not specify this flag, tests are run asynchronously.'})
        .option('v', {alias: 'verbose', demandOption: false, type: 'boolean', desc: 'FLAG: Displays Apex test processing details. If JSON format is specified, processing details aren’t displayed.'})
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
    handler: runApexTestsHandler
};