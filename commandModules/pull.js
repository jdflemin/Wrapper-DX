/**
 * @description logic to determine what we are going to pull
 * @method pull
 * @param {object} argv 
 */
function pull(argv) {
    // all required open modules
    let source = require('./pull/source.js');
    
    let whatToPull = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToPull.toUpperCase()) {
        case ('SOURCE'):
            source.handler(arguments);
            break;
        default:
            console.log("VALID PULL OPTIONS: source");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: pull,
    builder: _ => _
    .default('argv', require('../index.js'))
};