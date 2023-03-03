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
        <p class="fusiles-asalto-elemento-nombre">${arma.nombre}</p>
        <input type="checkbox" name="base" class="inputs-base">
        <input type="checkbox" name="base" class="inputs-oro">
        <input type="checkbox" name="base" class="inputs-plat">
        <input type="checkbox" name="base" class="inputs-poli">
        `
        fusilesAsaltoImg.innerHTML = `<img src='${arma.img}' class="fusiles-asalto-elemento-img">`

        fusilesAsalto.className = 'fusiles-asalto-elemento'
        fusilesAsaltoImg.className = 'fusiles-asalto-elemento-img'

        sectionFusilesAsalto.appendChild(fusilesAsalto)
        fusilesAsalto.appendChild(fusilesAsaltoImg)
        fusilesAsalto.appendChild(inputBase)
    } else if(arma.tipo === 'BR'){
        const fusilesCombate = document.createElement('li')
        const fusilesCombateImg = document.createElement('div')

        fusilesCombate.innerHTML = `
        <p class="fusiles-asalto-elemento-nombre">${arma.nombre}</p>
        <input type="checkbox" name="base" class="inputs-base">
        <input type="checkbox" name="base" class="inputs-oro">
        <input type="checkbox" name="base" class="inputs-plat">
        <input type="checkbox" name="base" class="inputs-poli">
        `
        fusilesCombateImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        fusilesCombate.className = 'fusiles-asalto-elemento'
        fusilesCombateImg.className = 'fusiles-asalto-elemento-img'

        sectionFusilesCombate.appendChild(fusilesCombate)
        fusilesCombate.appendChild(fusilesCombateImg)
    }else if(arma.tipo === 'SMG'){
        const subfusiles = document.createElement('li')
        const subfusilesImg = document.createElement('div')

        subfusiles.innerHTML = `
        <p class="fusiles-asalto-elemento-nombre">${arma.nombre}</p>
        <input type="checkbox" name="base" class="inputs-base">
        <input type="checkbox" name="base" class="inputs-oro">
        <input type="checkbox" name="base" class="inputs-plat">
        <input type="checkbox" name="base" class="inputs-poli">
        `
        subfusilesImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        subfusiles.className = 'fusiles-asalto-elemento'
        subfusilesImg.className = 'fusiles-asalto-elemento-img'

        sectionSubfusiles.appendChild(subfusiles)
        subfusiles.appendChild(subfusilesImg)
    } else if(arma.tipo === 'shotgun'){
        const escopetas = document.createElement('li')
        const escopetaImg = document.createElement('div')

        escopetas.innerHTML = `
        <p class="fusiles-asalto-elemento-nombre">${arma.nombre}</p>
        <input type="checkbox" name="base" class="inputs-base">
        <input type="checkbox" name="base" class="inputs-oro">
        <input type="checkbox" name="base" class="inputs-plat">
        <input type="checkbox" name="base" class="inputs-poli">
        `
        escopetaImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        escopetas.className = 'fusiles-asalto-elemento'
        escopetaImg.className = 'fusiles-asalto-elemento-img'

        sectionEscopetas.appendChild(escopetas)
        escopetas.appendChild(escopetaImg)
    } else if(arma.tipo === 'LMG'){
        const ametralladoras = document.createElement('li')
        const ametralladoraImg = document.createElement('div')

        ametralladoras.innerHTML = `
        <p class="fusiles-asalto-elemento-nombre">${arma.nombre}</p>
        <input type="checkbox" name="base" class="inputs-base">
        <input type="checkbox" name="base" class="inputs-oro">
        <input type="checkbox" name="base" class="inputs-plat">
        <input type="checkbox" name="base" class="inputs-poli">
        `
        ametralladoraImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        ametralladoras.className = 'fusiles-asalto-elemento'
        ametralladoraImg.className = 'fusiles-asalto-elemento-img'

        sectionAmetralladoras.appendChild(ametralladoras)
        ametralladoras.appendChild(ametralladoraImg)
    } else if(arma.tipo === 'markR'){
        const fusilesTact = document.createElement('li')
        const fusilesTactImg = document.createElement('div')

        fusilesTact.innerHTML = `
        <p class="fusiles-asalto-elemento-nombre">${arma.nombre}</p>
        <input type="checkbox" name="base" class="inputs-base">
        <input type="checkbox" name="base" class="inputs-oro">
        <input type="checkbox" name="base" class="inputs-plat">
        <input type="checkbox" name="base" class="inputs-poli">
        `
        fusilesTactImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        fusilesTact.className = 'fusiles-asalto-elemento'
        fusilesTactImg.className = 'fusiles-asalto-elemento-img'

        sectionFusilesTacticos.appendChild(fusilesTact)
        fusilesTact.appendChild(fusilesTactImg)
    } else if(arma.tipo === 'snpr'){
        const snipers = document.createElement('li')
        const sniperImg = document.createElement('div')

        snipers.innerHTML = `
        <p class="fusiles-asalto-elemento-nombre">${arma.nombre}</p>
        <input type="checkbox" name="base" class="inputs-base">
        <input type="checkbox" name="base" class="inputs-oro">
        <input type="checkbox" name="base" class="inputs-plat">
        <input type="checkbox" name="base" class="inputs-poli">
        `
        sniperImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        snipers.className = 'fusiles-asalto-elemento'
        sniperImg.className = 'fusiles-asalto-elemento-img'

        sectionSnipers.appendChild(snipers)
        snipers.appendChild(sniperImg)
    } else if(arma.tipo === 'pistol'){
        const pistolas = document.createElement('li')
        const pistolasImg = document.createElement('div')

        pistolas.innerHTML = `
        <p class="fusiles-asalto-elemento-nombre">${arma.nombre}</p>
        <input type="checkbox" name="base" class="inputs-base">
        <input type="checkbox" name="base" class="inputs-oro">
        <input type="checkbox" name="base" class="inputs-plat">
        <input type="checkbox" name="base" class="inputs-poli">
        `
        pistolasImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        pistolas.className = 'fusiles-asalto-elemento'
        pistolasImg.className = 'fusiles-asalto-elemento-img'

        sectionPistolas.appendChild(pistolas)
        pistolas.appendChild(pistolasImg)
    } else if(arma.tipo === 'rckt'){
        const launchers = document.createElement('li')
        const launchersImg = document.createElement('div')

        launchers.innerHTML = `
        <p class="fusiles-asalto-elemento-nombre">${arma.nombre}</p>
        <input type="checkbox" name="base" class="inputs-base">
        <input type="checkbox" name="base" class="inputs-oro">
        <input type="checkbox" name="base" class="inputs-plat">
        <input type="checkbox" name="base" class="inputs-poli">
        `
        launchersImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        launchers.className = 'fusiles-asalto-elemento'
        launchersImg.className = 'fusiles-asalto-elemento-img'

        sectionLaunchers.appendChild(launchers)
        launchers.appendChild(launchersImg)
    } else if(arma.tipo === 'melee'){
        const melee = document.createElement('li')
        const meleeImg = document.createElement('div')

        melee.innerHTML = `
        <p class="fusiles-asalto-elemento-nombre">${arma.nombre}</p>
        <input type="checkbox" name="base" class="inputs-base">
        <input type="checkbox" name="base" class="inputs-oro">
        <input type="checkbox" name="base" class="inputs-plat">
        <input type="checkbox" name="base" class="inputs-poli">
        `
        meleeImg.innerHTML = `<img src='${arma.img}' class='fusiles-asalto-elemento-img'>`

        melee.className = 'fusiles-asalto-elemento'
        meleeImg.className = 'fusiles-asalto-elemento-img'

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
const rifles = armas.filter(arma => arma.tipo === 'AR')
const subfusiles = armas.filter(arma => arma.tipo === 'SMG')
const ametralladoras = armas.filter(arma => arma.tipo === 'LMG')

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