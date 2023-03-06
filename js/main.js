const sectionFusilesAsalto = document.querySelector('#fusiles-asalto')
const sectionFusilesCombate = document.querySelector('#fusiles-combate')
const sectionSubfusiles = document.querySelector('#subfusiles')
const sectionEscopetas = document.querySelector('#escopetas')
const sectionAmetralladoras = document.querySelector('#ametralladoras')
const sectionFusilesTacticos = document.querySelector('#fusiles-tact')
const sectionSnipers = document.querySelector('#snipers')
const sectionPistolas = document.querySelector('#pistol')
const sectionLaunchers = document.querySelector('#launcher')
const sectionMelee = document.querySelector('#melee')
const q = document.querySelectorAll('.q')
const a = document.querySelectorAll('.a')
const b = document.querySelectorAll('.b')
const arr = document.querySelectorAll('.arrow')

const buttonsBase = document.getElementsByClassName('button-base')
const buttonsOro = document.getElementsByClassName('button-oro')
const buttonsPlat = document.getElementsByClassName('button-plat')
const buttonsPoli = document.getElementsByClassName('button-poli')

const armasImg = document.getElementsByClassName('fusiles-asalto-elemento-img')
console.log(armasImg)

let armasBase = []
let armasOro = []
let armasPlat = []
let armasPoli = []
let buttonsPlatAr = []
let buttonsPlatBr = []
let buttonsPlatSmg = []
let buttonsPlatShotgun = []
let buttonsPlatLmg = []
let buttonsPlatMarkR = []
let buttonsPlatSnpr = []
let buttonsPlatPistol = []
let buttonsPlatRckt = []
let buttonsPlatMelee = []
let buttonsPoliArr = []


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

