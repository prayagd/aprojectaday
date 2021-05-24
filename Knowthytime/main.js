let base = document.getElementById("base")
let target = document.getElementById("target")

let baseDate = ""

base.addEventListener("change", function(){
    fetch(`https://timezone.abstractapi.com/v1/current_time?api_key=e80759bb2b3b4eedbbbeb1d34792c8a7&location=${base.value}`)
    .then(res => res.json())
    .then(res => baseDate = res.datetime)
    .then(() => console.log(baseDate))
})

target.addEventListener("change", function(){
    fetch(`https://timezone.abstractapi.com/v1/convert_time?api_key=e80759bb2b3b4eedbbbeb1d34792c8a7&location=Pune,India&base_datetime=${baseDate}&target_location=Oxford,United Kingdom`)
    .then(res => res.json())
    .then(res => console.log(res))
})



