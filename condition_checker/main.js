let ops = document.getElementById("ops")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let check = document.getElementById("check")

function compareString(){
    console.log(input2.value)
    console.log(input1.value)
    if(input1.value.length == 0 || input2.value.length == 0 ){
        console.log("One field incomplete")
    }
}

input1.addEventListener("change", function(val){
    compareString()
})

input2.addEventListener("change", function(val){
    compareString()
})

check.addEventListener("click", function(val){
    compareString()
})


