export const generateNumbers = (
	numberOfElement = 10, // O(1) → function parameters assignment (constant)
	maxValue = 1_000_000, // O(1) → constant assignment
	minValue = 0 // O(1) → constant assignment
) => {
	let result = []; // O(1) → single variable assignment
	const min = Math.ceil(minValue); // O(1) → math operation
	const max = Math.floor(maxValue); // O(1) → math operation

	for (let i = 0; i < numberOfElement; i++) {
		// O(n) → loop runs n times
		const random = Math.floor(Math.random() * (max - min + 1)) + min; // O(1) per iteration
		result.push(random); // O(1) per iteration (array push is amortized O(1))
	}

	return result; // O(1) → returning reference to array
};

// ✅ Overall time complexity: O(n) → grows linearly with numberOfElement
// ✅ Space complexity: O(n) → stores n random numbers in result array

export const nums = generateNumbers();
// console.log(nums);
