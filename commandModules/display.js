/**
 * @description logic to determine the property we are going to display
 * @method display
 * @param {object} argv 
 */
function display(argv) {
    // all required open modules
    let user = require('./display/user.js');
    let apiLimits= require('./display/apiLimits.js');
    
    let whatToDisplay = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToDisplay.toUpperCase()) {
        case ('USER'):
            user.handler(arguments);
            break;
        case ('LIMITS'):
            apiLimits.handler(arguments);
            break;
        default:
            console.log("VALID SET OPTIONS: user, limits");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: display,
    builder: _ => _
    .default('argv', require('../index.js'))
};