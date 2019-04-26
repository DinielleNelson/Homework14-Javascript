// // from data.js
// var tableData1 = data; 

// Maintain a copy of the data so that modifications are not made to the existing data
var tableData = data.map(dict => dict);

var table_section = d3.select("tbody");

// 1. * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and 
// then adds new rows of data for each UFO sighting


// Create function to be used again elsewhere
function populateTable(Sighting){

    // possible if statement to add only new entries
    row_fill = table_section.append("tr")
    row_fill.append("td").text(Sighting.datetime)
    row_fill.append("td").text(Sighting.city)
    row_fill.append("td").text(Sighting.state)
    row_fill.append("td").text(Sighting.country)
    row_fill.append("td").text(Sighting.shape)
    row_fill.append("td").text(Sighting.durationMinutes)
    row_fill.append("td").text(Sighting.comments)
};

tableData.forEach(populateTable);






// 2: (Optional) * Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters
// and search for UFO sightings using the following criteria based on the table columns

// Filter functions and button event
var submitButton = d3.select("#filter-btn");

submitButton.on("click", function() {
    d3.event.preventDefault();
  
    // TO DO: allow more than one way to enter a date or give error
    var inputValue1 = d3.select("#date").property("value");
    // modify to lower case
    var inputValue2 = d3.select("#city").property("value").toLowerCase();
    var inputValue3 = d3.select("#ddlState").property("value");
    var inputValue4 = d3.select("#ddlCountry").property("value");
    var inputValue5 = d3.select("#shape").property("value");

    // Search for first field
    if (inputValue1 !== ""){
        filteredTable = tableData.filter(each => each.datetime === inputValue1)
    }
    else {
        filteredTable = tableData
    };
    // Search for second field
    if (inputValue2 !== ""){
        filteredTable = filteredTable.filter(each => each.city === inputValue2)
    }
    else {
        filteredTable = filteredTable
    };
    // Search for third field
    if (inputValue3 !== ""){
        filteredTable = filteredTable.filter(each => each.state === inputValue3)
    }
    else {
        filteredTable = filteredTable
    };
    // Search for fourth field
    if (inputValue4 !== ""){
        filteredTable = filteredTable.filter(each => each.country === inputValue4)
    }
    else {
        filteredTable = filteredTable
    };
    // Search for fifth field
    if (inputValue5 !== ""){
        filteredTable = filteredTable.filter(each => each.shape === inputValue5)
    }
    else {
        filteredTable = filteredTable
    };

    // test that search is working
    console.log(filteredTable);
    
    table_section.html("");
    
    // return the data back to the table/html
    filteredTable.forEach(populateTable);

});


// Reset button
var resetButton = d3.select("#reset-btn");

resetButton.on("click", function() {
    d3.event.preventDefault();
    table_section.html("");
    tableData.forEach(populateTable);
});

// New entry redirect on index.html
var submitButton = d3.select("#submit-btn");

submitButton.on("click", function() {
    window.location = "submit.html";
});

// SELF BONUS:: A form to enter new sightings which update the table upon enter
// When adding new entries, remember to append to the original data set
