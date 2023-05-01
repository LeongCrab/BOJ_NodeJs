const fs = require('fs');
const [a, b] = fs.readFileSync('./1120/input.txt').toString().trim().split(' ');
//BOJ 채점 시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
let answer = 50;
for (let i = 0; i <= b.length - a.length; i++) {
	let diff = 0;
	for (let j = 0; j < a.length; j++) {
		if (a.at(j) !== b.at(i + j)) diff++;
	}
	if (diff < answer) answer = diff;
}

console.log(answer);