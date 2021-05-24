let count = document.getElementById("count")
let date = new Date()
let date1 = new Date("December 1, 2019")
let value = date - date1

let day = 1000 * 60 * 60 * 24
let days = Math.floor(value/day)
let months = Math.floor(days/31)
let years = 0

if(months > 12){
    years++
    months = months - 12
}
 
count.textContent = `${years} year and ${months} months`

