/**
 * @description Pushes changed source from your project to the scratch org to keep them in sync. Does not handle merge conflicts
 * @method pushSourceHandler
 * @param {array} argv 
 */
function pushSourceHandler(argv) {
    let baseCommand = 'sfdx force:source:push';
    const yargs = require('yargs')
        .option('u', {alias: 'targetusername', demandOption: true, desc: 'STRING: A username or alias for the target org. Overrides the default target org.'})
        .option('f', {alias: 'forceoverwrite', demandOption: false, desc: 'FLAG: Runs the push command even if conflicts exist. Changes in the project overwrite changes in the scratch org.'})
        .option('g', {alias: 'ignorewarnings', demandOption: false, desc: 'FLAG: Completes the deployment even if warnings are generated.'})
        .option('w', {alias: 'wait', demandOption: false, desc: 'MINUTES:  Number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you. The default is 33 minutes.'})
        .option('j', {alias: 'json', demandOption: false, type: 'boolean', desc: 'FLAG: Format output as JSON.'})      
        .option('loglevel', {alias: 'loglevel', demandOption: false, desc: 'STRING: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. Permissible values are: trace, debug, info, warn, error, fatal. DEFAULT: error.'})

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
    handler: pushSourceHandler
};