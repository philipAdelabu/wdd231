//fname=Philip&lname=mope&btitle=Softwar&email=adebisiphilip%40gmail.com&
// phone=08137121340&business=Software+Development&type=Bronze+Membership&
// discription=&timestamp=

const params = new URLSearchParams(window.location.search);
document.getElementById('fname').innerHTML = params.get('fname');
document.getElementById('lname').innerHTML = params.get('lname');
document.getElementById('phone').innerHTML = params.get('phone');
document.getElementById('email').innerHTML = params.get('email');
document.getElementById('bname').innerHTML = params.get('bname');
document.getElementById('timestamp').innerHTML = params.get('timestamp');