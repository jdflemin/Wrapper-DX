/**
 * @description creates scratch org
 * @method lightningCmpCreateHandler
 * @param {array} argv 
 */
function lightningCmpCreateHandler(argv) {
    let baseCommand = 'sfdx force:lightning:component:create';
    const yargs = require('yargs')
      .option('n', {alias: 'name', demandOption: true, desc: 'name of lightning cmp'})

    baseCommand += ` -n ${yargs.argv.n} -d force-app/main/default/aura`;

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
    handler: lightningCmpCreateHandler
};