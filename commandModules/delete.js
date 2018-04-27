/**
 * @description logic to determine what we are going to delete
 * @method deleteSOrg
 * @param {object} argv 
 */
function deleteSOrg(argv) {
    // all required open modules
    let scratchOrg = require('./delete/scratchOrg.js');
    
    let whatToDelete = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToDelete.toUpperCase()) {
        case ('SORG'):
            scratchOrg.handler(arguments);
            break;
        default:
            console.log("VALID DELETE OPTIONS: sorg");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: deleteSOrg,
    builder: _ => _
    .default('argv', require('../index.js'))
};