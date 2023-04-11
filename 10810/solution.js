const fs = require('fs');
const [[n, m], ...inputs] = fs.readFileSync('./10810/input.txt').toString().trim().split('\n').map(e => e.split(' ').map(Number));
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
const buckets = new Array(n).fill(0);
for (const input of inputs) {
	const [i, j, k] = input;
	for (let idx = i - 1; idx < j; idx++) {
		buckets[idx] = k;
	}
}
let answer = buckets.join(' ');

console.log(answer);