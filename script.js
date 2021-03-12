let lexOrigin;

const send = () => {
	console.log(parent);
    	parent.postMessage('hello', lexOrigin);
}

const getData = () => {
	fetch('https://reqres.in/api/users?page=2').then(response => {
		console.log(response);
		alert(response);
	});	
}

function modifyText(event) {
	if (event.origin.indexOf(lexOrigin)) { 
		alert('received ' + event.data);
	} else {
		alert('received ' + event.data);
		lexOrigin = event.data;
	}
}

window.addEventListener("message", modifyText.bind(this));


window.addEventListener('unload', (event) => {
	event.preventDefault();
	console.log('unload');
  	parent.postMessage('hello', lexOrigin);
});

window.addEventListener('beforeunload', (event) => {
	event.preventDefault();
	console.log('beforeunload');
  	parent.postMessage('hello', lexOrigin);
});
