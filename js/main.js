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

//Insertar cada elemento del documento array.js en el DOM
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
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desaf??o de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 8 fusiles de asalto para poder desbloquear el desaf??o de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desaf??o de Poliat??mico" disabled></button>
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
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desaf??o de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 4 fusiles de combate para poder desbloquear el desaf??o de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desaf??o de Poliat??mico" disabled></button>
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
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desaf??o de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 8 subfusiles para poder desbloquear el desaf??o de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desaf??o de Poliat??mico" disabled></button>
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
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desaf??o de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 4 escopetas para poder desbloquear el desaf??o de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desaf??o de Poliat??mico" disabled></button>
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
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desaf??o de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 6 ametralladoras para poder desbloquear el desaf??o de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desaf??o de Poliat??mico" disabled></button>
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
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desaf??o de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 6 fusiles t??cticos para poder desbloquear el desaf??o de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desaf??o de Poliat??mico" disabled></button>
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
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desaf??o de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 4 snipers para poder desbloquear el desaf??o de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desaf??o de Poliat??mico" disabled></button>
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
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desaf??o de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 5 pistolas para poder desbloquear el desaf??o de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desaf??o de Poliat??mico" disabled></button>
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
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desaf??o de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 4 lanzacohetes para poder desbloquear el desaf??o de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desaf??o de Poliat??mico" disabled></button>
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
        <button class="button-oro" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear todos los camuflajes base para poder desbloquear el desaf??o de Oro" disabled></button>
        <button class="button-plat" data-arma="${arma.nombre}" categoria="${arma.tipo}" data-hover="Recuerda que primero debes desbloquear el camuflaje Oro en 2 armas cuerpo a cuerpo para poder desbloquear el desaf??o de Platino" disabled></button>
        <button class="button-poli" data-arma="${arma.nombre}" data-hover="Recuerda que primero debes desbloquear el camuflaje Platino en 51 armas para poder desbloquear el desaf??o de Poliat??mico" disabled></button>
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

//Implementaci??n de persistencia con el uso de Local Storage
obtenerLS()

function obtenerLS(){
    const armasEnLS = JSON.parse(localStorage.getItem('armas'))

    if(armasEnLS === null){
        console.log('Bienvenid@. Tu espacio en LocalStorage para esta app est?? vac??o, puedes ignorar este mensaje :D')
    } else{
        armas = armasEnLS
        for(let i = 0; i < armasEnLS.length; i++){
            if(armasEnLS[i].desafiosBase === true ){
                const nombreArmaDesafioBase = buttonsBase[i].getAttribute('data-arma')
                const indexArmaDesafioBase = armasEnLS.findIndex(arma => arma.nombre === nombreArmaDesafioBase)
                buttonsBase[indexArmaDesafioBase].classList.toggle('button-base-clicked')
                buttonsOro[indexArmaDesafioBase].disabled = false
                buttonsBase[indexArmaDesafioBase].disabled = true
            }

            if(armasEnLS[i].oro === true){
                const nombreArmaOro = buttonsOro[i].getAttribute('data-arma')
                const indexArmaOro = armasEnLS.findIndex(arma => arma.nombre === nombreArmaOro)
                buttonsOro[indexArmaOro].classList.toggle('button-base-clicked')
                buttonsOro[indexArmaOro].disabled = true
                const buttonsPlatSec = buttonsPlat[i].getAttribute('categoria')
                armasImg[indexArmaOro].setAttribute('src', `${armas[indexArmaOro].imgOro}`)


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
            }

            if(armasEnLS[i].platino === true){
                const nombreArmaPlat = buttonsPlat[i].getAttribute('data-arma')
                const indexArmaPlat = armasEnLS.findIndex(arma => arma.nombre === nombreArmaPlat)
                buttonsPlat[indexArmaPlat].classList.toggle('button-base-clicked')
                buttonsPlat[indexArmaPlat].disabled = true
                armasImg[indexArmaPlat].setAttribute('src', `${armas[indexArmaPlat].imgPlat}`)


                buttonsPoliArr.push(buttonsPoli[i])

                if(buttonsPoliArr.length >= 51){
                    for(let j = 0; j < buttonsPoliArr.length; j++){
                        buttonsPoliArr[j].disabled = false
                    }
                }
            }

            if(armasEnLS[i].poli === true){
                const nombreArmaPoli = buttonsPlat[i].getAttribute('data-arma')
                const indexArmaPoli = armasEnLS.findIndex(arma => arma.nombre === nombreArmaPoli)
                buttonsPoli[indexArmaPoli].classList.toggle('button-base-clicked')
                armasImg[indexArmaPoli].setAttribute('src', `${armas[indexArmaPoli].imgPoli}`)

                buttonsPoli[indexArmaPoli].disabled = true

            }
        }
    }
}

