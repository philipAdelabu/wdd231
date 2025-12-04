

const params = new URLSearchParams(window.location.search);
document.getElementById('fname').innerHTML = params.get('fname');
document.getElementById('lname').innerHTML = params.get('lname');
document.getElementById('email').innerHTML = params.get('email');
document.getElementById('timestamp').innerHTML = params.get('timestamp');