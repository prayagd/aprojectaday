
let value = []

function reset(){
    fetch("https://raw.githubusercontent.com/prayagd/Knock_knock_jokes/main/joke.json")
    .then(res => res.json())
    .then(function(res){
        value = res.data[Math.floor(Math.random() * 100)]
    })
    .then(() => console.log(value))
    setup.textContent = "Knock Knock"
    generator.textContent = "Who's There?"
}

let setup = document.getElementById("setup")
let generator = document.getElementById("generator")



let onClick = firstPart()

function firstPart(){
    let counter = 0;
    return function(){
        let jokeArray = value.split("\n")
        if(counter == 0){
            setup.textContent = jokeArray[2]
            generator.textContent = jokeArray[3]
           counter++
        }
        else if(counter == 1){
            setup.textContent = jokeArray[4]
            generator.textContent = "HaHaHaHaHaHaHaHa"
            counter++
        }
        else{
            counter = 0
            reset()
        }

    }
}

generator.addEventListener("click", onClick)
reset()



