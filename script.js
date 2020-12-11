let lexOrigin = "https://vslightningtest-dev-ed.lightning.force.com";

function send() {
	let message = document.getElementById("message").value;
	alert(message);
    parent.postMessage(message, lexOrigin);
}

function sendMessage(message) {
	let message = document.getElementById("message").value;
	alert(message);
    parent.postMessage(message, lexOrigin);
}


const request = new Request('https://www.mozilla.org/favicon.ico');

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

function fetchRequest() {
	fetch(request)
	  .then(response => alert(response);
}
