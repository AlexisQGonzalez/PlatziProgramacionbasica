let ataquejugador 
let ataqueEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let buttonMascotaJugador = document.getElementById("button-mascota")
    buttonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    let buttonFuego =document.getElementById("button-fuego")
    buttonFuego.addEventListener('click', ataqueFuego)
    let buttonAgua = document.getElementById("button-agua")
    buttonAgua.addEventListener('click', ataqueAgua)
    let buttonTierra = document.getElementById("button-tierra")
    buttonTierra.addEventListener('click', ataqueTierra)
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

    seleccionarMascotaEnemigo()
}
function crearMensaje(){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = ' tu mascota ataco con ' + ataquejugador+', la mascota del enemigo ataco con' +  ataqueEnemigo + " " + resultado
    sectionMensajes.appendChild(parrafo)
}

function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function seleccionarMascotaEnemigo() {
    let RandomAtack = getRandom(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(RandomAtack == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }else if(RandomAtack == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }else if(RandomAtack == 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }else if(RandomAtack == 4){
        spanMascotaEnemigo.innerHTML = "Langostelvis"
    }else if(RandomAtack == 5){
        spanMascotaEnemigo.innerHTML = "Tucapalma"
    }else if(RandomAtack == 6){
        spanMascotaEnemigo.innerHTML = "Pydos" 
    }
}
function ataqueFuego(){
    ataquejugador = "FUEGO"
    randomEnemyAttack()
}
function ataqueAgua(){
    ataquejugador = "AGUA"
    randomEnemyAttack()
}
function ataqueTierra(){
    ataquejugador = "TIERRA"
    randomEnemyAttack()
}
function randomEnemyAttack(){
    let aleatorio = getRandom(1,3)
    if ( aleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if( aleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else if (aleatorio == 3){
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

// lets get ready to rumbleeee!!
function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if ( ataquejugador === ataqueEnemigo){
        resultado = 'EMPATE'
        crearMensaje()
    }
    else if ( ataquejugador === "FUEGO" && ataqueEnemigo === "TIERRA" || ataquejugador === "AGUA" && ataqueEnemigo === "FUEGO" ||ataquejugador === "TIERRA" && ataqueEnemigo === "AGUA"  ){
        resultado = ' GANASTE'
        crearMensaje()
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else {
        resultado = ' Perdiste'
        crearMensaje()
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}
function revisarVidas(){
    if (vidasEnemigo == 0){
       crearFinal("Haz derrotado a la Mascota enemiga. GANASTE! FELICITACIONES!")
    } else if(vidasJugador == 0){
        crearFinal("Derrotaron a tu Mascota. PERDISTE!")
    }
}
function crearFinal(resultadofinal){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadofinal
    sectionMensajes.appendChild(parrafo)
}




window.addEventListener("load", iniciarJuego )