armas.forEach((arma)=>{
    if(arma.tipo === 'AR'){
        const fusilesAsalto = document.createElement('li')
        const fusilesAsaltoImg = document.createElement('div')
        const inputBase = document.createElement('div')

        fusilesAsalto.innerHTML = `
        <p class="armas-elemento-nombre">${arma.nombre}</p>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" disabled></button>
        `
        fusilesAsaltoImg.innerHTML = `<img src='${arma.img}' class="fusiles-asalto-elemento-img">`

        fusilesAsalto.className = 'fusiles-asalto-elemento'

        sectionFusilesAsalto.appendChild(fusilesAsalto)
        fusilesAsalto.appendChild(fusilesAsaltoImg)
        fusilesAsalto.appendChild(inputBase)
    } else if(arma.tipo === 'BR'){
        const fusilesCombate = document.createElement('li')
        const fusilesCombateImg = document.createElement('div')

        fusilesCombate.innerHTML = `
        <p class="armas-elemento-nombre">${arma.nombre}</p>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" disabled></button>
        `
        fusilesCombateImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        fusilesCombate.className = 'fusiles-asalto-elemento'

        sectionFusilesCombate.appendChild(fusilesCombate)
        fusilesCombate.appendChild(fusilesCombateImg)
    } else if(arma.tipo === 'SMG'){
        const subfusiles = document.createElement('li')
        const subfusilesImg = document.createElement('div')

        subfusiles.innerHTML = `
        <p class="armas-elemento-nombre">${arma.nombre}</p>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" disabled></button>
        `
        subfusilesImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        subfusiles.className = 'fusiles-asalto-elemento'

        sectionSubfusiles.appendChild(subfusiles)
        subfusiles.appendChild(subfusilesImg)
    } else if(arma.tipo === 'shotgun'){
        const escopetas = document.createElement('li')
        const escopetaImg = document.createElement('div')

        escopetas.innerHTML = `
        <p class="armas-elemento-nombre">${arma.nombre}</p>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" disabled></button>
        `
        escopetaImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        escopetas.className = 'fusiles-asalto-elemento'

        sectionEscopetas.appendChild(escopetas)
        escopetas.appendChild(escopetaImg)
    } else if(arma.tipo === 'LMG'){
        const ametralladoras = document.createElement('li')
        const ametralladoraImg = document.createElement('div')

        ametralladoras.innerHTML = `
        <p class="armas-elemento-nombre">${arma.nombre}</p>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" disabled></button>
        `
        ametralladoraImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        ametralladoras.className = 'fusiles-asalto-elemento'

        sectionAmetralladoras.appendChild(ametralladoras)
        ametralladoras.appendChild(ametralladoraImg)
    } else if(arma.tipo === 'markR'){
        const fusilesTact = document.createElement('li')
        const fusilesTactImg = document.createElement('div')

        fusilesTact.innerHTML = `
        <p class="armas-elemento-nombre">${arma.nombre}</p>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" disabled></button>
        `
        fusilesTactImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        fusilesTact.className = 'fusiles-asalto-elemento'

        sectionFusilesTacticos.appendChild(fusilesTact)
        fusilesTact.appendChild(fusilesTactImg)
    } else if(arma.tipo === 'snpr'){
        const snipers = document.createElement('li')
        const sniperImg = document.createElement('div')

        snipers.innerHTML = `
        <p class="armas-elemento-nombre">${arma.nombre}</p>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" disabled></button>
        `
        sniperImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        snipers.className = 'fusiles-asalto-elemento'

        sectionSnipers.appendChild(snipers)
        snipers.appendChild(sniperImg)
    } else if(arma.tipo === 'pistol'){
        const pistolas = document.createElement('li')
        const pistolasImg = document.createElement('div')

        pistolas.innerHTML = `
        <p class="armas-elemento-nombre">${arma.nombre}</p>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" disabled></button>
        `
        pistolasImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        pistolas.className = 'fusiles-asalto-elemento'

        sectionPistolas.appendChild(pistolas)
        pistolas.appendChild(pistolasImg)
    } else if(arma.tipo === 'rckt'){
        const launchers = document.createElement('li')
        const launchersImg = document.createElement('div')

        launchers.innerHTML = `
        <p class="armas-elemento-nombre">${arma.nombre}</p>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" disabled></button>
        `
        launchersImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        launchers.className = 'fusiles-asalto-elemento'

        sectionLaunchers.appendChild(launchers)
        launchers.appendChild(launchersImg)
    } else if(arma.tipo === 'melee'){
        const melee = document.createElement('li')
        const meleeImg = document.createElement('div')

        melee.innerHTML = `
        <p class="armas-elemento-nombre">${arma.nombre}</p>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" disabled></button>
        `
        meleeImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        melee.className = 'fusiles-asalto-elemento'

        sectionMelee.appendChild(melee)
        melee.appendChild(meleeImg)
    }
})

for (let i = 0; i < q.length; i++) {
    q[i].addEventListener('click',()=>{
        a[i].classList.toggle('a-opened')
        b[i].classList.toggle('b-opened')
        arr[i].classList.toggle('arrow-rotated')
    })    
}

//Separar los array por tipo de arma para verificar si se cumplen requerimientos para desbloquear el desafío de Platino
const fusilesAsaltoArr = armas.filter(arma => arma.tipo === 'AR')
const fusilesCombateArr = armas.filter(arma => arma.tipo === 'BR')
const subfusilesArr = armas.filter(arma => arma.tipo === 'SMG')
const escopetasArr = armas.filter(arma => arma.tipo === 'shotgun')
const ametralladorasArr = armas.filter(arma => arma.tipo === 'LMG')
const fusilestTactArr = armas.filter(arma => arma.tipo === 'markR')
const snipersArr = armas.filter(arma => arma.tipo === 'snpr')
const pistolArr = armas.filter(arma => arma.tipo === 'pistol')
const launcherArr = armas.filter(arma => arma.tipo === 'rckt')
const meleeArr = armas.filter(arma => arma.tipo === 'melee')

