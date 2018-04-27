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
      .option('j', {alias: 'json', demandOption: false, type:'boolean', desc: 'FLAG: Format output as JSON.'})      
      .option('loglevel', {alias: 'loglevel', demandOption: false, desc: 'STRING: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. Permissible values are: trace, debug, info, warn, error, fatal. DEFAULT: error.'})

    Object.keys(options).map(opt => {
        console.log(typeof yargs.argv[opt])
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
    handler: scratchOrgDeleteHandler
};