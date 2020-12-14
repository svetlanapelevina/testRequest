let lexOrigin = 'https://vsdev-developer-edition.na88.force.com/Napili/'

function send() {
	let message1 = document.getElementById("message").value;
    parent.postMessage(message1, lexOrigin);
}

const getData = () => {
	fetch('https://reqres.in/api/users?page=2').then(response => {
		console.log(response);
		alert(response);
	});	
}
