let lexOrigin;

const send = () => {
	console.log(lexOrigin);
	let message1 = document.getElementById("message").value;
    parent.postMessage(message1, lexOrigin);
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
	console.log('unload');
  	parent.postMessage('hello', '*');
});

window.addEventListener('beforeunload', (event) => {
	console.log('beforeunload');
  	parent.postMessage('hello', '*');
});
