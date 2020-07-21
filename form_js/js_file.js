 
function onSubmit() {
    var fname;
    var lname;
    var age;
    var address;
    var gender;
    var interest;
    var interests = "";

    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    address = document.getElementById("address").value;
    age = document.getElementById("age").value;
    gender = document.getElementById("genderSelect").value;
    interest = document.getElementsByName("interest");
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
}
