const fs = require('fs');
const [[n, m, p], input] = fs.readFileSync('./1205/input.txt').toString().trim().split('\n').map(e => e.split(' ').map(Number));
//BOJ 채점 시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
if (n == 0) {
	console.log(1);
} else {
	const min = Math.min(...input);
	let answer = -1;

	input.push(m);
	const record = input.sort((a, b) => b - a);
	const rank = record.indexOf(m) + 1;

	if (n < p || m > min) {
		answer = rank;
	}

	console.log(answer);
}