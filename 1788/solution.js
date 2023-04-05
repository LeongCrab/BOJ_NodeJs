const fs = require('fs');
let input = fs.readFileSync('./1788/input.txt').toString().trim();
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
const MOD = 1e9;
const n = +input;
const dp = new Array(Math.abs(n) + 1).fill(0);
dp[1] = 1;
if (n >= 0) {
    for (let i = 2; i < n + 1; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
    }
} else {
    for (let i = 2; i < Math.abs(n) + 1; i++) {
        dp[i] = (dp[i - 2] - dp[i - 1]) % MOD;
    }
}

const answer = dp[Math.abs(n)];
console.log(answer > 0 ? 1 : answer === 0 ? 0 : -1);
console.log(Math.abs(answer));