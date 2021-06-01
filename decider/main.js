let options = document.getElementById("options")
let count = 3


options.addEventListener("change", function(){
    let optionArr = options.value.split(",")
    let newOptions = []
    while(count > 0){
        let randomValue = optionArr[Math.floor(Math.random() * optionArr.length)]
        if(!newOptions.includes(randomValue)){
            newOptions.push(randomValue)
            count--
        }
    }
    console.log(newOptions)
    options.value = ""
})