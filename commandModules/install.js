/**
 * @description logic to determine what we are going to install
 * @method install
 * @param {object} argv 
 */
function install(argv) {
    // all required open modules
    let package = require('./install/package.js');
    
    let whatToInstall = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToInstall.toUpperCase()) {
        case ('PACKAGE'):
            package.handler(arguments);
            break;
        default:
            console.log("VALID INSTALL OPTIONS: package");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: install,
    builder: _ => _
    .default('argv', require('../index.js'))
};