const fs = require('fs');
const [[n], numbers] = fs.readFileSync('./1253/input.txt').toString().trim().split('\n').map(e => e.split(' ').map(Number));
//BOJ 채점 시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
numbers.sort((a, b) => a - b);
let answer = 0;

numbers.forEach((element, index) => {
	let start = 0;
	let end = n - 1;
	while (start < end) {
		const sum = numbers[start] + numbers[end];
		if (sum > element) end--;
		else if (sum < element) start++;
		else {
			if (start != index && end != index) {
				answer++;
				break;
			} else if (start === index) start++;
			else end--;
		}
	}
});

console.log(answer);