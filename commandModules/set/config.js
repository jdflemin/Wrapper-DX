/**
 * @description set config
 * @method setConfigHandler
 * @param {array} argv 
 */
function setConfigHandler(argv) {
    let baseCommand = 'sfdx force:config:set';
    const yargs = require('yargs')
        .option('g', {alias: 'global', demandOption: false, desc: 'FLAG: Sets the configuration variables globally, so they can be used from any directory.'})
        .option('json', {alias: 'json', demandOption: false, desc: 'FLAG: Format output as JSON.'})
        .option('loglevel', {alias: 'loglevel', demandOption: false, desc: 'STRING: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. Permissible values are: trace, debug, info, warn, error, fatal. DEFAULT: error.'})

    const options = Object.keys(yargs.getOptions().alias);

    options.map(opt => {
        if (yargs.argv[opt] != null) {
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
    handler: setConfigHandler
};