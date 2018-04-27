/**
 * @description logic to determine what we are going to open
 * @method open
 * @param {object} argv 
 */
function open(argv) {
    // all required open modules
    let scratchOrg = require('./open/scratchOrg.js');
    
    let whatToOpen = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToOpen.toUpperCase()) {
        case ('SORG'):
            scratchOrg.handler(arguments);
            break;
            
        default:
            console.log("WHATEVER YOU'RE TRYING TO OPEN ISN'T RIGHT");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: open,
    builder: _ => _
    .default('argv', require('../index.js'))
};