const year = document.querySelector('#currentyear')

const today = new Date();
year.innerHTML = today.getFullYear();
document.querySelector('#lastModified').innerHTML = "Last modification: " + document.lastModified;



const timestamp = document.getElementById('timestamp');
if(timestamp != undefined)
     timestamp.value = document.lastModified;