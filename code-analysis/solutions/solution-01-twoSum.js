/* Brute Force */
const twoSum = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (target === nums[i] + nums[j]) return [i, j];
		}
	}
};

/* Hash Table or Hash Map (or Object in JS) */
/* const twoSum = (nums, target) => {
	const seen = {};

	for (let i = 0; i < nums.length; i++) {
		const currentNum = nums[i];
		const complement = target - currentNum;

		if (seen[complement] !== undefined) {
			// console.log(`index: ${i} | num: ${currentNum}`);
			return [seen[complement], i];
		}

		seen[currentNum] = i;

		// console.log(
		// 	`complement: ${complement} | i: ${i} ==> seen {${complement}, ${i}} `
		// );
		// console.log("-".repeat(20));
	}

	return null;
}; */

/* Map */
/* const twoSum = (nums, target) => {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (map.has(complement)) {
			return [map.get(complement), i];
		}
		map.set(nums[i], i);
	}
	return null;
}; */

/* Two pointers --> Two Sum (Sorted Array ONLY) */
/* const twoSumSorted = (nums, target) => {
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		const currentSum = nums[left] + nums[right];
		if (currentSum === target) {
			return [left, right];
		} else if (currentSum < target) {
			left++;
		} else {
			right--;
		}
	}
	return null;
}; */

// Test Case 1: //
const nums = [2, 7, 11, 15];
const target = 9;

// Test Case 2: //
// const nums = [3, 2, 4];
// const target = 6;

const test = twoSum(nums, target);
// const test = twoSumSorted(nums, target);
console.log(test);

// const test2 = twoSumSorted([0,1,2,3,4], target);
// console.log(test2);
