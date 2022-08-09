


function filtroAcademico () {
    let noBox = document.getElementById('larry');
    noBox.style.display = 'none'; 

    let noStream = document.getElementById('streamer');
    noStream.style.display = 'none';

} 

function filtroTodos () {
    let testeum = document.getElementById('larry');
    testeum.style.display = 'flex'; 

    let testedois = document.getElementById('streamer');
    testedois.style.display = 'flex'; 

    let testequatro = document.getElementById('insta-filter');
    testequatro.style.display = 'flex';
}

function filtroFreela() {
    let testetres = document.getElementById('insta-filter');
    testetres.style.display = 'none'; 
    
} 
    




let btnAcademico = document.getElementById('acd');
btnAcademico.addEventListener('click', filtroAcademico); 

let btnTodos = document.getElementById('todos');
btnTodos.addEventListener('click', filtroTodos); 

let btnFreela = document.getElementById('freela');
btnFreela.addEventListener('click', filtroFreela)