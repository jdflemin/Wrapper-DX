/**
 * @description logic to determine what we are going to convert
 * @method convert
 * @param {object} argv 
 */
function convert(argv) {
    // all required open modules
    let metadata = require('./convert/metadata.js');
    let source = require('./convert/source.js');

    let whatToGet = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToGet.toUpperCase()) {
        case ('MD'):
            metadata.handler(arguments);
            break;
        case ('SOURCE'):
            source.handler(arguments);
            break;
        default:
            console.log("VALID CONVERT OPTIONS: md, source");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: convert,
    builder: _ => _
    .default('argv', require('../index.js'))
};