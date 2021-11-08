let test = true

document.getElementById("menu-mobile").addEventListener("click", () => {

    if(test){
        document.getElementById("hamburgue-1").classList.add("hamburguer-activated-1")
        document.getElementById("hamburgue-2").classList.add("hamburguer-activated-2")
        document.getElementById("hamburgue-3").classList.add("hamburguer-activated-3")
        
        test = false
    }else{
        document.getElementById("hamburgue-1").classList.remove("hamburguer-activated-1")
        document.getElementById("hamburgue-2").classList.remove("hamburguer-activated-2")
        document.getElementById("hamburgue-3").classList.remove("hamburguer-activated-3")    

        test= true
    }
})