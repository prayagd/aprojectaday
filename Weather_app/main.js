let city = document.getElementById("city")
let currTemp = document.getElementById("curTemp")


fetch("http://ip-api.com/json/")
    .then(res => res.json())
    .then(function(val){
        console.log(val.city)
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${val.city}&appid=1e0fc29e0fdb259f1f179ec2c4675092&units=metric`)
            .then(res => res.json())
            .then(function(res){
                console.log(res)
                city.textContent = res.name
                currTemp.textContent = Math.floor(res.main.temp) + "°"
            })
    })

    


