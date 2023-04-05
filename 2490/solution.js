const fs = require('fs');
let inputs = fs.readFileSync('./2490/input.txt').toString().trim().split('\n');
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.

for (const input of inputs) {
	let answer = -1;
	const back = input.split(' ').reduce((ac, value) => ac + (value === '1'), 0);
	const score = back == 4 ? 4 : 3 - back;
	answer = String.fromCharCode('A'.charCodeAt(0) + score);
	console.log(answer);
}
