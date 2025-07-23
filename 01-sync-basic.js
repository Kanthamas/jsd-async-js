export const syncBasic = () => {
	const logTwo = () => {
		console.log(2);
	};

	const logTwoAndThree = (message) => {
		logTwo();
		console.log(message);
	};

	console.log(1);

	logTwoAndThree(3);

	console.log(4);
};

// syncBasic();
