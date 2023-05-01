const fs = require('fs');
let input = fs.readFileSync('./25314/input.txt').toString().trim();
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
let answer = '';
const n = +input / 4;
for (let i = 0; i < n; i++) {
	answer += 'long ';
}
answer += 'int';

console.log(answer);