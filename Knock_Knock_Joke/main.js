


let setup = document.getElementById("setup")
let generator = document.getElementById("generator")


generator.addEventListener("click", firstPart)


function firstPart(){
    fetch("https://raw.githubusercontent.com/prayagd/Knock_knock_jokes/main/joke.json")
    .then(res => res.json())
    .then(function(res){
        let jokeString = res.data[Math.floor(Math.random() * 101)]
        let jokeArray = jokeString.split("\n")
        setup.textContent = jokeArray[2]
        generator.textContent = jokeArray[3]
    })
}



