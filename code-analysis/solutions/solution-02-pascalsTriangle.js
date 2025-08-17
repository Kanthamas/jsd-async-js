const generate = (numRows) => {
	let triangle = [];

	for (let i = 0; i < numRows; i++) {
		let row = new Array(i + 1).fill(1);

		for (let j = 1; j < i; j++) {
			row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
			// console.log(`inner loop ==> i: ${i}, j: ${j}, row[j]: ${row[j]}`);
		}

		triangle.push(row);

		// console.log(`outer loop ==> i: ${i}, output: `, triangle);
		// console.log(`------------------------`);
	}

	return triangle;
};

/* 
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

const numRows = 5;
const test = generate(numRows);
console.log(test);
