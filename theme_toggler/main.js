let dark = document.getElementById("dark")
let light = document.getElementById("light")
let cont = document.getElementById("cont")

dark.addEventListener("click", function(){
    document.body.style.backgroundColor = "black"
    cont.style.backgroundColor = "white"
    dark.hidden = true;
    light.hidden = false;
})

light.addEventListener("click", function(){
    document.body.style.backgroundColor = "white"
    cont.style.backgroundColor = "black"
    dark.hidden = false;
    light.hidden = true;
})
