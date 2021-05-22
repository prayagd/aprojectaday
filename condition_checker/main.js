let ops = document.getElementById("ops")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let check = document.getElementById("check")
let result = document.getElementById("result")



check.addEventListener("click", function(val){
    if(input1.value.length == 0 || input2.value.length == 0 ){
        result.textContent = "Fields incomplete"
    }
    else{
        if(ops.value == "=="){
            result.textContent = input1.value == input2.value
        }
        else if(ops.value == "==="){
            result.textContent = input1.value === input2.value
        }
        else if(ops.value == "!="){
            result.textContent = input1.value != input2.value
        }
        else if(ops.value == "!=="){
            result.textContent = input1.value !== input2.value
        }
        
    }
})


