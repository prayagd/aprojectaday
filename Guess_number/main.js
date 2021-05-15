let start = document.getElementById("start")
let guess = document.getElementById("guess")
let again = document.getElementById("again")


let onChange = guestimate()

function guestimate(){
    let counter = 4
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber)
    return function(){
        if(counter != 0){
            if(guess.value == randomNumber){
                console.log("You Win")
                again.hidden = false
            }
            else if(guess.value < randomNumber){
                console.log(`Your number is greater than ${guess.value}`)
                counter--
            }
            else if(guess.value > randomNumber){
                console.log(`Your number is less than ${guess.value}`)
                counter--
            }
        }
        else{
            console.log(`You Lose. The number is ${guess.value}`)
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

