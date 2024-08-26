function mergeSort(arr) {
	if (!isNaN(arr)) return arr;

	const halfLen = Math.round(arr.length / 2);
	const left = mergeSort(arr.slice(0, halfLen));
	const right = mergeSort(arr.slice(halfLen));

	let final = [];
	let i = 0,
		j = 0;

	while (true) {
		// if one side is done just add the other side and finish
		if (j >= right.length) {
			final.push(left.slice(i));
			break;
		} else if (i >= left.length) {
			final.push(right.slice(j));
			break;
		}

		// merge
		if (left[i] <= right[j]) final.push(left[i++]);
		else final.push(right[j++]);
	}

	// flat is used to turn the arrays of numbers inside final to just numbers
	// eg: [[0], [2], [20]] becomes [0, 2, 20].
	return final.flat();
}

/* util functions */
function generateRandomIntArray(size, maxValue) {
	let arr = [];

	for (let i = size; i > 0; i--) {
		arr.push(Math.floor(Math.random() * maxValue));
	}

	return arr;
}

const isSorted = (arr) => arr.every((v, i, a) => !i || a[i - 1] <= v);
/*------------------*/

console.log(mergeSort([9, 0, 2, 5, 1, 3, 6, 7, 8, 4]));
console.log(isSorted(mergeSort(generateRandomIntArray(10000, 1000)))); // true
