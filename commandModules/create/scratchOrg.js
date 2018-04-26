/**
 * @description creates scratch org
 * @method scratchOrgCreateHandler
 * @param {array} argv 
 */
function scratchOrgCreateHandler(argv) {
    let baseCommand = 'sfdx force:org:create';
    let exec = require('child_process').exec; 

    // logic for flags and adding to baseCommand as needed
console.log('asdfs')
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
    handler: scratchOrgCreateHandler
};