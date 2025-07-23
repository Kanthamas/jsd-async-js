export const asyncAwaitBasic = async () => {
	const myPromise = new Promise((resolve, reject) => {
		const status = Math.random() > 0.5;
		if (status) {
			resolve("✅ Operation successful!");
		} else {
			reject("❌ Operation failed!");
		}
	});

	try {
		const result = await myPromise;
		console.log(result);
	} catch (error) {
		console.error(error);
	}
};

// asyncAwaitBasic();
