console.log("Hello");

fetch('https://www.youtube.com/watch?v=6ruEbGhJZIg').then(function (response) {
	if (response.ok) {
		return response.text();
	}
	throw response;
}).then(function (text) {
	console.log(text);
});
