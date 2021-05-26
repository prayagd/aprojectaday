let tInput = document.getElementById("tInput")
let tMinus = document.getElementById("tMinus")
let tAdd = document.getElementById("tAdd")
let jMinus = document.getElementById("jMinus")
let jAdd = document.getElementById("jAdd")
let sMinus = document.getElementById("sMinus")
let sAdd = document.getElementById("sAdd")
let prices = Array.from(document.getElementsByClassName("price"))
let total = 0 

prices.forEach(function(val){
    total += Number(val.textContent.slice(1))
})

console.log(total)

function calculatePrice(price, input){
    if(price.id == "tshirtPrice"){
        price.textContent = "$" + input.value * 50
    }
    if(price.id == "jeansPrice"){
        price.textContent = "$" + input.value * 100
    }
    if(price.id == "socksPrice"){
        price.textContent = "$" + input.value * 10
    }
}


function minus(res){
    let inputQuantity = res.target.nextElementSibling
    let price = inputQuantity.nextElementSibling.nextElementSibling
    if(inputQuantity.value > 0){
        inputQuantity.value--
        calculatePrice(price, inputQuantity)
    }
}

function add(res){
    let inputQuantity = res.target.previousElementSibling
    let price = res.target.nextElementSibling
    inputQuantity.value++
    calculatePrice(price, inputQuantity)
}

tMinus.addEventListener("click", minus)
tAdd.addEventListener("click", add)
jMinus.addEventListener("click", minus)
jAdd.addEventListener("click", add)
sMinus.addEventListener("click", minus)
sAdd.addEventListener("click", add)