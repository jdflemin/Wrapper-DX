// all required create modules
let scratchOrg = require('./create/scratchOrg.js');

/**
 * @description logic to determine what we are going to create
 * @method create
 * @param {object} argv 
 */
function create(argv) {
    // cleans user input to allow case insensitivity 
    let whatToCreate = argv._[1].toUpperCase();
    let arguments = argv._.slice(2);
console.log('hi')
    switch(whatToCreate) {
        case ('SORG'):
            scratchOrg.handler(arguments);
            break;
        default:
            console.log("DEFAULT STUFF CHANGE LATER");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: create,
    builder: _ => _
    .default('argv', require('../index.js'))
};