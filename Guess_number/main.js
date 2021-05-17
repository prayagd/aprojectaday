let start = document.getElementById("start")
let guess = document.getElementById("guess")
let again = document.getElementById("again")
let desc = document.getElementById("desc")


let onChange = guestimate()

function guestimate(){
    let counter = 5
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber)
    return function(){
        if(counter > 0){
            console.log(counter)
            if(guess.value == randomNumber){
                desc.textContent = "You Win 🥳"
                again.hidden = false
            }
            else if(guess.value < randomNumber){
                desc.textContent = `Your number is greater than ${guess.value}. You have ${counter} attempts`
                counter--
            }
            else if(guess.value > randomNumber){
                desc.textContent = `Your number is less than ${guess.value}. You have ${counter} attempts`
                counter--
            }
        }
        else{
            desc.textContent = `You Lose 😢. The number is ${guess.value}`
            again.hidden = false
        }
        guess.value = ""
    }
}

start.addEventListener("click", function(){
    guess.hidden = false
    start.hidden = true
})

guess.addEventListener("change", onChange)

again.addEventListener("click", function(){
    window.location.reload()
})

