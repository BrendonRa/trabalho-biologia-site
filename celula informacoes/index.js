const celAnimal = document.getElementById("cel-animal")

const imgOrga = document.getElementById("organelas")

let clique = 0

const imgDes = () => {
    celAnimal.src = "imgs/celula_des.png"
    if (window.innerHeight >= 720 && window.innerWidth >= 1280) {
        celAnimal.style.width = "90%"
        celAnimal.style.height = "80%"
    } else if (window.innerHeight >= 480 && window.innerWidth >= 320) {
        celAnimal.style.width = "120%"
        celAnimal.style.height = "40%"
    } else {
        celAnimal.style.width = "120%"
        celAnimal.style.height = "40%"
    }
}

const imgCel = () => {
    celAnimal.src = "imgs/Célula.png"
    celAnimal.style.width = "400px"
    celAnimal.style.height = "290px"
}

celAnimal.addEventListener("click", function () {
    if (clique === 0) {
        clique = 1
        imgDes()
    } else {
        clique = 0
        imgCel()
    }
})

const organelas = (img) => {
    imgOrga.src = img
    if (window.innerHeight >= 720 && window.innerWidth >= 1280) {
        imgOrga.style.width = "90%"
        imgOrga.style.height = "80%"
    } else if (window.innerHeight >= 480 && window.innerWidth >= 320) {
        imgOrga.style.width = "120%"
        imgOrga.style.height = "40%"
    } else {
        imgOrga.style.width = "120%"
        imgOrga.style.height = "40%"
    }
}