#!/usr/bin/env node

let sfdx = require('./index.js').handler().then(res => projectChecked(res)).catch(err => console.log("RSDX ERR: ", err));

function projectChecked(res) {
	if(res) {
		const argv = require('yargs')
			.usage('rsdx <verb> <type|thing> [flags]')
				.command(require('./commandModules/convert.js').convert)
				.command(require('./commandModules/create.js').create)
				.help()
				.wrap(null)
				.argv

		if (!argv._handled) console.log('Single Command Not Handled:', argv)

		//     console.log('in if')
		//   const argv = require('yargs')
		//     .usage('rsdx <command>')
		//   DONE    .command('convert', 'Convert command', require('./commandModules/convert.js'))
		//   DONE     .command('create', 'create command', require('./commandModules/create.js'))
		//       .command('delete', 'Delete command', require('./commandModules/delete.js'))
		//       .command('deploy', 'Deploy command', require('./commandModules/deploy.js'))
		//       .command('display', 'Display command', require('./commandModules/display.js'))
		//       .command('export', 'Export commands', require('./commandModules/export.js'))
		//       .command('generate', 'Generate command', require('./commandModules/generate.js'))
		//       .command('get', 'Get command', require('./commandModules/get.js'))
		//       .command('import', 'Import commands', require('./commandModules/import.js'))
		//       .command('install', 'Installs a package in the target org.', require('./commandModules/install.js'))
		//       .command('list', 'use when a list is expected to be returned', require('./commandModules/list.js'))
		//       .command('login', 'Login command', require('./commandModules/login.js'))
		//       .command('open', 'Open command', require('./commandModules/open.js'))
		//       .command('pull', 'Pull command', require('./commandModules/pull.js'))
		//       .command('push', 'Push command', require('./commandModules/push.js'))
		//       .command('query', 'Query commands', require('./commandModules/query.js'))
		//       .command('report', 'Report commands', require('./commandModules/report.js'))
		//       .command('retrieve', 'Retrieve command', require('./commandModules/retrieve.js'))
		//       .command('run', 'Run command', require('./commandModules/run.js'))
		//       .command('set', 'Set command', require('./commandModules/set.js'))
		//       .command('upgrade', 'Upgrade commands', require('./commandModules/upgrade.js'))
		//     .help()
		//     .argv
	} else {
		console.log('false')
	}
}
