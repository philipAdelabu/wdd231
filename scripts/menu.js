const menu = document.getElementById('menu');
const menuCross = document.getElementById('menu-cross');
const lineMenu = document.getElementById('line-menu');
const menuNav = document.getElementById('menu-nav');

let nav = 'none';

menu.addEventListener('click', function(){
    console.log(window.innerWidth);
    if(window.innerWidth <= 579){
    if(menuCross.style.display === 'block'){
        lineMenu.style.display = 'block';
        menuCross.style.display = 'none';
        menuNav.style.display = 'none';
    }else{
         lineMenu.style.display = 'none';
         menuCross.style.display = 'block';
         menuNav.style.display = 'flex';
    }
  }
});

nav =  menuNav.style.display;
let prev = window.innerWidth;
window.addEventListener('resize', function(){
    const curr = window.innerWidth
    if(prev !== curr && curr > 579){
        menuNav.style.display = 'block';
    }else{ 
        menuNav.style.display = nav;
    }
    if(prev > 579){
          lineMenu.style.display = 'block';
          menuCross.style.display = 'none';  
    }
    prev = curr;
});

