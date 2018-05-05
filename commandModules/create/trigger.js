exports.trigger = {
  command: 'trigger',
  desc: 'creates a new DX Project',
  builder: {},
  handler: (argv) => {
    console.log(argv);
    console.log('3333333333')
    argv._handled = true
    console.log('create class exec call')
  }
}

// /**
//  * @description creates scratch org
//  * @method triggerCreateHandler
//  * @param {array} argv 
//  */
// function triggerCreateHandler(argv) {
//     let baseCommand = 'sfdx force:apex:create:create';
//     const yargs = require('yargs')
//       .option('n', {alias: 'triggerName', demandOption: true, desc: 'name of trigger'})
//       .option('s', {alias: 'sObject', demandOption: true, desc: 'name of sObject for trigger'})
//       .option('e', {alias: 'event for trigger', demandOption: true, desc: 'event(s) for trigger to be fired'})
      

//     baseCommand += ` -n ${yargs.argv.n} -s ${yargs.argv.s} -e ${yargs.argv.e} -d force-app/default/main/trigger`;

//     let exec = require('child_process').exec; 

//     exec(baseCommand, (err, stdout, stderr) => {
//       if (err) {
//         // err stuff
//       } else {
//         // not err stuff
//       }
//       // happen regardless stuff
//     });
    
// }

// // export module
// module.exports = {
//     handler: triggerCreateHandler
// };