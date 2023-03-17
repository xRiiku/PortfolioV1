/* MODO OSCURO DESACTIVADO*/
document.getElementById("id-sun").onclick = function(){
    document.getElementById("page").classList.remove("dark-mode")
    document.getElementById("id-moon").classList.remove("active")
    document.getElementById("github-skills-logo").src="images/github-original.svg"
    document.getElementById("navicon").src="images/navicon.png"
    this.classList.add("active")
}

/* MODO OSCURO ACTIVADO */
document.getElementById("id-moon").onclick = function(){
    document.getElementById("page").classList.add("dark-mode")
    document.getElementById("id-sun").classList.remove("active")
    document.getElementById("github-skills-logo").src="images/github-original-dark.png"
    document.getElementById("navicon").src="images/navicon-darkmode.png"
    this.classList.add("active")
    
}

/* -------------------------------------- */

/* TITULO PESTAÑA NAVEGADOR */

let pageTitle = document.title

window.addEventListener("blur", () => {
    document.title = "Come back here"
})

window.addEventListener("focus", () => {
    document.title = pageTitle
})


/* NAVICON MENU DESPLEGABLE */

const navicon = document.querySelector('.navicon')
const menu = document.querySelector('.main-menu')

navicon.addEventListener('click', () => {
    menu.classList.toggle('open')
})