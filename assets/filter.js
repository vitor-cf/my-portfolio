


function filtroAcademico () {
    let noBox = document.getElementById('larry');
    noBox.style.display = 'none'; 

    let noStream = document.getElementById('streamer');
    noStream.style.display = 'none';

    let instaFlex = document.getElementById('insta-filter');
    instaFlex.style.display = 'flex';
} 

function filtroTodos () {
    let todoFlexLarry = document.getElementById('larry');
    todoFlexLarry.style.display = 'flex'; 

    let todoFlexStreamer = document.getElementById('streamer');
    todoFlexStreamer.style.display = 'flex'; 

    let todoFlexInsta = document.getElementById('insta-filter');
    todoFlexInsta.style.display = 'flex';
}

function filtroFreela() {   
    let freeFlexStreamer = document.getElementById('streamer');
    freeFlexStreamer.style.display = 'flex'; 
    

    let freeNoInsta = document.getElementById('insta-filter');
    freeNoInsta.style.display = 'none'; 
    
} 
    




let btnAcademico = document.getElementById('acd');
btnAcademico.addEventListener('click', filtroAcademico); 

let btnTodos = document.getElementById('todos');
btnTodos.addEventListener('click', filtroTodos); 

let btnFreela = document.getElementById('freela');
btnFreela.addEventListener('click', filtroFreela)