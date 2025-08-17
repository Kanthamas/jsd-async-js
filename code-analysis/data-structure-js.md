# Basic Data Structure (in JavaScript)

## What is a Data Structure?

- A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently.

## Common Data Structures in JavaScript

### 1. Array – Ordered list

**Real-world use cases:**

- Storing list of items: shopping cart, to-do lists.
- Rendering UI: list of posts, comments, or product cards.
- Iterating through data: mapping over arrays to display elements in React/Vue.

```js
let arr = [10, 20, 30, 40];

// Access (O(1))
console.log(arr[2]); // 30

// Search (O(n))
console.log(arr.includes(30)); // true

// Insert at index 1 (O(n))
arr.splice(1, 0, 15); // [10, 15, 20, 30, 40]

// Delete at index 2 (O(n))
arr.splice(2, 1); // [10, 15, 30, 40]
```

### 2. Object (or Map) – Key-value pairs

**Real-world use cases:**

- Storing user profiles or configuration settings.
- Fast lookup: caching API responses by ID.
- Counting occurrences: e.g., count word frequency in text.

```js
let user = { name: "Alice", age: 25 };

// Access (O(1))
console.log(user.age); // 25

// Search (O(1)) → check property directly
console.log("name" in user); // true

// Insert (O(1))
user.email = "alice@example.com";

// Delete (O(1))
delete user.age;
```

### 3. Set – Unique values

**Real-world use cases:**

- Remove duplicates from arrays: user IDs, emails.
- Quick membership check: is a user already subscribed? Set is faster than searching an array.
- Tagging systems: each tag only once per item.

```js
let s = new Set([1, 2, 3]);

// Access (O(1)) → check existence
console.log(s.has(2)); // true

// Search (O(1)) → same as has()
console.log(s.has(3)); // true

// Insert (O(1))
s.add(4);

// Delete (O(1))
s.delete(2);
```

### 4. Stack (LIFO) – Last In First Out

**Real-world use cases:**

- Undo/Redo feature in text editors.
- Browser history: last visited page is popped first.
- Expression evaluation: parsing mathematical formulas.

```js
let stack = [];

// Insert (push) O(1)
stack.push(10);
stack.push(20);

// Delete (pop) O(1)
console.log(stack.pop()); // 20

// Access/Search O(n)
console.log(stack.includes(10)); // true
```

### 5. Queue (FIFO) – First In First Out

**Real-world use cases:**

- Print queue: documents are printed in order.
- Task scheduling: processing API requests one by one.
- Messaging systems: chat messages delivered in order.

```js
let queue = [];

// Insert (enqueue) O(1)
queue.push("task1");
queue.push("task2");

// Delete (dequeue) O(n)
console.log(queue.shift()); // "task1"

// Search O(n)
console.log(queue.includes("task2")); // true
```

### 6. Linked List – Nodes connected in sequence

**Real-world use cases:**

- Music playlist: navigate next/previous song efficiently.
- Browser tabs: moving forward/back between tabs.
- Memory-efficient insertion/deletion: real-time apps with frequent changes.

```js
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertAtHead(value) {
		// O(1)
		let newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
	}

	search(value) {
		// O(n)
		let current = this.head;
		while (current) {
			if (current.value === value) return true;
			current = current.next;
		}
		return false;
	}

	deleteHead() {
		// O(1)
		if (this.head) this.head = this.head.next;
	}
}

let list = new LinkedList();
list.insertAtHead(10);
list.insertAtHead(20);
console.log(list.search(10)); // true
list.deleteHead(); // remove 20
```

### 7. Tree – Hierarchical structure

**Real-world use cases:**

- DOM representation in browsers.
- File systems: folders and subfolders.
- Organization charts: company hierarchy.

```js
// A single node in a tree
class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null; // left child
		this.right = null; // right child
	}
}

// Example: build a simple tree
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);

console.log(root);
/*
 Tree looks like:
      10
     /  \
    5    15
*/
```

### 8. Graph – Nodes connected by edges

**Real-world use cases:**

- Social networks: friends, followers.
- Maps & navigation: shortest path between cities.
- Dependency management: npm packages, task dependencies.

```js
// Graph using adjacency list
let graph = {
	A: ["B", "C"],
	B: ["A", "D"],
	C: ["A", "D"],
	D: ["B", "C"],
};

console.log(graph);
/*
Graph connections:
  A -- B
  |    |
  C -- D
*/
```

## Big O Cheat Sheet (Common Operations)

| Data Structure | Access     | Search     | Insertion  | Deletion   |
| -------------- | ---------- | ---------- | ---------- | ---------- |
| Array          | O(1)       | **_O(n)_** | **_O(n)_** | **_O(n)_** |
| Object/Map     | O(1)       | O(1)       | O(1)       | O(1)       |
| Set            | O(1)       | O(1)       | O(1)       | O(1)       |
| Stack          | **_O(n)_** | **_O(n)_** | O(1)       | O(1)       |
| Queue          | **_O(n)_** | **_O(n)_** | O(1)       | **_O(n)_** |
| Linked List    | **_O(n)_** | **_O(n)_** | O(1)       | O(1)       |

## Tips for JS Beginners

1. Start with arrays and objects — they cover most use cases.
2. Use Set/Map for faster lookups when you need uniqueness or keys.
3. Visualize your data — draw boxes and arrows for linked lists, stacks, queues
4. Practice small problems: reverse an array, implement a stack, find duplicates.
