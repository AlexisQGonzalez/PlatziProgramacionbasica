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
    let spanMAscotaJugador = document.getElementById("mascota-jugador")
    if( inputHipodoge.checked){
        spanMAscotaJugador.innerHTML = "Hipodoge"
    } else if(inputCapipepo.checked){
        spanMAscotaJugador.innerHTML = "Capipepo"
    }else if(inputRatigueya.checked){
        spanMAscotaJugador.innerHTML = "Ratigueya"
    }else if(inputLangostelvis.checked){
        spanMAscotaJugador.innerHTML = "Langostelvis"
    }else if(inputTucapalma.checked){
        spanMAscotaJugador.innerHTML = "Tucapalma"
    }else if(inputPydos.checked){
        spanMAscotaJugador.innerHTML = "Pydos"
    }else{
        alert("Olvidaste seleccionar una mascota!, Selecciona una para jugar!")
    }




   
}
window.addEventListener("load", iniciarJuego )