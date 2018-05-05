exports.create = {
	command: 'create',
	desc: 'create commands',
	builder: (yargs) => yargs
		.command(
			require('./create/class.js').class
		)
		.command(
			require('./create/lightningApp.js').lightningApp
		)
		.command(
			require('./create/lightningCMP.js').lightningCMP
		)
		.command(
			require('./create/lightningEvent.js').lightningEvent
		)
		.command(
			require('./create/project.js').dxProject
		)
		.command(
			require('./create/scratchOrg.js').scratchOrg
		)
    .command(
			require('./create/trigger.js').trigger
		),
	handler: (argv) => {
		if (!argv._handled) console.log('Create Not Handled:', argv)
		argv._handled = true
	}
}