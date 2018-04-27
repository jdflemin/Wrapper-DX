/**
 * @description logic to determine the property we are going to set
 * @method set
 * @param {object} argv 
 */
function set(argv) {
    // all required open modules
    let config = require('./set/config.js');
    
    let whatToSet = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToSet.toUpperCase()) {
        case ('CONFIG'):
            config.handler(arguments);
            break;
        default:
            console.log("VALID SET OPTIONS: config");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: set,
    builder: _ => _
    .default('argv', require('../index.js'))
};