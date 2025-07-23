export const asyncBasic = () => {
	console.log(`Start`);

	setTimeout(() => {
		console.log(`Wait for 1 second -- I'm back 😎`);
	}, 1000);

	console.log(`End`);
};

// asyncBasic();
