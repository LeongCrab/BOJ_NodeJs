const fs = require('fs');
const [[n, m], ...input] = fs.readFileSync('./11660/input.txt').toString().trim().split('\n').map(e => e.split(' ').map(Number));
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
const dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
const inputs = input.slice(n);

for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		dp[i + 1][j + 1] = dp[i][j + 1] + dp[i + 1][j] - dp[i][j] + input[i][j];
	}
}

const answer = [];
for (const [x1, y1, x2, y2] of inputs) {
	let sum = dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];
	answer.push(sum);
}

console.log(answer.join('\n'));