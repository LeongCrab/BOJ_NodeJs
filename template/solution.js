const fs = require('fs');
// one line input
let input = fs.readFileSync('./template/input.txt').toString().split(' ');
// multi line input
//let input = fs.readFileSync('./template/input.txt').toString().split('\n');
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
let answer = -1;
console.log(answer);