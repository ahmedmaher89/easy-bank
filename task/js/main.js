let mood = document.querySelector ('.mood');

let bodyEl = document.querySelector('body');
let darkMood = false;
mood.addEventListener('change', (event) =>{
    darkMood = event.target.checked;
    if(darkMood) {
        bodyEl.classList.add("dark-theme");
    }else{
        bodyEl.classList.remove("dark-theme");
    }
})