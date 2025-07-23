export const syncOptimize = () => {
	const massiveNumber = 1_000_000_000;

	const simulateMassiveTask = (number) => {
		const result = (number * (number + 1)) / 2;
		console.log(`It's a huge number: ${result}`);
	};

	const simulateSimpleTask = (number = 100) => {
		const result = (number * (number + 1)) / 2;
		console.log(`It's a small number: ${result}`);
	};

	console.log(`Normal Task #1`);
	simulateMassiveTask(massiveNumber);
	console.log(`Normal Task #2`);
	simulateSimpleTask();
	console.log(`Normal Task #3`);
};

// syncOptimize();
