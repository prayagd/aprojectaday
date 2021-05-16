let averageGas = document.getElementById("average")
let fastGas = document.getElementById("fast")
let fastestGas = document.getElementById("fastest")
let avgTime = document.getElementById("avgtime")
let fastTime = document.getElementById("fastime")
let fastestTime = document.getElementById("fastestime")


fetch("https://ethgasstation.info/api/ethgasAPI.json?api-key=fc4ce28fa0fd0b51adf127eb4a89041f668c90eb0f033c8aaefd01277cd8")
     .then(res => res.json())
     .then(function(res){
         averageGas.textContent = res.average/10 + " gwei"
         fastGas.textContent = res.fast/10 + " gwei"
         fastestGas.textContent = res.fastest/10 + " gwei"
         avgTime.textContent = res.avgWait + " minutes"
         fastTime.textContent = res.fastWait + " minutes"
         fastestTime.textContent = res.fastestWait + " minutes"
     })