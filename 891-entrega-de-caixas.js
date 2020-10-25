var input = require('fs').readFileSync('0', 'utf8');
var lines = input.split('\n').map(item => parseInt(item));

var A = lines[0];
var B = lines[1];
var C = lines[2];

var viagens = 0;

if(A < B || (A + B) < Z) {
    viagens++
} 


console.log(viagens);
