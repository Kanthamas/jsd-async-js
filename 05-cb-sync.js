export const cbSync = () => {
	const mainFunction = (callback) => {
		console.log("Before calling callback");
		callback();
		console.log("After calling callback");
	};

	const syncCallback = () => {
		console.log("I am a synchronous callback.");
	};

	mainFunction(syncCallback);
};

// cbSync();
