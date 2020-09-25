
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
let mode='';

//toggleSwitch function
function toggleS(mode){
    
    document.documentElement.setAttribute('data-theme',`${mode}`);
    
    image1.src=`img/undraw_proud_coder_${mode}.svg`;
    image2.src=`img/undraw_feeling_proud_${mode}.svg`;
    image3.src=`img/undraw_conceptual_idea_${mode}.svg`;    
  
    nav.style.backgroundColor = mode==='dark' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = mode==='dark' ?'rgb(255 255 255 / 50%)':'rgb(0 0 0 / 50%)';
   
    toggleIcon.children[0].textContent = `${mode} Mode`;
    if (mode==='dark') {
        toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    }else {
        toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    }   
    localStorage.setItem("mode",`${mode}`); 
    toggleSwitch.checked = mode==='dark'? true:false;
}

// Switch Theme Dynamically
function switchTheme(event) {

    mode = event.target.checked ? 'dark':'light';
    toggleS(mode);
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// get mode(theme) in local storage
const currentTheme = localStorage.getItem('mode');
if (currentTheme) {
    toggleS(currentTheme);
   }