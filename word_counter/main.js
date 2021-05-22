let text = document.getElementById("text")
let count = document.getElementById("count")

count.addEventListener("click", function(val){
    let words = text.value.split(" ")
    console.log(words)
})
