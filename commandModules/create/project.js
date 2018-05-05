exports.dxProject = {
  command: 'dxProject',
  desc: 'creates a new DX Project',
	builder: (yargs) => yargs
		.option('n', {
			alias: 'name', 
			desc: 'name of sfdx project', 
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
//  * @method projectCreateHandler
//  * @param {array} argv 
//  */
// function projectCreateHandler(argv) {
//     let baseCommand = 'sfdx force:project:create';
//     const yargs = require('yargs')
//       .option('n', {alias: 'name', demandOption: true, desc: 'name of sfdx project'})
// // TODO make sfdx project outside of sfdx project currently can only do it within one which does not make sense
//     baseCommand += ` -n ${yargs.argv.n}`;

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
//     handler: projectCreateHandler
// };