const fs = require('fs');
const input = fs.readFileSync('./17219/input.txt').toString().trim().split('\n').map(e => e.split(' '));
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
const answer = [];
const [n, m] = input[0].map(Number);
const data = input.slice(1, n + 1);
const map = new Map();
data.forEach(([key, value]) => {
    map.set(key, value);
});

const target = input.slice(n + 1);
target.forEach(([key]) => {
    answer.push(map.get(key));
});

console.log(answer.join('\n'));