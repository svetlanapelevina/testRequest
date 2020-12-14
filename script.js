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
	alert('received ' + message);
	lexOrigin = message;
}

window.addEventListener("message", modifyText.bind(this));