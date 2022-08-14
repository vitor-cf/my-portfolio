function abrirCardapio () {
    let cardapio = document.getElementById('cardapio-list');
    cardapio.style.display = 'flex'; 
    

    let imgCardapio = document.getElementById('cardapio');
    imgCardapio.style.display = 'none'; 

    let imgClose = document.getElementById('close');
    imgClose.style.display = 'flex';
} 

function fecharCardapio () {
    let cardapio = document.getElementById('cardapio-list');
    cardapio.style.display = 'none'; 

    let imgCardapio = document.getElementById('cardapio');
    imgCardapio.style.display = 'flex'; 

    let imgClose = document.getElementById('close');
    imgClose.style.display = 'none';
} 

const btnAbrir = document.getElementById('cardapio');
btnAbrir.addEventListener('click',abrirCardapio);

const btnFechar = document.getElementById('close');
btnFechar.addEventListener('click',fecharCardapio)