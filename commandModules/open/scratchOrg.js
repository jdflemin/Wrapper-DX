/**
 * @description opens scratch org
 * @method scratchOrgOpenHandler
 * @param {array} argv 
 */
function scratchOrgOpenHandler(argv) {
    let baseCommand = 'sfdx force:org:open';
    const yargs = require('yargs')
      .option('u', {alias: 'targetusername', demandOption: false, desc: 'STRING: A username or alias for the target org. Overrides the default target org.'})
      .option('p', {alias: 'path', demandOption: false, desc: 'STRING: Navigation URL path (not including domain).'})
      .option('r', {alias: 'urlonly', demandOption: false, desc: 'FLAG: Displays a navigation URL, but doesn’t launch your browser.'})
      .option('json', {alias: 'json', demandOption: false, desc: 'FLAG: Format output as JSON.'})      
      .option('loglevel', {alias: 'loglevel', demandOption: false, desc: 'STRING: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. Permissible values are: trace, debug, info, warn, error, fatal'})

    const options = Object.keys(yargs.getOptions().alias);

    options.map(opt => {
        if (yargs.argv[opt] != null) {
            baseCommand += ` -${opt} ${yargs.argv[opt]}`;
            console.log("OPEN SCRATCH ORG: COMMAND UPDATED: ", baseCommand)
        } else {
            console.log("OPEN SCRATCH ORG: OPTION NOT INCLUDED")
        }
    })

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
    handler: scratchOrgOpenHandler
};