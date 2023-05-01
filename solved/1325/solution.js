const fs = require('fs');
const [[n, m], ...inputs] = fs.readFileSync('./1325/input.txt').toString().trim().split('\n').map(e => e.split(' ').map(Number));
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
const graph = Array.from(Array(n + 1), () => []);
for (const input of inputs) {
	const [b, a] = input;
	graph[a].push(b);
}

const dfs = (start, visited) => {
	for (const node of graph[start]) {
		if (!visited.includes(node)) {
			visited.push(node);
			dfs(node, visited);
		}
	}
}

let max = -1;
let answer = [];
for (let i = 1; i < n + 1; i++) {
	const visited = [];
	visited.push(i);
	dfs(i, visited);
	const cnt = visited.length;
	if (max < cnt) {
		answer = [i];
		max = cnt;
	} else if (max == cnt) {
		answer.push(i);
	}
}

console.log(answer.sort().join(' '));