/**
 * @description opens scratch org
 * @method packageInstallHandler
 * @param {array} argv 
 */
function packageInstallHandler(argv) {
    let baseCommand = 'sfdx force:package:install';
    const yargs = require('yargs')
      .option('u', {alias: 'targetusername', demandOption: true, desc: 'STRING: A username or alias for the target org. Overrides the default target org.'})
      .option('i', {alias: 'id', demandOption: true, desc: 'ID: The ID of the package version to install (starts with 04t).'})
      .option('w', {alias: 'wait', demandOption: false, desc: 'MINUTES: Maximum number of minutes to wait for installation status. The default is 0.'})
      .option('k', {alias: 'intallationkey', demandOption: false, desc: 'STRING: Installation key for installing a key-protected package. The default is null.'})
      .option('p', {alias: 'publishwait', demandOption: false, desc: 'MINUTES: Maximum number of minutes to wait for the Subscriber Package Version ID to become available in the target org before canceling the install request. The default is 0.'})
      .option('r', {alias: 'noprompt', demandOption: false, desc: 'FLAG: Allow Remote Site Settings and Content Security Policy websites to send or receive data without confirmation.'})
      .option('j', {alias: 'json', demandOption: false, type: 'boolean', desc: 'FLAG: Format output as JSON.'})
      .option('loglevel', {alias: 'loglevel', demandOption: false, desc: 'STRING: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. Permissible values are: trace, debug, info, warn, error, fatal. DEFAULT: error.'})
      
    const options = yargs.getOptions().alias;

    Object.keys(options).map(opt => {
        if (yargs.argv[opt] === true) {
            baseCommand += ` --${options[opt]}`;
        } else if (yargs.argv[opt] != null) {
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
    handler: packageInstallHandler
};