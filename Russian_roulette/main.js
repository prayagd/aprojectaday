let rounds = ["☠️🔫", "🥶🔫", "🥶🔫", "🥶🔫", "🥶🔫", "🥶🔫"]
let win = ["🥳"]
let start = document.getElementById("start")
let game = document.getElementById("game")
let emoji = document.getElementById("emoji")
let title = document.getElementById("title")

function reset(){
    game.textContent = "Play russian roulette"
    start.textContent = "Start"
}

let onClick = calculate()

function calculate(){
    let count = 1
    return function(){
        let round = rounds[Math.floor(Math.random() * rounds.length)]
        title.removeAttribute("hidden")
        if(round == "☠️🔫"){
            emoji.textContent = "☠️🔫"
            game.textContent = "You Lose 😢"
            start.textContent = "Play Again"
            start.style.backgroundColor = "red"
            count = 1
        }
        else if(count != 5 && round == "🥶🔫"){
            emoji.textContent = "🥶🔫"
            game.textContent = `You win round ${count}`
            start.textContent = "Continue"
            start.style.backgroundColor = "orange"
            count++
        }
        else if(count == 5){
            emoji.textContent = win[0]
            game.textContent = "You Win"
            start.textContent = "Play Again"
            start.style.backgroundColor = "green"
            count = 1
        }
    }
}

start.addEventListener("click", onClick)
