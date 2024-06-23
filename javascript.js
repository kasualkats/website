console.log("Hello");


/*
fetch('https://www.youtube.com/watch?v=6ruEbGhJZIg').then(function (response) {
	if (response.ok) {
		return response.text();
	}
	throw response;
}).then(function (text) {
	console.log(text);
});
*/

fetch('https://www.youtube.com/watch?v=6ruEbGhJZIg', {
    mode: 'no-cors'
  })
    .then(response => {
      if (response.ok) {
        console.log('Request successful:', response);
      } else {
        console.error('Request failed:', response);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });