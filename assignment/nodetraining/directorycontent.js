const fs=require('fs');
let directory='test'
let dirbuff=Buffer.from(directory)

let files=fs.readdirSync(directory)
console.log(files)
