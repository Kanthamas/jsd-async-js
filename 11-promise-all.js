export const promiseAllOrders = () => {
	console.log("📝 Starting all orders…");

	// create promises each time the function runs
	const pizza = new Promise(
		(resolve, reject) =>
			// 🧪 try swapping resolve/reject to test
			setTimeout(() => resolve("🍕 Pizza is ready!"), 3000)
		// setTimeout(() => reject("🍕 Pizza is not ready!"), 3000)
	);

	const drink = new Promise(
		(resolve, reject) => setTimeout(() => resolve("🥤 Drink is ready!"), 1000)
		// setTimeout(() => reject("🥤 Drink is not ready!"), 2000)
	);

	const dessert = new Promise(
		(resolve, reject) => setTimeout(() => resolve("🍰 Dessert is ready!"), 2000)
		// setTimeout(() => reject("🍰 Dessert is not ready!"), 1000)
	);

	Promise.all([pizza, drink, dessert])
		.then((values) => {
			console.log("✅ All items are ready:", values);
		})
		.catch((error) => {
			console.error("⚠️ One of the orders failed!", error);
		})
		.finally(() => {
			console.log("ℹ️ All orders processed (success or fail).");
		});
};

// promiseAllOrders();
