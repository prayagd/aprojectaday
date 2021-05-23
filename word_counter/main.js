let text = document.getElementById("text")
let count = document.getElementById("count")
let tableDiv = document.getElementById("table_div")
let headers = ["Rank", "Word", "Count"]

function addTable(header, sortedWords){
    let table = document.createElement("table")

    let tr = document.createElement("tr")
    table.appendChild(tr)
    header.map((value) => {
        let th = document.createElement("th")
        th.appendChild(document.createTextNode(value))
        tr.appendChild(th)
    })

    sortedWords.map((value) => {
        let tr = document.createElement("tr")
        value.map((val) => {
            let td = document.createElement("td")
            td.appendChild(document.createTextNode(val))
            tr.appendChild(td)
        })
        table.appendChild(tr)
    })

    tableDiv.appendChild(table)
}

function countWords(){
    let words = text.value.toLowerCase().split(" ")
    let obj = {}
    words.forEach((val) => obj.hasOwnProperty(val) ? obj[val] = obj[val] + 1 : obj[val] = 1)
    let arr = Object.entries(obj)
            .sort((a, b) => b[1] - a[1])
            .map((val, index) => [index + 1, val[0], val[1]])
    addTable(headers, arr)
}

count.addEventListener("click", countWords)