for(let i = 0; i < buttonsBase.length; i++) {
    buttonsBase[i].addEventListener('click', () => {
        buttonsBase[i].classList.toggle('button-base-clicked')
        const nombreArma = buttonsBase[i].getAttribute('data-arma')
        const indexArma = armas.findIndex(arma => arma.nombre === nombreArma)
        armas[indexArma].desafiosBase = true
        buttonsOro[indexArma].disabled = false
        console.log(armas)
        armasBase = armas.filter(arma => arma.desafiosBase === true)
        console.log (armasBase)
    })
}


for(let i = 0; i < buttonsOro.length; i++) {
    buttonsOro[i].addEventListener('click', () => {
        buttonsOro[i].classList.toggle('button-oro-clicked')
        const nombreArma = buttonsOro[i].getAttribute('data-arma')
        const indexArma = armas.findIndex(arma => arma.nombre === nombreArma)
        armas[indexArma].oro = true
        armasImg[indexArma].setAttribute('src', `${armas[indexArma].imgOro}`)
        console.log(armas)
        armasOro = armas.filter(arma => arma.oro === true)
        console.log (armasOro)
        const buttonsPlatSec = buttonsPlat[i].getAttribute('categoria')
        if(buttonsPlatSec === 'AR'){
            buttonsPlatAr.push(buttonsPlat[i])
        } else if(buttonsPlatSec === 'BR'){
            buttonsPlatBr.push(buttonsPlat[i])
        } else if(buttonsPlatSec === 'SMG'){
            buttonsPlatSmg.push(buttonsPlat[i])
        }else if(buttonsPlatSec === 'shotgun'){
            buttonsPlatShotgun.push(buttonsPlat[i])
        }else if(buttonsPlatSec === 'LMG'){
            buttonsPlatLmg.push(buttonsPlat[i])
        }else if(buttonsPlatSec === 'markR'){
            buttonsPlatMarkR.push(buttonsPlat[i])
        }else if(buttonsPlatSec === 'snpr'){
            buttonsPlatSnpr.push(buttonsPlat[i])
        }else if(buttonsPlatSec === 'pistol'){
            buttonsPlatPistol.push(buttonsPlat[i])
        }else if(buttonsPlatSec === 'rckt'){
            buttonsPlatRckt.push(buttonsPlat[i])
        }else if(buttonsPlatSec === 'melee'){
            buttonsPlatMelee.push(buttonsPlat[i])
        }
        console.log(buttonsPlatAr)

        if(buttonsPlatAr.length >= 8){
            for(let j = 0; j < buttonsPlatAr.length; j++)
            buttonsPlatAr[j].disabled = false
        }

        if(buttonsPlatBr.length >= 4){
            for(let j = 0; j < buttonsPlatBr.length; j++)
            buttonsPlatBr[j].disabled = false
        }

        if(buttonsPlatSmg.length >= 8){
            for(let j = 0; j < buttonsPlatSmg.length; j++)
            buttonsPlatSmg[j].disabled = false
        }

        if(buttonsPlatShotgun.length >= 4){
            for(let j = 0; j < buttonsPlatShotgun.length; j++)
            buttonsPlatShotgun[j].disabled = false
        }

        if(buttonsPlatLmg.length >= 6){
            for(let j = 0; j < buttonsPlatLmg.length; j++)
            buttonsPlatLmg[j].disabled = false
        }

        if(buttonsPlatMarkR.length >= 6){
            for(let j = 0; j < buttonsPlatMarkR.length; j++)
            buttonsPlatMarkR[j].disabled = false
        }

        if(buttonsPlatSnpr.length >= 4){
            for(let j = 0; j < buttonsPlatSnpr.length; j++)
            buttonsPlatSnpr[j].disabled = false
        }

        if(buttonsPlatPistol.length >= 5){
            for(let j = 0; j < buttonsPlatPistol.length; j++)
            buttonsPlatPistol[j].disabled = false
        }

        if(buttonsPlatRckt.length >= 4){
            for(let j = 0; j < buttonsPlatRckt.length; j++)
            buttonsPlatRckt[j].disabled = false
        }

        if(buttonsPlatMelee.length >= 2){
            for(let j = 0; j < buttonsPlatMelee.length; j++)
            buttonsPlatMelee[j].disabled = false
        }
    })
}

