const fs=require('fs');
const write_string=fs.readFileSync('test2.txt','utf-8');
fs.writeFileSync('test3.txt', write_string)
