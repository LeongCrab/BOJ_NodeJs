const fs = require('fs');
const [[n, m, k, x], ...edges] = fs.readFileSync('./18352/input.txt').toString().trim().split('\n').map(e => e.split(' ').map(Number));
//BOJ 채점 시 input 파일 경로는 /dev/stdin으로 변경해주어야 한다.
let answer = [];
const graph = Array.from(Array(n + 1), e => []);

edges.forEach(e => {
	const [from, to] = e;
	graph[from].push(to);
});

const q = new Queue();
const dis = new Array(n + 1).fill(-1);
dis[x] = 0;
graph[x].forEach(e => {
	q.enqueue(e);
	dis[e] = 1;
});

while (!q.isEmpty()) {
	const cur = q.dequeue();
	graph[cur].forEach(e => {
		if (dis[e] == -1) {
			dis[e] = dis[cur] + 1;
			q.enqueue(e);
		}
	});
}

dis.forEach((e, idx) => {
	if (e == k) answer.push(idx);
})

if (answer.length) {
	console.log(answer.join('\n'));
} else {
	console.log(-1);
}


function Node(value) {
	this.value = value;
	this.next = null;
}

function Queue() {
	this.front = null;
	this.back = null;
	this.size = 0;

	this.enqueue = function (value) {
		const node = new Node(value);
		if (this.size === 0) {
			this.front = node;
			this.back = node;
		} else {
			this.back.next = node;
			this.back = node;
		}
		this.size++;
	};

	this.dequeue = function () {
		if (this.size === 0) {
			throw new Error("큐가 비었소");
		}
		const value = this.front.value;
		this.front = this.front.next;
		this.size--;
		if (this.size === 0) this.back = null;
		return value;
	};

	this.isEmpty = function () {
		return this.size === 0;
	};

	this.peek = function () {
		if (this.size === 0) return null;
		return this.front.value;
	};
}