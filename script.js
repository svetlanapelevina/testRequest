let lexOrigin = "https://vslightningtest-dev-ed.lightning.force.com";

function send() {
	let message = document.getElementById("message").value;
	alert(message);
    parent.postMessage(message, lexOrigin);
}