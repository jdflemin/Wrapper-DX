/**
 * @description logic to determine what we are going to create
 * @method create
 * @param {object} argv 
 */
function create(argv) {
    // all required create modules
    let scratchOrg = require('./create/scratchOrg.js');
    let apexClass = require('./create/class.js');
    let apexTrigger = require('./create/trigger.js');
    let dxProject = require('./create/project.js');
    let lightningApp = require('./create/lightningApp.js');
    let lightningCMP = require('./create/lightningCMP.js');
    let lightningEvent = require('./create/lightningEvent.js');
    
    let whatToCreate = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToCreate) {
        case ('sOrg'):
            scratchOrg.handler(arguments);
            break;
        case ('class'):
            apexClass.handler(arguments);
            break;
        case ('trigger'):
            apexTrigger.handler(arguments);
            break;
        case ('dxProject'):
            dxProject.handler(arguments);
            break;
        case ('lightningApp'):
            lightningApp.handler(arguments);
            break;
        case ('lightningCMP'):
            lightningCMP.handler(arguments);
            break;
        case ('lightningEvent'):
            lightningEvent.handler(arguments);
            break;
        default:
            console.log("DEFAULT STUFF CHANGE LATER");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: create,
    builder: _ => _
    .default('argv', require('../index.js'))
};