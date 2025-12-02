import {data} from '../data/items.mjs'



const showData = (section) => {
    if(data){
     data.forEach(element => {
        parseData(element, section);
      });
    }
   }

/*
   <div class="item">
    <h2>Title</h2>
    <figure><img src="images/webp/beninsculture.webp" alt="title" height="200" width="300" loading="lazy" ></figure>
    <address>Benin State</address>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ad.</p>
    <button>Learn More</button>
    </div>

*/

function parseData(element, sect){
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const figure = document.createElement('figure');
        const img = document.createElement('img');

        const address = document.createElement('address');
        const p = document.createElement('p');
        const button = document.createElement('button');

         div.setAttribute('class', 'item');
        h2.innerHTML = element.name;
        
        img.setAttribute('src', element.image);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('height', '200');
        img.setAttribute('width', '300');
        img.setAttribute('alt', element.name);

        address.innerHTML = element.address;
        if((element.description).length > 110)
        p.innerHTML = (element.description + "").substring(0, 110) + "...";
        else p.innerHTML = element.description;
        button.innerHTML = 'learn more..';

        figure.appendChild(img);
        div.appendChild(h2);
        div.appendChild(figure);
        div.appendChild(address);
        div.appendChild(p);
        div.appendChild(button);
        sect.appendChild(div);
        
}


const dirdisplay = document.querySelector('#dir-display');
if(dirdisplay != undefined)
    showData(dirdisplay);

// ms = 1000000
//  ms => 1 s
// 60 * ms => 1 m
// 60 * 60 * ms = > 1 hr

// 24 * 60 * 60 * ms => 1 day




function msToDay(ms){
  const oneday = 1000000 * 60 * 60 * 24;
  let days = (Date.now() - ms) / oneday;
   console.log("last visit: " + days);
  return days;
}

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


function displayModal(msg){
    const div = document.getElementById('content');
    div.innerHTML = '';
    const h4 = document.createElement('h4');
    h4.innerHTML = msg;
    div.appendChild(h4);
    modal.style.display = "block";
}

const showModal = () => {
  let message = "";
  if(localStorage.getItem('lastvisit') != undefined){
   const lastvisit = localStorage.getItem('lastvisit');
    let days = msToDay(lastvisit);
    if(days < 24){
      message = "Back so soon! Awesome";
    }
    else{
      const day = days == 24 ? 'day':'days';
      message = `You last visited ${n/24} ${day} ago.`;
    }
}else{
  localStorage.setItem('lastvisit', Date.now());
   message = "Welcome! Let us know if you have a questions."
}
  displayModal(message);
}

showModal();