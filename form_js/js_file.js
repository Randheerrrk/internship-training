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
