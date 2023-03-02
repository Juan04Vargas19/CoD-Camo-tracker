const prueba = document.getElementById('prueba')
prueba.innerHTML = `
    <img src="${armas[10].img}" alt="">
    <img src="${armas[10].imgOro}" alt="">
    <img src="${armas[10].imgPlat}" alt="">
    <img src="${armas[10].imgPoli}" alt="">
    <img src="${armas[10].imgOrion}" alt="">

`

let intentos = 0
//Extrae las armas en las que ya se completaron todos 4 los desafíos base, y por ende ya tienen el desafío de oro disponible
let armasOroDisponible
//Variables que almacenan arrays de armas que ya completaron el desafío oro
let oroArCompleto
let oroSmgCompleto
let oroLmgCompleto
//Variables que revisan si las armas ya tienen disponible el desafío platino 
let armasArPlatinoDisponible
let armasSmgPlatinoDisponible
let armasLmgPlatinoDisponible
//Extrae las armas en las que ya se completó el desafío de platino
let armasPoliDisponible
//Extrae las armas es las que se completaron todos los desafíos
let armasCompletadas

//Attachments para las armas para al momento de interactuar con el DOM, mostrar al usuario clases recomendadas
class Attachments{
    constructor(nombre, parte, tuning, vertical, horizontal){
        this.nombre = nombre
        this.parte = parte
        this.tuning = tuning
        this.vertical = vertical
        this.horizontal = horizontal
    }
}


//Separar los array por tipo de arma para verificar si se cumplen requerimientos para desbloquear el desafío de Platino
const rifles = armas.filter(arma => arma.tipo === 'AR')
const subfusiles = armas.filter(arma => arma.tipo === 'SMG')
const ametralladoras = armas.filter(arma => arma.tipo === 'LMG')

//función para preguntar nombre de usuario o correo al user
function preguntarUsuario(){
    // let usuario = prompt('Ingresa tu correo o nombre de usuario.')

    //Correo válido para el simulador: juanvargas@gmail.com || Usuario válido para el simulador: juanvargas98
    if(usuario === 'juanvargas@gmail.com' || usuario === 'juanvargas98'){
        preguntarContrasena()
    } else{
        alert('Correo o usuario inválidos, inténtalo nuevamente.')
        preguntarUsuario()
    }
}

//función para preguntar contraseña al user
function preguntarContrasena(){
    // let password = prompt('Ingresa tu contraseña.')

    while(password !== '1234' && intentos <3){
        alert('Contraseña equivocada, intente nuevamente')
        intentos++
        // password = prompt('Ingresa tu contraseña.')
    }
    
    if(intentos === 3){
        alert('Excediste el límite de intentos. \nPor favor vuelve más tarde.')
    } else if(password === '1234'){
        alert('Bienvenido Juan')
        preguntarBase()
    }
}

preguntarUsuario()


function preguntarBase(){
    armas.forEach((arma) =>{
        // let base = Number(prompt(`¿Cuántos camuflajes base has desbloqueado de ${arma.nombre}?\n(Intoduce un número entre 0 y 4)`))
        if(base <= 4){
            arma.desafiosBase = base
        } else{
            alert('Cantidad no válida')
        }
    })
    //Se crea un arreglo que almacena las armas en las que se completaron los 4 camuflajes base y por ende ya tienen disponible el desafío de Oro
    armasOroDisponible = armas.filter(arma => arma.desafiosBase === 4)
    console.log(armasOroDisponible)
    if(armasOroDisponible.length === 0){
        alert('Recuerda que debes desbloquear los 4 camuflajes base de cada arma para desbloquear los desafíos de Oro')
    } else{
        preguntarOro()
    }
}


function preguntarOro(){
    armasOroDisponible.forEach((arma) =>{
        // let oro = prompt(`¿Ya desbloqueaste el camuflaje Oro de ${arma.nombre}?\n(Escribe SI o NO)`)
        if(oro === 'SI'){
            arma.oro = true
        }
        //Se filtran las armas que ya completaron el camuflaje Oro, para más adelante verificar si se cumplen los requerimientos para desbloquear el desafío de Platino
        oroArCompleto = rifles.filter(rifle => rifle.oro === true)
        oroSmgCompleto = subfusiles.filter(subfusil => subfusil.oro === true)
        oroLmgCompleto = ametralladoras.filter(ametralladora => ametralladora.oro === true)
    })
    console.log(oroArCompleto)
    console.log(oroSmgCompleto)
    console.log(oroLmgCompleto)

    if(oroArCompleto.length === 5 || oroSmgCompleto.length === 4 || oroLmgCompleto.length === 4){
        preguntarPlatino()
    } else{
        alert('Recuerda que debes cumplir los requerimientos del camuflaje Oro para desbloquear los desafíos de Platino')
    }
}

function preguntarPlatino(){  
    oroArCompleto.forEach((rifle) => {
        // let platinoAr = prompt(`¿Ya desbloqueaste el camuflaje Platino de ${rifle.nombre}?\n(Escribe SI o NO)`)
        if(platinoAr === 'SI'){
            rifle.platino = true
        }
    })
    oroSmgCompleto.forEach((subfusil) => {
        // let platinoSmg = prompt(`¿Ya desbloqueaste el camuflaje Platino de ${subfusil.nombre}?\n(Escribe SI o NO)`)
        if(platinoSmg === 'SI'){
            subfusil.platino = true
        }
    })
    oroLmgCompleto.forEach((ametralladora) => {
        // let platinoLmg = prompt(`¿Ya desbloqueaste el camuflaje Platino de ${ametralladora.nombre}?\n(Escribe SI o NO)`)
        if(platinoLmg === 'SI'){
            ametralladora.platino = true
        }
    })
    //Se filtran las armas que ya completaron el camuflaje de Platino, para más adelante verificar si se cumplen los requerimientos para desbloquear el desafío de Poliatómico
    armasPoliDisponible = armas.filter(arma => arma.platino === true)
    console.log(armasPoliDisponible)
    if(armasPoliDisponible.length === 13){
        preguntarPoli()
    } else{
        alert('Recuerda que debes completar 13 camuflajes de Platino para desbloquear los desafíos de Poliatómico')
    }
}

function preguntarPoli(){
    armasPoliDisponible.forEach((arma) =>{
        // let poli = prompt(`¿Ya desbloqueaste el camuflaje Poliatómico de ${arma.nombre}?\n(Escribe SI o NO)`)
        if(poli === 'SI'){
            arma.poli = true
        }
    })
    //Se filtran las armas que ya desbloquearon todos los camuflajes, para más adelante verificar si se cumplen los requerimientos para desbloquear Orion
    armasCompletadas = armas.filter(arma => arma.poli === true)
    console.log(armasCompletadas)
    if(armasCompletadas.length === 13){
        completionist()
    }
}

function completionist(){
    alert('¡FELICIDADES! Has completado todos los camuflajes y has desbloqueado Orion')
}