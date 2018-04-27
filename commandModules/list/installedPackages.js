/**
 * @description lists all installed packages
 * @method installedPackagesListHandler
 * @param {array} argv 
 */
function installedPackagesListHandler(argv) {
    let baseCommand = 'sfdx force:package:installed:list';

    const yargs = require('yargs')
      .option('u', {alias: "targetusername", demandOption: false, desc: 'A username or alias for the target org. Overrides the default target org.', type : "string"})
      .option('j', {alias: "json", demandOption: false, desc: "Format output as JSON.", type: "boolean" })
      .option('l', {alias: "loglevel", demandOption: false, desc: "The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log."});

    if(yargs.argv.u){
        baseCommand += ` --targetusername ${yargs.argv.u}`;
    }
    if(yargs.argv.j) {
        baseCommand += ` --json`;
    }
    if(yargs.argv.l) {
        baseCommand += ` --loglevel ${yargs.argv.l}`;
    }
    
    let exec = require('child_process').exec; 

    exec(baseCommand, (err, stdout, stderr) => {
      if (err) {
        // err stuff
      } else {
        // not err stuff
        console.log(stdout);
      }
      // happen regardless stuff
    });
    
}

// export module
module.exports = {
    handler: installedPackagesListHandler
};