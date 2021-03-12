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
	lexOrigin = event.data;
}

document.addEventListener("message", handleMessage.bind(this));


document.addEventListener('unload', (event) => {
	console.log('unload');
	parent.postMessage('hello', '*');
});

document.addEventListener('beforeunload', (event) => {
	console.log('beforeunload');
	parent.postMessage('hello', '*');
});
