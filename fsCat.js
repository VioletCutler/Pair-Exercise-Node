const fs = require('fs');
const fsPromises = fs.promises


module.exports = function (){
    process.stdout.write('prompt > ');
   process.stdin.on('data', (data) => {
       const cmd = data.toString().trim();
       if(cmd === 'fsCat ${fileName}'){
        function fsCat(fileName) {
            process.stdout.write(filehandle.readFile(fileName))
        }
       
       }
       //process.stdout.write('You typed: ' + cmd);
       process.stdout.write('\nprompt > ' );
   })
   }