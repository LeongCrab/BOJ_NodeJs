const fs = require('fs');
const [n, m] = fs.readFileSync('./1783/input.txt').toString().trim().split(' ').map(e => e.split(' ').map(Number));
//BOJ 채점 시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
let answer = -1;
if (n == 1) {
	answer = 1;
} else if (n == 2) {
	answer = Math.min(4, Math.floor((m - 1) / 2) + 1);
} else if (m < 7) {
	answer = Math.min(4, m);
} else {
	answer = m - 2;
}

console.log(answer);