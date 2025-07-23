export const syncBlocking = () => {
	const massiveNumber = 1_000_000_000n;

	const simulateMassiveTask = (number) => {
		let result = 0n;
		for (let i = 1n; i <= number; i++) {
			result += i;
		}
		console.log(`It's a huge number: ${result}`);
	};

	const simulateSimpleTask = (number = 100) => {
		let result = 0;
		for (let i = 1; i <= number; i++) {
			result += i;
		}
		console.log(`It's a small number: ${result}`);
	};

	console.log(`Normal Task #1`);
	simulateMassiveTask(massiveNumber);
	console.log(`Normal Task #2`);
	simulateSimpleTask();
	console.log(`Normal Task #3`);
};

// syncBlocking();
