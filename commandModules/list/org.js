/**
 * @description lists all scratch orgs
 * @method sorgListHandler
 * @param {array} argv 
 */
function sorgListHandler(argv) {
    let baseCommand = 'sfdx force:org:list';
    
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
    handler: sorgListHandler
};