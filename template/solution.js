const fs = require('fs');
let input = fs.readFileSync('./template/input.txt').toString().trim().split(' ').map(e => e.split(' ').map(Number));
//BOJ 채점 시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
let answer = -1;

console.log(answer);