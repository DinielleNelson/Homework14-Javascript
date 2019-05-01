var approvalObject = approvals;
console.log(approvalObject);
console.log(approvals);

var submitButton2 = d3.select("#submitNew-btn");

submitButton2.on("click", function() {
    d3.event.preventDefault();

    var date = document.getElementById("date");
    var city = document.getElementById("city");
    var state = document.getElementById("ddlState");
    var country = document.getElementById("ddlCountry");
    var shape = document.getElementById("ddlshape");
    var otherShape = document.getElementById("othershape");
    var duration = document.getElementById("duration");
    var comment = document.getElementById("comments");
    
    // TO DO: changes are showing in console but not persisting to approvals.js file
    approvalObject.push({
    date: date.value,
    city: city.value,
    state: state.value,
    country: country.value,
    duration: duration.value,
    comment: comment.value,
    });
    
    console.log(approvalObject);
    console.log(approvals);

    alert("Thank you for your submission! It will be reviewed within 2-4 weeks");
    // TO DO: Reset fields
    // document.getElementsByClassName("form-control").innerHTML = "";
});



// Reset button new entry form on submit.html
var resetButton2 = d3.select("#resetSubmit-btn");

resetButton2.on("click", function() {
    // document.getElementsByClassName("form-control").innerHTML = "";
    "#ddlState option:first".attr("selected", true).style.color = c;
});
