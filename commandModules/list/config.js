/**
 * @description Lists the configuration variables for the Salesforce CLI.
 * @method configListHandler
 * @param {array} argv 
 */
function configListHandler(argv) {
    let baseCommand = 'sfdx force:config:list';
    const yargs = require('yargs')
      .option('j', {alias: 'json', demandOption: false, desc: 'Format output as JSON', boolean : true})
      .option('l', {alias: 'loglevel', demandOption: false, desc: 'The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.'})


    
    if(yargs.argv.j){
        baseCommand += ` --json`;
    }
    if(yargs.argv.l){
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
    handler: configListHandler
};