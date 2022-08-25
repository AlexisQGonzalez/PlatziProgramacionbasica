function iniciarJuego(){
    let buttonMascotaJugador = document.getElementById("button-mascota")
    buttonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)   
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucapalma = document.getElementById('Tucapalma')
    let inputPydos = document.getElementById('Pydos')
    if( inputHipodoge.checked){
        alert('seleccionaste a Hipodoge 💧🐶')
    } else if(inputCapipepo.checked){
        alert('seleccionaste a Capipepo')
    }else if(inputRatigueya.checked){
        alert('seleccionaste a Ratigueya ')
    }else if(inputLangostelvis.checked){
        alert('seleccionaste a Langostelvis')
    }else if(inputTucapalma.checked){
        alert('seleccionaste a Tucapalma')
    }else if(inputPydos.checked){
        alert('seleccionaste a Pydos')
    }else{
        alert('olvidaste elegir una mascota!')
    }




   
}
window.addEventListener("load", iniciarJuego )