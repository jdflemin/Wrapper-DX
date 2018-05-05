/**
 * @description logic to determine what we are going to deploy
 * @method deploy
 * @param {object} argv 
 */
function deploy(argv) {
    // all required open modules
    let metadata = require('./deploy/metadata.js');
    
    let whatToDeploy = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToDeploy.toUpperCase()) {
        case ('MD'):
            metadata.handler(arguments);
            break;
        default:
            console.log("VALID DEPLOY OPTIONS: md");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: deploy,
    builder: _ => _
    .default('argv', require('../index.js'))
};