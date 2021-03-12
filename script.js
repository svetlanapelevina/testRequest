// let lexOrigin;

// const send = () => {
// 	parent.postMessage('hello', '*');
// }

// const getData = () => {
// 	fetch('https://reqres.in/api/users?page=2').then(response => {
// 		console.log(response);
// 		alert(response);
// 	});	
// }

function handleMessage(event) {
	alert('received ' + event.data);
// 	lexOrigin = event.data;
	console.log(window.location.origin);
}

window.addEventListener("message", handleMessage.bind(this));


window.addEventListener('unload', (event) => {
	console.log('unload');
	parent.postMessage('hello', '*');
});

this.addEventListener('beforeunload', (event) => {
	console.log('beforeunload');
	parent.postMessage('hello', '*');
	console.log(window.location.origin);
});
