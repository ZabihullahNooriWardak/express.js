const fs = require('fs')
let zabiData = fs.readFileSync('./zabi.txt','utf-8')
console.log(zabiData)
fs.writeFileSync('./zabi.txt',`${zabiData}wowowowowowowoowwo`);
