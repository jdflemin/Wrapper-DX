/**
 * @description logic to determine what we are going to generate
 * @method generate
 * @param {object} argv 
 */
function generate(argv) {
    // all required open modules
    let password = require('./generate/password.js');
    
    let whatToGenerate = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToGenerate.toUpperCase()) {
        case ('PASSWORD'):
            password.handler(arguments);
            break;
        default:
            console.log("VALID INSTALL OPTIONS: password");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: generate,
    builder: _ => _
    .default('argv', require('../index.js'))
};