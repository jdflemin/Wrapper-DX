/**
 * @description logic to determine what we are going to get
 * @method get
 * @param {object} argv 
 */
function get(argv) {
    // all required open modules
    let config = require('./get/config.js');
    let package = require('./get/package-status.js');
    let status = require('./get/source-status.js');    
    
    let whatToGet = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToGet.toUpperCase()) {
        case ('CONFIG'):
            config.handler(arguments);
            break;
        case ('PACKAGE-STATUS'):
            package.handler(arguments);
            break;
        case ('SOURCE-STATUS'):
            status.handler(arguments);
            break;
        default:
            console.log("VALID GET OPTIONS: config, package-status, source-status");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: get,
    builder: _ => _
    .default('argv', require('../index.js'))
};