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
const armasImgCompleted = document.getElementsByClassName('fusiles-asalto-elemento-img-completed')

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


armas.forEach((arma)=>{
    if(arma.tipo === 'AR'){
        const fusilesAsalto = document.createElement('li')
        const fusilesAsaltoImg = document.createElement('div')

        fusilesAsalto.innerHTML = `
        <section>
            <p class="armas-elemento-nombre">${arma.nombre}</p>
            <img src='${arma.img}' class="fusiles-asalto-elemento-img">
        </section>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desafío de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 8 fusiles de asalto para poder desbloquear el desafío de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desafío de Poliatómico" disabled></button>
        `

        fusilesAsalto.className = 'fusiles-asalto-elemento'

        sectionFusilesAsalto.appendChild(fusilesAsalto)
        fusilesAsalto.appendChild(fusilesAsaltoImg)
    } else if(arma.tipo === 'BR'){
        const fusilesCombate = document.createElement('li')
        const fusilesCombateImg = document.createElement('div')

        fusilesCombate.innerHTML = `
        <section>
            <p class="armas-elemento-nombre">${arma.nombre}</p>
            <img src='${arma.img}' class="fusiles-asalto-elemento-img">
        </section>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desafío de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 4 fusiles de combate para poder desbloquear el desafío de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desafío de Poliatómico" disabled></button>
        `

        fusilesCombate.className = 'fusiles-asalto-elemento'

        sectionFusilesCombate.appendChild(fusilesCombate)
        fusilesCombate.appendChild(fusilesCombateImg)
    } else if(arma.tipo === 'SMG'){
        const subfusiles = document.createElement('li')
        const subfusilesImg = document.createElement('div')

        subfusiles.innerHTML = `
        <section>
            <p class="armas-elemento-nombre">${arma.nombre}</p>
            <img src='${arma.img}' class="fusiles-asalto-elemento-img">
        </section>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desafío de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 8 subfusiles para poder desbloquear el desafío de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desafío de Poliatómico" disabled></button>
        `

        subfusiles.className = 'fusiles-asalto-elemento'

        sectionSubfusiles.appendChild(subfusiles)
        subfusiles.appendChild(subfusilesImg)
    } else if(arma.tipo === 'shotgun'){
        const escopetas = document.createElement('li')
        const escopetaImg = document.createElement('div')

        escopetas.innerHTML = `
        <section>
            <p class="armas-elemento-nombre">${arma.nombre}</p>
            <img src='${arma.img}' class="fusiles-asalto-elemento-img">
        </section>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desafío de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 4 escopetas para poder desbloquear el desafío de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desafío de Poliatómico" disabled></button>
        `

        escopetas.className = 'fusiles-asalto-elemento'

        sectionEscopetas.appendChild(escopetas)
        escopetas.appendChild(escopetaImg)
    } else if(arma.tipo === 'LMG'){
        const ametralladoras = document.createElement('li')
        const ametralladoraImg = document.createElement('div')

        ametralladoras.innerHTML = `
        <section>
            <p class="armas-elemento-nombre">${arma.nombre}</p>
            <img src='${arma.img}' class="fusiles-asalto-elemento-img">
        </section>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desafío de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 6 ametralladoras para poder desbloquear el desafío de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desafío de Poliatómico" disabled></button>
        `

        ametralladoras.className = 'fusiles-asalto-elemento'

        sectionAmetralladoras.appendChild(ametralladoras)
        ametralladoras.appendChild(ametralladoraImg)
    } else if(arma.tipo === 'markR'){
        const fusilesTact = document.createElement('li')
        const fusilesTactImg = document.createElement('div')

        fusilesTact.innerHTML = `
        <section>
            <p class="armas-elemento-nombre">${arma.nombre}</p>
            <img src='${arma.img}' class="fusiles-asalto-elemento-img">
        </section>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desafío de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 6 fusiles tácticos para poder desbloquear el desafío de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desafío de Poliatómico" disabled></button>
        `

        fusilesTact.className = 'fusiles-asalto-elemento'

        sectionFusilesTacticos.appendChild(fusilesTact)
        fusilesTact.appendChild(fusilesTactImg)
    } else if(arma.tipo === 'snpr'){
        const snipers = document.createElement('li')
        const sniperImg = document.createElement('div')

        snipers.innerHTML = `
        <section>
            <p class="armas-elemento-nombre">${arma.nombre}</p>
            <img src='${arma.img}' class="fusiles-asalto-elemento-img">
        </section>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desafío de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 4 snipers para poder desbloquear el desafío de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desafío de Poliatómico" disabled></button>
        `

        snipers.className = 'fusiles-asalto-elemento'

        sectionSnipers.appendChild(snipers)
        snipers.appendChild(sniperImg)
    } else if(arma.tipo === 'pistol'){
        const pistolas = document.createElement('li')
        const pistolasImg = document.createElement('div')

        pistolas.innerHTML = `
        <section>
            <p class="armas-elemento-nombre">${arma.nombre}</p>
            <img src='${arma.img}' class="fusiles-asalto-elemento-img">
        </section>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desafío de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 5 pistolas para poder desbloquear el desafío de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desafío de Poliatómico" disabled></button>
        `

        pistolas.className = 'fusiles-asalto-elemento'

        sectionPistolas.appendChild(pistolas)
        pistolas.appendChild(pistolasImg)
    } else if(arma.tipo === 'rckt'){
        const launchers = document.createElement('li')
        const launchersImg = document.createElement('div')

        launchers.innerHTML = `
        <section>
            <p class="armas-elemento-nombre">${arma.nombre}</p>
            <img src='${arma.img}' class="fusiles-asalto-elemento-img">
        </section>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desafío de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 4 lanzacohetes para poder desbloquear el desafío de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desafío de Poliatómico" disabled></button>
        `

        launchers.className = 'fusiles-asalto-elemento'

        sectionLaunchers.appendChild(launchers)
        launchers.appendChild(launchersImg)
    } else if(arma.tipo === 'melee'){
        const melee = document.createElement('li')
        const meleeImg = document.createElement('div')

        melee.innerHTML = `
        <section>
            <p class="armas-elemento-nombre">${arma.nombre}</p>
            <img src='${arma.img}' class="fusiles-asalto-elemento-img">
        </section>
        <button class="button-base" data-arma="${arma.nombre}"></button>
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desafío de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 2 armas cuerpo a cuerpo para poder desbloquear el desafío de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desafío de Poliatómico" disabled></button>
        `

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
        buttonsBase[i].disabled = true
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
            for(let j = 0; j < buttonsPoliArr.length; j++){
                buttonsPoliArr[j].disabled = false
            }
        }
    })
}

for(let i = 0; i < buttonsPlat.length; i++) {
    buttonsPoli[i].addEventListener('click', () => {
        buttonsPoli[i].classList.toggle('button-poli-clicked')
        const nombreArma = buttonsPoli[i].getAttribute('data-arma')
        const indexArma = armas.findIndex(arma => arma.nombre === nombreArma)
        armas[indexArma].poli = true
        console.log(armas)
        armasPoli = armas.filter(arma => arma.poli === true)
        console.log (armasPoli)
        armasImg[indexArma].setAttribute('src', `${armas[indexArma].imgPoli}`)
    })
}

