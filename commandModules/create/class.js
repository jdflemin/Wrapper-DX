exports.class = {
	command: 'class',
	desc: 'class',
	builder: (yargs) => yargs
		.option('n', {
			alias: 'className', 
			desc: 'name of class', 
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
//  * @method classCreateHandler
//  * @param {array} argv 
//  */
// function classCreateHandler(argv) {
//     let baseCommand = 'sfdx force:apex:create:create';
//     const yargs = require('yargs')
//       .option('n', {alias: 'className', demandOption: true, desc: 'name of class'})

//     baseCommand += ` -n ${yargs.argv.n} -d force-app/main/default/class`;

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
//     handler: classCreateHandler
// };