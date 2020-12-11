let lexOrigin = "https://vslightningtest-dev-ed.lightning.force.com";

function send() {
	let message1 = document.getElementById("message").value;
    parent.postMessage(message1, lexOrigin);
}


const request = new Request('https://www.mozilla.org/favicon.ico');

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

function fetchRequest() {
	fetch(request)
	  .then(response => alert(response);
}
