export const promiseBasic = () => {
	// Create a promise
	const myPromise = new Promise((resolve, reject) => {
		// const status = true;
		const status = Math.random() > 0.5;

		if (status) {
			resolve("Operation successful!"); // Resolved with a value
		} else {
			reject("Operation failed!"); // Rejected with an error message
		}
	});

	// Handle the promise
	myPromise
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.error(error);
		});
};

// promiseBasic();
