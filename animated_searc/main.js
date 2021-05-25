let button = document.getElementById("button")
let search = document.getElementById("search")

button.addEventListener("click", function(){
    search.classList.toggle("incWidth")
    button.classList.toggle("clicked")
    
})

