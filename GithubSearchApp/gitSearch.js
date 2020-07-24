document.addEventListener('submit', (event) => {
    event.preventDefault()
    var form = event.target
    return fetchData(form)
})

const per_page = 20;
const pageNo = 1;

const fetchData = async (form) => {
    let result = await (await fetch(`${form.action}${form.elements.searchVal.value}&page=${pageNo}&per_page=${per_page}`)).json()
    let items = result.items
    let resultDiv = document.getElementById("result")
    while(resultDiv.firstChild) {
        resultDiv.firstChild.remove()
    }
    let uL = document.createElement('ul')
    items.map((item, index) => {
        var li = document.createElement('li')
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
        li.appendChild(childCard)
        uL.appendChild(li)
    })
    resultDiv.appendChild(uL)
}
