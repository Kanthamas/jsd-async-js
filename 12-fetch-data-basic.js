export 
const fetchDataBasic = () => {
	const endpoint = "https://jsonplaceholder.typicode.com/posts";
	fetch(endpoint)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch posts");
			}
			return response.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log("Error occurred: ", error);
		});
};

// fetchDataBasic();
