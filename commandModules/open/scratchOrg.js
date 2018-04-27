/**
 * @description opens scratch org
 * @method scratchOrgOpenHandler
 * @param {array} argv 
 */
function scratchOrgOpenHandler(argv) {
    let baseCommand = 'sfdx force:org:open';
    const yargs = require('yargs')
      .option('u', {alias: 'targetusername', demandOption: true, desc: 'STRING: A username or alias for the target org. Overrides the default target org.'})
      .option('p', {alias: 'path', demandOption: false, desc: 'STRING: Navigation URL path (not including domain).'})
      .option('r', {alias: 'urlonly', demandOption: false, desc: 'FLAG: Displays a navigation URL, but doesn’t launch your browser.'})
      .option('j', {alias: 'json', demandOption: false, type:'boolean', desc: 'FLAG: Format output as JSON.'})      
      .option('loglevel', {alias: 'loglevel', demandOption: false, desc: 'STRING: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. Permissible values are: trace, debug, info, warn, error, fatal. DEFAULT: error.'})

    const options = yargs.getOptions().alias;

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
    handler: scratchOrgOpenHandler
};