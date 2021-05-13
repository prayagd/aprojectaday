let search = document.getElementById("search")
let description = document.getElementById("description")

search.addEventListener("change", onChange)

function onChange(){
    fetch(`https://api.coingecko.com/api/v3/coins/${search.value}`)
    .then(res => res.json())
    .then(function(res) {
        search.value = ""
        let newInnerHtml = 
        `<div>
            <img src = "${res.image.small}"></img>
            <h1>${res.name}(${res.symbol})</h1>
            <h2>Price:- $${res.market_data.current_price.usd}</h2>
            <p>${res.description.en}</p>
            <a href = "${res.links.homepage[0]}" target = "blank">Know more</a>
        </div>`
        description.innerHTML = newInnerHtml
    })
}



