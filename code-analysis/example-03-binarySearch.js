"use strict";
import { nums } from "./generateNumbers.js";

function binarySearch(arr, target) {
	// O(1) → function definition
	let left = 0; // O(1) → single assignment
	let right = arr.length - 1; // O(1) → single assignment

	while (left <= right) {
		// O(log n) → loop runs ~log₂(n) times
		let mid = Math.floor((left + right) / 2); // O(1) → calculate mid
		if (arr[mid] === target) {
			// O(1) → comparison
			return mid; // O(1) → return result
		} else if (arr[mid] < target) {
			// O(1) → comparison
			left = mid + 1; // O(1) → assignment
		} else {
			// O(1) → else branch
			right = mid - 1; // O(1) → assignment
		}
	}

	return -1; // O(1) → return result
}

// console.log(nums);
const arr = [
	564463, 42379, 651163, 26732, 992165, 89005, 924281, 78461, 373723, 949814,
];
// Sort ascending
// O(n log n) → array sorting
arr.sort((a, b) => a - b); // O(n log n) → sort numbers ascending
console.log(arr); // O(n) → printing array (linear with array length)

const target = 651163; // O(1) → single assignment

const searchResult = binarySearch(arr, target);
// O(log n) → binary search on sorted array
console.log(searchResult); // O(1) → printing result
