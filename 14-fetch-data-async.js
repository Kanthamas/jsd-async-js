export const fetchDataAsync = async () => {
	const endpoint = "https://jsonplaceholder.typicode.com/posts";
	try {
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error("Failed to fetch posts");
		}
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log("Error occurred: ", error);
	}
};

// fetchDataAsync();
