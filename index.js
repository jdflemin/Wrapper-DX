let exec = require('child_process').exec;

function checkProject() {
  const listDir = process.platform === 'win32' ? 'dir' : 'ls -a';

  let test = someFun(listDir);
  
  return test
}

function someFun(listDir) {
  return new Promise((resolve, reject) => exec(listDir, (err, stdout, stderr) => {
    if (stdout.includes('.forceignore')) {
      resolve(true);
      // return true;
      // followYargs();
    } else {
      reject('Please navigate to your DX project and try again');
      // return true;
      // returnValue = false
    }
  })).then(res => {return res})
}

module.exports = {
  handler: checkProject
};