const fs = require('fs');
const [[n, m], ...inputs] = fs.readFileSync('./10813/input.txt').toString().trim().split('\n').map(e => e.split(' ').map(Number));
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
const buckets = new Array(n).fill(0).map((e, idx) => idx + 1);

for (const input of inputs) {
	const [i, j] = input;
	let temp = buckets[i - 1];
	buckets[i - 1] = buckets[j - 1];
	buckets[j - 1] = temp;
}

const answer = buckets.join(' ');
console.log(answer);