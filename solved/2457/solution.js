const fs = require('fs');
const [n, ...inputs] = fs.readFileSync('./2457/input.txt').toString().trim().split('\n');
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
const MIN = 301;
const MAX = 1201;

let answer = 0;
const flowers = [];

for (const input of inputs) {
	const flower = input.split(' ').map(Number);
	let start = (flower[0] * 100 + flower[1]);
	if (start < MIN) start = MIN;

	let end = (flower[2] * 100 + flower[3]);
	if (end > MAX) end = MAX;
	flowers.push([start, end]);
}

const comp = (a, b) => {
	if (a[0] < b[0]) return -1;
	else if (a[0] > b[0]) return 1;
	else {
		if (a[1] < b[1]) return -1;
		else return 1;
	}
}

flowers.sort(comp);

let idx = 0;
let end = MIN;

while (flowers) {
	if (end >= MAX || idx >= n || flowers[idx][0] > end) break;

	temp = -1;
	for (let i = idx; i < n; i++) {
		if (flowers[i][0] <= end) {
			if (temp <= flowers[i][1]) {
				temp = flowers[i][1];
			}
			idx = i + 1;
		} else {
			break;
		}
	}
	end = temp;
	answer += 1;
}

console.log(end < MAX ? 0 : answer);