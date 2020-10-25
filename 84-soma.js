var input = require('fs').readFileSync('0', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines[0]);
var B = parseInt(lines[1]);
var S = A + B;

console.log(S);
