let hover = document.getElementById("hover")


hover.addEventListener("mouseover", function(){
    let title = "How Dare You?"
    this.setAttribute("tooltip", title)
    let toolTip = document.createElement("div")
    toolTip.className = "tooltip"
    toolTip.appendChild(document.createTextNode(title))
    let firstChild = document.body.firstChild
    firstChild.parentNode.insertBefore(toolTip, firstChild)
    let padding = 7.5
    let linkPosition = this.getBoundingClientRect();
    let tooltipPos = toolTip.getBoundingClientRect();
    let topPos = linkPosition.top - (tooltipPos.height +  padding)
    toolTip.setAttribute("style", "top:" + topPos + "px;")
})

hover.addEventListener("mouseout", function(){
    document.querySelector(".tooltip").remove();
})


let toolTip = document.createElement("div")
toolTip.className = "tooltip"