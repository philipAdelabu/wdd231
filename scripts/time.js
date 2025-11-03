const year = document.querySelector('#currentyear')

const today = new Date();
year.innerHTML = today.getFullYear();
document.querySelector('#lastModified').innerHTML = "Last modification: " + document.lastModified;