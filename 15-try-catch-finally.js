const onSuccess = (data) => {
	console.log("✅ Data fetched successfully:", data);
};

const onFailure = (error) => {
	console.error("❌ Error fetching data:", error.message);
};

export const fetchDataAsyncSingle = async (id) => {
	const endpoint = `https://jsonplaceholder.typicode.com/todos/${id}`;
	try {
		const response = await fetch(endpoint);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		onSuccess(data);
	} catch (error) {
		onFailure(error);
	} finally {
		console.log("ℹ️ Fetch operation completed.");
	}
};

// fetchDataAsyncSingle(1);
