/**
 * @description logic to determine what we are going to run
 * @method run
 * @param {object} argv 
 */
function run(argv) {
    // all required open modules
    let tests = require('./run/tests.js');
    
    let whatToGet = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToGet.toUpperCase()) {
        case ('TESTS'):
            tests.handler(arguments);
            break;
        default:
            console.log("VALID RUN OPTIONS: tests");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: run,
    builder: _ => _
    .default('argv', require('../index.js'))
};