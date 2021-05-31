let dice = document.getElementById("dice")
let user = document.getElementById("user")
let opponent = document.getElementById("opponent")
let count = 0
let again = document.getElementById("again")

let dice1 = [1, 2, 3, 4, 5, 6]
let dice2 = [1, 2, 3, 4, 5, 6]

function rolledDice(){
    let rolled1 = dice1[Math.floor(Math.random() * 6)]
    let rolled2 = dice2[Math.floor(Math.random() * 6)]
    console.log(rolled1, rolled2)
    if(count == 0){
        user.textContent = `You rolled ${rolled1} and ${rolled2}`
        count++
    }
    else if(count == 1){
        opponent.textContent = `Opponent rolled ${rolled1} and ${rolled2}`
        again.hidden = false
    }
}

dice.addEventListener("click", rolledDice)


again.addEventListener("click", function(){
    window.location.reload()
})