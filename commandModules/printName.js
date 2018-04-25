function printName({name}) {
    console.log('printName function runs ' + name);
    let temp = 'list';
    var exec = require('child_process').exec;
    exec(`sfdx force:org:${temp}`, (err, stdout, stderr) => {
      if (err) {
        console.log('ERROR YOU WONG');
        return;
      }
    
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });


    // var cmdString = 'sfdx force:org:list';
    // console.log(`stdout: ${cmdString}`);
}

module.exports = {
    handler : printName,
    builder: _ => _
        .default('name', 'Julian')
};