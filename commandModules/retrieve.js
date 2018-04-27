/**
 * @description logic to determine what we are going to retrieve
 * @method retrieve
 * @param {object} argv 
 */
function retrieve(argv) {
    // all required open modules
    let metadata = require('./retrieve/metadata.js');
    
    let whatToRetrieve = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToRetrieve.toUpperCase()) {
        case ('METADATA'):
            metadata.handler(arguments);
            break;
        default:
            console.log("VALID RETRIEVE OPTIONS: metadata");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: retrieve,
    builder: _ => _
    .default('argv', require('../index.js'))
};