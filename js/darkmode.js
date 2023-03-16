const lightModeBtn = document.querySelector('.lightmode-btn')
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')

let lightModeEnLS = localStorage.getItem('light')
if(lightModeEnLS === 'true'){
    document.body.classList.remove('dark')
    document.body.classList.add('light')
    header.classList.remove('header-dark')
    header.classList.add('header-light')
    lightModeBtn.classList.add('btn-dark')
    lightModeBtn.classList.remove('btn-light')
    lightModeBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.95 5.636l1.414 1.414-2.195 2.195c-.372-.562-.853-1.042-1.414-1.414l2.195-2.195zm-5.95-1.636h2v3.101c-.323-.066-.657-.101-1-.101s-.677.035-1 .101v-3.101zm-3.95 1.636l2.195 2.195c-.561.372-1.042.853-1.414 1.415l-2.195-2.196 1.414-1.414zm-3.05 5.364h3.101c-.066.323-.101.657-.101 1s.035.677.101 1h-3.101v-2zm3.05 7.364l-1.414-1.414 2.195-2.195c.372.562.853 1.042 1.414 1.414l-2.195 2.195zm5.95 1.636h-2v-3.101c.323.066.657.101 1 .101s.677-.035 1-.101v3.101zm-1-5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.95 3.364l-2.195-2.195c.562-.372 1.042-.853 1.414-1.414l2.195 2.195-1.414 1.414zm3.05-5.364h-3.101c.066-.323.101-.657.101-1s-.035-.677-.101-1h3.101v2z"/></svg>
    `
    lightModeBtn.setAttribute('title', 'Activar darkmode')
    footer.classList.remove('footer-dark')
    footer.classList.add('footer-light')
}

lightModeBtn.addEventListener('click', () =>{
    let lightMode = localStorage.getItem('light')
    if(lightMode === 'true'){
        document.body.classList.remove('light')
        document.body.classList.add('dark')
        header.classList.remove('header-light')
        header.classList.add('header-dark')
        lightModeBtn.classList.remove('btn-dark')
        lightModeBtn.classList.add('btn-light')
        lightModeBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm-3-5c.343 0 .677.035 1 .101v-3.101h-2v3.101c.323-.066.657-.101 1-.101zm-2.755.832l-2.195-2.196-1.414 1.414 2.195 2.195c.372-.561.853-1.042 1.414-1.413zm-2.245 4.168c0-.343.035-.677.101-1h-3.101v2h3.101c-.066-.323-.101-.657-.101-1zm9.169-2.754l2.195-2.195-1.414-1.415-2.195 2.195c.561.372 1.042.853 1.414 1.415zm.73 1.754c.066.323.101.657.101 1s-.035.677-.101 1h3.101v-2h-3.101zm-2.144 5.168l2.195 2.195 1.414-1.414-2.195-2.195c-.372.562-.853 1.043-1.414 1.414zm-6.924-1.414l-2.195 2.196 1.414 1.414 2.195-2.195c-.561-.372-1.042-.853-1.414-1.415zm4.169 2.246c-.343 0-.677-.035-1-.101v3.101h2v-3.101c-.323.066-.657.101-1 .101z"/></svg>
        ` 
        lightModeBtn.setAttribute('title', 'Activar lightmode')

        footer.classList.add('footer-dark')
        footer.classList.remove('footer-light')
        localStorage.setItem('light', false)
    } else{
        document.body.classList.add('light')
        document.body.classList.remove('dark')
        header.classList.add('header-light')
        header.classList.remove('header-dark')
        lightModeBtn.classList.add('btn-dark')
        lightModeBtn.classList.remove('btn-light')
        lightModeBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.95 5.636l1.414 1.414-2.195 2.195c-.372-.562-.853-1.042-1.414-1.414l2.195-2.195zm-5.95-1.636h2v3.101c-.323-.066-.657-.101-1-.101s-.677.035-1 .101v-3.101zm-3.95 1.636l2.195 2.195c-.561.372-1.042.853-1.414 1.415l-2.195-2.196 1.414-1.414zm-3.05 5.364h3.101c-.066.323-.101.657-.101 1s.035.677.101 1h-3.101v-2zm3.05 7.364l-1.414-1.414 2.195-2.195c.372.562.853 1.042 1.414 1.414l-2.195 2.195zm5.95 1.636h-2v-3.101c.323.066.657.101 1 .101s.677-.035 1-.101v3.101zm-1-5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.95 3.364l-2.195-2.195c.562-.372 1.042-.853 1.414-1.414l2.195 2.195-1.414 1.414zm3.05-5.364h-3.101c.066-.323.101-.657.101-1s-.035-.677-.101-1h3.101v2z"/></svg>
        `
        lightModeBtn.setAttribute('title', 'Activar darkmode')
        footer.classList.remove('footer-dark')
        footer.classList.add('footer-light')
        localStorage.setItem('light', true)
    }
})