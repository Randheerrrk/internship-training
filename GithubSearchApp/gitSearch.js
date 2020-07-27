var form;
const per_page = 20;
var pageNo = 1;

document.addEventListener('submit', (event) => {
    event.preventDefault()
    pageNo = 1
    form = event.target
    return fetchData(form)
})

document.addEventListener('click', (event) => {
    if(event.target.id==="prev_page") {
        pageNo-=1
        fetchData(form)
    }
    else if(event.target.id==="next_page") {
        pageNo+=1
        fetchData(form)
    }
})


const fetchData = async (form) => {
    let resultDiv = document.getElementById("result")
    if(form.elements.searchVal.value!="") {
        let result = await (await fetch(`${form.action}${form.elements.searchVal.value}&page=${pageNo}&per_page=${per_page}`)).json()
        let items = result.items

        while(resultDiv.firstChild) {
            resultDiv.firstChild.remove()
        }

        items.map((item, index) => {

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

            resultDiv.appendChild(childCard)
        })

        let pageDiv = document.createElement("div")
        pageDiv.id = "pageDiv"

        let prev_page = document.createElement("a")
        prev_page.innerHTML = "&laquo;"
        prev_page.id = "prev_page"
        prev_page.href = "#"
        if(pageNo===1) {
            prev_page.style.visibility = "hidden";
        }

        let page_no = document.createElement('p')
        page_no.innerHTML = pageNo
        page_no.id = "page_no"

        let next_page = document.createElement("a")
        next_page.innerHTML = "&raquo;"
        next_page.id = "next_page"
        next_page.href = "#"
        if(items.length<per_page) {
            next_page.style.visibility = "hidden";
        }

        let pageList = document.getElementById("pageList")
        while(pageList.firstChild) {
            pageList.firstChild.remove()
        }
        pageDiv.appendChild(prev_page)
        pageDiv.appendChild(page_no)
        pageDiv.appendChild(next_page)
        pageList.appendChild(pageDiv)
    }
    else {
        while(resultDiv.firstChild) {
            resultDiv.firstChild.remove()
        }

        var p = document.createElement("p")
        p.innerHTML = "Enter a name..."
        p.id = "noValue"
        resultDiv.appendChild(p)
    }
}






