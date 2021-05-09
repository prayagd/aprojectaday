let ticker = document.getElementById("ticker")
ticker.addEventListener("change", function(val){
    let tickerVal = val.target.value.toUpperCase()
    val.target.value = ""
    console.log(tickerVal)
    axios.get("https://api.twelvedata.com/stocks", {
        params: {
            symbol: tickerVal
        }
    })
         .then(function(response){
             let stockName = response.data.data[0].name
             document.getElementById("stock").textContent = stockName
         })
})