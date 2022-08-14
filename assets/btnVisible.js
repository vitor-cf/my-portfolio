

function apareceBotao () {
    
    let btnSaibaMais = document.getElementById('btn-mouseover');
    btnSaibaMais.style.display = 'flex'; 

    let opacImg = document.getElementById('img-larryfashion');
    opacImg.style.opacity = '0.9'
}

function someBotao () {
    let btnSaibaMais = document.getElementById('btn-mouseover');
    btnSaibaMais.style.display = 'none'; 

    let opacImg = document.getElementById('img-larryfashion');
    opacImg.style.opacity = '1'
}
    


const passeMouse = document.getElementById('box-project-teste');
passeMouse.addEventListener('mouseover',apareceBotao) 

const retireMouse = document.getElementById('box-project-teste')
retireMouse.addEventListener("mouseout", someBotao)