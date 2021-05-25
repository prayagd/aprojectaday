let base = document.getElementById("base")
let target = document.getElementById("target")
let baseTime = document.getElementById("baseTime")
let targetTime = document.getElementById("targetTime")

let baseDate = ""

base.addEventListener("change", function(){
    fetch(`https://timezone.abstractapi.com/v1/current_time?api_key=e80759bb2b3b4eedbbbeb1d34792c8a7&location=${base.value}`)
    .then(res => res.json())
    .then(res => {
        baseDate = res.datetime
        baseTime.textContent = baseDate
    })
    .then(() => console.log(baseDate))
})

target.addEventListener("change", function(){
    fetch(`https://timezone.abstractapi.com/v1/convert_time?api_key=e80759bb2b3b4eedbbbeb1d34792c8a7&base_location=Pune,India&base_datetime=${baseDate}&target_location=${target.value}`)
    .then(res => res.json())
    .then(res => targetTime.textContent = res.target_location.datetime)
})



