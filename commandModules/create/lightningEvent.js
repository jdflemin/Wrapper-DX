exports.lightningEvent = {
  command: 'lightningEvent',
  desc: 'creates a lighting component',
	builder: (yargs) => yargs
		.option('n', {
			alias: 'name', 
			desc: 'name of lightning event', 
			type: 'string', 
			demandOption: true
		}),
  handler: (argv) => {
    console.log(argv);
    console.log('3333333333')
    argv._handled = true
    console.log('create class exec call')
  }
}

// /**
//  * @description creates scratch org
//  * @method lightningEventCreateHandler
//  * @param {array} argv 
//  */
// function lightningEventCreateHandler(argv) {
//     let baseCommand = 'sfdx force:lightning:event:create';
//     const yargs = require('yargs')
//       .option('n', {alias: 'name', demandOption: true, desc: 'name of lightning cmp'})

//     baseCommand += ` -n ${yargs.argv.n} -d force-app/main/default/aura`;

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
//     handler: lightningEventCreateHandler
// };