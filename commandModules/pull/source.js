/**
 * @description Pulls changed source from the scratch org to your project to keep them in sync.
 * @method pullSourceHandler
 * @param {array} argv 
 */
function pullSourceHandler(argv) {
    let baseCommand = 'sfdx force:source:pull';
    const yargs = require('yargs')
        .option('u', {alias: 'targetusername', demandOption: true, desc: 'STRING: A username or alias for the target org. Overrides the default target org.'})
        .option('f', {alias: 'forceoverwrite', demandOption: false, desc: 'FLAG: Runs the pull command even if conflicts exist. Changes in the scratch org overwrite changes in the project.'})
        .option('w', {alias: 'wait', demandOption: false, desc: 'MINUTES:  Number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you. The default is 33 minutes.'})        
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
    handler: pullSourceHandler
};