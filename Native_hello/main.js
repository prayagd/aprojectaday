let hello = document.getElementById("hello")
let nameValue = document.getElementById("name")

nameValue.addEventListener("change", function(){
    fetch("http://ip-api.com/json/")
    .then(res => res.json())
    .then(function(val){
       fetch(`https://fourtonfish.com/hellosalut/?cc=${val.countryCode}`)
            .then(res => res.json())
            .then(function(res){
                hello.hidden = false
                hello.innerHTML = res.hello + ", " + nameValue.value
                nameValue.hidden = true
                hello.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
            })
    })
})

