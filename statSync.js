const fs = require('fs');

const path = './produce-gsc-small/index_un-s.js';
const stats = fs.statSync(path);
console.log(stats.mtime);

let oldestDate = new Date();
console.log(oldestDate);

console.log(new Date().toISOString());
