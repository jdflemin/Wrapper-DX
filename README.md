# RadialSparkDX
Node app for interacting with SFDX

will need to use npm link with any changes made in js files
index.js will contain check for system and determine if we are in sfdx project
rsdx will be part of commandModules and refactored into its own 
rsdx-kit will be added containing bundled sfdx operations
index.js will be required in each of these rsdx and rsdx-kit
maps near exec methods abstracted out into utility class
maps should use alias (aka long name with -- as some of our shorthands might conflict with sfdx commands) - example in delete scratchOrg
exec method into utility as well? pending success and failure functionality

As of 4/25/18 npm install is needed followed by npm link
working on solution in only run install