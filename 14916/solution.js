const fs = require('fs');
let input = fs.readFileSync('./14916/input.txt').toString();

const n = +input;
const dp = new Array(n + 1).fill(Infinity);
let answer = 0;

if (n >= 2) dp[2] = 1;
if (n >= 5) dp[5] = 1;

for (let i = 0; i < n + 1; i++) {
	if (i < 2) dp[i] = Infinity;
	else if (i < 5) dp[i] = Math.min(dp[i], dp[i - 2] + 1);
	else dp[i] = Math.min(dp[i], dp[i - 2] + 1, dp[i - 5] + 1);

}

answer = dp[n];
console.log(answer === Infinity ? -1 : answer);