let theme = document.getElementById("theme")
theme.addEventListener("click", function(){
    if(document.body.style.backgroundColor == "black"){
        document.body.style.backgroundColor = "white"
    }
    else{
        document.body.style.backgroundColor = "black"
    }
    
})