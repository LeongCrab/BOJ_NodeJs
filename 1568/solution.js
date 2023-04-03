const fs = require('fs');
let input = fs.readFileSync('./1568/input.txt').toString();

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