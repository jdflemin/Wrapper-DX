/**
 * @description deletes scratch org
 * @method scratchOrgDeleteHandler
 * @param {array} argv 
 */
function scratchOrgDeleteHandler(argv) {
    let baseCommand = 'sfdx force:org:delete';
    const yargs = require('yargs')
      .option('u', {alias: 'targetusername', demandOption: true, desc: 'STRING: A username or alias for the target org.'})
      .option('p', {alias: 'noprompt', demandOption: false, desc: 'FLAG: No prompt to confirm deletion.'})
      .option('v', {alias: 'targetdevhubusername', demandOption: false, desc: 'STRING: A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.'})
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
    handler: scratchOrgDeleteHandler
};