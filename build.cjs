const fs=require('node:fs'),path=require('node:path');
const out=path.join(__dirname,'dist');
fs.rmSync(out,{recursive:true,force:true});
fs.cpSync(path.join(__dirname,'public'),out,{recursive:true});
console.log('Static site built in dist/');
