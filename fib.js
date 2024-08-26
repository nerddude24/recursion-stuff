function fibIter(n) {
	if (n < 0) {
		console.error("Can't fib negative numbers!");
		return [];
	}

	let fibs = [0, 1];

	for (let i = 2; i < n; i++) {
		fibs.push(fibs[i - 1] + fibs[i - 2]);
	}

	return fibs;
}

let fibs = [0, 1];
function fibRec(n) {
	if (n < 0) {
		console.error("Can't fib negative numbers!");
		return [];
	}

	if (n <= 1) return n;

	fibs[n] = fibRec(n - 1) + fibRec(n - 2);

	return fibs[n];
}

console.log(fibIter(8));
console.log(fibRec(7));
console.log(fibs);