for(let i = 0; i < buttonsPlat.length; i++) {
    buttonsPlat[i].addEventListener('click', () => {
        buttonsPlat[i].classList.toggle('button-plat-clicked')
        const nombreArma = buttonsPlat[i].getAttribute('data-arma')
        const indexArma = armas.findIndex(arma => arma.nombre === nombreArma)
        armas[indexArma].platino = true
        console.log(armas)
        armasPlat = armas.filter(arma => arma.platino === true)
        console.log (armasPlat)
        armasImg[indexArma].setAttribute('src', `${armas[indexArma].imgPlat}`)

        buttonsPoliArr.push(buttonsPoli[i])

        console.log(buttonsPoliArr)
        
        if(buttonsPoliArr.length >= 51){
            for(let j = 0; j < buttonsPoliArr.length; j++)
            buttonsPoliArr[j].disabled = false
        }
    })
}

for(let i = 0; i < buttonsPlat.length; i++) {
    buttonsPoli[i].addEventListener('click', () => {
        buttonsPoli[i].classList.toggle('button-plat-clicked')
        const nombreArma = buttonsPoli[i].getAttribute('data-arma')
        const indexArma = armas.findIndex(arma => arma.nombre === nombreArma)
        armas[indexArma].poli = true
        console.log(armas)
        armasPoli = armas.filter(arma => arma.poli === true)
        console.log (armasPoli)
        armasImg[indexArma].setAttribute('src', `${armas[indexArma].imgPoli}`)
        
        if(armasPoli.length >= 51){
            for(let j = 0; j < buttonsPoliArr.length; j++)
            armasImg[j].setAttribute('src', `${armas[j].imgOrion}`)
        }
    })
}



// function test(){
//     const armasConDesafiosBase = filtrarPorDesafiosBase(armas)
//     console.log(armasConDesafiosBase)
// }

//función para preguntar nombre de usuario o correo al user
// function preguntarUsuario(){
//     // let usuario = prompt('Ingresa tu correo o nombre de usuario.')

//     //Correo válido para el simulador: juanvargas@gmail.com || Usuario válido para el simulador: juanvargas98
//     if(usuario === 'juanvargas@gmail.com' || usuario === 'juanvargas98'){
//         preguntarContrasena()
//     } else{
//         alert('Correo o usuario inválidos, inténtalo nuevamente.')
//         preguntarUsuario()
//     }
// }

// //función para preguntar contraseña al user
// function preguntarContrasena(){
//     // let password = prompt('Ingresa tu contraseña.')

//     while(password !== '1234' && intentos <3){
//         alert('Contraseña equivocada, intente nuevamente')
//         intentos++
//         // password = prompt('Ingresa tu contraseña.')
//     }
    
//     if(intentos === 3){
//         alert('Excediste el límite de intentos. \nPor favor vuelve más tarde.')
//     } else if(password === '1234'){
//         alert('Bienvenido Juan')
//         preguntarBase()
//     }
// }

// preguntarUsuario()


// function preguntarBase(){
//     armas.forEach((arma) =>{
//         // let base = Number(prompt(`¿Cuántos camuflajes base has desbloqueado de ${arma.nombre}?\n(Intoduce un número entre 0 y 4)`))
//         if(base <= 4){
//             arma.desafiosBase = base
//         } else{
//             alert('Cantidad no válida')
//         }
//     })
//     //Se crea un arreglo que almacena las armas en las que se completaron los 4 camuflajes base y por ende ya tienen disponible el desafío de Oro
//     armasOroDisponible = armas.filter(arma => arma.desafiosBase === 4)
//     console.log(armasOroDisponible)
//     if(armasOroDisponible.length === 0){
//         alert('Recuerda que debes desbloquear los 4 camuflajes base de cada arma para desbloquear los desafíos de Oro')
//     } else{
//         preguntarOro()
//     }
// }


