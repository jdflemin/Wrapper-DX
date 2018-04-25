function printName({name}) {
    console.log('printName function runs ' + name);
    const exec = require('child_process').exec;
    exec('sfdx force:org:list', (err, stdout, stderr) => {
        if(err) {
            console.log(err);
            return
        }

        console.log(stdout);
    })
}

module.exports = {
    handler : printName,
    builder: _ => _
        .default('name', 'Julian')
};