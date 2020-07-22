const form = document.forms[0]
const headings = [ "fname", "lname", "address", "age", "gender", "interest"]
form.addEventListener('submit', (event)=> {
    event.preventDefault()
    var formdata = new FormData(form)
    createComp(formdata)
})

createComp = (formdata) => {
    var table = document.getElementsByTagName("table")[0]
    var newRow = table.insertRow(table.rows.length)
    for(var i=0; i<table.rows[0].cells.length; i++) {
        if(headings[i]==="interest") {
            var interestChecked=""
            for(var j=0; j<4; j++) {
                if(formdata.get("interest"+j)!==null) {
                    interestChecked+=formdata.get("interest"+j)+"<br>"
                }
            } 
            newRow.insertCell(i).innerHTML = interestChecked
        }
        else if(headings[i]==="address") {
            newRow.insertCell(i).innerHTML = formdata.get('address').replace(/\r?\n/g, "<br>")
        }    
        else {
            newRow.insertCell(i).innerHTML = formdata.get(headings[i])
        }
    }
    console.log(formdata.get("interest"))
}