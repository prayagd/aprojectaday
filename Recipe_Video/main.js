let generator = document.getElementById("generator")
let video = document.getElementById("video")
let gif = document.getElementById("gif")
let title = document.getElementById("title")


generator.addEventListener("click", function(){
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(function(res){
        title.textContent = res.meals[0].strMeal
        gif.hidden = true;
        generator.textContent = "Next Recipe"
        video.removeAttribute("hidden")
        video.setAttribute("src", `https://www.youtube.com/embed/${res.meals[0].strYoutube.slice(-11)}`)
    })
})


