// all required create modules
/**
 * @description logic to determine what we are going to create
 * @method list
 * @param {object} argv 
 */
function list(argv) {    
    let org = require('./list/org.js');
    let config = require('./list/config.js');
    let installedPackages = require('./list/installedPackages');
    
    let whatToList = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToList) {
        case ('org'):
            org.handler(arguments);
            break;
        case ('config'):
            config.handler(arguments);
            break;
        case ('installed'):
            installedPackages.handler(arguments);
            break;
        default:
            console.log("DEFAULT STUFF CHANGE LATER");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: list,
    builder: _ => _
    .default('argv', require('../index.js'))
};