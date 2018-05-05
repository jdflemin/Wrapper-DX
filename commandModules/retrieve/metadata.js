/**
 * @description Uses Metadata API to retrieve a .zip of XML files that represent metadata from the targeted org.
 * @method retrieveMetadata
 * @param {array} argv 
 */
function retrieveMetadata(argv) {
    let baseCommand = 'sfdx force:mdapi:retrieve';
    const yargs = require('yargs')
        .option('u', {alias: 'targetusername', demandOption: true, desc: 'STRING: A username or alias for the target org. Overrides the default target org.'})
        .option('r', {alias: 'retrievetargetdir', demandOption: true, desc: 'DIRECTORY: The root of the directory structure where the retrieved .zip or metadata files are put.'})
        .option('a', {alias: 'apiversion', demandOption: false, desc: 'NUMBER: Use to override the default, which is the latest version supported by your CLI plug-in, with the version in your package.xml file.'})
        .option('w', {alias: 'wait', demandOption: false, desc: 'MINUTES: The number of minutes to wait for the command to complete.'})
        .option('k', {alias: 'unpackaged', demandOption: false, desc: 'FILEPATH: The complete path for the manifest file that specifies the components to retrieve.'})
        .option('d', {alias: 'sourcedir', demandOption: false, desc: 'DIRECTORY: The source directory to use instead of the default manifest specified in sfdx-config.json.'})
        .option('p', {alias: 'packagenames', demandOption: false, desc: 'STRING: A comma-separated list of package names to retrieve.'})
        .option('s', {alias: 'singlepackage', demandOption: false, type: 'boolean', desc: 'FLAG: Specifies whether only a single package is being retrieved (true) or more than one package (false).'})
        .option('i', {alias: 'jobid', demandOption: false, desc: 'ID: The job ID (asyncId) of the retrieve you want to check. You must specify a --retrievetargetdir. Use with --wait to resume waiting.'})
        .option('l', {alias: 'verbose', demandOption: false, desc: 'Indicates that you want verbose output from the retrieve operation.'})
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
        console.log("STDOUT", stdout)
      }
      // happen regardless stuff
    });
    
}

// export module
module.exports = {
    handler: retrieveMetadata
};