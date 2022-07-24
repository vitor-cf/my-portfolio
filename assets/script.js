// Função Dark-mode

function darkMode () {
    let luz = document.getElementById('lua');
    luz.style.display = 'block'; 
    let off = document.getElementById('sol');
    off.style.display = 'none';  

    var element = document.body;
    element.style.background = 'rgb(5, 5, 36)'
} 

function lightMode () {

    let luz = document.getElementById('lua');
    luz.style.display = 'none'; 
    let off = document.getElementById('sol');
    off.style.display = 'block'; 

    var element = document.body;
    element.style.background = 'rgb(255, 255, 255)'
} 
    
const sol = document.getElementById('sol');
sol.addEventListener('click', darkMode); 

const lua = document.getElementById('lua');
lua.addEventListener('click', lightMode )
    
    
    






