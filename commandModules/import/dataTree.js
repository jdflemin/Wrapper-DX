/**
 * @description 
 * @method importDataTreeHandler
 * @param {array} argv 
 */
function importDataTreeHandler(argv) {
    let baseCommand = 'sfdx force:data:tree:import';
    const yargs = require('yargs')
        .option('f', {alias: 'sobjecttreefiles', demandOption: false, desc: 'Comma-delimited, ordered paths of JSON files containing a collection of record trees to insert'})
        .option('p', {alias: 'plan', demandOption: false, desc: 'Path to plan to insert multiple data files that have master-detail relationships'})
        .option('c', {alias: 'contenttype', demandOption: false,desc: 'If the data file extension is not .json, provide the content type'})
        .option('u', {alias: 'targetusername', demandOption: true, desc: 'username or alias for the target org'})

        //TODO f or p is required

        .option('j', {alias: 'json', demandOption: false, type: 'boolean', desc: 'FLAG: Format output as JSON.'})
        .option('l', {alias: 'loglevel', demandOption: false, desc: 'STRING: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. Permissible values are: trace, debug, info, warn, error, fatal. DEFAULT: error.'})

    const options = yargs.getOptions().alias;

    Object.keys(options).map(opt => {
        if (yargs.argv[opt] === true) {
            baseCommand += ` --${options[opt]}`;
        } else if (yargs.argv[opt] != null && typeof yargs.argv[opt] != 'boolean') {
            baseCommand += ` -${opt} ${yargs.argv[opt]}`;
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
    handler: importDataTreeHandler
};