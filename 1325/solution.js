const fs = require('fs');
const [[n, m], ...inputs] = fs.readFileSync('./1325/input.txt').toString().trim().split('\n').map(e => e.split(' ').map(Number));
//BOJ 체점시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
const graph = Array.from(Array(n + 1), () => []);
for (const input of inputs) {
	const [b, a] = input;
	graph[a].push(b);
}

function dfs(start) {
	visited[start] = true;
	for (const node of graph[start]) {
		if (!visited[node]) {
			dfs(node);
			cnt += 1;
		}
	}
}

let max = -1;
let answer = [];
for (let i = 1; i < n + 1; i++) {
	cnt = 0;
	visited = new Array(n + 1).fill(false);
	dfs(i);
	if (max < cnt) {
		answer = [i];
		max = cnt;
	} else if (max == cnt) {
		answer.push(i);
	}
}

console.log(answer.sort().join(' '));