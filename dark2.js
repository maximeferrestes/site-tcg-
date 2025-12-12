let cliqueElement=document.getElementById("clique")

let headerElement=document.getElementById("header2")

let bodyElement=document.getElementById("body2")

let titleElement=document.getElementById("title")

let imageElement=document.getElementById("image")

let moniElement=document.getElementById('moni')

let footerElement=document.getElementById('footer')


let trendElement=document.getElementById('trend')

let ticarElement=document.getElementById('section4')


let secoElement=document.getElementById('seconnectert')

let darklightElement=document.getElementById('darklight')

let burgerElement=document.getElementById('burger')

let menuburgerElement=document.getElementById('menuburger')

let logoElement=document.getElementById('logo')



cliqueElement.addEventListener("click",function(){
    bodyElement.classList.toggle('body2')
    headerElement.classList.toggle('header2')
    footerElement.classList.toggle('footer2')
    trendElement.classList.toggle('white')
    ticarElement.classList.toggle('white')

    imageElement.classList.toggle('display')


    if (imageElement.src.includes("crbackdark.png")) {
        imageElement.src = "images/crback3.png"
    } else {
        imageElement.src = "images/1x/crbackdark.png"
    }

    if (darklightElement.src.includes("dark_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg")) {
        darklightElement.src = "images/light_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
    } else {
        darklightElementElement.src = "images/dark_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
    }

    if (moniElement.src.includes("images/monitoringwhite.svg")) {
        moniElement.src = "images/monitoring.svg"
    } else {
        moniElement.src = "images/monitoringwhite.svg"
    }

    if (secoElement.innerHTML=="Light mode"){
        secoElement.innerHTML = "Dark mode"
    } else {
        secoElement.innerHTML = "Light mode"
    }

    
})



