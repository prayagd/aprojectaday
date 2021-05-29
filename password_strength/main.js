let mail = document.getElementById("mail")
let pass = document.getElementById("pass")

pass.addEventListener("change", function(){
    let length = pass.value.length
    let blurValue = 20 - length * 2
    document.body.style.filter = `blur(${blurValue}px)`
})