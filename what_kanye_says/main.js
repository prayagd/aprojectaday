let quote = document.getElementById("quote")

fetch("https://api.kanye.rest")
    .then(res => res.json())
    .then(function(res){
        quote.textContent = '"' + res.quote + '"'
    })