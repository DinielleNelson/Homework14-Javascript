var approvalObject = approvals;
console.log(approvalObject);

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
    
    approvalObject.push({
    date: date.value,
    city: city.value,
    state: state.value,
    country: country.value,
    duration: duration.value,
    comment: comment.value,
    });
    
    console.log(approvalObject);
});



// Reset button new entry form on submit.html
var resetButton2 = d3.select("#resetSubmit-btn");

resetButton2.on("click", function() {
    // document.getElementsByClassName("form-control").innerHTML = "";
    "#ddlState option:first".attr("selected", true).style.color = c;
});
