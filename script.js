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


window.addEventListener('load', (event) => {
  parent.postMessage('hello', 'https://svetlanapelevina.github.io/testRequest/');
});
