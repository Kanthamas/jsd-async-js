/* 
TODO-01: Create a function named fetchPostsThen
         Use fetch('https://dummyjson.com/posts')
         Use .then() to convert response to JSON
         Use another .then() to log the posts data
         Use .catch() to handle errors

TODO-02: Export fetchPostsThen and test it in main.js 
*/

export const fetchPostsThen = () => {
	const endpoint = "https://dummyjson.com/posts";
	fetch(endpoint)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		})
		.then((data) => {
			console.log("✅ Posts fetched (then):", data.posts);
		})
		.catch((error) => {
			console.error("⚠️ Error fetching posts (then):", error);
		});
};
