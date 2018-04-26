var sOrg = require('./create/sOrg.js');

function create(argv) {
    console.log(argv._);

    var whatToCreate = argv._[1];
    var arguments = argv._.slice(2);

    switch(whatToCreate) {
        case 'sOrg':
            sOrg.handler(arguments);
            break;
        default:
            console.log("DEFAULT");
            break;
    }

}
  
module.exports = {
    handler: create,
    builder: _ => _
    .default('argv', require('../index.js'))
};