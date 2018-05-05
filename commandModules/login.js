/**
 * @description redirects to SORG login
 * @method login
 * @param {object} argv 
 */
function login(argv) {
    // all required open modules
    let config = require('./login/scratchOrg.js');

    let whatToGet = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToGet.toUpperCase()) {
        case ('SORG'):
            config.handler(arguments);
            break;
        default:
            console.log("VALID LOGIN OPTIONS: sorg");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: login,
    builder: _ => _
    .default('argv', require('../index.js'))
};