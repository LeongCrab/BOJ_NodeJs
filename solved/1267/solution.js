const fs = require('fs');
const [[n], input] = fs.readFileSync('./1267/input.txt').toString().trim().split('\n').map(e => e.split(' ').map(Number));
//BOJ 채점 시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
let answer = '';
let costY = 0;
let costM = 0;
input.forEach((e) => {
    costY += (Math.floor(e / 30) + 1) * 10;
    costM += (Math.floor(e / 60) + 1) * 15;
});

if (costY < costM) {
    answer = 'Y ' + costY;
} else if (costY == costM) {
    answer = 'Y M ' + costY;
} else {
    answer = 'M ' + costM;
}

console.log(answer);