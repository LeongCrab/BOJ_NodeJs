const fs = require('fs');
let input = fs.readFileSync('./2890/input.txt').toString().trim().split('\n');
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
const answer = new Array(9).fill(0);
const results = [];
const [r, c] = input[0].split(' ').map(Number);
const regex = /[1-9]/;

for (let i = 1; i < r + 1; i++) {
	const row = input[i].split('');
	const loc = row.findIndex((element) => regex.test(element));
	if (loc == -1) continue;
	results.push([loc, row[loc]]);
}
results.sort((a, b) => b[0] - a[0]);

let order = 1;
let current = results[0][0];
for (const result of results) {
	if (current == result[0]) {
		answer[+result[1] - 1] = order;
	} else {
		order += 1;
		current = result[0];
		answer[+result[1] - 1] = order;
	}
}

answer.forEach(e => console.log(e));