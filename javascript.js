console.log("Hello");


fetch('https://socialblade.com/youtube/channel/UCQcPOKGlD7tXZst3iGDMt2Q').then(function (response) {
	if (response.ok) {
		return response.text();
	}
	throw response;
}).then(function (text) {
	console.log(text);
});

/*
 fetch('https://kasualkats.github.io/website/', {
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

*/