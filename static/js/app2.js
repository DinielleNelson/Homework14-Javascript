// New entry submit button on submit.html
var submitButton2 = d3.select("#submitNew-btn");

submitButton2.on("click", function() {
    // TO DO: Send data to variable
    // Write function that asks for approval 
    // make available for edits
    // Then appends data to original data.js
});

// Reset button new entry form on submit.html
var resetButton2 = d3.select("#resetSubmit-btn");

resetButton2.on("click", function() {
    // document.getElementsByClassName("form-control").innerHTML = "";
    "#ddlState option:first".attr("selected", true).style.color = c;
});

// SELF BONUS:: A form to enter new sightings which update the table upon enter
// When adding new entries, remember to append to the original data set
