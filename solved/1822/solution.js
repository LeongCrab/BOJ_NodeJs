const fs = require('fs');
const inputs = fs.readFileSync('./1822/input.txt').toString().trim().split('\n').map(e => e.split(' ').map(Number));
//BOJ 채점 시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
const [n, m] = inputs[0];
const a = inputs[1];
const b = inputs[2];

const answer = new Set();
a.forEach(e => answer.add(e));
b.forEach(e => answer.delete(e));

console.log(answer.size);
if (answer.size) {
	console.log([...answer].sort((a, b) => a - b).join(' '));
}