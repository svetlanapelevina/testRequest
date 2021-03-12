let lexOrigin;

const send = () => {
	console.log(parent);
    	parent.postMessage('hello', '*');
}

const getData = () => {
	fetch('https://reqres.in/api/users?page=2').then(response => {
		console.log(response);
		alert(response);
	});	
}

function modifyText(message) {
	alert('received ' + message.data);
	lexOrigin = message.data;
}

window.addEventListener("message", modifyText.bind(this));


window.addEventListener('unload', (event) => {
	event.preventDefault();
	console.log('unload');
  	parent.postMessage('hello', '*');
});

window.addEventListener('beforeunload', (event) => {
	event.preventDefault();
	console.log('beforeunload');
  	parent.postMessage('hello', '*');
});
