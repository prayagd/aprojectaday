let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")

let computerChoice = ["rock", "paper", "scissor"]

rock.addEventListener("click", function(){
    let choice = computerChoice[Math.floor(Math.random() * 3)]
    console.log(choice)
    
    if(choice == "rock"){
        console.log("Its a tie")
    }
    else if(choice == "paper"){
        console.log("You lose")
    }
    else if(choice == "scissor"){
        console.log("You Win")
    }
})

paper.addEventListener("click", function(){
    let choice = computerChoice[Math.floor(Math.random() * 3)]
    console.log(choice)
    if(choice == "rock"){
        console.log("You Win")
    }
    else if(choice == "paper"){
        console.log("Its a Tie")
    }
    else if(choice == "scissor"){
        console.log("You Lose")
    }
})

scissor.addEventListener("click", function(){
    let choice = computerChoice[Math.floor(Math.random() * 3)]
    console.log(choice)
    if(choice == "rock"){
        console.log("You Lose")
    }
    else if(choice == "paper"){
        console.log("You Win")
    }
    else if(choice == "scissor"){
        console.log("Its a Tie")
    }
})