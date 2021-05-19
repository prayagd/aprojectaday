let count = document.getElementById("count")

fetch("https://api.countapi.xyz/update/default/countmoney?amount=1")
    .then(res => res.json())
    .then(function(res){
        count.textContent = res.value
    })