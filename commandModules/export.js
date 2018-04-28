/**
 * @description logic to determine what we are going to export
 * @method exportHandler
 * @param {object} argv 
 */
function exportHandler(argv) {
    // all required open modules
    let exportThing= require('./export/dataTree.js');
    
    let whatToExport = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToExport
        .toUpperCase()) {
        case ('DATATREE'):
            exportThing.handler(arguments);
            break;
        default:
            console.log("DEFAULT STUFF");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: exportHandler,
    builder: _ => _
    .default('argv', require('../index.js'))
};