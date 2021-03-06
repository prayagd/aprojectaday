let rounds = ["β οΈπ«", "π₯Άπ«", "π₯Άπ«", "π₯Άπ«", "π₯Άπ«", "π₯Άπ«"]
let win = ["π₯³"]
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
        if(round == "β οΈπ«"){
            emoji.textContent = "β οΈπ«"
            game.textContent = "You Lose π’"
            start.textContent = "Play Again"
            start.style.backgroundColor = "red"
            count = 1
        }
        else if(count != 5 && round == "π₯Άπ«"){
            emoji.textContent = "π₯Άπ«"
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
