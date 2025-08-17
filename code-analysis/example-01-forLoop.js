"use strict";
import { nums } from "./generateNumbers.js";

function sumArray(arr) {
	// O(1)  → function definition, constant
	let sum = 0; // O(1)  → single variable assignment
	for (let i = 0; i < arr.length; i++) {
		// O(n)  → loop runs n times (n = arr.length)
		sum += arr[i]; // O(1) each iteration → total O(n)
	}
	return sum; // O(1) → returning result
}

const result = sumArray(nums);
console.log(result);
