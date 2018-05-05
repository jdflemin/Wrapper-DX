exports.metadata = {
	command: 'md',
	desc: 'metadata',
	builder: (yargs) => yargs
		.option('r', {
			alias: 'rootdir', 
			desc: 'root directory that contains the metadata', 
			type: 'filepath', 
			demandOption: true 
		})
		.option('j', {
			alias: 'json', 
			desc: 'Format output as JSON', 
			type: 'boolean', 
			demandOption: false
		})
		.option('l', {
			alias: 'loglevel', 
			desc: 'log level', 
			type: 'boolean', 
			demandOption: false
		}),
	handler: (argv) => {
		console.log(argv);
		console.log('3333333333')
		argv._handled = true
		console.log('create class exec call')
	}
}




// /**
//  * @description Converts metadata retrieved via Metadata API into the source format used in Salesforce DX projects.
//  * @method convertMetadataHandler
//  * @param {array} argv 
//  */
// function convertMetadataHandler(argv) {
//     let baseCommand = 'sfdx force:mdapi:convert';
//     const yargs = require('yargs')
//         .option('r', {alias: 'rootdir', demandOption: true, desc: 'DIRECTORY: The root directory that contains the metadata you retrieved using Metadata API.'})
//       //  HARDCODE .option('d', {alias: 'outputdir', demandOption: true, desc: 'DIRECTORY: The directory to store your source in after it’s converted to the Salesforce DX format. Can be an absolute or relative path.'})
//         .option('j', {alias: 'json', demandOption: false, type: 'boolean', desc: 'FLAG: Format output as JSON.'})
//         .option('loglevel', {alias: 'loglevel', demandOption: false, desc: 'STRING: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. Permissible values are: trace, debug, info, warn, error, fatal. DEFAULT: error.'})

//     const options = yargs.getOptions().alias;

//     Object.keys(options).map(opt => {
//         if (yargs.argv[opt] === true) {
//             baseCommand += ` --${options[opt]}`;
//         } else if (yargs.argv[opt] != null && typeof yargs.argv[opt] != 'boolean') {
//             baseCommand += ` --${options[opt]} ${yargs.argv[opt]}`;
//         }
//     })

//     console.log("RUNNING COMMAND: ", baseCommand);

//     let exec = require('child_process').exec; 

//     exec(baseCommand, (err, stdout, stderr) => {
//         if (err) {
//         // err stuff
//         } else {
//         // not err stuff
//         }
//         // happen regardless stuff
//     });

//     }

//     // export module
//     module.exports = {
//     handler: convertMetadataHandler
// };