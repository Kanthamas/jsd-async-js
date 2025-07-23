export const cbAsync = () => {
	const asyncFunction = (callback) => {
		console.log("Start async task...");
		setTimeout(() => {
			console.log("Async task complete.");
			callback();
		}, 2000);
	};

	const asyncCallback = () => {
		console.log("I am an asynchronous callback.");
	};

	asyncFunction(asyncCallback);
};

// cbAsync();
