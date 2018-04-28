/**
 * @description logic to determine what we are going to report
 * @method reportHandler
 * @param {object} argv 
 */
function reportHandler(argv) {
    // all required open modules
    let reportTest= require('./report/test.js');
    
    let whatToReport = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToReport.toUpperCase()) {
        case ('TEST'):
            reportTest.handler(arguments);
            break;
        default:
            console.log("DEFAULT STUFF");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: reportHandler,
    builder: _ => _
    .default('argv', require('../index.js'))
};