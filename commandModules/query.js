// REVIEW ME TO SEE IF THIS IS HOW WE SHOULD HANDLE QUERY

/**
 * @description logic to determine what we are going to query
 * @method queryHandler
 * @param {object} argv 
 */
function queryHandler(argv) {
    // all required open modules
    let queryData= require('./query/soql.js');
    
    let whatToQuery = argv._[1];
    let arguments = argv._.slice(2);

    switch(whatToQuery.toUpperCase()) {
        case ('SOQL'):
            queryData.handler(arguments);
            break;
        default:
            console.log("DEFAULT STUFF");
            break;
    }

}

// export module to index.js and allow args to be accessed in this file
module.exports = {
    handler: queryHandler,
    builder: _ => _
    .default('argv', require('../index.js'))
};