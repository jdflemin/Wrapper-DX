exports.create = {
	command: 'create',
	desc: 'create commands',
	builder: (yargs) => yargs
		.command(
			require('./create/class.js').class
		)
			.option('n', {
				alias: 'className', 
				desc: 'name of class', 
				type: 'string', 
				demandOption: true
			})
		.command(
			require('./create/lightningApp.js').lightningApp
		)
			.option('n', {
				alias: 'name', 
				desc: 'name of lightning app', 
				type: 'string', 
				demandOption: true
			})
		.command(
			require('./create/lightningCMP.js').lightningCMP
		)
			.option('n', {
				alias: 'name', 
				desc: 'name of lightning component', 
				type: 'string', 
				demandOption: true
			})
		.command(require('./create/lightningEvent.js').lightningEvent)
			.option('n', {
				alias: 'name', 
				desc: 'name of lightning event', 
				type: 'string', 
				demandOption: true
			})
		.command(require('./create/project.js').dxProject)
			.option('n', {
				alias: 'name', 
				desc: 'name of sfdx project', 
				type: 'string', 
				demandOption: true
			})
		.command(
			require('./create/scratchOrg.js').scratchOrg
		)
      .option('h', {
				alias: 'DevHub', 
				desc: 'alias of parent DevHub to this Scratch Org', 
				type: 'string', 
				demandOption: true
			})
      .option('a', {
				alias: 'alias', 
				desc: 'alias name of this Scratch Org', 
				type: 'string', 
				demandOption: true
			})
			.option('d', {
				alias: 'duration', 
				desc: 'default of 7 days, but can range from 1-30', 
				type: 'number', 
				demandOption: false
			})
		.command(
			require('./create/trigger.js').trigger
		)
      .option('n', {
				alias: 'triggerName', 
				desc: 'name of trigger', 
				type: 'string', 
				demandOption: true
			})
      .option('s', {
				alias: 'sObject', 
				desc: 'name of sObject for trigger', 
				type: 'string', 
				demandOption: true
			})
      .option('e', {
				alias: 'event for trigger', 
				desc: 'event(s) for trigger to be fired', 
				type: 'string', 
				demandOption: true
			}),
	handler: (argv) => {
		if (!argv._handled) console.log('Create Not Handled:', argv)
		argv._handled = true
	}
}