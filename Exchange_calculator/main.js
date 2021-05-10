let baseSelect = document.getElementById("base")
let quoteSelect = document.getElementById("quote")
let toCurrencyInput = document.getElementById("toCurrency")
let fromCurrencyInput = document.getElementById("fromCurrency")
let rateIndicator = document.getElementById("rate")

fetch("https://api.twelvedata.com/forex_pairs")
    .then(res => res.json())
    .then(function(response){
        let currency = response.data
        let currencyCheckArray = ["INR", "EUR"]
        currency.map(function(val){
           let opt = document.createElement("option");
           let opt1 = document.createElement("option")
           if(!currencyCheckArray.includes(val.symbol.slice(0, val.symbol.indexOf("/")))){
               opt.value = val.symbol.slice(0, val.symbol.indexOf("/"))
               opt.innerHTML = val.symbol.slice(0, val.symbol.indexOf("/"))
               currencyCheckArray.push(val.symbol.slice(0, val.symbol.indexOf("/")))
               baseSelect.appendChild(opt);
               opt1.value = val.symbol.slice(0, val.symbol.indexOf("/"))
               opt1.innerHTML = val.symbol.slice(0, val.symbol.indexOf("/"))
               quoteSelect.appendChild(opt1)
           }
        })
    })


baseSelect.addEventListener("change", calculate)
quoteSelect.addEventListener("change", calculate)
toCurrencyInput.addEventListener("input", calculate)
fromCurrencyInput.addEventListener("input", calculate)

function calculate(){
    let toCurrency = baseSelect.value
    let fromCurrency = quoteSelect.value
    axios.get("https://api.twelvedata.com/exchange_rate", {
        params: {
            symbol: `${toCurrency}/${fromCurrency}`,
            apikey: "d810bad9cf8c4cc3a1ab40cd81269dfa"
        }
    })
     .then(function(response){
        rate = response.data.rate
        rateIndicator.innerHTML = `1 ${toCurrency} = ${rate} ${fromCurrency}`
        fromCurrencyInput.value = (toCurrencyInput.value * rate).toFixed(2)
     })

}


calculate()



