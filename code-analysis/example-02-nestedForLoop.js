"use strict";
import { generateNumbers } from "./generateNumbers.js";

function sumPairs(arr) {
	// O(1) → function definition
	let sum = 0; // O(1) → single variable assignment
	for (let i = 0; i < arr.length; i++) {
		// Outer loop runs n times → O(n)
		for (let j = 0; j < arr.length; j++) {
			// Inner loop runs n times for each outer loop → O(n)
			sum += arr[i] + arr[j]; // O(1) each iteration → O(n^2) total
		}
	}
	return sum; // O(1) → returning result
}

const nums = generateNumbers(10000);
const result = sumPairs(nums);
console.log(result);
