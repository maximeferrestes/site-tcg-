let cliqueElement=document.getElementById("clique")

let headerElement=document.getElementById("header2")

let bodyElement=document.getElementById("body2")

let titleElement=document.getElementById("title")

let imageElement=document.getElementById("image")

let moniElement=document.getElementById('moni')

let footerElement=document.getElementById('footer')

let witchElement=document.getElementById('witch')

let hogElement=document.getElementById('hog')

let canonElement=document.getElementById('canon')

let futElement=document.getElementById('fut')

let valkElement=document.getElementById('valk')

let bdfElement=document.getElementById('bdf')

let icegElement=document.getElementById('iceg')

let logElement=document.getElementById('log')

let trendElement=document.getElementById('trend')

let ticarElement=document.getElementById('section4')


let secoElement=document.getElementById('seconnectert')

let darklightElement=document.getElementById('darklight')

let burgerElement=document.getElementById('burger')

let menuburgerElement=document.getElementById('menuburger')

let logoElement=document.getElementById('logo')



burgerElement.addEventListener("click",function(){

    menuburgerElement.classList.toggle("show");


    if (burgerElement.src.includes("burger.svg")) {
        burgerElement.src = "images/supercell.svg"
    } else {
        burgerElement.src = "images/svg/burger.svg"
    }

    burgerElement.classList.toggle('open')
    
})

cliqueElement.addEventListener("click",function(){
    bodyElement.classList.toggle('body2')
    headerElement.classList.toggle('header2')
    footerElement.classList.toggle('footer2')
    titleElement.classList.toggle('white')
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
        darklightElement.src = "images/dark_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
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

imageElement.addEventListener("mouseenter",function(){
    image.classList.toggle('whiteborder')
})

imageElement.addEventListener("mouseleave",function(){
    image.classList.toggle('whiteborder')
})

/*cliqueElement.addEventListener("mouseenter",function(){
    imageElement.classList.toggle('rotation')

})


cliqueElement.addEventListener("mouseleave",function(){
    imageElement.classList.toggle('rotation')

})




function getbigger(a) {
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener("mouseenter", function () {
            a[i].classList.add("bigc")
        })

        a[i].addEventListener("mouseleave", function () {
            a[i].classList.remove("bigc")
        })
    }
}


let a=[witch,hog,canon,fut,valk,bdf,iceg,log]


getbigger(a)




 

witchElement.addEventListener("mouseleave",function(){
    this.classList.toggle('bigc')
})


*/
/*

title.addEventListener("mouseenter",function(){
    title.innerHTML="TCG PAS LA !"
    this.classList.toggle('red')

})

title.addEventListener("mouseleave",function(){
    title.innerHTML="TCG EST LA !"
    this.classList.toggle('red')

})*/


