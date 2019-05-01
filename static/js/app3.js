var approvalObject = approvals;
var recordNo = 0;

console.log(approvalObject[recordNo]);

var insertForm = d3.select("tbody");

function showRecord(record){
    for (var [ key, value ] of Object.entries(record)){
        insertForm.append("tr");
        // TO DO: Modify Cell width for key to give more room to values
        insertForm.append("td").text(key);
        insertForm.append("td").text(value);
    }
};

showRecord(approvalObject[recordNo]);

// Navigation
var prevButton = d3.select("#prev-btn");
var nextButton = d3.select("#next-btn");

prevButton.on("click", function() {
    insertForm.html("");
    recordNo--
    console.log(recordNo)
    showRecord(approvalObject[recordNo]);
});

nextButton.on("click", function() {
    insertForm.html("");
    recordNo++
    console.log(recordNo)
    showRecord(approvalObject[recordNo]);
});

// Approve/ Deny submission and upload
// TO DO: test buttons. need to figure out how to push to external data.js
approvedButton.on("click", function() {
    // push current record/dictionary to data.js
    approvedObj = approvalObject.splice(recordNo,1)
    data.push(approvedObj)
    console.log("pushed record. Records Remaining:" ${approvalObject.length})
    insertForm.html("");
    showRecord(approvalObject[recordNo]);
});
rejectedButton.on("click", function() {
    // push current record/dictionary to data.js
    rejectedObj = approvalObject.splice(recordNo,1)
    console.log("removed record. Records Remaining:" ${approvalObject.length})
    insertForm.html("");
    showRecord(approvalObject[recordNo]);
});

// // Reset button new entry form on submit.html
// var resetButton2 = d3.select("#resetSubmit-btn");

// resetButton2.on("click", function() {
//     // document.getElementsByClassName("form-control").innerHTML = "";
//     "#ddlState option:first".attr("selected", true).style.color = c;
// });
