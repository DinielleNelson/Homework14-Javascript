// // from data.js
// var tableData1 = data; 

// Maintain a copy of the data so that modifications are not made to the existing data
var tableData = data.map(dict => dict);

var table_section = d3.select("tbody");


// Create function to be used again elsewhere
function populateTable(Sighting){


    // possible if statement to add only new entries
    row_fill = table_section.append("tr")
    row_fill.append("td").text(Sighting.datetime)
    row_fill.append("td").text(Sighting.city)
    row_fill.append("td").text(Sighting.state)
    row_fill.append("td").text(Sighting.county)
    row_fill.append("td").text(Sighting.shape)
    row_fill.append("td").text(Sighting.durationMinutes)
    row_fill.append("td").text(Sighting.comments)
};

// 1. * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and 
// then adds new rows of data for each UFO sighting

tableData.forEach(populateTable);

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to 
// find rows that match user input.

// TO DO  Reset button

var submitButton = d3.select("#filter-btn");

submitButton.on("click", function() {
    d3.event.preventDefault();
  
    var inputValue1 = d3.select("#datetime").property("value");
    var inputValue2 = d3.select("#city").property("value");
    var inputValue3 = d3.select("#state").property("value");
    var inputValue4 = d3.select("#country").property("value");
    var inputValue5 = d3.select("#shape").property("value");

    // clear all previous table data entries
    d3.select("tbody>td").remove();
    d3.select("tbody>tr").remove();

    filteredTable = tableData.filter(each => 
        (each.datetime === inputValue1 || each.datetime === null )&&
        // each.city === inputValue2 &&
        // each.state === inputValue3 &&
        // each.country === inputValue4 &&
        (each.shape === inputValue5 || each.shape === null) );
    // test that search is working
    console.log(filteredTable);

    // return the data back to the table/html
    filteredTable.forEach(populateTable);

});

// SELF BONUS:: A form to enter new sightings which update the table upon enter
// When adding new entries, remember to append to the original data set