// function preguntarOro(){
//     armasOroDisponible.forEach((arma) =>{
//         // let oro = prompt(`¿Ya desbloqueaste el camuflaje Oro de ${arma.nombre}?\n(Escribe SI o NO)`)
//         if(oro === 'SI'){
//             arma.oro = true
//         }
//         //Se filtran las armas que ya completaron el camuflaje Oro, para más adelante verificar si se cumplen los requerimientos para desbloquear el desafío de Platino
//         oroArCompleto = rifles.filter(rifle => rifle.oro === true)
//         oroSmgCompleto = subfusiles.filter(subfusil => subfusil.oro === true)
//         oroLmgCompleto = ametralladoras.filter(ametralladora => ametralladora.oro === true)
//     })
//     console.log(oroArCompleto)
//     console.log(oroSmgCompleto)
//     console.log(oroLmgCompleto)

//     if(oroArCompleto.length === 5 || oroSmgCompleto.length === 4 || oroLmgCompleto.length === 4){
//         preguntarPlatino()
//     } else{
//         alert('Recuerda que debes cumplir los requerimientos del camuflaje Oro para desbloquear los desafíos de Platino')
//     }
// }

// function preguntarPlatino(){  
//     oroArCompleto.forEach((rifle) => {
//         // let platinoAr = prompt(`¿Ya desbloqueaste el camuflaje Platino de ${rifle.nombre}?\n(Escribe SI o NO)`)
//         if(platinoAr === 'SI'){
//             rifle.platino = true
//         }
//     })
//     oroSmgCompleto.forEach((subfusil) => {
//         // let platinoSmg = prompt(`¿Ya desbloqueaste el camuflaje Platino de ${subfusil.nombre}?\n(Escribe SI o NO)`)
//         if(platinoSmg === 'SI'){
//             subfusil.platino = true
//         }
//     })
//     oroLmgCompleto.forEach((ametralladora) => {
//         // let platinoLmg = prompt(`¿Ya desbloqueaste el camuflaje Platino de ${ametralladora.nombre}?\n(Escribe SI o NO)`)
//         if(platinoLmg === 'SI'){
//             ametralladora.platino = true
//         }
//     })
//     //Se filtran las armas que ya completaron el camuflaje de Platino, para más adelante verificar si se cumplen los requerimientos para desbloquear el desafío de Poliatómico
//     armasPoliDisponible = armas.filter(arma => arma.platino === true)
//     console.log(armasPoliDisponible)
//     if(armasPoliDisponible.length === 13){
//         preguntarPoli()
//     } else{
//         alert('Recuerda que debes completar 13 camuflajes de Platino para desbloquear los desafíos de Poliatómico')
//     }
// }

// function preguntarPoli(){
//     armasPoliDisponible.forEach((arma) =>{
//         // let poli = prompt(`¿Ya desbloqueaste el camuflaje Poliatómico de ${arma.nombre}?\n(Escribe SI o NO)`)
//         if(poli === 'SI'){
//             arma.poli = true
//         }
//     })
//     //Se filtran las armas que ya desbloquearon todos los camuflajes, para más adelante verificar si se cumplen los requerimientos para desbloquear Orion
//     armasCompletadas = armas.filter(arma => arma.poli === true)
//     console.log(armasCompletadas)
//     if(armasCompletadas.length === 13){
//         completionist()
//     }
// }

// function completionist(){
//     alert('¡FELICIDADES! Has completado todos los camuflajes y has desbloqueado Orion')
// }