<<<<<<< HEAD
document.addEventListener('submit', (event)=> {
    event.preventDefault()
    var formData = event.target.elements
    console.log(formData.interest)
    //createComp(formData)
})

createComp = (formdata) => {
    var table = document.getElementsByTagName("table")[0]
    var newRow = table.insertRow(table.rows.length)
    for(var i=0; i<table.rows[0].cells.length; i++) {
        if(headings[i]==="interest") {
            var interestChecked=""
            for(var j=0; j<4; j++) {
                if(formdata.get("interest"+j)!==null) {
                    interestChecked+=formdata.get("interest"+j)+"<br />"
                }
            } 
            newRow.insertCell(i).innerHTML = interestChecked
        }
        else if(headings[i]==="address") {
            newRow.insertCell(i).innerHTML = formdata.get('address').replace(/\r?\n/g, "<br />")
        }    
        else {
            newRow.insertCell(i).innerHTML = formdata.get(headings[i])
        }
    }
}
=======
var form = document.getElementById("form");
form.addEventListener('submit', (event)=> {
    event.preventDefault()
    var interests=""
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("genderSelect").value;
    var interest = document.getElementsByName("interest");
    for(var i=0; i<interest.length; i++) {
        if(interest[i].checked) {
            interests+=interest[i].value+' ';
        }
    }


    document.getElementById("resfname").innerHTML = "First Name: "+ fname;
    document.getElementById("reslname").innerHTML = "Last Name: "+ lname;
    document.getElementById("resaddress").innerHTML = "Address: "+ address;
    document.getElementById("resage").innerHTML = "Age: "+ age;
    document.getElementById("resgender").innerHTML = "Gender: "+ gender;
    document.getElementById("resinterest").innerHTML = "Interest: "+ interests;
})
>>>>>>> parent of 45c2214... UI changes and added functions
