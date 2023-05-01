const fs = require('fs');
let input = fs.readFileSync('./1568/input.txt').toString().trim();
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
let n = +input;
let answer = 0;
let k = 1;
while (n > 0) {
  answer += 1;
  n -= k;
  k += 1;
  if (n < k) k = 1;
}

console.log(answer);