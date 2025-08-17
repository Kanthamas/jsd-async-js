# Big-O Notation (O-notation)

## What is Big-o?

- **Big-O notation** is a mathematical way to describe how an algorithm’s running time or space usage grows as the size of the input (`n`) increases.
- It focuses on the **worst-case scenario** and ignores constant factors or small terms — showing only the dominant growth rate.

## Why Big-O?

- It hides machine-dependent details (CPU speed, memory, compiler optimizations).
- Lets us compare algorithms abstractly.
- Helps predict scalability when input size gets very large.

## Big-O complexities grow with increasing input size n

| n   | O(1) | O(log n) (rounded) | O(n) | O(n log n) (rounded) | O(n²)  | O(2ⁿ)     | O(n!)      |
| --- | ---- | ------------------ | ---- | -------------------- | ------ | --------- | ---------- |
| 1   | 1    | 0                  | 1    | 0                    | 1      | 2         | 1          |
| 2   | 1    | 1                  | 2    | 2                    | 4      | 4         | 2          |
| 5   | 1    | log₂5 ≈ 2.32 → 2   | 5    | 12                   | 25     | 32        | 120        |
| 10  | 1    | log₂10 ≈ 3.32 → 3  | 10   | 33                   | 100    | 1024      | 3,628,800  |
| 20  | 1    | log₂20 ≈ 4.32 → 4  | 20   | 86                   | 400    | 1,048,576 | \~2.43e18  |
| 50  | 1    | log₂50 ≈ 5.64 → 6  | 50   | 282                  | 2,500  | \~1.13e15 | \~3.04e64  |
| 100 | 1    | log₂100 ≈ 6.64 → 7 | 100  | 664                  | 10,000 | \~1.27e30 | \~9.33e157 |

👉 Notes:

- O(1) = constant time, always stays the same.
- O(log n) assumes log base 2 (rounded).
- O(n log n) is common for efficient sorting algorithms.
- O(2ⁿ) and O(n!) explode very quickly, becoming infeasible even for moderate n.

## Code example

### O(n) --> For Loop

```js
function sumArray(arr) {
	// O(1)  → function definition, constant
	let sum = 0; // O(1)  → single variable assignment
	for (let i = 0; i < arr.length; i++) {
		// O(n)  → loop runs n times (n = arr.length)
		sum += arr[i]; // O(1) each iteration → total O(n)
	}
	return sum; // O(1) → returning result
}
```

**Total complexity**

- Inside loop: sum += arr[i] is O(1) per iteration
- Loop runs n times → O(n) overall
- Other operations (let sum = 0, return sum) are constants → negligible

> ✅ Final time complexity: O(n) (linear)
>
> ✅ Space complexity: O(1) (just one variable sum, no extra structures)

---

### O(n²) --> Nested For Loop

```js
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
```

**Total complexity**

- Outer loop = O(n)
- Inner loop = O(n) (runs for each outer loop iteration)
- Combined = O(n \* n) = O(n²)
- Other operations are constants → negligible

> ✅ Final time complexity: O(n²) (quadratic)
>
> ✅ Space complexity: O(1) (just one variable sum, no extra structures)

---

### O(log n) → Binary Search

```js
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
```

**Total complexity**

- Loop halves the array size every time → O(log n) iterations
- Inside each iteration, only constant-time operations → O(1)
- Combined → O(log n)

> ✅ Final time complexity: O(log n) (logarithmic)
>
> ✅ Space complexity: O(1) (just a few pointers/variables)

---
