/**
 * @description logic to determine what we are going to upgrade
 * @method upgradeProject
 * @param {object} argv 
 */
function upgradeProject(argv) {
    // all required open modules
    let upgradeProj = require('./upgrade/project.js');
    
    let whatToUpgrade = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToUpgrade.toUpperCase()) {
        case ('PROJECT'):
        upgradeProj.handler(arguments);
            break;
        default:
            console.log("DEFAULT STUFF");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: upgradeProject,
    builder: _ => _
    .default('argv', require('../index.js'))
};