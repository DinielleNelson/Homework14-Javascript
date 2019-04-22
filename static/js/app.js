// from data.js
var tableData = data;
table_section = d3.select("tbody")

// YOUR CODE HERE!

tableData.forEach(function(print){
    console.log(print.city)
});

tableData.forEach(function (Sighting){
    // possible if statement to add only new entries
    // dict_value1 = dict.map(row => row.city)
    row_fill = table_section.append("tr")
    row_fill.append("td").text(Sighting.datetime)
    row_fill.append("td").text(Sighting.city)
    row_fill.append("td").text(Sighting.state)
    row_fill.append("td").text(Sighting.county)
    row_fill.append("td").text(Sighting.shape)
    row_fill.append("td").text(Sighting.durationMinutes)
    row_fill.append("td").text(Sighting.comments)



    // create row which equals one dictionary
    // row_fill = d3.select("tbody").append("row")

    // // get cell value from first dictionary
    // dict_value1 = tableData.map(row => row.datetime)
    // console.log(dict_value1)
    // dict_value2 = dict_entry.map(row => row.city)
    // dict_value3 = dict_entry.map(row => row.state)
    // dict_value4 = dict_entry.map(row => row.country)
    // dict_value5 = dict_entry.map(row => row.shape)
    // dict_value6 = dict_entry.map(row => row.durationMinutes)
    // dict_value7 = dict_entry.map(row => row.comments)

    // // cycle through dictionary
    // row_fill.append("td").text(dict_value1)
    // row_fill.append("td").text(dict_value2)
    // row_fill.append("td").text(dict_value3)
    // row_fill.append("td").text(dict_value4)
    // row_fill.append("td").text(dict_value5)
    // row_fill.append("td").text(dict_value6)
    // row_fill.append("td").text(dict_value7)
});

// run function
// return addSighting(tableData){
     