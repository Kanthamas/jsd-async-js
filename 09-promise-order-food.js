const logOrderStatus = (promise) => {
	console.log("📝 Order placed. Waiting for the result…");
	console.log(promise); // pending Promise
};

// Handle promise outcome
const handlePromise = (promise) => {
	promise
		.then((message) => {
			console.log("✅ Success:", message);
		})
		.catch((error) => {
			console.error("⚠️ Error:", error);
		})
		.finally(() => {
			console.log("ℹ️ Order process finished. Ready for the next order!");
		});
};

export const promiseOrderFood = () => {
	// Create the promise only when called
	const myPromise = new Promise((resolve, reject) => {
		const pizzaReady = Math.random() > 0.5;

		setTimeout(() => {
			if (pizzaReady) {
				resolve("✅ Your pizza is delivered! 🍕");
			} else {
				reject("❌ Sorry, we’ve run out of ingredients. 😢");
			}
		}, 3000);
	});

	logOrderStatus(myPromise);
	handlePromise(myPromise);
};

// promiseOrderFood();
