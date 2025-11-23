const title = /^[a-zA-Z  -]{7}$/;

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    const titleValue = document.getElementById('btitle').value;
    if (!title.test(titleValue)) {
        errorMessage('Business title requires  7 characters, letters, spaces, or hyphens only');
        event.preventDefault();
        return;
    } 
    
    const emailValue = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        errorMessage('Please enter a valid email address.');
        event.preventDefault();
        return;
    }
    const timestamp = document.getElementById('timestamp');
    timestamp.value = new Date().toISOString();
    // Additional validation can be added here as needed
});



const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');
const closeModalButton = document.getElementById('close-modal');

closeButton.onclick = function() {
    modal.style.display = "none";
}

closeModalButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



const readMoreLinks = document.querySelectorAll('.readmore');
readMoreLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        displayModal(link.id);
        modal.style.display = "block";
      }
    );
});

function displayModal(val){
    const div = document.getElementById('content');
    div.innerHTML = '';
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    if(val == 'non-profit'){
       h3.innerHTML = 'Non-Profit Membership';
       h4.innerHTML = '$0 /year';
       p1.innerHTML = 'Access to online directory';
       p2.innerHTML = 'Access to newsletter';
    }else if(val == 'bronze'){ 
        h3.innerHTML = 'Bronze Membership';
       h4.innerHTML = '$100 /year';
       p1.innerHTML = 'Access to Basic Benefits';
       p2.innerHTML = 'Invitation to Event';
       p3.innerHTML = 'Feature in listen directory';  
    }else if(val == 'silver'){
        h3.innerHTML = 'Silver Membership';
       h4.innerHTML = '$150 /year';
       p1.innerHTML = 'Access To Premium Benefits';
       p2.innerHTML = 'Personalized business consulting';
       p3.innerHTML = 'Access To Support'; 
    }else if(val == 'gold'){
        h3.innerHTML = 'Gold Membership';
       h4.innerHTML = '$300 /year';
       p1.innerHTML = 'Access To All Benefits';
       p2.innerHTML = 'Special Treatment';
       p3.innerHTML = 'Priority support'; 
    }
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
}

function errorMessage(msg){
    console.log('eerrror');
    const div = document.getElementById('content');
    div.innerHTML = '';
    const h3 = document.createElement('h3');
    const p1 = document.createElement('p');
    p1.setAttribute('class', 'error');
    h3.innerHTML = "Error";
    p1.innerHTML =  msg;
    div.appendChild(h3);
    div.appendChild(p1);
    modal.style.display = "block";
}