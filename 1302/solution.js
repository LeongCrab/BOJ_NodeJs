const fs = require('fs');
const input = fs.readFileSync('./1302/input.txt').toString().trim().split('\n');
//BOJ 채점 시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
let answer = '';
const n = +input[0];
const data = input.splice(1);
const map = new Map();
data.forEach(e => {
	if (map.has(e)) {
		const cnt = map.get(e);
		map.set(e, cnt + 1);
	} else {
		map.set(e, 1);
	}
});

let max = 0;
map.forEach((v, k) => {
	if (v > max) {
		max = v;
		answer = k;
	} else if (v == max && k < answer) {
		answer = k;
	}
});

console.log(answer);