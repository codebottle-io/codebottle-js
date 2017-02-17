function handleResponse(response) {
	if (response.ok)
		return response.json();
	else
		return response.json()
			.then(json => {
				var error = {
					status: response.status,
					error: response.error,
				};

				throw error;
			});
}

module.exports = {
	handleResponse
}