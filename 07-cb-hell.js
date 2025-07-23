export const cbHell = () => {
	console.log("Start");

	setTimeout(() => {
		console.log("Step 1: Hello! 😀");
		setTimeout(() => {
			console.log("Step 2: Well, Hello again! 😅");
			setTimeout(() => {
				console.log("Step 3: Oh no! What the (callback) hell! 😭");
				setTimeout(() => {
					console.log("Step 4: Thank the universe; it's finally over! 🤪");
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);

	console.log("End");
};

// cbHell();
