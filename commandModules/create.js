function create(argv) {
    console.log('****', argv);
    console.log('length: ', argv._.length);
    console.log(argv._.pop());

}
  
module.exports = {
    handler: create,
    builder: _ => _
    .default('argv', require('../index.js'))
};