//Eventos e interactividad con la p??gina
for(let i = 0; i < buttonsBase.length; i++) {
    buttonsBase[i].addEventListener('click', () => {
        buttonsBase[i].classList.toggle('button-base-clicked')
        const nombreArma = buttonsBase[i].getAttribute('data-arma')
        const indexArma = armas.findIndex(arma => arma.nombre === nombreArma)
        armas[indexArma].desafiosBase = true
        buttonsOro[indexArma].disabled = false
        armasBase = armas.filter(arma => arma.desafiosBase === true)
        buttonsBase[i].disabled = true

        localStorage.setItem('armas', JSON.stringify(armas))
    })
}

for(let i = 0; i < buttonsOro.length; i++) {
    buttonsOro[i].addEventListener('click', () => {
        buttonsOro[i].classList.toggle('button-oro-clicked')
        const nombreArma = buttonsOro[i].getAttribute('data-arma')
        const indexArma = armas.findIndex(arma => arma.nombre === nombreArma)
        armas[indexArma].oro = true
        armasImg[indexArma].setAttribute('src', `${armas[indexArma].imgOro}`)
        armasOro = armas.filter(arma => arma.oro === true)
        const buttonsPlatSec = buttonsPlat[i].getAttribute('categoria')
        buttonsOro[i].disabled = true
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

        localStorage.setItem('armas', JSON.stringify(armas))
    })
}

for(let i = 0; i < buttonsPlat.length; i++) {
    buttonsPlat[i].addEventListener('click', () => {
        buttonsPlat[i].classList.toggle('button-plat-clicked')
        const nombreArma = buttonsPlat[i].getAttribute('data-arma')
        const indexArma = armas.findIndex(arma => arma.nombre === nombreArma)
        armas[indexArma].platino = true
        armasPlat = armas.filter(arma => arma.platino === true)
        buttonsPlat[i].disabled = true
        armasImg[indexArma].setAttribute('src', `${armas[indexArma].imgPlat}`)

        buttonsPoliArr.push(buttonsPoli[i])

        localStorage.setItem('armas', JSON.stringify(armas))
        
        if(buttonsPoliArr.length >= 51){
            for(let j = 0; j < buttonsPoliArr.length; j++){
                buttonsPoliArr[j].disabled = false
            }
        }
    })
}

for(let i = 0; i < buttonsPoli.length; i++) {
    buttonsPoli[i].addEventListener('click', () => {
        buttonsPoli[i].classList.toggle('button-poli-clicked')
        const nombreArma = buttonsPoli[i].getAttribute('data-arma')
        const indexArma = armas.findIndex(arma => arma.nombre === nombreArma)
        armas[indexArma].poli = true
        armasPoli = armas.filter(arma => arma.poli === true)
        localStorage.setItem('armas', JSON.stringify(armas))
        buttonsPoli[i].disabled = true
        armasImg[indexArma].setAttribute('src', `${armas[indexArma].imgPoli}`)
    })
}

//Funci??n implementada para resolver temporalmente un bug en el que al darle click nuevamente a los botones de los camuflajes se repet??an en sus array correspondientes 
function reset(){
    for(let i = 0; i < armas.length; i++){
        buttonsBase[i].setAttribute('class', 'button-base')
        buttonsOro[i].setAttribute('class', 'button-oro')
        buttonsPlat[i].setAttribute('class', 'button-plat')
        buttonsPoli[i].setAttribute('class', 'button-poli')
        buttonsPlatAr = []
        buttonsPlatBr = []
        buttonsPlatSmg = []
        buttonsPlatShotgun = []
        buttonsPlatLmg = []
        buttonsPlatMarkR = []
        buttonsPlatSnpr = []
        buttonsPlatPistol = []
        buttonsPlatRckt = []
        buttonsPlatMelee = []
        buttonsPoliArr = []
        buttonsBase[i].disabled = false
        buttonsOro[i].disabled = true
        buttonsPlat[i].disabled = true
        buttonsPoli[i].disabled = true

        armas[i].desafiosBase = false
        armas[i].oro = false
        armas[i].platino = false
        armas[i].poli = false

        armasImg[i].setAttribute('src', `${armas[i].img}`)

        localStorage.removeItem('armas')
    }
}