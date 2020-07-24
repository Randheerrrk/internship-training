document.addEventListener('submit', (event) => {
    event.preventDefault()
    var form = event.target
    return fetchData(form)
})

const fetchData = async (form) => {
    let result = await (await fetch(`${form.action}${form.elements.searchVal.value}`)).json()
    let items = result.items
    let resultDiv = document.getElementById("result")
    while(resultDiv.firstChild) {
        resultDiv.firstChild.remove()
    }
    let child = document.createElement("div")
    console.log(items.length)
    items.map((item, index) => {
        var child = document.createElement("div")
        child.className = "column"
        var childCard = document.createElement("div")
        childCard.className = "card"
        let img = document.createElement("img")
        img.src = item.avatar_url
        childCard.appendChild(img)
        var h4 = document.createElement("h4")
        h4.innerHTML = item.login
        childCard.appendChild(h4)
        var a = document.createElement("a")
        a.href = item.html_url
        a.innerHTML = "view profile"
        childCard.appendChild(a)
        child.appendChild(childCard)
        resultDiv.appendChild(child)
    })
}
