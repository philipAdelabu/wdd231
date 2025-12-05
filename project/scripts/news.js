import {url} from '../data/items.mjs'




const showData =  async (section, url) => {
   try{
  const response = await fetch(url); // fetching the data, a request
   //  parse the JSON data
  const res = await response.json();
    if(res.response.status === 'ok'){
      const db = res.response.results;
     var id = Math.floor(Math.random() * db.length);
     const sect = document.querySelector('#random-news');
     sect.appendChild(parseData(db[id]));
     slideFunc(db, id, sect);
     db.forEach(element => {
        section.appendChild(parseData(element));
      });
    }
  }catch(error){
     console.log(error);
    }
   }

   function slideFunc(db, id, sect){
     var arId = [];
     arId.push(id);
     while(arId.length < 5){
        while(arId.indexOf(id) != -1){
          id = Math.floor(Math.random() * db.length);
        }
        arId.push(id);
     }
    var num = 0;
     setInterval(()=>{
         sect.innerHTML = "";
        if(num >= arId.length){
           num = 0;
           sect.appendChild(parseData(db[arId[num]]));
        }else 
           sect.appendChild(parseData(db[arId[num]]));
      num++;
     }, 5000);
   }


        /*        
                 <div class="card">
                    <div class="card-figure">
                     <figure></figure>
                    </div>
                      <div class="card-content"> 
                        <h3>News Title</h3>
                        <p class="content"></p>
                        <p class="address-read-more"> <address class="time">time is here</address>  <a href="#"> read more..</a></p>
                      </div>
                  </div>
        */

function parseData(element){
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const address = document.createElement('address');
        const div3 = document.createElement('div');
        const h3 = document.createElement('h3');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const a = document.createElement('a');
       
        div1.setAttribute('class', 'card');
        div2.setAttribute('class', 'card-figure');

        img.setAttribute('src', element.fields.thumbnail);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('height', '200');
        img.setAttribute('width', '300');
        img.setAttribute('alt', extractTitle(element.id));
     

        address.setAttribute('class', 'time');
        div3.setAttribute('class', 'card-content');

        p1.setAttribute('class', 'content');
        p2.setAttribute('class', 'address-read-more');
        a.setAttribute('href', element.webUrl);
        a.setAttribute('target', "_blank");

        a.innerHTML = 'read more..';

        const title = extractTitle(element.id);
        if((title).length > 70)
        h3.innerHTML = (title).substring(0, 70) + "...";
        else h3.innerHTML = title;

        p1.innerHTML = element.webTitle;
    
        figure.appendChild(img);
        div3.appendChild(h3);
    
        address.innerHTML = element.sectionName;
        p2.appendChild(address)
        p2.appendChild(a);
        
        div3.appendChild(p1)
        div3.appendChild(p2);
        div2.appendChild(figure);
       
        div1.appendChild(div2);
        div1.appendChild(div3);
        
        return div1;
      // sect.appendChild(div1);        
}

/*
const dirdisplay = document.querySelector('#card-display');
if(dirdisplay != undefined)
    showData(dirdisplay, url);

*/

// ms = 1000000
//  ms => 1 s
// 60 * ms => 1 m
// 60 * 60 * ms = > 1 hr
// 24 * 60 * 60 * ms => 1 day


function msToDay(ms){
  const oneday = 1000000 * 60 * 60 * 24;
  return  (Date.now() - ms) / oneday;
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
    console.log("Day: " + days);
    if(days < 24){
      message = "Back so soon! Awesome.";
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




function extractTitle(str){
  // id": "world/live/2025/dec/02/ukraine-war-live-trump-peace-deal-witkoff-to-meet-putin",
  let arT = (str.split('/'));
  arT = arT[arT.length - 1].split('-');
  var title = "";
  arT.forEach(word => {
       const fletter =  word.charAt(0).toUpperCase();
       const  rletter = word.slice(1);
        title += fletter + rletter + " ";
      });
  return title;
}


 

   const hrf = window.location.pathname;
   getPageName(hrf);

   function getPageName(hrf){
     var arP = hrf.split('/');
     arP = arP[arP.length -1].split('.')[0];
     var uri = url;
     if(arP !== 'index'){
       uri = url+"&section="+arP;
      document.getElementById('news-section').innerHTML = arP.toUpperCase();
     }
     const dirdisplay = document.querySelector('#card-display');
     if(dirdisplay != undefined)
       showData(dirdisplay, uri);   

   }


   const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');
const closeModalButton = document.getElementById('close-modal');

if(modal != undefined){

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

  showModal();
}



