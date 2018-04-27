/**
 * @description logic to determine what we are going to push
 * @method push
 * @param {object} argv 
 */
function push(argv) {
    // all required open modules
    let source = require('./push/source.js');
    
    let whatToPush = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToPush.toUpperCase()) {
        case ('SOURCE'):
            source.handler(arguments);
            break;
        default:
            console.log("VALID PUSH OPTIONS: source");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: push,
    builder: _ => _
    .default('argv', require('../index.js'))
};