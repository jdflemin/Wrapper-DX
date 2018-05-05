/**
 * @description Lists changes that have been made locally, in a scratch org, or both.
 * @method getSourceStatusHandler
 * @param {array} argv 
 */
function getSourceStatusHandler(argv) {
    let baseCommand = 'sfdx force:source:status';
    const yargs = require('yargs')
      .option('u', {alias: 'targetusername', demandOption: true, desc: 'STRING: A username or alias for the target org. Overrides the default target org.'})
      .option('a', {alias: 'all', demandOption: false, type: 'boolean', desc: 'FLAG: Lists all the changes that have been made.'})
      .option('l', {alias: 'local', demandOption: false, type: 'boolean', desc: 'FLAG: Lists the changes that have been made locally.'})
      .option('r', {alias: 'remote', demandOption: false, type: 'boolean', desc: 'FLAG: Lists the changes that have been made in the scratch org.'})
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
    handler: getSourceStatusHandler
};