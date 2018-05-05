/**
 * @description deploys metadata
 * @method deployMetadataHandler
 * @param {array} argv 
 */
function deployMetadataHandler(argv) {
    let baseCommand = 'sfdx force:mdapi:deploy';
    const yargs = require('yargs')
        .option('u', {alias: 'targetusername', demandOption: true, desc: 'STRING: A username or alias for the target org. Overrides the default target org.'})
        .option('c', {alias: 'checkonly', demandOption: false, type: 'boolean', desc: 'FLAG: Validates the deployed metadata and runs all Apex tests, but prevents the deployment from being saved to the org.'})        
        .option('d', {alias: 'deploydir', demandOption: false, desc: 'DIRECTORY: The root of the directory tree that contains the files to deploy. The root must contain a valid package.xml file describing the entities in the directory structure. Required to initiate a deployment if you don’t use --zipfile. If you specify both --zipfile and --deploydir, a zip file of the contents of the --deploydir directory is written to the location specified by --zipfile.'})
        .option('w', {alias: 'wait', demandOption: false, desc: 'MINUTES: The number of minutes to wait for the command to complete. The default is –1 (no limit). 0'})
        .option('i', {alias: 'JOBID', demandOption: false, desc: 'ID: The job ID (asyncId) of the deployment you want to check. Use with -w to resume waiting.'})
        .option('l', {alias: 'testlevel', demandOption: false, desc: 'STRING: Specifies which level of deployment tests to run. Valid values are: NoTestRun, RunSpecifiedTests, RunLocalTests, RunAllTestsInOrg'})
        .option('r', {alias: 'runtests', demandOption: false, desc: 'STRING: Lists the Apex classes containing the deployment tests to run. Use this parameter when you set --testlevel to RunSpecifiedTests.'})
        .option('e', {alias: 'rollbackonerror', demandOption: false, type: 'boolean', desc: 'FLAG: Indicates whether any failure causes a complete rollback of the deploy operation. The default is true. If set to false, the operation performs actions that don’t have errors and returns errors for the remaining actions. You must set this parameter to true if you are deploying to a production org. Default: true.'})
        .option('o', {alias: 'ignoreerrors', demandOption: false, type: 'boolean', desc: 'FLAG: Ignores the deploy errors, and continues with the deploy operation. The default is false. Keep this parameter set to false when deploying to a production org. If set to true, components without errors are deployed, and components with errors are skipped. Default: false.'})
        .option('g', {alias: 'ignorewarnings', demandOption: false, type: 'boolean', desc: 'FLAG: If a warning occurs and ignoreWarnings is set to true, the success field in DeployMessage is true. When ignoreWarnings is set to false, success is set to false, and the warning is treated like an error. Default: false.'})
        .option('f', {alias: 'zipfile', demandOption: false, desc: 'FILEPATH: TThe path to the .zip file of metadata files to deploy. You must indicate this option or --deploydir.If you specify both --zipfile and --deploydir, a .zip file of the contents of the deploy directory is created at the path specified for the .zip file.'})
        .option('j', {alias: 'json', demandOption: false, type: 'boolean', desc: 'FLAG: Format output as JSON.'})
        .option('loglevel', {alias: 'loglevel', demandOption: false, desc: 'STRING: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. Permissible values are: trace, debug, info, warn, error, fatal. DEFAULT: error.'})
        .option('v', {alias: 'verbose', demandOption: false, type: 'boolean', desc: 'FLAG: Indicates that you want verbose output from the deploy operation.'})


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
      }
      // happen regardless stuff
    });
    
}

// export module
module.exports = {
    handler: deployMetadataHandler
};