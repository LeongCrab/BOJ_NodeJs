const fs = require('fs');
const [n, input1, input2] = fs.readFileSync('./1269/input.txt').toString().trim().split('\n');
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
const total = n.split(' ').reduce((sum, value) => sum + +value, 0);
const A = input1.split(' ');
const B = input2.split(' ');
const union = new Set([...A, ...B]);

const answer = 2 * union.size - total;
console.log(answer);